// 7 Nov 2026 service post: "Dukaan ki apni website — WhatsApp order ke saath" (Template 02), IG 1080x1350, FB 1200x1200, GBP 1200x900. Usage: node post-2026-11-07-website.js
const fs = require('fs'); const path = require('path');
const LOGO = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '..', 'brand', 'FutureTech_Logo_Transparent.png')).toString('base64');
const OUT = path.join(__dirname, '..', 'posts', '2026-11-07_Website_WhatsApp_Order') + '/';
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';
const svg = (d, s, c = '#fff', w = 3) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const CHECK = '<path d="M5 12.5l4.5 4.5L19 7.5"/>';
const LOCK = '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>';
const BAG = '<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>';
const WA = '<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20z"/><path d="M9.5 9.5c0 3 2 5 5 5l1-1.5-2-1-1 .8c-1-.4-1.9-1.3-2.3-2.3l.8-1-1-2-1.5 1z" stroke-width="1.4"/>';

// Flat phone showing a simple shop website with WhatsApp order buttons (no prices, no fake shop name)
const phone = w => {
  const k = w / 330;
  const px = v => Math.round(v * k) + 'px';
  const card = (c) => `<div style="background:#fff;border:1px solid #E1E7EF;border-radius:${px(10)};padding:${px(7)}">
    <div style="height:${px(62)};border-radius:${px(7)};background:${c};display:flex;align-items:center;justify-content:center">${svg(BAG, Math.round(26 * k), '#041030', 1.6)}</div>
    <div style="height:${px(7)};width:70%;background:#DCE3EC;border-radius:4px;margin:${px(8)} 0 ${px(7)}"></div>
    <div style="background:#22C55E;color:#fff;border-radius:${px(6)};font:600 ${px(10)} Poppins;padding:${px(5)} 0;text-align:center;display:flex;gap:${px(4)};align-items:center;justify-content:center">${svg(WA, Math.round(12 * k), '#fff', 2)}Order</div></div>`;
  return `<div class="phone" style="width:${w}px;border:${px(12)} solid #041030;border-radius:${px(40)};background:#fff;overflow:hidden">
  <div style="display:flex;justify-content:center;padding:${px(8)} 0 ${px(4)}"><div style="width:${px(70)};height:${px(8)};border-radius:8px;background:#041030"></div></div>
  <div style="margin:${px(6)} ${px(12)};background:#EEF2F7;border-radius:${px(20)};padding:${px(8)} ${px(12)};display:flex;gap:${px(6)};align-items:center;font:500 ${px(12)} Poppins;color:#5F6B7A">${svg(LOCK, Math.round(13 * k), '#5F6B7A', 2)}aapkidukaan.in</div>
  <div style="margin:${px(8)} ${px(12)};border-radius:${px(12)};background:#0060A8;color:#fff;padding:${px(14)}">
    <div style="font:800 ${px(19)} Mukta;line-height:1.1">नया स्टॉक आ गया</div>
    <div style="font:500 ${px(11)} Poppins;opacity:.85;margin-top:${px(4)}">Dekhiye aur WhatsApp par order kijiye</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:${px(9)};padding:${px(4)} ${px(12)}">${card('#FFE7A8')}${card('#BFE3F7')}${card('#F9D0CF')}${card('#D6F5DF')}</div>
  <div style="margin:${px(10)} ${px(12)} ${px(16)};background:#22C55E;color:#fff;border-radius:${px(26)};padding:${px(11)};font:700 ${px(13)} Poppins;display:flex;gap:${px(7)};align-items:center;justify-content:center">${svg(WA, Math.round(17 * k), '#fff', 2)}WhatsApp par baat karein</div>
  </div>`;
};

const ITEMS = [['Mobile पर जल्दी खुले', 'Har phone par saaf dikhe'], ['Google पर दिखे', 'Basic SEO aur Google Business Profile link'], ['WhatsApp order button', 'Customer seedha aapse baat kare']];
const list = (z, sub = true) => `<div class="list" style="padding:${z.lp}px 36px">${ITEMS.map(([h, s]) => `<div class="it" style="padding:${z.ip}px 0"><div class="cb" style="width:${z.cb}px;height:${z.cb}px">${svg(CHECK, Math.round(z.cb * .62))}</div><div><div class="h" style="font-size:${z.h}px">${h}</div>${sub ? `<div class="s" style="font-size:${z.s}px">${s}</div>` : ''}</div></div>`).join('')}</div>`;
const H1 = `<h1>दुकान की <span class="mk">website</span><br><span class="blue">WhatsApp order</span><br>के साथ</h1>`;
const BASE = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB;overflow:hidden;position:relative}
.logo{height:64px;display:block}.tag{font:600 22px Poppins;letter-spacing:1.5px;color:#0060A8;border:2.5px solid #0060A8;border-radius:40px;padding:10px 24px}
h1{font-family:Mukta;font-weight:800;line-height:1.06;letter-spacing:-.5px}.blue{color:#0060A8}.mk{background:linear-gradient(transparent 76%,#FFC94D 76%,#FFC94D 92%,transparent 92%);padding:0 4px}
.list{background:#fff;border:2px solid #E1E7EF;border-radius:26px}.it{display:flex;align-items:center;gap:26px}.it+.it{border-top:2px dashed #E1E7EF}
.cb{flex:0 0 auto;border-radius:12px;background:#0060A8;display:flex;align-items:center;justify-content:center}.h{font-family:Mukta;font-weight:700;line-height:1.15}.s{color:#5F6B7A;font-weight:500;margin-top:2px}
.foot{position:absolute;left:0;right:0;bottom:0;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between}
.wa{display:flex;align-items:center;gap:14px;font-weight:700}.wa i{width:16px;height:16px;border-radius:50%;background:#22C55E;display:inline-block}.web{color:#9BE3FB;font-weight:500}`;
const page = (w, h, css, body) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${BASE}body{width:${w}px;height:${h}px}${css}</style></head><body>${body}</body></html>`;

const IG = page(1080, 1350, `.top{position:absolute;left:72px;right:72px;top:62px;display:flex;justify-content:space-between;align-items:center}h1{position:absolute;left:72px;top:230px;font-size:86px}.phone{position:absolute;right:66px;top:170px}.lw{position:absolute;left:72px;right:72px;top:720px}.foot{height:120px;padding:0 72px}.wa{font-size:34px}.web{font-size:24px}`,
  `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">WEBSITE</span></div>${H1}${phone(280)}<div class="lw">${list({ lp: 10, ip: 30, cb: 58, h: 44, s: 25 })}</div><div class="foot"><div class="wa"><i></i>WhatsApp 79742 17411</div><div class="web">futuretechdigitalmarketingagency.com</div></div>`);
const FB = page(1200, 1200, `.top{position:absolute;left:80px;right:80px;top:56px;display:flex;justify-content:space-between;align-items:center}h1{position:absolute;left:80px;top:220px;font-size:84px}.phone{position:absolute;right:80px;top:150px}.lw{position:absolute;left:80px;right:620px;top:600px}.foot{height:110px;padding:0 80px}.wa{font-size:32px}.web{font-size:24px}`,
  `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">WEBSITE</span></div>${H1}${phone(300)}<div class="lw" style="right:80px;top:680px">${list({ lp: 6, ip: 22, cb: 52, h: 40, s: 23 })}</div><div class="foot"><div class="wa"><i></i>WhatsApp 79742 17411</div><div class="web">futuretechdigitalmarketingagency.com</div></div>`);
const GBP = page(1200, 900, `.stripe{position:absolute;left:0;top:0;bottom:0;width:16px;background:#00AEEF}.logo{position:absolute;left:80px;top:52px;height:58px}h1{position:absolute;left:80px;top:170px;font-size:72px}.phone{position:absolute;right:90px;top:46px}.lw{position:absolute;left:80px;width:640px;top:470px}.foot{height:90px;padding:0 80px}.foot b{font-size:28px}.web{font-size:24px}`,
  `<div class="stripe"></div><img class="logo" src="${LOGO}">${H1}${phone(270)}<div class="lw">${list({ lp: 6, ip: 16, cb: 44, h: 32, s: 18 }, false)}</div><div class="foot"><b>FutureTech Digital Marketing Agency</b><div class="web">futuretechdigitalmarketingagency.com</div></div>`);

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const br = await require('./browser')();
  const shot = async (html, w, h, file) => { const p = await br.newPage(); await p.setViewport({ width: w, height: h }); await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
    await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'दुकान की अपनी'))); await document.fonts.ready; });
    await p.screenshot({ path: file }); await p.close(); };
  await shot(IG, 1080, 1350, OUT + 'Instagram_1080x1350.png');
  await shot(FB, 1200, 1200, OUT + 'Facebook_1200x1200.png');
  await shot(GBP, 1200, 900, OUT + 'GBP_1200x900.png');
  await br.close(); console.log('done', OUT);
})().catch(e => { console.error(e); process.exit(1); });
