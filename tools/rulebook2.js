// FutureTech Content Creation Rulebook (authentic look, brand kit, engagement, lead generation). Usage: node rulebook2.js
const fs = require('fs'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const OUT = require('path').join(__dirname, '..', 'posts', 'FutureTech_Content_Creation_Rulebook.pdf') + '/';
const LOGO = 'data:image/png;base64,' + fs.readFileSync(K + 'FutureTech_Logo_Transparent.png').toString('base64');
const ex = n => 'data:image/png;base64,' + fs.readFileSync(n).toString('base64');
const EX1 = ex(require('path').join(__dirname, '..', 'posts', '2026-11-05_GBP_Info_Carousel/IG_01_1080x1350.png') + '/');
const EX2 = ex(require('path').join(__dirname, '..', 'posts', '2026-11-03_Diwali_Google_Ready/Instagram_Post_1080x1350.png') + '/');
const EX3 = ex(require('path').join(__dirname, '..', 'posts', '2026-11-04_Ads_Service_Reel/Reel_Cover_1080x1920.png') + '/');

const ul = a => `<ul>${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
const T = (head, rows) => `<table><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;
const sec = (n, title, body, brk = false) => `<section class="${brk ? 'brk' : ''}"><div class="sn">${n}</div><h2>${title}</h2>${body}</section>`;
const box = (cls, title, body) => `<div class="box ${cls}"><b>${title}</b>${body}</div>`;
const chk = a => `<div class="chk">${a.map(x => `<div><span></span>${x}</div>`).join('')}</div>`;
const tg = (t, c = 'o') => `<span class="tag t-${c}">${t}</span>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;700;800&display=swap" rel="stylesheet"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Poppins,sans-serif;color:#041030;font-size:10.5px;line-height:1.55}
.cover{height:257mm;position:relative;page-break-after:always}
.cover .bar{position:absolute;left:-18mm;top:-14mm;bottom:-14mm;width:5mm;background:#00AEEF}
.cover img.l{height:70px}
.cover h1{font-size:40px;line-height:1.08;margin-top:46mm;letter-spacing:-1px}.cover h1 span{color:#0060A8}
.cover .k{font-size:11px;font-weight:600;letter-spacing:.16em;color:#00AEEF;text-transform:uppercase;margin-top:12px}
.cover p.l{font-size:13px;color:#5F6B7A;max-width:112mm;margin-top:14px}
.cover .goals{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:22px;max-width:116mm}.cover .goals div{border:1.5px solid #C9DDF2;background:#EEF5FC;border-radius:12px;padding:10px 12px;font-size:11px}.cover .goals b{display:block;color:#0060A8;font-size:12px}
.cover .ex{position:absolute;right:0;top:40mm;display:flex;flex-direction:column;gap:10px}.cover .ex img{width:46mm;border-radius:8px;box-shadow:0 8px 22px rgba(4,16,48,.16)}
.cover .meta{position:absolute;left:0;bottom:0;font-size:10px;color:#5F6B7A;line-height:1.8}
section{margin-bottom:16px;break-inside:avoid-page}.brk{page-break-before:always}
.sn{font-size:10px;font-weight:600;letter-spacing:.16em;color:#00AEEF;page-break-after:avoid}
h2{font-size:21px;margin:2px 0 8px;letter-spacing:-.3px;page-break-after:avoid}
h3{font-size:12.5px;margin:12px 0 5px;color:#0060A8;page-break-after:avoid}
p{margin:4px 0}ul{padding-left:15px;margin:4px 0}li{margin:2px 0}
table{width:100%;border-collapse:collapse;margin:6px 0 8px;font-size:9.8px;page-break-inside:avoid}
th{background:#041030;color:#fff;text-align:left;padding:6px 8px;font-weight:600;font-size:9.5px}
td{border-bottom:1px solid #E1E7EF;padding:6px 8px;vertical-align:top}tr:nth-child(even) td{background:#F7F9FC}
.box{border-radius:10px;padding:10px 12px;margin:8px 0;page-break-inside:avoid}.box>b:first-child{display:block;margin-bottom:3px;font-size:11px}
.red{background:#FFF1F1;border:1px solid #F5C2C2}.red>b:first-child{color:#C62828}
.grn{background:#EFFAF3;border:1px solid #BFE6CC}.grn>b:first-child{color:#15803D}
.blu{background:#EEF5FC;border:1px solid #C9DDF2}.blu>b:first-child{color:#0060A8}
.yel{background:#FFF8E6;border:1px solid #F3DDA0}.yel>b:first-child{color:#9A6B00}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.chk div{display:flex;gap:9px;align-items:flex-start;padding:4px 0;border-bottom:1px dashed #E1E7EF}.chk span{flex:0 0 12px;height:12px;border:1.6px solid #0060A8;border-radius:3px;margin-top:2px}
.tag{display:inline-block;font-size:8.3px;font-weight:700;padding:1px 6px;border-radius:8px;margin-left:3px;vertical-align:middle}
.t-o{background:#E3F0FB;color:#0060A8}.t-s{background:#EEF1F5;color:#5F6B7A}.t-v{background:#FFF0D6;color:#9A6B00}.t-m{background:#EFFAF3;color:#15803D}
.hi{font-family:Mukta,sans-serif;font-size:12px}
.code{font-family:Consolas,monospace;font-size:9.5px;background:#F2F5F9;padding:1px 5px;border-radius:4px}
.src{font-size:8.6px;color:#5F6B7A;word-break:break-all}
.sw{display:inline-block;width:12px;height:12px;border-radius:3px;vertical-align:middle;margin-right:5px;border:1px solid #D5DDE7}
</style></head><body>

<div class="cover"><div class="bar"></div><img class="l" src="${LOGO}">
<h1>Content Creation<br><span>Rulebook</span></h1>
<div class="k">Authentic · On-brand · Engaging · Leads</div>
<p class="l">Har graphic, carousel aur Reel banane ka FutureTech tareeka — taaki post AI-generated na lage, brand kit har jagah ek jaisa dikhe, log save/share karein, aur enquiry WhatsApp par aaye.</p>
<div class="goals"><div><b>1 · AI na lage</b>Asli log, asli jagah, asli saboot</div><div><b>2 · Brand sahi</b>Ek design system, har post par</div><div><b>3 · Engaging</b>Watch time, saves, sends</div><div><b>4 · Leads</b>Profile → CTA → WhatsApp → tracking</div></div>
<div class="ex"><img src="${EX1}"><img src="${EX2}"></div>
<div class="meta">Version 1.0 · 3 Nov 2026 · Publishing Rulebook (policies + kanoon) ke saath use karein<br>FutureTech Digital Marketing Agency · Sagar (MP) se, poore India ke liye · WhatsApp 79742 17411</div></div>

${sec('00', 'Ek line mein poori rulebook', `
${box('blu', 'Asli log, asli jagah, asli saboot = bharosa bhi, reach bhi', `<p>Instagram/Facebook ke 2025–26 ke originality rules wahi cheez reward karte hain jis par log bharosa karte hain: apna banaya content, asli chehre, asli kaam ${tg('OFFICIAL')}. Ipsos AI Monitor 2025 (India): 47% log insaan ke banaye video ads pasand karte hain (40% AI wale), aur 67% chahte hain ki company AI use bataye ${tg('STUDY', 's')}.</p>`)}
${T(['Tag', 'Matlab'], [[tg('OFFICIAL'), 'Meta / Instagram / Google / ASCI / sarkari source'], [tg('STUDY', 's'), 'Naam wala study/report (zyada tar secondary se padha)'], [tg('PRACTICE', 'm'), 'Industry ka anubhav — data nahi, achhi aadat'], [tg('VERIFY', 'v'), 'Pakka nahi / badal raha hai — har quarter check']])}
`)}

${sec('01', 'AI na lage — kya hatana hai', `
<div class="two">
${box('red', 'Ye AI / generic lagta hai — mat karein', ul(['<b>Visual:</b> dark neon / purple-blue gradient, glow, glassmorphism, udte particles, 3D blob/chrome, emoji ko icon ki tarah, sab kuch perfect symmetric, AI chehre (waxy skin), galat ya toota Devanagari.', '<b>Audio:</b> sapaat TTS, har line ke baad ek jaisa pause, Hindi ka galat uchcharan, har video mein stock music, voice jo instruction bhi bol de.', '<b>Copy:</b> "Unlock", "Elevate", "In today\'s fast-paced world", emoji ki line, aisi line jo kisi bhi business par fit ho jaaye.', '<b>Nakli cheezein:</b> nakli rating stars, nakli review, AI se bana "customer / dukaan / team member" asli bata kar.']))}
${box('grn', 'Ye insaan ka banaya lagta hai — karein', ul(['Founder/team camera par (phone se shoot chalega), asli office/kaam, behind-the-scenes.', 'Asli screenshot (date ke saath, personal data blur) — client ki likhit permission se.', 'Asli photo par haath se bane arrow/circle/notes.', 'Bolchaal ki Hinglish voiceover; voice natural aur shaant.', 'Specific baat: "kirana store near me", "Diwali stock" — generic nahi.', 'Ek fixed design system (agla section) — flat/editorial, 2 font, brand colours.']))}
</div>
${box('yel', 'AI kahan use kar sakte hain, kahan nahi', `<table><tr><th>Theek hai</th><th>Label zaroori</th><th>Kabhi nahi</th></tr><tr><td>Caption ka pehla draft, subtitles, spelling check, idea, code se bani flat graphics</td><td>AI voice (Gemini TTS), realistic AI image/video — Meta "AI info" ON ${tg('OFFICIAL')} · IT Rules 2026 ${tg('OFFICIAL')}</td><td>AI se nakli customer/testimonial, kisi asli insaan ki shakal/awaaz, nakli dukaan/jagah asli bata kar, deepfake ${tg('VERIFY', 'v')} (ASCI AI guideline, Sep 2026)</td></tr></table>`)}
<h3>Voiceover rules (pichhli galti se seekh)</h3>
${ul(['TTS text mein <b>koi instruction mat likhein</b> ("Say calmly…") — model use bhi bol deta hai.', 'Har voice track ko transcription se check karein: shuru mein faltu shabd nahi, har line saaf.', 'Tone: natural, shaant, dost jaisa — "energetic ad" wala nahi. Approved voice: Achird (Gemini).', 'Sabse best: Founder ki apni awaaz (phone par record) — sabse zyada bharosa, label ki zarurat nahi.'])}
`, true)}

${sec('02', 'Brand kit har post par — design rules', `
${T(['Cheez', 'Rule'], [
  ['Background', '<span class="sw" style="background:#F4F7FB"></span>Cloud White #F4F7FB (60%) — dark backgrounds nahi'],
  ['Colours', '<span class="sw" style="background:#041030"></span>Navy #041030 headline/footer (25%) · <span class="sw" style="background:#0060A8"></span>Royal Blue #0060A8 key words, icons (10%) · <span class="sw" style="background:#FFC94D"></span>Diya Gold sirf highlight marker · <span class="sw" style="background:#22C55E"></span>Green sirf WhatsApp dot/button'],
  ['Fonts', 'Mukta 800 (Hindi headline) + Poppins (sub-text, numbers, footer). Teesra font nahi.'],
  ['Devanagari', 'Headline max 3 line; line-height thoda zyada; letter-spacing nahi; matra kati na ho; Hindi ALL-CAPS English ke saath nahi; text Unicode se paste; har graphic ki Hindi proofread.'],
  ['Layout', '72–80px margin; logo top-left (60–70px); tag pill top-right; ek post = ek message; neeche navy footer (WhatsApp + website; GBP par number nahi).'],
  ['Icons', 'Ek hi style ke flat line icons (Royal Blue, 2px stroke) — <b>emoji ko icon ki tarah nahi</b>.'],
  ['Illustrations', 'Flat, brand colours, asli UI jaisa (search bar, Maps pin, phone, listing card). Real photo mile to wahi pehle.'],
  ['Photos', 'Apni ya client ki asli photo (permission ke saath). Stock photo kam se kam; Google/Pinterest se kabhi nahi.'],
  ['Templates', '01 Tip/Checklist · 02 Service · 03 Festive · 04 Client Work · 05 Myth vs Fact · 06 Story/Poll · 07 Info Carousel (naya)'],
  ['Sizes', 'IG 1080×1350 · FB 1200×1200 (carousel 1080×1080) · GBP 1200×900 · Reel/Story 1080×1920 (upar 250px, neeche 340px khaali)'],
])}
${box('blu', '10-second brand check', '<p>Thumbnail chhota karke dekhein: (1) logo dikh raha? (2) background light? (3) sirf 2 font? (4) Hindi headline 3 line se kam aur saaf? (5) ek hi highlight? (6) CTA ek? Agar haan, to brand sahi hai.</p>')}
`)}

${sec('03', 'Engaging post — kya kaam karta hai', `
${T(['Signal', 'Kya karein'], [
  ['Watch time, likes, <b>sends</b> (top 3) ' + tg('OFFICIAL') + ' Mosseri, Jan 2025', 'Reel pehle frame se kaam ki baat; aisa content jo dukaandar apne dost ko bheje. Non-followers tak pahunchne mein sends sabse zaroori.'],
  ['Saves', 'Checklist, template, steps, myth-vs-fact — carousel mein. Carousel single image se kai guna zyada save hote hain ' + tg('STUDY', 's') + ' Metricool 2026.'],
  ['Originality ' + tg('OFFICIAL'), 'Apni graphic/voice/commentary. Repost, watermark, sirf crop/border = reach kam.'],
  ['Format roles ' + tg('STUDY', 's'), '<b>Reels = reach</b> (naye log), <b>Carousel = saves + engagement</b>. Har hafte dono.'],
])}
<div class="two"><div>
<h3>Hook formulas (pehli line / pehle 2 sec)</h3>
${T(['Type', 'Example'], [['Samasya', '<span class="hi">नया माल आ गया… पर customer?</span>'], ['Galti', '<span class="hi">Google Profile की ये 3 गलतियाँ customer भगा देती हैं</span>'], ['Myth', '<span class="hi">"Ads सिर्फ़ बड़ी companies के लिए" — सच या myth?</span>'], ['Sawaal', '<span class="hi">Google Business Profile क्या है?</span>'], ['Proof-first', 'Sirf asli, dated, permission wala data — nakli % kabhi nahi']])}
</div><div>
<h3>Structure</h3>
${ul(['<b>Reel:</b> 15–45 sec ' + tg('PRACTICE', 'm') + '; pehle frame mein on-screen text; har pause kaatein; Hindi subtitles safe zone mein; end par ek CTA.', '<b>Carousel:</b> 6–8 slides ' + tg('PRACTICE', 'm') + ' — cover (sawaal/vaada + "Swipe") → har slide ek idea → aakhri slide checklist/CTA + "Save karein".', '<b>Caption:</b> hook (125 char) → 3 points → ek CTA. IG 5 hashtag, FB 0–2.', '<b>Series:</b> naam wali series — "Dukaan Digital Tip #", "Myth vs Fact", "Kya hai? (GBP, SEO, Ads…)".', '<b>Stories:</b> poll/quiz/question sticker — jawab dene walon ko DM se ek-ek reply.', '<b>Trial Reels:</b> naye hook pehle non-followers par test ' + tg('OFFICIAL') + '.'])}
</div></div>
${box('red', 'Engagement bait — reach girti hai ' + tg('OFFICIAL'), '<p>"Comment YES", "Tag 3 friends", "Share karo tabhi…", reaction se vote. "Comment AUDIT" jaise keyword prompt grey area hain — Facebook par avoid, IG par kabhi-kabhi. <b>Theek hai:</b> asli sawaal ("Kaunsa step mushkil lagta hai?"), "Save karein", "Jo dost nayi dukaan khol raha hai, usko bhejiye".</p>')}
`, true)}

${sec('04', 'Leads ka system — profile se WhatsApp tak', `
<p>Reach kam (IG ~39/post) hone ki asli wajah: content share nahi hota, aur WhatsApp tak pahunchne ke raste kam hain. Isliye pehle <b>raste</b> banayein, phir content.</p>
<h3>Step 1 — Profile setup (free, ek baar)</h3>
${T(['Jagah', 'Kya karna hai'], [
  ['Instagram profile', 'WhatsApp Business number link karein → profile par WhatsApp button ' + tg('OFFICIAL') + '. Name field mein keyword ("FutureTech | Website · Google · Ads"). Bio 3 line: kisko madad + kya result (sach) · ek checkable fact · ek CTA. Pehla link: <span class="code">wa.me/917974217411?text=Namaste%20(IG-BIO)</span>. Highlights: Kaam/Results, Reviews, Services, Process, FAQ. 3 pinned posts: service, best carousel, best Reel.'],
  ['Facebook Page', 'Button: "Send WhatsApp message". Page = bharosa + ads ka base; organic reach kam rahegi (Mar 2025 se Friends tab) ' + tg('STUDY', 's') + '.'],
  ['Meta Business Suite', 'Inbox → Automations: instant reply, away message, FAQ, keyword reply (jaise "GBP") jo wa.me link + 2 sawaal bheje.'],
  ['WhatsApp Business', 'Greeting: "Namaste! Aapne humein kahan dekha — Instagram, Facebook ya Google?" · Away message · Quick replies (/) · Labels: New, Qualified, Proposal, Won, Lost + IG/FB/GBP/Ads · Catalogue (packages, sirf final price).'],
  ['Google Business Profile', 'Har field poora: categories, services, hours, photos/video. Hafte mein post (Call/Learn more button). Har delivered client se review link maangein, har review ka jawab. GBP chat Jul 2024 mein band ' + tg('OFFICIAL') + '; Q&A ki jagah ab Gemini answers — FAQ ki baatein description/services mein likhein.'],
])}
<h3>Step 2 — Content mix (hafte mein 3–5 feed post ${tg('STUDY', 's')} Buffer)</h3>
${T(['Funnel', 'Hissa', 'Content', 'CTA'], [['Awareness', '~50%', 'Hindi Reels — dukaandar ki ek samasya', 'Soft: "Save karein / bhejiye"'], ['Consideration', '~30%', 'Info carousel, process, asli client kaam, myth-fact', 'Soft: "Sawaal ho to WhatsApp"'], ['Conversion', '~20%', 'Service post, asli testimonial, deadline wala asli offer', 'Direct: "WhatsApp karein: 79742 17411"']])}
<p>Mix ${tg('PRACTICE', 'm')} hai, data nahi. Har post par soft WhatsApp CTA; har 4–5 mein se ek direct ask.</p>
`, true)}

${sec('04b', 'Leads — lead magnet, jawab aur tracking', `
<div class="two"><div>
<h3>Lead magnets (Founder decide kare)</h3>
${ul(['Free Google Profile check / 2-min recorded mini audit <b>(abhi confirm nahi — confirm hone tak use nahi)</b>', 'Hindi PDF: "Website ki 7 galtiyan" checklist', 'GBP post templates (har business type ke liye)', 'Story link sticker → wa.me link (app mein lagana)'])}
<h3>Jawab ka niyam</h3>
${ul(['Working hours mein <b>5–15 minute</b> mein reply ' + tg('PRACTICE', 'm') + ' (jaldi reply = zyada qualified lead — HBR 2011 study, secondary).', 'Pehle 2 sawaal: business kya hai, shehar kaunsa — phir sahi service.', 'Har lead ko label + sheet mein.'])}
</div><div>
<h3>Tracking — kaunsi post se lead aayi</h3>
${ul(['Har post/campaign ka code: <span class="code">IG-R04</span>, <span class="code">FB-C05</span>, <span class="code">GBP-P02</span>, <span class="code">BIO</span>, <span class="code">STORY</span>.', 'Pre-filled WhatsApp link: <span class="code">wa.me/917974217411?text=Namaste%20(IG-C05)</span> — bio, Story sticker, FB caption, GBP button mein.', 'Website links par UTM: <span class="code">?utm_source=instagram&utm_campaign=c05</span>.', 'Google Sheet columns: Date · Naam · Business · Shehar · Source · Post code · Service · Budget · Status · Follow-up · Value.', '<b>Har Monday review:</b> leads per post, leads per 1,000 reach, source-wise close rate → agle hafte zyada wahi banayein jo lead laaya.'])}
<h3>Optional — paid</h3>
${ul(['Jo Reel organic achhi chali, sirf use "Send WhatsApp message" button ke saath boost karein; chhota budget, 5–7 din; result ke hisaab se Ads Manager. Budget Founder tay kare.'])}
</div></div>
${box('red', 'Leads mein kya nahi', ul(['"Guaranteed #1 ranking", "100% leads", nakli testimonial ' + tg('OFFICIAL') + ' ASCI.', 'Scraper ya password maangne wale automation tools.', 'Bina permission client ka naam/screenshot (DPDP).']))}
`)}

${sec('05', 'Hafte ka content system', `
${T(['Din', 'Post', 'Kaam'], [
  ['Mon', 'Info carousel ("Kya hai?" series)', 'Saves · consideration'],
  ['Tue', 'Hindi Reel (samasya → hal)', 'Reach · awareness'],
  ['Wed', 'Tip/checklist post + GBP post', 'Saves · local'],
  ['Thu', 'Reel ya Myth vs Fact', 'Reach / shares'],
  ['Fri', 'Service ya asli client kaam (permission)', 'Conversion'],
  ['Sat/Sun', 'Story poll / behind-the-scenes; tyohaar par greeting', 'Engagement · bharosa'],
])}
<h3>"Kya hai?" info carousel series — agle topics</h3>
${ul(['Google Business Profile kya hai? (ban gaya ✓)', 'SEO kya hai — dukaan ke liye aasaan bhasha mein', 'Website kyun chahiye jab Instagram hai?', 'Instagram/Facebook Ads kya hote hain?', 'Google Ads kya hai — search vs Maps', 'WhatsApp Business ke 5 kaam ke features', 'Google review kaise maangein (bina pareshan kiye)', 'Local SEO: "near me" mein kaise aayein'])}
`)}

${sec('✓', 'Creative checklist (har post — Publishing Rulebook ki checklist ke saath)', `
<div class="two"><div>
<h3>AI na lage</h3>
${chk(['Koi neon/glow/particles/3D nahi', 'Emoji icon ki jagah flat icons', 'Nakli rating/review/customer nahi', 'Hindi proofread, matra sahi', 'Voice: instruction nahi bola, natural tone (transcribe check)', 'AI voice/realistic AI image ho to label ON', 'Jahan ho sake asli photo/screenshot/chehra'])}
<h3>Brand</h3>
${chk(['Cloud White background, brand colours', 'Mukta + Poppins only', 'Logo top-left, ek baar', 'Ek highlight, ek message', 'Platform ka sahi size'])}
</div><div>
<h3>Engaging</h3>
${chk(['Hook pehli line / pehle 2 sec mein', 'Save ya share layak value', 'Reel 15–45 sec, subtitles, safe zone', 'Carousel: cover + 1 idea/slide + CTA slide', 'Koi engagement bait nahi'])}
<h3>Leads</h3>
${chk(['Ek saaf CTA (WhatsApp 79742 17411)', 'Post code tay (IG-…/FB-…/GBP-…)', 'Pre-filled link / UTM jahan link possible', 'Offer/price Founder ne confirm kiya', 'Lead aaye to label + sheet'])}
</div></div>
`, true)}

${sec('S', 'Sources (research 3 Nov 2026)', `<div class="src">
Meta engagement bait — transparency.meta.com/features/approach-to-ranking/content-distribution-guidelines/engagement-bait/<br>
Mosseri ranking signals (Jan 2025) — socialmediatoday.com/news/instagram-shares-algorithm-insights-2025/738034/ · socialsamosa.com<br>
Instagram originality (30 Apr 2026) — techcrunch.com/2026/04/30/instagram-restricts-reach-of-content-aggregators-in-new-crackdown/ · petapixel.com<br>
Facebook original content (Jul 2025) — creators.facebook.com/blog/combating-unoriginal-content · Friends tab — techcrunch.com (27 Mar 2025)<br>
Meta AI labels in ads — about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/ · ASCI AI labelling (summary) — foxmandal.in<br>
Ipsos AI Monitor 2025 India — agencyreporter.com · Mosseri year-end 2025 — storyboard18.com<br>
Devanagari typography — alphabettes.org/devanagari-typography-101-a-guide-for-typesetting-with-latin/<br>
Format data — socialinsider.io/instagram-engagement-report-2025/ · buffer.com/resources/instagram-reach-engagement-analysis/ · metricool.com/instagram-research-study/<br>
Posting frequency — buffer.com/resources/how-often-to-post-on-instagram/<br>
Instagram WhatsApp button — help.instagram.com · Business Suite automations — napoleoncat.com · WhatsApp Business features — trengo.com<br>
Google local ranking — support.google.com/business/answer/7091 · GBP chat shutdown — developers.google.com (business-messages) · GBP Q&A change — ppc.land<br>
Lead response (HBR 2011) — scholarsarchive.byu.edu/facpub/9711 · Click-to-WhatsApp (vendor) — telecrm.in, codingclave.com<br><br>
<b>VERIFY:</b> "Comment keyword" grey area; ASCI AI guideline dates; GBP Q&A dates; GBP WhatsApp field in India; WhatsApp Business limits; Reel length/slide count = practitioner opinion; Hinglish vs Hindi performance ka koi pakka data nahi. Ye legal advice nahi hai.
</div>`)}
</body></html>`;

(async () => {
  const br = await require('./browser')();
  const p = await br.newPage();
  await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
  await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(w => document.fonts.load(w + ' 12px Poppins'))); await document.fonts.load('700 12px Mukta', 'हिंदी'); await document.fonts.ready; });
  await p.pdf({ path: OUT, format: 'A4', printBackground: true, margin: { top: '16mm', bottom: '16mm', left: '18mm', right: '18mm' }, displayHeaderFooter: true,
    headerTemplate: '<div style="width:100%;font-family:Arial;font-size:7.5px;color:#8A97A8;padding:0 18mm;display:flex;justify-content:space-between"><span>FUTURETECH · CONTENT CREATION RULEBOOK · V1.0</span><span>Authentic · On-brand · Engaging · Leads</span></div>',
    footerTemplate: '<div style="width:100%;font-family:Arial;font-size:7.5px;color:#8A97A8;padding:0 18mm;display:flex;justify-content:space-between"><span>Research 3 Nov 2026 · use with the Publishing Rulebook</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>' });
  await br.close(); console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
