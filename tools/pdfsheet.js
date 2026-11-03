// Render a PDF's pages into one contact-sheet PNG. Usage: node pdfsheet.js in.pdf out.png
const fs = require('fs'); const path = require('path'); const puppeteer = require('puppeteer-core'); const sharp = require('sharp');
const dist = path.join(__dirname, 'node_modules/pdfjs-dist/build');
const [pdf, out] = process.argv.slice(2);
(async () => {
  const b = await require('./browser')();
  const p = await b.newPage();
  await p.setContent('<canvas id="c"></canvas>');
  await p.addScriptTag({ type: 'module', content: fs.readFileSync(path.join(dist, 'pdf.min.mjs'), 'utf8') });
  await p.evaluate(src => { window.__w = URL.createObjectURL(new Blob([src], { type: 'text/javascript' })); }, fs.readFileSync(path.join(dist, 'pdf.worker.min.mjs'), 'utf8'));
  const n = await p.evaluate(async d => { pdfjsLib.GlobalWorkerOptions.workerSrc = window.__w; window.__d = await pdfjsLib.getDocument({ data: Uint8Array.from(atob(d), c => c.charCodeAt(0)) }).promise; return window.__d.numPages; }, fs.readFileSync(pdf).toString('base64'));
  const imgs = [];
  for (let i = 1; i <= n; i++) imgs.push(Buffer.from(await p.evaluate(async i => { const pg = await window.__d.getPage(i); const vp = pg.getViewport({ scale: 1.2 }); const c = document.getElementById('c'); c.width = vp.width; c.height = vp.height; await pg.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise; return c.toDataURL('image/png').split(',')[1]; }, i), 'base64'));
  const W = 500, H = 707, C = Math.min(n, 4), R = Math.ceil(n / C);
  const comp = await Promise.all(imgs.map(async (im, i) => ({ input: await sharp(im).resize(W, H).toBuffer(), left: (i % C) * (W + 8), top: Math.floor(i / C) * (H + 8) })));
  await sharp({ create: { width: C * (W + 8), height: R * (H + 8), channels: 3, background: '#777' } }).composite(comp).png().toFile(out);
  imgs.forEach((im, i) => fs.writeFileSync(out.replace('.png', `-p${i + 1}.png`), im));
  await b.close(); console.log(n, 'pages');
})();
