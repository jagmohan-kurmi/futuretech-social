// Buffer spec: "Ads budget waste" 5-slide carousel, 11 Nov 2026 2:00 PM IST = 08:30 UTC
const fs = require('fs');
const D = require('path').join(__dirname, '..', 'posts', '2026-11-19_Ads_Budget_Carousel') + '/';
const n = i => String(i).padStart(2, '0'); const L = '='.repeat(50), S = '-'.repeat(50);
const txt = fs.readFileSync(D + 'Captions.txt', 'utf8');
const sec = k => txt.split(k)[1].split(S)[1].split(L)[0].trim();
const ig = sec('INSTAGRAM (').split('\nALT TEXT')[0].trim(); const fb = sec('FACEBOOK ('); const gbp = txt.split('Learn more ->')[1].split(S)[1].trim();
const SL = ['Funnel: ad budget leaks through galat audience, kamzor page, follow-up nahi aur tracking nahi', 'Kaaran 1: galat audience ko ad dikh rahi hai', 'Kaaran 2: kamzor page, uljha page versus saaf page with WhatsApp button', 'Kaaran 3: follow-up aur tracking nahi', 'Ads se pehle ye 3 cheezein theek karein. WhatsApp 79742 17411'];
const alt = SL.map((s, i) => `FutureTech Hindi carousel slide ${i + 1} of 5. ${s}.`);
const R = [1, 2, 3, 4, 5];
const spec = { dueAt: '2026-11-11T08:30:00.000Z', posts: [
  { service: 'instagram', files: R.map(i => D + `IG_${n(i)}_1080x1350.png`), remotePrefix: 'ft-2026-11-11-ads-ig', alt, text: ig, metadata: { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: false } } },
  { service: 'facebook', files: R.map(i => D + `FB_${n(i)}_1080x1080.png`), remotePrefix: 'ft-2026-11-11-ads-fb', alt, text: fb, metadata: { facebook: { type: 'post' } } },
  { service: 'googlebusiness', files: [D + 'GBP_1200x900.png'], remotePrefix: 'ft-2026-11-11-ads-gbp', alt: ['FutureTech graphic in Hindi: ads chal rahi hain par budget waste ho raha hai. Funnel dikhata hai galat audience, kamzor page, follow-up aur tracking ki kami.'], text: gbp, metadata: { google: { type: 'whats_new', detailsWhatsNew: { button: 'learn_more', link: 'https://futuretechdigitalmarketingagency.com/?utm_source=gbp&utm_campaign=p07' } } } },
] };
fs.writeFileSync(__dirname + '/spec-ads-carousel.json', JSON.stringify(spec, null, 1));
spec.posts.forEach(p => console.log(p.service, p.files.length, 'files |', p.text.slice(0, 50).replace(/\n/g, ' '), p.text.length));
