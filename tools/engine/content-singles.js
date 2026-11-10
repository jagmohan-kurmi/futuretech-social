// Singles (concept / myth), greeting, story polls, Reel covers + scripts. No unverified claims; offers/prices absent.
const { A } = require('./lib');
const wa = c => `https://wa.me/917974217411?text=Namaste%20(${c})`;
const single = (o) => ({ kind: 'single', time: '14:00', ...o });
const pollBox = t => `<div style="width:780px;height:320px;border:4px dashed #B8C4D4;border-radius:44px;display:flex;align-items:center;justify-content:center;font-size:38px;font-weight:600;color:#8794A6;font-family:Poppins">[ Poll sticker: ${t} ]</div>`;
const poll = (n, date, q, opts, note) => ({ id: `poll-${n}`, kind: 'poll', date, time: '14:00', slug: `Story_Poll_${n}`, title: `STORY POLL ${n} — ${date}`, poll: opts, slide: { chip: 'POLL', h: q, sub: note || 'जवाब दें — नीचे poll में tap करें', art: pollBox(opts), plain: true } });
const reel = (n, date, slug, title, h, sub, art, lines, caption) => ({ id: `reel-${n}`, kind: 'reel', date, time: '19:00', slug, title, slide: { chip: 'REEL', h, sub, art, raw: art.startsWith('<svg') }, script: { dur: '30 sec', lines, caption } });

const kg = single({ id: 'kg', date: '2026-11-19', slug: 'Knowledge_Graph', lead: 'P08', utm: 'p08', title: 'SINGLE — Knowledge Graph kya hota hai?',
  slide: { chip: 'KYA HOTA HAI?', h: 'Knowledge Graph <span class="mk">क्या होता है?</span>', sub: 'Search में दिखने वाले information panel के पीछे की चीज़', art: A.concept('Knowledge Graph', 'Google का जानकारी का नक्शा — लोग, जगह, business और चीज़ें, और उनके आपस के रिश्ते।', 'कभी-कभी search के साथ एक <b>information panel</b> दिखता है।', 'graph'), fix: ['करें', 'हर जगह नाम-पता-फ़ोन एक जैसा रखें, Google Profile पूरा भरें।'] },
  ig: `Knowledge Graph क्या होता है? 🧠

Google का जानकारी का नक्शा: लोग, जगह, business और चीज़ें — और उनके आपस के रिश्ते।

कभी-कभी search के साथ जो information panel दिखता है, उसके पीछे ऐसी ही जानकारी होती है।

आप क्या कर सकते हैं:
✅ Google Business Profile पूरा भरें
✅ सब जगह नाम-पता-फ़ोन एक जैसा रखें
✅ Website पर साफ़ जानकारी रखें

ध्यान रहे: panel दिखेगा, इसकी कोई guarantee नहीं होती।

सवाल हो तो WhatsApp करें 📲 79742 17411 | Save करें

#DigitalMarketingIndia #LocalSEO #SmallBusinessIndia #GoogleBusinessProfile #SEOBasics`,
  fb: `Knowledge Graph क्या होता है? 🧠

Google का जानकारी का नक्शा — लोग, जगह, business और उनके रिश्ते।

✅ Google Profile पूरा भरें
✅ नाम-पता-फ़ोन हर जगह एक जैसा
✅ Website पर साफ़ जानकारी

(Information panel दिखेगा, इसकी guarantee नहीं।)

सवाल हो तो: ${wa('FB-P08')}

#LocalSEO #SmallBusinessIndia`,
  gbp: 'Knowledge Graph क्या होता है? यह Google की जानकारी का नक्शा है जिसमें लोग, जगह और business और उनके आपसी रिश्ते जुड़े होते हैं। Google Business Profile पूरा भरें और नाम, पता, फ़ोन हर जगह एक जैसा रखें। Information panel दिखने की guarantee नहीं होती।',
  alt: ['Knowledge Graph kya hota hai: Google ka jankari ka naksha'], altGbp: 'FutureTech graphic in Hindi: Knowledge Graph kya hota hai.' });

const mythBudget = single({ id: 'myth-budget', date: '2026-11-20', slug: 'Myth_Budget_Leads', lead: 'P09', utm: 'p09', title: 'SINGLE — Myth vs Fact: budget badhao = leads badhengi?',
  slide: { chip: 'MYTH VS FACT', h: '<span class="mk">Budget बढ़ाने</span> से leads बढ़ेंगी?', sub: 'Myth: “Ad का budget बढ़ाओ, leads अपने आप बढ़ जाएँगी।”', art: A.cards([{ icon: 'target', t: 'सही audience' }, { icon: 'globe', t: 'साफ़ page' }, { icon: 'repeat', t: 'Follow-up' }]), fix: ['FACT', 'पहले audience, page और follow-up ठीक करें, फिर budget सोचें।'] },
  ig: `“Ad का budget बढ़ाओ, leads बढ़ जाएँगी” — सच या myth? 🤔

Myth। अगर audience गलत है, page कमज़ोर है या follow-up नहीं है, तो budget बढ़ाने से वही leak बड़ा होता है।

पहले ये 3 चीज़ें ठीक करें:
1️⃣ सही audience
2️⃣ साफ़ page + WhatsApp button
3️⃣ जल्दी follow-up

Ads का check-up चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#DigitalMarketingIndia #SmallBusinessIndia #LeadGeneration #GoogleAds #MetaAds`,
  fb: `“Budget बढ़ाओ, leads बढ़ जाएँगी” — Myth! 🤔

पहले ये 3 चीज़ें ठीक करें:
✅ सही audience
✅ साफ़ page + WhatsApp button
✅ जल्दी follow-up

Ads का check-up: ${wa('FB-P09')}

#LeadGeneration #SmallBusinessIndia`,
  gbp: 'Ad का budget बढ़ाने से leads अपने आप नहीं बढ़तीं। पहले सही audience, साफ़ page और WhatsApp button, और जल्दी follow-up ठीक करें। FutureTech आपकी ads की इन बातों को जाँचने में मदद करता है।',
  alt: ['Myth vs Fact: budget badhane se leads nahi badhti, pehle audience, page aur follow-up theek karein'], altGbp: 'FutureTech graphic in Hindi: budget badhane se leads badhengi? Myth.' });

const nap = single({ id: 'nap', date: '2026-11-27', slug: 'NAP_Kya_Hota_Hai', lead: 'P10', utm: 'p10', title: 'SINGLE — NAP kya hota hai?',
  slide: { chip: 'KYA HOTA HAI?', h: 'NAP <span class="mk">क्या होता है?</span>', sub: 'Local SEO की छोटी पर ज़रूरी बात', art: A.concept('NAP', 'Name · Address · Phone — आपके business का नाम, पता और फ़ोन, हर जगह एक जैसा।', 'Google Profile, website, Facebook और directories में <b>spelling और number</b> एक जैसे हों।', 'pin'), fix: ['करें', 'एक बार सही format तय करें और सब जगह वही रखें।'] },
  ig: `NAP क्या होता है? 📍

Name · Address · Phone — आपके business का नाम, पता और फ़ोन।

Google Profile, website, Facebook और directories — सब जगह ये एक जैसे होने चाहिए। Spelling, short form और number अलग हों तो confusion होता है।

✅ एक बार सही format तय करें
✅ सब जगह वही copy करें

मदद चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#LocalSEO #DigitalMarketingIndia #SmallBusinessIndia #GoogleBusinessProfile #SEOBasics`,
  fb: `NAP क्या होता है? 📍

Name · Address · Phone — नाम, पता, फ़ोन हर जगह एक जैसा।

✅ Google Profile
✅ Website
✅ Facebook और directories

मदद चाहिए? ${wa('FB-P10')}

#LocalSEO #SmallBusinessIndia`,
  gbp: 'NAP यानी Name, Address, Phone। आपके business का नाम, पता और फ़ोन Google Profile, website और बाक़ी जगहों पर एक जैसा होना चाहिए, ताकि लोगों और Google को सही जानकारी मिले। FutureTech इसे ठीक करने में मदद करता है।',
  alt: ['NAP kya hota hai: Name Address Phone har jagah ek jaisa'], altGbp: 'FutureTech graphic in Hindi: NAP kya hota hai.' });

const localseo = single({ id: 'local-seo', date: '2026-12-03', slug: 'Local_SEO_Kya_Hai', lead: 'P11', utm: 'p11', title: 'SINGLE — Local SEO kya hota hai?',
  slide: { chip: 'KYA HOTA HAI?', h: 'Local SEO <span class="mk">क्या होता है?</span>', sub: 'अपने इलाके के customer तक पहुँचने का तरीका', art: A.concept('Local SEO', 'अपने शहर / इलाके के लोगों को Google और Maps पर दिखना।', 'कोई “<b>tent house near me</b>” search करे तो आपका business list में आ सके।', 'search'), fix: ['करें', 'Google Business Profile पूरा भरें और reviews का जवाब दें।'] },
  ig: `Local SEO क्या होता है? 🗺️

अपने शहर / इलाके के लोगों को Google और Maps पर दिखना।

कोई “tent house near me” या “salon near me” search करे, तो आपका business उस list में आ सके — यही Local SEO का मक़सद है।

शुरुआत:
✅ Google Business Profile पूरा भरें
✅ नाम-पता-फ़ोन हर जगह एक जैसा
✅ Reviews का शुक्रिया और जवाब

मदद चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#LocalSEO #DigitalMarketingIndia #SmallBusinessIndia #GoogleMaps #SEOBasics`,
  fb: `Local SEO क्या होता है? 🗺️

अपने इलाके के लोगों को Google और Maps पर दिखना।

✅ Google Business Profile पूरा
✅ नाम-पता-फ़ोन एक जैसा
✅ Reviews का जवाब

मदद चाहिए? ${wa('FB-P11')}

#LocalSEO #SmallBusinessIndia`,
  gbp: 'Local SEO यानी अपने शहर या इलाके के लोगों को Google और Maps पर दिखना। Google Business Profile पूरा भरें, नाम-पता-फ़ोन एक जैसा रखें और reviews का जवाब दें। FutureTech आपके business के लिए Local SEO में मदद करता है।',
  alt: ['Local SEO kya hota hai: apne shehar ke logon ko Google aur Maps par dikhna'], altGbp: 'FutureTech graphic in Hindi: Local SEO kya hota hai.' });

const mythBoost = single({ id: 'myth-boost', date: '2026-12-04', slug: 'Myth_Boost_Button', lead: 'P12', utm: 'p12', title: 'SINGLE — Myth vs Fact: Boost = ad campaign?',
  slide: { chip: 'MYTH VS FACT', h: '<span class="mk">Boost</span> button = ad campaign?', sub: 'Myth: “Boost दबा दिया, मतलब ad चल गई — सब हो गया।”', art: A.cards([{ icon: 'bolt', t: 'Boost', s: 'एक post को promote करने का आसान तरीका' }, { icon: 'target', t: 'Campaign', s: 'Goal, audience, budget और tracking पर ज़्यादा control' }], false), fix: ['FACT', 'आसान और ज़्यादा control में फ़र्क़ है — goal के हिसाब से चुनें।'] },
  ig: `“Boost दबा दिया, मतलब ad चल गई” — सच या myth? 🤔

Boost एक post को promote करने का आसान तरीका है। Campaign में goal, audience, budget और tracking पर ज़्यादा control मिलता है।

कौन सा ठीक है, यह आपके goal पर निर्भर है:
✅ बस post पहुँचानी है → Boost चल सकता है
✅ WhatsApp enquiry चाहिए → campaign सोचें

Ads का plan चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#DigitalMarketingIndia #MetaAds #SmallBusinessIndia #LeadGeneration #FacebookAds`,
  fb: `Boost बटन = ad campaign? 🤔

✅ Boost: एक post को promote करने का आसान तरीका
✅ Campaign: goal, audience, budget और tracking पर ज़्यादा control

अपने goal के हिसाब से चुनें। Plan चाहिए? ${wa('FB-P12')}

#MetaAds #SmallBusinessIndia`,
  gbp: 'Boost button और ad campaign एक जैसे नहीं हैं। Boost एक post को promote करने का आसान तरीका है, जबकि campaign में goal, audience, budget और tracking पर ज़्यादा control मिलता है। FutureTech आपके goal के हिसाब से सही तरीका चुनने में मदद करता है।',
  alt: ['Myth vs Fact: Boost button aur ad campaign mein farq'], altGbp: 'FutureTech graphic in Hindi: Boost button aur ad campaign mein farq.' });

const domain = single({ id: 'domain-hosting', date: '2026-12-10', slug: 'Domain_vs_Hosting', lead: 'P13', utm: 'p13', title: 'SINGLE — Domain vs Hosting',
  slide: { chip: 'KYA HOTA HAI?', h: 'Domain और Hosting <span class="mk">में फ़र्क़</span>', sub: 'Website लेने से पहले ये दो बातें समझ लें', art: A.cards([{ icon: 'globe', t: 'Domain', s: 'Website का नाम / पता, जैसे aapkidukaan.in' }, { icon: 'server', t: 'Hosting', s: 'वो जगह जहाँ website की files रखी रहती हैं' }], false), fix: ['याद रखें', 'Domain पता है, Hosting वो जगह जहाँ दुकान खड़ी है।'] },
  ig: `Domain और Hosting में फ़र्क़ क्या है? 🌐

Domain = आपकी website का नाम/पता (जैसे aapkidukaan.in)
Hosting = वो जगह जहाँ website की files रखी रहती हैं

आसान भाषा में: Domain दुकान का पता है, Hosting वो जगह जहाँ दुकान खड़ी है।

Website लेते समय ध्यान रखें:
✅ Domain आपके नाम पर register हो
✅ Hosting और renewal की तारीख़ याद रखें

मदद चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#DigitalMarketingIndia #SmallBusinessIndia #WebsiteTips #DomainName #Hosting`,
  fb: `Domain और Hosting में फ़र्क़ 🌐

✅ Domain = website का नाम / पता
✅ Hosting = वो जगह जहाँ website की files रखी रहती हैं

Domain आपके नाम पर register हो, और renewal की तारीख़ याद रखें।

मदद चाहिए? ${wa('FB-P13')}

#WebsiteTips #SmallBusinessIndia`,
  gbp: 'Domain और Hosting में फ़र्क़: Domain आपकी website का नाम या पता है, और Hosting वह जगह है जहाँ website की files रखी रहती हैं। Domain आपके नाम पर register हो और renewal की तारीख़ याद रखें। FutureTech website setup में मदद करता है।',
  alt: ['Domain aur Hosting mein farq: domain website ka naam, hosting files ki jagah'], altGbp: 'FutureTech graphic in Hindi: Domain aur Hosting mein farq.' });

const greet = { id: 'greet-gurunanak', kind: 'greeting', date: '2026-11-24', time: '08:00', slug: 'Guru_Nanak_Jayanti', title: 'GREETING — Guru Nanak Jayanti / Kartik Purnima (greeting only, no offer)', greet: { h: 'गुरु नानक जयंती<br>की <span class="mk">शुभकामनाएँ</span>', s: 'कार्तिक पूर्णिमा पर सबका भला हो,<br>सबको सुख और शांति मिले।' },
  ig: `गुरु नानक जयंती और कार्तिक पूर्णिमा की हार्दिक शुभकामनाएँ 🙏

सबका भला हो, सबको सुख और शांति मिले।
— FutureTech परिवार

#GuruNanakJayanti #KartikPurnima #Gurpurab`,
  fb: `गुरु नानक जयंती और कार्तिक पूर्णिमा की हार्दिक शुभकामनाएँ 🙏
सबका भला हो, सबको सुख और शांति मिले।
— FutureTech परिवार ${wa('FB-G01')}`,
  gbp: 'गुरु नानक जयंती और कार्तिक पूर्णिमा की हार्दिक शुभकामनाएँ। सबका भला हो, सबको सुख और शांति मिले। — FutureTech Digital Marketing Agency परिवार',
  alt: ['Guru Nanak Jayanti aur Kartik Purnima ki shubhkamnayein, FutureTech parivar'], altGbp: 'FutureTech greeting: Guru Nanak Jayanti.', utm: 'g01' };

const polls = [
  poll(1, '2026-11-18', 'आपके business की <span class="blue">website</span> है?', 'Haan / Nahi'),
  poll(2, '2026-11-25', 'क्या आप अपनी business के लिए <span class="blue">ads</span> चलाते हैं?', 'Haan / Nahi'),
  poll(3, '2026-12-02', 'Enquiry का जवाब कितनी <span class="blue">जल्दी</span> देते हैं?', 'Turant / Der se'),
  poll(4, '2026-12-09', 'क्या आपने अपनी दुकान <span class="blue">Google</span> पर search की है?', 'Haan / Nahi'),
];
const R = (...l) => l;
const reels = [
  reel(1, '2026-11-14', 'Reel_Website_Customer_Nahi', 'REEL 1 — Website hai par customer nahi: 3 wajah (30s)', 'Website है, पर <span class="blue">customer नहीं?</span>', '3 बड़ी वजह — 30 सेकंड में', A.hub(A.hubCenter('browser'), [{ icon: 'search', l: 'Google पर', l2: 'नहीं दिखती' }, { icon: 'wa', l: 'Enquiry का', l2: 'रास्ता नहीं' }, { icon: 'shield', l: 'भरोसे की', l2: 'जानकारी कम' }, { icon: 'bolt', l: 'Phone पर', l2: 'धीमी' }]),
    R('0-2s HOOK on screen + VO: "Website है, पर customer नहीं आ रहे?"', '2-8s Wajah 1 — scene: search bar "kirana near me", aapki site list mein nahi. VO: "Pehli wajah: Google par aap dikhte hi nahi."', '8-14s Wajah 2 — scene: phone par site, WhatsApp button nahi. VO: "Doosri: enquiry ka raasta nahi. WhatsApp ya call ka button rakhein."', '14-20s Wajah 3 — scene: khali about page -> asli address, photos, timing bharte hue. VO: "Teesri: bharosa dilane wali jaankari kam hai."', '20-26s Fix — Google Profile + saaf page + WhatsApp button (3 icons). VO: "In teeno ko theek karein."', '26-30s End card: logo + WhatsApp 79742 17411 + website. Hindi subtitles bottom-safe (top 250px / bottom 340px clear).'),
    'Website है, पर customer नहीं आ रहे? 3 बड़ी वजह देखिए 👇 WhatsApp करें 📲 79742 17411 #SmallBusinessIndia #DigitalMarketingIndia #LocalSEO'),
  reel(2, '2026-11-21', 'Reel_Website_Google_WhatsApp', 'REEL 2 — Website + Google + WhatsApp (30s, founder voice preferred)', 'Website + <span class="blue">Google</span> + WhatsApp', 'Customer तक पहुँचने का सीधा रास्ता', A.hub(A.hubCenter('phone'), [{ icon: 'globe', l: 'Website', l2: 'आपका पता' }, { icon: 'search', l: 'Google', l2: 'पर दिखें' }, { icon: 'wa', l: 'WhatsApp', l2: 'पर बात' }, { icon: 'users', l: 'Customer', l2: 'पहुँचे' }]),
    R('0-2s HOOK: "Customer तक पहुँचने के 3 कदम"', '2-9s Step 1 Website: "Website आपका पता है."', '9-16s Step 2 Google: "Google Profile से लोग आपको खोज सकते हैं."', '16-23s Step 3 WhatsApp: "WhatsApp से बात शुरू होती है."', '23-30s Recap + end card: WhatsApp 79742 17411.', 'Best: founder speaks to camera (real face, no AI label). If AI voice used: Instagram isAiGenerated true.'),
    'Customer तक पहुँचने के 3 कदम: Website, Google, WhatsApp 📲 79742 17411 #SmallBusinessIndia #DigitalMarketingIndia #LocalSEO'),
  reel(3, '2026-11-28', 'Reel_Gym_Google_Profile', 'REEL 3 — Gym ka Google Profile 5 steps (30s)', 'Gym का <span class="blue">Google Profile</span> कैसे भरें', '5 steps — 30 सेकंड में', A.hub(A.hubCenter('pin'), [{ icon: 'clock', l: 'Timing', l2: 'सही' }, { icon: 'img', l: 'असली', l2: 'photos' }, { icon: 'users', l: 'Trainers', l2: 'का परिचय' }, { icon: 'wa', l: 'WhatsApp', l2: 'button' }]),
    R('0-2s HOOK: "Gym का Google Profile 5 steps में"', '2-6s 1 Naam aur category (real business name only).', '6-10s 2 Address + Maps pin.', '10-14s 3 Timing + holiday timing.', '14-18s 4 Asli photos (equipment, space) — member photo sirf permission se.', '18-22s 5 Services + WhatsApp / website link.', '22-30s End card: WhatsApp 79742 17411. No before/after, no result claims.'),
    'Gym का Google Profile 5 steps में ✅ WhatsApp करें 📲 79742 17411 #SmallBusinessIndia #LocalSEO #GymMarketing'),
  reel(4, '2026-12-05', 'Reel_Landing_Page_ya_WhatsApp', 'REEL 4 — Landing page ya WhatsApp? (30s)', 'Landing page या <span class="blue">WhatsApp?</span>', 'Ad के बाद customer को कहाँ भेजें', A.compare({ h: 'सीधे WhatsApp', rows: ['जब customer पहले से जानता है', 'जल्दी बात शुरू'] }, { h: 'Landing page', rows: ['नया customer — पहले जानकारी', 'फिर WhatsApp button'] }),
    R('0-2s HOOK: "Ad के बाद customer को कहाँ भेजें?"', '2-12s Landing page: naya customer ko pehle saaf jaankari chahiye, phir WhatsApp button.', '12-22s Seedha WhatsApp: jo customer pehle se jaanta hai, usse seedhi baat.', '22-26s Rule of thumb: aam taur par naye logon ko page, purane logon ko WhatsApp. (judgement, not a statistic)', '26-30s End card: WhatsApp 79742 17411.'),
    'Ad के बाद customer को कहाँ भेजें? Landing page या WhatsApp 📲 79742 17411 #DigitalMarketingIndia #SmallBusinessIndia #LeadGeneration'),
];
module.exports = [kg, mythBudget, nap, localseo, mythBoost, domain, greet, ...polls, ...reels];
