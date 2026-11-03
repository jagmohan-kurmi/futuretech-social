// Generic: upload a post's images to /social (HTTPS gate, see upload.js) and schedule on Buffer from a JSON spec. Usage: node post-schedule.js spec.json [upload|schedule]
// spec: { dueAt, posts: [{ service, files:[local paths], remotePrefix, alt:[...], text, metadata }] }
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const env = require('./env');
const SITE = 'https://futuretechdigitalmarketingagency.com';
const [specFile, mode] = process.argv.slice(2);
const spec = JSON.parse(fs.readFileSync(specFile, 'utf8'));
const remote = (p, f, i) => `${p.remotePrefix}-${String(i + 1).padStart(2, '0')}${path.extname(f).toLowerCase()}`;

(async () => {
  if (mode === 'upload') {
    const upload = require('./upload');
    for (const p of spec.posts) for (const [i, f] of p.files.entries()) console.log(p.service, await upload(f, remote(p, f, i)));
    return;
  }
  if (mode === 'schedule') {
    const KEY = env('BUFFER_API_KEY');
    const gql = async (query, variables = {}) => { const j = await (await fetch('https://api.buffer.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY }, body: JSON.stringify({ query, variables }) })).json(); if (j.errors) throw new Error(JSON.stringify(j.errors)); return j.data; };
    const org = (await gql('query { account { organizations { id } } }')).account.organizations[0];
    const chans = (await gql('query($o:OrganizationId!){ channels(input:{organizationId:$o}){ id service displayName } }', { o: org.id })).channels;
    for (const p of spec.posts) {
      const ch = chans.find(c => c.service === p.service); if (!ch) { console.log('NO CHANNEL', p.service); continue; }
      const assets = p.files.map((f, i) => ({ image: { url: `${SITE}/social/${remote(p, f, i)}`, metadata: { altText: p.alt[Math.min(i, p.alt.length - 1)] } } }));
      const input = { channelId: ch.id, text: p.text, assets, mode: 'customScheduled', dueAt: spec.dueAt, schedulingType: 'automatic', needsApproval: false, metadata: p.metadata };
      const d = await gql(`mutation($i:CreatePostInput!){ createPost(input:$i){ __typename ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }`, { i: input });
      console.log(p.service, ch.displayName, JSON.stringify(d.createPost));
    }
  }
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
