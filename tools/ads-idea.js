// Idea graphic: "Ads chal rahi hain, par budget waste ho raha hai?" (IG 1080x1350 preview). Usage: node tools/ads-idea.js
const fs = require('fs'); const path = require('path');
const OUT = path.join(__dirname, '..', 'posts', '2026-11-19_Ads_Budget_Idea') + '/';
const LOGO = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '..', 'brand', 'FutureTech_Logo_Transparent.png')).toString('base64');
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';
const coin = (x, y, r = 30) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="#FFC94D" stroke="#041030" stroke-width="4"/><text y="${r * .36}" text-anchor="middle" font-family="Poppins" font-weight="800" font-size="${r * 1.0}" fill="#041030">₹</text></g>`;
const chip = (x, y, w, t) => `<g transform="translate(${x} ${y})"><rect width="${w}" height="62" rx="31" fill="#fff" stroke="#041030" stroke-width="4"/><text x="${w / 2}" y="41" text-anchor="middle" font-family="Mukta" font-weight="800" font-size="31" fill="#041030">${t}</text></g>`;
const HERO = `<svg viewBox="0 0 1000 640" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="10" width="980" height="620" rx="40" fill="#E6EEF8"/>
<text x="500" y="62" text-anchor="middle" font-family="Mukta" font-weight="800" font-size="36" fill="#0060A8">Ad budget</text>
${coin(400, 112)}${coin(500, 98)}${coin(600, 112)}
<path d="M230 170H770L575 430H425Z" fill="#BFE3F7" stroke="#041030" stroke-width="6" stroke-linejoin="round"/>
<rect x="425" y="430" width="150" height="70" fill="#BFE3F7" stroke="#041030" stroke-width="6"/>
<g stroke="#0060A8" stroke-width="5" stroke-dasharray="3 14" stroke-linecap="round" fill="none"><path d="M262 215 C200 240 180 270 175 300"/><path d="M738 215 C800 240 820 270 825 300"/><path d="M335 330 C290 360 270 390 262 420"/><path d="M665 330 C710 360 730 390 738 420"/></g>
${coin(262, 215, 26)}${coin(738, 215, 26)}${coin(335, 330, 26)}${coin(665, 330, 26)}
${chip(24, 300, 250, 'गलत audience')}${chip(726, 300, 250, 'कमज़ोर page')}${chip(24, 424, 250, 'Follow-up नहीं')}${chip(726, 424, 250, 'Tracking नहीं')}
<g transform="translate(500 565)"><path d="M-150 -42h300a24 24 0 0 1 24 24v36a24 24 0 0 1-24 24H-100l-30 28v-28h-20a24 24 0 0 1-24-24v-36a24 24 0 0 1 24-24z" fill="#22C55E" stroke="#041030" stroke-width="5"/><text x="0" y="14" text-anchor="middle" font-family="Mukta" font-weight="800" font-size="38" fill="#fff">Quality enquiry</text></g>
</svg>`;
const html = `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>*{margin:0;padding:0;box-sizing:border-box}body{width:1080px;height:1350px;font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB;position:relative;overflow:hidden}
.logo{height:62px;display:block}.tag{font-size:22px;font-weight:600;letter-spacing:.06em;color:#0060A8;border:2px solid #0060A8;border-radius:40px;padding:8px 20px}
h1{font-family:Mukta;font-weight:800;line-height:1.08;letter-spacing:-1px;font-size:94px}.blue{color:#0060A8}.mk{background:linear-gradient(transparent 70%,#FFC94D 70%,#FFC94D 92%,transparent 92%);padding:0 6px}
.top{position:absolute;left:72px;right:72px;top:64px;display:flex;justify-content:space-between;align-items:center}.c{position:absolute}
.fact{background:#0060A8;color:#fff;border-radius:28px;font-family:Mukta;font-weight:800;line-height:1.2;display:flex;align-items:center;gap:20px;padding:22px 36px;font-size:37px}.fact b{flex:0 0 auto;background:#FFC94D;color:#041030;border-radius:40px;font-family:Poppins;font-size:22px;letter-spacing:.1em;padding:8px 20px}
.foot{position:absolute;left:0;right:0;bottom:0;height:120px;padding:0 72px;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between}.wa{display:flex;align-items:center;gap:14px;font-weight:700;font-size:34px}.wa i{width:16px;height:16px;border-radius:50%;background:#22C55E;display:inline-block}.web{color:#9BE3FB;font-weight:500;font-size:24px}</style></head><body>
<div class="top"><img class="logo" src="${LOGO}"><span class="tag">ADS REALITY CHECK</span></div>
<div class="c" style="left:72px;right:72px;top:160px"><h1><span class="mk">Ads</span> चल रही हैं,<br>पर <span class="blue">budget waste</span><br>हो रहा है?</h1></div>
<div class="c" style="left:90px;right:90px;top:500px">${HERO}</div>
<div class="c" style="left:72px;right:72px;top:1075px"><div class="fact"><b>FIX</b><span>Ads बढ़ाने से पहले <span style="color:#FFC94D">target, page और follow-up</span> ठीक करें।</span></div></div>
<div class="foot"><div class="wa"><i></i>WhatsApp 79742 17411</div><div class="web">futuretechdigitalmarketingagency.com</div></div></body></html>`;
(async () => { const br = await require('./browser')(); const p = await br.newPage(); await p.setViewport({ width: 1080, height: 1350 }); await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
  await p.evaluate(async () => { await Promise.all(['400', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'वेबसाइट नहीं'))); await document.fonts.ready; });
  await p.screenshot({ path: OUT + 'Idea_Instagram_1080x1350.png' }); await br.close(); console.log('done'); })().catch(e => { console.error(e); process.exit(1); });
