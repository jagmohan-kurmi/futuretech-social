// Four deep carousels (8 slides each). Hindi headlines, Roman Hinglish captions. No unverified claims, no prices/offers.
const { A } = require('./lib');
const wa = c => `https://wa.me/917974217411?text=Namaste%20(${c})`;
const H = { sb: '#SmallBusinessIndia', dm: '#DigitalMarketingIndia', ls: '#LocalSEO' };

const website = {
  id: 'website-why', kind: 'carousel', date: '2026-12-15', time: '14:00', slug: 'Website_Kyu_Zaruri', lead: 'C05', utm: 'c05', series: 'WEBSITE SERIES',
  title: 'CAROUSEL — Website kyu zaruri hai (8 slides)', gbpH: 'Website <span class="mk">क्यों ज़रूरी</span> है?',
  slides: [
    { aud: 'हर business के लिए', h: 'Website <span class="mk">क्यों ज़रूरी</span> है?', sub: 'Social media किराये का घर है, website आपकी अपनी दुकान', art: A.hub(A.hubCenter('browser'), [{ icon: 'search', l: 'Google पर', l2: 'दिखें' }, { icon: 'wa', l: 'WhatsApp', l2: 'enquiry' }, { icon: 'shield', l: 'भरोसा', l2: 'बने' }, { icon: 'clock', l: 'हर समय', l2: 'खुली' }]), raw: true, fix: ['6 कारण', 'जो हर small business को पता होने चाहिए'] },
    { h: 'Customer पहले <span class="blue">Google</span> पर देखता है', sub: 'कई लोग कहीं जाने या कुछ ख़रीदने से पहले phone पर search करते हैं।', art: A.serp('kirana store near me', [{ u: 'aapkikirana.in', t: 'Aapki Kirana Store – Saman, Timing, Contact', p: 'सही जानकारी, address और WhatsApp — एक जगह।' }, { u: 'dusri-dukaan.in', t: 'Dusri Dukaan', p: '…' }]), fix: ['सोचें', 'Search में आप दिखते हैं, या सिर्फ़ दूसरे?'] },
    { h: 'Social media किराये का घर, <span class="blue">website अपना घर</span>', sub: 'Platform के rules और reach बदल सकते हैं। Website आपके control में है।', art: A.compare({ h: 'सिर्फ़ Social media', rows: ['Rules platform तय करता है', 'पुरानी post जल्दी दब जाती है', 'जानकारी बिखरी रहती है'] }, { h: 'Website भी हो', rows: ['आपके control में', 'सारी जानकारी एक जगह', 'Google से भी लोग पहुँच सकते हैं'] }) },
    { h: 'Website से <span class="blue">भरोसा</span> बनता है', sub: 'असली पता, timing, काम के नमूने और contact — एक जगह।', art: A.checklist([{ icon: 'pin', t: 'असली पता और map' }, { icon: 'clock', t: 'Timing और छुट्टी' }, { icon: 'img', t: 'काम की असली photos' }, { icon: 'chat', t: 'Contact का आसान तरीका' }]) },
    { h: 'हर page पर <span class="blue">enquiry</span> का रास्ता', sub: 'Customer को number ढूँढना न पड़े।', art: A.phoneSide(A.site('Aapka Business', 'Services · Contact'), [{ icon: 'call', t: 'Call button' }, { icon: 'wa', t: 'WhatsApp button' }, { icon: 'pin', t: 'Directions' }]) },
    { h: 'Website से <span class="blue">Google</span> को पता चलता है आप क्या करते हैं', sub: 'Services, शहर और contact की साफ़ जानकारी हो तो Google आपके बारे में समझ पाता है।', art: A.cards([{ icon: 'doc', t: 'Services page', s: 'हर service की जानकारी' }, { icon: 'pin', t: 'शहर / इलाका', s: 'कहाँ काम करते हैं' }, { icon: 'search', t: 'Google में दिखें', s: 'सही search पर' }]) },
    { h: 'Ads और social का <span class="blue">ठिकाना</span> भी website', sub: 'Post या ad देखकर customer को कहीं पहुँचना होता है — वहाँ साफ़ जानकारी चाहिए।', art: A.cards([{ icon: 'mega', t: 'Ad / Post', s: 'ध्यान खींचती है' }, { icon: 'globe', t: 'Website', s: 'पूरी जानकारी' }, { icon: 'wa', t: 'WhatsApp', s: 'बातचीत शुरू' }]) },
    { h: '<span class="mk">5 मिनट</span> में अपनी website जाँचें', sub: 'Phone उठाइए और ये 5 बातें देखिए — हर एक पर ✓ लगाइए।', art: A.scorecard(['अपने business का नाम Google पर search करें — आप दिखते हैं?', 'Phone पर website खोलें — जल्दी खुलती है?', 'पहली screen पर 5 सेकंड में समझ आता है आप क्या करते हैं?', 'WhatsApp / Call button साफ़ दिखता है?', 'पता, timing और photos असली और सही हैं?']), fix: ['स्कोर', '5 में से जितने ✓ कम, उतना सुधार का मौका'] },
    { cta: true, h: 'Website की <span class="blue">planning</span> करनी है?', recap: [{ icon: 'search', t: 'Google पर दिखें', s: 'सही जानकारी, साफ़ pages' }, { icon: 'shield', t: 'भरोसा बनाएँ', s: 'असली पता, photos, contact' }, { icon: 'wa', t: 'Enquiry आसान करें', s: 'WhatsApp / Call एक tap पर' }], ask: 'Namaste, mujhe apni website ki planning ke baare mein poochna hai', reply: 'Namaste! Bataiye, aapka business kya hai?', csub: 'सीधे WhatsApp पर पूछिए — हम आपके सवालों का जवाब देंगे।' },
  ],
  ig: `Social media किराये का घर है, website आपका अपना घर 🏠

Website क्यों ज़रूरी है — 6 वजह (और आख़िर में 5 मिनट का self-check):
1️⃣ Customer पहले Google पर देखता है
2️⃣ Platform के rules बदल सकते हैं, website आपके control में है
3️⃣ असली पता, timing, photos से भरोसा बनता है
4️⃣ हर page पर WhatsApp / Call का रास्ता
5️⃣ Website से Google को आपके बारे में समझने में मदद मिलती है
6️⃣ Ads और social post का सही ठिकाना

Website की planning के लिए WhatsApp करें 📲 79742 17411

Save करें, और जो दोस्त business चलाता है उसे भेजिए।

#SmallBusinessIndia #DigitalMarketingIndia #LocalSEO #WebsiteTips #BusinessGrowth`.replace(/[ऀ-ॿ]+/g, m => m),
  fb: `Website क्यों ज़रूरी है? 🌐 (swipe करें)

✅ Customer पहले Google पर देखता है
✅ Website आपके control में है
✅ असली जानकारी से भरोसा
✅ WhatsApp / Call एक tap पर
✅ Google को समझने में मदद
✅ Ads और social का ठिकाना

Website की planning के लिए: ${wa('FB-C05')}

#SmallBusinessIndia #LocalSEO`,
  gbp: 'Website क्यों ज़रूरी है? Customer अक्सर पहले Google पर देखते हैं। एक साफ़ website में असली पता, timing, काम की photos और WhatsApp या call का रास्ता होता है। Sagar (MP) की FutureTech Digital Marketing Agency आपकी website की planning में मदद करती है।',
  altTopics: ['Website kyu zaruri hai', 'Customer pehle Google par dekhta hai', 'Social media vs website', 'Website se bharosa', 'Har page par enquiry ka raasta', 'Google ko samajhne mein madad', 'Ads aur social ka thikana', '5 minute mein website jaanchein', 'WhatsApp 79742 17411'],
  altGbp: 'FutureTech graphic in Hindi: website kyu zaruri hai.',
};

const gym = {
  id: 'gym-plan', kind: 'carousel', date: '2026-11-26', time: '14:00', slug: 'Gym_Digital_Marketing_Plan', lead: 'C06', utm: 'c06', series: 'GYM & FITNESS',
  title: 'CAROUSEL — Gym: roz post nahi, sahi plan (9 slides)', gbpH: 'रोज़ post करते हैं, फिर भी <span class="mk">enquiry</span> नहीं?',
  slides: [
    { aud: 'Gym & Fitness Studio के लिए', h: 'रोज़ post करते हैं, फिर भी <span class="mk">enquiry</span> नहीं?', sub: 'हर रोज़ post ज़रूरी नहीं — सही plan ज़रूरी है', art: A.hub(A.hubCenter('dumbbell'), [{ icon: 'pin', l: 'Google पर', l2: 'gym दिखे' }, { icon: 'wa', l: 'WhatsApp', l2: 'trial slot' }, { icon: 'video', l: 'हफ़्ते का', l2: 'rhythm' }, { icon: 'repeat', l: 'Follow-up', l2: 'renewal' }]), raw: true, fix: ['30 दिन', 'का सीधा plan'] },
    { h: 'Likes से <span class="blue">membership</span> नहीं मिलती', sub: 'Gym की असली जीत: trial और membership के लिए आने वाले लोग।', art: A.cards([{ icon: 'heart', t: 'Likes' }, { icon: 'chat', t: 'Enquiry' }, { icon: 'cal', t: 'Trial' }, { icon: 'users', t: 'Member' }]), fix: ['लक्ष्य', 'Followers नहीं — trial और membership'] },
    { h: 'Gym का <span class="blue">Google Profile</span> पूरा भरें', sub: '“gym near me” search में आपका profile यहीं से दिखता है।', art: A.phoneSide(A.kp('Aapka Gym', 'Gym · Open', [['pin', 'Main Road, आपका शहर'], ['clock', 'सुबह 5 – रात 10']]), [{ icon: 'pin', t: 'सही location' }, { icon: 'clock', t: 'Timing अपडेट' }, { icon: 'img', t: 'असली photos' }]) },
    { h: 'हफ़्ते का <span class="blue">सही rhythm</span>', sub: 'रोज़ feed post ज़रूरी नहीं — जो निभा सकें, वही plan रखें।', art: A.week([['3–4', 'Feed posts: tip, tour, timing, myth vs fact'], ['रोज़', 'Stories: आज का batch, छोटा tip, poll'], ['1–2', 'Reels: 20–30 sec के tips'], ['1', 'Google Profile post']]), fix: ['सुझाव', 'लगातार रहना, रोज़ भरना नहीं'] },
    { h: 'हफ़्ते का <span class="blue">content calendar</span>', sub: 'चार दिन feed, रोज़ Stories — बस इसे दोहराइए।', art: A.week([['सोम', 'Trainer का 30 sec tip (Reel)'], ['बुध', 'Equipment tour / असली photos'], ['शुक्र', 'Myth vs Fact + batch timing'], ['रवि', 'Member story (लिखित permission से) / poll'], ['रोज़', 'Stories: आज का batch, छोटा tip']]) },
    { h: 'Enquiry से <span class="blue">trial</span> तक, WhatsApp पर', sub: 'Quick reply से timing, facilities और trial slot बताएँ।', art: A.phoneSide(A.chat([['in', 'Gym timing aur membership ke baare mein batayein'], ['out', 'Namaste! Timing aur facilities bhej rahe hain. Trial ke liye slot batayein'], ['in', 'Kal shaam ka slot?']]), [{ icon: 'bolt', t: 'Quick reply' }, { icon: 'cal', t: 'Trial slot' }, { icon: 'repeat', t: 'Follow-up' }]) },
    { h: 'Local <span class="blue">ads</span> छोटे से शुरू करें', sub: 'आस-पास के लोग, एक साफ़ message और एक WhatsApp button।', art: A.cards([{ icon: 'target', t: 'Location + उम्र', s: 'आस-पास के लोग' }, { icon: 'mega', t: 'Ad', s: 'एक साफ़ message' }, { icon: 'wa', t: 'WhatsApp', s: 'trial की बात' }]), fix: ['ध्यान', 'Body shaming या “guaranteed result” वाली बात नहीं'] },
    { h: '<span class="mk">30 दिन</span> का plan', sub: '', art: A.timeline([{ h: 'हफ़्ता 1', items: ['Google Profile पूरा', 'असली photos'] }, { h: 'हफ़्ता 2', items: ['WhatsApp quick reply', 'हफ़्ते का rhythm शुरू'] }, { h: 'हफ़्ता 3', items: ['छोटा ad test', 'Trial slot booking'] }, { h: 'हफ़्ता 4', items: ['Follow-up + renewal', 'Review और सुधार'] }]) },
    { cta: true, h: 'अपने gym में enquiry <span class="blue">बढ़ानी है?</span>', recap: [{ icon: 'pin', t: 'Google Profile पूरा', s: 'timing, photos, location' }, { icon: 'wa', t: 'WhatsApp पर trial booking', s: 'quick reply तैयार' }, { icon: 'repeat', t: 'Follow-up + renewal', s: 'enquiry छूटे नहीं' }], ask: 'Namaste, mujhe apne gym ka 30 din ka plan chahiye', reply: 'Namaste! Bataiye, aapka gym kahan hai?', csub: 'अपने gym का plan बनवाने के लिए सीधे WhatsApp पर पूछिए।', share: 'Gym वाले दोस्त को भेजें' },
  ],
  ig: `रोज़ post करते हैं, फिर भी gym में enquiry नहीं आती? 💪 रोज़ post ज़रूरी नहीं — सही plan ज़रूरी है।

Gym के लिए 30 दिन का सीधा plan:
1️⃣ Google Profile पूरा — timing, असली photos, location
2️⃣ हफ़्ते का rhythm: 3–4 feed posts + रोज़ Stories + 1–2 Reels
3️⃣ WhatsApp पर trial slot booking (quick reply)
4️⃣ आस-पास के लोगों के लिए छोटा ad test
5️⃣ Follow-up और renewal reminder

Member की photo/story सिर्फ़ लिखित permission से। कोई “guaranteed result” वाला दावा नहीं।

अपने gym का plan बनवाना है? WhatsApp करें 📲 79742 17411

Save करें, और gym वाले दोस्त को भेजिए।

#SmallBusinessIndia #DigitalMarketingIndia #GymMarketing #LocalSEO #FitnessBusiness`,
  fb: `रोज़ post करते हैं, फिर भी gym में enquiry नहीं? 💪 (swipe करें)

रोज़ post ज़रूरी नहीं — सही plan ज़रूरी है:
✅ Google Profile पूरा
✅ हफ़्ते का rhythm: 3–4 posts + रोज़ Stories
✅ WhatsApp पर trial booking
✅ छोटा local ad test
✅ Follow-up और renewal

अपने gym का plan बनवाने के लिए: ${wa('FB-C06')}

#SmallBusinessIndia #GymMarketing`,
  gbp: 'Gym में enquiry बढ़ाने के लिए रोज़ post करना ज़रूरी नहीं। Google Business Profile में timing और असली photos रखें, हफ़्ते का एक सरल content rhythm बनाएँ, WhatsApp पर trial slot दें और renewal की याद दिलाएँ। Sagar (MP) की FutureTech Digital Marketing Agency gym और fitness studio के लिए 30 दिन का plan बनाने में मदद करती है।',
  altTopics: ['रोज़ post karte hain phir bhi enquiry nahi: gym plan cover', 'Likes se membership nahi milti', 'Gym ka Google Profile', 'Hafte ka sahi rhythm', 'Hafte ka content calendar', 'WhatsApp par trial booking', 'Local ads chhote se shuru', '30 din ka plan', 'WhatsApp 79742 17411'],
  altGbp: 'FutureTech graphic in Hindi: gym mein roz post nahi, sahi plan zaroori.',
};

const coaching = {
  id: 'coaching-plan', kind: 'carousel', date: '2026-12-01', time: '14:00', slug: 'Coaching_College_Admission_Plan', lead: 'C07', utm: 'c07', series: 'COACHING & COLLEGE',
  title: 'CAROUSEL — Coaching/College admission enquiry plan (8 slides)', gbpH: 'Admission enquiry <span class="mk">बढ़ाने</span> का plan',
  slides: [
    { aud: 'Coaching & College के लिए', h: 'Admission enquiry <span class="mk">बढ़ाने</span> का plan', sub: 'Website, Google और WhatsApp से — step by step', art: A.hub(A.hubCenter('browser'), [{ icon: 'grad', l: 'Results', l2: 'दिखाएँ' }, { icon: 'pin', l: 'Google पर', l2: 'दिखें' }, { icon: 'wa', l: 'WhatsApp', l2: 'enquiry' }, { icon: 'users', l: 'Parents का', l2: 'भरोसा' }]), raw: true, fix: ['30 दिन', 'का सीधा plan'] },
    { h: 'Admission से पहले <span class="blue">parents</span> क्या देखते हैं', sub: 'सही जानकारी जल्दी मिले तो फ़ैसला आसान होता है।', art: A.checklist([{ icon: 'book', t: 'Courses और syllabus' }, { icon: 'clock', t: 'Batch timing' }, { icon: 'money', t: 'Fees की साफ़ जानकारी' }, { icon: 'users', t: 'Faculty का परिचय' }, { icon: 'grad', t: 'Results / success stories' }]) },
    { h: 'Results और <span class="blue">case study</span> कैसे दिखाएँ', sub: 'असली student की लिखित permission से — course और असली result।', art: A.phoneSide(`<div style="font-family:Mukta;font-weight:800;font-size:30px;color:#0060A8">Success story</div><div style="display:flex;gap:14px;align-items:center;margin:14px 0"><div style="width:70px;height:70px;border-radius:50%;background:#DDE3EC"></div><div style="flex:1"><div class="ln k" style="width:70%"></div><div class="ln" style="width:50%"></div></div></div><div class="ln"></div><div class="ln" style="width:80%"></div><div style="margin-top:12px;font-size:19px;color:#5F6B7A">Student की permission के साथ</div>`, [{ icon: 'shield', t: 'लिखित permission' }, { icon: 'doc', t: 'असली result' }, { icon: 'img', t: 'Photo permission से' }]) },
    { h: 'Website पर <span class="blue">FAQ</span> रखें', sub: 'Parents के सवाल पहले ही हल — enquiry से पहले का भरोसा।', art: A.scorecard(['Fees और payment का तरीक़ा क्या है?', 'कौन सा batch कब से शुरू होगा?', 'Faculty कौन हैं?', 'Results और success stories कहाँ देखें?', 'Counselling / demo का समय कैसे लें?'], { mark: '?' }) },
    { h: '“Coaching near me” में <span class="blue">आप</span>', sub: 'Google Business Profile और हर course का अलग page।', art: A.serp('coaching near me', [{ u: 'aapkainstitute.in', t: 'Aapka Institute – Courses, Batch, Contact', p: 'Courses, batch timing और enquiry का तरीका।' }, { u: 'dusra-institute.in', t: 'Dusra Institute', p: '…' }]) },
    { h: 'Social media पर <span class="blue">क्या</span> post करें', sub: 'Parents और students दोनों के लिए काम की चीज़ें।', art: A.checklist([{ icon: 'video', t: 'Concept / doubt का 30 sec video' }, { icon: 'cal', t: 'Batch और admission की तारीख़' }, { icon: 'img', t: 'Class और campus की असली photos' }, { icon: 'book', t: 'Study tip' }]) },
    { h: 'Enquiry से <span class="blue">counselling</span> तक, WhatsApp पर', sub: 'फ़ीस और batch की जानकारी भेजें, counselling का समय तय करें।', art: A.phoneSide(A.chat([['in', 'Fees aur batch ki jaankari chahiye'], ['out', 'Namaste! Details bhej rahe hain. Counselling ka time batayein'], ['in', 'Kal 5 baje?']]), [{ icon: 'doc', t: 'Brochure' }, { icon: 'cal', t: 'Counselling slot' }, { icon: 'repeat', t: 'Follow-up' }]) },
    { h: '<span class="mk">30 दिन</span> का plan', sub: '', art: A.timeline([{ h: 'हफ़्ता 1', items: ['Website / Profile ठीक', 'Fees-batch साफ़'] }, { h: 'हफ़्ता 2-3', items: ['Content + WhatsApp reply', 'Result story (permission से)'] }, { h: 'हफ़्ता 4', items: ['छोटा ad test', 'Enquiry का review'] }]) },
    { cta: true, h: 'Admission enquiry <span class="blue">बढ़ानी है?</span>', recap: [{ icon: 'book', t: 'Fees, batch, results साफ़', s: 'parents को जवाब पहले' }, { icon: 'pin', t: 'Google पर दिखें', s: 'Profile + course pages' }, { icon: 'wa', t: 'WhatsApp पर counselling', s: 'जल्दी जवाब, follow-up' }], ask: 'Namaste, mujhe apne institute ka admission plan chahiye', reply: 'Namaste! Bataiye, aapka institute kahan hai?', csub: 'अपने institute का plan बनवाने के लिए सीधे WhatsApp पर पूछिए।', share: 'Coaching / College वाले को भेजें' },
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
  gbp: 'Coaching और college में admission enquiry बढ़ाने के लिए fees, batch और results साफ़ दिखाएँ, Google Profile पूरा रखें और WhatsApp पर counselling slot दें। Results सिर्फ़ student की लिखित permission से। Sagar (MP) की FutureTech Digital Marketing Agency आपके institute का plan बनाने में मदद करती है।',
  altTopics: ['Admission enquiry plan', 'Parents kya dekhte hain', 'Results aur case study permission se', 'Website par FAQ', 'Coaching near me search', 'Social media content', 'WhatsApp counselling', '30 din ka plan', 'WhatsApp 79742 17411'],
  altGbp: 'FutureTech graphic in Hindi: coaching aur college ke liye admission enquiry plan.',
};

const clinic = {
  id: 'clinic-plan', kind: 'carousel', date: '2026-12-08', time: '14:00', slug: 'Clinic_Doctor_Online_Presence', lead: 'C08', utm: 'c08', series: 'CLINIC & DOCTOR',
  title: 'CAROUSEL — Clinic/Doctor online presence (8 slides, medical ad rules)', gbpH: 'Clinic की <span class="mk">online presence</span> कैसे बनाएँ',
  slides: [
    { aud: 'Clinic & Doctor के लिए', h: 'Clinic की <span class="mk">online presence</span> कैसे बनाएँ', sub: 'Patient को सही जानकारी और appointment का आसान रास्ता', art: A.hub(A.hubCenter('pin'), [{ icon: 'pin', l: 'Google Maps', l2: 'पर clinic' }, { icon: 'clock', l: 'सही', l2: 'timing' }, { icon: 'cal', l: 'Appointment', l2: 'आसान' }, { icon: 'shield', l: 'भरोसेमंद', l2: 'जानकारी' }]), raw: true, fix: ['नियम', 'के अंदर, सही और साफ़ जानकारी'] },
    { h: 'Patient सबसे पहले <span class="blue">क्या</span> खोजता है', sub: 'इलाज का दावा नहीं — सही और साफ़ जानकारी।', art: A.checklist([{ icon: 'pin', t: 'Clinic कहाँ है' }, { icon: 'clock', t: 'Timing और छुट्टी' }, { icon: 'steth', t: 'Doctor की असली qualification' }, { icon: 'phone', t: 'Appointment कैसे लें' }]) },
    { h: 'Maps पर patient को <span class="blue">क्या दिखे</span>', sub: 'Address, timing और असली photos अपडेट रखें।', art: A.phoneSide(A.kp('Aapka Clinic', 'Clinic · Open', [['pin', 'Main Road, आपका शहर'], ['clock', 'सुबह 10 – शाम 7']]), [{ icon: 'pin', t: 'सही address / map' }, { icon: 'clock', t: 'Timing अपडेट' }, { icon: 'img', t: 'Clinic की असली photos' }]) },
    { h: 'अपने clinic का <span class="blue">Google Profile</span> जाँचें', sub: 'हर एक पर ✓ लगाइए।', art: A.scorecard(['नाम सिर्फ़ असली clinic का नाम', 'Address और map pin सही', 'Timing और छुट्टी की जानकारी', 'Clinic की असली photos', 'Appointment का तरीका लिखा है']) },
    { h: 'Website पर <span class="blue">क्या</span> हो', sub: 'सरल, साफ़ और भरोसेमंद।', art: A.checklist([{ icon: 'doc', t: 'Services की जानकारी' }, { icon: 'users', t: 'Doctor का परिचय' }, { icon: 'cal', t: 'Appointment button' }, { icon: 'shield', t: 'Privacy policy' }]) },
    { h: 'WhatsApp पर <span class="blue">appointment</span>', sub: 'Slot बताएँ, reminder भेजें। Personal जानकारी उतनी ही माँगें जितनी ज़रूरी हो।', art: A.phoneSide(A.chat([['in', 'Appointment ke liye kal ka time?'], ['out', 'Namaste! Kal subah ka slot khaali hai. Naam aur number bhejein'], ['in', '11 baje ka slot']]), [{ icon: 'cal', t: 'Slot बताएँ' }, { icon: 'bell', t: 'Reminder' }, { icon: 'shield', t: 'Privacy का ध्यान' }]) },
    { h: 'Content में <span class="blue">क्या करें</span>, क्या नहीं', sub: 'Health से जुड़े नियम गंभीर हैं — सावधान रहें।', art: A.compare({ h: 'क्या न करें', rows: ['“Best doctor” जैसे दावे', 'इलाज की guarantee', 'Patient की photo / report बिना permission'] }, { h: 'क्या करें', rows: ['सामान्य health जानकारी', 'Timing और सुविधाएँ', 'Patient की लिखित permission'] }) },
    { h: '<span class="mk">30 दिन</span> का plan', sub: '', art: A.timeline([{ h: 'हफ़्ता 1', items: ['Google Profile ठीक', 'Timing और address'] }, { h: 'हफ़्ता 2-3', items: ['Website की जानकारी', 'WhatsApp appointment flow'] }, { h: 'हफ़्ता 4', items: ['Content (नियम के अंदर)', 'Review और सुधार'] }]) },
    { cta: true, h: 'Clinic की presence <span class="blue">सुधारनी है?</span>', recap: [{ icon: 'pin', t: 'Google Profile सही', s: 'address, timing, photos' }, { icon: 'cal', t: 'Appointment आसान', s: 'WhatsApp पर slot' }, { icon: 'shield', t: 'नियम के अंदर content', s: 'कोई दावा या guarantee नहीं' }], ask: 'Namaste, mujhe apne clinic ki online presence ke baare mein poochna hai', reply: 'Namaste! Bataiye, aapka clinic kahan hai?', csub: 'अपने clinic की online presence के लिए सीधे WhatsApp पर पूछिए।', share: 'Doctor / Clinic वाले को भेजें' },
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
  gbp: 'Clinic की online presence के लिए Google Profile में सही address, timing और असली photos रखें, website पर साफ़ जानकारी दें और WhatsApp पर appointment slot बताएँ। Content नियमों के अंदर रखें। Sagar (MP) की FutureTech Digital Marketing Agency clinic और doctors के लिए plan बनाने में मदद करती है।',
  altTopics: ['Clinic online presence', 'Patient kya khojta hai', 'Clinic ka Google Profile', 'Google Profile jaanch', 'Website par kya ho', 'WhatsApp appointment', 'Content mein kya karein kya nahi', '30 din ka plan', 'WhatsApp 79742 17411'],
  altGbp: 'FutureTech graphic in Hindi: clinic ki online presence kaise banayein.',
};

const webapp = {
  id: 'webapp-plan', kind: 'carousel', date: '2026-11-17', time: '14:00', slug: 'WebApp_Excel_WhatsApp_Business', lead: 'C09', utm: 'c09', series: 'WEB APP',
  title: 'CAROUSEL — Excel + WhatsApp se business manage? Web app (8 slides)', gbpH: 'अभी भी <span class="mk">Excel और WhatsApp</span> पर business manage करते हैं?',
  slides: [
    { aud: 'हर छोटे business के लिए', h: 'अभी भी <span class="mk">Excel और WhatsApp</span> पर business manage करते हैं?', sub: 'Orders, हिसाब और customers — एक जगह कैसे?', art: A.hub(A.hubCenter('chat'), [{ icon: 'list', l: 'Orders चैट', l2: 'में बिखरे' }, { icon: 'bell', l: 'Payment', l2: 'याद नहीं' }, { icon: 'doc', l: 'हिसाब', l2: 'Excel में' }, { icon: 'users', l: 'Customer', l2: 'की list' }]), raw: true, fix: ['सवाल', 'आपका सबसे ज़्यादा समय कहाँ जाता है?'] },
    { h: 'Orders चैट में <span class="blue">बिखर</span> जाते हैं', sub: 'WhatsApp में order ढूँढना, फिर Excel में लिखना — दोहरा काम।', art: A.phoneSide(A.chat([['in', 'Bhaiya 2 box bhej dena'], ['out', 'Ji, kal tak bhej denge'], ['in', 'Pichle hafte wala order kaunsa tha?']]), [{ icon: 'search', t: 'Order ढूँढना' }, { icon: 'clock', t: 'समय बर्बाद' }, { icon: 'repeat', t: 'दोहरा काम' }]) },
    { h: 'ये <span class="blue">5 सवाल</span> ख़ुद से पूछिए', sub: 'जवाब ढूँढने में समय लगे, तो system की ज़रूरत हो सकती है।', art: A.scorecard(['किस customer का कितना payment बाकी है?', 'आज कौन सा order भेजना है?', 'कौन सा stock कम हो रहा है?', 'इस महीने का हिसाब कहाँ है?', 'पुराने customer की history मिलती है?'], { mark: '?' }) },
    { h: '<span class="blue">Web app</span> क्या है?', sub: '', art: A.concept('Web App', 'आपके business का अपना software — phone या computer के browser में खुलता है।', 'जैसे: <b>orders, billing, stock और customers</b> — सब एक जगह।', 'globe') },
    { h: 'Web app में <span class="blue">क्या-क्या</span> हो सकता है', sub: 'ज़रूरत के हिसाब से modules चुने जाते हैं।', art: A.hubRing('आपका', 'Web App', [{ icon: 'list', l: 'Orders का', l2: 'record' }, { icon: 'users', l: 'Customer', l2: 'list' }, { icon: 'doc', l: 'Bill /', l2: 'Invoice' }, { icon: 'bell', l: 'Payment', l2: 'reminder' }, { icon: 'store', l: 'Stock की', l2: 'जानकारी' }, { icon: 'user', l: 'Staff और', l2: 'काम' }, { icon: 'trend', l: 'Reports' }, { icon: 'wa', l: 'WhatsApp', l2: 'updates' }]), raw: true },
    { h: 'किन <span class="blue">business</span> को ज़रूरत हो सकती है', sub: 'जहाँ रोज़ orders, payment और customers का हिसाब रखना पड़ता है।', art: A.checklist([{ icon: 'store', t: 'दुकान / Retail / Wholesale' }, { icon: 'cut', t: 'Salon / Parlour' }, { icon: 'grad', t: 'Coaching / Institute' }, { icon: 'call', t: 'Service / Repair' }]) },
    { h: 'शुरुआत <span class="blue">कैसे</span> करें', sub: 'सब कुछ एक साथ नहीं — छोटे से शुरू करें।', art: A.cards([{ icon: 'list', t: 'सबसे बड़ी परेशानी', s: 'लिखकर रखें' }, { icon: 'check', t: 'ज़रूरी modules', s: 'सिर्फ़ वही चुनें' }, { icon: 'bolt', t: 'छोटे से शुरू', s: 'फिर बढ़ाएँ' }]) },
    { cta: true, h: 'अपने business का हिसाब <span class="blue">एक जगह</span> लाना है?', recap: [{ icon: 'list', t: 'Orders और customers' }, { icon: 'bell', t: 'Payment reminder' }, { icon: 'trend', t: 'Reports' }], ask: 'Namaste, mujhe apne business ke liye web app ke baare mein poochna hai', reply: 'Namaste! Bataiye, aapka business kya hai?', share: 'Business वाले दोस्त को भेजें' },
  ],
  ig: `अभी भी Excel और WhatsApp पर business manage कर रहे हैं? 📊

Orders चैट में बिखरते हैं, payment याद नहीं रहता, हिसाब Excel में — दोहरा काम।

ख़ुद से पूछिए:
❓ किस customer का कितना payment बाकी है?
❓ आज कौन सा order भेजना है?
❓ कौन सा stock कम हो रहा है?

जवाब ढूँढने में समय लगे, तो web app की ज़रूरत हो सकती है — orders, billing, stock और customers एक जगह।

आपका सबसे ज़्यादा समय कहाँ जाता है? नीचे comment करें 👇
बात करनी है? WhatsApp करें 📲 79742 17411 | Save करें

#SmallBusinessIndia #DigitalMarketingIndia #WebApp #BusinessSoftware #BillingSoftware`,
  fb: `अभी भी Excel और WhatsApp पर business manage कर रहे हैं? 📊 (swipe करें)

❌ Orders चैट में बिखरे
❌ Payment याद नहीं
❌ हिसाब Excel में

✅ Web app: orders, billing, stock और customers एक जगह

आपका सबसे ज़्यादा समय कहाँ जाता है? बात करने के लिए: ${wa('FB-C09')}

#WebApp #SmallBusinessIndia`,
  gbp: 'Excel और WhatsApp पर business manage करने में orders बिखर जाते हैं और payment याद नहीं रहता। Web app में orders, billing, stock और customers एक जगह रहते हैं, ज़रूरत के हिसाब से modules के साथ। Sagar (MP) की FutureTech Digital Marketing Agency custom web app और billing software बनाती है।',
  altTopics: ['Excel aur WhatsApp par business manage cover', 'Orders chat mein bikhar jate hain', '5 sawal khud se poochhiye', 'Web app kya hai', 'Web app mein kya-kya ho sakta hai', 'Kin business ko zarurat ho sakti hai', 'Shuruaat kaise karein', 'WhatsApp 79742 17411'],
  altGbp: 'FutureTech graphic in Hindi: Excel aur WhatsApp ki jagah web app.',
};

module.exports = [webapp, website, gym, coaching, clinic];
