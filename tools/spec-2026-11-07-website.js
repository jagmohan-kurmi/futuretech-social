// Buffer spec for 7 Nov 2026 service post (2 PM IST = 08:30 UTC). Usage: node spec-2026-11-07-website.js -> writes spec-2026-11-07-website.json
const fs = require('fs'); const path = require('path');
const D = path.join(__dirname, '..', 'posts', '2026-11-07_Website_WhatsApp_Order') + '/';
const T = fs.readFileSync(D + 'Captions.txt', 'utf8');
const cap = label => T.split(label)[1].split('-'.repeat(50))[1].split('='.repeat(50))[0].trim();
const alt = T.match(/Alt text \(all sizes\): (.+)/)[1].trim();
const spec = { dueAt: '2026-11-07T08:30:00.000Z', posts: [
  { service: 'instagram', files: [D + 'Instagram_1080x1350.png'], remotePrefix: 'ft-2026-11-07-website-ig', alt: [alt], text: cap('INSTAGRAM ('), metadata: { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: false } } },
  { service: 'facebook', files: [D + 'Facebook_1200x1200.png'], remotePrefix: 'ft-2026-11-07-website-fb', alt: [alt], text: cap('FACEBOOK ('), metadata: { facebook: { type: 'post' } } },
  { service: 'googlebusiness', files: [D + 'GBP_1200x900.png'], remotePrefix: 'ft-2026-11-07-website-gbp', alt: [alt], text: cap('Learn more ->'), metadata: { google: { type: 'whats_new', detailsWhatsNew: { button: 'learn_more', link: 'https://futuretechdigitalmarketingagency.com/?utm_source=gbp&utm_campaign=p03' } } } },
] };
fs.writeFileSync(path.join(__dirname, 'spec-2026-11-07-website.json'), JSON.stringify(spec, null, 1));
spec.posts.forEach(p => console.log(p.service, p.text.length, '|', p.text.replace(/\n/g, ' ').slice(0, 100)));
