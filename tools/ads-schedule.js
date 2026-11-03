// Upload the Ads-service Reel to /social and schedule it on Buffer (IG + FB). Usage: node ads-schedule.js [upload|schedule] [ISO dueAt]
const { execFileSync } = require('child_process');
const env = require('./env');
const SRC = require('path').join(__dirname, '..', 'posts', '2026-11-04_Ads_Service_Reel') + '/';
const SITE = 'https://futuretechdigitalmarketingagency.com';
const FILES = { video: ['Reel_Ads_Service_1080x1920.mp4', 'ft-2026-11-04-ads-service-reel.mp4'], cover: ['Reel_Cover_1080x1920.png', 'ft-2026-11-04-ads-service-reel-cover.png'] };
const url = k => `${SITE}/social/${FILES[k][1]}`;

const TEXT = {
  instagram: `Diwali ke liye naya maal aa gaya… par customer utne nahi aa rahe? 🪔

Aapke shehar ke log isi waqt Instagram aur Facebook chala rahe hain. Ads se aapki dukaan sirf unhi tak pahunchti hai 👇
📸 Dukaan ki photo aur video
💬 WhatsApp button — customer seedha aapse baat kare
📍 Shehar aap chunein, chhote budget se shuru
📊 Roz dekhein ad kitne logon tak pahuncha

Diwali se pehle apne shehar ke customers tak pahunchna hai? WhatsApp karein 📲 79742 17411

#SmallBusinessIndia #InstagramAds #FacebookAds #DigitalMarketingIndia #DiwaliBusiness`,
  facebook: `Naya maal aa gaya, par customer kab aayega? 🪔

Instagram aur Facebook Ads se apni dukaan ki photo, video aur WhatsApp button seedha apne shehar ke logon tak pahunchaiye — chhote budget se shuru karke.

WhatsApp: 79742 17411
🌐 futuretechdigitalmarketingagency.com

#SmallBusinessIndia #FacebookAds`,
};
const META = {
  instagram: { instagram: { type: 'reel', shouldShareToFeed: true, isAiGenerated: true } },
  facebook: { facebook: { type: 'reel' } },
};

(async () => {
  const [mode, dueAt] = process.argv.slice(2);
  if (mode === 'upload') {
    const host = env('FT_FTP_HOST'), user = env('FT_FTP_USER'), pass = env('FT_FTP_PASS');
    for (const k in FILES) {
      execFileSync(process.platform === 'win32' ? 'curl.exe' : 'curl', ['-s', '--ftp-create-dirs', '-T', SRC + FILES[k][0], '-u', `${user}:${pass}`, `ftp://${host}/social/${FILES[k][1]}`]);
      const r = await fetch(url(k), { method: 'HEAD' }); console.log(k, r.status, r.headers.get('content-type'), r.headers.get('content-length'), url(k));
    }
    return;
  }
  if (mode === 'schedule') {
    if (!dueAt) throw new Error('dueAt required');
    const KEY = env('BUFFER_API_KEY');
    const gql = async (query, variables = {}) => { const j = await (await fetch('https://api.buffer.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY }, body: JSON.stringify({ query, variables }) })).json(); if (j.errors) throw new Error(JSON.stringify(j.errors)); return j.data; };
    const org = (await gql('query { account { organizations { id } } }')).account.organizations[0];
    const chans = (await gql('query($o:OrganizationId!){ channels(input:{organizationId:$o}){ id service displayName } }', { o: org.id })).channels;
    for (const svc of ['instagram', 'facebook']) {
      const ch = chans.find(c => c.service === svc); if (!ch) { console.log('NO CHANNEL', svc); continue; }
      const input = { channelId: ch.id, text: TEXT[svc], assets: [{ video: { url: url('video'), metadata: { title: 'Naya maal aa gaya, customer kab aayega?', ...(svc === 'instagram' ? { thumbnailOffset: 4900 } : {}) } } }], mode: 'customScheduled', dueAt, schedulingType: 'automatic', needsApproval: false, metadata: META[svc] };
      const d = await gql(`mutation($i:CreatePostInput!){ createPost(input:$i){ __typename ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }`, { i: input });
      console.log(svc, ch.displayName, JSON.stringify(d.createPost));
    }
  }
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
