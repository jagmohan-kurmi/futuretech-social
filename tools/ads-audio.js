// Ads-service Reel audio: Gemini TTS voice (split per line) + Lyria background music. Usage: node ads-audio.js [voice|music|split] [voiceName] [model]
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const KEY = require('./env')('GEMINI_API_KEY');
const DIR = path.join(__dirname, 'ads'); fs.mkdirSync(DIR, { recursive: true });
const LINES = [
  'दिवाली के लिए नया माल तो मंगा लिया… पर दुकान पर customer उतने नहीं आ रहे?',
  'आपके शहर के लोग इस वक़्त अपने phone पर Instagram और Facebook चला रहे हैं।',
  'Ads से आपकी दुकान का offer सिर्फ़ आपके शहर के लोगों को दिखेगा।',
  'आपकी दुकान की photo और video, और एक WhatsApp button — customer सीधे आपसे बात करे।',
  'छोटे budget से शुरू कीजिए,',
  'शहर आप चुनिए,',
  'और रोज़ देखिए कितने लोगों तक ad पहुँचा।',
  'दिवाली से पहले अपने शहर के customers तक पहुँचना है? FutureTech को WhatsApp कीजिए।',
];
const STYLE = 'Say calmly and warmly, like a friend talking:';
const api = async (model, body) => { const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY }, body: JSON.stringify(body) }); return r.json(); };
const dur = f => +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim();
const silences = f => { let o = ''; try { o = execFileSync('cmd', ['/c', 'ffmpeg', '-hide_banner', '-i', f, '-af', 'silencedetect=n=-38dB:d=0.22', '-f', 'null', '-', '2>&1']).toString(); } catch (e) { o = String(e.stdout || ''); } const g = []; const re = /silence_start: ([\d.]+)[\s\S]*?silence_end: ([\d.]+)/g; let m; while ((m = re.exec(o))) g.push([+m[1], +m[2]]); return g; };

(async () => {
  const [mode, voice = 'Achird', model = 'gemini-2.5-pro-preview-tts'] = process.argv.slice(2);
  if (mode === 'voice') {
    // no style prefix: the TTS model reads it aloud
    const text = LINES.join('\n\n');
    const j = await api(model, { contents: [{ parts: [{ text }] }], generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } } });
    const d = j.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData;
    if (!d) return console.log('VOICE FAIL', model, JSON.stringify(j.error || j).slice(0, 400));
    const pcm = path.join(DIR, `voice_${voice}.pcm`); fs.writeFileSync(pcm, Buffer.from(d.data, 'base64'));
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 's16le', '-ar', '24000', '-ac', '1', '-i', pcm, path.join(DIR, `voice_${voice}.wav`)]);
    console.log('VOICE OK', model, voice, dur(path.join(DIR, `voice_${voice}.wav`)).toFixed(2) + 's', d.mimeType);
  }
  if (mode === 'music') {
    const prompt = 'Warm, gentle Indian festive background music for a short shop advertisement: soft sitar melody, light tabla groove, delicate bells, calm and hopeful, medium-slow tempo around 90 BPM, instrumental only, no vocals, clean ending.';
    for (const m of ['lyria-3-clip-preview', 'lyria-3.5', 'lyria-3-pro-preview']) {
      const j = await api(m, { contents: [{ parts: [{ text: prompt }] }] });
      const parts = j.candidates?.[0]?.content?.parts || []; const d = parts.find(p => p.inlineData)?.inlineData;
      if (!d) { console.log('MUSIC FAIL', m, JSON.stringify(j.error || j).slice(0, 300)); continue; }
      const ext = /mpeg|mp3/.test(d.mimeType) ? 'mp3' : /wav/.test(d.mimeType) ? 'wav' : 'bin';
      const f = path.join(DIR, `music.${ext}`); fs.writeFileSync(f, Buffer.from(d.data, 'base64'));
      if (ext === 'bin') execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 's16le', '-ar', '48000', '-ac', '2', '-i', f, path.join(DIR, 'music.wav')]);
      else if (ext === 'mp3') execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', f, path.join(DIR, 'music.wav')]);
      console.log('MUSIC OK', m, d.mimeType, dur(path.join(DIR, 'music.wav')).toFixed(2) + 's'); break;
    }
  }
  if (mode === 'split') {
    const full = path.join(DIR, `voice_${voice}.wav`), total = dur(full), gaps = silences(full);
    const len = LINES.map(l => l.length), sum = len.reduce((a, b) => a + b, 0); let acc = 0; const used = new Set();
    const lead = gaps.length && gaps[0][0] < 0.05 ? gaps[0][1] : 0; const tail = gaps.length && Math.abs(gaps[gaps.length - 1][1] - total) < 0.05 ? gaps[gaps.length - 1][0] : total;
    const inner = gaps.filter(g => g[0] > 0.05 && Math.abs(g[1] - total) > 0.05);
    const cuts = len.slice(0, -1).map(n => { acc += n; const want = lead + (tail - lead) * acc / sum; let b = -1; inner.forEach((g, i) => { if (!used.has(i) && (b < 0 || Math.abs((g[0] + g[1]) / 2 - want) < Math.abs((inner[b][0] + inner[b][1]) / 2 - want))) b = i; }); used.add(b); return inner[b]; }).sort((a, b) => a[0] - b[0]);
    const bounds = [[lead, cuts[0][0]], ...cuts.slice(1).map((c, i) => [cuts[i][1], c[0]]), [cuts[cuts.length - 1][1], tail]];
    console.log('total', total.toFixed(2), 'pauses', JSON.stringify(gaps.map(g => g.map(x => +x.toFixed(2)))));
    bounds.forEach(([a, b], i) => { execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', full, '-af', `atrim=${Math.max(0, a - 0.04)}:${b + 0.06},asetpts=N/SR/TB`, path.join(DIR, `l${i}.wav`)]); console.log('line', i, (b - a).toFixed(2) + 's', LINES[i].slice(0, 30)); });
  }
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
