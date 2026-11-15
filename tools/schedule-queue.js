// Schedules queued posts (non-video) on Buffer whenever the free plan has a free slot (max 10 scheduled per channel).
// Usage: node tools/schedule-queue.js [--dry]   State: posts/QUEUE_STATE.json (done folders). Never re-uploads existing files.
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const env = require('./env'); const ROOT = path.join(__dirname, '..'); const SITE = 'https://futuretechdigitalmarketingagency.com';
const QUEUE = ['2026-12-10_Infographic_WebApp_Modules', '2026-12-11_Myth_Budget_Leads', '2026-12-14_Infographic_Gym_Fayde', '2026-12-15_Website_Kyu_Zaruri', '2026-12-17_Domain_vs_Hosting', '2026-12-18_Myth_Boost_Button', '2026-12-22_Google_Business_Profile_Kaise_Banayein', '2026-12-24_WhatsApp_Business_Ke_6_Features', '2026-12-29_Reviews_Kaise_Badhayein_Aur_Jawab_Dein', '2027-01-05_Website_5_Minute_Check', '2027-01-07_Notebook_Se_Software_Tak_Udhaar_Billing', '2027-01-12_Local_SEO_30_Din_Checklist', '2027-01-14_Ads_Shuru_Karne_Se_Pehle_7_Sawal', '2027-01-19_Salon_Restaurant_Digital_Marketing_Plan'];
const STATE = path.join(ROOT, 'posts', 'QUEUE_STATE.json'); const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : { done: [] };
const dry = process.argv.includes('--dry'); const KEY = env('BUFFER_API_KEY');
const gql = async (query, variables = {}) => (await (await fetch('https://api.buffer.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY }, body: JSON.stringify({ query, variables }) })).json());
const remote = (p, f, i) => `${p.remotePrefix}-${String(i + 1).padStart(2, '0')}${path.extname(f).toLowerCase()}`;
(async () => {
  const org = (await gql('query { account { organizations { id } } }')).data?.account?.organizations?.[0]; if (!org) { console.log('BUFFER AUTH FAILED'); process.exit(2); }
  const r = await gql('query($o:OrganizationId!){ posts(input:{organizationId:$o,filter:{status:[scheduled]}},first:100){ edges{ node{ channelService } } } }', { o: org.id });
  const cnt = {}; r.data.posts.edges.forEach(e => { const c = e.node.channelService; cnt[c] = (cnt[c] || 0) + 1; });
  const used = Math.max(0, ...['instagram', 'facebook', 'googlebusiness'].map(c => cnt[c] || 0)); let free = 10 - used;
  console.log('scheduled per channel:', JSON.stringify(cnt), '| free slots:', free);
  const out = [];
  for (const f of QUEUE) {
    if (state.done.includes(f)) continue; if (free <= 0) break;
    const dir = path.join(ROOT, 'posts', f); const specFile = path.join(dir, 'spec.json'); if (!fs.existsSync(specFile)) { console.log('no spec', f); continue; }
    const spec = JSON.parse(fs.readFileSync(specFile, 'utf8')); if (new Date(spec.dueAt) < new Date(Date.now() + 3600e3)) { console.log('SKIP (due time too close/past)', f); state.done.push(f); continue; }
    if (dry) { console.log('WOULD schedule', f, spec.dueAt); free--; continue; }
    const upload = require('./upload');
    for (const p of spec.posts) for (const [i, file] of p.files.entries()) { const name = remote(p, file, i); const head = await fetch(`${SITE}/social/${name}`, { method: 'HEAD' }); if (head.status !== 200) { console.log('upload', name, await upload(file, name)); } }
    let ok = true;
    for (const p of spec.posts) {
      const chans = (await gql('query($o:OrganizationId!){ channels(input:{organizationId:$o}){ id service } }', { o: org.id })).data.channels; const ch = chans.find(c => c.service === p.service); if (!ch) { console.log('NO CHANNEL', p.service); ok = false; continue; }
      const assets = p.files.map((file, i) => ({ image: { url: `${SITE}/social/${remote(p, file, i)}`, metadata: { altText: p.alt[Math.min(i, p.alt.length - 1)] } } }));
      const d = await gql(`mutation($i:CreatePostInput!){ createPost(input:$i){ __typename ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }`, { i: { channelId: ch.id, text: p.text, assets, mode: 'customScheduled', dueAt: spec.dueAt, schedulingType: 'automatic', needsApproval: false, metadata: p.metadata } });
      console.log(p.service, JSON.stringify(d.data?.createPost || d.errors).slice(0, 150)); if (d.data?.createPost?.__typename !== 'PostActionSuccess') ok = false;
    }
    if (ok) { state.done.push(f); out.push(f); free--; fs.writeFileSync(STATE, JSON.stringify(state, null, 1)); } else { console.log('STOP: partial/failed', f); break; }
  }
  console.log('NEWLY SCHEDULED:', JSON.stringify(out)); console.log('REMAINING IN QUEUE:', QUEUE.filter(f => !state.done.includes(f)).length);
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
