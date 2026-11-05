// 8 Nov 2026 Diwali greeting (Template 03 Festive, greeting only — no offer, no deity image). IG 1080x1350, FB 1200x1200, GBP 1200x900. Usage: node post-2026-11-08-diwali.js
const fs = require('fs'); const path = require('path');
const LOGO = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '..', 'brand', 'FutureTech_Logo_Transparent.png')).toString('base64');
const OUT = path.join(__dirname, '..', 'posts', '2026-11-08_Diwali_Greeting') + '/';
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';

// Flat diya (clay lamp) and a simple 8-petal rangoli, drawn as SVG
const DIYA = `<svg viewBox="0 0 120 110" class="diya"><path d="M60 6c11 15 13 26 0 39C47 32 49 21 60 6z" fill="#F5A623"/><path d="M60 20c5 7 6 12 0 18-6-6-5-11 0-18z" fill="#FFD66B"/><path d="M8 58h104c-5 26-25 40-52 40S13 84 8 58z" fill="#0060A8"/><path d="M26 74h68" stroke="#FFC94D" stroke-width="5" stroke-dasharray="2 9" stroke-linecap="round"/><rect x="4" y="54" width="112" height="8" rx="4" fill="#041030"/></svg>`;
const petals = (n, r, rx, ry, fill) => Array.from({ length: n }, (_, i) => `<ellipse cx="100" cy="${100 - r}" rx="${rx}" ry="${ry}" fill="${fill}" transform="rotate(${i * 360 / n} 100 100)"/>`).join('');
const RANGOLI = `<svg viewBox="0 0 200 200" class="rangoli">${petals(8, 62, 15, 30, '#BFE3F7')}${petals(8, 40, 11, 22, '#0060A8')}${petals(8, 40, 5, 10, '#FFC94D')}<circle cx="100" cy="100" r="22" fill="#FFC94D"/><circle cx="100" cy="100" r="10" fill="#041030"/>${Array.from({ length: 16 }, (_, i) => `<circle cx="100" cy="8" r="4" fill="${i % 2 ? '#00AEEF' : '#FFC94D'}" transform="rotate(${i * 22.5} 100 100)"/>`).join('')}</svg>`;

const BASE = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Poppins,sans-serif;color:#041030;background:#FFFDF8;overflow:hidden;position:relative}
h1{font-family:Mukta;font-weight:800;line-height:1.05;letter-spacing:-.5px;text-align:center;position:absolute;left:0;right:0}
.mk{background:linear-gradient(transparent 74%,#FFC94D 74%,#FFC94D 92%,transparent 92%);padding:0 8px}.blue{color:#0060A8}
.frame{position:absolute;border:3px solid #00AEEF;border-radius:28px}.diya,.rangoli{display:block}
.row{position:absolute;left:50%;transform:translateX(-50%);display:flex;align-items:flex-end}
.sub{position:absolute;text-align:center;font-family:Mukta;font-weight:600;color:#5F6B7A;line-height:1.4}
.lg{position:absolute;left:50%;transform:translateX(-50%)}`;
const page = (w, h, s) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${BASE}body{width:${w}px;height:${h}px}
.frame{inset:${s.inset}px}.rangoli{position:absolute;left:50%;transform:translateX(-50%);top:${s.rTop}px;width:${s.r}px}
.row{top:${s.rowTop}px;gap:${s.gap}px}.diya{width:${s.d}px}.diya.sm{width:${Math.round(s.d * .78)}px}
h1{top:${s.hTop}px;font-size:${s.hs}px}.sub{left:${s.subX}px;right:${s.subX}px;top:${s.subTop}px;font-size:${s.ss}px}.lg{bottom:${s.lgB}px;height:${s.lg}px}</style></head><body>
<div class="frame"></div>${RANGOLI}<div class="row"><svg class="diya sm" viewBox="0 0 120 110">${DIYA.slice(DIYA.indexOf('>') + 1)}<svg class="diya" viewBox="0 0 120 110">${DIYA.slice(DIYA.indexOf('>') + 1)}<svg class="diya sm" viewBox="0 0 120 110">${DIYA.slice(DIYA.indexOf('>') + 1)}</div>
<h1>शुभ <span class="mk">दीपावली</span></h1>
<div class="sub">आपके घर और व्यापार में<br>रोशनी, खुशियाँ और तरक्की बनी रहे।<br><span class="blue">— FutureTech परिवार</span></div>
<img class="lg" src="${LOGO}"></body></html>`;

const IG = page(1080, 1350, { inset: 36, rTop: 130, r: 320, rowTop: 470, gap: 36, d: 200, hTop: 690, hs: 150, subX: 90, subTop: 910, ss: 46, lgB: 90, lg: 84 });
const FB = page(1200, 1200, { inset: 36, rTop: 100, r: 280, rowTop: 400, gap: 34, d: 180, hTop: 600, hs: 140, subX: 120, subTop: 810, ss: 42, lgB: 80, lg: 80 });
const GBP = page(1200, 900, { inset: 30, rTop: 60, r: 190, rowTop: 262, gap: 28, d: 130, hTop: 400, hs: 112, subX: 120, subTop: 568, ss: 34, lgB: 50, lg: 62 });

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const br = await require('./browser')();
  const shot = async (html, w, h, file) => { const p = await br.newPage(); await p.setViewport({ width: w, height: h }); await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
    await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'शुभ दीपावली'))); await document.fonts.ready; });
    await p.screenshot({ path: file }); await p.close(); };
  await shot(IG, 1080, 1350, OUT + 'Instagram_1080x1350.png');
  await shot(FB, 1200, 1200, OUT + 'Facebook_1200x1200.png');
  await shot(GBP, 1200, 900, OUT + 'GBP_1200x900.png');
  await br.close(); console.log('done', OUT);
})().catch(e => { console.error(e); process.exit(1); });
