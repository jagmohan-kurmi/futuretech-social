// FutureTech post engine: one layout system that adapts to IG / FB / GBP / Story sizes.
// Content modules (tools/engine/content-*.js) describe posts as data; render.js turns them into PNGs + captions.
const fs = require('fs'); const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const LOGO = 'data:image/png;base64,' + fs.readFileSync(path.join(ROOT, 'brand', 'FutureTech_Logo_Transparent.png')).toString('base64');
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;600;700;800&display=swap" rel="stylesheet">';
const NV = '#041030', BL = '#0060A8', GD = '#FFC94D', GR = '#22C55E', SKY = '#9BE3FB', PANEL = '#E6EEF8';

// ---------- flat line icons (24x24 grid) ----------
const P = {
  phone: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M10.5 18h3"/>',
  call: '<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  pin: '<path d="M12 22s-7-7.6-7-12.5a7 7 0 0 1 14 0C19 14.4 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chat: '<path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  cam: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.6 3-6 7-6s7 2.4 7 6"/><circle cx="17.5" cy="9" r="2.5"/><path d="M18 14c2.5.3 4 2 4 4.5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  mega: '<path d="M3 10v4h4l8 5V5L7 10z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  book: '<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-3a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h4z"/>',
  grad: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
  dumb: '<path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12"/>',
  heart: '<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>',
  steth: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="12" r="2"/>',
  cut: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8L21 19M8.5 16L21 5"/>',
  food: '<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10"/><path d="M17 3c-2 2-3 5-3 8h3v10"/>',
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
  bell: '<path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4z"/><path d="M10 21h4"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  repeat: '<path d="M4 9V7a3 3 0 0 1 3-3h11l-3-3M20 15v2a3 3 0 0 1-3 3H6l3 3"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
  img: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-5-5-9 8"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
  server: '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3"/>',
  graph: '<circle cx="12" cy="12" r="3"/><circle cx="4.5" cy="5.5" r="2"/><circle cx="19.5" cy="5.5" r="2"/><circle cx="4.5" cy="18.5" r="2"/><circle cx="19.5" cy="18.5" r="2"/><path d="M6 7l4 3.5M18 7l-4 3.5M6 17l4-3.5M18 17l-4-3.5"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  sync: '<path d="M20 11a8 8 0 0 0-14-4L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4l2-2M20 20v-5h-5"/>',
  money: '<circle cx="12" cy="12" r="9"/><path d="M9 8h6M9 11h6M10 8c4 0 4 5 0 5l4 4"/>',
  trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  store: '<path d="M3 9l2-5h14l2 5"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v8h14v-8"/>',
  wa: '<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-1.9-1.3-2.3-2.3l.8-1-1-2z"/>',
  save: '<path d="M6 3h12v18l-6-4-6 4z"/>', send: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
};
const ic = (n, c = BL, sw = 2) => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${P[n] || P.check}</svg>`;
const icSvg = (n, x, y, s, c = BL, sw = 2) => `<g transform="translate(${x} ${y}) scale(${s / 24})" fill="none" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${P[n] || P.check}</g>`;
const qr = code => { try { return fs.readFileSync(path.join(__dirname, '..', 'qr', code + '.svg'), 'utf8').replace(/ width="\d+" height="\d+"/, ' viewBox="0 0 35 35" width="100%" height="100%"'); } catch (e) { return ''; } };

// ---------- formats ----------
const F = {
  ig: { W: 1080, H: 1350, pad: 72, h1: 94, sub: 38, logo: 62, foot: 120, minArt: .36 },
  fb: { W: 1080, H: 1080, pad: 72, h1: 78, sub: 32, logo: 54, foot: 96, minArt: .30 },
  fb12: { W: 1200, H: 1200, pad: 80, h1: 88, sub: 36, logo: 60, foot: 110, minArt: .32 },
  story: { W: 1080, H: 1920, pad: 72, h1: 110, sub: 42, logo: 66, foot: 0, minArt: .25 },
  reel: { W: 1080, H: 1920, pad: 72, h1: 104, sub: 42, logo: 66, foot: 0, minArt: .25, botpad: 500 },
};
const css = f => `*{margin:0;padding:0;box-sizing:border-box}html,body{width:${f.W}px;height:${f.H}px;overflow:hidden}
body{font-family:Poppins,sans-serif;color:${NV};background:#F4F7FB;--h1:${f.h1}px;--sub:${f.sub}px}
.page{position:relative;width:${f.W}px;height:${f.H}px;display:flex;flex-direction:column}
.hd{display:flex;justify-content:space-between;align-items:center;padding:${f.H > 1300 ? 64 : 46}px ${f.pad}px 0;${f.W === 1080 && f.H === 1920 ? 'padding-top:250px;' : ''}flex:0 0 auto}
.logo{height:${f.logo}px;display:block}.chip{font-family:Mukta;font-size:${f.H > 1100 ? 24 : 22}px;font-weight:700;letter-spacing:.05em;color:${BL};border:2px solid ${BL};border-radius:40px;padding:7px 20px}
.bd{flex:1;min-height:0;display:flex;flex-direction:column;padding:0 ${f.pad}px;${f.H === 1920 ? `padding-bottom:${f.botpad || 340}px;` : ''}}
.aud{align-self:flex-start;background:${BL};color:#fff;font-family:Mukta;font-weight:700;font-size:${f.H > 1100 ? 30 : 27}px;border-radius:40px;padding:6px 24px;margin-top:${f.H > 1100 ? 26 : 16}px}
h1{font-family:Mukta;font-weight:800;line-height:1.08;letter-spacing:-1px;font-size:var(--h1);margin-top:${f.H > 1100 ? 22 : 14}px;flex:0 0 auto}
.blue{color:${BL}}.mk{background:linear-gradient(transparent 70%,${GD} 70%,${GD} 92%,transparent 92%);padding:0 6px}
.sub{font-family:Mukta;font-weight:600;font-size:var(--sub);line-height:1.3;color:#5F6B7A;margin-top:10px;flex:0 0 auto}
.art{flex:1;min-height:0;margin-top:${f.H > 1100 ? 22 : 14}px;background:${PANEL};border-radius:40px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.art>.in{transform-origin:center center}.art.plain{background:none;overflow:visible}
.fx{flex:0 0 auto;margin:${f.H > 1100 ? 20 : 14}px 0 ${f.H > 1100 ? 26 : 18}px;background:${BL};color:#fff;border-radius:28px;font-family:Mukta;font-weight:800;line-height:1.2;display:flex;align-items:center;gap:18px;padding:${f.H > 1100 ? 20 : 14}px 32px;font-size:${f.H > 1100 ? 36 : 30}px}
.fx b{flex:0 0 auto;background:${GD};color:${NV};border-radius:40px;font-family:Poppins;font-size:20px;letter-spacing:.1em;padding:7px 18px}.fx .g{color:${GD}}
.ft{flex:0 0 auto;height:${f.foot}px;background:${NV};color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 ${f.pad}px}
.wa{display:flex;align-items:center;gap:14px;font-weight:700;font-size:${f.foot > 100 ? 34 : 30}px}.wa i{width:16px;height:16px;border-radius:50%;background:${GR};display:inline-block}.web{color:${SKY};font-weight:500;font-size:${f.foot > 100 ? 24 : 22}px}.swipe{font-size:26px;font-weight:700}
.dots{display:flex;gap:10px}.dots i{width:12px;height:12px;border-radius:6px;background:#3A4A6B}.dots i.on{width:34px;background:#00AEEF}
.ico{display:block;width:100%;height:100%}
${patternCss}`;

// ---------- art patterns (HTML inside .art) ----------
const patternCss = `
.cards{display:flex;gap:22px;align-items:stretch;justify-content:center;padding:34px}.card{background:#fff;border:3px solid ${NV};border-radius:28px;padding:26px 22px;text-align:center;flex:1;max-width:330px}
.card .ci{width:96px;height:96px;margin:0 auto 14px;border-radius:50%;background:#EEF5FC;padding:22px}.card .ct{font-family:Mukta;font-weight:800;font-size:38px;line-height:1.12}.card .cs{font-family:Mukta;font-weight:600;font-size:27px;color:#5F6B7A;margin-top:8px;line-height:1.25}
.arrow{align-self:center;font-size:52px;font-weight:800;color:${BL}}
.cmp{display:flex;gap:26px;padding:34px;align-items:stretch}.col{flex:1;background:#fff;border:3px solid ${NV};border-radius:28px;overflow:hidden}.col h4{font-family:Mukta;font-weight:800;font-size:36px;padding:16px 24px;color:#fff}.col.bad h4{background:#5F6B7A}.col.ok h4{background:${GR}}
.col .rw{display:flex;gap:14px;align-items:center;padding:16px 22px;font-family:Mukta;font-weight:700;font-size:30px;line-height:1.2;border-top:2px dashed #E1E7EF}.col .rw .m{flex:0 0 40px;height:40px}
.chk{width:100%;padding:30px 34px;display:flex;flex-direction:column;gap:16px}.row{background:#fff;border:3px solid ${NV};border-radius:26px;display:flex;gap:22px;align-items:center;padding:18px 24px}.row .ri{flex:0 0 78px;height:78px;border-radius:20px;background:#EEF5FC;padding:18px}.row .rt{font-family:Mukta;font-weight:800;font-size:38px;line-height:1.1}.row .rs{font-family:Mukta;font-weight:600;font-size:27px;color:#5F6B7A;margin-top:2px}
.tl{display:flex;gap:20px;padding:34px;align-items:stretch;width:100%}.tc{flex:1;background:#fff;border:3px solid ${NV};border-radius:28px;overflow:hidden}.tc h4{font-family:Mukta;font-weight:800;font-size:38px;background:${BL};color:#fff;padding:14px 22px}.tc .ti{display:flex;gap:12px;align-items:center;padding:14px 20px;font-family:Mukta;font-weight:700;font-size:28px;line-height:1.15;border-top:2px dashed #E1E7EF}.tc .ti .m{flex:0 0 34px;height:34px}
.phw{display:flex;gap:40px;align-items:center;justify-content:center;padding:30px}.ph{position:relative;width:380px;background:#fff;border:7px solid ${NV};border-radius:48px;overflow:hidden;padding:30px 20px 22px}.ph:before{content:"";position:absolute;top:10px;left:50%;transform:translateX(-50%);width:90px;height:14px;border-radius:8px;background:${NV}}
.side{display:flex;flex-direction:column;gap:18px;max-width:420px}.pill{background:#fff;border:3px solid ${NV};border-radius:60px;padding:14px 24px;display:flex;gap:14px;align-items:center;font-family:Mukta;font-weight:800;font-size:33px;line-height:1.1}.pill .m{flex:0 0 46px;height:46px}
.sr{background:#fff;border:2px solid #DADCE0;border-radius:40px;display:flex;align-items:center;gap:14px;padding:12px 24px;font-size:28px;font-weight:500;box-shadow:0 2px 6px rgba(32,33,36,.12)}.sr .m{flex:0 0 32px;height:32px}
.res{margin-top:16px;padding:0 6px}.res small{font-size:20px;color:#5F6B7A}.res .t{font-size:27px;font-weight:600;color:#1A0DAB;line-height:1.2;margin:2px 0}.res p{font-size:20px;color:#5F6B7A;line-height:1.3}.res.dim{opacity:.5}
.ln{height:16px;border-radius:8px;background:#DDE3EC;margin:10px 0}.ln.b{background:${BL}}.ln.g{background:${GD}}.ln.k{background:${NV}}
.bub{padding:12px 16px;border-radius:16px;font-size:22px;line-height:1.3;margin:10px 0;max-width:86%}.bub.in{background:#fff;border:2px solid #E1E7EF}.bub.out{background:#D9FDD3;margin-left:auto}.chat{background:#EFE7DC;border-radius:20px;padding:10px 12px;margin:0 -8px}
.kp{background:#fff;border:3px solid ${NV};border-radius:28px;overflow:hidden;width:520px}.kp .ph1{height:150px;background:linear-gradient(135deg,#BFE3F7,#CFE7D8)}.kp .bx{padding:18px 24px}.kp .nm{font-family:Mukta;font-weight:800;font-size:40px}.kp .ty{font-size:22px;color:#5F6B7A}.kp .rr{display:flex;gap:12px;align-items:center;font-size:23px;margin-top:10px}.kp .rr .m{flex:0 0 28px;height:28px}.kp .bt{display:flex;gap:10px;margin-top:16px}.kp .bt span{flex:1;border:2px solid #D5DDE7;border-radius:30px;text-align:center;padding:8px 0;font-weight:600;font-size:21px;color:${BL}}
.cpt{background:#fff;border:3px solid ${NV};border-radius:30px;padding:34px 38px;width:880px}.cph{display:flex;gap:24px;align-items:center}.cpi{flex:0 0 112px;height:112px;border-radius:50%;background:#EEF5FC;padding:26px}.cpt .term{font-family:Mukta;font-weight:800;font-size:62px;color:${BL};line-height:1.05}.cpt .df{font-family:Mukta;font-weight:700;font-size:44px;line-height:1.25;margin-top:22px}.cpt .ex{margin-top:22px;background:#EEF5FC;border-radius:18px;padding:20px 26px;font-family:Mukta;font-weight:600;font-size:33px;line-height:1.3;color:#334}.cpt .ex b{color:${BL}}
.art>svg{flex:1;min-width:0;min-height:0;width:100%;height:100%}
.tlv{width:880px;display:flex;flex-direction:column;gap:20px;padding:30px}.trw{display:flex;background:#fff;border:3px solid ${NV};border-radius:26px;overflow:hidden}.trw h4{flex:0 0 220px;display:flex;align-items:center;justify-content:center;text-align:center;background:${BL};color:#fff;font-family:Mukta;font-weight:800;font-size:42px;line-height:1.1;padding:10px}.tbd{flex:1;padding:6px 24px}.ti2{display:flex;gap:14px;align-items:center;padding:13px 0;font-family:Mukta;font-weight:700;font-size:32px;line-height:1.15}.ti2+.ti2{border-top:2px dashed #E1E7EF}.ti2 .m{flex:0 0 36px;height:36px}
.sc2{width:900px;padding:26px;display:flex;flex-direction:column;gap:14px}.scr{display:flex;gap:20px;align-items:center;background:#fff;border:3px solid ${NV};border-radius:24px;padding:14px 22px}.scn{flex:0 0 62px;height:62px;border-radius:50%;background:${BL};color:#fff;font-family:Mukta;font-weight:800;font-size:36px;display:flex;align-items:center;justify-content:center}.scn.q{background:${GD};color:${NV}}.dayb{flex:0 0 110px;text-align:center;background:${GD};color:${NV};border-radius:16px;font-family:Mukta;font-weight:800;font-size:32px;padding:8px 0}.sct{flex:1;font-family:Mukta;font-weight:700;font-size:34px;line-height:1.2}.scb{flex:0 0 48px;height:48px;border:4px solid ${NV};border-radius:12px;background:#fff}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:8px}.grid3 span{aspect-ratio:1;border-radius:10px;display:block}
`;
const htmlArt = h => `<div class="in">${h}</div>`;
const A = {
  cards: (items, arrows = true) => `<div class="cards">${items.map((c, i) => `${i && arrows ? '<div class="arrow">→</div>' : ''}<div class="card"><div class="ci">${ic(c.icon)}</div><div class="ct">${c.t}</div>${c.s ? `<div class="cs">${c.s}</div>` : ''}</div>`).join('')}</div>`,
  compare: (bad, ok) => `<div class="cmp"><div class="col bad"><h4>${bad.h}</h4>${bad.rows.map(r => `<div class="rw"><div class="m">${ic('x', '#E5484D', 2.6)}</div>${r}</div>`).join('')}</div><div class="col ok"><h4>${ok.h}</h4>${ok.rows.map(r => `<div class="rw"><div class="m">${ic('check', '#16A34A', 2.8)}</div>${r}</div>`).join('')}</div></div>`,
  checklist: rows => `<div class="chk">${rows.map(r => `<div class="row"><div class="ri">${ic(r.icon)}</div><div><div class="rt">${r.t}</div>${r.s ? `<div class="rs">${r.s}</div>` : ''}</div></div>`).join('')}</div>`,
  timeline: cols => `<div class="tlv">${cols.map(c => `<div class="trw"><h4>${c.h}</h4><div class="tbd">${c.items.map(t => `<div class="ti2"><div class="m">${ic('check', '#16A34A', 2.8)}</div>${t}</div>`).join('')}</div></div>`).join('')}</div>`,
  phoneSide: (screen, pills) => `<div class="phw"><div class="ph">${screen}</div><div class="side">${pills.map(p => `<div class="pill"><div class="m">${ic(p.icon)}</div>${p.t}</div>`).join('')}</div></div>`,
  serp: (q, results) => `<div class="sr"><div class="m">${ic('search', '#5F6368', 2.4)}</div>${q}</div>${results.map((r, i) => `<div class="res ${i ? 'dim' : ''}"><small>${r.u}</small><div class="t">${r.t}</div><p>${r.p || ''}</p></div>`).join('')}`,
  chat: msgs => `<div class="chat">${msgs.map(m => `<div class="bub ${m[0]}">${m[1]}</div>`).join('')}</div>`,
  site: (hero = 'Aapka Business', subt = '') => `<div style="padding-top:12px"><div class="ln k" style="width:50%"></div><div style="background:${BL};border-radius:14px;padding:20px;margin:12px 0"><div class="ln g" style="width:40%;height:12px"></div><div style="font-family:Mukta;font-weight:800;font-size:30px;color:#fff;line-height:1.1">${hero}</div><div style="color:#fff;opacity:.85;font-size:18px;margin-top:4px">${subt}</div></div><div class="grid3"><span style="background:#FFE7A8"></span><span style="background:#BFE3F7"></span><span style="background:#CFE7D8"></span></div><div class="ln"></div><div class="ln" style="width:70%"></div><div style="margin-top:14px;background:${GR};color:#fff;font-weight:700;text-align:center;border-radius:30px;padding:12px;font-size:22px">WhatsApp</div></div>`,
  concept: (term, def, ex, icon = 'doc') => `<div class="cpt"><div class="cph"><div class="cpi">${ic(icon)}</div><div class="term">${term}</div></div><div class="df">${def}</div>${ex ? `<div class="ex">${ex}</div>` : ''}</div>`,
  kp: (name, type, rows) => `<div class="kp"><div class="ph1"></div><div class="bx"><div class="nm">${name}</div><div class="ty">${type}</div>${rows.map(r => `<div class="rr"><div class="m">${ic(r[0])}</div>${r[1]}</div>`).join('')}<div class="bt"><span>Call</span><span>Directions</span><span>Website</span></div></div></div>`,
  scorecard: (rows, o = {}) => `<div class="sc2">${rows.map((r, i) => `<div class="scr"><div class="scn ${o.mark ? 'q' : ''}">${o.mark || i + 1}</div><div class="sct">${r}</div>${o.mark ? '' : '<div class="scb"></div>'}</div>`).join('')}</div>`,
  week: days => `<div class="sc2">${days.map(d => `<div class="scr"><div class="dayb">${d[0]}</div><div class="sct">${d[1]}</div></div>`).join('')}</div>`,
  insta: () => `<div style="font-family:Mukta;font-weight:800;font-size:26px;margin-bottom:8px">aapkabusiness</div><div class="grid3">${['#BFE3F7', '#FFE7A8', '#CFE7D8', '#FFE7A8', '#BFE3F7', '#F9D0CF', '#CFE7D8', '#F9D0CF', '#BFE3F7'].map(c => `<span style="background:${c}"></span>`).join('')}</div>`,
  hub: (centerHtml, items) => {
    const pos = [[15, 20], [685, 20], [15, 490], [685, 490]];
    return `<svg viewBox="0 0 1000 640" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><g stroke="${BL}" stroke-width="5" stroke-dasharray="3 14" stroke-linecap="round" fill="none"><path d="M315 100 L400 230"/><path d="M685 100 L600 230"/><path d="M315 560 L400 420"/><path d="M685 560 L600 420"/></g>
${centerHtml}${items.map((it, i) => `<g transform="translate(${pos[i][0]} ${pos[i][1]})"><rect width="300" height="130" rx="30" fill="#fff" stroke="${NV}" stroke-width="4"/>${icSvg(it.icon, 22, 33, 64, BL, 2)}<text x="98" y="${it.l2 ? 62 : 75}" font-family="Mukta" font-weight="800" font-size="30" fill="${NV}">${it.l}</text>${it.l2 ? `<text x="98" y="98" font-family="Mukta" font-weight="800" font-size="30" fill="${NV}">${it.l2}</text>` : ''}</g>`).join('')}</svg>`;
  },
  hubCenter: kind => ({
    browser: `<g transform="translate(330 190)"><rect width="340" height="260" rx="22" fill="#fff" stroke="${NV}" stroke-width="5"/><path d="M0 22a22 22 0 0 1 22-22h296a22 22 0 0 1 22 22v26H0z" fill="${NV}"/><circle cx="28" cy="25" r="6" fill="${GD}"/><circle cx="50" cy="25" r="6" fill="${SKY}"/><circle cx="72" cy="25" r="6" fill="#fff"/><rect x="26" y="68" width="288" height="90" rx="12" fill="${BL}"/><rect x="46" y="88" width="120" height="12" rx="6" fill="${GD}"/><rect x="46" y="114" width="190" height="10" rx="5" fill="#fff" opacity=".85"/><rect x="26" y="176" width="88" height="62" rx="10" fill="#FFE7A8"/><rect x="126" y="176" width="88" height="62" rx="10" fill="#BFE3F7"/><rect x="226" y="176" width="88" height="62" rx="10" fill="#CFE7D8"/></g>`,
    phone: `<g transform="translate(400 170)"><rect width="200" height="300" rx="34" fill="#fff" stroke="${NV}" stroke-width="6"/><rect x="62" y="12" width="76" height="12" rx="6" fill="${NV}"/><rect x="24" y="52" width="152" height="86" rx="14" fill="${BL}"/><rect x="40" y="70" width="70" height="10" rx="5" fill="${GD}"/><rect x="24" y="152" width="152" height="12" rx="6" fill="#DDE3EC"/><rect x="24" y="174" width="110" height="12" rx="6" fill="#DDE3EC"/><rect x="24" y="226" width="152" height="46" rx="23" fill="${GR}"/></g>`,
    pin: `<g transform="translate(500 330)"><path d="M0 130C-90 60 -110 20 -110 -30a110 110 0 0 1 220 0C110 20 90 60 0 130z" fill="#E5484D" stroke="${NV}" stroke-width="6" stroke-linejoin="round"/><circle cx="0" cy="-30" r="42" fill="#fff" stroke="${NV}" stroke-width="5"/></g>`,
    shop: `<g transform="translate(350 190)"><path d="M0 70L30 0h240l30 70z" fill="#E5484D" stroke="${NV}" stroke-width="5" stroke-linejoin="round"/><rect x="10" y="70" width="280" height="190" fill="#fff" stroke="${NV}" stroke-width="5"/><rect x="40" y="110" width="80" height="150" fill="${BL}"/><rect x="150" y="110" width="110" height="70" rx="8" fill="#FFE7A8" stroke="${NV}" stroke-width="4"/></g>`,
    dumbbell: `<g transform="translate(500 330) scale(1.3)" stroke="${NV}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"><rect x="-110" y="-12" width="220" height="24" rx="10" fill="#DDE3EC"/><rect x="-150" y="-70" width="40" height="140" rx="12" fill="${BL}"/><rect x="-196" y="-50" width="36" height="100" rx="12" fill="${GD}"/><rect x="110" y="-70" width="40" height="140" rx="12" fill="${BL}"/><rect x="160" y="-50" width="36" height="100" rx="12" fill="${GD}"/></g>`,
    chat: `<g transform="translate(360 200)"><rect width="280" height="230" rx="30" fill="#EFE7DC" stroke="${NV}" stroke-width="5"/><rect x="24" y="30" width="170" height="52" rx="16" fill="#fff"/><rect x="86" y="110" width="170" height="52" rx="16" fill="#D9FDD3"/><circle cx="236" cy="190" r="20" fill="${GR}"/></g>`,
  })[kind] || '',
};

// ---------- page builders ----------
const dots = (i, n) => `<div class="dots">${Array.from({ length: n }, (_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('')}</div>`;
const footWA = () => `<div class="wa"><i></i>WhatsApp 79742 17411</div><div class="web">futuretechdigitalmarketingagency.com</div>`;
const header = chip => `<div class="hd"><img class="logo" src="${LOGO}">${chip ? `<span class="chip">${chip}</span>` : ''}</div>`;
function pageHTML(f, inner) { return `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${css(f)}</style></head><body>${inner}</body></html>`; }

// content slide
function slide(f, s, i, n, opt = {}) {
  const chip = s.chip || opt.chip || '';
  const art = s.art ? `<div class="art ${s.plain ? 'plain' : ''}">${s.raw ? s.art : htmlArt(s.art)}</div>` : '';
  const aud = s.aud ? `<div class="aud">${s.aud}</div>` : '';
  const fx = s.fix ? `<div class="fx"><b>${s.fix[0]}</b><span>${s.fix[1]}</span></div>` : '';
  const foot = s.footer === 'gbp' ? `<div class="ft"><b style="font-size:28px">FutureTech Digital Marketing Agency</b><div class="web" style="font-size:24px">futuretechdigitalmarketingagency.com</div></div>` : s.footer === 'wa' ? `<div class="ft">${footWA()}</div>` : s.footer === 'swipe' ? `<div class="ft"><div class="wa"><i></i>WhatsApp 79742 17411</div><div class="swipe">Swipe करें →</div></div>` : `<div class="ft">${n > 1 ? dots(i, n) : '<div></div>'}<div class="web">futuretechdigitalmarketingagency.com</div></div>`;
  return `<div class="page">${header(chip)}<div class="bd">${aud}<h1>${s.h}</h1>${s.sub ? `<div class="sub">${s.sub}</div>` : ''}${art}${fx}</div>${f.foot ? foot : ''}</div>`;
}

// CTA slide (professional): recap + big WhatsApp button + QR + identity + save/share
function ctaSlide(f, s, i, n, code) {
  const rows = s.recap.map(r => `<div class="cr"><div class="cri">${ic(r.icon)}</div><div><div class="crt">${r.t}</div>${r.s ? `<div class="crs">${r.s}</div>` : ''}</div></div>`).join('');
  const q = qr(code);
  return `<div class="page cta" style="--cs:1">${header(s.chip || '')}<div class="bd"><h1>${s.h}</h1>
<div class="cl">${rows}</div>
<div class="cb"><div class="btn"><span class="bi">${ic('wa', '#fff', 2)}</span>WhatsApp पर बात करें</div>
<div class="nrow"><div class="num">79742 17411</div>${q ? `<div class="qr">${q}<small>Scan karein</small></div>` : ''}</div>
<div class="idn">${s.line || ''}</div><div class="idn2">Sagar (MP) से, पूरे India के लिए</div></div>
<div class="sv"><div><span>${ic('save')}</span>Save करें</div><div><span>${ic('send')}</span>${s.share || 'दोस्त को भेजें'}</div></div></div>
<div class="ft">${dots(i, n)}<div class="web">futuretechdigitalmarketingagency.com</div></div></div>`;
}
const ctaCss = f => `
.cta .bd{justify-content:space-evenly;padding-bottom:12px}.cta h1{margin-top:calc(var(--cs)*18px)}
.cl{background:#fff;border:3px solid #E1E7EF;border-radius:26px;padding:calc(var(--cs)*4px) 28px}.cr{display:flex;gap:calc(var(--cs)*22px);align-items:center;padding:calc(var(--cs)*13px) 0}.cr+.cr{border-top:2px dashed #E1E7EF}.cri{flex:0 0 calc(var(--cs)*66px);height:calc(var(--cs)*66px);border-radius:18px;background:#EEF5FC;padding:calc(var(--cs)*15px)}.crt{font-family:Mukta;font-weight:800;font-size:calc(var(--cs)*40px);line-height:1.1}.crs{font-family:Mukta;font-weight:600;font-size:calc(var(--cs)*28px);color:#5F6B7A}
.cb{background:${NV};border-radius:36px;padding:calc(var(--cs)*26px) 30px;text-align:center;color:#fff;margin-top:calc(var(--cs)*18px)}.btn{display:flex;align-items:center;justify-content:center;gap:16px;background:${GR};border-radius:60px;padding:calc(var(--cs)*16px) 20px;font-family:Mukta;font-weight:800;font-size:calc(var(--cs)*46px)}.bi{width:calc(var(--cs)*54px);height:calc(var(--cs)*54px);display:block}
.nrow{display:flex;align-items:center;justify-content:center;gap:34px;margin-top:calc(var(--cs)*14px)}.num{font-size:calc(var(--cs)*84px);font-weight:800;letter-spacing:1px}.qr{width:calc(var(--cs)*130px);background:#fff;border-radius:14px;padding:6px;color:${NV}}.qr svg{display:block;width:100%;height:auto}.qr small{display:block;text-align:center;font-size:calc(var(--cs)*15px);font-weight:600;margin-top:2px}
.idn{font-family:Mukta;font-weight:700;font-size:calc(var(--cs)*31px);color:${GD};margin-top:calc(var(--cs)*6px)}.idn2{font-family:Mukta;font-weight:600;font-size:calc(var(--cs)*28px);color:${SKY}}
.sv{display:flex;gap:18px;margin:calc(var(--cs)*18px) 0 0}.sv div{flex:1;background:#fff;border:3px solid #E1E7EF;border-radius:24px;padding:calc(var(--cs)*12px);display:flex;align-items:center;justify-content:center;gap:12px;font-family:Mukta;font-weight:700;font-size:calc(var(--cs)*30px)}.sv span{width:calc(var(--cs)*34px);height:calc(var(--cs)*34px);display:block}`;

// ---------- renderer ----------
async function renderPages(br, jobs) {
  for (const j of jobs) {
    const p = await br.newPage(); await p.setViewport({ width: j.f.W, height: j.f.H });
    const html = j.html.replace('</style>', ctaCss(j.f) + '</style>');
    await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
    await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Poppins'))); await Promise.all(['500', '600', '700', '800'].map(x => document.fonts.load(x + ' 30px Mukta', 'अच्छी वेबसाइट'))); await document.fonts.ready; });
    const minArt = j.f.minArt;
    const res = await p.evaluate((minArt, H) => {
      const root = document.body; let h1 = parseFloat(getComputedStyle(root).getPropertyValue('--h1')), sub = parseFloat(getComputedStyle(root).getPropertyValue('--sub'));
      const art = () => document.querySelector('.art'); const page = document.querySelector('.page');
      const over = () => { const ft = document.querySelector('.ft'); const ftTop = ft ? ft.getBoundingClientRect().top : H; const bd = document.querySelector('.bd'); const last = [...bd.children].reduce((m, e) => Math.max(m, e.getBoundingClientRect().bottom), 0); return last - ftTop; };
      let k = 0;
      if (page.classList.contains('cta')) { let cs = 1; while (over() > -6 && cs > .55 && k++ < 40) { cs -= .03; page.style.setProperty('--cs', cs); } return { cs, k }; }
      while (art() && art().getBoundingClientRect().height < minArt * H && h1 > 48 && k++ < 40) { h1 *= .96; sub *= .97; root.style.setProperty('--h1', h1 + 'px'); root.style.setProperty('--sub', sub + 'px'); }
      // zoom art content to fit
      const a = art(); if (a && a.firstElementChild && a.firstElementChild.classList.contains('in')) { const inn = a.firstElementChild; inn.style.zoom = 1; const r = a.getBoundingClientRect(); const need = inn.getBoundingClientRect(); const z = Math.min(2.1, (r.height - 20) / need.height, (r.width - 20) / need.width); inn.style.zoom = z; }
      return { h1: Math.round(h1), k, artH: Math.round(art() ? art().getBoundingClientRect().height : 0) };
    }, minArt, j.f.H);
    const ov = await p.evaluate(() => { const ft = document.querySelector('.ft'); const bd = document.querySelector('.bd'); if (!bd) return 0; const last = [...bd.children].reduce((m, e) => Math.max(m, e.getBoundingClientRect().bottom), 0); return Math.round(last - (ft ? ft.getBoundingClientRect().top : innerHeight)); });
    if (ov > 2) console.log('  OVERFLOW', j.file, ov + 'px', JSON.stringify(res));
    fs.mkdirSync(path.dirname(j.file), { recursive: true });
    await p.screenshot({ path: j.file }); await p.close();
  }
}
module.exports = { F, pageHTML, slide, ctaSlide, A, ic, icSvg, renderPages, NV, BL, GD, GR, LOGO, FONTS, ROOT, qr, header, footWA, dots, htmlArt };
