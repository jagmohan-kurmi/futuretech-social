// Sun Power Projects FINAL logo kit. Usage: node tools/logo/sunpower-final.js
const fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, '..', '..', 'clients', 'sun-power-projects', 'final') + '/'; fs.mkdirSync(OUT, { recursive: true });
const L = require('../engine/lib');
const AM = '#F59E0B', NV = '#0B2A5B', GR = '#15803D', GR2 = '#4ADE80', CELL = '#2F67B8';
const rays = (cx, cy, r1, r2, n, w, col) => Array.from({ length: n }, (_, i) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; if (a > 1.3 && a < 3.3) return ''; return `<line x1="${(cx + r1 * Math.cos(a)).toFixed(1)}" y1="${(cy + r1 * Math.sin(a)).toFixed(1)}" x2="${(cx + r2 * Math.cos(a)).toFixed(1)}" y2="${(cy + r2 * Math.sin(a)).toFixed(1)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`; }).join('');
function icon(d = false) {
  const nv = d ? '#FFFFFF' : NV, gr = d ? GR2 : GR, cell = d ? '#7FB0F0' : CELL, gap = d ? '#0B2A5B' : NV;
  let cells = ''; for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) cells += `<rect x="${6 + c * 42}" y="${6 + r * 34}" width="38" height="30" rx="3" fill="${cell}"/>`;
  return `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="88" r="44" fill="${AM}"/>${rays(150, 88, 58, 80, 14, 9, AM)}
<g transform="translate(36 120) skewX(-20)"><rect width="134" height="80" rx="8" fill="${d ? '#FFFFFF' : nv}"/><g>${cells.replace(/fill="[^"]+"/g, m => m)}</g></g>
<path d="M92 200l-8 20h38l-6-20z" fill="${nv}" opacity="0"/>
<path d="M12 222C70 202 150 236 220 208" stroke="${gr}" stroke-width="10" fill="none" stroke-linecap="round"/><path transform="translate(200 214) scale(.6)" d="M0 0C6-26 28-36 48-34 46-12 28 6 0 0Z" fill="${gr}"/></svg>`;
}
const FONT = '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">';
const wm = (d, s = 1) => `<div class="wm"><div class="w1" style="font-size:${100 * s}px"><span style="color:${AM}">SUN</span> <span style="color:${d ? '#fff' : NV}">POWER</span></div><div class="w2" style="margin-top:${12 * s}px;gap:${14 * s}px"><i style="height:${4 * s}px;background:${d ? GR2 : GR}"></i><span style="color:${d ? GR2 : GR};font-size:${36 * s}px;letter-spacing:${12 * s}px">PROJECTS</span><i style="height:${4 * s}px;background:${d ? GR2 : GR}"></i></div></div>`;
const horiz = (d, s = 1) => `<div class="lg" style="gap:${26 * s}px"><div class="ic" style="width:${200 * s}px;height:${200 * s}px">${icon(d)}</div>${wm(d, s)}</div>`;
const stacked = d => `<div style="display:flex;flex-direction:column;align-items:center;gap:20px"><div class="ic" style="width:260px;height:260px">${icon(d)}</div>${wm(d, .9)}</div>`;
const CSS = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Poppins,sans-serif}.lg{display:flex;align-items:center}.ic svg{width:100%;height:100%;display:block}.wm{font-family:Montserrat,sans-serif}.w1{font-weight:800;letter-spacing:-1px;line-height:1}.w2{display:flex;align-items:center}.w2 i{flex:1;display:block;border-radius:2px}.w2 span{font-weight:700}`;
const info = { a1: 'D-818-B, Lunawat Cosmos Colony,', a2: 'Bhatkhedi, Mhowgaon, Indore – 453441 (Madhya Pradesh)', mob: '+91 91315 75182, +91 88789 60528', mail: 'sunpowerprojets@gmail.com', web: 'www.sunpowerprojects.com', gst: '23AGCFS2341E1ZG', pan: 'AGCFS2341E', msme: 'UDYAM-MP-23-0322480' };
const row = (ic, lab, val) => `<div class="r"><span class="ri">${L.ic(ic, NV, 2)}</span><div><b>${lab}</b>${val}</div></div>`;
const HEADER = `<!doctype html><html><head><meta charset="utf-8">${FONT}<style>${CSS}body{width:2400px;height:480px;position:relative;overflow:hidden;background:#fff}
.top{position:absolute;left:70px;top:70px}.tag{position:absolute;left:70px;top:330px;width:1190px;text-align:center;font-family:Montserrat;font-weight:600;font-size:28px;letter-spacing:4px;color:#4B5B75}.tag i{color:${AM};font-style:normal;padding:0 16px}
.dv{position:absolute;top:56px;height:320px;width:3px;background:#E1E7EF}.c1{position:absolute;left:1330px;top:52px;width:640px}.c2{position:absolute;left:2020px;top:52px;width:370px;white-space:nowrap}
.r{display:flex;gap:16px;align-items:flex-start;margin-bottom:20px;font-size:24px;line-height:1.3;color:${NV};font-weight:500}.ri{width:38px;height:38px;flex:0 0 38px;background:#EEF5FC;border-radius:50%;padding:8px}.r b{display:block;font-family:Montserrat;font-size:15px;letter-spacing:2px;color:${GR};margin-bottom:3px}.c2 .r{margin-bottom:26px}
.bar{position:absolute;left:0;right:0;bottom:0;height:26px;display:flex}.bar i{flex:1.1;background:${GR};clip-path:polygon(0 0,100% 0,96% 100%,0 100%)}.bar b{flex:2;background:${AM};margin-left:-1%;clip-path:polygon(2% 0,100% 0,100% 100%,0 100%)}.bar u{flex:1.6;background:${NV};margin-left:-1%;clip-path:polygon(2% 0,100% 0,100% 100%,0 100%)}
</style></head><body><div class="top">${horiz(false, .78)}</div><div class="tag">CLEAN ENERGY<i>•</i>GREEN FUTURE<i>•</i>BRIGHTER TOMORROW</div><div class="dv" style="left:1290px"></div>
<div class="c1">${row('pin', 'ADDRESS', info.a1 + '<br>' + info.a2)}${row('call', 'MOBILE', info.mob)}${row('mail', 'EMAIL', info.mail)}${row('globe', 'WEBSITE', info.web)}</div><div class="dv" style="left:1985px"></div>
<div class="c2">${row('doc', 'GST NO.', info.gst)}${row('user', 'PAN', info.gst === '' ? '' : info.pan)}${row('store', 'MSME / UDYAM', info.msme)}</div><div class="bar"><i></i><b></b><u></u></div></body></html>`;
const wrap = (inner, bg, w, h, pad = 60) => `<!doctype html><html><head><meta charset="utf-8">${FONT}<style>${CSS}body{width:${w}px;height:${h}px;background:${bg};display:flex;align-items:center;justify-content:center;padding:${pad}px}</style></head><body>${inner}</body></html>`;
const SHEET = `<!doctype html><html><head><meta charset="utf-8">${FONT}<style>${CSS}body{width:2000px;height:1250px;background:#F4F7FB;padding:50px 60px}h1{font-family:Montserrat;font-weight:800;font-size:44px;color:${NV}}p{color:#5F6B7A;font-size:24px;margin:6px 0 26px}
.g{display:grid;grid-template-columns:1fr 1fr;gap:24px}.b{border-radius:22px;border:2px solid #E1E7EF;display:flex;align-items:center;justify-content:center;padding:34px}.b.w{background:#fff}.b.d{background:${NV}}.b.a{background:${AM}}.row{display:flex;gap:24px;margin-top:24px}.s{width:170px;height:170px;border-radius:26px;padding:22px;display:block}
</style></head><body><h1>Sun Power Projects — Final Logo</h1><p>Solar energy ke liye bana: suraj + solar panel + hari growth line. Flat, 3 rang, chhoti size par bhi saaf.</p>
<div class="g"><div class="b w">${horiz(false, .7)}</div><div class="b d">${horiz(true, .7)}</div><div class="b w">${stacked(false)}</div><div class="b d">${stacked(true)}</div></div>
<div class="row"><div class="s" style="background:#fff;border:2px solid #E1E7EF">${icon()}</div><div class="s" style="background:${NV}">${icon(true)}</div><div class="s" style="background:#fff;border:2px solid #E1E7EF;border-radius:50%;padding:30px">${icon()}</div><div style="width:44px;height:44px;margin-top:60px">${icon()}</div><div style="width:28px;height:28px;margin-top:70px">${icon()}</div><div style="font-size:22px;color:#5F6B7A;align-self:center;margin-left:10px">Chhoti size test: 44px · 28px</div></div></body></html>`;
(async () => {
  const br = await require('../browser')();
  const shot = async (html, w, h, file, o = {}) => { const p = await br.newPage(); await p.setViewport({ width: w, height: h, deviceScaleFactor: o.dsf || 1 }); await p.setContent(html, { waitUntil: 'load', timeout: 120000 }); await p.evaluate(() => document.fonts.ready); await p.screenshot({ path: OUT + file, omitBackground: !!o.t }); await p.close(); };
  await shot(SHEET, 2000, 1250, 'Logo_Presentation_Sheet.png'); await shot(HEADER, 2400, 480, 'Letterhead_Header_2400x480.png');
  await shot(wrap(horiz(false), 'transparent', 1300, 300, 30), 1300, 300, 'Logo_Horizontal_Transparent.png', { t: 1, dsf: 2 });
  await shot(wrap(horiz(true), 'transparent', 1300, 300, 30), 1300, 300, 'Logo_Horizontal_White_for_Dark_Transparent.png', { t: 1, dsf: 2 });
  await shot(wrap(stacked(false), 'transparent', 800, 640, 30), 800, 640, 'Logo_Stacked_Transparent.png', { t: 1, dsf: 2 });
  await shot(wrap(`<div style="width:900px;height:900px">${icon()}</div>`, 'transparent', 1000, 1000, 50), 1000, 1000, 'Icon_Only_Transparent.png', { t: 1 });
  await shot(wrap(`<div style="width:640px;height:640px;background:#fff;border-radius:50%;padding:90px">${icon()}</div>`, '#fff', 800, 800, 0), 800, 800, 'Profile_Picture_Round_800.png');
  fs.writeFileSync(OUT + 'Icon.svg', icon()); fs.writeFileSync(OUT + 'Icon_White.svg', icon(true));
  await br.close(); console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
