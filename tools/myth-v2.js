// Redesign v2: less text, one big hero illustration. Usage: node tools/myth-v2.js
const fs = require('fs'); const path = require('path');
const OUT = path.join(__dirname, '..', 'posts', '2026-11-12_Myth_Website_Generic') + '/';
const LOGO = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '..', 'brand', 'FutureTech_Logo_Transparent.png')).toString('base64');
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';
const HERO = `<svg viewBox="0 0 1000 560" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="Mukta, Poppins, sans-serif">
<rect x="10" y="10" width="980" height="540" rx="40" fill="#E6EEF8"/>
<g stroke="#0060A8" stroke-width="5" stroke-dasharray="3 14" stroke-linecap="round" fill="none"><path d="M330 112 L400 175"/><path d="M745 150 L640 195"/><path d="M265 390 L345 350"/><path d="M655 350 L755 395"/></g>
<rect x="330" y="150" width="340" height="270" rx="22" fill="#fff" stroke="#041030" stroke-width="5"/><path d="M330 172a22 22 0 0 1 22-22h296a22 22 0 0 1 22 22v26H330z" fill="#041030"/><circle cx="358" cy="175" r="6" fill="#FFC94D"/><circle cx="380" cy="175" r="6" fill="#9BE3FB"/><circle cx="402" cy="175" r="6" fill="#fff"/>
<rect x="356" y="218" width="288" height="90" rx="12" fill="#0060A8"/><rect x="376" y="238" width="120" height="12" rx="6" fill="#FFC94D"/><rect x="376" y="264" width="190" height="10" rx="5" fill="#fff" opacity=".85"/><rect x="376" y="282" width="100" height="10" rx="5" fill="#fff" opacity=".6"/>
<rect x="356" y="326" width="88" height="70" rx="10" fill="#FFE7A8"/><rect x="456" y="326" width="88" height="70" rx="10" fill="#BFE3F7"/><rect x="556" y="326" width="88" height="70" rx="10" fill="#CFE7D8"/>
<text x="500" y="475" text-anchor="middle" font-size="38" font-weight="800" fill="#041030">आपकी website</text>
<rect x="50" y="50" width="280" height="76" rx="38" fill="#fff" stroke="#DADCE0" stroke-width="3"/><circle cx="96" cy="86" r="14" fill="none" stroke="#5F6368" stroke-width="5"/><path d="M107 97l14 14" stroke="#5F6368" stroke-width="5" stroke-linecap="round"/><text x="140" y="98" font-size="32" font-weight="600" fill="#202124">near me</text>
<text x="190" y="170" text-anchor="middle" font-size="32" font-weight="800" fill="#0060A8">Google पर दिखें</text>
<g transform="translate(840 120) scale(.75)"><path d="M0 90C-45 45 -60 20 -60 -10a60 60 0 0 1 120 0C60 20 45 45 0 90z" fill="#E5484D"/><circle cx="0" cy="-10" r="22" fill="#fff"/></g>
<text x="840" y="220" text-anchor="middle" font-size="32" font-weight="800" fill="#0060A8">Maps पर मिलें</text>
<g transform="translate(190 405)"><rect x="-48" y="-62" width="96" height="124" rx="18" fill="#041030"/><rect x="-38" y="-48" width="76" height="96" rx="8" fill="#fff"/><circle cx="0" cy="-12" r="15" fill="#CFE7D8"/><rect x="-24" y="12" width="48" height="8" rx="4" fill="#DDE3EC"/><rect x="-16" y="28" width="32" height="8" rx="4" fill="#DDE3EC"/></g>
<text x="190" y="520" text-anchor="middle" font-size="32" font-weight="800" fill="#041030">Customer</text>
<g transform="translate(810 420)"><circle r="56" fill="#22C55E"/><path d="M0 -29a29 29 0 0 0-25 44l-4 15 16-4a29 29 0 1 0 13-55z" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round"/><path d="M-10 -13c0 13 11 24 24 24l4-6-8-4-4 3c-4-2-7-5-9-9l3-4-4-8z" fill="#fff"/></g>
<text x="810" y="520" text-anchor="middle" font-size="32" font-weight="800" fill="#16A34A">WhatsApp पर बात</text>
</svg>`;
const BASE = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB;overflow:hidden;position:relative}
.logo{height:62px;display:block}.tag{font-size:22px;font-weight:600;letter-spacing:.06em;color:#0060A8;border:2px solid #0060A8;border-radius:40px;padding:8px 20px}
h1{font-family:Mukta;font-weight:800;line-height:1.08;letter-spacing:-1px}.blue{color:#0060A8}.mk{background:linear-gradient(transparent 70%,#FFC94D 70%,#FFC94D 92%,transparent 92%);padding:0 6px}
.foot{position:absolute;left:0;right:0;bottom:0;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between}.wa{display:flex;align-items:center;gap:14px;font-weight:700}.wa i{width:16px;height:16px;border-radius:50%;background:#22C55E;display:inline-block}.web{color:#9BE3FB;font-weight:500}
.top{position:absolute;display:flex;justify-content:space-between;align-items:center}.c{position:absolute}
.fact{background:#0060A8;color:#fff;border-radius:28px;font-family:Mukta;font-weight:800;line-height:1.2;display:flex;align-items:center;gap:20px}.fact b{flex:0 0 auto;background:#FFC94D;color:#041030;border-radius:40px;font-family:Poppins;font-size:22px;letter-spacing:.1em;padding:8px 20px}`;
const page = (w, h, css, body) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${BASE}body{width:${w}px;height:${h}px}${css}</style></head><body>${body}</body></html>`;
const foot = (h, p, a, b) => `<div class="foot" style="height:${h}px;padding:0 ${p}px"><div class="wa" style="font-size:${a}px"><i></i>WhatsApp 79742 17411</div><div class="web" style="font-size:${b}px">futuretechdigitalmarketingagency.com</div></div>`;
const FACT = s => `<div class="fact" style="padding:${s.p}px 36px;font-size:${s.f}px"><b>FACT</b><span>Website सिर्फ़ पता है — <span style="color:#FFC94D">Google और WhatsApp</span> से जोड़ना पड़ता है।</span></div>`;
const IG = page(1080, 1350, '', `<div class="top" style="left:72px;right:72px;top:64px"><img class="logo" src="${LOGO}"><span class="tag">MYTH VS FACT</span></div>
<div class="c" style="left:72px;right:72px;top:160px"><h1 style="font-size:98px"><span class="mk">Website</span> बना ली,<br>फिर भी <span class="blue">customer</span><br>नहीं आ रहे?</h1></div>
<div class="c" style="left:90px;right:90px;top:520px">${HERO}</div>
<div class="c" style="left:72px;right:72px;top:1055px">${FACT({ p: 24, f: 38 })}</div>${foot(120, 72, 34, 24)}`);
const FB = page(1200, 1200, '', `<div class="top" style="left:80px;right:80px;top:56px"><img class="logo" src="${LOGO}"><span class="tag">MYTH VS FACT</span></div>
<div class="c" style="left:80px;right:80px;top:150px"><h1 style="font-size:92px"><span class="mk">Website</span> बना ली, फिर भी<br><span class="blue">customer</span> नहीं आ रहे?</h1></div>
<div class="c" style="left:140px;right:140px;top:360px">${HERO}</div>
<div class="c" style="left:80px;right:80px;top:935px">${FACT({ p: 18, f: 34 })}</div>${foot(110, 80, 32, 24)}`);
const GBP = page(1200, 900, `.stripe{position:absolute;left:0;top:0;bottom:0;width:16px;background:#00AEEF}`, `<div class="stripe"></div><img class="logo" style="position:absolute;left:80px;top:40px;height:54px" src="${LOGO}">
<div class="c" style="left:80px;right:80px;top:110px"><h1 style="font-size:64px"><span class="mk">Website</span> बना ली, फिर भी <span class="blue">customer</span> नहीं आ रहे?</h1></div>
<div class="c" style="left:70px;top:290px;width:700px">${HERO}</div>
<div class="c" style="left:800px;top:330px;width:320px"><div class="fact" style="display:block;padding:26px 26px;font-size:32px"><b style="display:inline-block;margin-bottom:14px">FACT</b><br>Website सिर्फ़ पता है — <span style="color:#FFC94D">Google और WhatsApp</span> से जोड़ना पड़ता है।</div></div><div class="foot" style="height:90px;padding:0 80px"><b style="font-size:28px">FutureTech Digital Marketing Agency</b><div class="web" style="font-size:24px">futuretechdigitalmarketingagency.com</div></div>`);
(async () => {
  const br = await require('./browser')();
  const shot = async (html, w, h, file) => { const p = await br.newPage(); await p.setViewport({ width: w, height: h }); await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
    await p.evaluate(async () => { await Promise.all(['400', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['500', '700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'वेबसाइट नहीं'))); await document.fonts.ready; });
    const g = await p.evaluate(() => { const f = document.querySelector('.foot').getBoundingClientRect().top; return Math.round(f - Math.max(...[...document.querySelectorAll('.c')].map(e => e.getBoundingClientRect().bottom))); }); console.log(file, 'gap', g);
    await p.screenshot({ path: OUT + file }); await p.close(); };
  await shot(IG, 1080, 1350, 'Instagram_1080x1350.png'); await shot(FB, 1200, 1200, 'Facebook_1200x1200.png'); await shot(GBP, 1200, 900, 'GBP_1200x900.png'); await br.close();
})().catch(e => { console.error(e); process.exit(1); });
