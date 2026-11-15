// Usage: node tools/engine/align.js reel-1 -> prints CUTS (seconds) for reel.js. Gemini transcribes the voice with per-line timestamps; each boundary is snapped to the nearest detected silence.
const fs = require('fs'); const path = require('path'); const { execFileSync, spawnSync } = require('child_process');
const KEY = require('../env')('GEMINI_API_KEY'); const R = require('./content-reels'); const POSTS = require('./content-singles').filter(p => p.kind === 'reel');
(async () => {
  const id = process.argv[2]; const P = POSTS.find(p => p.id === id); const lines = R[id].scenes.map(s => s.line);
  const dir = path.join(__dirname, '..', '..', 'posts', `${P.date}_${P.slug}`) + '/'; const wav = dir + 'voice_gemini.wav'; const small = dir + '_align16k.wav';
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', wav, '-ar', '16000', '-ac', '1', small]);
  const prompt = `This audio is a Hindi voiceover that reads ${lines.length} script lines in order. For each line give the start and end time in seconds (decimal) where that line is spoken. Return JSON: {"lines":[{"start":0.0,"end":0.0}, ...]} with exactly ${lines.length} items.\n` + lines.map((l, i) => `${i + 1}. ${l}`).join('\n');
  let lj = null;
  for (let a = 0; a < 3 && !lj; a++) {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY }, body: JSON.stringify({ contents: [{ parts: [{ inlineData: { mimeType: 'audio/wav', data: fs.readFileSync(small).toString('base64') } }, { text: prompt }] }], generationConfig: { responseMimeType: 'application/json', temperature: 0 } }) });
    const j = await r.json(); const t = j.candidates?.[0]?.content?.parts?.[0]?.text; try { const o = JSON.parse(t); if (o.lines?.length === lines.length) lj = o.lines; } catch (e) {} if (!lj) await new Promise(r => setTimeout(r, 8000));
  }
  fs.unlinkSync(small);
  if (!lj) { console.log('ALIGN FAILED'); process.exit(1); }
  const err = spawnSync('ffmpeg', ['-hide_banner', '-i', wav, '-af', 'silencedetect=n=-38dB:d=0.18', '-f', 'null', '-'], { encoding: 'utf8' }).stderr; const sil = []; const re = /silence_start: ([\d.]+)[\s\S]*?silence_end: ([\d.]+)/g; let m; while ((m = re.exec(err))) sil.push((+m[1] + +m[2]) / 2);
  const cuts = []; for (let i = 0; i < lines.length - 1; i++) { const want = (lj[i].end + lj[i + 1].start) / 2; let best = want, bd = 0.7; sil.forEach(s => { if (Math.abs(s - want) < bd) { bd = Math.abs(s - want); best = s; } }); cuts.push(+best.toFixed(2)); }
  console.log(cuts.join(','));
  fs.writeFileSync(dir + 'align_cuts.txt', cuts.join(','));
})().catch(e => { console.error(e.message); process.exit(1); });
