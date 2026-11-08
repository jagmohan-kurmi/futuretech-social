// 8 Nov 2026 Diwali wishes Reel, 1080x1920, 15 s, greeting only. Frame-by-frame render (setTime) piped to ffmpeg + an original synthesized bell/drone track.
// Usage: node reel-2026-11-08-diwali.js            -> full MP4 + cover PNG
//        node reel-2026-11-08-diwali.js preview 1 4 8 13  -> still frames at those seconds (scratch dir via env PREVIEW_DIR)
const fs = require('fs'); const path = require('path'); const { spawn, execFileSync } = require('child_process');
const OUT = path.join(__dirname, '..', 'posts', '2026-11-08_Diwali_Wishes_Reel') + '/';
const LOGO = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '..', 'brand', 'FutureTech_Logo_Transparent.png')).toString('base64');
const FPS = 30, DUR = 15;
const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Mukta:wght@600;700;800&display=swap" rel="stylesheet">';
const DIYA = (cls) => `<svg viewBox="0 0 120 120" class="diya ${cls}"><g class="fl"><path d="M60 8c12 16 14 28 0 42C46 36 48 24 60 8z" fill="#F5A623"/><path d="M60 22c5 8 6 13 0 20-6-7-5-12 0-20z" fill="#FFD66B"/></g><path d="M8 66h104c-5 26-25 42-52 42S13 92 8 66z" fill="#0060A8"/><path d="M26 82h68" stroke="#FFC94D" stroke-width="5" stroke-dasharray="2 9" stroke-linecap="round"/><rect x="4" y="62" width="112" height="8" rx="4" fill="#041030"/></svg>`;
const petals = (n, r, rx, ry, fill, cls) => Array.from({ length: n }, (_, i) => `<ellipse class="${cls}" cx="100" cy="${100 - r}" rx="${rx}" ry="${ry}" fill="${fill}" transform="rotate(${i * 360 / n} 100 100)"/>`).join('');
const RANGOLI = `<svg viewBox="0 0 200 200" id="rang">${petals(8, 62, 15, 30, '#BFE3F7', 'p1')}${petals(8, 40, 11, 22, '#0060A8', 'p2')}${petals(8, 40, 5, 10, '#FFC94D', 'p3')}<circle cx="100" cy="100" r="22" fill="#FFC94D"/><circle cx="100" cy="100" r="10" fill="#041030"/>${Array.from({ length: 16 }, (_, i) => `<circle class="dot" cx="100" cy="8" r="4" fill="${i % 2 ? '#00AEEF' : '#FFC94D'}" transform="rotate(${i * 22.5} 100 100)"/>`).join('')}</svg>`;

const HTML = `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>
*{margin:0;padding:0;box-sizing:border-box}body{width:1080px;height:1920px;background:#FFFDF8;overflow:hidden;position:relative;font-family:Poppins,sans-serif;color:#041030}
.frame{position:absolute;inset:40px;border:4px solid #00AEEF;border-radius:36px}
#rang{position:absolute;left:390px;top:300px;width:300px}
.row{position:absolute;left:0;right:0;top:640px;display:flex;justify-content:center;align-items:flex-end;gap:44px}
.diya{width:180px;display:block}.diya.big{width:230px}.fl{transform-origin:60px 50px;opacity:0}
h1{position:absolute;left:0;right:0;top:880px;text-align:center;font:800 168px/1.05 Mukta;letter-spacing:-1px}
.mk{position:relative;display:inline-block;padding:0 10px}.mk i{position:absolute;left:0;bottom:16%;height:17%;background:#FFC94D;z-index:-1;width:0}
.l{position:absolute;left:0;right:0;text-align:center;font:600 54px/1.35 Mukta;color:#5F6B7A;opacity:0}
.sig{color:#0060A8;font-weight:700}
#logo{position:absolute;left:50%;top:1430px;height:104px;transform:translateX(-50%);opacity:0}
</style></head><body><div class="frame"></div>${RANGOLI}
<div class="row">${DIYA('d1')}${DIYA('big d2')}${DIYA('d3')}</div>
<h1 id="h"><span id="w1">शुभ</span> <span class="mk" id="w2"><i id="bar"></i>दीपावली</span></h1>
<div class="l" id="l1" style="top:1150px">आपके घर और व्यापार में</div>
<div class="l" id="l2" style="top:1225px">रोशनी, खुशियाँ और तरक्की बनी रहे।</div>
<div class="l sig" id="l3" style="top:1320px">— FutureTech परिवार</div>
<img id="logo" src="${LOGO}">
<script>
const cl=(x)=>Math.max(0,Math.min(1,x)), ease=(x)=>1-Math.pow(1-cl(x),3), win=(t,a,b)=>ease((t-a)/(b-a));
const $=(s)=>document.querySelector(s), $$=(s)=>[...document.querySelectorAll(s)];
function setTime(t){
  // rangoli: petals grow in layers, then a very slow turn
  const r=$('#rang'); r.style.transform='rotate('+(t*4)+'deg) scale('+(0.6+0.4*win(t,0,1.4))+')'; r.style.opacity=win(t,0,0.8);
  $$('.p1').forEach((e,i)=>e.style.opacity=win(t,0.1+i*0.06,0.6+i*0.06));
  $$('.p2').forEach((e,i)=>e.style.opacity=win(t,0.5+i*0.06,1.0+i*0.06));
  $$('.p3,.dot').forEach((e,i)=>e.style.opacity=win(t,1.0+i*0.03,1.4+i*0.03));
  // diyas rise in, then light one by one (left, right, centre) with a gentle flicker
  [['.d1',0.3,1.6],['.d3',0.5,2.4],['.d2',0.7,3.2]].forEach(([s,a,lit],k)=>{
    const d=$(s); d.style.opacity=win(t,a,a+0.6); d.style.transform='translateY('+(40*(1-win(t,a,a+0.7)))+'px)';
    const f=d.querySelector('.fl'), on=win(t,lit,lit+0.35);
    const fl=1+0.05*Math.sin(t*11+k*2)+0.03*Math.sin(t*17+k);
    f.style.opacity=on; f.style.transform='scale('+(on*fl)+','+(on*(1+0.08*Math.sin(t*9+k)))+')';
  });
  // headline
  const h=$('#h'); h.style.opacity=win(t,3.8,4.5); h.style.transform='translateY('+(30*(1-win(t,3.8,4.6)))+'px)';
  $('#bar').style.width=(100*win(t,4.6,5.4))+'%';
  // message lines
  [['#l1',6.2],['#l2',7.2],['#l3',8.6]].forEach(([s,a])=>{const e=$(s); e.style.opacity=win(t,a,a+0.7); e.style.transform='translateY('+(20*(1-win(t,a,a+0.7)))+'px)';});
  $('#logo').style.opacity=win(t,10,10.8);
  // soft fade at the very end so the loop restarts cleanly
  document.body.style.opacity=1-0.0*win(t,14.6,15);
}
setTime(0);
</script></body></html>`;

// Original audio: warm drone + bell strikes when each diya lights and on the headline/logo. Pure synthesis, no third-party music.
const bell = (t0, f, amp) => `if(gte(t,${t0}),${amp}*exp(-2.6*(t-${t0}))*(sin(2*PI*${f}*(t-${t0}))+0.5*sin(2*PI*${(f * 2.76).toFixed(2)}*(t-${t0}))+0.25*sin(2*PI*${(f * 5.4).toFixed(2)}*(t-${t0}))),0)`;
const AEXPR = ['0.05*(1-exp(-t/2))*(sin(2*PI*110*t)+0.6*sin(2*PI*164.81*t)+0.4*sin(2*PI*220.5*t))*(0.85+0.15*sin(2*PI*0.25*t))',
  bell(1.6, 659.25, 0.16), bell(2.4, 783.99, 0.16), bell(3.2, 987.77, 0.18), bell(4.6, 523.25, 0.14), bell(8.6, 659.25, 0.12), bell(10.0, 523.25, 0.14)].join('+');

(async () => {
  const preview = process.argv[2] === 'preview';
  fs.mkdirSync(OUT, { recursive: true });
  const br = await require('./browser')();
  const p = await br.newPage();
  await p.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  await p.setContent(HTML, { waitUntil: 'load', timeout: 180000 });
  await p.evaluate(async () => { await Promise.all(['600', '700', '800'].map(x => document.fonts.load(x + ' 40px Mukta', 'शुभ दीपावली'))); await Promise.all(['500', '600', '700'].map(x => document.fonts.load(x + ' 40px Poppins'))); await document.fonts.ready; });
  if (preview) {
    const dir = process.env.PREVIEW_DIR || OUT;
    for (const t of process.argv.slice(3).map(Number)) { await p.evaluate(t => setTime(t), t); await p.screenshot({ path: `${dir}/pv_${t}.jpg`, type: 'jpeg', quality: 85 }); }
    await br.close(); console.log('preview done'); return;
  }
  // cover = final state
  await p.evaluate(() => setTime(12)); await p.screenshot({ path: OUT + 'Reel_Cover_1080x1920.png' });
  const wav = OUT + '.music.wav';
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'lavfi', '-i', `aevalsrc='${AEXPR}':s=48000:d=${DUR}`, '-af', `afade=t=in:d=0.8,afade=t=out:st=${DUR - 1.5}:d=1.5,aecho=0.8:0.6:120|260:0.25|0.15,loudnorm=I=-18:TP=-2`, '-ac', '2', wav]);
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-i', wav, '-map', '0:v', '-map', '1:a',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-t', String(DUR), OUT + 'Reel_Diwali_Wishes_1080x1920.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = FPS * DUR;
  for (let i = 0; i < N; i++) {
    await p.evaluate(t => setTime(t), i / FPS);
    const buf = await p.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); fs.unlinkSync(wav);
  await br.close(); console.log('done', OUT);
})().catch(e => { console.error(e); process.exit(1); });
