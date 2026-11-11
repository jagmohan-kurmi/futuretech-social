// Usage: node tools/engine/reel.js reel-1 [voice.wav]   -> builds MP4 (scene images + Hindi subtitles). With a voice file, scene timing follows the voice.
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const L = require('./lib'); const { F, pageHTML, slide, renderPages, ROOT } = L;
const CONTENT = require('./content-reels'); const POSTS = [...require('./content-singles')].filter(p => p.kind === 'reel');
const id = process.argv[2]; const voice = process.argv[3];
const R = CONTENT[id]; const P = POSTS.find(p => p.id === id); if (!R || !P) { console.log('unknown reel', id); process.exit(1); }
const dir = path.join(ROOT, 'posts', `${P.date}_${P.slug}`) + '/'; const tmp = path.join(ROOT, 'tools', 'engine', '_tmp_' + id) + '/'; fs.mkdirSync(tmp, { recursive: true });
const endCard = () => `<div class="page" style="align-items:center;justify-content:flex-start;text-align:center;padding:270px 72px 0"><div style="font-family:Mukta;font-weight:800;font-size:84px;line-height:1.1;color:#041030">अब <span style="color:#0060A8">WhatsApp</span> पर<br>पूछिए</div><div style="background:#EFE7DC;border:4px solid #041030;border-radius:36px;overflow:hidden;width:100%;margin-top:34px;text-align:left"><div style="display:flex;gap:18px;align-items:center;background:#0B6E4F;color:#fff;padding:18px 28px"><i style="width:60px;height:60px;border-radius:50%;background:#FFC94D;display:block"></i><div><b style="font-size:34px">FutureTech</b><div style="font-size:24px;opacity:.9">WhatsApp पर online</div></div></div><div style="margin:18px 26px;padding:16px 24px;border-radius:22px;background:#D9FDD3;font-size:35px;line-height:1.3;max-width:86%;margin-left:auto">${R.ask || 'Namaste, mujhe aapke baare mein jaanna hai'}</div><div style="margin:0 26px 20px;padding:16px 24px;border-radius:22px;background:#fff;font-size:35px;max-width:86%">Namaste! Bataiye, main kya madad karun?</div></div><div style="display:flex;align-items:center;justify-content:center;gap:16px;background:#22C55E;color:#fff;border-radius:90px;padding:30px 20px;width:100%;margin-top:30px;font-family:Mukta;font-weight:800;font-size:64px;box-shadow:0 10px 0 #15803D"><span style="width:70px;height:70px;display:block">${L.ic('wa', '#fff', 2)}</span>WhatsApp पर पूछिए →</div><div style="font-size:112px;font-weight:800;margin-top:26px;letter-spacing:2px;color:#041030">79742 17411</div><div style="display:flex;gap:16px;justify-content:center;margin-top:12px"><span style="background:#fff;border:4px solid #041030;border-radius:60px;padding:12px 28px;font-family:Mukta;font-weight:800;font-size:38px"><b style="display:inline-block;background:#FFC94D;border-radius:50%;width:48px;height:48px;line-height:48px;margin-right:10px">1</b>Number save करें</span><span style="background:#fff;border:4px solid #041030;border-radius:60px;padding:12px 28px;font-family:Mukta;font-weight:800;font-size:38px"><b style="display:inline-block;background:#FFC94D;border-radius:50%;width:48px;height:48px;line-height:48px;margin-right:10px">2</b>“Hi” भेजें</span></div></div>`;
const subPage = text => `<!doctype html><html><head><meta charset="utf-8">${L.FONTS}<style>*{margin:0;padding:0}html,body{width:1080px;height:1920px;background:transparent}.s{position:absolute;left:70px;right:70px;top:1445px;text-align:center}.s span{display:inline-block;background:#041030;color:#fff;font-family:Mukta;font-weight:700;font-size:44px;line-height:1.3;padding:14px 30px;border-radius:20px;max-width:940px}</style></head><body><div class="s"><span>${text}</span></div></body></html>`;
(async () => {
  const br = await require('../browser')();
  // 1) scene images
  const jobs = R.scenes.map((s, i) => ({ f: F.reel, file: tmp + `s${i}.png`, html: pageHTML(F.reel, s.end ? endCard() : slide(F.reel, { ...s.slide, footer: 'none' }, 0, 1)) }));
  await renderPages(br, jobs);
  // subtitle overlays
  for (let i = 0; i < R.scenes.length; i++) { const p = await br.newPage(); await p.setViewport({ width: 1080, height: 1920 }); await p.setContent(subPage(R.scenes[i].line), { waitUntil: 'load' }); await p.evaluate(() => document.fonts.ready); await p.screenshot({ path: tmp + `t${i}.png`, omitBackground: true }); await p.close(); }
  await br.close();
  // 2) timing
  const n = R.scenes.length; let dur;
  if (voice) {
    const total = +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', voice]).toString().trim();
    const sil = []; const re = /silence_start: ([\d.]+)[\s\S]*?silence_end: ([\d.]+)/g; let m;
    const err = require('child_process').spawnSync('ffmpeg', ['-hide_banner', '-i', voice, '-af', 'silencedetect=n=-38dB:d=0.22', '-f', 'null', '-'], { encoding: 'utf8' }).stderr; while ((m = re.exec(err))) sil.push([+m[1], +m[2]]);
    const len = R.scenes.map(s => s.line.length); const sum = len.reduce((a, b) => a + b, 0); const used = new Set(); let acc = 0; const cuts = [];
    for (let i = 0; i < n - 1; i++) { acc += len[i]; const want = total * acc / sum; let best = -1; sil.forEach((g, k) => { if (used.has(k)) return; if (best < 0 || Math.abs((g[0] + g[1]) / 2 - want) < Math.abs((sil[best][0] + sil[best][1]) / 2 - want)) best = k; }); if (best >= 0) { used.add(best); cuts.push((sil[best][0] + sil[best][1]) / 2); } else cuts.push(want); }
    if (process.env.CUTS) { cuts.length = 0; process.env.CUTS.split(',').map(Number).forEach(x => cuts.push(x)); }
    cuts.sort((a, b) => a - b); const b = [0, ...cuts, total + 2.6]; dur = b.slice(1).map((x, i) => +(x - b[i]).toFixed(2));
  } else dur = R.scenes.map((s, i) => +Math.max(2.8, s.line.length / 11 + 0.9).toFixed(2));
  // 3) clips
  const FPS = 30; const clips = [];
  for (let i = 0; i < n; i++) {
    const d = dur[i], N = Math.ceil(d * FPS), clip = tmp + `c${i}.mp4`;
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-loop', '1', '-t', String(d), '-i', tmp + `s${i}.png`, '-loop', '1', '-t', String(d), '-i', tmp + `t${i}.png`, '-filter_complex', `[0:v]scale=2160:3840,zoompan=z='1+0.035*on/${N}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${N}:s=1080x1920:fps=${FPS},fade=t=in:st=0:d=0.25,fade=t=out:st=${(d-0.25).toFixed(2)}:d=0.25[a];[a][1:v]overlay=0:0:shortest=1,format=yuv420p[v]`, '-map', '[v]', '-r', String(FPS), '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-t', String(d), clip]);
    clips.push(clip);
  }
  fs.writeFileSync(tmp + 'list.txt', clips.map(c => `file '${c}'`).join('\n'));
  const total = dur.reduce((a, b) => a + b, 0); const out = dir + `${R.file}_1080x1920.mp4`;
  const audioArgs = voice ? ['-i', voice, '-af', 'highpass=f=70,loudnorm=I=-14:TP=-1.5:LRA=7,aresample=48000,apad', '-ac', '2'] : ['-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo'];
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', tmp + 'list.txt', ...audioArgs, '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '160k', '-t', String(total.toFixed(2)), '-movflags', '+faststart', out]);
  fs.copyFileSync(tmp + 's0.png', dir + 'Reel_Cover_1080x1920.png');
  console.log('built', out, total.toFixed(1) + 's', voice ? '(voice-timed)' : '(silent, text-timed)', 'scenes', JSON.stringify(dur));
})().catch(e => { console.error(e); process.exit(1); });
