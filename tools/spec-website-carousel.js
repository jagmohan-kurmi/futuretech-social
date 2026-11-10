// Buffer spec for the "Achchi business website ki 5 pehchaan" carousel (10 Nov 2026, 6:00 PM IST = 12:30 UTC)
const fs = require('fs');
const D = require('path').join(__dirname, '..', 'posts', '2026-11-10_Good_Website_Carousel') + '/';
const n = i => String(i).padStart(2, '0'); const L = '='.repeat(50), S = '-'.repeat(50);
const txt = fs.readFileSync(D + 'Captions.txt', 'utf8');
const sec = k => txt.split(k)[1].split(S)[1].split(L)[0].trim();
const ig = sec('INSTAGRAM (').split('\nALT TEXT:')[0].trim();
const fb = sec('FACEBOOK (');
const gbp = txt.split('Learn more ->')[1].split(S)[1].trim();
const SL = ['Cover: achchi business website ki 5 pehchaan', 'Pehchaan 1: phone par tez khule', 'Pehchaan 2: pehli nazar mein saaf bataye — kya, kiske liye, kahan', 'Pehchaan 3: WhatsApp aur Call ek tap par', 'Pehchaan 4: Google par mile — sahi title aur description', 'Pehchaan 5: asli address, photos aur contact', 'Website jaanch ke liye WhatsApp 79742 17411. Save karein, dost ko bhejein'];
const alt = SL.map((s, i) => `FutureTech Hindi carousel slide ${i + 1} of 7. ${s}.`);
const R = [1, 2, 3, 4, 5, 6, 7];
const spec = { dueAt: '2026-11-10T12:30:00.000Z', posts: [
  { service: 'instagram', files: R.map(i => D + `IG_${n(i)}_1080x1350.png`), remotePrefix: 'ft-2026-11-10-website-ig', alt, text: ig, metadata: { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: false } } },
  { service: 'facebook', files: R.map(i => D + `FB_${n(i)}_1080x1080.png`), remotePrefix: 'ft-2026-11-10-website-fb', alt, text: fb, metadata: { facebook: { type: 'post' } } },
  { service: 'googlebusiness', files: [D + 'GBP_1200x900.png'], remotePrefix: 'ft-2026-11-10-website-gbp', alt: ['FutureTech graphic in Hindi: achchi business website ki 5 pehchaan — tez, saaf message, WhatsApp/Call button, Google par dikhe, asli address aur contact.'], text: gbp, metadata: { google: { type: 'whats_new', detailsWhatsNew: { button: 'learn_more', link: 'https://futuretechdigitalmarketingagency.com/?utm_source=gbp&utm_campaign=p04' } } } },
] };
fs.writeFileSync(__dirname + '/spec-website-carousel.json', JSON.stringify(spec, null, 1));
spec.posts.forEach(p => console.log(p.service, p.files.length, 'files |', p.text.slice(0, 60).replace(/\n/g, ' '), '…', p.text.length));
