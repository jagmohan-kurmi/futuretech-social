// Ask a Gemini text model to transcribe the voice track and give per-line timestamps. Usage: node ads-align.js voiceName [model]
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const KEY = require('./env')('GEMINI_API_KEY');
const DIR = path.join(__dirname, 'ads');
const [voice = 'Achird', model = 'gemini-2.5-flash'] = process.argv.slice(2);
const LINES = require('./ads-lines.json');
(async () => {
  const wav = path.join(DIR, `voice_${voice}.wav`);
  const prompt = `This audio is a Hindi voiceover. First, write exactly what is spoken at the very start before the first Hindi line (if anything, e.g. English words). Then, for each of these ${LINES.length} script lines, give the start and end time in seconds (decimals) where it is spoken in the audio:\n${LINES.map((l, i) => `${i}: ${l}`).join('\n')}\nReply ONLY as JSON: {"preamble":"...","lines":[{"i":0,"start":0.0,"end":0.0,"heard":"..."}]}`;
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
    body: JSON.stringify({ contents: [{ parts: [{ inlineData: { mimeType: 'audio/wav', data: fs.readFileSync(wav).toString('base64') } }, { text: prompt }] }], generationConfig: { responseMimeType: 'application/json', temperature: 0 } }) });
  const j = await r.json(); const t = j.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!t) return console.log('FAIL', JSON.stringify(j.error || j).slice(0, 300));
  fs.writeFileSync(path.join(DIR, `align_${voice}.json`), t); console.log(t);
})();
