// Upload + schedule the 8 Nov Diwali wishes Reel (IG + FB reel) and the static GBP greeting. Usage: node reel-2026-11-08-diwali-schedule.js [upload|schedule] [ISO dueAt UTC]
const fs = require('fs'); const path = require('path');
const env = require('./env');
const SITE = 'https://futuretechdigitalmarketingagency.com';
const R = path.join(__dirname, '..', 'posts', '2026-11-08_Diwali_Wishes_Reel') + '/';
const G = path.join(__dirname, '..', 'posts', '2026-11-08_Diwali_Greeting') + '/';
const FILES = {
  video: [R + 'Reel_Diwali_Wishes_1080x1920.mp4', 'ft-2026-11-08-diwali-wishes-reel.mp4'],
  gbp: [G + 'GBP_1200x900.png', 'ft-2026-11-08-diwali-greeting-gbp.png'],
};
const url = k => `${SITE}/social/${FILES[k][1]}`;
const T = fs.readFileSync(R + 'Captions.txt', 'utf8');
const cap = label => T.split(label)[1].split('-'.repeat(50))[1].split('='.repeat(50))[0].trim();
const ALT_GBP = 'Shubh Deepawali greeting by FutureTech: flat illustration of a rangoli above three lit diyas, text "Aapke ghar aur vyapar mein roshni, khushiyan aur tarakki bani rahe — FutureTech parivaar".';

(async () => {
  const [mode, dueAt] = process.argv.slice(2);
  if (mode === 'upload') {
    const upload = require('./upload');
    for (const k in FILES) console.log(k, await upload(FILES[k][0], FILES[k][1]));
    return;
  }
  if (mode === 'schedule') {
    if (!dueAt) throw new Error('dueAt required');
    const KEY = env('BUFFER_API_KEY');
    const gql = async (query, variables = {}) => { const j = await (await fetch('https://api.buffer.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY }, body: JSON.stringify({ query, variables }) })).json(); if (j.errors) throw new Error(JSON.stringify(j.errors)); return j.data; };
    const org = (await gql('query { account { organizations { id } } }')).account.organizations[0];
    const chans = (await gql('query($o:OrganizationId!){ channels(input:{organizationId:$o}){ id service displayName } }', { o: org.id })).channels;
    const posts = [
      { service: 'instagram', text: cap('INSTAGRAM (Reel)'), assets: [{ video: { url: url('video'), metadata: { title: 'Shubh Deepawali', thumbnailOffset: 12000 } } }], metadata: { instagram: { type: 'reel', shouldShareToFeed: true, isAiGenerated: false } } },
      { service: 'facebook', text: cap('FACEBOOK (Reel)'), assets: [{ video: { url: url('video'), metadata: { title: 'Shubh Deepawali' } } }], metadata: { facebook: { type: 'reel' } } },
      { service: 'googlebusiness', text: cap('no button'), assets: [{ image: { url: url('gbp'), metadata: { altText: ALT_GBP } } }], metadata: { google: { type: 'whats_new' } } },
    ];
    for (const p of posts) {
      const ch = chans.find(c => c.service === p.service); if (!ch) { console.log('NO CHANNEL', p.service); continue; }
      const input = { channelId: ch.id, text: p.text, assets: p.assets, mode: 'customScheduled', dueAt, schedulingType: 'automatic', needsApproval: false, metadata: p.metadata };
      const d = await gql(`mutation($i:CreatePostInput!){ createPost(input:$i){ __typename ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }`, { i: input });
      console.log(p.service, ch.displayName, JSON.stringify(d.createPost));
    }
  }
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
