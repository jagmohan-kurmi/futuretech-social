// Usage: node tools/engine/tts.js reel-1 [reel-2 ...]  -> posts/<folder>/voice_gemini.wav (Gemini TTS, voice Achird, ONE request per reel, no style text)
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const KEY = require('../env')('GEMINI_API_KEY'); const R = require('./content-reels'); const POSTS = require('./content-singles').filter(p => p.kind === 'reel');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const MODELS = ['gemini-3.8-flash-tts', 'gemini-2.5-flash-preview-tts'];
(async () => {
  const ids = process.argv.slice(2);
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i]; const P = POSTS.find(p => p.id === id); const reel = R[id];
    const dir = path.join(__dirname, '..', '..', 'posts', `${P.date}_${P.slug}`) + '/';
    const text = reel.scenes.map(s => s.line).join('\n\n');
    let ok = false;
    for (const model of MODELS) for (let attempt = 0; attempt < 3 && !ok; attempt++) {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY }, body: JSON.stringify({ contents: [{ parts: [{ text }] }], generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Achird' } } } } }) });
      const j = await r.json(); const d = j.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData;
      if (d) { const pcm = dir + 'voice_gemini.pcm'; fs.writeFileSync(pcm, Buffer.from(d.data, 'base64')); execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 's16le', '-ar', '24000', '-ac', '1', '-i', pcm, '-ar', '48000', '-ac', '2', dir + 'voice_gemini.wav']); fs.unlinkSync(pcm); console.log(id, 'voice OK via', model, execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', dir + 'voice_gemini.wav']).toString().trim() + 's'); ok = true; }
      else { console.log(id, model, 'attempt', attempt + 1, 'FAIL', JSON.stringify(j.error || j).slice(0, 100)); await sleep(30000); }
    }
    if (!ok) console.log(id, 'VOICE FAILED');
    if (i < ids.length - 1) await sleep(25000);
  }
})().catch(e => { console.error(e.message); process.exit(1); });
