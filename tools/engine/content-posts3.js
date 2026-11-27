// Batch 3: static only (2 carousels, 2 singles, 1 infographic). No numbers/prices/guarantees. Dates are PROPOSED slots.
const { A } = require('./lib');
const wa = c => `https://wa.me/917974217411?text=Namaste%20(${c})`;
const car = o => ({ kind: 'carousel', time: '14:00', ...o });
const single = o => ({ kind: 'single', time: '14:00', ...o });
const CTA = (h, ask) => ({ cta: true, h, ask, reply: 'Namaste! Bataiye, aapka business kya hai?', share: 'Business वाले दोस्त को भेजें' });

const social = car({ id: 'social-enquiry', date: '2027-01-21', slug: 'Social_Media_Se_Enquiry_Kaise_Layein', lead: 'C18', utm: 'c18', series: 'SOCIAL MEDIA',
  title: 'CAROUSEL — Instagram / Facebook se enquiry kaise layein (8 slides)', gbpH: 'Social media से <span class="mk">enquiry</span> कैसे लाएँ?',
  slides: [
    { aud: 'दुकान, clinic, coaching, service business के लिए', h: 'Social media से <span class="mk">enquiry</span> कैसे लाएँ?', sub: 'सिर्फ़ post डालना काफ़ी नहीं — 6 आसान कदम', art: A.hub(A.hubCenter('chat'), [{ icon: 'user', l: 'Profile', l2: 'पूरी भरें' }, { icon: 'cam', l: 'असली', l2: 'photos' }, { icon: 'chat', l: 'WhatsApp', l2: 'button' }, { icon: 'cal', l: 'नियमित', l2: 'posting' }]) },
    { h: 'कदम 1: <span class="blue">Profile</span> पूरी भरें', sub: 'लोग पहले आपकी profile देखते हैं, फिर बात करते हैं।', art: A.checklist([{ icon: 'user', t: 'साफ़ नाम और logo' }, { icon: 'list', t: 'Bio में: क्या करते हैं, कहाँ' }, { icon: 'call', t: 'Contact / WhatsApp button' }, { icon: 'globe', t: 'Website का link' }]) },
    { h: 'कदम 2: एक post, <span class="blue">एक बात</span>', sub: 'हर post में एक ही सन्देश और एक ही अगला कदम रखें।', art: A.cards([{ icon: 'target', t: 'एक message', s: 'भीड़ नहीं' }, { icon: 'chat', t: 'एक CTA', s: 'WhatsApp करें' }]) },
    { h: 'कदम 3: <span class="blue">असली</span> काम दिखाएँ', sub: 'आपका असली काम, असली दुकान — customer की अनुमति से।', art: A.checklist([{ icon: 'cam', t: 'दुकान / काम की असली photos' }, { icon: 'users', t: 'Customer की अनुमति से ही' }, { icon: 'shield', t: 'बढ़ा-चढ़ाकर दावे नहीं' }]) },
    { h: 'कदम 4: Message का <span class="blue">जवाब जल्दी</span>', sub: 'Enquiry आने के बाद देर होने पर customer आगे बढ़ जाता है।', art: A.phoneSide(A.chat([['in', 'Price kya hai?'], ['out', 'Namaste! Abhi details bhejta hoon.']]), [{ icon: 'clock', t: 'जल्दी जवाब' }, { icon: 'repeat', t: 'Follow-up' }]) },
    { h: 'कदम 5: हफ़्ते का <span class="blue">छोटा plan</span>', sub: 'रोज़ की भागदौड़ से अच्छा, सोचा हुआ नियमित plan।', art: A.week([['सोम', 'टिप / जानकारी'], ['बुध', 'असली काम की photo'], ['शुक्र', 'सवाल-जवाब / myth']]) },
    { h: 'कदम 6: <span class="blue">देखें</span> और सुधारें', sub: 'कौन सी post पर सबसे ज़्यादा बात हुई — वही दोहराएँ।', art: A.scorecard(['कौन सी post पर messages आए?', 'कौन से सवाल बार-बार पूछे गए?', 'अगली post में क्या सुधारें?']) },
    CTA('अपना social media <span class="blue">plan चाहिए?</span>', 'Namaste, mujhe apne business ka social media plan chahiye'),
  ],
  ig: `Social media से enquiry कैसे लाएँ? 📲 (save करें)

सिर्फ़ post डालना काफ़ी नहीं। ये 6 कदम आज़माइए:
1️⃣ Profile पूरी भरें (bio, contact, website)
2️⃣ एक post = एक बात = एक CTA
3️⃣ असली काम की असली photos
4️⃣ Message का जवाब जल्दी दें
5️⃣ हफ़्ते का छोटा, नियमित plan
6️⃣ देखें क्या चला, वही दोहराएँ

नतीजे आपकी मेहनत और plan पर निर्भर करते हैं — कोई guarantee नहीं।

अपना plan बनवाना है? WhatsApp करें 📲 79742 17411 | Save करें

#SmallBusinessIndia #DigitalMarketingIndia #SocialMediaMarketing #LocalSEO #InstagramTips`,
  fb: `Social media से enquiry कैसे लाएँ? 📲 (swipe करें)

✅ Profile पूरी भरें
✅ एक post, एक बात, एक CTA
✅ असली काम की photos
✅ Message का जवाब जल्दी
✅ नियमित छोटा plan
✅ देखें क्या चला

अपना plan बनवाने के लिए: ${wa('FB-C18')}

#SmallBusinessIndia #SocialMediaMarketing`,
  gbp: 'Social media से enquiry लाने के कदम: profile पूरी भरें, हर post में एक बात और एक CTA रखें, असली काम की photos डालें, messages का जल्दी जवाब दें और नियमित छोटा plan बनाएँ। नतीजे मेहनत और plan पर निर्भर करते हैं। Sagar (MP) की FutureTech Digital Marketing Agency आपका social media plan बनाने में मदद करती है।',
  altTopics: ['Social media se enquiry kaise layein cover', 'Kadam 1 profile poori bharein', 'Kadam 2 ek post ek baat', 'Kadam 3 asli kaam dikhayein', 'Kadam 4 message ka jawab jaldi', 'Kadam 5 hafte ka chhota plan', 'Kadam 6 dekhein aur sudharein', 'WhatsApp 79742 17411 par plan poochhein'] });

const brand = car({ id: 'brand-consistency', date: '2027-02-02', slug: 'Brand_Ek_Jaisa_Dikhe_Logo_Rang_Font', lead: 'C19', utm: 'c19', series: 'BRANDING',
  title: 'CAROUSEL — Brand ek jaisa dikhe: logo, rang, font (8 slides)', gbpH: 'Brand हर जगह <span class="mk">एक जैसा</span> दिखे',
  slides: [
    { aud: 'हर छोटे business के लिए', h: 'Brand हर जगह <span class="mk">एक जैसा</span> दिखे', sub: 'Logo, रंग और font — 6 बातें जो पहचान बनाती हैं', art: A.hub(A.hubCenter('shop'), [{ icon: 'tag', l: 'एक', l2: 'Logo' }, { icon: 'cam', l: 'तय', l2: 'रंग' }, { icon: 'doc', l: 'एक', l2: 'font' }, { icon: 'users', l: 'पहचान', l2: 'बने' }]) },
    { h: 'पहचान <span class="blue">क्यों</span> ज़रूरी है', sub: 'जो business हर जगह एक जैसा दिखता है, वह याद रहता है और भरोसेमंद लगता है।', art: A.cards([{ icon: 'search', t: 'याद रहना' }, { icon: 'shield', t: 'भरोसा' }, { icon: 'users', t: 'पहचान' }]) },
    { h: 'एक साफ़ <span class="blue">Logo</span>', sub: 'सरल, पढ़ने में साफ़, छोटे size पर भी दिखे।', art: A.checklist([{ icon: 'check', t: 'सरल और साफ़ design' }, { icon: 'phone', t: 'Phone की छोटी screen पर पढ़ा जाए' }, { icon: 'shield', t: 'हर जगह वही logo' }]) },
    { h: '2–3 <span class="blue">रंग</span> तय करें', sub: 'हर post, board और bill में वही रंग।', art: A.compare({ h: 'ऐसा न करें', rows: ['हर बार नया रंग', 'बहुत सारे रंग'] }, { h: 'ऐसा करें', rows: ['2–3 तय रंग', 'हर जगह वही'] }) },
    { h: 'एक <span class="blue">Font</span> की जोड़ी', sub: 'Heading के लिए एक, बाकी लिखावट के लिए एक — बस।', art: A.concept('Font जोड़ी', 'Heading और सामान्य लिखावट के लिए दो तय fonts।', 'हर post में वही fonts रखें।', 'doc') },
    { h: 'हर जगह <span class="blue">वही</span>', sub: 'Social media, board, visiting card, bill — सब पर एक जैसी पहचान।', art: A.checklist([{ icon: 'cam', t: 'Social media posts' }, { icon: 'shop', t: 'दुकान का board' }, { icon: 'doc', t: 'Visiting card और bill' }, { icon: 'chat', t: 'WhatsApp profile' }]) },
    { h: 'हर post से पहले <span class="blue">जाँच</span>', sub: 'जवाब “हाँ” हो तो post करें।', art: A.scorecard(['Logo सही है?', 'तय रंग ही हैं?', 'तय fonts ही हैं?', 'Contact जानकारी सही है?']) },
    CTA('अपनी पहचान <span class="blue">बनवानी है?</span>', 'Namaste, mujhe apne business ka logo aur brand kit chahiye'),
  ],
  ig: `Brand हर जगह एक जैसा क्यों दिखे? 🎨 (save करें)

जो business हर जगह एक जैसा दिखता है, वह याद रहता है।

1️⃣ एक साफ़ logo
2️⃣ 2–3 तय रंग
3️⃣ Fonts की एक जोड़ी
4️⃣ Social media, board, card, bill — सब पर वही
5️⃣ हर post से पहले एक छोटी जाँच

Logo और brand kit बनवाना है? WhatsApp करें 📲 79742 17411 | Save करें

#Branding #SmallBusinessIndia #DigitalMarketingIndia #LogoDesign #BrandIdentity`,
  fb: `Brand हर जगह एक जैसा दिखे 🎨 (swipe करें)

✅ एक साफ़ logo
✅ 2–3 तय रंग
✅ Fonts की एक जोड़ी
✅ हर जगह वही पहचान

Logo और brand kit के लिए: ${wa('FB-C19')}

#Branding #SmallBusinessIndia`,
  gbp: 'छोटे business की पहचान तब बनती है जब logo, रंग और fonts हर जगह एक जैसे हों: social media, board, visiting card और bill पर। Sagar (MP) की FutureTech Digital Marketing Agency logo और brand kit बनाने में मदद करती है।',
  altTopics: ['Brand ek jaisa dikhe cover', 'Pehchaan kyun zaruri', 'Ek saaf logo', '2-3 rang tay karein', 'Font ki jodi', 'Har jagah wahi', 'Post se pehle jaanch', 'WhatsApp 79742 17411 par poochhein'] });

const mythFollowers = single({ id: 'myth-followers', date: '2027-01-22', slug: 'Myth_Followers_Zyada_Customers', lead: 'P20', utm: 'p20', title: 'SINGLE — Myth vs Fact: followers zyada = customers zyada?',
  slide: { chip: 'MYTH VS FACT', h: '<span class="mk">Followers</span> ज़्यादा = customers ज़्यादा?', sub: 'Myth: “Followers बढ़ेंगे तो customers अपने आप आएँगे।”', art: A.cards([{ icon: 'target', t: 'सही लोग' }, { icon: 'chat', t: 'बातचीत' }, { icon: 'repeat', t: 'Follow-up' }]), fix: ['FACT', 'सही लोगों से बातचीत और enquiry ज़्यादा मायने रखती है, सिर्फ़ गिनती नहीं।'] },
  ig: `“Followers ज़्यादा होंगे तो customers अपने आप आएँगे” — सच या myth? 🤔

Myth। गिनती से ज़्यादा मायने रखता है कि आपके followers सही लोग हैं या नहीं, और क्या उनसे बात होती है।

ध्यान दें:
1️⃣ सही लोगों तक पहुँचें
2️⃣ Message और comment का जवाब दें
3️⃣ Enquiry को WhatsApp पर follow-up करें

मदद चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#SmallBusinessIndia #DigitalMarketingIndia #SocialMediaMarketing #MythVsFact #InstagramTips`,
  fb: `“Followers ज़्यादा = customers ज़्यादा” — सच या myth? 🤔

Myth। सही लोगों से बातचीत और enquiry गिनती से ज़्यादा मायने रखती है।

मदद चाहिए? ${wa('FB-P20')}

#SmallBusinessIndia #MythVsFact`,
  gbp: 'Myth: followers ज़्यादा होंगे तो customers अपने आप आएँगे। Fact: गिनती से ज़्यादा सही लोगों से बातचीत और enquiry मायने रखती है। FutureTech Digital Marketing Agency आपके business के लिए सही plan बनाने में मदद करती है।',
  alt: ['Myth vs Fact: followers zyada hone se customers apne aap nahi aate'], altGbp: 'FutureTech graphic in Hindi: followers zyada = customers zyada? Myth vs Fact.' });

const qr = single({ id: 'qr-kahan', date: '2027-02-05', slug: 'QR_Code_Dukaan_Par_Kahan_Lagayein', lead: 'P22', utm: 'p22', title: 'SINGLE — QR code dukaan par kahan lagayein?',
  slide: { chip: 'DUKAAN TIP', h: 'QR code दुकान पर <span class="mk">कहाँ लगाएँ?</span>', sub: 'जहाँ customer का ध्यान जाता है', art: A.checklist([{ icon: 'shop', t: 'Counter पर, नज़र के सामने' }, { icon: 'home', t: 'दुकान के दरवाज़े पर' }, { icon: 'doc', t: 'Bill / visiting card पर' }, { icon: 'chat', t: 'QR से सीधे WhatsApp chat' }]) },
  ig: `QR code दुकान पर कहाँ लगाएँ? 📷

जहाँ customer का ध्यान सबसे पहले जाए:
1️⃣ Counter पर, नज़र के सामने
2️⃣ दुकान के दरवाज़े पर
3️⃣ Bill और visiting card पर
4️⃣ QR ऐसा हो जो सीधे WhatsApp chat खोले

पहले अपने phone से scan करके जाँच लें कि सही खुल रहा है।

मदद चाहिए? WhatsApp करें 📲 79742 17411 | Save करें

#SmallBusinessIndia #DigitalMarketingIndia #LocalSEO #WhatsAppBusiness #ShopTips`,
  fb: `QR code दुकान पर कहाँ लगाएँ? 📷

✅ Counter पर
✅ दरवाज़े पर
✅ Bill / visiting card पर
✅ QR से सीधे WhatsApp chat

मदद चाहिए? ${wa('FB-P22')}

#SmallBusinessIndia #WhatsAppBusiness`,
  gbp: 'दुकान पर QR code ऐसी जगह लगाएँ जहाँ customer का ध्यान जाए: counter, दरवाज़ा, bill और visiting card। QR से सीधे WhatsApp chat खुले और पहले खुद scan करके जाँच लें। FutureTech Digital Marketing Agency आपके business के लिए ऐसे आसान तरीक़े बनाने में मदद करती है।',
  alt: ['Dukaan par QR code kahan lagayein: counter, darwaza, bill aur visiting card'], altGbp: 'FutureTech graphic in Hindi: QR code dukaan par kahan lagayein.' });

const infoPages = single({ chipGbp: '', id: 'info-website-pages', date: '2027-01-28', slug: 'Infographic_Website_Ke_5_Zaruri_Pages', lead: 'P21', utm: 'p21', title: 'INFOGRAPHIC — Website ke 5 zaruri pages (zigzag)',
  slide: { chip: 'INFOGRAPHIC', h: 'Website के <span class="mk">5 ज़रूरी pages</span>', sub: 'छोटे business की website में ये होने ही चाहिए', art: A.zigzag([{ icon: 'home', t: 'Home', s: 'क्या करते हैं, कहाँ' }, { icon: 'list', t: 'Services', s: 'आप क्या देते हैं' }, { icon: 'users', t: 'About', s: 'आपके बारे में' }, { icon: 'call', t: 'Contact', s: 'फ़ोन, WhatsApp, पता' }, { icon: 'chat', t: 'सवाल-जवाब', s: 'आम सवालों के जवाब' }]) },
  ig: `Website के 5 ज़रूरी pages 🌐 (save करें)

1️⃣ Home — क्या करते हैं, कहाँ
2️⃣ Services — आप क्या देते हैं
3️⃣ About — आपके बारे में
4️⃣ Contact — फ़ोन, WhatsApp, पता
5️⃣ सवाल-जवाब — आम सवालों के जवाब

छोटे business की website में ये पाँच ज़रूर हों।

अपनी website बनवानी है? WhatsApp करें 📲 79742 17411

#SmallBusinessIndia #DigitalMarketingIndia #WebsiteDesign #LocalSEO #WebsiteTips`,
  fb: `Website के 5 ज़रूरी pages 🌐

✅ Home
✅ Services
✅ About
✅ Contact
✅ सवाल-जवाब

अपनी website के लिए: ${wa('FB-P21')}

#SmallBusinessIndia #WebsiteDesign`,
  gbp: 'छोटे business की website में पाँच pages ज़रूर होने चाहिए: Home, Services, About, Contact और सवाल-जवाब। FutureTech Digital Marketing Agency आपके business के लिए website बनाने में मदद करती है।',
  alt: ['Website ke 5 zaruri pages: Home, Services, About, Contact aur sawal-jawab'], altGbp: 'FutureTech infographic in Hindi: website ke 5 zaruri pages.' });

module.exports = [social, mythFollowers, infoPages, brand, qr];
