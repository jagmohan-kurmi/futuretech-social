// Info carousel "Achchi business website ki 5 pehchaan": IG 1080x1350 x7, FB 1080x1080 x7, GBP 1200x900 x1. Usage: node tools/carousel-website.js
const fs = require('fs'); const path = require('path');
const OUT = path.join(__dirname, '..', 'posts', '2026-11-10_Good_Website_Carousel') + '/'; fs.mkdirSync(OUT, { recursive: true });
const LOGO = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '..', 'brand', 'FutureTech_Logo_Transparent.png')).toString('base64');
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';
const N = 7;
const I = (d, c = '#0060A8', w = 2) => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const IC = {
  phone: '<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  pin: '<path d="M12 22s-7-7.6-7-12.5a7 7 0 0 1 14 0C19 14.4 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  save: '<path d="M6 3h12v18l-6-4-6 4z"/>', send: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
};
const TICK = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const WAICON = '<svg viewBox="0 0 24 24" width="38" height="38"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-1.9-1.3-2.3-2.3l.8-1-1-2z" fill="#fff"/></svg>';

// ---------- flat mockups ----------
const browser = (inner, url = 'aapkidukaan.in') => `<div class="br"><div class="bar"><i></i><i></i><i></i><span>${url}</span></div><div class="bb">${inner}</div></div>`;
const hero = `<div class="hero"><div class="hl"></div><div class="hn">Aapki Dukaan</div><div class="hs">Kirana & ghar ka saman · Sagar</div><div class="hb">Order karein</div></div><div class="cards"><div style="background:#FFE7A8"></div><div style="background:#BFE3F7"></div><div style="background:#CFE7D8"></div></div>`;
const phoneSpeed = `<div class="speed"><div class="ph"><div class="pn"></div><div class="pbody"><div class="sk w60"></div><div class="sk"></div><div class="sk h90"></div><div class="sk w80"></div></div><div class="cap bad">धीमी site</div></div><div class="arrow">→</div><div class="ph good"><div class="pn"></div><div class="pbody"><div class="sk w60 ok"></div><div class="sk ok"></div><div class="sk h90 ok2"></div><div class="sk w80 ok"></div></div><div class="cap gd">तेज़ site</div></div></div>`;
const hero3 = `${browser(hero)}<div class="lab3"><span><b>1</b> आप क्या करते हैं</span><span><b>2</b> किसके लिए</span><span><b>3</b> कहाँ</span></div>`;
const tap = `<div class="tapw"><div class="ph big"><div class="pn"></div><div class="pbody"><div class="hn s">Aapki Dukaan</div><div class="sk"></div><div class="sk h60"></div><div class="sk w80"></div></div><div class="fab">${WAICON}</div><div class="callbar"><span>${I(IC.phone, '#fff', 2)}Call</span><span style="background:#22C55E">WhatsApp</span></div></div></div>`;
const serp = `<div class="search"><svg viewBox="0 0 24 24" width="36"><circle cx="10" cy="10" r="6.5" fill="none" stroke="#5F6368" stroke-width="2.2"/><path d="M15 15l5.5 5.5" stroke="#5F6368" stroke-width="2.2" stroke-linecap="round"/></svg><span>kirana store Sagar</span></div>
<div class="res"><small>aapkidukaan.in</small><div class="rt">Aapki Dukaan – Kirana & ghar ka saman, Sagar</div><p>Roz ka saman, sahi daam par. Timing, address aur order ka tareeka yahin dekhiye.</p></div><div class="res dim"><small>dusri-dukaan.in</small><div class="rt">Dusri Dukaan</div><p>…</p></div>`;
const contact = `${browser(`<div class="cg"><div class="ci">${I(IC.pin, '#0060A8', 2)}<div><b>Address</b><small>Main Road, Sagar (MP)</small></div></div><div class="ci">${I(IC.clock, '#0060A8', 2)}<div><b>Timing</b><small>Subah 9 – Raat 9</small></div></div><div class="ci">${I(IC.phone, '#0060A8', 2)}<div><b>Phone / WhatsApp</b><small>Aapka number</small></div></div><div class="ph3"><span style="background:#FFE7A8"></span><span style="background:#BFE3F7"></span><span style="background:#CFE7D8"></span></div></div>`, 'aapkidukaan.in/contact')}`;
const steps = `<div class="ph big" style="margin:auto"></div>`;
const SLIDES = [
  { kind: 'cover', h: 'अच्छी business website<br>की <span class="mk">5 पहचान</span>', s: 'क्या आपकी website customer ला रही है? इस checklist से जाँचिए', art: browser(hero) },
  { tag: 'पहचान 1', h: 'Phone पर <span class="blue">तेज़ खुले</span>', s: 'खुलने में देर लगे तो customer दूसरी site पर चला जाता है। Photos हल्की रखें और अच्छी hosting लें।', art: phoneSpeed },
  { tag: 'पहचान 2', h: 'पहली नज़र में <span class="blue">साफ़ बताए</span>', s: 'Customer 5 सेकंड में समझ जाए कि आप क्या करते हैं, किसके लिए और कहाँ।', art: hero3 },
  { tag: 'पहचान 3', h: 'WhatsApp / Call <span class="blue">एक tap पर</span>', s: 'Customer को number ढूँढना न पड़े। हर page पर call और WhatsApp का button रखें।', art: tap },
  { tag: 'पहचान 4', h: 'Google पर <span class="blue">मिले</span>', s: 'हर page का सही title और description, और services के अलग pages — ताकि Google समझ सके आप क्या करते हैं।', art: serp },
  { tag: 'पहचान 5', h: 'असली address, photos, <span class="blue">contact</span>', s: 'पता, timing, phone और अपनी दुकान की असली photos — भरोसा यहीं से बनता है।', art: contact },
  { kind: 'cta', h: 'अपनी website <span class="blue">जँचवाना है?</span>', s: 'FutureTech आपकी website इन 5 बातों पर देखकर बताएगा कि क्या सुधारना है।', art: '' },
];
const CSS = (W, H) => { const T = H > 1100; return `
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;font-family:Poppins,sans-serif;color:#041030;background:#F4F7FB}
.wrap{position:absolute;inset:0;padding:${T ? 70 : 52}px 72px ${T ? 150 : 128}px;display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:${T ? 40 : 24}px}.top img{height:${T ? 60 : 52}px}
.tag{font-size:22px;font-weight:600;letter-spacing:.06em;color:#0060A8;border:2px solid #0060A8;border-radius:40px;padding:8px 20px;font-family:Mukta}.cnt{font-size:22px;font-weight:600;color:#8A97A8}
h1{font-family:Mukta;font-weight:800;font-size:${T ? 84 : 70}px;line-height:1.1;letter-spacing:-.5px}
.blue{color:#0060A8}.mk{background:linear-gradient(transparent 72%,#FFC94D 72%,#FFC94D 90%,transparent 90%);padding:0 6px}
.sub{font-family:Mukta;font-weight:600;font-size:${T ? 37 : 31}px;line-height:1.35;color:#5F6B7A;margin-top:${T ? 20 : 12}px}
.art{flex:1;display:flex;flex-direction:column;justify-content:center;gap:20px;margin-top:16px;min-height:0}
.foot{position:absolute;left:0;right:0;bottom:0;height:${T ? 100 : 88}px;background:#041030;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 72px}
.foot .w{color:#9BE3FB;font-size:22px;font-weight:500}.dots{display:flex;gap:10px}.dots i{width:12px;height:12px;border-radius:6px;background:#3A4A6B}.dots i.on{width:34px;background:#00AEEF}.swipe{font-size:24px;font-weight:700}
.ico{display:inline-block;vertical-align:middle;width:30px;height:30px}
.br{background:#fff;border:2px solid #DADCE0;border-radius:24px;overflow:hidden;box-shadow:0 2px 8px rgba(32,33,36,.1)}
.bar{display:flex;align-items:center;gap:10px;background:#EEF2F7;padding:14px 20px}.bar i{width:14px;height:14px;border-radius:50%;background:#C5CEDA}.bar span{margin-left:14px;flex:1;background:#fff;border-radius:20px;padding:6px 18px;font-size:20px;color:#5F6B7A}
.bb{padding:${T ? 34 : 22}px}.hero{background:#0060A8;border-radius:18px;padding:${T ? 40 : 26}px 36px;color:#fff}.hl{width:60px;height:8px;background:#FFC94D;border-radius:4px;margin-bottom:16px}.hn{font-family:Mukta;font-weight:800;font-size:${T ? 54 : 44}px;line-height:1.1}.hn.s{font-size:30px;color:#041030;margin-bottom:12px}.hs{font-size:${T ? 28 : 24}px;opacity:.9;margin-top:6px}.hb{display:inline-block;margin-top:${T ? 24 : 16}px;background:#22C55E;border-radius:40px;padding:10px 30px;font-weight:700;font-size:24px}
.cards{display:flex;gap:16px;margin-top:${T ? 22 : 14}px}.cards div{flex:1;height:${T ? 120 : 76}px;border-radius:14px}
.lab3{display:flex;gap:12px}.lab3 span{flex:1;background:#fff;border:2px solid #E1E7EF;border-radius:18px;padding:14px 10px;font-family:Mukta;font-weight:700;font-size:26px;text-align:center}.lab3 b{display:inline-flex;width:34px;height:34px;border-radius:50%;background:#0060A8;color:#fff;align-items:center;justify-content:center;font-size:20px;margin-right:6px}
.speed{display:flex;align-items:center;justify-content:center;gap:30px}.arrow{font-size:56px;color:#0060A8;font-weight:800}
.ph{position:relative;width:${T ? 300 : 230}px;height:${T ? 480 : 330}px;background:#fff;border:6px solid #041030;border-radius:42px;overflow:hidden}.ph.big{width:${T ? 340 : 270}px;height:${T ? 560 : 400}px;margin:0 auto}.pn{width:90px;height:16px;background:#041030;border-radius:0 0 12px 12px;margin:0 auto}
.pbody{padding:22px 20px}.sk{height:22px;border-radius:8px;background:#DDE3EC;margin-bottom:14px}.sk.w60{width:60%}.sk.w80{width:80%}.sk.h90{height:${T ? 120 : 80}px}.sk.h60{height:70px}.sk.ok{background:#CFE7D8}.sk.ok2{background:#BFE3F7}
.cap{position:absolute;left:0;right:0;bottom:0;text-align:center;font-family:Mukta;font-weight:800;font-size:26px;padding:12px;color:#fff}.cap.bad{background:#E5484D}.cap.gd{background:#16A34A}
.fab{position:absolute;right:16px;bottom:96px;width:70px;height:70px;border-radius:50%;background:#22C55E;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 10px rgba(0,0,0,.2)}
.callbar{position:absolute;left:0;right:0;bottom:0;display:flex}.callbar span{flex:1;background:#0060A8;color:#fff;font-weight:700;font-size:24px;padding:20px 0;text-align:center;display:flex;align-items:center;justify-content:center;gap:8px}.callbar .ico{width:26px;height:26px}
.tapw{display:flex;justify-content:center}
.search{display:flex;align-items:center;gap:18px;background:#fff;border:2px solid #DADCE0;border-radius:60px;height:88px;padding:0 32px;box-shadow:0 2px 6px rgba(32,33,36,.12)}.search span{font-size:34px;font-weight:500;color:#202124}
.res{background:#fff;border:2px solid #E1E7EF;border-radius:22px;padding:22px 28px}.res small{font-size:22px;color:#5F6B7A}.rt{font-size:34px;font-weight:600;color:#1A0DAB;margin:4px 0}.res p{font-size:24px;color:#5F6B7A;line-height:1.35}.res.dim{opacity:.55}
.cg{display:flex;flex-direction:column;gap:${T ? 20 : 12}px}.ci{display:flex;gap:18px;align-items:center;background:#F4F7FB;border-radius:16px;padding:${T ? 18 : 12}px 22px}.ci .ico{width:40px;height:40px}.ci b{display:block;font-size:26px}.ci small{font-size:22px;color:#5F6B7A}
.ph3{display:flex;gap:14px}.ph3 span{flex:1;height:${T ? 130 : 70}px;border-radius:14px}
.cta{background:#041030;color:#fff;border-radius:36px;padding:${T ? 44 : 30}px 30px;text-align:center}.cta .a{font-family:Mukta;font-size:42px;font-weight:700}.cta .a:before{content:"";display:inline-block;width:22px;height:22px;border-radius:50%;background:#22C55E;margin-right:14px;vertical-align:middle}.cta .b{font-size:${T ? 92 : 80}px;font-weight:800}
.save{display:flex;gap:18px}.save div{flex:1;background:#fff;border:2px solid #E1E7EF;border-radius:24px;padding:24px;text-align:center;font-family:Mukta;font-weight:700;font-size:32px}.save .ico{display:block;width:46px;height:46px;margin:0 auto 8px}`; };
const slideHTML = (sl, i, W, H) => {
  const dots = `<div class="dots">${Array.from({ length: N }, (_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('')}</div>`;
  const foot = i === 0 ? `<div class="foot"><div class="w">futuretechdigitalmarketingagency.com</div><div class="swipe">Swipe करें →</div></div>` : `<div class="foot">${dots}<div class="w">futuretechdigitalmarketingagency.com</div></div>`;
  const body = sl.kind === 'cta' ? `<h1>${sl.h}</h1><div class="sub">${sl.s}</div><div class="art"><div class="cta"><div class="a">WhatsApp करें</div><div class="b">79742 17411</div></div><div class="save"><div>${I(IC.save, '#0060A8', 1.8)}Save करें</div><div>${I(IC.send, '#0060A8', 1.8)}दुकानदार दोस्त को भेजें</div></div></div>`
    : `<h1>${sl.h}</h1><div class="sub">${sl.s}</div><div class="art">${sl.art}</div>`;
  return `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${CSS(W, H)}</style></head><body><div class="wrap"><div class="top"><img src="${LOGO}">${sl.tag ? `<span class="tag">${sl.tag}</span>` : `<span class="cnt">${i + 1}/${N}</span>`}</div>${body}</div>${foot}</body></html>`; };
const GBP = `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${CSS(1200, 900)}
.wrap{padding:52px 80px 120px}.g2{display:flex;gap:40px;flex:1;align-items:center}.g2>div:first-child{flex:1.2}.g2>div:last-child{flex:1}
.pts{display:flex;flex-direction:column;gap:16px}.pts div{display:flex;gap:16px;align-items:center;font-family:Mukta;font-weight:700;font-size:34px}.pts i{flex:0 0 46px;height:46px;border-radius:12px;background:#0060A8;display:flex;align-items:center;justify-content:center}.pts i svg{width:30px}
.foot{height:90px;padding:0 80px}.foot b{font-size:28px}</style></head><body><div class="wrap"><div class="top"><img src="${LOGO}"></div>
<h1 style="font-size:62px">अच्छी business website की <span class="mk">5 पहचान</span></h1>
<div class="g2"><div class="pts"><div><i>${TICK}</i>Phone पर तेज़ खुले</div><div><i>${TICK}</i>पहली नज़र में साफ़ बताए</div><div><i>${TICK}</i>WhatsApp / Call एक tap पर</div><div><i>${TICK}</i>Google पर मिले</div><div><i>${TICK}</i>असली address, photos, contact</div></div><div>${browser(hero)}</div></div></div>
<div class="foot"><b>FutureTech Digital Marketing Agency</b><div class="w" style="font-size:24px">futuretechdigitalmarketingagency.com</div></div></body></html>`;
(async () => {
  const br = await require('./browser')();
  const shot = async (html, w, h, file) => { const p = await br.newPage(); await p.setViewport({ width: w, height: h }); await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
    await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'अच्छी पहचान'))); await document.fonts.ready; });
    const over = await p.evaluate(() => { const f = document.querySelector('.foot').getBoundingClientRect().top; const a = [...document.querySelectorAll('.art > *, h1, .sub, .g2')]; const b = Math.max(...a.map(e => e.getBoundingClientRect().bottom)); return b > f ? Math.round(b - f) : 0; });
    if (over) console.log('OVERFLOW', file, over + 'px');
    await p.screenshot({ path: OUT + file }); await p.close(); };
  for (let i = 0; i < N; i++) { const n = String(i + 1).padStart(2, '0'); await shot(slideHTML(SLIDES[i], i, 1080, 1350), 1080, 1350, `IG_${n}_1080x1350.png`); await shot(slideHTML(SLIDES[i], i, 1080, 1080), 1080, 1080, `FB_${n}_1080x1080.png`); }
  await shot(GBP, 1200, 900, 'GBP_1200x900.png'); await br.close(); console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
