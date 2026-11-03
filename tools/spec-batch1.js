// Buffer specs for 4 Nov WhatsApp-orders tip (2 PM IST) and 6 Nov Dhanteras greeting (8 AM IST)
const fs = require('fs');
const R = 'C:/Users/75098/Documents/FutureTech_Social/';
const cap = (dir, label) => { const t = fs.readFileSync(R + dir + '/Captions.txt', 'utf8'); return t.split(label)[1].split('-'.repeat(50))[1].split('='.repeat(50))[0].trim(); };

const A = '2026-11-04_WhatsApp_Orders_Tip', B = '2026-11-06_Dhanteras';
const altA = 'FutureTech Hindi tip graphic: Diwali ke orders WhatsApp par — 3 aasaan tareeke: catalogue mein products, quick reply set karein, status par roz naya offer. WhatsApp chat ka flat illustration.';
const altB = 'Shubh Dhanteras greeting by FutureTech: flat illustration of a kalash with two diyas, text "Aapke ghar aur vyapar mein sukh, samriddhi aur barkat bani rahe — FutureTech parivaar".';

const tip = { dueAt: '2026-11-04T08:30:00.000Z', posts: [
  { service: 'instagram', files: [R + A + '/Instagram_1080x1350.png'], remotePrefix: 'ft-2026-11-04-whatsapp-tip-ig', alt: [altA], text: cap(A, 'INSTAGRAM'), metadata: { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: false } } },
  { service: 'facebook', files: [R + A + '/Facebook_1200x1200.png'], remotePrefix: 'ft-2026-11-04-whatsapp-tip-fb', alt: [altA], text: cap(A, 'FACEBOOK'), metadata: { facebook: { type: 'post' } } },
  { service: 'googlebusiness', files: [R + A + '/GBP_1200x900.png'], remotePrefix: 'ft-2026-11-04-whatsapp-tip-gbp', alt: [altA], text: cap(A, 'Learn more ->'), metadata: { google: { type: 'whats_new', detailsWhatsNew: { button: 'learn_more', link: 'https://futuretechdigitalmarketingagency.com/?utm_source=gbp&utm_campaign=p02' } } } },
] };
const dhan = { dueAt: '2026-11-06T02:30:00.000Z', posts: [
  { service: 'instagram', files: [R + B + '/Instagram_1080x1350.png'], remotePrefix: 'ft-2026-11-06-dhanteras-ig', alt: [altB], text: cap(B, 'INSTAGRAM'), metadata: { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: false } } },
  { service: 'facebook', files: [R + B + '/Facebook_1200x1200.png'], remotePrefix: 'ft-2026-11-06-dhanteras-fb', alt: [altB], text: cap(B, 'FACEBOOK'), metadata: { facebook: { type: 'post' } } },
  { service: 'googlebusiness', files: [R + B + '/GBP_1200x900.png'], remotePrefix: 'ft-2026-11-06-dhanteras-gbp', alt: [altB], text: cap(B, 'no button'), metadata: { google: { type: 'whats_new' } } },
] };
fs.writeFileSync(__dirname + '/spec-tip.json', JSON.stringify(tip, null, 1));
fs.writeFileSync(__dirname + '/spec-dhan.json', JSON.stringify(dhan, null, 1));
for (const s of [tip, dhan]) s.posts.forEach(p => console.log(s.dueAt, p.service, '|', p.text.replace(/\n/g, ' ').slice(0, 90), '…', p.text.length));
