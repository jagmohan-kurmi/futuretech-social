// Tip post: "Achchi business website ki 5 pehchaan" -> IG 1080x1350, FB 1200x1200, GBP 1200x900. Usage: node tools/website-tip-render.js
const fs = require('fs'); const path = require('path');
const LOGO = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '..', 'brand', 'FutureTech_Logo_Transparent.png')).toString('base64');
const OUT = path.join(__dirname, '..', 'posts', '2026-11-11_Good_Website_Tip') + '/';
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';
const IC = {
  phone: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  tap: '<path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
  pin: '<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
};
const ITEMS = [
  [IC.phone, 'Phone par तेज़ खुले', 'देर लगे तो customer दूसरी site पर चला जाता है'],
  [IC.target, 'पहली नज़र में साफ़ बताए', 'आप क्या करते हैं, किसके लिए, कहाँ'],
  [IC.tap, 'WhatsApp / Call एक tap पर', 'Customer को ढूँढना न पड़े'],
  [IC.search, 'Google पर मिले', 'सही title, description और services pages'],
  [IC.pin, 'Asli address, photos, contact', 'भरोसा यहीं से बनता है'],
];
const BASE = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB;overflow:hidden;position:relative}
.logo{height:62px;display:block}.tag{font-size:22px;font-weight:600;color:#0060A8;border:2px solid #0060A8;border-radius:40px;padding:8px 20px;font-family:Mukta}
h1{font-family:Mukta;font-weight:800;line-height:1.08;letter-spacing:-.5px}.blue{color:#0060A8}.mk{background:linear-gradient(transparent 72%,#FFC94D 72%,#FFC94D 90%,transparent 90%);padding:0 6px}
.foot{position:absolute;left:0;right:0;bottom:0;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between}
.wa{display:flex;align-items:center;gap:14px;font-weight:700}.wa i{width:16px;height:16px;border-radius:50%;background:#22C55E;display:inline-block}.web{color:#9BE3FB;font-weight:500}
.list{background:#fff;border:2px solid #E1E7EF;border-radius:24px}.it{display:flex;align-items:center;gap:24px}.it+.it{border-top:2px dashed #E1E7EF}
.ib{flex:0 0 auto;border-radius:16px;background:#EEF5FC;display:flex;align-items:center;justify-content:center}.h{font-family:Mukta;font-weight:700;line-height:1.15}.s{color:#5F6B7A;font-weight:500;font-family:Mukta}`;
const page = (w, h, css, body) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${BASE}body{width:${w}px;height:${h}px}${css}</style></head><body>${body}</body></html>`;
const svg = (d, n) => `<svg viewBox="0 0 24 24" width="${n * .55}" height="${n * .55}" fill="none" stroke="#0060A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const list = z => `<div class="list" style="padding:${z.lp}px 34px">${ITEMS.map(([ic, h, s], i) => `<div class="it" style="padding:${z.ip}px 0"><div class="ib" style="width:${z.ib}px;height:${z.ib}px">${svg(ic, z.ib)}</div><div><div class="h" style="font-size:${z.h}px">${h}</div>${z.sub ? `<div class="s" style="font-size:${z.s}px;margin-top:2px">${s}</div>` : ''}</div></div>`).join('')}</div>`;
const H1 = `अच्छी <span class="blue">business website</span><br>की <span class="mk">5 पहचान</span>`;
const foot = (h, p, w, ww) => `<div class="foot" style="height:${h}px;padding:0 ${p}px"><div class="wa" style="font-size:${w}px"><i></i>WhatsApp 79742 17411</div><div class="web" style="font-size:${ww}px">futuretechdigitalmarketingagency.com</div></div>`;
const IG = page(1080, 1350, `.top{position:absolute;left:72px;right:72px;top:64px;display:flex;justify-content:space-between;align-items:center}h1{position:absolute;left:72px;top:180px;font-size:92px}.lw{position:absolute;left:72px;right:72px;top:470px}`,
  `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">Website Checklist</span></div><h1>${H1}</h1><div class="lw">${list({ lp: 6, ip: 24, ib: 96, h: 44, s: 27, sub: 1 })}</div>${foot(120, 72, 34, 24)}`);
const FB = page(1200, 1200, `.top{position:absolute;left:80px;right:80px;top:60px;display:flex;justify-content:space-between;align-items:center}h1{position:absolute;left:80px;top:170px;font-size:88px}.lw{position:absolute;left:80px;right:80px;top:405px}`,
  `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">India के दुकानदारों के लिए</span></div><h1>${H1}</h1><div class="lw">${list({ lp: 4, ip: 17, ib: 82, h: 38, s: 24, sub: 1 })}</div>${foot(110, 80, 32, 24)}`);
const GBP = page(1200, 900, `.stripe{position:absolute;left:0;top:0;bottom:0;width:16px;background:#00AEEF}.logo{position:absolute;left:80px;top:48px;height:56px}h1{position:absolute;left:80px;top:125px;font-size:60px}.lw{position:absolute;left:80px;right:80px;top:290px}.foot b{font-size:28px}`,
  `<div class="stripe"></div><img class="logo" src="${LOGO}"><h1>${H1}</h1><div class="lw">${list({ lp: 4, ip: 14, ib: 66, h: 34, s: 22, sub: 0 })}</div><div class="foot" style="height:90px;padding:0 80px"><b>FutureTech Digital Marketing Agency</b><div class="web" style="font-size:24px">futuretechdigitalmarketingagency.com</div></div>`);
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const br = await require('./browser')();
  const shot = async (html, w, h, file) => { const p = await br.newPage(); await p.setViewport({ width: w, height: h }); await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
    await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'अच्छी पहचान'))); await document.fonts.ready; });
    await p.screenshot({ path: file }); await p.close(); };
  await shot(IG, 1080, 1350, OUT + 'Instagram_1080x1350.png'); await shot(FB, 1200, 1200, OUT + 'Facebook_1200x1200.png'); await shot(GBP, 1200, 900, OUT + 'GBP_1200x900.png');
  await br.close(); console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
