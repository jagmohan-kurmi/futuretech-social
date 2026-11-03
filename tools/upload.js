// Upload one post file to the website's /social folder via the HTTPS gate (works from the cloud; FTP is blocked there).
// Usage in code: const url = await require('./upload')(localPath, 'ft-2026-11-07-topic-ig-01.png')
// Name rules (enforced by the gate): ft-<lowercase-words>.png|jpg|jpeg|mp4|txt, must be NEW (no overwrite).
const { execFileSync } = require('child_process');
const env = require('./env');
const GATE = 'https://futuretechdigitalmarketingagency.com/social/ft-upload.php';
module.exports = async (file, name) => {
  const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
  const out = execFileSync(curl, ['-s', '-w', '\n%{http_code}', '-H', `X-FT-Token: ${env('FT_UPLOAD_TOKEN')}`, '-F', `name=${name}`, '-F', `file=@${file}`, GATE]).toString();
  const [body, code] = [out.slice(0, out.lastIndexOf('\n')), out.slice(out.lastIndexOf('\n') + 1).trim()];
  if (code !== '201') throw new Error(`upload ${name} failed: HTTP ${code} ${body}`);
  const url = JSON.parse(body).url;
  const head = await fetch(url, { method: 'HEAD' });
  if (!head.ok) throw new Error(`uploaded but not public yet: ${url} (${head.status})`);
  return url;
};
if (require.main === module) module.exports(process.argv[2], process.argv[3]).then(u => console.log(u)).catch(e => { console.error(e.message); process.exit(1); });
