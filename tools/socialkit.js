// FutureTech Social Media Brand Kit: renders 6 template PNGs + a landscape A4 PDF guide. Usage: node socialkit.js
const fs = require('fs'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const OUT = K + 'Social_Media_Kit/'; fs.mkdirSync(OUT + 'Templates', { recursive: true });
const u = f => 'data:image/png;base64,' + fs.readFileSync(f).toString('base64');
const LOGO = u(K + 'FutureTech_Logo_Transparent.png'), LOGOD = u(K + 'FutureTech_Logo_For_Dark_Background.png'), ICON = u(K + 'FutureTech_Icon_Mark.png');
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;700;800&display=swap" rel="stylesheet">';

// ---------- shared post components (same as approved post 1) ----------
const DIYA = `<svg viewBox="0 0 120 110" class="diya"><path d="M60 6c11 15 13 26 0 39C47 32 49 21 60 6z" fill="#F5A623"/><path d="M60 20c5 7 6 12 0 18-6-6-5-11 0-18z" fill="#FFD66B"/><path d="M8 58h104c-5 26-25 40-52 40S13 84 8 58z" fill="#0060A8"/><rect x="4" y="54" width="112" height="8" rx="4" fill="#041030"/></svg>`;
const TICK = `<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SEARCH = q => `<div class="search"><svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6.5" fill="none" stroke="#5F6368" stroke-width="2.2"/><path d="M15 15l5.5 5.5" stroke="#5F6368" stroke-width="2.2" stroke-linecap="round"/></svg><span>${q}</span></div>`;
const POSTCSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB;overflow:hidden;position:relative}
.hi{font-family:Mukta,sans-serif}
.logo{height:64px;display:block}
.tag{font-size:22px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#0060A8;border:2px solid #0060A8;border-radius:40px;padding:8px 20px}
h1{font-family:Mukta,sans-serif;font-weight:800;line-height:1.08;letter-spacing:-.5px;z-index:0}
.nw{white-space:nowrap}.mark{position:relative;white-space:nowrap}.mark:after{content:"";position:absolute;left:-4px;right:-4px;bottom:.2em;height:.22em;background:#FFC94D;z-index:-1;border-radius:4px}
.blue{color:#0060A8}
.search{display:flex;align-items:center;gap:20px;background:#fff;border:2px solid #DADCE0;border-radius:60px;box-shadow:0 2px 6px rgba(32,33,36,.12)}
.search span{color:#202124;font-weight:500}
.list{background:#fff;border:2px solid #E1E7EF;border-radius:24px}
.it{display:flex;align-items:flex-start;gap:24px}.it+.it{border-top:2px dashed #E1E7EF}
.box{flex:0 0 auto;border-radius:12px;background:#0060A8;display:flex;align-items:center;justify-content:center}
.h{font-weight:700;color:#041030}.s{color:#5F6B7A;font-weight:500}
.foot{position:absolute;left:0;right:0;bottom:0;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between}
.wa{display:flex;align-items:center;gap:14px;font-weight:700}.wa i{width:16px;height:16px;border-radius:50%;background:#22C55E;display:inline-block}
.web{color:#9BE3FB;font-weight:500}
`;
const FOOT = `<div class="foot" style="height:120px;padding:0 72px"><div class="wa" style="font-size:34px"><i></i>WhatsApp 79742 17411</div><div class="web" style="font-size:24px">futuretechdigitalmarketingagency.com</div></div>`;
const TOP = tag => `<div style="position:absolute;left:72px;right:72px;top:64px;display:flex;justify-content:space-between;align-items:center"><img class="logo" src="${LOGO}"><span class="tag">${tag}</span></div>`;
const LIST = items => `<div class="list" style="position:absolute;left:72px;right:72px;padding:10px 36px;TOPPOS">${items.map(([h, s]) => `<div class="it" style="padding:24px 0"><div class="box" style="width:52px;height:52px;margin-top:4px"><svg style="width:34px" ${TICK.slice(5)}</div><div><div class="h hi" style="font-size:42px;line-height:1.15">${h}</div>${s ? `<div class="s" style="font-size:24px;margin-top:4px">${s}</div>` : ''}</div></div>`).join('')}</div>`;
const post = (w, h, css, body) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${POSTCSS}body{width:${w}px;height:${h}px}${css}</style></head><body>${body}</body></html>`;

const TEMPLATES = [
  ['01_Tip_Checklist_1080x1350', 'Tip / Checklist', 'Samasya-Samadhan: ek problem, 3 steps. Sabse zyada save hone wala format.', 1080, 1350, post(1080, 1350, `h1{position:absolute;left:72px;top:190px;font-size:96px}.diya{position:absolute;right:72px;top:220px;width:150px}.search{position:absolute;left:72px;right:72px;top:530px;height:104px;padding:0 36px}.search svg{width:40px}.search span{font-size:38px}`,
    `${TOP('Diwali Tip')}<h1><span class="nw">दिवाली में <span class="mark">5 दिन</span> बाकी।</span><br><span class="blue">Google पर दुकान</span><br>तैयार है?</h1>${DIYA}${SEARCH('diwali offer near me')}<div style="position:absolute;left:72px;top:660px;font-size:30px;color:#5F6B7A;font-weight:500">Customer aapko yahin dhoondhta hai. Aaj ye 3 kaam karein:</div>${LIST([['दिवाली की special timing डालें', 'Google Business Profile → Edit profile → Hours'], ['Offer post लगाएं', 'Start date aur end date ke saath'], ['दुकान की नई photos डालें', 'Decoration, naya stock, aapki team']]).replace('TOPPOS', 'top:730px')}${FOOT}`)],
  ['02_Service_Promo_1080x1350', 'Service Promo', 'Ek service, 3 fayde, ek CTA. Price tabhi likhein jab final ho.', 1080, 1350, post(1080, 1350, `h1{position:absolute;left:72px;top:200px;font-size:88px}.mock{position:absolute;right:72px;top:210px;width:220px;height:400px;border-radius:36px;border:10px solid #041030;background:#fff;overflow:hidden}.mock i{display:block;margin:18px;border-radius:10px;background:#E1E7EF}.mock .b{height:110px;background:#00AEEF}.mock .g{position:absolute;left:18px;right:18px;bottom:22px;height:52px;border-radius:26px;background:#22C55E}`,
    `${TOP('Website')}<h1>दुकान की<br>अपनी <span class="mark">website</span><br><span class="blue">WhatsApp order</span><br>के साथ</h1><div class="mock"><i class="b"></i><i style="height:22px;width:55%"></i><i style="height:16px;width:75%"></i><i style="height:16px;width:65%"></i><i style="height:70px"></i><span class="g"></span></div>${LIST([['Mobile पर fast खुले', 'Har phone par saaf dikhe'], ['Google पर दिखे', 'Basic SEO aur Google Business Profile link'], ['WhatsApp order button', 'Customer seedha aapse baat kare']]).replace('TOPPOS', 'top:740px')}${FOOT}`)],
  ['03_Festive_Greeting_1080x1350', 'Festive Greeting', 'Tyohaar ke din sirf shubhkamna. Koi offer ya price nahi, motif 30% se kam.', 1080, 1350, post(1080, 1350, `body{background:#FFFDF8}.frame{position:absolute;inset:36px;border:3px solid #00AEEF;border-radius:28px}.diya{position:absolute;left:50%;top:300px;width:300px;transform:translateX(-50%)}h1{position:absolute;left:0;right:0;top:600px;text-align:center;font-size:150px;color:#041030}.sub{position:absolute;left:120px;right:120px;top:820px;text-align:center;font-size:44px;font-weight:600;color:#5F6B7A;font-family:Mukta}.lg{position:absolute;left:50%;bottom:110px;transform:translateX(-50%);height:90px}.dots{position:absolute;left:50%;top:540px;transform:translateX(-50%);display:flex;gap:18px}.dots b{width:14px;height:14px;border-radius:50%;background:#FFC94D}.dots b:nth-child(2n){background:#00AEEF}`,
    `<div class="frame"></div>${DIYA}<div class="dots"><b></b><b></b><b></b><b></b><b></b></div><h1>शुभ दीपावली</h1><div class="sub">आपके व्यापार में रोशनी और बरकत बनी रहे।<br>— FutureTech परिवार, सागर</div><img class="lg" src="${LOGO}">`)],
  ['04_Client_Work_1080x1350', 'Client Work Showcase', 'Asli client ka screenshot lagayein, sirf permission ke baad. Fake result nahi.', 1080, 1350, post(1080, 1350, `h1{position:absolute;left:72px;top:190px;font-size:84px}.sub{position:absolute;left:72px;top:390px;font-size:32px;color:#5F6B7A;font-weight:500}.lap{position:absolute;left:72px;right:72px;top:470px;height:520px;border-radius:24px 24px 0 0;border:14px solid #041030;border-bottom:0;background:#E9EEF5;display:flex;align-items:center;justify-content:center;color:#8A97A8;font-size:30px;font-weight:600}.base{position:absolute;left:40px;right:40px;top:990px;height:28px;border-radius:0 0 18px 18px;background:#041030}.chips{position:absolute;left:72px;right:72px;top:1060px;display:flex;gap:16px}.chips span{flex:1;text-align:center;padding:16px 0;border-radius:40px;background:#fff;border:2px solid #E1E7EF;font-size:26px;font-weight:600;color:#0060A8}`,
    `${TOP('Our Work')}<h1>Client का नाम, <span class="blue">सागर</span></h1><div class="sub">Website + Google Business Profile setup</div><div class="lap">[ Client website screenshot ]</div><div class="base"></div><div class="chips"><span>Mobile-ready</span><span>SEO basics</span><span>WhatsApp button</span></div>${FOOT}`)],
  ['05_Myth_Fact_1080x1350', 'Myth vs Fact', 'Ek galat-fehmi todein. Fact sirf wahi likhein jo sach ho aur bina number ke samjhaya ja sake.', 1080, 1350, post(1080, 1350, `h1{position:absolute;left:72px;top:190px;font-size:96px}.c{position:absolute;left:72px;right:72px;border-radius:28px;padding:40px 44px}.c b{display:inline-block;font-size:24px;letter-spacing:.12em;padding:8px 18px;border-radius:30px;margin-bottom:18px}.c p{font-family:Mukta;font-weight:700;font-size:48px;line-height:1.2}.m{top:430px;background:#fff;border:2px solid #E1E7EF}.m b{background:#EEF1F5;color:#5F6B7A}.m p{color:#5F6B7A;text-decoration:line-through;text-decoration-thickness:4px}.f{top:720px;background:#0060A8;color:#fff}.f b{background:#FFC94D;color:#041030}`,
    `${TOP('Myth vs Fact')}<h1>सच या <span class="mark">Myth</span>?</h1><div class="c m"><b>MYTH</b><p>“छोटी दुकान को website की ज़रूरत नहीं।”</p></div><div class="c f"><b>FACT</b><p>बहुत से customer दुकान जाने से पहले Google पर check करते हैं — वहाँ दिखना ज़रूरी है।</p></div>${FOOT}`)],
  ['06_Story_Poll_1080x1920', 'Story / Poll', 'Story mein sawaal poochhein. Poll sticker Instagram app mein beech wale khaali hisse par lagayein.', 1080, 1920, post(1080, 1920, `.lg{position:absolute;left:72px;top:260px;height:70px}h1{position:absolute;left:72px;right:72px;top:420px;font-size:110px}.poll{position:absolute;left:120px;right:120px;top:900px;height:340px;border:4px dashed #B9C6D6;border-radius:36px;display:flex;align-items:center;justify-content:center;color:#8A97A8;font-size:32px;font-weight:600}.bt{position:absolute;left:72px;right:72px;bottom:400px;text-align:center;font-size:34px;color:#5F6B7A;font-weight:500}`,
    `<img class="lg" src="${LOGO}"><h1>आपकी दुकान<br><span class="blue">Google Maps</span> पर<br><span class="mark">दिखती</span> है?</h1><div class="poll">[ Poll sticker: Haan / Nahi ]</div><div class="bt">Jawab dein — hum free tip bhejenge</div>`)],
];

// ---------- guide pages (A4 landscape 1123x794) ----------
const W = 1123, H = 794;
const tpl = n => u(OUT + 'Templates/' + n + '.png');
const GCSS = `
*{margin:0;padding:0;box-sizing:border-box}
@page{size:${W}px ${H}px;margin:0}
body{font-family:Poppins,sans-serif;color:#041030;background:#fff}
.hi{font-family:Mukta,sans-serif}
.pg{width:${W}px;height:${H}px;position:relative;overflow:hidden;page-break-after:always;padding:56px 64px 64px;background:#fff}
.pg:last-child{page-break-after:auto}
.num{position:absolute;right:64px;bottom:26px;font-size:11px;color:#8A97A8;letter-spacing:.08em}
.brandfoot{position:absolute;left:64px;bottom:26px;font-size:11px;color:#8A97A8;letter-spacing:.08em}
.kick{font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#00AEEF}
h2{font-size:34px;font-weight:700;margin:6px 0 4px;letter-spacing:-.3px}
.lead{font-size:14px;color:#5F6B7A;max-width:760px;line-height:1.6}
.g{display:grid;gap:18px}
.card{border:1px solid #E1E7EF;border-radius:16px;padding:18px;background:#fff;overflow:hidden;min-width:0}
.card h4{font-size:14px;margin-bottom:6px}.card p,.card li{font-size:12px;color:#5F6B7A;line-height:1.55}
ul{padding-left:16px}
.x{position:relative}.x:after{content:"✕";position:absolute;top:8px;right:10px;width:24px;height:24px;border-radius:50%;background:#E5484D;color:#fff;font-size:13px;display:flex;align-items:center;justify-content:center;font-weight:700}
.ok{position:relative}.ok:after{content:"✓";position:absolute;top:8px;right:10px;width:24px;height:24px;border-radius:50%;background:#22C55E;color:#fff;font-size:14px;display:flex;align-items:center;justify-content:center;font-weight:700}
table{border-collapse:collapse;width:100%;font-size:12px}td,th{border-bottom:1px solid #E1E7EF;padding:9px 10px;text-align:left;vertical-align:top}th{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#5F6B7A}
${POSTCSS.replace(/body\{[^}]*\}/, '').replace('*{margin:0;padding:0;box-sizing:border-box}', '')}
`;
const page = (n, kick, title, lead, body) => `<section class="pg"><div class="kick">${kick}</div><h2>${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ''}${body}<div class="brandfoot">FUTURETECH · SOCIAL MEDIA BRAND KIT · V1.0</div><div class="num">${String(n).padStart(2, '0')}</div></section>`;

const SW = [['#041030', 'Deep Navy', '4, 16, 48', 'Headlines, footer bar'], ['#0060A8', 'Royal Blue', '0, 96, 168', 'Key words, checkboxes, tags'], ['#00AEEF', 'Sky Blue', '0, 174, 239', 'Accent lines, links'], ['#00D4FF', 'Electric Cyan', '0, 212, 255', 'Rare highlight only'], ['#F4F7FB', 'Cloud White', '244, 247, 251', 'Post background'], ['#5F6B7A', 'Slate Grey', '95, 107, 122', 'Sub-text, notes'], ['#FFC94D', 'Diya Gold', '255, 201, 77', 'Highlight marker'], ['#22C55E', 'WhatsApp Green', '34, 197, 94', 'CTA dot / button only']];

const guide = () => {
  const p = [];
  p.push(`<section class="pg" style="background:#F4F7FB;padding:0"><div style="position:absolute;left:0;top:0;bottom:0;width:16px;background:#00AEEF"></div>
  <div style="position:absolute;left:80px;top:70px"><img src="${LOGO}" style="height:80px"></div>
  <div style="position:absolute;left:80px;top:230px;width:520px"><div class="kick">Brand Kit · Version 1.0 · November 2026</div><h1 style="font-family:Poppins;font-size:58px;line-height:1.05;margin-top:12px;letter-spacing:-1px">Social Media<br><span class="blue">Brand Kit</span></h1><p class="lead" style="margin-top:20px;font-size:15px">Instagram, Facebook aur Google Business Profile ke liye FutureTech ki posts kaise dikhengi: logo, colours, fonts, components, sizes, templates aur caption rules.</p></div>
  <div style="position:absolute;right:60px;top:90px;display:flex;gap:16px;transform:rotate(-4deg)">${['01_Tip_Checklist_1080x1350', '03_Festive_Greeting_1080x1350', '05_Myth_Fact_1080x1350'].map((n, i) => `<img src="${tpl(n)}" style="width:150px;border-radius:10px;box-shadow:0 14px 34px rgba(4,16,48,.18);margin-top:${i * 40}px">`).join('')}</div>
  <div style="position:absolute;right:60px;bottom:70px;display:flex;gap:16px;transform:rotate(-4deg)">${['02_Service_Promo_1080x1350', '04_Client_Work_1080x1350'].map((n, i) => `<img src="${tpl(n)}" style="width:150px;border-radius:10px;box-shadow:0 14px 34px rgba(4,16,48,.18);margin-top:${i * 40}px">`).join('')}</div>
  <div style="position:absolute;left:80px;bottom:56px;font-size:12px;color:#5F6B7A">FutureTech Digital Marketing Agency · Sagar, Madhya Pradesh · futuretechdigitalmarketingagency.com</div></section>`);

  p.push(page(2, '01 · Logo', 'Logo usage', 'Hamesha original file use karein. Logo ko kabhi dobara type, redraw ya recolour na karein.', `
  <div class="g" style="grid-template-columns:1fr 1fr 1fr;margin-top:22px">
   <div class="card ok" style="height:170px;display:flex;align-items:center;justify-content:center;background:#F4F7FB"><img src="${LOGO}" style="height:90px"></div>
   <div class="card ok" style="height:170px;display:flex;align-items:center;justify-content:center;background:#041030"><img src="${LOGOD}" style="height:90px"></div>
   <div class="card ok" style="height:170px;display:flex;align-items:center;justify-content:center;background:#fff"><img src="${ICON}" style="height:90px"></div>
  </div>
  <div class="g" style="grid-template-columns:1fr 1fr 1fr;margin-top:8px;font-size:12px;color:#5F6B7A"><div><b style="color:#041030">Primary</b> — light background (sabhi posts)</div><div><b style="color:#041030">Dark version</b> — navy background, "Tech" white</div><div><b style="color:#041030">Icon mark</b> — profile photo, chhoti jagah</div></div>
  <div class="g" style="grid-template-columns:1.1fr 1.9fr;margin-top:22px">
   <div class="card"><h4>Clear space &amp; size</h4><ul><li>Logo ke chaaron taraf kam se kam cube-icon ki aadhi height jitni khaali jagah.</li><li>1080px post par logo ki height 60–70px (top-left).</li><li>Icon mark kabhi 48px se chhota nahi.</li><li>Ek post par logo sirf ek baar.</li></ul></div>
   <div class="g" style="grid-template-columns:repeat(5,1fr);gap:12px">
    ${[['transform:scaleX(1.5)', 'Stretch na karein'], ['filter:hue-rotate(140deg)', 'Colour na badlein'], ['filter:drop-shadow(0 0 10px #00D4FF) drop-shadow(0 0 10px #00D4FF)', 'Glow/shadow nahi'], ['transform:rotate(-14deg)', 'Ghumaayein nahi'], ['', 'Busy background nahi']].map(([s, t], i) => `<div class="card x" style="padding:10px;text-align:center"><div style="height:96px;display:flex;align-items:center;justify-content:center;border-radius:10px;overflow:hidden;${i === 4 ? 'background:repeating-linear-gradient(45deg,#FFC94D 0 10px,#F5A623 10px 20px,#00AEEF 20px 30px)' : 'background:#F4F7FB'}"><img src="${LOGO}" style="height:44px;${s}"></div><p style="margin-top:8px;font-size:11px;color:#041030;font-weight:600">${t}</p></div>`).join('')}
   </div></div>`));

  p.push(page(3, '02 · Colour', 'Colour palette', 'Light, saaf background hamari pehchaan hai. Dark glow wale backgrounds AI-generated jaise lagte hain — unse bachein.', `
  <div class="g" style="grid-template-columns:repeat(4,1fr);margin-top:22px;gap:14px">${SW.map(([h, n, r, use]) => `<div class="card" style="padding:0;overflow:hidden"><div style="height:86px;background:${h};border-bottom:1px solid #E1E7EF"></div><div style="padding:12px 14px"><h4 style="margin:0">${n}</h4><p style="font-family:monospace;color:#041030">${h} · RGB ${r}</p><p>${use}</p></div></div>`).join('')}</div>
  <h4 style="font-size:14px;margin:24px 0 8px">Har post mein colour ka balance</h4>
  <div style="display:flex;height:42px;border-radius:12px;overflow:hidden;font-size:12px;font-weight:600"><div style="flex:60;background:#F4F7FB;border:1px solid #E1E7EF;display:flex;align-items:center;padding-left:14px">60% Cloud White</div><div style="flex:25;background:#041030;color:#fff;display:flex;align-items:center;padding-left:14px">25% Navy</div><div style="flex:10;background:#0060A8;color:#fff;display:flex;align-items:center;padding-left:10px">10% Blue</div><div style="flex:5;background:#FFC94D"></div></div>
  <p class="lead" style="margin-top:10px">Diya Gold aur WhatsApp Green sirf chhote accent ke liye (highlight marker, CTA dot). Festive posts mein bhi brand blue hi base rahe — gold motif canvas ke 30% se zyada nahi.</p>`));

  p.push(page(4, '03 · Typography', 'Fonts', 'Sirf do fonts. Dono Google Fonts par free hain (Canva mein bhi milte hain).', `
  <div class="g" style="grid-template-columns:1fr 1fr;margin-top:22px">
   <div class="card" style="padding:26px"><div class="kick" style="color:#5F6B7A">Headline · Hindi</div><div class="hi" style="font-size:64px;font-weight:800;line-height:1.1;margin:10px 0">Mukta ExtraBold</div><div class="hi" style="font-size:40px;font-weight:800">दिवाली में <span class="mark">5 दिन</span> बाकी।</div><p class="lead" style="margin-top:12px">Devanagari headlines ke liye. Weight 800 (headline), 700 (list items).</p></div>
   <div class="card" style="padding:26px"><div class="kick" style="color:#5F6B7A">Body · English / Hinglish</div><div style="font-size:52px;font-weight:700;line-height:1.1;margin:10px 0 18px">Poppins</div><div style="font-size:22px;font-weight:500;color:#5F6B7A">Customer aapko yahin dhoondhta hai.</div><p class="lead" style="margin-top:12px">Roman Hinglish sub-text, tags, footer aur numbers ke liye. Weight 500–700.</p></div>
  </div>
  <table style="margin-top:20px"><tr><th>Role</th><th>Font</th><th>Size (1080px post)</th><th>Rule</th></tr>
  <tr><td>Headline</td><td>Mukta 800</td><td>84–110 px</td><td>Max 3 lines, ek shabd Diya Gold marker se highlight</td></tr>
  <tr><td>List item</td><td>Mukta 700</td><td>38–48 px</td><td>Max 3 items</td></tr>
  <tr><td>Sub-text / note</td><td>Poppins 500</td><td>24–32 px</td><td>Slate Grey colour</td></tr>
  <tr><td>Tag pill</td><td>Poppins 600 caps</td><td>22 px</td><td>Royal Blue outline</td></tr>
  <tr><td>Footer</td><td>Poppins 700 / 500</td><td>34 / 24 px</td><td>Kabhi 22px se chhota text nahi</td></tr></table>`));

  p.push(page(5, '04 · Components', 'Design components', 'Har post inhi building blocks se banti hai — isse saari posts ek family jaisi dikhti hain.', `
  <div class="g" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr);margin-top:20px">
   <div class="card"><h4>Search bar — "customer kya search karta hai"</h4><div style="transform:scale(.5);transform-origin:left top;width:800px;height:58px">${SEARCH('diwali offer near me').replace('class="search"', 'class="search" style="height:104px;padding:0 36px"').replace('<svg', '<svg style="width:40px"').replace('<span>', '<span style="font-size:38px">')}</div></div>
   <div class="card"><h4>Highlight marker + tag pill</h4><div style="display:flex;align-items:center;gap:30px;margin-top:6px"><span class="hi" style="font-size:44px;font-weight:800;position:relative;z-index:0"><span class="mark">5 दिन</span></span><span class="tag" style="font-size:14px">Diwali Tip</span></div></div>
   <div class="card"><h4>Checklist card</h4><div style="transform:scale(.5);transform-origin:left top;width:900px;height:120px;position:relative">${LIST([['दिवाली की special timing डालें', 'Google Business Profile → Hours']]).replace('position:absolute;left:72px;right:72px;', 'position:relative;').replace('TOPPOS', '')}</div></div>
   <div class="card"><h4>Footer bar (har post ke neeche)</h4><div style="transform:scale(.41);transform-origin:left top;width:1080px;height:52px;position:relative">${FOOT.replace(`class="foot" style="`, `class="foot" style="top:0;bottom:auto;`)}</div></div>
   <div class="card" style="display:flex;gap:18px;align-items:center"><div style="width:70px">${DIYA}</div><div><h4>Festive motif</h4><p>Flat, simple shapes. Ek motif, chhota. Deity image par kabhi logo ya price nahi.</p></div></div>
   <div class="card" style="display:flex;gap:18px;align-items:center"><div style="width:52px;height:52px;border-radius:12px;background:#0060A8;display:flex;align-items:center;justify-content:center"><svg style="width:34px" ${TICK.slice(5)}</div><div><h4>Check box</h4><p>Royal Blue, 12px radius. Steps aur fayde dikhane ke liye.</p></div></div>
  </div>`));

  const frame = (w, h, label, sz, safe) => `<div style="text-align:center"><div style="width:${w}px;height:${h}px;border:2px solid #041030;border-radius:10px;position:relative;background:#F4F7FB;margin:0 auto">${safe || ''}<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column"><b style="font-size:14px">${sz}</b><span style="font-size:11px;color:#5F6B7A">${label}</span></div></div></div>`;
  p.push(page(6, '05 · Sizes', 'Platform sizes & safe zones', 'Har platform ke liye alag image banaayein — ek hi image har jagah crop ho jaati hai.', `
  <div style="display:flex;gap:34px;align-items:flex-end;margin-top:22px">
   ${frame(144, 180, 'Instagram feed · 4:5', '1080 × 1350')}
   ${frame(144, 256, 'Story / Reel · 9:16', '1080 × 1920', '<div style="position:absolute;left:0;right:0;top:0;height:19px;background:rgba(229,72,77,.18)"></div><div style="position:absolute;left:0;right:0;bottom:0;height:45px;background:rgba(229,72,77,.18)"></div>')}
   ${frame(170, 170, 'Facebook feed · 1:1', '1200 × 1200')}
   ${frame(200, 150, 'Google Business · 4:3', '1200 × 900')}
  </div>
  <table style="margin-top:26px"><tr><th>Platform</th><th>Size</th><th>Margin</th><th>Notes</th></tr>
  <tr><td>Instagram feed</td><td>1080 × 1350</td><td>72 px</td><td>Grid mein 3:4 crop dikhta hai — headline upar ke 1/3 mein</td></tr>
  <tr><td>Story / Reel cover</td><td>1080 × 1920</td><td>72 px</td><td>Upar 250px aur neeche 340px mein text nahi (red zone — app ke buttons)</td></tr>
  <tr><td>Facebook</td><td>1200 × 1200</td><td>80 px</td><td>Thoda local touch: "Sagar ke dukaandaron ke liye"</td></tr>
  <tr><td>Google Business Profile</td><td>1200 × 900</td><td>80 px</td><td>Kam text, phone number image/text mein nahi, hashtag nahi</td></tr></table>`));

  const tcard = t => `<div><img src="${tpl(t[0])}" style="width:100%;border-radius:10px;border:1px solid #E1E7EF;display:block"><h4 style="font-size:13px;margin-top:8px">${t[1]}</h4><p style="font-size:11px;color:#5F6B7A;line-height:1.45">${t[2]}</p></div>`;
  p.push(page(7, '06 · Templates', 'Post templates (1/2)', '', `<div class="g" style="grid-template-columns:repeat(3,1fr);gap:30px;margin-top:14px;padding:0 70px">${TEMPLATES.slice(0, 3).map(tcard).join('')}</div>`));
  p.push(page(8, '06 · Templates', 'Post templates (2/2)', '', `<div class="g" style="grid-template-columns:1fr 1fr 0.75fr;gap:30px;margin-top:14px;padding:0 70px;align-items:start">${TEMPLATES.slice(3, 5).map(tcard).join('')}<div><img src="${tpl(TEMPLATES[5][0])}" style="width:100%;border-radius:10px;border:1px solid #E1E7EF;display:block"><h4 style="font-size:13px;margin-top:8px">${TEMPLATES[5][1]}</h4><p style="font-size:11px;color:#5F6B7A;line-height:1.45">${TEMPLATES[5][2]}</p></div></div>`));

  p.push(page(9, '07 · Voice', 'Captions, CTA & hashtags', 'Hum ek jaankar dost ki tarah baat karte hain — seedhi, kaam ki baat, bina bade daavon ke.', `
  <div class="g" style="grid-template-columns:1fr 1fr 1fr;margin-top:20px">
   <div class="card"><h4>Caption formula</h4><ul><li><b>Hook</b> (pehle ~125 characters): sawaal ya problem</li><li><b>Value</b>: 3 steps / fayde, emoji numbers</li><li><b>Ek CTA</b>: WhatsApp</li><li>Roman Hinglish caption, Devanagari sirf graphic par</li><li>Koi fake number, fake review ya "guaranteed #1" nahi</li></ul></div>
   <div class="card"><h4>CTA bank</h4><ul><li>Madad chahiye? WhatsApp karein: 79742 17411</li><li>WhatsApp par "GBP" likhein</li><li>Post save karein, dukaandar doston ko bhejein</li><li>Profile par Call / Chat button dabaayein (GBP)</li><li>Apna sawaal comment mein likhein</li></ul></div>
   <div class="card"><h4>Hashtags</h4><table><tr><td><b>Instagram</b></td><td>3–5 · #SagarMP #LocalSEO #SmallBusinessIndia + 1–2 topic tags</td></tr><tr><td><b>Facebook</b></td><td>0–2 · #SagarMP</td></tr><tr><td><b>GBP</b></td><td>Koi nahi</td></tr></table></div>
  </div>
  <div class="card" style="margin-top:18px"><h4>Content pillars</h4><table><tr><th>Pillar</th><th>Format</th><th>Template</th></tr><tr><td>Samasya-Samadhan (tips)</td><td>Post / carousel / Reel</td><td>01 Tip, 05 Myth vs Fact</td></tr><tr><td>Service</td><td>Post</td><td>02 Service Promo</td></tr><tr><td>Proof (client work)</td><td>Post / Reel</td><td>04 Client Work</td></tr><tr><td>Tyohaar</td><td>Post (din par)</td><td>03 Festive</td></tr><tr><td>Engagement</td><td>Story</td><td>06 Story / Poll</td></tr></table></div>`));

  p.push(page(10, '08 · Rules', "Do & Don't", 'Ye list har post publish karne se pehle check karein.', `
  <div class="g" style="grid-template-columns:1fr 1fr;margin-top:20px">
   <div class="card" style="border-color:#22C55E"><h4 style="color:#16A34A">✓ Do</h4><ul><li>Light Cloud White background, flat colours</li><li>Asli UI elements (search bar, checklist) — real lagta hai</li><li>Ek post = ek message</li><li>Bade Hindi headline, max 3 lines</li><li>Asli client screenshots, sirf permission ke saath</li><li>Festival se pehle useful tip, din par sirf greeting</li><li>Har platform ka apna size aur caption</li><li>Alt text har image par</li></ul></div>
   <div class="card" style="border-color:#E5484D"><h4 style="color:#E5484D">✕ Don't</h4><ul><li>Dark neon glow, floating particles, 3D chrome — AI jaisa lagta hai</li><li>Nakli rating stars, fake reviews, unverified stats</li><li>Stock photo ke upar bhara hua text</li><li>Deity image par logo ya price</li><li>National flag, emblem ya netaon ki photo</li><li>Teen se zyada colours ya do se zyada fonts</li><li>Price/offer jo final na ho</li><li>GBP post mein phone number ya hashtags</li></ul></div>
  </div>
  <div class="card" style="margin-top:18px;background:#F4F7FB"><h4>Approval workflow</h4><p>1. Brief (mobile se) → 2. Graphic + 3 captions banaayein → 3. Founder ko preview → 4. OK ke baad /social folder mein upload → 5. Buffer se schedule (IG, FB, GBP) → 6. Agle din reach check.</p></div>`));
  return `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${GCSS}</style></head><body>${p.join('')}</body></html>`;
};

const fontsReady = async p => p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(w => document.fonts.load(w + ' 30px Poppins'))); await Promise.all(['500', '700', '800'].map(w => document.fonts.load(w + ' 30px Mukta', 'दिवाली'))); await document.fonts.ready; });
(async () => {
  const br = await require('./browser')();
  for (const [name, , , w, h, html] of TEMPLATES) {
    const p = await br.newPage(); await p.setViewport({ width: w, height: h });
    await p.setContent(html, { waitUntil: 'networkidle0', timeout: 60000 }); await fontsReady(p);
    await p.screenshot({ path: OUT + 'Templates/' + name + '.png' }); await p.close();
  }
  const g = await br.newPage(); await g.setViewport({ width: W, height: H });
  await g.setContent(guide(), { waitUntil: 'load', timeout: 180000 }); await fontsReady(g);
  await g.pdf({ path: OUT + 'FutureTech_Social_Media_Brand_Kit.pdf', width: W + 'px', height: H + 'px', printBackground: true });
  await br.close(); console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
