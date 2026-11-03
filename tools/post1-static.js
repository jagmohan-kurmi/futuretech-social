// Post 1 static images: Instagram 1080x1350, Facebook 1200x1200, GBP 1200x900. Usage: node post1-static.js
const fs = require('fs'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const OUT = require('path').join(__dirname, '..', 'posts', '2026-11-03_Diwali_Google_Ready') + '/';
const LOGO = 'data:image/png;base64,' + fs.readFileSync(K + 'FutureTech_Logo_Transparent.png').toString('base64');

const DIYA = `<svg viewBox="0 0 120 110" class="diya"><path d="M60 6c11 15 13 26 0 39C47 32 49 21 60 6z" fill="#F5A623"/><path d="M60 20c5 7 6 12 0 18-6-6-5-11 0-18z" fill="#FFD66B"/><path d="M8 58h104c-5 26-25 40-52 40S13 84 8 58z" fill="#0060A8"/><rect x="4" y="54" width="112" height="8" rx="4" fill="#041030"/></svg>`;
const SEARCH = `<div class="search"><svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6.5" fill="none" stroke="#5F6368" stroke-width="2.2"/><path d="M15 15l5.5 5.5" stroke="#5F6368" stroke-width="2.2" stroke-linecap="round"/></svg><span>diwali offer near me</span></div>`;
const TICK = `<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ITEMS = [
  ['दिवाली की special timing डालें', 'Google Business Profile → Edit profile → Hours'],
  ['Offer post लगाएं', 'Start date aur end date ke saath'],
  ['दुकान की नई photos डालें', 'Decoration, naya stock, aapki team'],
];
const list = (sub = true) => `<div class="list">${ITEMS.map(([h, s]) => `<div class="it"><div class="box">${TICK}</div><div><div class="h hi">${h}</div>${sub ? `<div class="s">${s}</div>` : ''}</div></div>`).join('')}</div>`;

const BASE = `
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB;overflow:hidden;position:relative}
.hi{font-family:Mukta,sans-serif}
.logo{height:64px;display:block}
.tag{font-size:22px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#0060A8;border:2px solid #0060A8;border-radius:40px;padding:8px 20px}
h1{font-family:Mukta,sans-serif;font-weight:800;line-height:1.08;letter-spacing:-.5px}
.nw{white-space:nowrap}h1{z-index:0}.mark{position:relative;white-space:nowrap}.mark:after{content:"";position:absolute;left:-4px;right:-4px;bottom:.2em;height:.22em;background:#FFC94D;z-index:-1;border-radius:4px}
.blue{color:#0060A8}
.search{display:flex;align-items:center;gap:20px;background:#fff;border:2px solid #DADCE0;border-radius:60px;box-shadow:0 2px 6px rgba(32,33,36,.12)}
.search svg{flex:0 0 auto}.search span{color:#202124;font-weight:500}
.list{background:#fff;border:2px solid #E1E7EF;border-radius:24px}
.it{display:flex;align-items:flex-start;gap:24px}.it+.it{border-top:2px dashed #E1E7EF}
.box{flex:0 0 auto;border-radius:12px;background:#0060A8;display:flex;align-items:center;justify-content:center}
.h{font-weight:700;color:#041030}.s{color:#5F6B7A;font-weight:500}
.foot{position:absolute;left:0;right:0;bottom:0;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between}
.wa{display:flex;align-items:center;gap:14px;font-weight:700}.wa i{width:16px;height:16px;border-radius:50%;background:#22C55E;display:inline-block}
.web{color:#9BE3FB;font-weight:500}
.stripe{position:absolute;left:0;top:0;bottom:0;width:14px;background:#00AEEF}
`;

const page = (w, h, css, body) => `<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;700;800&display=swap" rel="stylesheet"><style>${BASE}body{width:${w}px;height:${h}px}${css}</style></head><body>${body}</body></html>`;

const IG = page(1080, 1350, `
.top{position:absolute;left:72px;right:72px;top:64px;display:flex;justify-content:space-between;align-items:center}
h1{position:absolute;left:72px;top:190px;width:800px;font-size:96px}
.diya{position:absolute;right:72px;top:220px;width:150px}
.search{position:absolute;left:72px;right:72px;top:530px;height:104px;padding:0 36px}.search svg{width:40px}.search span{font-size:38px}
.q{position:absolute;left:72px;top:660px;font-size:30px;color:#5F6B7A;font-weight:500}
.list{position:absolute;left:72px;right:72px;top:730px;padding:10px 36px}.it{padding:24px 0}.box{width:52px;height:52px;margin-top:4px}.box svg{width:34px}
.h{font-size:42px;line-height:1.15}.s{font-size:24px;margin-top:4px}
.foot{height:120px;padding:0 72px}.wa{font-size:34px}.web{font-size:24px}
`, `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">Diwali Tip</span></div>
<h1><span class="nw">दिवाली में <span class="mark">5 दिन</span> बाकी।</span><br><span class="blue">Google पर दुकान</span><br>तैयार है?</h1>${DIYA}
${SEARCH}<div class="q">Customer aapko yahin dhoondhta hai. Aaj ye 3 kaam karein:</div>
${list()}
<div class="foot"><div class="wa"><i></i>WhatsApp 79742 17411</div><div class="web">futuretechdigitalmarketingagency.com</div></div>`);

const FB = page(1200, 1200, `
.top{position:absolute;left:80px;right:80px;top:64px;display:flex;justify-content:space-between;align-items:center}
h1{position:absolute;left:80px;top:160px;font-size:84px}
.diya{position:absolute;right:80px;top:200px;width:150px}
.search{position:absolute;left:80px;width:640px;top:500px;height:92px;padding:0 30px}.search svg{width:34px}.search span{font-size:32px}
.list{position:absolute;left:80px;right:80px;top:630px;padding:6px 34px}.it{padding:20px 0}.box{width:46px;height:46px;margin-top:2px}.box svg{width:30px}
.h{font-size:38px;line-height:1.15}.s{font-size:22px;margin-top:2px}
.side{position:absolute;left:760px;right:80px;top:500px;height:92px;display:flex;align-items:center;font-size:24px;font-weight:600;color:#5F6B7A;line-height:1.3}
.foot{height:120px;padding:0 80px}.wa{font-size:34px}.web{font-size:24px}
`, `<div class="top"><img class="logo" src="${LOGO}"><span class="tag">Sagar ke dukaandaron ke liye</span></div>
<h1><span class="nw">दिवाली में <span class="mark">5 दिन</span> बाकी।</span><br><span class="blue">Google पर दुकान</span><br>तैयार है?</h1>${DIYA}
${SEARCH}<div class="side">← Diwali se pehle customer yahi search karta hai</div>
${list()}
<div class="foot"><div class="wa"><i></i>WhatsApp 79742 17411</div><div class="web">futuretechdigitalmarketingagency.com</div></div>`);

const GBP = page(1200, 900, `
.stripe{width:16px}
.logo{position:absolute;left:80px;top:60px;height:60px}
h1{position:absolute;left:80px;top:150px;font-size:70px}
.diya{position:absolute;right:90px;top:120px;width:200px}
.list{position:absolute;left:80px;right:80px;top:450px;padding:4px 32px;display:flex;border-radius:22px}.it{flex:1;padding:28px 0;align-items:center;gap:18px}.it+.it{border-top:none;border-left:2px dashed #E1E7EF;padding-left:26px}
.box{width:44px;height:44px}.box svg{width:28px}.h{font-size:32px;line-height:1.15}
.note{position:absolute;left:80px;top:600px;font-size:28px;color:#5F6B7A;font-weight:500}
.foot{height:96px;padding:0 80px}.foot b{font-size:30px}.web{font-size:26px}
`, `<div class="stripe"></div><img class="logo" src="${LOGO}">
<h1><span class="nw">दिवाली में <span class="mark">5 दिन</span> बाकी।</span><br><span class="blue">Google पर दुकान</span><br>तैयार है?</h1>${DIYA}
<div class="list">${[['Special timing'], ['Offer post'], ['नई photos']].map(([h]) => `<div class="it"><div class="box">${TICK}</div><div class="h hi">${h}</div></div>`).join('')}</div>
<div class="note">Google Business Profile mein aaj hi update karein.</div>
<div class="foot"><b>FutureTech, Sagar</b><div class="web">futuretechdigitalmarketingagency.com</div></div>`);

(async () => {
  const br = await require('./browser')();
  for (const [name, html, w, h] of [['Instagram_Post_1080x1350.png', IG, 1080, 1350], ['Facebook_Post_1200x1200.png', FB, 1200, 1200], ['GBP_Image_1200x900.png', GBP, 1200, 900]]) {
    const p = await br.newPage(); await p.setViewport({ width: w, height: h });
    await p.setContent(html, { waitUntil: 'networkidle0', timeout: 60000 }); await p.evaluate(async () => { await Promise.all(['400','500','600','700','800'].map(w => document.fonts.load(w + ' 30px Poppins'))); await Promise.all(['500','700','800'].map(w => document.fonts.load(w + ' 30px Mukta', 'दिवाली'))); await document.fonts.ready; });
    await p.screenshot({ path: OUT + name }); await p.close();
  }
  await br.close(); console.log('done');
})();
