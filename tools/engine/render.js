// Usage: node tools/engine/render.js [id ...]   (no ids = all posts)
// Reads content modules, renders IG/FB/GBP/Story PNGs, writes Captions.txt + spec.json per post, validates policy rules.
const fs = require('fs'); const path = require('path');
const L = require('./lib');
const { F, pageHTML, slide, ctaSlide, A, renderPages, ROOT } = L;
const POSTS = [...require('./content-carousels'), ...require('./content-singles')];
const REELS = require('./content-reels');
const only = process.argv.slice(2);
const wa = code => `https://wa.me/917974217411?text=Namaste%20(${code})`;
const utm = (n) => `https://futuretechdigitalmarketingagency.com/?utm_source=gbp&utm_campaign=${n}`;
const GBP = { W: 1200, H: 900, pad: 80, h1: 66, sub: 30, logo: 54, foot: 90, minArt: .34 };
const utcDue = (date, time) => { const [y, m, d] = date.split('-').map(Number); const [hh, mm] = time.split(':').map(Number); return new Date(Date.UTC(y, m - 1, d, hh, mm) - 330 * 60000).toISOString(); };
const folder = p => path.join(ROOT, 'posts', `${p.date}_${p.slug}`) + '/';
function gbpHTML(p) {
  const s = { ...(p.gbpSlide || p.slide), footer: 'gbp', chip: p.chipGbp || '' };
  if (p.gbpH) s.h = p.gbpH;
  return pageHTML(GBP, slide(GBP, s, 0, 1));
}
const DIYA = `<svg viewBox="0 0 120 110" width="150"><path d="M60 6c11 15 13 26 0 39C47 32 49 21 60 6z" fill="#F5A623"/><path d="M60 20c5 7 6 12 0 18-6-6-5-11 0-18z" fill="#FFD66B"/><path d="M8 58h104c-5 26-25 40-52 40S13 84 8 58z" fill="#0060A8"/><rect x="4" y="54" width="112" height="8" rx="4" fill="#041030"/></svg>`;
function greetHTML(f, p) {
  const g = p.greet; const k = f.W / 1080;
  return pageHTML(f, `<div class="page" style="background:#FFFDF8;align-items:center;justify-content:center;text-align:center"><div style="position:absolute;inset:34px;border:3px solid #0060A8;border-radius:30px"></div>
<div style="display:flex;gap:30px;align-items:flex-end;margin-bottom:${40 * k}px;transform:scale(${f.H > 1000 ? 1.4 : 1})">${DIYA}${DIYA}${DIYA}</div>
<h1 style="font-size:${(f.H > 1000 ? 112 : 88)}px;max-width:${f.W - 160}px">${g.h}</h1><div class="sub" style="font-size:${f.H > 1000 ? 42 : 34}px;margin-top:26px;max-width:${f.W - 220}px">${g.s}<br><span style="color:#0060A8">— FutureTech परिवार</span></div>
<img class="logo" style="position:absolute;bottom:${f.H > 1000 ? 80 : 52}px;height:${f.H > 1000 ? 80 : 62}px" src="${L.LOGO}"></div>`);
}
const warn = (id, m) => console.log(`  ⚠ ${id}: ${m}`);
function validate(p) {
  const t = { ig: p.ig, fb: p.fb, gbp: p.gbp };
  if (p.ig) { const tags = (p.ig.match(/#\w+/g) || []); if (tags.length > 5) warn(p.id, 'IG hashtags > 5'); if (p.ig.length > 2200) warn(p.id, 'IG caption > 2200'); }
  if (p.gbp) { if (/#\w/.test(p.gbp)) warn(p.id, 'GBP has hashtag'); if (/\d{5}\s?\d{5}|\+91|\b\d{10}\b/.test(p.gbp)) warn(p.id, 'GBP has phone number'); if (p.gbp.length > 1500) warn(p.id, 'GBP > 1500'); }
  if (p.fb && !/wa\.me\/917974217411/.test(p.fb)) warn(p.id, 'FB missing wa.me link');
  const all = Object.values(t).filter(Boolean).join(' ').toLowerCase();
  for (const w of ['guarantee', '100%', '#1', 'best ', 'gst', 'free ', 'fake', 'cure', 'limited seats']) if (all.includes(w)) warn(p.id, `contains "${w.trim()}" — check policy`);
}
async function main() {
  const br = await require('../browser')();
  for (const p of POSTS) {
    if (only.length && !only.includes(p.id)) continue;
    const dir = folder(p); fs.mkdirSync(dir, { recursive: true }); const jobs = []; const files = { ig: [], fb: [], gbp: [] };
    if (p.kind === 'carousel') { const n0 = p.slides.length; p.alt = p.slides.map((s, i) => `FutureTech Hindi carousel slide ${i + 1} of ${n0}. ${(p.altTopics || [])[i] || ''}`.trim()); }
    const igF = F.ig, fbF = p.kind === 'carousel' ? F.fb : F.fb12;
    if (p.kind === 'carousel') {
      const n = p.slides.length;
      p.slides.forEach((s, i) => {
        const mk = f => pageHTML(f, s.cta ? ctaSlide(f, s, i, n, (f === igF ? 'IG-' : 'FB-') + p.lead) : slide(f, { ...s, footer: s.footer || (i === 0 ? 'swipe' : 'dots'), chip: s.chip || (i === 0 ? '' : p.series) }, i, n));
        const nn = String(i + 1).padStart(2, '0');
        jobs.push({ f: igF, html: mk(igF), file: dir + `IG_${nn}_1080x1350.png` }); jobs.push({ f: fbF, html: mk(fbF), file: dir + `FB_${nn}_1080x1080.png` });
        files.ig.push(`IG_${nn}_1080x1350.png`); files.fb.push(`FB_${nn}_1080x1080.png`);
      });
      jobs.push({ f: GBP, html: gbpHTML({ ...p, gbpSlide: p.slides[0], gbpH: p.gbpH }), file: dir + 'GBP_1200x900.png' }); files.gbp.push('GBP_1200x900.png');
    } else if (p.kind === 'single') {
      const s = { ...p.slide, footer: 'wa', chip: p.slide.chip };
      jobs.push({ f: igF, html: pageHTML(igF, slide(igF, s, 0, 1)), file: dir + 'Instagram_1080x1350.png' }); jobs.push({ f: fbF, html: pageHTML(fbF, slide(fbF, s, 0, 1)), file: dir + 'Facebook_1200x1200.png' });
      jobs.push({ f: GBP, html: gbpHTML({ ...p, slide: p.slide }), file: dir + 'GBP_1200x900.png' });
      files.ig = ['Instagram_1080x1350.png']; files.fb = ['Facebook_1200x1200.png']; files.gbp = ['GBP_1200x900.png'];
    } else if (p.kind === 'greeting') {
      jobs.push({ f: igF, html: greetHTML(igF, p), file: dir + 'Instagram_1080x1350.png' }); jobs.push({ f: F.fb12, html: greetHTML(F.fb12, p), file: dir + 'Facebook_1200x1200.png' }); jobs.push({ f: GBP, html: greetHTML({ ...GBP, minArt: 0 }, p), file: dir + 'GBP_1200x900.png' });
      files.ig = ['Instagram_1080x1350.png']; files.fb = ['Facebook_1200x1200.png']; files.gbp = ['GBP_1200x900.png'];
    } else if (p.kind === 'poll' || p.kind === 'reel') {
      jobs.push({ f: F.story, html: pageHTML(F.story, slide(F.story, { ...p.slide, footer: 'none' }, 0, 1)), file: dir + (p.kind === 'poll' ? 'Story_Poll_1080x1920.png' : 'Reel_Cover_1080x1920.png') });
    }
    await renderPages(br, jobs);
    // captions + spec
    const due = utcDue(p.date, p.time || '14:00');
    let txt = `${p.title}\nDate: ${p.date} ${p.time || '14:00'} IST | Lead code: ${p.lead ? 'IG-' + p.lead + ' / FB-' + p.lead + ' / GBP-' + p.lead : '-'} | Status: DRAFT (pending founder OK)\n`;
    if (p.ig) txt += `\n${'='.repeat(50)}\nINSTAGRAM (${files.ig.join(', ')})\n${'-'.repeat(50)}\n${p.ig}\n\nALT TEXT: ${(p.alt || []).join(' | ')}\n`;
    if (p.fb) txt += `\n${'='.repeat(50)}\nFACEBOOK (${files.fb.join(', ')})\n${'-'.repeat(50)}\n${p.fb}\n`;
    if (p.gbp) txt += `\n${'='.repeat(50)}\nGOOGLE BUSINESS PROFILE (${files.gbp.join(', ')}) — Update post\nButton: Learn more -> ${utm(p.utm)}\n${'-'.repeat(50)}\n${p.gbp}\n`;
    if (p.script && REELS[p.id]) p.script.lines = REELS[p.id].scenes.map((s, i) => `${i + 1}. ${s.line}${s.end ? '  [END CARD: logo + WhatsApp 79742 17411 + QR]' : ''}`);
    if (p.script) txt += `\n${'='.repeat(50)}\nREEL (9:16, approx 30-37 sec) — video BUILT (text-timed, Hindi subtitles); VOICEOVER LINES below (one per scene)\n${'-'.repeat(50)}\n${p.script.lines.join('\n')}\n\nCAPTION (IG/FB): ${p.script.caption}\nNOTE: AI voice => Instagram isAiGenerated true + Facebook AI label manually. Founder voice/face = no label needed.\n`;
    if (p.poll) txt += `\nPOLL STICKER (add manually in Instagram/Facebook Story): ${p.poll}\n`;
    fs.writeFileSync(dir + 'Captions.txt', txt);
    if (p.ig || p.fb || p.gbp) {
      const spec = { dueAt: due, posts: [
        p.ig && { service: 'instagram', files: files.ig.map(f => dir + f), remotePrefix: `ft-${p.date}-${p.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-ig`, alt: p.alt, text: p.ig, metadata: { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: false } } },
        p.fb && { service: 'facebook', files: files.fb.map(f => dir + f), remotePrefix: `ft-${p.date}-${p.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-fb`, alt: p.alt, text: p.fb, metadata: { facebook: { type: 'post' } } },
        p.gbp && { service: 'googlebusiness', files: files.gbp.map(f => dir + f), remotePrefix: `ft-${p.date}-${p.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-gbp`, alt: [p.altGbp || p.title], text: p.gbp, metadata: { google: { type: 'whats_new', detailsWhatsNew: { button: 'learn_more', link: utm(p.utm) } } } },
      ].filter(Boolean) };
      fs.writeFileSync(dir + 'spec.json', JSON.stringify(spec, null, 1));
    }
    validate(p); console.log('built', p.id, '->', path.basename(dir));
  }
  await br.close();
  if (global.__lint) { console.log('\nSMALL TEXT (<24px effective):'); global.__lint.forEach(([f, l]) => console.log(' ', f, '->', l.slice(0, 4).join(' | '))); }
}
module.exports = { wa };
if (require.main === module) main().catch(e => { console.error(e); process.exit(1); });
