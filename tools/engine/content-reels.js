// Reel scenes: one scene per voiceover line. Visuals come from the same engine (story 1080x1920).
const { A } = require('./lib');
const step = (n, t, s, icon) => A.concept(`Step ${n}`, t, s, icon);
module.exports = {
  'reel-1': { code: 'IG-R01', file: 'Reel_Website_Customer_Nahi', scenes: [
    { line: 'Website है, पर customer नहीं आ रहे? तीन बड़ी वजह देखिए।', slide: { h: 'Website है, पर <span class="blue">customer नहीं?</span>', sub: '3 बड़ी वजह', art: A.hub(A.hubCenter('browser'), [{ icon: 'search', l: 'Google पर', l2: 'नहीं दिखती' }, { icon: 'wa', l: 'Enquiry का', l2: 'रास्ता नहीं' }, { icon: 'shield', l: 'भरोसे की', l2: 'जानकारी कम' }, { icon: 'bolt', l: 'Phone पर', l2: 'धीमी' }]), raw: true } },
    { line: 'पहली वजह: Google पर आप दिखते ही नहीं।', slide: { chip: 'वजह 1', h: 'Google पर <span class="blue">दिखते नहीं</span>', art: A.serp('kirana store near me', [{ u: 'dusri-dukaan.in', t: 'Dusri Dukaan – Kirana Store', p: 'दूसरी दुकान सबसे ऊपर।' }, { u: 'teesri-dukaan.in', t: 'Teesri Dukaan', p: '…' }]) } },
    { line: 'दूसरी वजह: enquiry का रास्ता नहीं। WhatsApp या call का button रखिए।', slide: { chip: 'वजह 2', h: 'Enquiry का <span class="blue">रास्ता</span> नहीं', art: A.phoneSide(A.site('Aapki Kirana Store', 'Saman · Contact'), [{ icon: 'call', t: 'Call button' }, { icon: 'wa', t: 'WhatsApp button' }, { icon: 'pin', t: 'Directions' }]) } },
    { line: 'तीसरी वजह: भरोसे की जानकारी कम है। असली पता, timing और photos डालिए।', slide: { chip: 'वजह 3', h: 'भरोसे की <span class="blue">जानकारी</span> कम', art: A.checklist([{ icon: 'pin', t: 'असली पता और map' }, { icon: 'clock', t: 'Timing और छुट्टी' }, { icon: 'img', t: 'असली photos' }]) } },
    { line: 'इन तीनों को ठीक कीजिए, फिर website आपके लिए काम करना शुरू करती है।', slide: { chip: 'हल', h: 'ये <span class="blue">तीन</span> ठीक करें', art: A.cards([{ icon: 'search', t: 'Google पर' }, { icon: 'wa', t: 'WhatsApp' }, { icon: 'shield', t: 'भरोसा' }], false) } },
    { line: 'अपनी website जँचवानी है? FutureTech को WhatsApp कीजिए।', end: true },
  ] },
  'reel-2': { code: 'IG-R02', file: 'Reel_Website_Google_WhatsApp', scenes: [
    { line: 'Customer तक पहुँचने के तीन कदम।', slide: { h: 'Customer तक पहुँचने के <span class="blue">3 कदम</span>', art: A.hub(A.hubCenter('phone'), [{ icon: 'globe', l: 'Website', l2: 'आपका पता' }, { icon: 'search', l: 'Google', l2: 'पर दिखें' }, { icon: 'wa', l: 'WhatsApp', l2: 'पर बात' }, { icon: 'users', l: 'Customer', l2: 'पहुँचे' }]), raw: true } },
    { line: 'पहला कदम: Website। आपका पता, जहाँ पूरी जानकारी हो।', slide: { chip: 'कदम 1', h: '<span class="blue">Website</span>', sub: 'आपका पता — पूरी जानकारी एक जगह', art: A.phoneSide(A.site('Aapka Business', 'Services · Contact'), [{ icon: 'doc', t: 'Services' }, { icon: 'pin', t: 'पता और timing' }, { icon: 'img', t: 'असली photos' }]) } },
    { line: 'दूसरा कदम: Google Profile। जहाँ से लोग आपको खोज सकें।', slide: { chip: 'कदम 2', h: '<span class="blue">Google</span> Profile', sub: 'जहाँ से लोग आपको खोजते हैं', art: A.phoneSide(A.kp('Aapka Business', 'Business · Open', [['pin', 'Main Road, आपका शहर'], ['clock', 'सुबह 9 – रात 9']]), [{ icon: 'pin', t: 'Maps पर' }, { icon: 'clock', t: 'Timing' }, { icon: 'img', t: 'Photos' }]) } },
    { line: 'तीसरा कदम: WhatsApp। जहाँ बातचीत शुरू होती है।', slide: { chip: 'कदम 3', h: '<span class="blue">WhatsApp</span>', sub: 'जहाँ बातचीत शुरू होती है', art: A.phoneSide(A.chat([['in', 'Namaste, timing aur saman ki jaankari?'], ['out', 'Namaste! Details bhej rahe hain.']]), [{ icon: 'bolt', t: 'Quick reply' }, { icon: 'cal', t: 'Slot / order' }, { icon: 'repeat', t: 'Follow-up' }]) } },
    { line: 'तीनों जुड़े हों, तो customer का रास्ता आसान हो जाता है।', slide: { chip: 'जोड़ें', h: 'तीनों <span class="blue">जुड़े</span> हों', art: A.cards([{ icon: 'globe', t: 'Website' }, { icon: 'search', t: 'Google' }, { icon: 'wa', t: 'WhatsApp' }]) } },
    { line: 'अपना रास्ता बनवाना है? FutureTech को WhatsApp कीजिए।', end: true },
  ] },
  'reel-3': { code: 'IG-R03', file: 'Reel_Gym_Google_Profile', scenes: [
    { line: 'Gym का Google Profile, पाँच steps में।', slide: { h: 'Gym का <span class="blue">Google Profile</span>', sub: '5 steps में', art: A.hub(A.hubCenter('pin'), [{ icon: 'clock', l: 'Timing', l2: 'सही' }, { icon: 'img', l: 'असली', l2: 'photos' }, { icon: 'users', l: 'Trainers', l2: 'का परिचय' }, { icon: 'wa', l: 'WhatsApp', l2: 'link' }]), raw: true } },
    { line: 'पहला: असली नाम और सही category चुनिए।', slide: { chip: 'STEP 1', h: 'नाम और <span class="blue">category</span>', art: step(1, 'असली नाम और सही category चुनिए', 'नाम सिर्फ़ असली business का — keywords या tagline नहीं।', 'dumb') } },
    { line: 'दूसरा: सही address और map pin।', slide: { chip: 'STEP 2', h: 'Address और <span class="blue">map pin</span>', art: step(2, 'सही address और map pin', 'लोग रास्ता यहीं से देखते हैं।', 'pin') } },
    { line: 'तीसरा: timing और छुट्टी की जानकारी।', slide: { chip: 'STEP 3', h: 'Timing और <span class="blue">छुट्टी</span>', art: step(3, 'Timing और छुट्टी की जानकारी', 'त्योहार की timing भी अपडेट रखें।', 'clock') } },
    { line: 'चौथा: असली photos, equipment और जगह की।', slide: { chip: 'STEP 4', h: 'असली <span class="blue">photos</span>', art: step(4, 'Equipment और जगह की असली photos', 'Member की photo सिर्फ़ लिखित permission से।', 'img') } },
    { line: 'पाँचवाँ: services और WhatsApp या website का link।', slide: { chip: 'STEP 5', h: 'Services और <span class="blue">link</span>', art: step(5, 'Services और WhatsApp / website link', 'ताकि enquiry सीधे आ सके।', 'wa') } },
    { line: 'अपने gym का profile सेट करवाना है? FutureTech को WhatsApp कीजिए।', end: true },
  ] },
  'reel-4': { code: 'IG-R04', file: 'Reel_Landing_Page_ya_WhatsApp', scenes: [
    { line: 'Ad के बाद customer को कहाँ भेजें?', slide: { h: 'Ad के बाद customer को <span class="blue">कहाँ</span> भेजें?', art: A.compare({ h: 'सीधे WhatsApp', rows: ['पहले से जानने वाला customer', 'जल्दी बात शुरू'] }, { h: 'Landing page', rows: ['नया customer — पहले जानकारी', 'फिर WhatsApp button'] }) } },
    { line: 'नया customer पहले जानकारी चाहता है। उसे landing page पर भेजिए, जहाँ WhatsApp button हो।', slide: { chip: 'नया customer', h: '<span class="blue">Landing page</span> पर भेजें', art: A.phoneSide(A.site('Aapka Business', 'Services · Contact'), [{ icon: 'doc', t: 'पूरी जानकारी' }, { icon: 'wa', t: 'WhatsApp button' }, { icon: 'shield', t: 'भरोसा' }]) } },
    { line: 'जो आपको पहले से जानता है, उसे सीधे WhatsApp पर बात कराइए।', slide: { chip: 'जानने वाला', h: 'सीधे <span class="blue">WhatsApp</span> पर', art: A.phoneSide(A.chat([['in', 'Namaste, kal wala saman available hai?'], ['out', 'Haan ji! Aa jaiye ya bhejte hain.']]), [{ icon: 'bolt', t: 'तुरंत बात' }, { icon: 'repeat', t: 'Follow-up' }, { icon: 'cal', t: 'Slot / order' }]) } },
    { line: 'यह एक सामान्य नियम है। अपने customer के हिसाब से चुनिए।', slide: { chip: 'याद रखें', h: 'Customer के <span class="blue">हिसाब</span> से चुनें', art: A.cards([{ icon: 'users', t: 'नया', s: 'Landing page' }, { icon: 'wa', t: 'पुराना', s: 'सीधे WhatsApp' }], false) } },
    { line: 'Ads का सही plan चाहिए? FutureTech को WhatsApp कीजिए।', end: true },
  ] },
};
