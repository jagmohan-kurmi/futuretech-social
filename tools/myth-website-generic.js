// Myth vs Fact: "Website bana li, ab customer apne aap aayenge" -> IG 1080x1350, FB 1200x1200, GBP 1200x900. Usage: node tools/myth-website-generic.js
const fs = require('fs'); const path = require('path');
const OUT = path.join(__dirname, '..', 'posts', '2026-11-12_Myth_Website_Generic') + '/'; fs.mkdirSync(OUT, { recursive: true });
const LOGO = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '..', 'brand', 'FutureTech_Logo_Transparent.png')).toString('base64');
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';
const I = d => `<svg viewBox="0 0 24 24" fill="none" stroke="#0060A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const IC = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
  book: '<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-3a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h4z"/>',
  chat: '<path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>',
  pin: '<path d="M12 22s-7-7.6-7-12.5a7 7 0 0 1 14 0C19 14.4 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.5"/>',
};
const HI = [[IC.search, 'Google पर दिखें', 'सही title, description और services pages'], [IC.pin, 'Google Business Profile बनाएँ', 'Maps और “near me” search के लिए'], [IC.chat, 'WhatsApp / Call button रखें', 'Customer एक tap में आप तक पहुँचे']];
const X = '<svg viewBox="0 0 24 24" width="30" height="30"><path d="M6 6l12 12M18 6L6 18" stroke="#E5484D" stroke-width="3.2" stroke-linecap="round"/></svg>';
const OK = '<svg viewBox="0 0 24 24" width="30" height="30"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#041030" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const BASE = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB;overflow:hidden;position:relative}
.logo{height:62px;display:block}.tag{font-size:22px;font-weight:600;letter-spacing:.06em;color:#0060A8;border:2px solid #0060A8;border-radius:40px;padding:8px 20px}
h1{font-family:Mukta;font-weight:800;line-height:1.1;letter-spacing:-.5px}.blue{color:#0060A8}.mk{background:linear-gradient(transparent 72%,#FFC94D 72%,#FFC94D 90%,transparent 90%);padding:0 6px}
.foot{position:absolute;left:0;right:0;bottom:0;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between}.wa{display:flex;align-items:center;gap:14px;font-weight:700}.wa i{width:16px;height:16px;border-radius:50%;background:#22C55E;display:inline-block}.web{color:#9BE3FB;font-weight:500}
.card{border-radius:26px;position:relative}.myth{background:#fff;border:2px solid #E1E7EF}.fact{background:#0060A8;color:#fff}
.pill{display:inline-flex;align-items:center;gap:10px;font-weight:700;letter-spacing:.1em;border-radius:40px;padding:6px 20px;font-size:22px}.myth .pill{background:#EEF1F5;color:#5F6B7A}.fact .pill{background:#FFC94D;color:#041030}
.q{font-family:Mukta;font-weight:800;text-decoration:line-through;text-decoration-color:#8794A6;text-decoration-thickness:3px;color:#5F6B7A}.a{font-family:Mukta;font-weight:800;line-height:1.2}
.list{background:#fff;border:2px solid #E1E7EF;border-radius:24px}.it{display:flex;align-items:center}.it+.it{border-top:2px dashed #E1E7EF}.ib{flex:0 0 auto;border-radius:14px;background:#EEF5FC;display:flex;align-items:center;justify-content:center}.ib svg{width:55%;height:55%}
.h{font-family:Mukta;font-weight:700;line-height:1.15}.s{color:#5F6B7A;font-weight:500;font-family:Mukta}.lab{font-family:Mukta;font-weight:700;color:#5F6B7A}`;
const page = (w, h, css, body) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${BASE}body{width:${w}px;height:${h}px}${css}</style></head><body>${body}</body></html>`;
const steps = z => `<div class="list" style="padding:${z.lp}px 30px">${HI.map(([ic, h, s]) => `<div class="it" style="gap:22px;padding:${z.ip}px 0"><div class="ib" style="width:${z.ib}px;height:${z.ib}px">${I(ic)}</div><div><div class="h" style="font-size:${z.h}px">${h}</div>${z.sub ? `<div class="s" style="font-size:${z.s}px">${s}</div>` : ''}</div></div>`).join('')}</div>`;
const MYTH = z => `<div class="card myth" style="padding:${z.mp}px 40px"><span class="pill">${X}MYTH</span><div class="q" style="font-size:${z.qs}px;margin-top:14px;line-height:1.2">“वेबसाइट बना ली, अब customer अपने आप आएँगे।”</div></div>`;
const FACT = z => `<div class="card fact" style="padding:${z.mp}px 40px"><span class="pill">${OK}FACT</span><div class="a" style="font-size:${z.as}px;margin-top:14px">Website सिर्फ़ <span style="color:#FFC94D">आपके business का पता</span> है। Customer तक पहुँचने के लिए Google, WhatsApp और promotion से जोड़ना पड़ता है।</div></div>`;
const H1 = s => `<h1 style="font-size:${s}px">सच या <span class="mk">Myth?</span></h1>`;
const foot = (h, p, w, ww) => `<div class="foot" style="height:${h}px;padding:0 ${p}px"><div class="wa" style="font-size:${w}px"><i></i>WhatsApp 79742 17411</div><div class="web" style="font-size:${ww}px">futuretechdigitalmarketingagency.com</div></div>`;
const IG = page(1080, 1350, `.top{position:absolute;left:72px;right:72px;top:64px;display:flex;justify-content:space-between;align-items:center}.c{position:absolute;left:72px;right:72px}`,
  `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">MYTH VS FACT</span></div><div class="c" style="top:165px">${H1(92)}</div><div class="c" style="top:300px">${MYTH({ mp: 26, qs: 40 })}</div><div class="c" style="top:535px">${FACT({ mp: 28, as: 42 })}</div><div class="c" style="top:855px">${steps({ lp: 4, ip: 12, ib: 70, h: 35, s: 24, sub: 1 })}</div>${foot(120, 72, 34, 24)}`);
const FB = page(1200, 1200, `.top{position:absolute;left:80px;right:80px;top:56px;display:flex;justify-content:space-between;align-items:center}.c{position:absolute;left:80px;right:80px}`,
  `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">MYTH VS FACT</span></div><div class="c" style="top:140px">${H1(84)}</div><div class="c" style="top:250px">${MYTH({ mp: 22, qs: 38 })}</div><div class="c" style="top:462px">${FACT({ mp: 24, as: 39 })}</div><div class="c" style="top:745px">${steps({ lp: 2, ip: 9, ib: 60, h: 32, s: 22, sub: 1 })}</div>${foot(110, 80, 32, 24)}`);
const GBP = page(1200, 900, `.stripe{position:absolute;left:0;top:0;bottom:0;width:16px;background:#00AEEF}.logo{position:absolute;left:80px;top:44px;height:56px}.c{position:absolute;left:80px;right:80px}.foot b{font-size:28px}`,
  `<div class="stripe"></div><img class="logo" src="${LOGO}"><div class="c" style="top:118px">${H1(66)}</div><div class="c" style="top:225px;display:flex;gap:28px"><div style="flex:1">${MYTH({ mp: 22, qs: 34 })}</div><div style="flex:1">${FACT({ mp: 22, as: 31 })}</div></div><div class="c" style="top:560px">${steps({ lp: 0, ip: 9, ib: 52, h: 30, s: 0, sub: 0 })}</div><div class="foot" style="height:90px;padding:0 80px"><b>FutureTech Digital Marketing Agency</b><div class="web" style="font-size:24px">futuretechdigitalmarketingagency.com</div></div>`);
(async () => {
  const br = await require('./browser')();
  const shot = async (html, w, h, file) => { const p = await br.newPage(); await p.setViewport({ width: w, height: h }); await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
    await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'वेबसाइट सच'))); await document.fonts.ready; });
    const over = await p.evaluate(() => { const f = document.querySelector('.foot').getBoundingClientRect().top; return Math.round(Math.max(...[...document.querySelectorAll('.c')].map(e => e.getBoundingClientRect().bottom)) - f); });
    console.log(file, 'gap to footer:', -over + 'px'); await p.screenshot({ path: OUT + file }); await p.close(); };
  await shot(IG, 1080, 1350, 'Instagram_1080x1350.png'); await shot(FB, 1200, 1200, 'Facebook_1200x1200.png'); await shot(GBP, 1200, 900, 'GBP_1200x900.png'); await br.close();
})().catch(e => { console.error(e); process.exit(1); });
