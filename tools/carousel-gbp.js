// Info carousel "Google Business Profile kya hai + fayde": IG 1080x1350 x8, FB 1080x1080 x8, GBP 1200x900 x1. Usage: node carousel-gbp.js
const fs = require('fs'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const OUT = require('path').join(__dirname, '..', 'posts', '2026-11-05_GBP_Info_Carousel') + '/'; fs.mkdirSync(OUT, { recursive: true });
const LOGO = 'data:image/png;base64,' + fs.readFileSync(K + 'FutureTech_Logo_Transparent.png').toString('base64');
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';
const N = 8;

// ---------- flat illustrations ----------
const I = (d, c = '#0060A8', w = 2) => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const IC = {
  phone: '<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  dir: '<path d="M12 2l10 10-10 10L2 12z"/><path d="M9 13v-2a1 1 0 0 1 1-1h5"/><path d="M13 8l2 2-2 2"/>',
  web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  pin: '<path d="M12 22s-7-7.6-7-12.5a7 7 0 0 1 14 0C19 14.4 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.5"/>',
  tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  cam: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  save: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  send: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
};
const TICK = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const listing = (big = true) => `<div class="lc ${big ? '' : 'sm'}"><div class="lc-img"><svg viewBox="0 0 300 120" preserveAspectRatio="xMidYMid slice"><rect width="300" height="120" fill="#FFF4D6"/><rect x="20" y="22" width="260" height="26" rx="6" fill="#E5484D"/><path d="M20 48h260l-14 22H34z" fill="#F7B7B5"/><rect x="36" y="70" width="228" height="50" fill="#fff"/><rect x="50" y="80" width="70" height="40" fill="#BFE3F7"/><rect x="140" y="80" width="50" height="30" fill="#FFC94D"/><rect x="200" y="80" width="50" height="30" fill="#00AEEF"/></svg></div>
<div class="lc-b"><div class="lc-t">Aapki Dukaan</div><div class="lc-s">Kirana store · <b style="color:#16A34A">Open</b> · Shaam 9 baje tak</div><div class="lc-s" style="display:flex;align-items:center;gap:8px">${I(IC.pin,'#E5484D')}Main Road, aapka shehar</div>
<div class="lc-btn"><span>${I(IC.phone)}Call</span><span>${I(IC.dir)}Directions</span><span>${I(IC.web)}Website</span></div></div></div>`;
const search = q => `<div class="search"><svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6.5" fill="none" stroke="#5F6368" stroke-width="2.2"/><path d="M15 15l5.5 5.5" stroke="#5F6368" stroke-width="2.2" stroke-linecap="round"/></svg><span>${q}</span></div>`;
const mapPins = `<div class="map"><svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice"><rect width="600" height="300" fill="#fff"/><path d="M0 90h600M0 210h600M150 0v300M330 0v300M480 0v300" stroke="#E9EEF5" stroke-width="18"/>
<g fill="#C5CEDA"><path d="M90 70c0 18-18 38-18 38s-18-20-18-38a18 18 0 0 1 36 0z"/><path d="M420 240c0 18-18 38-18 38s-18-20-18-38a18 18 0 0 1 36 0z"/><path d="M540 80c0 18-18 38-18 38s-18-20-18-38a18 18 0 0 1 36 0z"/></g>
<path d="M300 110c0 34-34 72-34 72s-34-38-34-72a34 34 0 0 1 68 0z" fill="#E5484D"/><circle cx="266" cy="110" r="13" fill="#fff"/><rect x="310" y="96" width="180" height="40" rx="10" fill="#041030"/><text x="400" y="123" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="20" fill="#fff">Aapki Dukaan</text></svg></div>`;
const reviews = `<div class="rv"><div class="rvi"><i style="background:#00AEEF">R</i><div><b>Ramesh</b><p>“Saman achha aur time par delivery.”</p></div></div>
<div class="rvi reply"><i style="background:#0060A8">A</i><div><b>Aapki Dukaan <small>(jawab)</small></b><p>“Dhanyavaad Ramesh ji, phir padhariye!”</p></div></div>
<div class="rvi"><i style="background:#F5A623">S</i><div><b>Sunita</b><p>“Diwali offer ki jaankari Google par hi mili.”</p></div></div></div>`;
const posts = `<div class="pg"><div class="pgc"><div class="pgi" style="background:#FFE7A8">${I(IC.tag,'#0060A8',1.6)}</div><b>Offer</b><small>Start–end date ke saath</small></div><div class="pgc"><div class="pgi" style="background:#BFE3F7">${I(IC.cam,'#0060A8',1.6)}</div><b>Photos</b><small>Dukaan, stock, team</small></div><div class="pgc"><div class="pgi" style="background:#CFE7D8">${I(IC.clock,'#0060A8',1.6)}</div><b>Timing</b><small>Tyohaar ke special hours</small></div></div>`;
const steps = items => `<div class="steps">${items.map(([h, s], i) => `<div class="st"><div class="sn">${i + 1}</div><div><div class="sh hi">${h}</div><div class="ss">${s}</div></div></div>`).join('')}</div>`;

// ---------- slide content ----------
const SLIDES = [
  { kind: 'cover', h: 'Google Business Profile<br><span class="mk">क्या है?</span>', s: 'और आपकी दुकान को इससे क्या फ़ायदा — 2 मिनट में समझिए', art: listing() },
  { tag: 'क्या है', h: 'Google पर आपकी दुकान का <span class="blue">free profile</span>', s: 'Google Search और Google Maps पर दिखता है — नाम, पता, timing, phone, photos और reviews एक जगह।', art: listing(false) },
  { tag: 'फ़ायदा 1', h: '“Near me” search में <span class="blue">आपकी दुकान</span>', s: 'जब कोई आपके शहर में आपकी तरह की दुकान ढूँढता है, तो profile वाली दुकानें Maps पर दिखती हैं।', art: search('kirana store near me') + mapPins },
  { tag: 'फ़ायदा 2', h: 'Call, रास्ता, website — <span class="blue">एक tap में</span>', s: 'Customer को नंबर ढूँढना नहीं पड़ता। Profile से सीधे call करे, रास्ता देखे या website खोले।', art: `<div class="big3"><div>${I(IC.phone,'#0060A8',1.6)}Call</div><div>${I(IC.dir,'#0060A8',1.6)}Directions</div><div>${I(IC.web,'#0060A8',1.6)}Website</div></div>` + listing(false) },
  { tag: 'फ़ायदा 3', h: 'Reviews से <span class="blue">भरोसा</span>', s: 'नए customer reviews पढ़कर फ़ैसला करते हैं। हर review का शुक्रिया और जवाब देना न भूलें।', art: reviews },
  { tag: 'फ़ायदा 4', h: 'Offer, photos और <span class="blue">updates</span>', s: 'Profile पर offer post, नई photos और त्योहार की timing डाल सकते हैं — बिल्कुल social media की तरह।', art: posts },
  { tag: 'शुरू कैसे करें', h: '3 steps में <span class="mk">शुरुआत</span>', s: '', art: steps([['Profile बनाएँ या claim करें', 'Google Business Profile पर अपनी दुकान खोजें'], ['Verify करें', 'Google जो तरीका बताए, उससे पुष्टि करें'], ['पूरी जानकारी भरें', 'Category, timing, phone, photos — सब सही']]) },
  { kind: 'cta', h: 'Setup में <span class="blue">मदद चाहिए?</span>', s: 'Profile बनाना, verify करना और सही तरीके से भरना — FutureTech मदद करेगा।', art: '' },
];

const CSS = (W, H) => `
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB}
.hi{font-family:Mukta,sans-serif}
.wrap{position:absolute;inset:0;padding:${H > 1100 ? 70 : 56}px 72px ${H > 1100 ? 150 : 128}px;display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:${H > 1100 ? 44 : 28}px}
.top img{height:${H > 1100 ? 60 : 52}px}
.tag{font-size:22px;font-weight:600;letter-spacing:.06em;color:#0060A8;border:2px solid #0060A8;border-radius:40px;padding:8px 20px;font-family:Mukta}
.cnt{font-size:22px;font-weight:600;color:#8A97A8}
h1{font-family:Mukta;font-weight:800;font-size:${H > 1100 ? 84 : 72}px;line-height:1.08;letter-spacing:-.5px;position:relative;z-index:0}
.blue{color:#0060A8}.mk{background:linear-gradient(transparent 72%,#FFC94D 72%,#FFC94D 90%,transparent 90%);padding:0 6px}
.sub{font-family:Mukta;font-weight:600;font-size:${H > 1100 ? 38 : 33}px;line-height:1.35;color:#5F6B7A;margin-top:${H > 1100 ? 22 : 14}px}
.art{flex:1;display:flex;flex-direction:column;justify-content:center;gap:24px;margin-top:20px}
.foot{position:absolute;left:0;right:0;bottom:0;height:${H > 1100 ? 100 : 88}px;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 72px}
.foot .w{color:#9BE3FB;font-size:22px;font-weight:500}.dots{display:flex;gap:10px}.dots i{width:12px;height:12px;border-radius:6px;background:#3A4A6B}.dots i.on{width:34px;background:#00AEEF}
.swipe{font-size:24px;font-weight:700;display:flex;align-items:center;gap:10px}
/* listing card */
.lc{background:#fff;border:2px solid #DADCE0;border-radius:28px;overflow:hidden;box-shadow:0 2px 8px rgba(32,33,36,.12)}
.lc-img{height:${H > 1100 ? 260 : 200}px}.lc-img svg{width:100%;height:100%;display:block}
.lc-b{padding:24px 30px 28px}.lc-t{font-size:40px;font-weight:700}.lc-s{font-size:26px;color:#5F6B7A;margin-top:6px}
.ico{display:inline-block;vertical-align:middle}.lc-s .ico{width:28px;height:28px}.lc-btn .ico{width:26px;height:26px;margin-right:8px}.big3 .ico{display:block;width:${H > 1100 ? 84 : 64}px;height:${H > 1100 ? 84 : 64}px;margin:0 auto 12px}.pgi .ico{width:${H > 1100 ? 100 : 76}px;height:${H > 1100 ? 100 : 76}px}.save .ico{display:block;width:46px;height:46px;margin:0 auto 8px}
.lc-btn{display:flex;gap:14px;margin-top:20px}.lc-btn span{flex:1;display:flex;align-items:center;justify-content:center;padding:14px 0;border:2px solid #D5DDE7;border-radius:40px;font-size:24px;font-weight:600;color:#0060A8}
.lc.sm .lc-img{height:${H > 1100 ? 200 : 140}px}
.search{display:flex;align-items:center;gap:18px;background:#fff;border:2px solid #DADCE0;border-radius:60px;height:96px;padding:0 34px;box-shadow:0 2px 6px rgba(32,33,36,.12)}.search svg{width:38px}.search span{font-size:36px;font-weight:500;color:#202124}
.map{border-radius:26px;overflow:hidden;border:2px solid #E1E7EF;height:${H > 1100 ? 380 : 270}px}.map svg{width:100%;height:100%;display:block}
.big3{display:flex;gap:22px}.big3 div{flex:1;background:#fff;border:2px solid #E1E7EF;border-radius:28px;padding:${H > 1100 ? 40 : 24}px 0;text-align:center;font-size:32px;font-weight:700;color:#0060A8}.big3 span{display:block;font-size:${H > 1100 ? 90 : 70}px;margin-bottom:12px}
.rv{display:flex;flex-direction:column;gap:${H > 1100 ? 18 : 12}px}.rvi{display:flex;gap:18px;background:#fff;border:2px solid #E1E7EF;border-radius:22px;padding:${H > 1100 ? 22 : 16}px 24px}.rvi.reply{margin-left:70px;background:#EEF5FC;border-color:#C9DDF2}
.rvi i{flex:0 0 58px;height:58px;border-radius:50%;color:#fff;font-style:normal;font-weight:700;font-size:26px;display:flex;align-items:center;justify-content:center}.rvi b{font-size:26px}.rvi small{font-weight:500;color:#5F6B7A}.rvi p{font-size:26px;color:#5F6B7A;margin-top:2px}
.pg{display:flex;gap:20px}.pgc{flex:1;background:#fff;border:2px solid #E1E7EF;border-radius:26px;padding:20px 20px 26px;text-align:center}.pgi{height:${H > 1100 ? 220 : 150}px;border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:${H > 1100 ? 90 : 70}px;margin-bottom:16px}.pgc b{display:block;font-size:32px}.pgc small{font-size:22px;color:#5F6B7A}
.steps{display:flex;flex-direction:column;gap:${H > 1100 ? 22 : 16}px}.st{display:flex;gap:26px;align-items:center;background:#fff;border:2px solid #E1E7EF;border-radius:26px;padding:${H > 1100 ? 30 : 22}px 30px}
.sn{flex:0 0 76px;height:76px;border-radius:20px;background:#0060A8;color:#fff;font-size:40px;font-weight:800;display:flex;align-items:center;justify-content:center}.sh{font-weight:800;font-size:${H > 1100 ? 46 : 40}px;line-height:1.1}.ss{font-size:24px;color:#5F6B7A;margin-top:4px}
.cta{background:#041030;color:#fff;border-radius:36px;padding:${H > 1100 ? 44 : 32}px 30px;text-align:center}.cta .a{font-family:Mukta;font-size:42px;font-weight:700}.cta .a:before{content:"";display:inline-block;width:22px;height:22px;border-radius:50%;background:#22C55E;margin-right:14px;vertical-align:middle}.cta .b{font-size:${H > 1100 ? 92 : 80}px;font-weight:800}
.save{display:flex;gap:18px}.save div{flex:1;background:#fff;border:2px solid #E1E7EF;border-radius:24px;padding:24px;text-align:center;font-family:Mukta;font-weight:700;font-size:32px}.save span{display:block;font-size:46px}
`;

const slideHTML = (sl, i, W, H) => {
  const dots = `<div class="dots">${Array.from({ length: N }, (_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('')}</div>`;
  const foot = i === 0 ? `<div class="foot"><div class="w">futuretechdigitalmarketingagency.com</div><div class="swipe">Swipe करें →</div></div>`
    : `<div class="foot">${dots}<div class="w">futuretechdigitalmarketingagency.com</div></div>`;
  let body;
  if (sl.kind === 'cta') body = `<h1>${sl.h}</h1><div class="sub">${sl.s}</div><div class="art"><div class="cta"><div class="a">WhatsApp करें</div><div class="b">79742 17411</div></div><div class="save"><div>${I(IC.save,'#0060A8',1.8)}Save करें</div><div>${I(IC.send,'#0060A8',1.8)}दुकानदार दोस्त को भेजें</div></div></div>`;
  else body = `<h1>${sl.h}</h1>${sl.s ? `<div class="sub">${sl.s}</div>` : ''}<div class="art">${H < 1100 && i === 3 ? sl.art.split('<div class="lc ')[0] : sl.art}</div>`;
  return `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${CSS(W, H)}</style></head><body><div class="wrap"><div class="top"><img src="${LOGO}">${sl.tag ? `<span class="tag">${sl.tag}</span>` : `<span class="cnt">${i + 1}/${N}</span>`}</div>${body}</div>${foot}</body></html>`;
};

const GBP = `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${CSS(1200, 900)}
.wrap{padding:56px 80px 120px}.g2{display:flex;gap:40px;flex:1;align-items:center}.g2>div{flex:1}
.pts{display:flex;flex-direction:column;gap:16px}.pts div{display:flex;gap:16px;align-items:center;font-family:Mukta;font-weight:700;font-size:34px}.pts i{flex:0 0 46px;height:46px;border-radius:12px;background:#0060A8;display:flex;align-items:center;justify-content:center}.pts i svg{width:30px}
.foot{height:90px;padding:0 80px}.foot b{font-size:28px}</style></head><body><div class="wrap"><div class="top"><img src="${LOGO}"></div>
<h1 style="font-size:66px">Google Business Profile <span class="mk">क्या है?</span></h1><div class="sub" style="font-size:30px">Google Search और Maps पर आपकी दुकान का free profile</div>
<div class="g2"><div class="pts"><div><i>${TICK}</i>“Near me” search में दिखें</div><div><i>${TICK}</i>Call, रास्ता, website — एक tap</div><div><i>${TICK}</i>Reviews से भरोसा</div><div><i>${TICK}</i>Offer और photos डालें</div></div><div>${listing(false)}</div></div></div>
<div class="foot"><b>FutureTech Digital Marketing Agency</b><div class="w" style="font-size:24px">futuretechdigitalmarketingagency.com</div></div></body></html>`;

(async () => {
  const br = await require('./browser')();
  const shot = async (html, w, h, file) => { const p = await br.newPage(); await p.setViewport({ width: w, height: h }); await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
    await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'क्या'))); await document.fonts.ready; });
    const over = await p.evaluate(() => { const w = document.querySelector('.wrap'); const f = document.querySelector('.foot'); const a = [...w.querySelectorAll('.art > *, h1, .sub')]; const bottom = Math.max(...a.map(e => e.getBoundingClientRect().bottom)); return bottom > f.getBoundingClientRect().top ? Math.round(bottom - f.getBoundingClientRect().top) : 0; });
    if (over) console.log('OVERFLOW', file, over + 'px');
    await p.screenshot({ path: OUT + file }); await p.close(); };
  for (let i = 0; i < N; i++) { const n = String(i + 1).padStart(2, '0'); await shot(slideHTML(SLIDES[i], i, 1080, 1350), 1080, 1350, `IG_${n}_1080x1350.png`); await shot(slideHTML(SLIDES[i], i, 1080, 1080), 1080, 1080, `FB_${n}_1080x1080.png`); }
  await shot(GBP, 1200, 900, 'GBP_1200x900.png');
  await br.close(); console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
