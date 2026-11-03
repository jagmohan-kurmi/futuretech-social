// FutureTech Social Media Publishing Rulebook (A4 PDF). Usage: node rulebook.js
const fs = require('fs'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const OUT = require('path').join(__dirname, '..', 'posts', 'FutureTech_Social_Media_Rulebook.pdf') + '/';
const LOGO = 'data:image/png;base64,' + fs.readFileSync(K + 'FutureTech_Logo_Transparent.png').toString('base64');

const ul = a => `<ul>${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
const T = (head, rows, cls = '') => `<table class="${cls}"><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;
const sec = (n, title, body, brk = false) => `<section class="${brk ? 'brk' : ''}"><div class="sn">${n}</div><h2>${title}</h2>${body}</section>`;
const box = (cls, title, body) => `<div class="box ${cls}"><b>${title}</b>${body}</div>`;
const chk = a => `<div class="chk">${a.map(x => `<div><span></span>${x}</div>`).join('')}</div>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mukta:wght@500;700&display=swap" rel="stylesheet"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Poppins,sans-serif;color:#041030;font-size:10.5px;line-height:1.55}
.cover{height:257mm;position:relative;page-break-after:always}
.cover .bar{position:absolute;left:-18mm;top:-14mm;bottom:-14mm;width:5mm;background:#00AEEF}
.cover img{height:70px}
.cover h1{font-size:40px;line-height:1.08;margin-top:70mm;letter-spacing:-1px}
.cover h1 span{color:#0060A8}
.cover .k{font-size:11px;font-weight:600;letter-spacing:.16em;color:#00AEEF;text-transform:uppercase;margin-top:12px}
.cover p.l{font-size:13px;color:#5F6B7A;max-width:130mm;margin-top:14px}
.cover .meta{position:absolute;left:0;bottom:0;font-size:10px;color:#5F6B7A;line-height:1.8}
.cover .pill{display:inline-block;margin:28px 8px 0 0;padding:6px 14px;border:1.5px solid #0060A8;border-radius:20px;font-size:10px;font-weight:600;color:#0060A8}
section{margin-bottom:16px}
.brk{page-break-before:always}
.sn{font-size:10px;font-weight:600;letter-spacing:.16em;color:#00AEEF}
h2{font-size:21px;margin:2px 0 8px;letter-spacing:-.3px}
h3{font-size:12.5px;margin:12px 0 5px;color:#0060A8}
p{margin:4px 0}
ul{padding-left:15px;margin:4px 0}li{margin:2px 0}
table{width:100%;border-collapse:collapse;margin:6px 0 8px;font-size:9.8px;page-break-inside:avoid}h2,h3,.sn{page-break-after:avoid;break-after:avoid}section{break-inside:avoid-page}
tr{page-break-inside:avoid}
th{background:#041030;color:#fff;text-align:left;padding:6px 8px;font-weight:600;font-size:9.5px}
td{border-bottom:1px solid #E1E7EF;padding:6px 8px;vertical-align:top}
tr:nth-child(even) td{background:#F7F9FC}
.box{border-radius:10px;padding:10px 12px;margin:8px 0;page-break-inside:avoid}.box>b:first-child{display:block;margin-bottom:3px;font-size:11px}
.red{background:#FFF1F1;border:1px solid #F5C2C2}.red>b:first-child{color:#C62828}
.grn{background:#EFFAF3;border:1px solid #BFE6CC}.grn>b:first-child{color:#15803D}
.blu{background:#EEF5FC;border:1px solid #C9DDF2}.blu>b:first-child{color:#0060A8}
.yel{background:#FFF8E6;border:1px solid #F3DDA0}.yel>b:first-child{color:#9A6B00}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.chk div{display:flex;gap:9px;align-items:flex-start;padding:5px 0;border-bottom:1px dashed #E1E7EF}.chk span{flex:0 0 12px;height:12px;border:1.6px solid #0060A8;border-radius:3px;margin-top:2px}
.tag{display:inline-block;font-size:8.5px;font-weight:700;padding:1px 6px;border-radius:8px;margin-left:4px;vertical-align:middle}
.t-off{background:#E3F0FB;color:#0060A8}.t-ver{background:#FFF0D6;color:#9A6B00}
.hi{font-family:Mukta,sans-serif;font-size:12px}
.src{font-size:8.6px;color:#5F6B7A;word-break:break-all}
</style></head><body>

<div class="cover"><div class="bar"></div><img src="${LOGO}">
<h1>Social Media<br><span>Publishing Rulebook</span></h1>
<div class="k">Instagram · Facebook · Google Business Profile</div>
<p class="l">FutureTech ki har post publish hone se pehle in rules se guzregi: platform policies, India ke kanoon (ASCI, consumer protection, emblem/flag, copyright, DPDP) aur hamare brand ke rules. Audience: poore India ke small businesses.</p>
<span class="pill">Version 1.0</span><span class="pill">Policies checked: 2 Nov 2026</span><span class="pill">Next review: Feb 2027</span>
<div class="meta">FutureTech Digital Marketing Agency · Sagar, Madhya Pradesh · serving businesses across India<br>Brand kit: Documents\\FutureTech_Brand_Kit\\Social_Media_Kit · WhatsApp 79742 17411 · futuretechdigitalmarketingagency.com</div></div>

${sec('00', 'Is rulebook ko kaise use karein', `
<p>Rulebook ke teen hisse hain: <b>(A)</b> sab platforms par lagne wale rules aur kanoon, <b>(B)</b> har platform ke apne rules + technical size, <b>(C)</b> brand aur audience rules. Aakhri page ka <b>Pre-publish checklist</b> har post par tick karna hai.</p>
${T(['Level', 'Matlab', 'Kya hota hai agar toda'], [
  ['<b style="color:#C62828">MUST NOT</b>', 'Platform ya kanoon mana karta hai', 'Post hatayi ja sakti hai, account restrict, ya legal notice'],
  ['<b style="color:#9A6B00">AVOID</b>', 'Allowed hai par reach kam hoti hai / brand ke khilaf hai', 'Post non-followers ko recommend nahi hoti'],
  ['<b style="color:#15803D">DO</b>', 'Best practice', 'Better reach, trust aur consistency'],
])}
<p><span class="tag t-off">OFFICIAL</span> = platform/kanoon ke official page se. <span class="tag t-ver">VERIFY</span> = sirf press/practitioner source se mila, ya badal raha hai. Aise points ko har quarter dobara check karein.</p>
${box('blu', 'Teen golden rules', ul(['<b>Sach aur saboot:</b> jo daava (claim) post mein hai, uska proof hamare paas file mein ho.', '<b>Apna original content:</b> apni graphic, apni voice, apna likha hua — copy, repost ya doosre ka watermark nahi.', '<b>Approval ke bina kuch publish nahi:</b> Founder ka "OK" milne ke baad hi schedule.']))}
`)}

${sec('A1', 'Sach, claims aur offers (ASCI + Consumer Protection)', `
${T(['Rule', 'Level', 'Hamare liye matlab'], [
  ['Har factual claim ka proof ho <span class="tag t-off">ASCI Ch. I</span>', '<b style="color:#C62828">MUST</b>', '"No.1 agency", "3x leads", "100+ clients", "Google partner" — sirf tab jab saboot (data, certificate) file mein ho. Warna mat likhein.'],
  ['"Free" sirf tab jab sach mein free ho', '<b style="color:#C62828">MUST</b>', 'Hidden charge, compulsory paid add-on ho to "free" nahi. "Free Google Profile Check" jaisa offer tabhi jab Founder ne confirm kiya ho.'],
  ['Misleading by omission nahi', '<b style="color:#C62828">MUST</b>', 'Price likhein to poora price (koi chhupa charge nahi). Shart (terms) post ya link par saaf ho.'],
  ['Dark patterns nahi <span class="tag t-off">CCPA 2023</span>', '<b style="color:#C62828">MUST NOT</b>', 'Nakli urgency ("sirf 2 slot bache" jab sach na ho), nakli countdown, bait-and-switch, drip pricing, "x% off" bina asli original price ke.'],
  ['Comparison factual ho <span class="tag t-off">ASCI Ch. IV</span>', '<b style="color:#C62828">MUST</b>', 'Kisi competitor ka naam lekar neecha dikhana nahi. Generic comparison ("DIY vs professional") theek.'],
  ['Testimonials asli hon', '<b style="color:#C62828">MUST</b>', 'Sirf asli client ke shabd, unki likhit permission ke saath. Edit karke matlab na badlein. Before/after asli, bina photo-editing, time period ke saath.'],
  ['Paid/collab post par label', '<b style="color:#C62828">MUST</b>', 'Agar kisi se paise/gift lekar post karein: caption ki shuruaat mein "Ad", "Sponsored" ya "Collaboration" + Meta ka Paid Partnership tool. Sirf tool kaafi nahi.'],
  ['Health / finance advice', '<b style="color:#9A6B00">AVOID</b>', 'Client ke liye bhi "guaranteed income", "miracle result" jaise daave nahi. Ye reach bhi kaat-te hain.'],
])}
`)}

${sec('A2', 'Originality, AI aur copyright', `
${T(['Rule', 'Level', 'Hamare liye matlab'], [
  ['Original content <span class="tag t-off">Meta</span>', '<b style="color:#9A6B00">AVOID copies</b>', 'Doosre ka Reel/photo repost, ya sirf border/crop/caption badal kar daalna "unoriginal" maana jaata hai — recommend nahi hota. 30 din mein 10+ repost se account ki reach girti hai. Apni graphic + apni voice = original.'],
  ['Doosre app ka watermark', '<b style="color:#9A6B00">AVOID</b>', 'CapCut/TikTok/Canva free watermark wala video upload nahi. Export bina watermark ke.'],
  ['AI label <span class="tag t-off">Meta + IT Rules 2026</span>', '<b style="color:#C62828">MUST</b>', 'Realistic AI video, AI chehra ya <b>AI voice</b> ho to post karte waqt "AI info / Add AI label" ON karein. Hamari Gemini voiceover wali Reels par label lagana hai. Flat graphics (code se bani) par zarurat nahi.'],
  ['Music license <span class="tag t-off">Meta Music Guidelines</span>', '<b style="color:#C62828">MUST</b>', 'Business account par trending Bollywood gaana risky — mute ya remove ho sakta hai, baar-baar hone par account band. Meta Sound Collection, licensed track ya apni original audio use karein.'],
  ['Images aur fonts', '<b style="color:#C62828">MUST</b>', 'Google/Pinterest se uthayi image nahi. Stock image ka license save karein. Fonts: Poppins + Mukta (free, Google Fonts).'],
  ['Celebrity / logo', '<b style="color:#C62828">MUST NOT</b>', 'Celebrity ki photo, naam, AI se banayi awaaz nahi (personality rights). Google/Meta ke logo ya "Partner" badge tabhi jab sach mein certified hon.'],
])}
`)}

${sec('A3', 'Client data, privacy aur consent (DPDP Act 2023)', `
${ul(['Client ki website/dashboard ka screenshot, logo ya naam — <b>pehle likhit (WhatsApp/email) permission</b> lein aur save karein.', 'Screenshot mein customer ke naam, phone, email, order details — <b>blur karein</b>. WhatsApp chat/review ka screenshot bhi blur karke.', 'Kisi insaan ka chehra post mein ho to uski permission. Bachchon ki photo sirf parent ki permission se.', 'Consent ka record ek folder/sheet mein rakhein (kisne, kab, kis cheez ki permission di).'])}
${box('yel', 'Kyun zaroori', '<p>DPDP Rules Nov 2025 mein notify hue; consent wale niyam lagbhag May 2027 tak poori tarah lagu honge, penalty ₹250 crore tak. Aadat abhi se banayein. <span class="tag t-ver">VERIFY dates</span></p>')}
`)}

${sec('A4', 'Tyohaar, dharm aur rashtriya pratik', `
<div class="two">
${box('red', 'MUST NOT', ul(['National flag, Ashoka emblem, Gandhi ji / PM ki photo ya naam ka commercial use (Emblems Act 1950, State Emblem Act 2005, Flag Code).', 'Flag par kuch print karna ya use offer banner banana.', 'Devi-devta ki image par logo, price, discount.', 'Dharm, jaati, gender par mazaak (ASCI Ch. III, BNS s.196/299, Meta hate policy).', 'Political ya social mudde par tippani (GBP par ban, Meta par reach kam).']))}
${box('grn', 'DO', ul(['15 Aug / 26 Jan: sirf tiranga colours aur abstract shapes (patang, lines) — asli flag/emblem nahi.', 'Tyohaar se pehle useful tip post, tyohaar ke din sirf shubhkamna (bina offer).', 'Motif chhota rakhein (canvas ka 30% se kam), brand colours base rahein.', 'Sab dharmon ke tyohaar ek jaisi izzat ke saath; regional tyohaar (Pongal, Onam, Bihu, Chhath) bhi — all-India audience.']))}
</div>
`)}

${sec('A5', 'Engagement, contests aur spam', `
${T(['Rule', 'Level', 'Hamare liye matlab'], [
  ['Engagement bait <span class="tag t-off">Meta</span>', '<b style="color:#9A6B00">AVOID</b>', '"Comment YES", "Tag 3 friends", "Share karo tabhi milega" — reach girti hai. Theek hai: "Save karein", "Apna sawaal comment mein likhein".'],
  ['Contest / giveaway <span class="tag t-off">FB Pages Terms</span>', '<b style="color:#C62828">MUST</b>', 'Entry ke liye share/tag/repost compulsory nahi kar sakte. Official rules, Meta ko liability se mukt karne wali line, aur "Meta is contest ko sponsor nahi karta" likhna zaroori. Contest se pehle Founder se poochhein.'],
  ['Clickbait', '<b style="color:#9A6B00">AVOID</b>', 'Headline jo post mein na mile ("Ye trick aapki life badal degi"). Hamare hooks sawaal/samasya wale, sach wale.'],
  ['Same post baar-baar', '<b style="color:#C62828">MUST NOT</b>', 'GBP par same content dohrana spam hai; Meta par bhi reach girti hai. Har post naya angle.'],
])}
`)}

${sec('B1', 'Instagram', `
<h3>Content rules</h3>
${ul(['Reach ke liye: original, Hindi/Hinglish, value wala content. Non-followers ko recommend <b>nahi</b> hota: engagement bait, reposts, watermark, exaggerated health/finance claims, political content <span class="tag t-off">Instagram Recommendations</span>.', 'Caption mein link clickable nahi — "Link bio mein" ya Story link sticker.', 'Text-on-image ka koi organic limit nahi (20% rule sirf purane ads ke liye tha), par hamara brand rule: kam aur bada text.'])}
<h3>Technical specs</h3>
${T(['Cheez', 'Spec', 'Note'], [
  ['Feed post', '1080 × 1350 (4:5)', 'Grid 3:4 dikhata hai — headline upar ke hisse mein. 1080 × 1440 bhi chalta hai.'],
  ['Carousel', 'App mein 20 tak; Buffer/API se 10 tak', 'Sab slides same size'],
  ['Reel / Story', '1080 × 1920 (9:16), Reel 3 min tak', 'Upar ~250px, neeche ~340px mein text nahi (buttons)'],
  ['Caption', '~2,200 characters <span class="tag t-ver">VERIFY</span>', 'Hook pehle 125 characters mein'],
  ['Hashtags', '<b>Max 5</b> <span class="tag t-ver">VERIFY rollout</span>', 'Instagram ne 30 se 5 ki limit (Dec 2025) shuru ki. Hum hamesha 3–5 use karte hain.'],
  ['Alt text', 'Supported', 'Har image par likhein (Buffer se auto jaata hai)'],
  ['AI label', 'Post settings → AI info', 'AI voice/video wali Reel par ON'],
])}
`)}

${sec('B2', 'Facebook Page', `
${ul(['Page ka naam asli ho, verification ka jhootha sanket nahi.', 'Link clickable hai — website link caption mein de sakte hain, par clickbait link ki reach girti hai.', 'Demote hota hai: engagement bait, clickbait, borderline content, doosre ka content repost <span class="tag t-off">Meta demotion list, Jul 2025</span>.', 'Jun 2025 se upload kiye videos Reels ki tarah treat hote hain.', 'Hashtags: 0–2 kaafi. Local/community touch chalta hai.'])}
${T(['Cheez', 'Spec'], [['Image', '1200 × 1200 ya 1080 × 1350'], ['Video / Reel', '9:16, 1080 × 1920'], ['Text', 'Bahut lamba allowed (~63k), par 3–6 line best'], ['Alt text', 'Supported'], ['First comment (Buffer)', 'Free plan mein nahi — sab caption mein']])}
`)}

${sec('B3', 'Google Business Profile (GBP)', `
${box('red', 'Post reject / remove hone ke kaaran', ul(['Post text mein <b>phone number</b> — "Call now" button use karein <span class="tag t-off">GBP posts policy</span>.', 'Unrelated email, phone, social handle ya doosri website ka link.', 'Off-topic, political/social commentary; doosre business ko promote karna.', 'Same content baar-baar (spam); misleading/impersonation.', 'Regulated cheezon (alcohol, dawa, finance) ke offer/CTA.']))}
${box('yel', 'Practitioners ki salaah (official nahi) <span class="tag t-ver">VERIFY</span>', ul(['Hashtag kaam nahi karte, kabhi post fail — <b>hashtag zero</b>.', 'Link shortener, ALL CAPS, bahut emoji, image par bhara text, collage/stock photo, image mein phone number — avoid.']))}
${T(['Cheez', 'Spec / rule'], [
  ['Post types', 'Update (text+photo+button), Offer (title + start/end date zaroori, "View offer" auto), Event (title + date zaroori)'],
  ['Buttons', 'Book, Order online, Buy, Learn more, Sign up, Call now (profile ka number)'],
  ['Description', '~1,500 characters; zaroori baat pehli 2 line mein <span class="tag t-ver">VERIFY</span>'],
  ['Photo', 'JPG/PNG, 10 KB–5 MB, min 250 × 250. Hum 1200 × 900 (4:3) use karte hain. Saaf, achchi roshni, heavy filter nahi.'],
  ['Video', '30 sec tak, 75 MB, 720p+. Review mein 24–48 ghante.'],
  ['Post kitne din', 'Update 6 mahine baad archive; Offer/Event end date par khatam. (Purana "7 din" rule ab nahi.)'],
  ['Profile ka naam', 'Asli naam hi: "FutureTech Digital Marketing Agency" — keyword/tagline jodna mana.'],
  ['Q&A', 'Hata diya gaya (2025). Google ka AI posts aur profile se jawab banata hai — posts factual rakhein.'],
])}
${box('blu', 'All-India audience aur GBP', '<p>GBP profile location (Sagar) se juda hai aur zyada tar paas ke search mein dikhta hai. Isliye GBP par: hamari services ke updates, tips, offers — local ho to "Sagar" likh sakte hain. Poore India wala message Instagram/Facebook par.</p>')}
`)}

${sec('C1', 'Brand rules (Brand Kit ke saath)', `
${T(['Area', 'Rule'], [
  ['Look', 'Light Cloud White (#F4F7FB) background, flat colours, asli UI elements (search bar, checklist). Dark neon glow, floating particles, 3D chrome, nakli rating stars — nahi (AI jaisa lagta hai).'],
  ['Colours', 'Navy #041030 (headline, footer), Royal Blue #0060A8 (key words), Diya Gold #FFC94D (sirf highlight), WhatsApp Green #22C55E (sirf CTA dot).'],
  ['Fonts', 'Mukta 800 (Hindi headline, max 3 line), Poppins (sub-text, footer). Teesra font nahi.'],
  ['Logo', 'Original file, top-left, 60–70px (1080 canvas), ek post par ek baar. Stretch, recolour, glow nahi.'],
  ['Footer', 'Navy bar: WhatsApp 79742 17411 + website (GBP image par number nahi).'],
  ['Templates', '01 Tip/Checklist · 02 Service · 03 Festive · 04 Client Work · 05 Myth vs Fact · 06 Story/Poll'],
  ['Voice', 'Jaankar dost: seedhi, kaam ki baat, bina bade daave. "Aap" se baat. Ek post = ek message = ek CTA.'],
])}
`)}

${sec('C2', 'Audience: poora India (2 Nov 2026 se)', `
${ul(['Ab posts <b>sirf Sagar ke liye nahi</b> — poore India ke small business owners (dukaan, clinic, coaching, service business, agri kendra) ke liye.', 'Language: Hindi graphic (Devanagari) + Roman Hinglish caption — Hindi belt hamara core. Zarurat par English version alag post.', 'Examples sab jagah ke: "aapke shehar mein", "near me" — kisi ek shehar ka naam tabhi jab local campaign ho.', 'Tags/pills: "Sagar ke dukaandaron ke liye" ki jagah "India ke small business ke liye" / "Dukaandaron ke liye".', 'Festive calendar mein regional tyohaar bhi (Pongal, Onam, Bihu, Chhath, Baisakhi, Durga Puja).', 'Brand identity: "Sagar (MP) based, serving businesses across India" — bio aur About section mein.'])}
${T(['Platform', 'Hashtag set (default)'], [
  ['Instagram (3–5)', '#SmallBusinessIndia #DigitalMarketingIndia #LocalSEO #GoogleBusinessProfile + 1 topic tag (#DiwaliBusiness etc.)'],
  ['Facebook (0–2)', '#SmallBusinessIndia + 1 topic tag'],
  ['GBP', 'Koi nahi'],
])}
`)}

${sec('C3', 'Caption formula (har platform ka alag)', `
${T(['', 'Instagram', 'Facebook', 'GBP'], [
  ['Hook', 'Pehle 125 char mein sawaal/samasya', 'Pehli line mein', 'Pehli line = poora message'],
  ['Body', '3 steps, emoji numbers', '3 short points (✅)', '2–3 saaf sentences'],
  ['CTA', 'WhatsApp 79742 17411 + "Save karein"', 'WhatsApp + website link', 'Button (Learn more / Call now); text mein number nahi'],
  ['Hashtag', '3–5', '0–2', '0'],
  ['Length', '600–1,200 char', '300–600 char', '300–700 char'],
])}
`)}

${sec('D', 'Approval aur publishing workflow', `
${T(['Step', 'Kaun', 'Kya'], [
  ['1. Brief', 'Founder (mobile)', 'Topic, platform, koi offer/price ho to confirm'],
  ['2. Banana', 'Claude', 'Har platform ki apni graphic + 3 caption, is rulebook ke hisaab se'],
  ['3. Check', 'Claude', 'Pre-publish checklist (agla page) tick'],
  ['4. Preview', 'Founder', 'Graphic + caption dekh kar "OK" ya badlav'],
  ['5. Upload', 'Claude', 'Image website ke /social folder mein (sirf /social), public link check'],
  ['6. Schedule', 'Claude', 'Buffer: IG + FB + GBP, alt text ke saath; AI voice wali Reel par AI label app mein'],
  ['7. Review', 'Claude', 'Agle din publish status + reach check, seekh agli post mein'],
])}
${box('red', 'Agar post hat jaaye / reject ho', ul(['Dobara same post mat daalein.', 'Reason (notification/email) save karein, is rulebook mein us rule ko update karein.', 'Galti samajh kar badli hui post Founder ke OK ke baad.']))}
`)}

${sec('✓', 'Pre-publish checklist (har post)', `
<div class="two"><div>
<h3>Sach aur kanoon</h3>
${chk(['Har claim/number ka proof hai (warna hataya)', 'Offer/price Founder ne confirm kiya', '"Free" sach mein free; poora price aur shart saaf', 'Koi nakli urgency/countdown nahi', 'Client ka naam/logo/screenshot — likhit permission + blur', 'Flag, emblem, neta ki photo, devta par logo — nahi', 'Dharm/jaati/politics par tippani nahi', 'Paid/collab ho to "Ad" label'])}
<h3>Originality aur copyright</h3>
${chk(['Apni graphic/voice — repost ya copy nahi', 'Kisi app ka watermark nahi', 'Music licensed / Sound Collection / original', 'AI voice/video ho to AI label ON', 'Images/fonts licensed'])}
</div><div>
<h3>Platform</h3>
${chk(['IG: 1080×1350, max 5 hashtag, alt text', 'IG/FB: engagement bait nahi', 'FB: 1200×1200, 0–2 hashtag', 'GBP: 1200×900, text mein phone/hashtag nahi', 'GBP: button sahi (Learn more / Call now)', 'Reel: text safe zone mein, 9:16'])}
<h3>Brand</h3>
${chk(['Light flat style, brand colours, 2 fonts', 'Logo original, top-left, ek baar', 'Headline max 3 line, ek message, ek CTA', 'All-India wording (shehar ka naam sirf local post mein)', 'Hindi spelling/matra check', 'WhatsApp 79742 17411 + website sahi'])}
<h3>Final</h3>
${chk(['Founder ka OK mil gaya', 'Schedule time + platforms sahi'])}
</div></div>
`, true)}

${sec('S', 'Sources (checked 2 Nov 2026)', `<div class="src">
Instagram recommendations & originality — creators.instagram.com/recommendations-and-Originality<br>
Meta content demotion — transparency.meta.com/features/approach-to-ranking/types-of-content-we-demote/<br>
Meta Community Standards — transparency.meta.com/policies/community-standards/<br>
Facebook Pages, Groups & Events Terms — facebook.com/policies_center/pages_groups_events<br>
Meta Music Guidelines — facebook.com/legal/music_guidelines<br>
GBP posts content policy — support.google.com/business/answer/7213077 · Create posts — support.google.com/business/answer/7342169<br>
GBP photos & videos — support.google.com/business/answer/6103862 · Representation guidelines — support.google.com/business/answer/3038177<br>
Maps prohibited content — support.google.com/contributionpolicy/answer/7400114<br>
ASCI Code — ascionline.in/the-asci-code · CCPA Dark Patterns Guidelines 2023<br>
DPDP Rules 2025 (PIB) — static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf<br>
India IT Amendment Rules 2026 (AI labelling) — hoganlovells.com summary · State Emblem Act — indiacode.nic.in/handle/123456789/2038<br>
Instagram hashtag cap (press) — betanews.com/2025/12/19/instagram-puts-a-limit-on-hashtag-usage/ · GBP rejected posts (practitioner) — sterlingsky.ca/rejected-google-posts/<br><br>
<b>VERIFY wale points:</b> IG 5-hashtag rollout, IG caption/alt-text/carousel limits, Apr 2026 originality update, FB video length, Meta branded-content list, GBP character limits aur practitioner rejection causes, IT Rules 2026 label details, DPDP phase dates. Ye legal advice nahi hai; kisi doubt par vakeel se salaah lein.
</div>`)}
</body></html>`;

(async () => {
  const br = await require('./browser')();
  const p = await br.newPage();
  await p.setContent(html, { waitUntil: 'load', timeout: 180000 });
  await p.evaluate(async () => { await Promise.all(['400', '500', '600', '700', '800'].map(w => document.fonts.load(w + ' 12px Poppins'))); await document.fonts.load('700 12px Mukta', 'हिंदी'); await document.fonts.ready; });
  await p.pdf({ path: OUT, format: 'A4', printBackground: true, margin: { top: '16mm', bottom: '16mm', left: '18mm', right: '18mm' }, displayHeaderFooter: true,
    headerTemplate: '<div style="width:100%;font-family:Arial;font-size:7.5px;color:#8A97A8;padding:0 18mm;display:flex;justify-content:space-between"><span>FUTURETECH · SOCIAL MEDIA PUBLISHING RULEBOOK · V1.0</span><span>Instagram · Facebook · GBP</span></div>',
    footerTemplate: '<div style="width:100%;font-family:Arial;font-size:7.5px;color:#8A97A8;padding:0 18mm;display:flex;justify-content:space-between"><span>Policies checked 2 Nov 2026 · review every quarter</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>' });
  await br.close(); console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
