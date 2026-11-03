// Render anim.html frame by frame and pipe JPEG frames into ffmpeg with the original voice track.
// Usage: node anim-render.js [preview]   (preview = 6 still frames only)
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer-core');
const T = 'C:/Users/75098/Documents/ftv/';
const AUDIO = 'C:/Users/75098/Downloads/FutureTech_Commercial_Master_AI_Voice.mp4';
const FPS = 25, DUR = 48.76;
const logo = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, 'logo.png')).toString('base64');
const html = fs.readFileSync(path.join(__dirname, 'anim.html'), 'utf8').split('src="LOGO"').join(`src="${logo}"`);

(async () => {
  const preview = process.argv[2] === 'preview';
  const b = await require('./browser')();
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  await p.setContent(html, { waitUntil: 'networkidle0', timeout: 60000 });
  await p.evaluate(() => document.fonts.ready);
  if (preview) {
    const times = process.argv.slice(3).map(Number);
    for (const t of times) { await p.evaluate(t => setTime(t), t); await p.screenshot({ path: `${T}pv_${t}.jpg`, type: 'jpeg', quality: 80 }); }
    await b.close(); console.log('preview done'); return;
  }
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-i', AUDIO,
    '-map', '0:v', '-map', '1:a', '-af', 'highpass=f=70,acompressor=threshold=-22dB:ratio=3:attack=5:release=90:makeup=2,loudnorm=I=-13.5:TP=-1.5:LRA=7,aresample=48000', '-ac', '2',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-t', String(DUR), T + 'anim.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = Math.round(FPS * DUR);
  const t0 = Date.now();
  for (let i = 0; i < N; i++) {
    await p.evaluate(t => setTime(t), i / FPS);
    const buf = await p.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 250 === 0) console.log(`frame ${i}/${N}  ${((Date.now() - t0) / 1000).toFixed(0)}s`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await b.close();
  console.log('done', ((Date.now() - t0) / 1000).toFixed(0) + 's');
})();
