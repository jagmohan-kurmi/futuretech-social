const sharp = require('sharp');
const OUT = require('path').join(__dirname, '..', 'brand') + '/';
(async () => {
  const { data, info } = await sharp('logo_hd.webp').removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, N = W * H;
  const trans = Buffer.alloc(N * 4), rev = Buffer.alloc(N * 4);
  const hist = {};
  let rowHas = new Array(H).fill(0);
  for (let i = 0; i < N; i++) {
    const r = data[i*3], g = data[i*3+1], b = data[i*3+2];
    const mn = Math.min(r, g, b);
    let a = Math.min(1, Math.max(0, (255 - mn) / 255 * 1.6));
    if (255 - mn < 18) a = 0;
    const un = c => a > 0 ? Math.max(0, Math.min(255, Math.round((c - (1 - a) * 255) / a))) : 0;
    const R = un(r), G = un(g), B = un(b), A = Math.round(a * 255);
    trans.set([R, G, B, A], i * 4);
    const neutral = Math.max(R, G, B) - Math.min(R, G, B) < 45 && (R + G + B) / 3 < 140;
    rev.set(neutral ? [255, 255, 255, A] : [R, G, B, A], i * 4);
    if (A > 200) { rowHas[Math.floor(i / W)]++; if (!neutral) { const k = [R, G, B].map(c => Math.round(c / 24) * 24).join(','); hist[k] = (hist[k] || 0) + 1; } }
  }
  const raw = { raw: { width: W, height: H, channels: 4 } };
  await sharp(trans, raw).trim().png().toFile(OUT + 'FutureTech_Logo_Transparent.png');
  await sharp(rev, raw).trim().png().toFile(OUT + 'FutureTech_Logo_For_Dark_Background.png');
  // icon: connected component starting from a cube pixel
  const seen=new Uint8Array(N), icon=Buffer.alloc(N*4); let st=[Math.round(H*0.3)*W+Math.round(W*0.40)];
  // find a solid pixel near the seed
  while(trans[st[0]*4+3]<200) st[0]++;
  let gap=0; while(st.length){const p=st.pop(); if(seen[p])continue; seen[p]=1; if(trans[p*4+3]<30)continue; trans.copy(icon,p*4,p*4,p*4+4); gap++;
    const x=p%W,y=(p/W)|0; if(x>0)st.push(p-1); if(x<W-1)st.push(p+1); if(y>0)st.push(p-W); if(y<H-1)st.push(p+W);}
  await sharp(icon, raw).trim().png().toFile(OUT + 'FutureTech_Icon_Mark.png');
  const top10 = Object.entries(hist).sort((a, b) => b[1] - a[1]).slice(0, 12);
  console.log(W, H, 'cube ends at row', gap);
  top10.forEach(([k, v]) => { const [r, g, b] = k.split(',').map(Number); console.log('#' + [r, g, b].map(c => Math.min(255, c).toString(16).padStart(2, '0')).join('').toUpperCase(), v); });
})();
