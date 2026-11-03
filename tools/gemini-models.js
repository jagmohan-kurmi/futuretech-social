const { execFileSync } = require('child_process');
const KEY = require('./env')('GEMINI_API_KEY');
fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200', { headers: { 'x-goog-api-key': KEY } }).then(r => r.json()).then(j => console.log((j.models || []).map(m => m.name).filter(n => /tts|audio/i.test(n)).join('\n') || JSON.stringify(j).slice(0, 300)));
