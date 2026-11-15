// 8 informational carousels (cover + 6 content + CTA). Facts kept generic/stable; no prices, numbers, guarantees. Dates are PROPOSED slots (Tue/Thu).
const { A } = require('./lib');
const wa = c => `https://wa.me/917974217411?text=Namaste%20(${c})`;
const mk = (o) => ({ kind: 'carousel', time: '14:00', ...o });
const alts = (a) => a;

const gbpGuide = mk({ id: 'gbp-howto', date: '2026-12-22', slug: 'Google_Business_Profile_Kaise_Banayein', lead: 'C10', utm: 'c10', series: 'GBP GUIDE',
  title: 'CAROUSEL — Google Business Profile kaise banayein (step by step, 8 slides)', gbpH: 'Google Business Profile <span class="mk">कैसे बनाएँ?</span>',
  slides: [
    { aud: 'हर local business के लिए', h: 'Google Business Profile <span class="mk">कैसे बनाएँ?</span>', sub: 'Step by step — दुकान, clinic, gym, coaching सब के लिए', art: A.hub(A.hubCenter('pin'), [{ icon: 'pin', l: 'Profile', l2: 'बनाएँ' }, { icon: 'clock', l: 'Timing', l2: 'डालें' }, { icon: 'img', l: 'असली', l2: 'photos' }, { icon: 'shield', l: 'Verify', l2: 'करें' }]), raw: true, fix: ['5 step', 'एक-एक करके'] },
    { h: 'Step 1: Profile <span class="blue">खोजें</span> या बनाएँ', sub: 'पहले देखिए कि आपके business की profile पहले से तो नहीं है।', art: A.cards([{ icon: 'search', t: 'नाम search करें', s: 'Google / Maps पर' }, { icon: 'pin', t: 'Profile मिली?', s: 'पहले से बनी हो सकती है' }, { icon: 'check', t: 'Claim या नई', s: 'जो सही हो' }]) },
    { h: 'Step 2: सही <span class="blue">नाम और category</span>', sub: 'नाम सिर्फ़ असली business का — keywords या tagline नहीं।', art: A.checklist([{ icon: 'shield', t: 'असली business का नाम' }, { icon: 'list', t: 'सबसे सही मुख्य category' }, { icon: 'pin', t: 'सही address / service area' }]) },
    { h: 'Step 3: <span class="blue">Contact</span> और timing', sub: 'लोग यहीं से call करते हैं और रास्ता देखते हैं।', art: A.phoneSide(A.kp('Aapka Business', 'Business · Open', [['pin', 'Main Road, आपका शहर'], ['clock', 'सुबह 9 – रात 9']]), [{ icon: 'call', t: 'सही phone' }, { icon: 'globe', t: 'Website link' }, { icon: 'clock', t: 'Timing + छुट्टी' }]) },
    { h: 'Step 4: <span class="blue">Verify</span> करें', sub: 'Google जो तरीक़ा बताए, उसी से पुष्टि करें। तरीक़े अलग-अलग हो सकते हैं।', art: A.cards([{ icon: 'mail', t: 'Postcard / email', s: 'जो विकल्प मिले' }, { icon: 'call', t: 'Phone', s: 'जहाँ उपलब्ध हो' }, { icon: 'video', t: 'Video', s: 'जहाँ माँगा जाए' }], false) },
    { h: 'Step 5: असली <span class="blue">photos</span> और जानकारी', sub: 'पूरी profile ज़्यादा भरोसा बनाती है।', art: A.checklist([{ icon: 'img', t: 'दुकान / clinic की असली photos' }, { icon: 'list', t: 'Services / products की list' }, { icon: 'doc', t: 'छोटा description (2–3 लाइन)' }]) },
    { h: 'हर <span class="blue">हफ़्ते</span> क्या करें', sub: 'हर एक पर ✓ लगाइए।', art: A.scorecard(['Timing / छुट्टी अपडेट है?', 'नई असली photos डालीं?', 'Reviews का जवाब दिया?', 'कोई update / post डाली?', 'नाम-पता-फ़ोन सही है?']) },
    { cta: true, h: 'Profile सेट <span class="blue">करवाना है?</span>', ask: 'Namaste, mujhe apne business ka Google Profile set karwana hai', reply: 'Namaste! Bataiye, aapka business kya hai?', share: 'Business वाले दोस्त को भेजें' },
  ],
  ig: `Google Business Profile कैसे बनाएँ? 📍 (save करें)

Step by step:
1️⃣ Profile खोजें या बनाएँ
2️⃣ सही नाम और category
3️⃣ Contact और timing
4️⃣ Verify करें (Google जो तरीक़ा बताए)
5️⃣ असली photos और जानकारी

फिर हर हफ़्ते timing, photos और reviews देखते रहें।

Profile सेट करवाना है? WhatsApp करें 📲 79742 17411 | Save करें

#GoogleBusinessProfile #LocalSEO #DigitalMarketingIndia #SmallBusinessIndia #GoogleMaps`,
  fb: `Google Business Profile कैसे बनाएँ? 📍 (swipe करें)

✅ Profile खोजें / बनाएँ
✅ सही नाम और category
✅ Contact और timing
✅ Verify करें
✅ असली photos

Profile सेट करवाने के लिए: ${wa('FB-C10')}

#GoogleBusinessProfile #LocalSEO`,
  gbp: 'Google Business Profile बनाने के स्टेप: profile खोजें या बनाएँ, सही नाम और category चुनें, contact और timing डालें, Google के बताए तरीक़े से verify करें, और असली photos व जानकारी जोड़ें। Sagar (MP) की FutureTech Digital Marketing Agency profile सेट करने में मदद करती है।',
  altTopics: ['Google Business Profile kaise banayein cover', 'Step 1 profile khojein ya banayein', 'Step 2 sahi naam aur category', 'Step 3 contact aur timing', 'Step 4 verify karein', 'Step 5 asli photos aur jankari', 'Har hafte kya karein', 'WhatsApp 79742 17411'], altGbp: 'FutureTech graphic in Hindi: Google Business Profile kaise banayein.' });

const reviews = mk({ id: 'reviews-howto', date: '2026-12-29', slug: 'Reviews_Kaise_Badhayein_Aur_Jawab_Dein', lead: 'C11', utm: 'c11', series: 'REVIEWS',
  title: 'CAROUSEL — Reviews kaise badhayein aur jawab dein (8 slides)', gbpH: 'Reviews कैसे <span class="mk">बढ़ाएँ</span> और जवाब दें?',
  slides: [
    { aud: 'हर business के लिए', h: 'Reviews कैसे <span class="mk">बढ़ाएँ</span> और जवाब दें?', sub: 'ईमानदार तरीक़े से — बिना नकली reviews के', art: A.hub(A.hubCenter('chat'), [{ icon: 'chat', l: 'Review', l2: 'माँगें' }, { icon: 'wa', l: 'WhatsApp पर', l2: 'link भेजें' }, { icon: 'heart', l: 'शुक्रिया', l2: 'जवाब' }, { icon: 'shield', l: 'नकली', l2: 'नहीं' }]), raw: true },
    { h: 'Reviews क्यों <span class="blue">मायने</span> रखते हैं', sub: 'नया customer फ़ैसला लेने से पहले दूसरों का अनुभव देखता है।', art: A.cards([{ icon: 'search', t: 'Google पर देखा' }, { icon: 'chat', t: 'Reviews पढ़े' }, { icon: 'call', t: 'फिर संपर्क' }]) },
    { h: 'Review <span class="blue">कब</span> माँगें', sub: 'सही समय पर विनम्र अनुरोध सबसे अच्छा रहता है।', art: A.checklist([{ icon: 'check', t: 'काम पूरा होने के बाद' }, { icon: 'heart', t: 'जो customer ख़ुश दिखे' }, { icon: 'clock', t: 'उसी दिन या अगले दिन' }]) },
    { h: 'कैसे माँगें: <span class="blue">WhatsApp</span> पर', sub: 'Profile से review का link लेकर भेजें।', art: A.phoneSide(A.chat([['out', 'Dhanyavaad! Aapko seva kaisi lagi?'], ['in', 'Bahut achhi'], ['out', 'Khushi hui. Google par ek review likh dein, link: ...']]), [{ icon: 'link', t: 'Review link' }, { icon: 'wa', t: 'सीधा message' }, { icon: 'heart', t: 'विनम्रता से' }]) },
    { h: 'क्या <span class="blue">न करें</span>', sub: 'Google की policy नकली reviews और इनाम देकर reviews माँगने की इजाज़त नहीं देती।', art: A.compare({ h: 'ये नहीं', rows: ['नकली reviews लिखवाना', 'Inaam / discount देकर review माँगना', 'Review पर बहस करना'] }, { h: 'ये करें', rows: ['असली customer से माँगें', 'बिना लालच, विनम्र अनुरोध', 'शांत और विनम्र जवाब'] }) },
    { h: 'जवाब <span class="blue">कैसे</span> दें', sub: 'हर review का जवाब — नाम लेकर, छोटा और असली।', art: A.cards([{ icon: 'heart', t: 'अच्छा review', s: 'नाम से शुक्रिया' }, { icon: 'chat', t: 'शिकायत', s: 'शांत, माफ़ी, हल' }, { icon: 'bolt', t: 'जल्दी', s: 'हो सके तो जल्दी जवाब' }], false) },
    { h: 'हफ़्ते की <span class="blue">आदत</span>', sub: '', art: A.timeline([{ h: 'हर हफ़्ते', items: ['नए reviews देखें', 'सबका जवाब दें'] }, { h: 'हर महीने', items: ['reviews से सीखें', 'सेवा में सुधार'] }, { h: 'ज़रूरत पर', items: ['नाराज़ customer को फ़ोन करें'] }]) },
    { cta: true, h: 'Reviews और profile <span class="blue">सुधारना है?</span>', ask: 'Namaste, mujhe apne Google reviews aur profile ke baare mein poochna hai', reply: 'Namaste! Bataiye, aapka business kya hai?', share: 'Business वाले दोस्त को भेजें' },
  ],
  ig: `Reviews कैसे बढ़ाएँ और जवाब कैसे दें? ⭐ (save करें)

ईमानदार तरीक़े से:
1️⃣ काम पूरा होने के बाद, ख़ुश customer से माँगें
2️⃣ Profile से review का link WhatsApp पर भेजें
3️⃣ हर review का नाम लेकर, शांत जवाब दें
4️⃣ शिकायत पर माफ़ी और हल

क्या न करें: नकली reviews, इनाम देकर reviews माँगना, review पर बहस। Google की policy इनकी इजाज़त नहीं देती।

Profile और reviews पर मदद? WhatsApp करें 📲 79742 17411

#GoogleReviews #LocalSEO #SmallBusinessIndia #DigitalMarketingIndia #CustomerReviews`,
  fb: `Reviews कैसे बढ़ाएँ और जवाब दें? (swipe करें)

✅ ख़ुश customer से, काम के बाद माँगें
✅ WhatsApp पर review link भेजें
✅ हर review का विनम्र जवाब
❌ नकली reviews / इनाम देकर माँगना नहीं

मदद के लिए: ${wa('FB-C11')}

#GoogleReviews #LocalSEO`,
  gbp: 'Reviews बढ़ाने के ईमानदार तरीक़े: काम पूरा होने के बाद ख़ुश customer से विनम्रता से माँगें, profile का review link WhatsApp पर भेजें, और हर review का शांत जवाब दें। नकली reviews या इनाम देकर reviews माँगना न करें। Sagar (MP) की FutureTech Digital Marketing Agency मदद करती है।',
  altTopics: ['Reviews kaise badhayein cover', 'Reviews kyun mayne rakhte hain', 'Review kab maangein', 'WhatsApp par review kaise maangein', 'Kya na karein', 'Jawab kaise dein', 'Hafte ki aadat', 'WhatsApp 79742 17411'], altGbp: 'FutureTech graphic in Hindi: reviews kaise badhayein aur jawab dein.' });

const wabiz = mk({ id: 'whatsapp-business', date: '2026-12-24', slug: 'WhatsApp_Business_Ke_6_Features', lead: 'C12', utm: 'c12', series: 'WHATSAPP BUSINESS',
  title: 'CAROUSEL — WhatsApp Business ke 6 features (8 slides)', gbpH: 'WhatsApp Business के <span class="mk">6 features</span>',
  slides: [
    { aud: 'दुकानदारों और service business के लिए', h: 'WhatsApp Business के <span class="mk">6 features</span>', sub: 'जो आपका समय बचा सकते हैं', art: A.hub(A.hubCenter('phone'), [{ icon: 'store', l: 'Business', l2: 'profile' }, { icon: 'list', l: 'Catalogue', l2: 'products' }, { icon: 'bolt', l: 'Quick', l2: 'replies' }, { icon: 'tag', l: 'Labels', l2: 'चैट के' }]), raw: true },
    { h: 'Business <span class="blue">profile</span>', sub: 'नाम, पता, timing और website — एक जगह।', art: A.phoneSide(A.kp('Aapki Dukaan', 'Business account', [['pin', 'Main Road, आपका शहर'], ['clock', 'सुबह 9 – रात 9']]), [{ icon: 'pin', t: 'पता' }, { icon: 'clock', t: 'Timing' }, { icon: 'globe', t: 'Website' }]) },
    { h: '<span class="blue">Catalogue</span> में products', sub: 'Customer को बार-बार photo भेजने की ज़रूरत नहीं।', art: A.checklist([{ icon: 'img', t: 'Product की photo' }, { icon: 'tag', t: 'नाम और जानकारी' }, { icon: 'link', t: 'Catalogue का link भेजें' }]) },
    { h: '<span class="blue">Quick replies</span>', sub: 'बार-बार पूछे जाने वाले सवालों के तैयार जवाब।', art: A.phoneSide(A.chat([['in', 'Timing kya hai?'], ['out', 'Namaste! Hum subah 9 se raat 9 tak khule hain.']]), [{ icon: 'bolt', t: 'Shortcut से जवाब' }, { icon: 'clock', t: 'समय की बचत' }, { icon: 'check', t: 'हर बार एक जैसा' }]) },
    { h: '<span class="blue">Labels</span> से चैट सँभालें', sub: 'कौन नया है, किसका order बाकी है, किसका payment हो गया।', art: A.cards([{ icon: 'users', t: 'नया customer' }, { icon: 'repeat', t: 'Order बाकी' }, { icon: 'check', t: 'Done / Paid' }]) },
    { h: 'Greeting और <span class="blue">Away</span> message', sub: 'दुकान बंद हो तब भी customer को जवाब मिले।', art: A.cards([{ icon: 'chat', t: 'Greeting', s: 'पहली बार message पर' }, { icon: 'clock', t: 'Away message', s: 'बंद होने के समय' }], false) },
    { h: 'Link और <span class="blue">QR</span>', sub: '', art: A.concept('Link / QR', 'आपके नंबर का wa.me link या QR — customer एक tap में chat खोले।', 'इसे website, Google Profile और post में लगाएँ।', 'link'), fix: ['ध्यान', 'Messages सिर्फ़ उन्हें जिन्होंने अनुमति दी हो'] },
    { cta: true, h: 'WhatsApp को <span class="blue">सेट</span> करवाना है?', ask: 'Namaste, mujhe apne business ke liye WhatsApp Business set karwana hai', reply: 'Namaste! Bataiye, aapka business kya hai?', share: 'दुकानदार दोस्त को भेजें' },
  ],
  ig: `WhatsApp Business के 6 features जो कम लोग use करते हैं 💬 (save करें)

1️⃣ Business profile — नाम, पता, timing, website
2️⃣ Catalogue — products एक जगह
3️⃣ Quick replies — बार-बार वाले सवालों के जवाब
4️⃣ Labels — चैट सँभालना
5️⃣ Greeting और Away message
6️⃣ Link और QR — एक tap में chat

ध्यान: messages सिर्फ़ उन्हें भेजें जिन्होंने अनुमति दी हो।

WhatsApp सेट करवाना है? WhatsApp करें 📲 79742 17411

#WhatsAppBusiness #SmallBusinessIndia #DigitalMarketingIndia #Dukaan #BusinessTips`,
  fb: `WhatsApp Business के 6 features 💬 (swipe करें)

✅ Business profile
✅ Catalogue
✅ Quick replies
✅ Labels
✅ Greeting / Away message
✅ Link और QR

(Messages सिर्फ़ अनुमति वालों को।) सेट करवाने के लिए: ${wa('FB-C12')}

#WhatsAppBusiness #SmallBusinessIndia`,
  gbp: 'WhatsApp Business के 6 उपयोगी features: business profile, catalogue, quick replies, labels, greeting और away message, और link या QR। Messages सिर्फ़ उन्हें भेजें जिन्होंने अनुमति दी हो। Sagar (MP) की FutureTech Digital Marketing Agency WhatsApp सेट करने में मदद करती है।',
  altTopics: ['WhatsApp Business ke 6 features cover', 'Business profile', 'Catalogue mein products', 'Quick replies', 'Labels se chat sambhalein', 'Greeting aur away message', 'Link aur QR', 'WhatsApp 79742 17411'], altGbp: 'FutureTech graphic in Hindi: WhatsApp Business ke 6 features.' });

const webcheck = mk({ id: 'website-5min-check', date: '2027-01-05', slug: 'Website_5_Minute_Check', lead: 'C13', utm: 'c13', series: 'WEBSITE CHECK',
  title: 'CAROUSEL — Website ka 5 minute check (8 slides)', gbpH: 'अपनी website का <span class="mk">5 मिनट</span> का check',
  slides: [
    { aud: 'जिनकी website है उनके लिए', h: 'अपनी website का <span class="mk">5 मिनट</span> का check', sub: 'Phone उठाइए और ये 6 बातें देखिए', art: A.hub(A.hubCenter('browser'), [{ icon: 'search', l: 'Google पर', l2: 'नाम' }, { icon: 'phone', l: 'Phone पर', l2: 'खोलें' }, { icon: 'eye', l: '5 सेकंड', l2: 'test' }, { icon: 'lock', l: 'https', l2: 'ताला' }]), raw: true, fix: ['6 test', 'हर एक पर ✓ लगाइए'] },
    { h: 'Google पर अपना <span class="blue">नाम</span> search करें', sub: 'क्या आप पहले पन्ने पर दिखते हैं? Maps पर profile है?', art: A.serp('aapka business naam', [{ u: 'aapkibusiness.in', t: 'Aapka Business – Services, Contact', p: 'आपकी website और profile यहाँ दिखनी चाहिए।' }, { u: 'dusra-business.in', t: 'Dusra Business', p: '…' }]) },
    { h: '<span class="blue">Phone</span> पर खोलकर देखें', sub: 'ज़्यादातर customer phone से ही देखते हैं — वहाँ ठीक दिखनी चाहिए।', art: A.phoneSide(A.site('Aapka Business', 'Services · Contact'), [{ icon: 'bolt', t: 'जल्दी खुले?' }, { icon: 'phone', t: 'ठीक से दिखे?' }, { icon: 'eye', t: 'पढ़ने लायक़?' }]) },
    { h: '<span class="blue">5 सेकंड</span> test', sub: '', art: A.concept('5 सेकंड test', 'पहली screen देखकर समझ आए: आप क्या करते हैं, किसके लिए, कहाँ?', 'किसी दोस्त को 5 सेकंड दिखाइए, फिर उससे पूछिए।', 'eye') },
    { h: 'Call और <span class="blue">WhatsApp</span> button', sub: 'Customer को number ढूँढना न पड़े।', art: A.phoneSide(A.site('Aapka Business', 'Services · Contact'), [{ icon: 'wa', t: 'WhatsApp button' }, { icon: 'call', t: 'Call button' }, { icon: 'pin', t: 'Directions' }]) },
    { h: 'पता, timing और <span class="blue">photos</span>', sub: 'असली जानकारी से भरोसा बनता है।', art: A.checklist([{ icon: 'pin', t: 'असली पता और map' }, { icon: 'clock', t: 'Timing और छुट्टी' }, { icon: 'img', t: 'असली photos' }, { icon: 'users', t: 'काम / team की जानकारी' }]) },
    { h: 'Address bar में <span class="blue">https</span> और ताला', sub: '', art: A.concept('https + ताला', 'Address bar में ताले का निशान और https हो — यानी connection सुरक्षित है।', 'फ़ॉर्म या contact जानकारी लेते हैं तो ये और भी ज़रूरी है।', 'lock') },
    { cta: true, h: 'Website <span class="blue">सुधरवानी</span> है?', ask: 'Namaste, mujhe apni website ka check aur sudhaar karwana hai', reply: 'Namaste! Bataiye, aapki website kis business ki hai?', share: 'Business वाले दोस्त को भेजें' },
  ],
  ig: `अपनी website का 5 मिनट का check 🔍 (save करें)

Phone उठाइए और ये 6 बातें देखिए:
1️⃣ Google पर अपना नाम search करें
2️⃣ Phone पर खोलकर देखें
3️⃣ 5 सेकंड test — समझ आता है आप क्या करते हैं?
4️⃣ Call / WhatsApp button
5️⃣ असली पता, timing, photos
6️⃣ Address bar में https और ताला

हर एक पर ✓ लगाइए। जहाँ ✓ नहीं, वहीं सुधार का मौक़ा है।

Website सुधरवानी है? WhatsApp करें 📲 79742 17411

#WebsiteTips #DigitalMarketingIndia #SmallBusinessIndia #LocalSEO #BusinessWebsite`,
  fb: `अपनी website का 5 मिनट का check 🔍 (swipe करें)

✅ Google पर अपना नाम search करें
✅ Phone पर खोलकर देखें
✅ 5 सेकंड test
✅ Call / WhatsApp button
✅ असली पता, timing, photos
✅ https और ताला

सुधरवाने के लिए: ${wa('FB-C13')}

#WebsiteTips #SmallBusinessIndia`,
  gbp: 'अपनी website का 5 मिनट का check: Google पर अपना नाम search करें, phone पर खोलकर देखें, 5 सेकंड में समझ आए कि आप क्या करते हैं, call और WhatsApp button देखें, असली पता, timing और photos जाँचें, और https व ताला देखें। Sagar (MP) की FutureTech Digital Marketing Agency website सुधारने में मदद करती है।',
  altTopics: ['Website ka 5 minute check cover', 'Google par naam search karein', 'Phone par kholkar dekhein', '5 second test', 'Call aur WhatsApp button', 'Pata timing photos', 'https aur tala', 'WhatsApp 79742 17411'], altGbp: 'FutureTech graphic in Hindi: website ka 5 minute check.' });

const billing = mk({ id: 'billing-udhaar', date: '2027-01-07', slug: 'Notebook_Se_Software_Tak_Udhaar_Billing', lead: 'C14', utm: 'c14', series: 'BILLING & UDHAAR',
  title: 'CAROUSEL — Notebook se software tak: udhaar, stock, billing (8 slides)', gbpH: 'Notebook से software तक: <span class="mk">हिसाब</span> एक जगह',
  slides: [
    { aud: 'Medical, kirana, electronics, hardware की दुकान के लिए', h: 'Notebook से software तक: <span class="mk">हिसाब</span> एक जगह', sub: 'उधार, stock, supplier और salary — कैसे सँभालें', art: A.hub(A.hubCenter('shop'), [{ icon: 'doc', l: 'उधार', l2: 'खाता' }, { icon: 'store', l: 'Stock', l2: 'expiry' }, { icon: 'money', l: 'Supplier', l2: 'payment' }, { icon: 'user', l: 'Salary', l2: 'हिसाब' }]), raw: true },
    { h: 'ये <span class="blue">संकेत</span> बताते हैं कि system चाहिए', sub: 'जवाब ढूँढने में समय लगे, तो सोचिए।', art: A.scorecard(['किसका कितना बाकी है, तुरंत बता सकते हैं?', 'कौन सा stock कम है, पता है?', 'Supplier को कब कितना देना है?', 'इस महीने की salary का हिसाब तैयार?'], { mark: '?' }) },
    { h: 'क्या-क्या <span class="blue">track</span> करें', sub: 'सबसे पहले ये चार चीज़ें।', art: A.checklist([{ icon: 'doc', t: 'उधार: किसका, कितना, कब' }, { icon: 'store', t: 'Stock और expiry' }, { icon: 'money', t: 'Supplier का payment' }, { icon: 'user', t: 'Staff की salary' }]) },
    { h: 'Notebook और Excel बनाम <span class="blue">system</span>', sub: '', art: A.compare({ h: 'Notebook + Excel', rows: ['पन्ने पलटना', 'हाथ से update', 'Payment भूलना'] }, { h: 'सही system', rows: ['एक नज़र में बाकी', 'अपने आप जुड़ना', 'Payment reminder'] }, true) },
    { h: 'सही software में क्या <span class="blue">देखें</span>', sub: 'चुनने से पहले ये बातें पूछिए।', art: A.checklist([{ icon: 'phone', t: 'Phone पर चले' }, { icon: 'bell', t: 'Payment reminder' }, { icon: 'sync', t: 'Backup की सुविधा' }, { icon: 'users', t: 'Staff के लिए आसान' }]) },
    { h: 'शुरुआत <span class="blue">कैसे</span> करें', sub: 'सब कुछ एक साथ नहीं — पहले छोटे से।', art: A.cards([{ icon: 'list', t: 'पुराना हिसाब', s: 'इकट्ठा करें' }, { icon: 'check', t: 'एक हफ़्ता', s: 'साथ-साथ entries' }, { icon: 'trend', t: 'फिर पूरा', s: 'बदलाव करें' }]) },
    { h: 'डेटा की <span class="blue">सुरक्षा</span>', sub: '', art: A.concept('Backup + Password', 'हिसाब आपका सबसे क़ीमती record है — इसकी copy और password संभालकर रखें।', 'Staff को उतनी ही access दें जितनी ज़रूरी हो।', 'shield') },
    { cta: true, h: 'दुकान का हिसाब <span class="blue">एक जगह</span> लाना है?', ask: 'Namaste, mujhe apni dukaan ka hisaab ek jagah laana hai', reply: 'Namaste! Bataiye, aapki dukaan kis cheez ki hai?', share: 'दुकानदार दोस्त को भेजें' },
  ],
  ig: `Notebook और Excel में हिसाब? अब system सोचिए 📒➡️💻 (save करें)

जवाब ढूँढने में समय लगे तो ये सवाल पूछिए:
❓ किसका कितना बाकी है?
❓ कौन सा stock कम है?
❓ Supplier को कब कितना देना है?
❓ Salary का हिसाब तैयार है?

Track करें: उधार, stock और expiry, supplier payment, salary। सही software में: phone पर चले, payment reminder, backup, staff के लिए आसान।

अपनी दुकान का हिसाब एक जगह लाना है? WhatsApp करें 📲 79742 17411

#SmallBusinessIndia #BillingSoftware #WebApp #Kirana #DigitalMarketingIndia`,
  fb: `Notebook और Excel से system तक 📒➡️💻 (swipe करें)

Track करें:
✅ उधार (किसका, कितना, कब)
✅ Stock और expiry
✅ Supplier का payment
✅ Staff की salary

हिसाब एक जगह लाने के लिए बात करें: ${wa('FB-C14')}

#BillingSoftware #SmallBusinessIndia`,
  gbp: 'दुकान का हिसाब Notebook और Excel से system तक: उधार, stock और expiry, supplier payment और salary एक जगह track करें। सही software में phone पर चलना, payment reminder, backup और staff के लिए आसान होना देखें। Sagar (MP) की FutureTech Digital Marketing Agency custom web app और billing software बनाती है।',
  altTopics: ['Notebook se software tak cover', 'Sanket ki system chahiye', 'Kya kya track karein', 'Notebook Excel versus system', 'Sahi software mein kya dekhein', 'Shuruaat kaise karein', 'Data ki suraksha', 'WhatsApp 79742 17411'], altGbp: 'FutureTech graphic in Hindi: Notebook se software tak, hisaab ek jagah.' });

const localseo = mk({ id: 'local-seo-30', date: '2027-01-12', slug: 'Local_SEO_30_Din_Checklist', lead: 'C15', utm: 'c15', series: 'LOCAL SEO',
  title: 'CAROUSEL — Local SEO 30 din ki checklist (8 slides)', gbpH: 'Local SEO की <span class="mk">30 दिन</span> की checklist',
  slides: [
    { aud: 'हर local business के लिए', h: 'Local SEO की <span class="mk">30 दिन</span> की checklist', sub: 'Google और Maps पर दिखने की शुरुआत', art: A.hub(A.hubCenter('pin'), [{ icon: 'pin', l: 'हफ़्ता 1', l2: 'Profile' }, { icon: 'doc', l: 'हफ़्ता 2', l2: 'जानकारी' }, { icon: 'globe', l: 'हफ़्ता 3', l2: 'Website' }, { icon: 'chat', l: 'हफ़्ता 4', l2: 'Reviews' }]), raw: true, fix: ['नोट', 'SEO में समय लगता है — कोई guarantee नहीं'] },
    { h: 'हफ़्ता 1: <span class="blue">Profile</span>', sub: 'Google Business Profile की नींव।', art: A.checklist([{ icon: 'pin', t: 'Profile claim / verify' }, { icon: 'list', t: 'सही category' }, { icon: 'clock', t: 'Timing और contact' }, { icon: 'img', t: 'असली photos' }]) },
    { h: 'हफ़्ता 2: जानकारी <span class="blue">एक जैसी</span>', sub: 'नाम-पता-फ़ोन हर जगह वही।', art: A.checklist([{ icon: 'doc', t: 'Format तय करें' }, { icon: 'globe', t: 'Website पर वही' }, { icon: 'users', t: 'Social pages पर वही' }, { icon: 'list', t: 'Directories पर वही' }]) },
    { h: 'हफ़्ता 3: <span class="blue">Website</span> के pages', sub: 'हर service या course का अलग page।', art: A.checklist([{ icon: 'doc', t: 'हर service का page' }, { icon: 'pin', t: 'शहर / इलाक़े का ज़िक्र' }, { icon: 'wa', t: 'WhatsApp / Call button' }, { icon: 'bolt', t: 'Phone पर तेज़' }]) },
    { h: 'हफ़्ता 4: <span class="blue">Reviews</span> और updates', sub: 'ईमानदार तरीक़े से।', art: A.checklist([{ icon: 'heart', t: 'ख़ुश customer से review माँगें' }, { icon: 'chat', t: 'हर review का जवाब' }, { icon: 'img', t: 'नई photo / update डालें' }]) },
    { h: '30 दिन के बाद <span class="blue">देखें</span>', sub: 'हर एक पर ✓ लगाइए।', art: A.scorecard(['Profile पूरी और verify है?', 'जानकारी हर जगह एक जैसी?', 'Website के pages बने?', 'Reviews का जवाब नियमित?']) },
    { h: 'क्या <span class="blue">न करें</span>', sub: '', art: A.compare({ h: 'ये नहीं', rows: ['नाम में keywords ठूँसना', 'नकली reviews', '“1st rank” का भरोसा देना'] }, { h: 'ये करें', rows: ['असली नाम', 'असली reviews', 'सही और पूरी जानकारी'] }, true) },
    { cta: true, h: 'Local SEO <span class="blue">शुरू</span> करना है?', ask: 'Namaste, mujhe apne business ka Local SEO shuru karna hai', reply: 'Namaste! Bataiye, aapka business kya hai?', share: 'Business वाले दोस्त को भेजें' },
  ],
  ig: `Local SEO की 30 दिन की checklist 🗓️ (save करें)

1️⃣ हफ़्ता 1: Google Profile — claim, category, timing, photos
2️⃣ हफ़्ता 2: नाम-पता-फ़ोन हर जगह एक जैसा
3️⃣ हफ़्ता 3: Website के pages — हर service का अलग page
4️⃣ हफ़्ता 4: Reviews का जवाब, नई photo / update

SEO में समय लगता है। Ranking की कोई guarantee नहीं होती।

Local SEO शुरू करना है? WhatsApp करें 📲 79742 17411

#LocalSEO #GoogleBusinessProfile #DigitalMarketingIndia #SmallBusinessIndia #SEOBasics`,
  fb: `Local SEO की 30 दिन की checklist 🗓️ (swipe करें)

✅ हफ़्ता 1: Google Profile
✅ हफ़्ता 2: नाम-पता-फ़ोन एक जैसा
✅ हफ़्ता 3: Website के pages
✅ हफ़्ता 4: Reviews और updates

(Ranking की guarantee नहीं।) शुरू करने के लिए: ${wa('FB-C15')}

#LocalSEO #SmallBusinessIndia`,
  gbp: 'Local SEO की 30 दिन की checklist: पहले हफ़्ते में Google Profile, दूसरे में नाम-पता-फ़ोन एक जैसा, तीसरे में website के pages और चौथे में reviews और updates। SEO में समय लगता है, ranking की guarantee नहीं। Sagar (MP) की FutureTech Digital Marketing Agency Local SEO में मदद करती है।',
  altTopics: ['Local SEO 30 din checklist cover', 'Hafta 1 profile', 'Hafta 2 jankari ek jaisi', 'Hafta 3 website ke pages', 'Hafta 4 reviews aur updates', '30 din ke baad dekhein', 'Kya na karein', 'WhatsApp 79742 17411'], altGbp: 'FutureTech graphic in Hindi: Local SEO ki 30 din ki checklist.' });

const adsQ = mk({ id: 'ads-7-sawal', date: '2027-01-14', slug: 'Ads_Shuru_Karne_Se_Pehle_7_Sawal', lead: 'C16', utm: 'c16', series: 'ADS BASICS',
  title: 'CAROUSEL — Ads shuru karne se pehle 7 sawal (8 slides)', gbpH: 'Ads शुरू करने से पहले <span class="mk">7 सवाल</span>',
  slides: [
    { aud: 'जो ads चलाने की सोच रहे हैं', h: 'Ads शुरू करने से पहले <span class="mk">7 सवाल</span>', sub: 'जवाब साफ़ हों, तो budget बेकार नहीं जाता', art: A.hub(A.hubCenter('chat'), [{ icon: 'target', l: 'लक्ष्य', l2: 'और audience' }, { icon: 'money', l: 'Budget', l2: 'तय करें' }, { icon: 'globe', l: 'Page', l2: 'तैयार' }, { icon: 'wa', l: 'जवाब', l2: 'कौन देगा' }]), raw: true },
    { h: 'सवाल 1–2: <span class="blue">किसके</span> लिए, क्यों?', sub: 'लक्ष्य एक ही रखें।', art: A.scorecard(['आपका एक लक्ष्य क्या है — call, WhatsApp या visit?', 'आपका असली customer कौन है — उम्र, इलाक़ा, ज़रूरत?'], { mark: '?' }) },
    { h: 'सवाल 3: <span class="blue">Budget</span> कितना?', sub: 'जितना आप बिना घबराए आज़मा सकें।', art: A.concept('Budget', 'छोटे से शुरू करें, कुछ दिन देखें, फिर तय करें।', 'एक साथ बहुत बड़ा budget लगाने से पहले आज़माइए।', 'money') },
    { h: 'सवाल 4: ad के बाद <span class="blue">कहाँ</span> भेजेंगे?', sub: 'साफ़ page, एक message, एक button।', art: A.phoneSide(A.site('Aapka Business', 'Services · Contact'), [{ icon: 'doc', t: 'साफ़ जानकारी' }, { icon: 'wa', t: 'WhatsApp button' }, { icon: 'bolt', t: 'तेज़ page' }]) },
    { h: 'सवाल 5: <span class="blue">जवाब</span> कौन देगा, कितनी जल्दी?', sub: 'Enquiry आए और जवाब देर से मिले, तो नुक़सान।', art: A.cards([{ icon: 'user', t: 'एक व्यक्ति तय', s: 'जो जवाब दे' }, { icon: 'clock', t: 'जल्दी जवाब', s: 'हो सके तो उसी दिन' }, { icon: 'repeat', t: 'Follow-up', s: 'छूटे नहीं' }]) },
    { h: 'सवाल 6: कैसे <span class="blue">नापेंगे</span>?', sub: 'पता होना चाहिए कौन सी ad से enquiry आई।', art: A.checklist([{ icon: 'tag', t: 'हर ad का अलग नाम / code' }, { icon: 'list', t: 'हर enquiry का source लिखें' }, { icon: 'cal', t: 'हफ़्ते में एक बार review' }]) },
    { h: 'सवाल 7: कब <span class="blue">बदलेंगे</span>?', sub: '', art: A.concept('Review की आदत', 'कुछ दिन बाद देखिए क्या चला, क्या नहीं — फिर message, audience या page बदलिए।', 'एक बार में एक ही चीज़ बदलें।', 'sync') },
    { cta: true, h: 'Ads का <span class="blue">सही plan</span> चाहिए?', ask: 'Namaste, mujhe ads ka sahi plan chahiye', reply: 'Namaste! Bataiye, aapka business kya hai?', share: 'Ads चलाने वाले दोस्त को भेजें' },
  ],
  ig: `Ads शुरू करने से पहले ये 7 सवाल पूछिए 🎯 (save करें)

1️⃣ आपका एक लक्ष्य क्या है — call, WhatsApp या visit?
2️⃣ आपका असली customer कौन है?
3️⃣ Budget कितना, जो आप आज़मा सकें?
4️⃣ ad के बाद कहाँ भेजेंगे — साफ़ page + WhatsApp button?
5️⃣ जवाब कौन देगा, कितनी जल्दी?
6️⃣ कैसे नापेंगे कि कौन सी ad से enquiry आई?
7️⃣ कब देखकर बदलेंगे?

जवाब साफ़ हों, तो budget बेकार नहीं जाता।

Ads का सही plan चाहिए? WhatsApp करें 📲 79742 17411

#DigitalMarketingIndia #MetaAds #GoogleAds #SmallBusinessIndia #LeadGeneration`,
  fb: `Ads शुरू करने से पहले 7 सवाल 🎯 (swipe करें)

✅ लक्ष्य क्या है?
✅ असली customer कौन?
✅ Budget कितना?
✅ ad के बाद कहाँ भेजेंगे?
✅ जवाब कौन देगा?
✅ कैसे नापेंगे?
✅ कब बदलेंगे?

सही plan के लिए: ${wa('FB-C16')}

#MetaAds #SmallBusinessIndia`,
  gbp: 'Ads शुरू करने से पहले 7 सवाल: लक्ष्य, असली customer, budget, ad के बाद कहाँ भेजेंगे, जवाब कौन और कितनी जल्दी देगा, कैसे नापेंगे और कब बदलेंगे। जवाब साफ़ हों तो budget बेकार नहीं जाता। Sagar (MP) की FutureTech Digital Marketing Agency ads का plan बनाने में मदद करती है।',
  altTopics: ['Ads shuru karne se pehle 7 sawal cover', 'Sawal 1 aur 2 lakshya aur customer', 'Sawal 3 budget', 'Sawal 4 ad ke baad kahan bhejenge', 'Sawal 5 jawab kaun dega', 'Sawal 6 kaise napenge', 'Sawal 7 kab badlenge', 'WhatsApp 79742 17411'], altGbp: 'FutureTech graphic in Hindi: ads shuru karne se pehle 7 sawal.' });

const salon = mk({ id: 'salon-restaurant', date: '2027-01-19', slug: 'Salon_Restaurant_Digital_Marketing_Plan', lead: 'C17', utm: 'c17', series: 'SALON & RESTAURANT',
  title: 'CAROUSEL — Salon / Parlour / Restaurant / Cafe digital marketing plan (8 slides)', gbpH: 'Salon और Restaurant के लिए <span class="mk">digital marketing</span> plan',
  slides: [
    { aud: 'Salon, Parlour, Restaurant, Cafe के लिए', h: 'Salon और Restaurant के लिए <span class="mk">digital marketing</span> plan', sub: 'Booking और walk-in बढ़ाने की शुरुआत', art: A.hub(A.hubCenter('shop'), [{ icon: 'pin', l: 'Google', l2: 'Profile' }, { icon: 'img', l: 'असली', l2: 'photos' }, { icon: 'wa', l: 'WhatsApp', l2: 'booking' }, { icon: 'chat', l: 'Reviews', l2: 'जवाब' }]), raw: true, fix: ['30 दिन', 'का सीधा plan'] },
    { h: 'Google Profile में <span class="blue">क्या</span> दिखे', sub: 'लोग “near me” search करके यहीं देखते हैं।', art: A.checklist([{ icon: 'clock', t: 'Timing और छुट्टी' }, { icon: 'img', t: 'जगह और काम की असली photos' }, { icon: 'list', t: 'Services / menu की जानकारी' }, { icon: 'call', t: 'Phone और रास्ता' }]) },
    { h: 'Instagram पर <span class="blue">क्या</span> डालें', sub: 'काम ख़ुद बोलता है।', art: A.checklist([{ icon: 'video', t: 'काम / dish का छोटा video' }, { icon: 'cam', t: 'जगह की असली photos' }, { icon: 'cal', t: 'Timing और ख़ास दिन' }, { icon: 'heart', t: 'Customer की बात (permission से)' }]) },
    { h: '<span class="blue">WhatsApp</span> पर booking / order', sub: 'सवालों के तैयार जवाब रखें।', art: A.phoneSide(A.chat([['in', 'Kal shaam ka slot / table mil sakta hai?'], ['out', 'Namaste! Haan, kitne baje aur kitne log?']]), [{ icon: 'cal', t: 'Slot / table' }, { icon: 'bolt', t: 'Quick reply' }, { icon: 'bell', t: 'Reminder' }]) },
    { h: '<span class="blue">Reviews</span> और जवाब', sub: 'ख़ुश customer से विनम्रता से माँगें, हर review का जवाब दें।', art: A.cards([{ icon: 'heart', t: 'ख़ुश customer', s: 'से माँगें' }, { icon: 'chat', t: 'हर review', s: 'का जवाब' }, { icon: 'shield', t: 'नकली नहीं', s: 'सिर्फ़ असली' }], false) },
    { h: 'त्योहार और <span class="blue">सीज़न</span>', sub: 'Timing और ख़ास दिन की जानकारी पहले से डालें।', art: A.checklist([{ icon: 'cal', t: 'त्योहार की timing अपडेट' }, { icon: 'bell', t: 'पहले से बताएँ' }, { icon: 'users', t: 'भीड़ से पहले booking की याद' }]) },
    { h: 'आस-पास के <span class="blue">ads</span>, छोटे से', sub: 'एक message और एक WhatsApp button।', art: A.cards([{ icon: 'target', t: 'आस-पास के लोग' }, { icon: 'mega', t: 'एक साफ़ ad' }, { icon: 'wa', t: 'WhatsApp बात' }]), fix: ['ध्यान', 'कोई भी offer / कीमत confirm करके ही लिखें'] },
    { cta: true, h: 'Booking / orders <span class="blue">बढ़ानी</span> हैं?', ask: 'Namaste, mujhe apne salon / restaurant ka digital marketing plan chahiye', reply: 'Namaste! Bataiye, aapka salon ya restaurant kahan hai?', share: 'Salon / Restaurant वाले को भेजें' },
  ],
  ig: `Salon और Restaurant के लिए digital marketing plan 💇🍽️ (save करें)

1️⃣ Google Profile — timing, असली photos, services / menu
2️⃣ Instagram — काम / dish के छोटे video, असली photos
3️⃣ WhatsApp पर booking या order, quick replies
4️⃣ Reviews — विनम्रता से माँगें, हर एक का जवाब
5️⃣ त्योहार की timing पहले से बताएँ
6️⃣ आस-पास के लोगों के लिए छोटे ads

कोई भी offer या कीमत confirm करके ही लिखें।

Plan बनवाना है? WhatsApp करें 📲 79742 17411

#SmallBusinessIndia #DigitalMarketingIndia #SalonMarketing #RestaurantMarketing #LocalSEO`,
  fb: `Salon और Restaurant के लिए digital marketing plan 💇🍽️ (swipe करें)

✅ Google Profile
✅ असली photos और video
✅ WhatsApp पर booking / order
✅ Reviews का जवाब
✅ त्योहार की timing
✅ छोटे local ads

Plan के लिए: ${wa('FB-C17')}

#SalonMarketing #RestaurantMarketing`,
  gbp: 'Salon और restaurant के लिए digital marketing की शुरुआत: Google Profile में timing, असली photos और services या menu, WhatsApp पर booking या order, reviews का जवाब, त्योहार की timing और आस-पास के लोगों के लिए छोटे ads। Sagar (MP) की FutureTech Digital Marketing Agency plan बनाने में मदद करती है।',
  altTopics: ['Salon aur restaurant digital marketing plan cover', 'Google Profile mein kya dikhe', 'Instagram par kya daalein', 'WhatsApp par booking ya order', 'Reviews aur jawab', 'Tyohar aur season', 'Aas-paas ke chhote ads', 'WhatsApp 79742 17411'], altGbp: 'FutureTech graphic in Hindi: salon aur restaurant ke liye digital marketing plan.' });

module.exports = [gbpGuide, reviews, wabiz, webcheck, billing, localseo, adsQ, salon];
