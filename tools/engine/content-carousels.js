// Four deep carousels (8 slides each). Hindi headlines, Roman Hinglish captions. No unverified claims, no prices/offers.
const { A } = require('./lib');
const wa = c => `https://wa.me/917974217411?text=Namaste%20(${c})`;
const H = { sb: '#SmallBusinessIndia', dm: '#DigitalMarketingIndia', ls: '#LocalSEO' };

const website = {
  id: 'website-why', kind: 'carousel', date: '2026-11-17', time: '14:00', slug: 'Website_Kyu_Zaruri', lead: 'C05', utm: 'c05', series: 'WEBSITE SERIES',
  title: 'CAROUSEL — Website kyu zaruri hai (8 slides)', gbpH: 'Website <span class="mk">क्यों ज़रूरी</span> है?',
  slides: [
    { aud: 'हर business के लिए', h: 'Website <span class="mk">क्यों ज़रूरी</span> है?', sub: 'Social media किराये का घर है, website आपकी अपनी दुकान', art: A.hub(A.hubCenter('browser'), [{ icon: 'search', l: 'Google पर', l2: 'दिखें' }, { icon: 'wa', l: 'WhatsApp', l2: 'enquiry' }, { icon: 'shield', l: 'भरोसा', l2: 'बने' }, { icon: 'clock', l: 'हर समय', l2: 'खुली' }]), raw: true, fix: ['5 कारण', 'जो हर small business को पता होने चाहिए'] },
    { h: 'Customer पहले <span class="blue">Google</span> पर देखता है', sub: 'कई लोग कहीं जाने या कुछ ख़रीदने से पहले phone पर search करते हैं।', art: A.serp('dukaan near me', [{ u: 'aapkibusiness.in', t: 'Aapka Business – Services, Timing, Contact', p: 'सही जानकारी, address और WhatsApp — एक जगह।' }, { u: 'dusra-business.in', t: 'Dusra Business', p: '…' }]), fix: ['सोचें', 'Search में आप दिखते हैं, या सिर्फ़ दूसरे?'] },
    { h: 'Social media किराये का घर, <span class="blue">website अपना घर</span>', sub: 'Platform के rules और reach बदल सकते हैं। Website आपके control में है।', art: A.compare({ h: 'सिर्फ़ Social media', rows: ['Rules platform तय करता है', 'पुरानी post जल्दी दब जाती है', 'जानकारी बिखरी रहती है'] }, { h: 'Website भी हो', rows: ['आपके control में', 'सारी जानकारी एक जगह', 'Google से भी लोग पहुँच सकते हैं'] }) },
    { h: 'Website से <span class="blue">भरोसा</span> बनता है', sub: 'असली पता, timing, काम के नमूने और contact — एक जगह।', art: A.checklist([{ icon: 'pin', t: 'असली पता और map' }, { icon: 'clock', t: 'Timing और छुट्टी' }, { icon: 'img', t: 'काम की असली photos' }, { icon: 'chat', t: 'Contact का आसान तरीका' }]) },
    { h: 'हर page पर <span class="blue">enquiry</span> का रास्ता', sub: 'Customer को number ढूँढना न पड़े।', art: A.phoneSide(A.site('Aapka Business', 'Services · Contact'), [{ icon: 'call', t: 'Call button' }, { icon: 'wa', t: 'WhatsApp button' }, { icon: 'pin', t: 'Directions' }]) },
    { h: 'Website से <span class="blue">Google</span> समझता है आप क्या करते हैं', sub: 'Services, शहर और contact की साफ़ जानकारी हो तो Google आपके बारे में समझ पाता है।', art: A.cards([{ icon: 'doc', t: 'Services page', s: 'हर service की जानकारी' }, { icon: 'pin', t: 'शहर / इलाका', s: 'कहाँ काम करते हैं' }, { icon: 'search', t: 'Google में दिखें', s: 'सही search पर' }]) },
    { h: 'Ads और social का <span class="blue">ठिकाना</span> भी website', sub: 'Post या ad देखकर customer को कहीं पहुँचना होता है — वहाँ साफ़ जानकारी चाहिए।', art: A.cards([{ icon: 'mega', t: 'Ad / Post', s: 'ध्यान खींचती है' }, { icon: 'globe', t: 'Website', s: 'पूरी जानकारी' }, { icon: 'wa', t: 'WhatsApp', s: 'बातचीत शुरू' }]) },
    { cta: true, h: 'Website की <span class="blue">planning</span> करनी है?', recap: [{ icon: 'search', t: 'Google पर दिखें', s: 'सही जानकारी, साफ़ pages' }, { icon: 'shield', t: 'भरोसा बनाएँ', s: 'असली पता, photos, contact' }, { icon: 'wa', t: 'Enquiry आसान करें', s: 'WhatsApp / Call एक tap पर' }], line: 'अपनी website की planning के लिए WhatsApp करें।' },
  ],
  ig: `Social media किराये का घर है, website आपका अपना घर 🏠

Website क्यों ज़रूरी है — 5 वजह:
1️⃣ Customer पहले Google पर देखता है
2️⃣ Platform के rules बदल सकते हैं, website आपके control में है
3️⃣ असली पता, timing, photos से भरोसा बनता है
4️⃣ हर page पर WhatsApp / Call का रास्ता
5️⃣ Ads और social post का सही ठिकाना

Website की planning के लिए WhatsApp करें 📲 79742 17411

Save करें, और जो दोस्त business चलाता है उसे भेजिए।

#SmallBusinessIndia #DigitalMarketingIndia #LocalSEO #WebsiteTips #BusinessGrowth`.replace(/[ऀ-ॿ]+/g, m => m),
  fb: `Website क्यों ज़रूरी है? 🌐 (swipe करें)

✅ Customer पहले Google पर देखता है
✅ Website आपके control में है
✅ असली जानकारी से भरोसा
✅ WhatsApp / Call एक tap पर
✅ Ads और social का ठिकाना

Website की planning के लिए: ${wa('FB-C05')}

#SmallBusinessIndia #LocalSEO`,
  gbp: 'Website क्यों ज़रूरी है? Customer अक्सर पहले Google पर देखते हैं। एक साफ़ website में असली पता, timing, काम की photos और WhatsApp या call का रास्ता होता है। FutureTech आपकी website की planning में मदद करता है।',
  alt: ['Website kyu zaruri hai: hub graphic', 'Customer pehle Google par dekhta hai', 'Social media vs website', 'Website se bharosa', 'Har page par enquiry ka raasta', 'Google ko samajhne mein madad', 'Ads aur social ka thikana website', 'WhatsApp 79742 17411'].map((t, i) => `FutureTech Hindi carousel slide ${i + 1} of 8. ${t}.`),
  altGbp: 'FutureTech graphic in Hindi: website kyu zaruri hai.',
};

const gym = {
  id: 'gym-plan', kind: 'carousel', date: '2026-11-26', time: '14:00', slug: 'Gym_Digital_Marketing_Plan', lead: 'C06', utm: 'c06', series: 'GYM & FITNESS',
  title: 'CAROUSEL — Gym ke liye digital marketing plan (8 slides)', gbpH: 'Gym के लिए <span class="mk">digital marketing</span> plan',
  slides: [
    { aud: 'Gym & Fitness Studio के लिए', h: 'Gym के लिए <span class="mk">digital marketing</span> plan', sub: 'Membership enquiry बढ़ाने का सरल तरीका — step by step', art: A.hub(A.hubCenter('phone'), [{ icon: 'pin', l: 'Google पर', l2: 'gym दिखे' }, { icon: 'wa', l: 'WhatsApp', l2: 'trial slot' }, { icon: 'video', l: 'Reels और', l2: 'photos' }, { icon: 'repeat', l: 'Follow-up', l2: 'renewal' }]), raw: true, fix: ['30 दिन', 'का सीधा plan'] },
    { h: 'Goal: Likes नहीं, <span class="blue">enquiry</span>', sub: 'पहले तय करें कि आपको क्या चाहिए — trial और membership के लिए आने वाले लोग।', art: A.checklist([{ icon: 'target', t: 'Goal: Membership enquiry', s: 'सिर्फ़ followers नहीं' }, { icon: 'cal', t: 'Trial slot', s: 'आने वाले को समय दें' }, { icon: 'users', t: 'Membership', s: 'फिर renewal' }]) },
    { h: 'Gym का <span class="blue">Google Profile</span> पूरा भरें', sub: 'Timing, trainers, equipment की असली photos और Maps location।', art: A.phoneSide(A.kp('Aapka Gym', 'Gym · Open', [['pin', 'Main Road, आपका शहर'], ['clock', 'सुबह 5 – रात 10']]), [{ icon: 'pin', t: 'सही location' }, { icon: 'clock', t: 'Timing अपडेट' }, { icon: 'img', t: 'असली photos' }]) },
    { h: 'Instagram पर क्या <span class="blue">post</span> करें', sub: 'हफ़्ते के content का सरल ढाँचा।', art: A.checklist([{ icon: 'video', t: 'Trainer का 30 sec tip' }, { icon: 'cam', t: 'Gym और equipment tour' }, { icon: 'cal', t: 'Batch / class timing' }, { icon: 'heart', t: 'Member story', s: 'सिर्फ़ लिखित permission से' }]) },
    { h: 'Enquiry से <span class="blue">trial</span> तक, WhatsApp पर', sub: 'Quick reply से timing, facilities और trial slot बताएँ।', art: A.phoneSide(A.chat([['in', 'Gym timing aur membership ke baare mein batayein'], ['out', 'Namaste! Timing aur facilities bhej rahe hain. Trial ke liye slot batayein'], ['in', 'Kal shaam ka slot?']]), [{ icon: 'bolt', t: 'Quick reply' }, { icon: 'cal', t: 'Trial slot' }, { icon: 'repeat', t: 'Follow-up' }]) },
    { h: 'Local <span class="blue">ads</span> छोटे से शुरू करें', sub: 'आस-पास के लोग, एक message और एक WhatsApp button।', art: A.cards([{ icon: 'target', t: 'Location + उम्र', s: 'आस-पास के लोग' }, { icon: 'mega', t: 'Ad', s: 'एक साफ़ message' }, { icon: 'wa', t: 'WhatsApp', s: 'trial की बात' }]), fix: ['ध्यान', 'Body shaming या “guaranteed result” वाली बात नहीं'] },
    { h: '<span class="mk">30 दिन</span> का plan', sub: '', art: A.timeline([{ h: 'हफ़्ता 1', items: ['Google Profile पूरा', 'असली photos'] }, { h: 'हफ़्ता 2-3', items: ['Instagram content', 'WhatsApp quick reply', 'छोटा ad test'] }, { h: 'हफ़्ता 4', items: ['Follow-up', 'Renewal reminder', 'Review और सुधार'] }]) },
    { cta: true, h: 'अपने gym का plan <span class="blue">बनवाना है?</span>', recap: [{ icon: 'pin', t: 'Google Profile पूरा', s: 'timing, photos, location' }, { icon: 'wa', t: 'WhatsApp पर trial booking', s: 'quick reply तैयार' }, { icon: 'repeat', t: 'Follow-up + renewal', s: 'enquiry छूटे नहीं' }], line: 'अपने gym का 30-दिन का plan बनवाना है? WhatsApp करें।', share: 'Gym वाले दोस्त को भेजें' },
  ],
  ig: `Gym में enquiry बढ़ानी है? सिर्फ़ likes से नहीं होगा 💪

Gym के लिए 30 दिन का सीधा plan:
1️⃣ Google Profile पूरा — timing, असली photos, location
2️⃣ Instagram पर trainer tips और equipment tour
3️⃣ WhatsApp पर trial slot booking (quick reply)
4️⃣ आस-पास के लोगों के लिए छोटा ad test
5️⃣ Follow-up और renewal reminder

Member की photo/story सिर्फ़ लिखित permission से।

अपने gym का plan बनवाना है? WhatsApp करें 📲 79742 17411

Save करें, और gym वाले दोस्त को भेजिए।

#SmallBusinessIndia #DigitalMarketingIndia #GymMarketing #LocalSEO #FitnessBusiness`,
  fb: `Gym के लिए digital marketing plan 💪 (swipe करें)

✅ Google Profile पूरा
✅ Instagram पर trainer tips
✅ WhatsApp पर trial booking
✅ छोटा local ad test
✅ Follow-up और renewal

अपने gym का plan बनवाने के लिए: ${wa('FB-C06')}

#SmallBusinessIndia #GymMarketing`,
  gbp: 'Gym के लिए digital marketing plan: Google Business Profile में timing और असली photos, WhatsApp पर trial slot booking, छोटा local ad test और renewal reminder। FutureTech gym और fitness studio के लिए 30 दिन का plan बनाने में मदद करता है।',
  alt: ['Gym digital marketing plan cover', 'Goal enquiry, likes nahi', 'Gym ka Google Profile', 'Instagram content ideas', 'WhatsApp par trial booking', 'Local ads chhote se shuru, body shaming nahi', '30 din ka plan', 'WhatsApp 79742 17411'].map((t, i) => `FutureTech Hindi carousel slide ${i + 1} of 8. ${t}.`),
  altGbp: 'FutureTech graphic in Hindi: gym ke liye digital marketing plan.',
};

const coaching = {
  id: 'coaching-plan', kind: 'carousel', date: '2026-12-01', time: '14:00', slug: 'Coaching_College_Admission_Plan', lead: 'C07', utm: 'c07', series: 'COACHING & COLLEGE',
  title: 'CAROUSEL — Coaching/College admission enquiry plan (8 slides)', gbpH: 'Admission enquiry <span class="mk">बढ़ाने</span> का plan',
  slides: [
    { aud: 'Coaching & College के लिए', h: 'Admission enquiry <span class="mk">बढ़ाने</span> का plan', sub: 'Website, Google और WhatsApp से — step by step', art: A.hub(A.hubCenter('browser'), [{ icon: 'grad', l: 'Results', l2: 'दिखाएँ' }, { icon: 'pin', l: 'Google पर', l2: 'दिखें' }, { icon: 'wa', l: 'WhatsApp', l2: 'enquiry' }, { icon: 'users', l: 'Parents का', l2: 'भरोसा' }]), raw: true, fix: ['30 दिन', 'का सीधा plan'] },
    { h: 'Admission से पहले <span class="blue">parents</span> क्या देखते हैं', sub: 'सही जानकारी जल्दी मिले तो फ़ैसला आसान होता है।', art: A.checklist([{ icon: 'book', t: 'Courses और syllabus' }, { icon: 'clock', t: 'Batch timing' }, { icon: 'money', t: 'Fees की साफ़ जानकारी' }, { icon: 'users', t: 'Faculty का परिचय' }, { icon: 'grad', t: 'Results / success stories' }]) },
    { h: 'Results और <span class="blue">case study</span> कैसे दिखाएँ', sub: 'असली student की लिखित permission से — course और असली result।', art: A.phoneSide(`<div style="font-family:Mukta;font-weight:800;font-size:30px;color:#0060A8">Success story</div><div style="display:flex;gap:14px;align-items:center;margin:14px 0"><div style="width:70px;height:70px;border-radius:50%;background:#DDE3EC"></div><div style="flex:1"><div class="ln k" style="width:70%"></div><div class="ln" style="width:50%"></div></div></div><div class="ln"></div><div class="ln" style="width:80%"></div><div style="margin-top:12px;font-size:19px;color:#5F6B7A">Student की permission के साथ</div>`, [{ icon: 'shield', t: 'लिखित permission' }, { icon: 'doc', t: 'असली result' }, { icon: 'img', t: 'Photo permission से' }]) },
    { h: '“Coaching near me” में <span class="blue">आप</span>', sub: 'Google Business Profile और हर course का अलग page।', art: A.serp('coaching near me', [{ u: 'aapkainstitute.in', t: 'Aapka Institute – Courses, Batch, Contact', p: 'Courses, batch timing और enquiry का तरीका।' }, { u: 'dusra-institute.in', t: 'Dusra Institute', p: '…' }]) },
    { h: 'Social media पर <span class="blue">क्या</span> post करें', sub: 'Parents और students दोनों के लिए काम की चीज़ें।', art: A.checklist([{ icon: 'video', t: 'Concept / doubt का 30 sec video' }, { icon: 'cal', t: 'Batch और admission की तारीख़' }, { icon: 'img', t: 'Class और campus की असली photos' }, { icon: 'book', t: 'Study tip' }]) },
    { h: 'Enquiry से <span class="blue">counselling</span> तक, WhatsApp पर', sub: 'फ़ीस और batch की जानकारी भेजें, counselling का समय तय करें।', art: A.phoneSide(A.chat([['in', 'Fees aur batch ki jaankari chahiye'], ['out', 'Namaste! Details bhej rahe hain. Counselling ka time batayein'], ['in', 'Kal 5 baje?']]), [{ icon: 'doc', t: 'Brochure' }, { icon: 'cal', t: 'Counselling slot' }, { icon: 'repeat', t: 'Follow-up' }]) },
    { h: '<span class="mk">30 दिन</span> का plan', sub: '', art: A.timeline([{ h: 'हफ़्ता 1', items: ['Website / Profile ठीक', 'Fees-batch साफ़'] }, { h: 'हफ़्ता 2-3', items: ['Content + WhatsApp reply', 'Result story (permission से)'] }, { h: 'हफ़्ता 4', items: ['छोटा ad test', 'Enquiry का review'] }]) },
    { cta: true, h: 'Admission enquiry <span class="blue">बढ़ानी है?</span>', recap: [{ icon: 'book', t: 'Fees, batch, results साफ़', s: 'parents को जवाब पहले' }, { icon: 'pin', t: 'Google पर दिखें', s: 'Profile + course pages' }, { icon: 'wa', t: 'WhatsApp पर counselling', s: 'जल्दी जवाब, follow-up' }], line: 'अपने institute का admission plan बनवाना है? WhatsApp करें।', share: 'Coaching / College वाले को भेजें' },
  ],
  ig: `Website है, पर admission enquiry नहीं आ रही? 🎓

Coaching और College के लिए 30 दिन का plan:
1️⃣ Fees, batch और results साफ़ दिखाएँ
2️⃣ Results/case study — सिर्फ़ student की लिखित permission से
3️⃣ Google Profile और course pages
4️⃣ WhatsApp पर brochure और counselling slot
5️⃣ छोटा ad test और enquiry का review

अपने institute का plan बनवाना है? WhatsApp करें 📲 79742 17411

Save करें, और coaching/college वाले को भेजिए।

#CoachingInstitute #DigitalMarketingIndia #LocalSEO #EducationMarketing #SmallBusinessIndia`,
  fb: `Coaching और College में admission enquiry बढ़ाने का plan 🎓 (swipe करें)

✅ Fees, batch, results साफ़
✅ Case study — permission से
✅ Google पर दिखें
✅ WhatsApp पर counselling
✅ छोटा ad test

Plan बनवाने के लिए: ${wa('FB-C07')}

#CoachingInstitute #LocalSEO`,
  gbp: 'Coaching और college में admission enquiry बढ़ाने के लिए fees, batch और results साफ़ दिखाएँ, Google Profile पूरा रखें और WhatsApp पर counselling slot दें। Results सिर्फ़ student की लिखित permission से। FutureTech आपके institute का plan बनाने में मदद करता है।',
  alt: ['Coaching college admission plan cover', 'Parents kya dekhte hain', 'Results aur case study permission se', 'Coaching near me search', 'Social media content ideas', 'WhatsApp counselling flow', '30 din ka plan', 'WhatsApp 79742 17411'].map((t, i) => `FutureTech Hindi carousel slide ${i + 1} of 8. ${t}.`),
  altGbp: 'FutureTech graphic in Hindi: coaching aur college ke liye admission enquiry plan.',
};

const clinic = {
  id: 'clinic-plan', kind: 'carousel', date: '2026-12-08', time: '14:00', slug: 'Clinic_Doctor_Online_Presence', lead: 'C08', utm: 'c08', series: 'CLINIC & DOCTOR',
  title: 'CAROUSEL — Clinic/Doctor online presence (8 slides, medical ad rules)', gbpH: 'Clinic की <span class="mk">online presence</span> कैसे बनाएँ',
  slides: [
    { aud: 'Clinic & Doctor के लिए', h: 'Clinic की <span class="mk">online presence</span> कैसे बनाएँ', sub: 'Patient को सही जानकारी और appointment का आसान रास्ता', art: A.hub(A.hubCenter('pin'), [{ icon: 'pin', l: 'Google Maps', l2: 'पर clinic' }, { icon: 'clock', l: 'सही', l2: 'timing' }, { icon: 'cal', l: 'Appointment', l2: 'आसान' }, { icon: 'shield', l: 'भरोसेमंद', l2: 'जानकारी' }]), raw: true, fix: ['नियम', 'के अंदर, सही और साफ़ जानकारी'] },
    { h: 'Patient सबसे पहले <span class="blue">क्या</span> खोजता है', sub: 'इलाज का दावा नहीं — सही और साफ़ जानकारी।', art: A.checklist([{ icon: 'pin', t: 'Clinic कहाँ है' }, { icon: 'clock', t: 'Timing और छुट्टी' }, { icon: 'steth', t: 'Doctor की असली qualification' }, { icon: 'phone', t: 'Appointment कैसे लें' }]) },
    { h: 'Clinic का <span class="blue">Google Profile</span> ठीक रखें', sub: 'Address, timing और असली photos अपडेट रखें।', art: A.phoneSide(A.kp('Aapka Clinic', 'Clinic · Open', [['pin', 'Main Road, आपका शहर'], ['clock', 'सुबह 10 – शाम 7']]), [{ icon: 'pin', t: 'सही address / map' }, { icon: 'clock', t: 'Timing अपडेट' }, { icon: 'img', t: 'Clinic की असली photos' }]) },
    { h: 'Website पर <span class="blue">क्या</span> हो', sub: 'सरल, साफ़ और भरोसेमंद।', art: A.checklist([{ icon: 'doc', t: 'Services की जानकारी' }, { icon: 'users', t: 'Doctor का परिचय' }, { icon: 'cal', t: 'Appointment button' }, { icon: 'shield', t: 'Privacy policy' }]) },
    { h: 'WhatsApp पर <span class="blue">appointment</span>', sub: 'Slot बताएँ, reminder भेजें। Personal जानकारी उतनी ही माँगें जितनी ज़रूरी हो।', art: A.phoneSide(A.chat([['in', 'Appointment ke liye kal ka time?'], ['out', 'Namaste! Kal subah ka slot khaali hai. Naam aur number bhejein'], ['in', '11 baje ka slot']]), [{ icon: 'cal', t: 'Slot बताएँ' }, { icon: 'bell', t: 'Reminder' }, { icon: 'shield', t: 'Privacy का ध्यान' }]) },
    { h: 'Content में <span class="blue">क्या करें</span>, क्या नहीं', sub: 'Health से जुड़े नियम गंभीर हैं — सावधान रहें।', art: A.compare({ h: 'क्या न करें', rows: ['“Best doctor” जैसे दावे', 'इलाज की guarantee', 'Patient की photo / report बिना permission'] }, { h: 'क्या करें', rows: ['सामान्य health जानकारी', 'Timing और सुविधाएँ', 'Patient की लिखित permission'] }) },
    { h: '<span class="mk">30 दिन</span> का plan', sub: '', art: A.timeline([{ h: 'हफ़्ता 1', items: ['Google Profile ठीक', 'Timing और address'] }, { h: 'हफ़्ता 2-3', items: ['Website की जानकारी', 'WhatsApp appointment flow'] }, { h: 'हफ़्ता 4', items: ['Content (नियम के अंदर)', 'Review और सुधार'] }]) },
    { cta: true, h: 'Clinic की presence <span class="blue">सुधारनी है?</span>', recap: [{ icon: 'pin', t: 'Google Profile सही', s: 'address, timing, photos' }, { icon: 'cal', t: 'Appointment आसान', s: 'WhatsApp पर slot' }, { icon: 'shield', t: 'नियम के अंदर content', s: 'कोई दावा या guarantee नहीं' }], line: 'अपने clinic की online presence के लिए WhatsApp करें।', share: 'Doctor / Clinic वाले को भेजें' },
  ],
  ig: `Clinic की online presence कैसे बनाएँ? 🩺

Patient को सही जानकारी और appointment का आसान रास्ता:
1️⃣ Google Profile — सही address, timing, असली photos
2️⃣ Website — services, doctor का परिचय, appointment button
3️⃣ WhatsApp पर slot और reminder
4️⃣ Content नियम के अंदर — कोई “best” या guarantee वाला दावा नहीं
5️⃣ Patient की photo/report सिर्फ़ लिखित permission से

Clinic की presence सुधारनी है? WhatsApp करें 📲 79742 17411

Save करें, और doctor/clinic वाले को भेजिए।

#DigitalMarketingIndia #LocalSEO #ClinicMarketing #SmallBusinessIndia #HealthcareMarketing`,
  fb: `Clinic की online presence कैसे बनाएँ? 🩺 (swipe करें)

✅ Google Profile सही रखें
✅ Website पर साफ़ जानकारी
✅ WhatsApp पर appointment slot
✅ Content नियम के अंदर
✅ Patient की privacy का ध्यान

Presence सुधारने के लिए: ${wa('FB-C08')}

#ClinicMarketing #LocalSEO`,
  gbp: 'Clinic की online presence के लिए Google Profile में सही address, timing और असली photos रखें, website पर साफ़ जानकारी दें और WhatsApp पर appointment slot बताएँ। Content नियमों के अंदर रखें। FutureTech clinic और doctors के लिए plan बनाने में मदद करता है।',
  alt: ['Clinic online presence cover', 'Patient kya khojta hai', 'Clinic ka Google Profile', 'Website par kya ho', 'WhatsApp appointment', 'Content mein kya karein kya nahi', '30 din ka plan', 'WhatsApp 79742 17411'].map((t, i) => `FutureTech Hindi carousel slide ${i + 1} of 8. ${t}.`),
  altGbp: 'FutureTech graphic in Hindi: clinic ki online presence kaise banayein.',
};
module.exports = [website, gym, coaching, clinic];
