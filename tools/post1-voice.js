// Post 1 Reel with Gemini Hindi voiceover, scenes timed to each voice line. Usage: node post1-voice.js [tts|render|all] [voiceName]
const fs = require('fs'); const path = require('path'); const { execFileSync, spawn } = require('child_process'); const puppeteer = require('puppeteer-core');
const KEY = require('./env')('GEMINI_API_KEY');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const OUT = require('path').join(__dirname, '..', 'posts', '2026-11-03_Diwali_Google_Ready') + '/';
const VO = path.join(__dirname, 'vo1'); fs.mkdirSync(VO, { recursive: true });
const MODEL = 'gemini-3.8-flash-tts';
const STYLE = 'Say energetically:';
const LINES = [
  'दिवाली में सिर्फ़ पाँच दिन बाकी! क्या Google पर आपकी दुकान तैयार है?',
  'Shopping से पहले customer Google खोलता है, और search करता है — Diwali offer near me. क्या वहाँ आपकी दुकान सही timing के साथ दिखती है?',
  'तो आज ही ये तीन काम कीजिए।',
  'एक — दिवाली की special timing डालिए।',
  'दो — date के साथ offer post लगाइए।',
  'तीन — दुकान की नई photos upload कीजिए।',
  'Google Profile setup में मदद चाहिए? WhatsApp कीजिए — FutureTech, सागर।',
];

async function tts(text, voice, file) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
      body: JSON.stringify({ contents: [{ parts: [{ text: `${STYLE}\n${text}` }] }], generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } } }),
    });
    const j = await r.json();
    const d = j.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData;
    if (d) { fs.writeFileSync(file + '.pcm', Buffer.from(d.data, 'base64')); execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 's16le', '-ar', '24000', '-ac', '1', '-i', file + '.pcm', file + '.wav']); return; }
    console.log('retry', attempt, JSON.stringify(j).slice(0, 200)); await new Promise(s => setTimeout(s, 40000));
  }
  throw new Error('TTS failed: ' + text);
}
const dur = f => +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim();

(async () => {
  const [mode = 'all', voice = 'Puck'] = process.argv.slice(2);
  if (mode === 'tts' || mode === 'all') {
    // one request for the whole script (free tier allows 3/min), then split at the pauses between lines
    if (!process.argv.includes('--reuse')) await tts(LINES.join('\n\n'), voice, path.join(VO, 'full'));
    const full = path.join(VO, 'full.wav'); const total = dur(full);
    let errOut = ''; try { errOut = execFileSync('cmd', ['/c', 'ffmpeg', '-hide_banner', '-i', full, '-af', 'silencedetect=n=-38dB:d=0.28', '-f', 'null', '-', '2>&1']).toString(); } catch (e) { errOut = String(e.stdout || ''); }
    const gaps = []; const re = /silence_start: ([\d.]+)[\s\S]*?silence_end: ([\d.]+)/g; let m;
    while ((m = re.exec(errOut))) gaps.push([+m[1], +m[2]]);
    // expected boundary = share of characters spoken so far; take the nearest unused pause to each
    const len = LINES.map(l => l.length), sum = len.reduce((a, b) => a + b, 0); let acc = 0; const used = new Set();
    const cuts = len.slice(0, -1).map(n => { acc += n; const want = total * acc / sum; let best = -1;
      gaps.forEach((g, i) => { if (!used.has(i) && (best < 0 || Math.abs((g[0] + g[1]) / 2 - want) < Math.abs((gaps[best][0] + gaps[best][1]) / 2 - want))) best = i; });
      used.add(best); return gaps[best]; }).sort((a, b) => a[0] - b[0]);
    console.log('pauses', JSON.stringify(gaps.map(g => g.map(x => +x.toFixed(2)))));
    console.log('total', total.toFixed(2), 'gaps found', gaps.length, 'using', JSON.stringify(cuts));
    if (cuts.length !== LINES.length - 1) throw new Error('could not find a pause between every line');
    const bounds = [[0, cuts[0][0]], ...cuts.slice(1).map((c, i) => [cuts[i][1], c[0]]), [cuts[cuts.length - 1][1], total]];
    bounds.forEach(([a, b], i) => { execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', full, '-af', `atrim=${Math.max(0, a - 0.03)}:${b + 0.05},asetpts=N/SR/TB`, path.join(VO, `l${i}.wav`)]); console.log('line', i, (b - a).toFixed(2) + 's'); });
  }
  if (mode !== 'render' && mode !== 'all') return;
  const d = LINES.map((_, i) => dur(path.join(VO, `l${i}.wav`)));
  // timeline: each line starts when its scene/element appears
  const st = []; const T = {};
  st[0] = 0.3;                         T.s2 = st[0] + d[0] + 0.35;
  st[1] = T.s2 + 0.3;                  T.s3 = st[1] + d[1] + 0.35;
  st[2] = T.s3 + 0.25;
  st[3] = st[2] + d[2] + 0.25;         T.t1 = st[3] - 0.15;
  st[4] = st[3] + d[3] + 0.3;          T.t2 = st[4] - 0.15;
  st[5] = st[4] + d[4] + 0.3;          T.t3 = st[5] - 0.15;
  T.card = st[5] + d[5] + 0.15;        T.s4 = T.card + 1.6;
  st[6] = T.s4 + 0.4;                  T.D = +(st[6] + d[6] + 1.6).toFixed(2);
  console.log('timeline', JSON.stringify(T));
  // voice track
  const inputs = LINES.flatMap((_, i) => ['-i', path.join(VO, `l${i}.wav`)]);
  const fc = LINES.map((_, i) => `[${i}]adelay=${Math.round(st[i] * 1000)}:all=1[a${i}]`).join(';') + ';' + LINES.map((_, i) => `[a${i}]`).join('') + `amix=inputs=${LINES.length}:normalize=0,apad,atrim=0:${T.D},loudnorm=I=-14:TP=-1.5:LRA=7,aresample=48000[out]`;
  fs.writeFileSync(path.join(VO, 'fc.txt'), fc);
  execFileSync('ffmpeg', ['-v', 'error', '-y', ...inputs, '-/filter_complex', path.join(VO, 'fc.txt'), '-map', '[out]', '-ac', '2', path.join(VO, 'voice.wav')]);
  // video
  const b64 = f => 'data:image/png;base64,' + fs.readFileSync(K + f).toString('base64');
  const html = fs.readFileSync(path.join(__dirname, 'post1.html'), 'utf8').split('src="LOGO"').join(`src="${b64('FutureTech_Logo_Transparent.png')}"`).split('src="ICON"').join(`src="${b64('FutureTech_Icon_Mark.png')}"`).replace('<style>', `<script>window.T=${JSON.stringify(T)}</script><style>`);
  const FPS = 30;
  const br = await require('./browser')();
  const p = await br.newPage(); await p.setViewport({ width: 1080, height: 1920 });
  await p.setContent(html, { waitUntil: 'load', timeout: 120000 });
  await p.evaluate(async () => { await Promise.all(['500', '600', '700', '800'].map(w => document.fonts.load(w + ' 30px Poppins'))); await Promise.all(['600', '700', '800'].map(w => document.fonts.load(w + ' 30px Mukta', 'दिवाली'))); await document.fonts.ready; });
  for (const [t, n] of [[T.s2 - 0.6, 'a'], [(T.s2 + T.s3) / 2 + 1, 'b'], [T.s4 - 0.3, 'c'], [T.D - 0.5, 'd']]) { await p.evaluate(t => setTime(t), t); await p.screenshot({ path: path.join(VO, `prev_${n}.jpg`), type: 'jpeg', quality: 70 }); }
  await p.evaluate(t => setTime(t), T.s2 - 0.6); await p.screenshot({ path: OUT + 'Reel_Cover_1080x1920.png' });
  const out = OUT + 'Reel_With_Voice_1080x1920.mp4';
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-i', path.join(VO, 'voice.wav'), '-map', '0:v', '-map', '1:a', '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-t', String(T.D), out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = Math.ceil(FPS * T.D);
  for (let i = 0; i < N; i++) { await p.evaluate(t => setTime(t), i / FPS); const buf = await p.screenshot({ type: 'jpeg', quality: 92 }); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r));
  await br.close(); console.log('done', out, T.D + 's');
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
