// Batch 1 statics: 4 Nov WhatsApp-orders tip + 6 Nov Dhanteras greeting, each in IG 1080x1350, FB 1200x1200, GBP 1200x900. Usage: node batch1.js
const fs = require('fs'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const ROOT = require('path').join(__dirname, '..', 'posts') + '/';
const LOGO = 'data:image/png;base64,' + fs.readFileSync(K + 'FutureTech_Logo_Transparent.png').toString('base64');
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';
const I = (d, c = '#0060A8', w = 2) => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const IC = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  reply: '<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 6 6v4"/>',
  status: '<circle cx="12" cy="12" r="9" stroke-dasharray="4 3"/><circle cx="12" cy="12" r="4"/>',
};
const DIYA = `<svg viewBox="0 0 120 110" class="diya"><path d="M60 6c11 15 13 26 0 39C47 32 49 21 60 6z" fill="#F5A623"/><path d="M60 20c5 7 6 12 0 18-6-6-5-11 0-18z" fill="#FFD66B"/><path d="M8 58h104c-5 26-25 40-52 40S13 84 8 58z" fill="#0060A8"/><rect x="4" y="54" width="112" height="8" rx="4" fill="#041030"/></svg>`;
const KALASH = `<svg viewBox="0 0 200 220" class="kalash"><path d="M100 18c-6 10-22 14-22 28h44c0-14-16-18-22-28z" fill="#22C55E"/><path d="M70 46c-12 8-30 4-38 14 18 6 30 0 38-8zM130 46c12 8 30 4 38 14-18 6-30 0-38-8z" fill="#16A34A"/><circle cx="100" cy="40" r="16" fill="#F5A623"/><rect x="72" y="58" width="56" height="16" rx="6" fill="#041030"/><path d="M76 74h48c30 18 42 46 34 76-8 30-38 46-58 46s-50-16-58-46c-8-30 4-58 34-76z" fill="#0060A8"/><path d="M52 128h96" stroke="#FFC94D" stroke-width="10"/><path d="M60 150h80" stroke="#FFC94D" stroke-width="5" stroke-dasharray="2 10" stroke-linecap="round"/><rect x="64" y="196" width="72" height="14" rx="7" fill="#041030"/></svg>`;
const chat = `<div class="chat"><div class="ch"><i></i><div><b>Aapki Dukaan</b><small>Business account</small></div></div><div class="bub in">Namaste, Diwali ke liye kya naya hai?</div><div class="bub out">Namaste! Naya stock aa gaya hai — catalogue dekhiye</div><div class="cat"><span style="background:#FFE7A8"></span><span style="background:#BFE3F7"></span><span style="background:#F9D0CF"></span></div></div>`;

const BASE = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB;overflow:hidden;position:relative}
.hi{font-family:Mukta,sans-serif}.logo{height:62px;display:block}
.tag{font-size:22px;font-weight:600;color:#0060A8;border:2px solid #0060A8;border-radius:40px;padding:8px 20px;font-family:Mukta}
h1{font-family:Mukta;font-weight:800;line-height:1.08;letter-spacing:-.5px;position:relative;z-index:0}
.blue{color:#0060A8}.mk{background:linear-gradient(transparent 72%,#FFC94D 72%,#FFC94D 90%,transparent 90%);padding:0 6px}.grn{color:#16A34A}
.foot{position:absolute;left:0;right:0;bottom:0;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between}
.wa{display:flex;align-items:center;gap:14px;font-weight:700}.wa i{width:16px;height:16px;border-radius:50%;background:#22C55E;display:inline-block}.web{color:#9BE3FB;font-weight:500}
.list{background:#fff;border:2px solid #E1E7EF;border-radius:24px}.it{display:flex;align-items:center;gap:24px}.it+.it{border-top:2px dashed #E1E7EF}
.ib{flex:0 0 auto;border-radius:16px;background:#EEF5FC;display:flex;align-items:center;justify-content:center}
.h{font-family:Mukta;font-weight:700;line-height:1.15}.s{color:#5F6B7A;font-weight:500;font-family:Mukta}
.chat{background:#EFE7DC;border-radius:26px;border:2px solid #E1E7EF;overflow:hidden}
.ch{display:flex;gap:12px;align-items:center;background:#0B6E4F;color:#fff;padding:14px 18px}.ch i{width:44px;height:44px;border-radius:50%;background:#FFC94D;display:block}.ch b{display:block;font-size:20px}.ch small{font-size:15px;opacity:.85}
.bub{margin:12px 16px;padding:12px 16px;border-radius:14px;font-size:19px;max-width:82%;line-height:1.3}.in{background:#fff}.out{background:#D9FDD3;margin-left:auto}
.cat{display:flex;gap:10px;margin:0 16px 16px auto;width:82%}.cat span{flex:1;height:70px;border-radius:10px}
.diya,.kalash{display:block}`;
const page = (w, h, css, body) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${BASE}body{width:${w}px;height:${h}px}${css}</style></head><body>${body}</body></html>`;
const ITEMS = [[IC.grid, 'Catalogue में products डालें', 'Photo, price, details — customer खुद देख ले'], [IC.reply, 'Quick reply सेट करें', '“/” दबाकर तैयार जवाब — timing, address, delivery'], [IC.status, 'Status पर रोज़ नया offer', 'जिन्होंने आपका नंबर save किया है, वो देखते हैं']];
const list = (sz, sub = true) => `<div class="list" style="padding:${sz.lp}px 34px">${ITEMS.map(([ic, h, s]) => `<div class="it" style="padding:${sz.ip}px 0"><div class="ib" style="width:${sz.ib}px;height:${sz.ib}px">${I(ic, '#0060A8', 2).replace('class="ico"', `class="ico" width="${sz.ib * .55}" height="${sz.ib * .55}"`)}</div><div><div class="h" style="font-size:${sz.h}px">${h}</div>${sub ? `<div class="s" style="font-size:${sz.s}px;margin-top:2px">${s}</div>` : ''}</div></div>`).join('')}</div>`;
const H1 = `<h1>दिवाली के orders<br><span class="mk grn">WhatsApp</span> पर —<br><span class="blue">3 आसान तरीके</span></h1>`;

const TIP = {
  ig: page(1080, 1350, `.top{position:absolute;left:72px;right:72px;top:64px;display:flex;justify-content:space-between;align-items:center}h1{position:absolute;left:72px;top:180px;font-size:88px}.chat{position:absolute;right:72px;top:180px;width:310px}.q{position:absolute;left:72px;top:600px;font-size:32px;color:#5F6B7A;font-family:Mukta;font-weight:600}.lw{position:absolute;left:72px;right:72px;top:670px}.foot{height:120px;padding:0 72px}.wa{font-size:34px}.web{font-size:24px}`,
    `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">Dukaan Digital Tip</span></div>${H1}${chat}<div class="q">WhatsApp Business app (free) में आज ही करें:</div><div class="lw">${list({ lp: 8, ip: 26, ib: 92, h: 44, s: 27 })}</div><div class="foot"><div class="wa"><i></i>WhatsApp 79742 17411</div><div class="web">futuretechdigitalmarketingagency.com</div></div>`),
  fb: page(1200, 1200, `.top{position:absolute;left:80px;right:80px;top:60px;display:flex;justify-content:space-between;align-items:center}h1{position:absolute;left:80px;top:170px;font-size:82px}.chat{position:absolute;right:80px;top:170px;width:330px}.lw{position:absolute;left:80px;right:80px;top:600px}.foot{height:110px;padding:0 80px}.wa{font-size:32px}.web{font-size:24px}`,
    `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">India के दुकानदारों के लिए</span></div>${H1}${chat}<div class="lw">${list({ lp: 6, ip: 22, ib: 84, h: 40, s: 25 })}</div><div class="foot"><div class="wa"><i></i>WhatsApp 79742 17411</div><div class="web">futuretechdigitalmarketingagency.com</div></div>`),
  gbp: page(1200, 900, `.stripe{position:absolute;left:0;top:0;bottom:0;width:16px;background:#00AEEF}.logo{position:absolute;left:80px;top:52px;height:58px}h1{position:absolute;left:80px;top:150px;font-size:66px}.chat{position:absolute;right:80px;top:110px;width:300px}.lw{position:absolute;left:80px;right:80px;top:520px}.foot{height:90px;padding:0 80px}.foot b{font-size:28px}.web{font-size:24px}`,
    `<div class="stripe"></div><img class="logo" src="${LOGO}">${H1}${chat}<div class="lw">${list({ lp: 4, ip: 10, ib: 60, h: 32, s: 22 }, false)}</div><div class="foot"><b>FutureTech Digital Marketing Agency</b><div class="web">futuretechdigitalmarketingagency.com</div></div>`),
};

const GREET = (w, h, s) => page(w, h, `body{background:#FFFDF8}.frame{position:absolute;inset:${s.inset}px;border:3px solid #00AEEF;border-radius:28px}.art{position:absolute;left:50%;top:${s.artTop}px;transform:translateX(-50%);display:flex;align-items:flex-end;gap:${s.gap}px}.kalash{width:${s.k}px}.diya{width:${s.d}px}
h1{position:absolute;left:0;right:0;top:${s.hTop}px;text-align:center;font-size:${s.hs}px}.sub{position:absolute;left:100px;right:100px;top:${s.subTop}px;text-align:center;font-size:${s.ss}px;font-weight:600;color:#5F6B7A;font-family:Mukta;line-height:1.4}
.dots{position:absolute;left:50%;top:${s.dotTop}px;transform:translateX(-50%);display:flex;gap:16px}.dots b{width:13px;height:13px;border-radius:50%;background:#FFC94D}.dots b:nth-child(2n){background:#00AEEF}.lg{position:absolute;left:50%;bottom:${s.lgB}px;transform:translateX(-50%);height:${s.lg}px}`,
  `<div class="frame"></div><div class="art">${DIYA}${KALASH}${DIYA}</div><div class="dots"><b></b><b></b><b></b><b></b><b></b></div><h1>शुभ <span class="mk">धनतेरस</span></h1><div class="sub">आपके घर और व्यापार में सुख, समृद्धि<br>और बरकत बनी रहे।<br><span style="color:#0060A8">— FutureTech परिवार</span></div><img class="lg" src="${LOGO}">`);
const DHAN = {
  ig: GREET(1080, 1350, { inset: 36, artTop: 230, gap: 24, k: 260, d: 130, dotTop: 540, hTop: 590, hs: 140, subTop: 790, ss: 42, lgB: 100, lg: 84 }),
  fb: GREET(1200, 1200, { inset: 36, artTop: 170, gap: 24, k: 240, d: 120, dotTop: 455, hTop: 500, hs: 132, subTop: 690, ss: 40, lgB: 90, lg: 80 }),
  gbp: GREET(1200, 900, { inset: 30, artTop: 90, gap: 20, k: 190, d: 96, dotTop: 330, hTop: 360, hs: 112, subTop: 530, ss: 34, lgB: 60, lg: 64 }),
};

(async () => {
  const br = await require('./browser')();
  const shot = async (html, w, h, file) => { const p = await br.newPage(); await p.setViewport({ width: w, height: h }); await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
    await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'धनतेरस'))); await document.fonts.ready; });
    await p.screenshot({ path: file }); await p.close(); };
  const A = ROOT + '2026-11-04_WhatsApp_Orders_Tip/', B = ROOT + '2026-11-06_Dhanteras/'; fs.mkdirSync(A, { recursive: true }); fs.mkdirSync(B, { recursive: true });
  await shot(TIP.ig, 1080, 1350, A + 'Instagram_1080x1350.png'); await shot(TIP.fb, 1200, 1200, A + 'Facebook_1200x1200.png'); await shot(TIP.gbp, 1200, 900, A + 'GBP_1200x900.png');
  await shot(DHAN.ig, 1080, 1350, B + 'Instagram_1080x1350.png'); await shot(DHAN.fb, 1200, 1200, B + 'Facebook_1200x1200.png'); await shot(DHAN.gbp, 1200, 900, B + 'GBP_1200x900.png');
  await br.close(); console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
