// Upload post-1 images to /social via FTP and schedule on Buffer. Usage: node post1-schedule.js [upload|schedule] [minutesFromNow]
const { execFileSync } = require('child_process'); const fs = require('fs');
const env = require('./env');
const SRC = require('path').join(__dirname, '..', 'posts', '2026-11-03_Diwali_Google_Ready') + '/';
const SITE = 'https://futuretechdigitalmarketingagency.com';
const FILES = { instagram: ['Instagram_Post_1080x1350.png', 'ft-2026-11-02-diwali-google-ready-ig.png'], facebook: ['Facebook_Post_1200x1200.png', 'ft-2026-11-02-diwali-google-ready-fb.png'], googlebusiness: ['GBP_Image_1200x900.png', 'ft-2026-11-02-diwali-google-ready-gbp.png'] };
const url = svc => `${SITE}/social/${FILES[svc][1]}`;
const ALT = 'FutureTech Diwali tip graphic in Hindi: Diwali mein 5 din baaki, Google par dukaan taiyaar hai? Checklist: Diwali special timing daalein, date ke saath offer post lagaayein, dukaan ki nayi photos daalein. FutureTech Digital Marketing Agency, Sagar.';

const TEXT = {
  instagram: `Diwali mein sirf 5 din baaki 🪔 Customer shopping se pehle Google par "near me" search karta hai — kya wahan aapki dukaan sahi timing ke saath dikh rahi hai?

Aaj hi ye 3 kaam karein 👇
1️⃣ Google Business Profile mein Diwali ki special timing daalein
2️⃣ Offer post lagaayein — start aur end date ke saath
3️⃣ Dukaan ki nayi photos daalein (decoration, stock, team)

Setup mein madad chahiye? WhatsApp karein 📲 79742 17411

Post save karein aur apne dukaandar doston ko bhejein 🙏

#DiwaliBusiness #GoogleBusinessProfile #SagarMP #LocalSEO #SmallBusinessIndia`,
  facebook: `Sagar ke dukaandaron ke liye Diwali tip 🪔

Diwali mein sirf 5 din baaki hain. Kya Google par aapki dukaan ki timing aur offer update hai?

✅ Special Diwali timing
✅ Offer post (date ke saath)
✅ Dukaan ki nayi photos

Madad chahiye to WhatsApp karein: 79742 17411
— FutureTech Digital Marketing Agency, Sagar
🌐 futuretechdigitalmarketingagency.com

#DiwaliBusiness #SagarMP`,
  googlebusiness: `Diwali mein 5 din baaki — kya Google par aapki dukaan taiyaar hai?

Customer "near me" search karke hi dukaan chunta hai. Aaj hi 3 kaam karein: Diwali ki special timing daalein, date ke saath offer post lagaayein, aur dukaan ki nayi photos upload karein.

Google Business Profile setup mein madad ke liye FutureTech, Sagar se sampark karein.`,
};
const META = {
  instagram: { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: false } },
  facebook: { facebook: { type: 'post' } },
  googlebusiness: { google: { type: 'whats_new', detailsWhatsNew: { button: 'learn_more', link: SITE } } },
};

const KEY = env('BUFFER_API_KEY');
const gql = async (query, variables = {}) => { const j = await (await fetch('https://api.buffer.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY }, body: JSON.stringify({ query, variables }) })).json(); if (j.errors) throw new Error(JSON.stringify(j.errors)); return j.data; };

(async () => {
  const [mode, mins = '5', only, at] = process.argv.slice(2);
  if (mode === 'upload') {
    const host = env('FT_FTP_HOST'), user = env('FT_FTP_USER'), pass = env('FT_FTP_PASS');
    for (const svc in FILES) {
      execFileSync(process.platform === 'win32' ? 'curl.exe' : 'curl', ['-s', '--ftp-create-dirs', '-T', SRC + FILES[svc][0], '-u', `${user}:${pass}`, `ftp://${host}/social/${FILES[svc][1]}`]);
      const r = await fetch(url(svc), { method: 'HEAD' }); console.log(svc, r.status, r.headers.get('content-type'), r.headers.get('content-length'), url(svc));
    }
    return;
  }
  if (mode === 'schedule') {
    const org = (await gql('query { account { organizations { id } } }')).account.organizations[0];
    const chans = (await gql('query($o:OrganizationId!){ channels(input:{organizationId:$o}){ id service displayName } }', { o: org.id })).channels;
    const dueAt = at || new Date(Date.now() + (+mins) * 60000).toISOString();
    for (const svc of (only ? only.split(',') : ['instagram', 'facebook', 'googlebusiness'])) {
      const ch = chans.find(c => c.service === svc); if (!ch) { console.log('NO CHANNEL', svc); continue; }
      const input = { channelId: ch.id, text: TEXT[svc], assets: [{ image: { url: url(svc), metadata: { altText: ALT } } }], mode: 'customScheduled', dueAt, schedulingType: 'automatic', needsApproval: false, metadata: META[svc] };
      const d = await gql(`mutation($i:CreatePostInput!){ createPost(input:$i){ __typename ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }`, { i: input });
      console.log(svc, ch.displayName, JSON.stringify(d.createPost));
    }
  }
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
