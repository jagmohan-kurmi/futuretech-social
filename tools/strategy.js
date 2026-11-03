// FutureTech Social Media Strategy Nov-Dec 2026 -> PDF
const fs = require('fs'); const puppeteer = require('puppeteer-core');
const K = require('path').join(__dirname, '..', 'brand') + '/';
const DIR = require('path').join(__dirname, '..', 'posts') + '/';
fs.mkdirSync(DIR, { recursive: true });
const OUT = DIR + 'FutureTech_Social_Media_Strategy_Nov_Dec_2026.pdf';
const logo = 'data:image/png;base64,' + fs.readFileSync(K + 'FutureTech_Logo_Transparent.png').toString('base64');
const T = (head, rows, w) => `<table><thead><tr>${head.map((h, i) => `<th${w ? ` style="width:${w[i]}%"` : ''}>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => r._c === 'wk' ? `<tr class="wk"><td colspan="${head.length}">${r.cells[0]} &nbsp;—&nbsp; ${r.cells[1]}</td></tr>` : `<tr class="${r._c || ''}">${(r.cells || r).map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
const sec = (n, t, b, cls = '') => `<section class="${cls}"><h2><span>${String(n).padStart(2, '0')}</span>${t}</h2>${b}</section>`;
const ul = a => `<ul>${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
const F = r => ({ cells: r, _c: 'fest' });
const W = (a, b) => ({ cells: [`<b>${a}</b>`, `<b>${b}</b>`, '', '', ''], _c: 'wk' });

const cal = [
  W('Week 1 · 2–8 Nov', 'Diwali week — last-minute help + one greeting'),
  ['Mon 2', 'GBP', 'Update + Diwali special hours', 'Seekho', '“Diwali hafte ki timing update — WhatsApp par hum available hain”'],
  ['Tue 3 · 2 PM', 'IG + FB', 'Reel 30 s (Hindi voice)', 'Samasya-Samadhan', '“Diwali mein 5 din bache — Google par aapki dukaan ki timing aur offer update hai?”'],
  ['Wed 4 · 8:30 PM', 'IG + FB', 'Carousel 6 slides', 'Seekho', '“Dhanteras ki bheed mein billing slow? Ye 5 kaam aaj hi kijiye”'],
  ['Thu 5', 'GBP + Story', 'Client festive creative', 'Saboot', '“Sagar ki dukaanon ke liye humne is Diwali kya banaya” (client consent)'],
  F(['Fri 6 (Dhanteras)', 'Story + IG/FB', 'Greeting Story · 9 PM BTS Reel', 'Festive', '“Dhanteras ki shubhkamnayein — aapka hisaab bhi digital aur shubh ho”']),
  F(['Sun 8 (Diwali)', 'IG + FB + GBP', 'One branded greeting (morning)', 'Festive', '“Aapko aur aapke parivaar ko Deepawali ki hardik shubhkamnayein — FutureTech, Sagar”']),
  W('Week 2 · 9–15 Nov', 'Post-Diwali utility'),
  F(['Tue 10 / Wed 11', 'Stories', 'Govardhan · Bhai Dooj', 'Festive', 'Simple festive frame, no offer']),
  ['Thu 12 · 8:30 PM', 'IG + FB', 'Carousel', 'Seekho', '“Diwali ke customer se Google review kaise maangein — ye message copy kijiye”'],
  ['Thu 12', 'GBP', 'Update', 'Seekho', '“Free Google Business Profile check — WhatsApp par GBP likhein”'],
  ['Fri 13 · 9 PM', 'IG + FB', 'Reel — ERP demo', 'Demo', '“Diwali ke baad stock kitna bacha? Register nahi, ek click mein report”'],
  ['Sat 14 · 2 PM', 'IG + FB', 'Carousel — before/after', 'Saboot', '“Dukaan ki Google listing — pehle vs ab” (real client, with permission)'],
  F(['Sun 15', 'Stories', 'Chhath · Janjatiya Gaurav Diwas', 'Festive', 'Respectful neutral motif']),
  W('Week 3 · 16–22 Nov', 'Wedding season opens'),
  ['Mon 16', 'GBP', 'Update — service', 'Seekho', '“Website ₹4,999 se — Sagar mein banaiye”'],
  ['Tue 17 · 2 PM', 'IG + FB', 'Reel', 'Samasya-Samadhan', '“Sirf Instagram page kaafi hai? Customer Google par aapko dhundh raha hai”'],
  ['Wed 18 · 8:30 PM', 'IG + FB', 'Carousel 7 slides', 'Seekho', '“Google Business Profile ke 7 kaam jo 30 minute mein ho jaate hain”'],
  ['Thu 19', 'GBP + Story poll', 'Poll', 'Engagement', '“Aapka billing kaise hota hai? Haath se / Excel / Software”'],
  F(['Fri 20 · 9 PM (Dev Uthani)', 'IG + FB', 'Reel — wedding trade', 'Festive / Seekho', '“Shaadi ka season shuru — jeweller near me search mein aapki dukaan aati hai?”']),
  ['Sat 21 · 2 PM', 'IG + FB', 'Carousel — portfolio', 'Saboot', '“Handy Hub, Bengaluru — website + admin panel, Sagar se banaya”'],
  W('Week 4 · 23–29 Nov', 'Local pride + optional audit offer'),
  ['Mon 23', 'GBP', 'Update', 'Seekho', '“Shaadi season mein ads — kitne budget se shuru karein? Free salah”'],
  F(['Tue 24 (Guru Nanak Jayanti)', 'IG + FB + GBP', 'Greeting (morning)', 'Festive', '“Guru Nanak Dev Ji ke Prakash Parv ki lakh-lakh badhai”']),
  ['Wed 25 · 8:30 PM', 'IG + FB', 'Carousel', 'Seekho', '“Google Ads vs Meta Ads — shaadi season mein kaunsa aapke liye?”'],
  F(['Thu 26 (Sagar Gaurav Diwas)', 'IG + FB + GBP', 'Montage Reel ⭐', 'Local / Saboot', '“Sagar ke vyapari ab online — Katra se Makronia tak” (consenting clients)']),
  ['Fri 27 – Mon 30', 'IG + FB + GBP Offer', 'Carousel + GBP Offer (optional)', 'Offer', '“Free Website / GBP audit — 27–30 Nov” (real dates; only if you approve)'],
  ['Sat 28 · 2 PM', 'IG + FB', 'Reel — client demo', 'Demo', '“Krishi kendra ka Kisan Khata — mobile par udhaar ka pakka hisaab”'],
  W('Week 5 · 30 Nov – 6 Dec', 'Rabi season + year-end'),
  ['Tue 1 Dec · 2 PM', 'IG + FB', 'Reel', 'Samasya-Samadhan', '“Krishi kendra wale bhaiyon — udhaar ka hisaab diary mein ya mobile mein?”'],
  ['Wed 2 · 8:30 PM', 'IG + FB', 'Carousel', 'Seekho', '“Saal khatam hone se pehle dukaan ke 5 digital kaam”'],
  ['Thu 3', 'GBP', 'Update', 'Seekho', '“Billing / ERP software ₹14,999 se — free demo WhatsApp par”'],
  ['Fri 4 · 9 PM', 'IG + FB', 'Reel — testimonial', 'Saboot', 'Client ki 20-second baat (Hindi), written permission ke saath'],
  ['Sat 5 · 2 PM', 'IG + FB', 'Carousel — portfolio', 'Saboot', '“Signature Travels — job portal: search, status tracking, medical result”'],
  W('Week 6 · 7–13 Dec', 'Myth-busting + ads education'),
  ['Mon 7', 'GBP', 'Update', 'Seekho', '“Free Google profile check — 10 minute mein report”'],
  ['Tue 8 · 2 PM', 'IG + FB', 'Reel', 'Samasya-Samadhan', '“Sabse bada jhooth: Website banwana bahut mehenga hai”'],
  ['Wed 9 · 8:30 PM', 'IG + FB', 'Carousel', 'Seekho', '“₹500 roz ads par kharch, par call nahi? Ye 3 cheezein check kijiye”'],
  ['Fri 11 · 9 PM', 'IG + FB', 'Reel — behind the scenes', 'Demo', 'Team ek website kaise banati hai — design se live tak'],
  ['Sat 12 · 2 PM', 'IG + FB', 'Carousel', 'Seekho', '“Wedding season ka aakhri hafta — last-minute enquiries ke liye 4 tips”'],
  W('Week 7 · 14–20 Dec', 'Kharmas starts — shift to 2027 planning'),
  ['Mon 14', 'GBP', 'Update', 'Seekho', '“2027 mein apni dukaan online — website + Google listing”'],
  ['Tue 15 · 2 PM', 'IG + FB', 'Reel', 'Samasya-Samadhan', '“Naya saal, wahi purana register? 3 steps mein dukaan digital”'],
  ['Wed 16 · 8:30 PM', 'IG + FB', 'Carousel', 'Seekho', '“Billing software se kya-kya hota hai — stock, udhaar, reports”'],
  ['Fri 18 · 9 PM', 'IG + FB', 'Reel — ERP demo', 'Demo', '“Mandi bhav, Kisan Khata, catalogue — ek dukaan, ek software”'],
  ['Sat 19 · 2 PM', 'IG + FB', 'Carousel — FAQ', 'Seekho', '“Website banwane mein kitna time aur kharcha? Seedha jawab”'],
  W('Week 8 · 21–27 Dec', 'Kisan Diwas · Christmas · year recap'),
  ['Mon 21', 'GBP', 'Update', 'Seekho', '“Year-end: Google listing par 2027 ki timings aur photos update kijiye”'],
  ['Tue 22 · 2 PM', 'IG + FB', 'Reel', 'Samasya-Samadhan', '“Clinic ke bahar line hai, par Google par 3 star?”'],
  F(['Wed 23 (Kisan Diwas)', 'IG + FB + GBP', 'Carousel', 'Festive / Seekho', '“Kisan Diwas par krishi kendra ke liye 5 digital tools”']),
  F(['Fri 25 (Christmas)', 'IG + FB + GBP', 'Greeting (morning)', 'Festive', '“Merry Christmas — FutureTech, Sagar”']),
  ['Sat 26 · 2 PM', 'IG + FB', 'Reel — 2026 recap ⭐', 'Saboot', '“2026 mein humne kya banaya — websites, ERP, portals” (live projects)'],
  W('Week 9 · 28–31 Dec', 'New Year'),
  ['Mon 28', 'GBP', 'Update', 'Seekho', '“Naye saal ke liye free digital plan — WhatsApp karein”'],
  ['Tue 29 · 8:30 PM', 'IG + FB', 'Carousel', 'Seekho', '“2027 digital plan checklist — website, Google, ads, billing”'],
  F(['Thu 31', 'Story + IG/FB', 'New Year greeting', 'Festive', '“Naya saal, naye customer — Happy New Year 2027” (offer only if real)']),
];

const css = `@page{size:A4;margin:20mm 16mm 18mm}
*{box-sizing:border-box}body{margin:0;font-family:Poppins,sans-serif;font-size:9.3pt;color:#1A1A1A;line-height:1.5}
.cover{height:257mm;position:relative;page-break-after:always}
.cover img{width:64mm}.cover .eb{margin-top:40mm;color:#00AEEF;font-weight:700;letter-spacing:.3em;font-size:8.5pt}
.cover h1{font-size:30pt;line-height:1.15;color:#0060A8;margin:6px 0 10px}.cover .sub{font-size:12pt;color:#5F6B7A}
.cover .bar{width:40mm;height:4px;background:#00D4FF;margin:16mm 0 10mm}
.cover table{width:120mm}.cover td{border-bottom:1px solid #D5DDE7;padding:7px 0;font-size:10pt;background:none!important}.cover td:first-child{color:#5F6B7A;width:45%}
.cover .ft{position:absolute;bottom:0;left:0;right:0;border-top:1px solid #D5DDE7;padding-top:8px;font-size:8pt;color:#5F6B7A}
section{margin-bottom:16px}h2{font-size:14pt;color:#0060A8;border-bottom:1.5px solid #0060A8;padding-bottom:5px;margin:0 0 10px;break-after:avoid}
h2 span{color:#00AEEF;font-size:10pt;margin-right:8px}h3{font-size:10.5pt;margin:12px 0 6px;break-after:avoid}
table{width:100%;border-collapse:collapse;margin:4px 0 10px}th{background:#0060A8;color:#fff;text-align:left;font-size:8.2pt;padding:6px 7px;font-weight:600}
thead{display:table-header-group}td{padding:5px 7px;border-bottom:1px solid #D5DDE7;vertical-align:top;font-size:8.4pt}tr{break-inside:avoid}tbody tr:nth-child(even) td{background:#FAFBFD}
tr.wk td{background:#E6F6FD!important;color:#0060A8;border-top:1.5px solid #00AEEF}tr.fest td{background:#FFF7E8!important}
ul{margin:4px 0 8px;padding-left:16px}li{margin-bottom:3px}
.call{background:#E6F6FD;border-left:3px solid #00AEEF;padding:9px 12px;margin:8px 0 12px;break-inside:avoid}
.warn{background:#FFF7E8;border-left:3px solid #D9822B;padding:9px 12px;margin:8px 0 12px;break-inside:avoid}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:6px 0 12px}.k{border:1px solid #D5DDE7;border-top:3px solid #00AEEF;padding:8px 10px}.k b{display:block;font-size:15pt;color:#0060A8}.k span{font-size:8pt;color:#5F6B7A}
.note{font-size:8pt;color:#5F6B7A}.brk{break-before:page}.keep{break-inside:avoid}`;

const body = `
<div class="cover"><img src="${logo}"><div class="eb">SOCIAL MEDIA STRATEGY</div><h1>November – December 2026<br>Content &amp; Festive Plan</h1>
<p class="sub">Instagram · Facebook · Google Business Profile — via Buffer</p><div class="bar"></div>
<table><tr><td>Prepared for</td><td>FutureTech Digital Marketing Agency (internal)</td></tr><tr><td>Period</td><td>2 Nov – 31 Dec 2026 (9 weeks)</td></tr><tr><td>Posting rhythm</td><td>4 feed posts + 2 GBP posts + Stories / week</td></tr><tr><td>Prepared on</td><td>2 November 2026</td></tr></table>
<div class="ft"><b>FutureTech Digital Marketing Agency</b> · SAF Rd, Sanjeev Nagar Colony, Makroniya, Sagar, MP 470004 · +91 79742 17411 · futuretechdigitalmarketingagency.com</div></div>

${sec(1, 'Where we stand (Buffer audit)', `<div class="grid"><div class="k"><b>39</b><span>Avg Instagram reach per post, 2026</span></div><div class="k"><b>5</b><span>Avg Facebook impressions per post, 2026</span></div><div class="k"><b>263</b><span>Views — best post (Hindi ERP video, 27 Oct)</span></div><div class="k"><b>0</b><span>Posts in Aug–Sep 2026</span></div></div>
${ul(['<b>Hindi video wins:</b> the Hindi problem–solution video reached 5–10× more than English images. Instagram ranks on watch time, likes and <b>sends (shares)</b>; sends matter most for reaching new people.', '<b>Static images are the weakest format</b> (≈0.37% engagement vs 0.52–0.55% for Reels and carousels, Socialinsider 2026).', '<b>Inconsistency hurts:</b> weeks with zero posts pull growth below normal; 3–5 posts a week is the sweet spot (Buffer study of 2.1M posts).', '<b>Off-brand history:</b> old “FutureTech Classes” and gofordigitalindia posts confuse visitors, and public posts now appear on Google.'])}`)}

${sec(2, 'Goals for Nov–Dec (targets, not guarantees)', T(['Goal', 'Measure', 'Now', 'Target by 31 Dec'], [
  ['Post every week', 'Feed posts published', '2–5 / month', '<b>36</b> feed posts (4/week) + 18 GBP posts'],
  ['Reach new local people', 'Avg Instagram reach / post', '39', '<b>100+</b>'],
  ['Make Reels work', 'Avg Reel views', '~40', '<b>200+</b>'],
  ['Turn views into enquiries', 'WhatsApp chats from social + GBP', 'Not tracked', '<b>Track every chat</b>; aim 10+ / month'],
  ['Clean brand', 'Off-brand posts archived, bio fixed', 'Pending', 'Done in week 1'],
], [26, 28, 16, 30]) + '<p class="note">Targets are planning goals based on the audit baseline; results depend on content quality, competition and follow-up.</p>')}

${sec(3, 'Channel roles', T(['Channel', 'Role', 'What goes there'], [
  ['📸 Instagram', 'Main growth channel', '2 Reels + 2 carousels a week, Stories 3–5 days, Sagar location tag, up to 5 hashtags'],
  ['📘 Facebook', 'Older business owners + Meta Ads base', 'Same posts shared from Buffer; Reels perform best; 0–2 hashtags'],
  ['📍 Google Business Profile', 'Local search &amp; Maps leads (ready buyers)', '2 posts a week (Mon &amp; Thu): updates, offers with real dates, photos; special hours for holidays'],
  ['💬 WhatsApp Status', 'Free reach to existing contacts', 'Same graphic, posted manually from mobile'],
], [20, 28, 52]))}

${sec(4, 'Weekly rhythm', T(['Day', 'Time (IST)', 'Channel', 'Format', 'Pillar'], [
  ['Mon', '11:00 AM', 'GBP', 'Update / Offer + photo', 'Seekho / offer'],
  ['Tue', '2:00 PM (test A)', 'IG + FB', 'Reel 20–45 s, Hindi voice', 'Samasya-Samadhan'],
  ['Wed', '8:30 PM', 'IG + FB', 'Carousel 6–8 slides', 'Seekho (tips)'],
  ['Thu', '1:30 PM', 'Story + GBP', 'Poll / photo post', 'Engagement / local'],
  ['Fri', '9:00 PM (test B)', 'IG + FB', 'Reel — demo / testimonial', 'Saboot / Demo'],
  ['Sat', '2:00 PM', 'IG + FB', 'Carousel / before–after', 'Saboot / portfolio'],
  ['Sun', '—', 'Stories (optional)', 'Behind the scenes', 'Demo'],
], [10, 18, 18, 30, 24]) + '<div class="call"><b>Timing test:</b> Reels alternate between 2 PM and 9 PM for 4 weeks. We compare 24-hour reach and keep the winning slot from January. Shop owners are most likely on their phones after lunch and after closing time.</div>')}

${sec(5, 'Content pillars &amp; mix', T(['Pillar', 'Share', 'Examples'], [
  ['<b>Samasya-Samadhan</b> (problem → solution)', '30%', 'Bahi-khaata vs software · “Google par dukaan dikhti hai?” · clinic 3-star reviews'],
  ['<b>Seekho</b> (tips)', '25%', 'GBP setup, review template, ads myths, website vs Instagram page'],
  ['<b>Saboot</b> (proof)', '20%', 'Handy Hub, Agri-Retail ERP, Signature Travels, Urban Nivas — real work, client permission'],
  ['<b>Demo / Behind the scenes</b>', '15%', 'ERP screen recordings, website build time-lapse, team in Sagar'],
  ['<b>Local &amp; festive</b>', '10%', 'Sagar Gaurav Diwas, Dev Uthani wedding season, festival greetings'],
], [30, 10, 60]))}

${sec(6, 'Day-by-day calendar · 2 Nov – 31 Dec 2026', '<p>Orange rows are festival / observance posts; blue rows mark each week. Festival dates follow Drik Panchang; check the local panchang for a ±1 day shift.</p>' + T(['Date', 'Channel', 'Format', 'Pillar', 'Hook / copy idea (Hinglish)'], cal, [14, 12, 17, 13, 44]), 'brk')}

${sec(7, 'Festive post rules', ul([
  '<b>No generic greeting pile:</b> before every festival, post a useful “get festival-ready” tip (GBP special hours, offer post, billing setup). On the day, post <b>one</b> branded greeting with no hard sell.',
  '<b>Same frame every time:</b> logo top-left (dark-background version on navy), FutureTech blue/cyan base, festival motif ≤30% of canvas, max 3 text elements, fixed footer (website · WhatsApp).',
  '<b>Equal quality for every faith’s festival</b> — Diwali, Guru Nanak Jayanti, Christmas and Eid get the same template quality.',
  '<b>Never</b> put a logo, price or discount on a deity image. For Republic and Independence Day use abstract tricolour bands — no national flag, emblem or leader photos in commercial posts.',
  '<b>Truthful offers only:</b> real start/end dates, real slot counts, full price — no fake “sirf aaj” urgency (CCPA and ASCI rules).',
  '<b>Licensed assets:</b> Meta Sound Collection music, own photos or licensed stock; any AI image gets a human edit. Pinterest images are not free to use.',
]) + '<div class="warn"><b>Diwali 2027 is Fri 29 Oct — 10 days earlier than this year.</b> Festive prep content for 2027 must start in early September 2027.</div>', 'keep')}

${sec(8, 'Captions, hooks &amp; hashtags', `<h3>Caption structure</h3>${ul(['Line 1: hook + keyword (only the first ~125 characters show before “…more”)', '2–4 short lines: problem → solution', '1 proof or offer line, then <b>one</b> WhatsApp CTA', 'Up to <b>5 hashtags</b> on Instagram, 0–2 on Facebook'])}
<div class="call">Kya aapki dukaan Google par dikhti hai? 📍<br>Sagar mein log roz “near me” search karte hain. Profile adhoora hai to customer bagal wali dukaan chala jaata hai.<br>✅ Free Google profile check — 10 minute mein report<br>👉 WhatsApp karein: “GBP” likh ke bhejein (link bio mein)<br>#SagarMP #GoogleBusinessProfile #LocalSEO #SmallBusinessIndia #FutureTechSagar</div>
<h3>Rules</h3>${ul(['Captions in Roman Hinglish; big on-screen text in Devanagari (stands out, easy for older owners).', 'Never “Like karo / Tag karo / YES likho” — Meta lowers reach for engagement bait.', 'Every number in a hook must be real (only say “50 dukaanein check ki” if we actually did).', 'Hashtag set: 1 location + 1 service + 1 audience + 1 topic + 1 brand.'])}`, 'keep')}

${sec(9, 'Week-1 housekeeping (do once)', T(['Task', 'Who', 'Done'], [
  ['Archive (not delete) old “FutureTech Classes” Instagram posts and gofordigitalindia Facebook link posts', 'You (in app)', '☐'],
  ['Instagram Name field: “FutureTech | Website &amp; Software Sagar”', 'You', '☐'],
  ['Bio: Website • Billing/ERP Software • Google Profile • Ads | Sagar, MP + wa.me link + “Aapke vyapar ko online laayein”', 'You (FutureTech drafts)', '☐'],
  ['GBP: Diwali special hours + current photos', 'You / FutureTech via Buffer', '☐'],
  ['Collect written permission from clients to feature them (Handy Hub, ERP clients, Signature Travels…)', 'You', '☐'],
], [62, 26, 12]), 'keep')}

${sec(10, 'Workflow: mobile → Claude → Buffer', T(['Step', 'What happens'], [
  ['1. Monthly batch', 'At month-end, next month’s posts (designs + captions) are prepared in one go'],
  ['2. Your approval', 'You review the week’s posts on mobile and reply “OK” or ask for changes'],
  ['3. Hosting', 'Images go only to <b>futuretechdigitalmarketingagency.com/social/</b> — no other part of the website is touched'],
  ['4. Buffer', 'Approved posts are scheduled to Instagram, Facebook and GBP at the planned times'],
  ['5. Ad-hoc posts', 'You message from mobile (e.g. “kal client ka kaam post karo”) → preview → OK → scheduled'],
  ['6. Monthly report', 'Reach, views and saves pulled from Buffer; formats, time slots and hooks compared'],
], [22, 78]) + '<p class="note">Nothing is published or scheduled without your OK. Music for Reels may need to be added in the Instagram app (Sound Collection).</p>', 'keep')}`;

const html = `<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"><style>${css}</style></head><body>${body}</body></html>`;

(async () => {
  const b = await require('./browser')();
  const p = await b.newPage(); await p.setContent(html, { waitUntil: 'networkidle0' }); await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: OUT, format: 'A4', printBackground: true, displayHeaderFooter: true,
    headerTemplate: '<div style="width:100%;font:7pt sans-serif;color:#6B7280;padding:0 16mm;display:flex;justify-content:space-between"><span>Social Media Strategy · Nov–Dec 2026</span><span style="color:#0060A8;font-weight:600">FutureTech Digital Marketing Agency</span></div>',
    footerTemplate: '<div style="width:100%;font:7pt sans-serif;color:#6B7280;padding:0 16mm;display:flex;justify-content:space-between"><span>+91 79742 17411 · futuretechdigitalmarketingagency.com</span><span>Page <span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
    margin: { top: '20mm', bottom: '18mm', left: '16mm', right: '16mm' } });
  await b.close(); console.log('ok', OUT);
})();
