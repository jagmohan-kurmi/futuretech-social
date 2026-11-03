// Check that tools, browser and secrets are ready (prints only whether each secret exists, never its value)
const { execFileSync } = require('child_process');
const env = require('./env');
(async () => {
  for (const n of ['BUFFER_API_KEY', 'GEMINI_API_KEY', 'FT_FTP_HOST', 'FT_FTP_USER', 'FT_FTP_PASS', 'FT_UPLOAD_TOKEN']) {
    let ok = false; try { ok = !!env(n); } catch (e) { }
    console.log(`${ok ? 'OK ' : 'MISSING'}  ${n}`);
  }
  for (const bin of ['ffmpeg', 'ffprobe', process.platform === 'win32' ? 'curl.exe' : 'curl']) {
    try { execFileSync(bin, [bin.startsWith('curl') ? '--version' : '-version'], { stdio: 'ignore' }); console.log('OK      ' + bin); } catch (e) { console.log('MISSING ' + bin); }
  }
  try { const b = await require('./browser')(); await b.close(); console.log('OK      headless Chrome'); } catch (e) { console.log('MISSING headless Chrome: ' + e.message); }
})();
