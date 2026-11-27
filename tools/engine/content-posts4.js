// Batch 4: engagement-focused STATIC content (quiz, relatable, this-or-that, mistakes, checklist, story polls). No numbers/prices/guarantees.
const { A } = require('./lib');
const wa = c => `https://wa.me/917974217411?text=Namaste%20(${c})`;
const car = o => ({ kind: 'carousel', time: '14:00', ...o });
const single = o => ({ kind: 'single', time: '14:00', ...o });
const CTA = (h, ask) => ({ cta: true, h, ask, reply: 'Namaste! Bataiye, aapka business kya hai?', share: 'Business वाले दोस्त को भेजें' });
const pollBox = t => `<div style="width:780px;height:320px;border:4px dashed #B8C4D4;border-radius:44px;display:flex;align-items:center;justify-content:center;font-size:38px;font-weight:600;color:#8794A6;font-family:Poppins">[ Poll sticker: ${t} ]</div>`;
const poll = (n, date, q, opts, note) => ({ id: `poll-${n}`, kind: 'poll', date, time: '14:00', slug: `Story_Poll_${n}`, title: `STORY POLL ${n} — ${date}`, poll: opts, slide: { chip: 'POLL', h: q, sub: note || 'जवाब दें — नीचे poll में tap करें', art: pollBox(opts), plain: true } });
const SK = [['सही', 'check'], ['ग़लत', 'x']];
const q = (n, stmt) => ({ h: `सवाल ${n}: <span class="blue">सही या ग़लत?</span>`, sub: `“${stmt}”`, art: A.cards([{ icon: 'check', t: 'सही' }, { icon: 'x', t: 'ग़लत' }], false) });

const quiz = car({ id: 'quiz-sahi-galat', date: '2027-02-04', slug: 'Quiz_Sahi_Ya_Galat_5_Sawal', lead: 'C20', utm: 'c20', series: 'QUIZ',
  title: 'CAROUSEL — Quiz: sahi ya galat, 5 sawal (8 slides)', gbpH: 'क्या आप जानते हैं? <span class="mk">सही या ग़लत</span>',
  slides: [
    { aud: 'हर business owner के लिए', h: 'सही या ग़लत? <span class="mk">5 सवाल</span>', sub: 'अपना जवाब सोचिए, फिर आख़िर में मिलाइए', art: A.hub(A.hubCenter('chat'), [{ icon: 'search', l: 'Google', l2: 'पर दिखना' }, { icon: 'chat', l: 'Message का', l2: 'जवाब' }, { icon: 'shield', l: 'Reviews', l2: 'और भरोसा' }, { icon: 'target', l: 'एक post', l2: 'एक बात' }]) },
    q(1, 'Website बनवा ली, तो Google पर अपने आप ऊपर आ जाएँगे।'),
    q(2, 'Customer के message का जवाब जल्दी देना ज़रूरी है।'),
    q(3, 'नकली reviews डालने से भरोसा बढ़ता है।'),
    q(4, 'एक post में ज़्यादा से ज़्यादा बातें डालनी चाहिए।'),
    q(5, 'नाम-पता-फ़ोन हर जगह एक जैसा होना चाहिए।'),
    { h: 'जवाब <span class="blue">मिलाइए</span>', sub: 'कितने सही हुए? Comment में बताइए।', art: A.checklist([{ icon: 'x', t: '1: ग़लत', s: 'Google profile और SEO भी चाहिए' }, { icon: 'check', t: '2: सही', s: 'देर से customer आगे बढ़ जाता है' }, { icon: 'x', t: '3: ग़लत', s: 'नकली reviews policy के ख़िलाफ़ हैं' }, { icon: 'x', t: '4: ग़लत', s: 'एक post = एक बात' }, { icon: 'check', t: '5: सही', s: 'पहचान और भरोसे के लिए' }]) },
    CTA('अपने business की <span class="blue">जाँच करवाएँ?</span>', 'Namaste, mujhe apne business ki online presence ki jaanch karwani hai'),
  ],
  ig: `सही या ग़लत? 5 सवाल 🧠 (अपना score comment में बताइए!)

1️⃣ Website बनवा ली तो Google पर अपने आप ऊपर आ जाएँगे?
2️⃣ Message का जवाब जल्दी देना ज़रूरी है?
3️⃣ नकली reviews से भरोसा बढ़ता है?
4️⃣ एक post में ज़्यादा बातें डालनी चाहिए?
5️⃣ नाम-पता-फ़ोन हर जगह एक जैसा हो?

जवाब आख़िरी slides पर 👉 कितने सही हुए? Comment करें 👇

मदद चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#SmallBusinessIndia #DigitalMarketingIndia #LocalSEO #Quiz #BusinessTips`,
  fb: `सही या ग़लत? 5 सवाल 🧠 (swipe करें, अपना score comment में बताइए)

✅ Website = अपने आप Google पर ऊपर?
✅ Message का जवाब जल्दी?
✅ नकली reviews = भरोसा?
✅ एक post में ज़्यादा बातें?
✅ नाम-पता-फ़ोन एक जैसा?

अपने business की जाँच: ${wa('FB-C20')}

#SmallBusinessIndia #Quiz`,
  gbp: 'छोटे business के लिए 5 सवाल: क्या website बनवाने से Google पर अपने आप ऊपर आते हैं? क्या messages का जल्दी जवाब ज़रूरी है? क्या नकली reviews से भरोसा बढ़ता है? जवाब जानने के लिए हमारी post देखें। FutureTech Digital Marketing Agency आपके business की online presence सुधारने में मदद करती है।',
  altTopics: ['Quiz sahi ya galat 5 sawal cover', 'Sawal 1 website aur Google', 'Sawal 2 message ka jawab', 'Sawal 3 nakli reviews', 'Sawal 4 ek post me zyada baatein', 'Sawal 5 naam pata phone ek jaisa', 'Jawab milaiye', 'WhatsApp 79742 17411 par jaanch poochhein'] });

const mistakes = car({ id: 'galtiyan-6', date: '2027-02-09', slug: '6_Aam_Galtiyan_Chhote_Business_Online', lead: 'C21', utm: 'c21', series: 'COMMON MISTAKES',
  title: 'CAROUSEL — Chhote business ki 6 aam galtiyan online (8 slides)', gbpH: 'Online की <span class="mk">6 आम ग़लतियाँ</span>',
  slides: [
    { aud: 'दुकान, clinic, coaching, service business', h: 'Online की <span class="mk">6 आम ग़लतियाँ</span>', sub: 'कहीं आप भी तो नहीं कर रहे? Comment में बताइए', art: A.hub(A.hubCenter('shop'), [{ icon: 'x', l: 'अधूरी', l2: 'profile' }, { icon: 'clock', l: 'देर से', l2: 'जवाब' }, { icon: 'tag', l: 'हर बार', l2: 'नया design' }, { icon: 'target', l: 'बिना plan', l2: 'ad' }]) },
    { h: 'ग़लती 1: <span class="blue">अधूरी</span> profile', sub: 'नाम, timing, photos, contact — कुछ न कुछ छूट जाता है।', art: A.compare({ h: 'ग़लत', rows: ['Timing नहीं', 'Photos नहीं'] }, { h: 'सही', rows: ['पूरी जानकारी', 'असली photos'] }) },
    { h: 'ग़लती 2: <span class="blue">देर</span> से जवाब', sub: 'Enquiry आई, पर जवाब अगले दिन — customer आगे बढ़ गया।', art: A.phoneSide(A.chat([['in', 'Price kya hai?'], ['out', '…']]), [{ icon: 'clock', t: 'जल्दी जवाब' }]) },
    { h: 'ग़लती 3: हर बार <span class="blue">नया design</span>', sub: 'पहचान तब बनती है जब सब एक जैसा दिखे।', art: A.checklist([{ icon: 'tag', t: 'एक logo' }, { icon: 'cam', t: '2–3 तय रंग' }, { icon: 'doc', t: 'तय fonts' }]) },
    { h: 'ग़लती 4: <span class="blue">नकली</span> followers / reviews', sub: 'Platform की policy के ख़िलाफ़ और भरोसे के लिए नुक़सानदेह।', art: A.compare({ h: 'ग़लत', rows: ['नकली reviews', 'ख़रीदे followers'] }, { h: 'सही', rows: ['असली customer', 'ईमानदार review'] }) },
    { h: 'ग़लती 5: बिना plan के <span class="blue">ad</span>', sub: 'पहले audience, page और follow-up तय करें, फिर budget।', art: A.cards([{ icon: 'target', t: 'Audience' }, { icon: 'globe', t: 'Page' }, { icon: 'repeat', t: 'Follow-up' }]) },
    { h: 'ग़लती 6: नाम-पता-फ़ोन <span class="blue">अलग-अलग</span>', sub: 'हर जगह एक जैसी जानकारी रखें।', art: A.checklist([{ icon: 'pin', t: 'Google profile' }, { icon: 'globe', t: 'Website' }, { icon: 'cam', t: 'Social media' }, { icon: 'doc', t: 'Bill / card' }]) },
    CTA('कौन सी ग़लती <span class="blue">सुधारनी है?</span>', 'Namaste, mujhe apne business ki online galtiyan sudharni hain'),
  ],
  ig: `छोटे business की 6 आम ग़लतियाँ 😬 (कहीं आप भी तो नहीं? Comment करें)

1️⃣ अधूरी profile
2️⃣ Message का देर से जवाब
3️⃣ हर बार नया design
4️⃣ नकली followers / reviews
5️⃣ बिना plan के ad
6️⃣ नाम-पता-फ़ोन अलग-अलग

आपसे कौन सी हुई है? Comment में नंबर लिखिए 👇

सुधारना है? WhatsApp करें 📲 79742 17411 | Save करें

#SmallBusinessIndia #DigitalMarketingIndia #LocalSEO #BusinessTips #OnlineMarketing`,
  fb: `छोटे business की 6 आम ग़लतियाँ 😬 (swipe करें)

❌ अधूरी profile
❌ देर से जवाब
❌ हर बार नया design
❌ नकली followers / reviews
❌ बिना plan के ad
❌ नाम-पता-फ़ोन अलग-अलग

कौन सी आपसे हुई? Comment में नंबर लिखिए 👇

मदद के लिए: ${wa('FB-C21')}

#SmallBusinessIndia #BusinessTips`,
  gbp: 'छोटे business की आम ग़लतियाँ: अधूरी profile, मैसेज का देर से जवाब, हर बार नया design, नकली followers या reviews, बिना plan के ad और अलग-अलग नाम-पता-फ़ोन। FutureTech Digital Marketing Agency इन्हें सुधारने में मदद करती है।',
  altTopics: ['Online ki 6 aam galtiyan cover', 'Galti 1 adhuri profile', 'Galti 2 der se jawab', 'Galti 3 har baar naya design', 'Galti 4 nakli followers reviews', 'Galti 5 bina plan ke ad', 'Galti 6 naam pata phone alag alag', 'WhatsApp 79742 17411 par poochhein'] });

const relatable = single({ id: 'relatable-messages', date: '2027-01-25', slug: 'Roz_Ke_Messages_Dukaandar', lead: 'P23', utm: 'p23', title: 'SINGLE — Roz ke wahi sawal (relatable, comment bait)',
  slide: { chip: 'AAPKE SAATH BHI?', h: 'रोज़ वही <span class="mk">सवाल?</span>', sub: 'हर business owner को ऐसे messages आते हैं', art: A.chat([['in', 'Bhaiya price bhejo'], ['in', 'Location kahan hai?'], ['in', 'Timing kya hai?'], ['out', 'Ek hi jawab baar baar…']]), fix: ['TIP', 'जवाब एक बार Google Profile / WhatsApp quick reply में डाल दें।'] },
  ig: `रोज़ वही सवाल? 😅

“Price भेजो”, “Location कहाँ है?”, “Timing क्या है?” — हर दिन, बार-बार।

आपके पास सबसे ज़्यादा कौन सा message आता है? Comment में लिखिए 👇

आसान तरीक़ा:
✅ Timing और address Google Profile में
✅ WhatsApp Business में quick replies
✅ Products / services की list एक जगह

मदद चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#SmallBusinessIndia #DigitalMarketingIndia #WhatsAppBusiness #LocalSEO #ShopTips`,
  fb: `रोज़ वही सवाल? 😅 “Price भेजो”, “Location कहाँ है?”, “Timing क्या है?”

आपके पास सबसे ज़्यादा कौन सा message आता है? Comment में लिखिए 👇

✅ Timing, address Google Profile में
✅ WhatsApp quick replies

मदद चाहिए? ${wa('FB-P23')}

#SmallBusinessIndia #WhatsAppBusiness`,
  gbp: 'रोज़ आने वाले वही सवाल, जैसे price, location और timing, का जवाब एक बार Google Business Profile और WhatsApp Business के quick replies में डाल दें, तो समय बचता है। FutureTech Digital Marketing Agency आपके business के लिए ये सेट करने में मदद करती है।',
  alt: ['Roz ke wahi sawal: price, location aur timing. Jawab ek baar Google Profile aur WhatsApp quick replies me daalein'], altGbp: 'FutureTech graphic in Hindi: roz ke wahi sawal aur unka aasaan hal.' });

const thisThat = single({ id: 'this-or-that', date: '2027-01-30', slug: 'Pehle_Kya_Website_Ya_Instagram', lead: 'P24', utm: 'p24', title: 'SINGLE — Pehle kya: Website ya Instagram page? (A/B comment)',
  slide: { chip: 'AAPKI RAAY', h: 'पहले क्या बनाएँ? <span class="mk">A या B</span>', sub: 'आपकी राय क्या है?', art: A.cards([{ icon: 'globe', t: 'A: Website', s: 'अपना पक्का पता' }, { icon: 'cam', t: 'B: Instagram page', s: 'रोज़ का जुड़ाव' }], false), fix: ['COMMENT', 'अपना जवाब A या B लिखिए — हम बताएँगे कैसे चुनें।'] },
  ig: `नया business शुरू किया — पहले क्या बनाएँ? 🤔

A) Website — अपना पक्का पता
B) Instagram page — रोज़ का जुड़ाव

आप क्या चुनेंगे? Comment में सिर्फ़ A या B लिखिए 👇

हम अगली post में बताएँगे कि अपने business के हिसाब से कैसे चुनें।

मदद चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#SmallBusinessIndia #DigitalMarketingIndia #NewBusiness #LocalSEO #SocialMedia`,
  fb: `पहले क्या बनाएँ? 🤔

A) Website
B) Instagram page

Comment में A या B लिखिए 👇

मदद के लिए: ${wa('FB-P24')}

#SmallBusinessIndia #NewBusiness`,
  gbp: 'नया business शुरू करने पर पहले website बनाएँ या social media page? आपके business के हिसाब से जवाब अलग हो सकता है। FutureTech Digital Marketing Agency आपके लिए सही शुरुआत चुनने में मदद करती है।',
  alt: ['Pehle kya banayein: A website ya B Instagram page. Comment me A ya B likhein'], altGbp: 'FutureTech graphic in Hindi: pehle website ya Instagram page.' });

const festival = single({ id: 'festival-checklist', date: '2027-02-12', slug: 'Tyohaar_Se_Pehle_5_Taiyari', lead: 'P25', utm: 'p25', title: 'SINGLE — Tyohaar se pehle 5 taiyari (save-worthy checklist)',
  slide: { chip: 'CHECKLIST', h: 'त्योहार से पहले <span class="mk">5 तैयारी</span>', sub: 'Save कर लीजिए — हर त्योहार पर काम आएगी', art: A.checklist([{ icon: 'clock', t: 'Timing / छुट्टी update करें' }, { icon: 'pin', t: 'Google Profile में बदलाव डालें' }, { icon: 'chat', t: 'WhatsApp greeting / away message' }, { icon: 'cam', t: 'असली photos तैयार रखें' }, { icon: 'cal', t: 'Post पहले से तय करें' }]) },
  ig: `त्योहार से पहले 5 तैयारी 🎉 (save करें)

1️⃣ Timing / छुट्टी update करें
2️⃣ Google Profile में बदलाव डालें
3️⃣ WhatsApp greeting / away message लगाएँ
4️⃣ असली photos तैयार रखें
5️⃣ Post पहले से तय करें

आपकी सबसे बड़ी तैयारी कौन सी है? Comment करें 👇

मदद चाहिए? WhatsApp करें 📲 79742 17411

#SmallBusinessIndia #DigitalMarketingIndia #LocalSEO #FestiveSeason #BusinessTips`,
  fb: `त्योहार से पहले 5 तैयारी 🎉

✅ Timing / छुट्टी update
✅ Google Profile में बदलाव
✅ WhatsApp away message
✅ असली photos
✅ Post पहले से तय

मदद के लिए: ${wa('FB-P25')}

#SmallBusinessIndia #FestiveSeason`,
  gbp: 'त्योहार से पहले की तैयारी: timing और छुट्टी update करें, Google Business Profile में बदलाव डालें, WhatsApp में greeting या away message लगाएँ, असली photos तैयार रखें और posts पहले से तय करें। FutureTech Digital Marketing Agency आपकी मदद करती है।',
  alt: ['Tyohaar se pehle 5 taiyari: timing, Google Profile, WhatsApp message, photos aur post plan'], altGbp: 'FutureTech checklist in Hindi: tyohaar se pehle 5 taiyari.' });

module.exports = [relatable, poll(5, '2027-01-27', 'आपके business की <span class="mk">Google profile</span> है?', 'हाँ / नहीं / पता नहीं'), thisThat, poll(6, '2027-02-03', 'Message का जवाब <span class="mk">कितनी देर</span> में देते हैं?', 'तुरंत / कुछ घंटे में / अगले दिन'), quiz, mistakes, poll(7, '2027-02-10', 'आपका ज़्यादा काम <span class="mk">कहाँ से</span> आता है?', 'जान-पहचान / Google-Maps / Social media'), festival];
