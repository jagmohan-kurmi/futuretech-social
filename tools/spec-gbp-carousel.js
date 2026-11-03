// Builds the Buffer spec JSON for the GBP info carousel (5 Nov 2026, 2 PM IST)
const fs = require('fs');
const D = require('path').join(__dirname, '..', 'posts', '2026-11-05_GBP_Info_Carousel') + '/';
const n = i => String(i).padStart(2, '0');
const SL = ['Cover: Google Business Profile kya hai? Aapki dukaan ko isse kya fayda', 'Kya hai: Google Search aur Maps par dukaan ka free profile — naam, pata, timing, phone, photos, reviews', 'Fayda 1: near me search mein dukaan Maps par dikhti hai', 'Fayda 2: Call, Directions aur Website ek tap mein', 'Fayda 3: Reviews se bharosa, har review ka jawab dein', 'Fayda 4: Offer, photos aur tyohaar ki timing daal sakte hain', 'Shuru kaise karein: profile banayein ya claim karein, verify karein, poori jaankari bharein', 'Setup mein madad: WhatsApp 79742 17411. Save karein, dost ko bhejein'];
const alt = SL.map((s, i) => `FutureTech Hindi carousel slide ${i + 1} of 8. ${s}.`);
const txt = fs.readFileSync(D + 'Captions.txt', 'utf8');
const pick = (start, end) => txt.split(start)[1].split('-'.repeat(50))[1].split(end)[0].trim();
const ig = pick('INSTAGRAM — 8 slides', '=====');
const fb = pick('FACEBOOK — 8 slides', '=====');
const gbp = txt.split('Learn more ->')[1].split('-'.repeat(50))[1].trim();
const spec = { dueAt: '2026-11-05T08:30:00.000Z', posts: [
  { service: 'instagram', files: [1, 2, 3, 4, 5, 6, 7, 8].map(i => D + `IG_${n(i)}_1080x1350.png`), remotePrefix: 'ft-2026-11-05-gbp-info-ig', alt, text: ig, metadata: { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: false } } },
  { service: 'facebook', files: [1, 2, 3, 4, 5, 6, 7, 8].map(i => D + `FB_${n(i)}_1080x1080.png`), remotePrefix: 'ft-2026-11-05-gbp-info-fb', alt, text: fb, metadata: { facebook: { type: 'post' } } },
  { service: 'googlebusiness', files: [D + 'GBP_1200x900.png'], remotePrefix: 'ft-2026-11-05-gbp-info-gbp', alt: ['FutureTech graphic in Hindi: Google Business Profile kya hai — near me search, ek tap mein call aur raasta, reviews se bharosa, offer aur photos.'], text: gbp, metadata: { google: { type: 'whats_new', detailsWhatsNew: { button: 'learn_more', link: 'https://futuretechdigitalmarketingagency.com/?utm_source=gbp&utm_campaign=p01' } } } },
] };
fs.writeFileSync(__dirname + '/spec-gbp-carousel.json', JSON.stringify(spec, null, 1));
spec.posts.forEach(p => console.log(p.service, p.files.length, 'files |', p.text.slice(0, 70).replace(/\n/g, ' '), '…', p.text.length, 'chars'));
