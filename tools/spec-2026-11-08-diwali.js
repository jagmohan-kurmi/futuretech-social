// Buffer spec for 8 Nov 2026 Diwali greeting (8 AM IST = 02:30 UTC). Usage: node spec-2026-11-08-diwali.js -> writes spec-2026-11-08-diwali.json
const fs = require('fs'); const path = require('path');
const D = path.join(__dirname, '..', 'posts', '2026-11-08_Diwali_Greeting') + '/';
const T = fs.readFileSync(D + 'Captions.txt', 'utf8');
const cap = label => T.split(label)[1].split('-'.repeat(50))[1].split('='.repeat(50))[0].trim();
const alt = T.match(/Alt text \(all sizes\): (.+)/)[1].trim();
const spec = { dueAt: '2026-11-08T02:30:00.000Z', posts: [
  { service: 'instagram', files: [D + 'Instagram_1080x1350.png'], remotePrefix: 'ft-2026-11-08-diwali-ig', alt: [alt], text: cap('INSTAGRAM ('), metadata: { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: false } } },
  { service: 'facebook', files: [D + 'Facebook_1200x1200.png'], remotePrefix: 'ft-2026-11-08-diwali-fb', alt: [alt], text: cap('FACEBOOK ('), metadata: { facebook: { type: 'post' } } },
  { service: 'googlebusiness', files: [D + 'GBP_1200x900.png'], remotePrefix: 'ft-2026-11-08-diwali-gbp', alt: [alt], text: cap('no button'), metadata: { google: { type: 'whats_new' } } },
] };
fs.writeFileSync(path.join(__dirname, 'spec-2026-11-08-diwali.json'), JSON.stringify(spec, null, 1));
spec.posts.forEach(p => console.log(p.service, p.text.length, '|', p.text.replace(/\n/g, ' ')));
