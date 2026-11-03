const fs = require('fs'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const u = f => 'data:image/png;base64,' + fs.readFileSync(K + f).toString('base64');
const L = u('FutureTech_Logo_Transparent.png'), D = u('FutureTech_Logo_For_Dark_Background.png'), I = u('FutureTech_Icon_Mark.png');
const sw = [['#00D4FF','Electric Cyan','Highlight, glow'],['#00AEEF','Sky Blue','"Future" text, links'],['#0060A8','Royal Blue','Cube shadow, buttons'],['#041030','Deep Navy','Dark backgrounds'],['#1A1A1A','Ink Black','"Tech" text, body'],['#22C55E','WhatsApp Green','CTA only']];
const html = `<!doctype html><html><head><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"><style>
*{margin:0;box-sizing:border-box}body{width:1600px;font-family:Poppins,sans-serif;background:#F4F7FB;color:#1A1A1A;padding:60px}
h1{font-size:44px;color:#0060A8}h2{font-size:22px;margin:40px 0 16px;color:#0060A8;letter-spacing:2px;text-transform:uppercase}
.row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px}.box{border-radius:24px;height:340px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;padding:30px}
.box img{max-width:85%;max-height:230px}.cap{font-size:15px;opacity:.75}
.sw{display:grid;grid-template-columns:repeat(6,1fr);gap:18px}.s div{height:120px;border-radius:18px;border:1px solid #ddd}.s b{display:block;margin-top:10px;font-size:18px}.s span{font-size:14px;opacity:.7}
</style></head><body><h1>FutureTech — Logo & Colour Kit</h1>
<h2>Logo versions</h2><div class="row">
<div class="box" style="background:#fff"><img src="${L}"><div class="cap">Original — white / light backgrounds</div></div>
<div class="box" style="background:linear-gradient(180deg,#041030,#030A1C);color:#fff"><img src="${D}"><div class="cap">Dark-background version ("Tech" in white)</div></div>
<div class="box" style="background:linear-gradient(135deg,#0060A8,#00AEEF);color:#fff"><img src="${I}" style="max-height:200px"><div class="cap">Icon mark — profile photo, favicon, watermark</div></div></div>
<h2>Colour palette (taken from the logo)</h2><div class="sw">${sw.map(([h,n,d])=>`<div class="s"><div style="background:${h}"></div><b>${n}</b><span>${h} · ${d}</span></div>`).join('')}</div>
<h2>Typography</h2><div style="display:flex;gap:60px;align-items:baseline"><div style="font-size:56px;font-weight:700">Poppins Bold <span style="color:#00AEEF">Headlines</span></div><div style="font-size:26px">Poppins Regular — body text, captions</div></div>
</body></html>`;
(async()=>{const b=await require('./browser')();const p=await b.newPage();await p.setViewport({width:1600,height:900});await p.setContent(html,{waitUntil:'networkidle0'});await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:K+'FutureTech_Brand_Sheet.png',fullPage:true});await b.close();console.log('ok')})();
