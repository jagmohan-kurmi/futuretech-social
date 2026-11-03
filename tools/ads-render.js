// Render the Ads-service Reel from ads.html, timed to the aligned Gemini voice. Usage: node ads-render.js [preview t1 t2 ...]
const fs = require('fs'); const path = require('path'); const { execFileSync, spawn } = require('child_process'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const OUT = require('path').join(__dirname, '..', 'posts', '2026-11-04_Ads_Service_Reel') + '/'; fs.mkdirSync(OUT, { recursive: true });
const DIR = path.join(__dirname, 'ads'); const VOICE = 'Achird'; const OFF = 0.4;
const LINES = require('./ads-lines.json');
const A = JSON.parse(fs.readFileSync(path.join(DIR, `align_${VOICE}.json`), 'utf8')).lines.map(x => [x.start + OFF, x.end + OFF]);
const S = [0, A[1][0] - 0.2, A[2][0] - 0.2, A[3][0] - 0.2, A[4][0] - 0.25, A[7][0] - 0.25];
const D = +(A[7][1] + 1.8).toFixed(2);
const SUBS = LINES.map((l, i) => [A[i][0], A[i][1] + 0.15, l]);
const T = { s: S, l: A, D };

(async () => {
  const voiceOut = path.join(DIR, 'voice_final.wav');
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', path.join(DIR, `voice_${VOICE}.wav`), '-af', `adelay=${OFF * 1000}:all=1,apad,atrim=0:${D},highpass=f=70,loudnorm=I=-14:TP=-1.5:LRA=7,aresample=48000`, '-ac', '2', voiceOut]);
  const b64 = f => 'data:image/png;base64,' + fs.readFileSync(K + f).toString('base64');
  const html = fs.readFileSync(path.join(__dirname, 'ads.html'), 'utf8').split('src="LOGO"').join(`src="${b64('FutureTech_Logo_Transparent.png')}"`).split('src="ICON"').join(`src="${b64('FutureTech_Icon_Mark.png')}"`)
    .replace('<style>', `<script>window.T=${JSON.stringify(T)};window.SUBS=${JSON.stringify(SUBS)}</script><style>`);
  const br = await require('./browser')();
  const p = await br.newPage(); await p.setViewport({ width: 1080, height: 1920 });
  await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
  await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(w => document.fonts.load(w + ' 30px Poppins'))); await Promise.all(['500', '600', '700', '800'].map(w => document.fonts.load(w + ' 30px Mukta', 'दिवाली'))); await document.fonts.ready; });
  const args = process.argv.slice(2);
  if (args[0] === 'preview') {
    const ts = args.length > 1 ? args.slice(1).map(Number) : [A[0][1] - .3, A[1][1] - .3, A[2][1] - .2, A[3][1] - .3, A[6][1], D - .4];
    for (let i = 0; i < ts.length; i++) { await p.evaluate(t => setTime(t), ts[i]); await p.screenshot({ path: path.join(DIR, `pv${i}.jpg`), type: 'jpeg', quality: 70 }); }
    await br.close(); console.log('preview', JSON.stringify(T)); return;
  }
  await p.evaluate(t => setTime(t), A[0][1] - .3); await p.screenshot({ path: OUT + 'Reel_Cover_1080x1920.png' });
  const FPS = 30, N = Math.ceil(FPS * D), out = OUT + 'Reel_Ads_Service_1080x1920.mp4';
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-i', voiceOut, '-map', '0:v', '-map', '1:a', '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-t', String(D), out], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let i = 0; i < N; i++) { await p.evaluate(t => setTime(t), i / FPS); const buf = await p.screenshot({ type: 'jpeg', quality: 92 }); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await br.close(); console.log('done', out, D + 's');
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
