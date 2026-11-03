// Render post 1: Reel MP4 (no audio), Reel cover, GBP image. Usage: node post1-render.js [preview t1 t2 ...]
const fs = require('fs'); const path = require('path'); const { spawn } = require('child_process'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const OUT = require('path').join(__dirname, '..', 'posts', '2026-11-03_Diwali_Google_Ready') + '/';
fs.mkdirSync(OUT, { recursive: true });
const b64 = f => 'data:image/png;base64,' + fs.readFileSync(K + f).toString('base64');
let html = fs.readFileSync(path.join(__dirname, 'post1.html'), 'utf8').split('src="LOGO"').join(`src="${b64('FutureTech_Logo_Transparent.png')}"`).split('src="ICON"').join(`src="${b64('FutureTech_Icon_Mark.png')}"`);
const FPS = 30, DUR = 21;
(async () => {
  const br = await require('./browser')();
  const p = await br.newPage(); await p.setViewport({ width: 1080, height: 1920 });
  await p.setContent(html, { waitUntil: 'networkidle0', timeout: 60000 }); await p.evaluate(() => document.fonts.ready);
  const args = process.argv.slice(2);
  if (args[0] === 'preview') { for (const t of args.slice(1)) { await p.evaluate(t => setTime(+t), t); await p.screenshot({ path: `${OUT}../prev/p1_${t}.jpg`, type: 'jpeg', quality: 80 }); } await br.close(); return console.log('preview'); }
  // cover = hook frame
  await p.evaluate(() => setTime(2.6)); await p.screenshot({ path: OUT + 'Reel_Cover_1080x1920.png' });
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo', '-shortest', '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart', '-t', String(DUR), OUT + 'Reel_Instagram_Facebook_1080x1920.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let i = 0; i < FPS * DUR; i++) { await p.evaluate(t => setTime(t), i / FPS); const buf = await p.screenshot({ type: 'jpeg', quality: 92 }); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r));
  // GBP image 1200x900 (4:3)
  const g = await br.newPage(); await g.setViewport({ width: 1200, height: 900 });
  await g.setContent(`<!doctype html><html><head><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Mukta:wght@700;800&display=swap" rel="stylesheet"><style>
  *{margin:0;box-sizing:border-box}body{width:1200px;height:900px;font-family:Poppins;color:#fff;overflow:hidden;background:radial-gradient(700px 500px at 30% 20%,rgba(0,212,255,.22),transparent 60%),linear-gradient(135deg,#041030,#06204A)}
  .hi{font-family:Mukta}.l{position:absolute;left:60px;top:50px;background:#fff;border-radius:22px;padding:14px 22px}.l img{height:80px;display:block}
  h1{position:absolute;left:60px;top:190px;width:660px;font-size:62px;line-height:1.1;font-weight:800}.cy{color:#00D4FF}.gold{color:#FFC94D}
  ul{position:absolute;left:60px;top:450px;list-style:none;padding:0;width:640px}li{font-size:34px;font-weight:700;margin-bottom:18px;display:flex;gap:16px;align-items:center}li b{width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#00D4FF,#0060A8);display:flex;align-items:center;justify-content:center;font-size:28px}
  .card{position:absolute;right:60px;top:210px;width:400px;border-radius:28px;background:#fff;color:#1A1A1A;padding:28px;box-shadow:0 20px 60px rgba(0,0,0,.5)}.card .t{font-size:30px;font-weight:700}.card .s{color:#F5A623;font-size:26px;margin:6px 0}.card .m{font-size:22px;color:#5F6B7A;line-height:1.6}
  .f{position:absolute;left:0;right:0;bottom:0;height:90px;background:#22C55E;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:800}
  </style></head><body><div class="l"><img src="${b64('FutureTech_Logo_Transparent.png')}"></div>
  <h1 class="hi">दिवाली में <span class="gold">5 दिन</span> बाकी<br><span class="cy">Google पर दुकान</span><br>तैयार है?</h1>
  <ul><li class="hi"><b>1</b>दिवाली की special timing</li><li class="hi"><b>2</b>Offer post (date के साथ)</li><li class="hi"><b>3</b>दुकान की नई photos</li></ul>
  <div class="card"><div class="t">Aapki Dukaan, Sagar</div><div class="s">★★★★★</div><div class="m">✓ Diwali hours updated<br>🪔 Diwali Offer · 3–8 Nov<br>📍 Directions · 📞 Call</div></div>
  <div class="f">Free Google Profile Check — FutureTech, Sagar</div></body></html>`, { waitUntil: 'networkidle0' });
  await g.evaluate(() => document.fonts.ready); await g.screenshot({ path: OUT + 'GBP_Image_1200x900.png' });
  await br.close(); console.log('done');
})();
