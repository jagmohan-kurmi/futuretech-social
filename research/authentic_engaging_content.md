# Authentic and engaging social content: research notes for FutureTech
Researched: 3 Nov 2026. Scope: Instagram, Facebook and Google Business Profile posts and Reels for Indian small businesses, in Hindi and Hinglish.

How to read the labels:
- **[OFFICIAL]** comes from Meta, Instagram, MeitY or ASCI, or from a direct quote by Mosseri.
- **[STUDY]** comes from a named dataset or survey, with its sample and date where I found them.
- **[SECONDARY]** is a figure reported by a news site or blog that I could not check against the original report.
- **[PRACTITIONER]** is a rule of thumb from industry blogs or creators, with no controlled data behind it.
- **[UNVERIFIED]** is a claim I could not confirm.

Do not put any number in client-facing material unless its source is listed here.

---

## PART 1: Why content "looks AI" and how to make it look human-made and trustworthy

### 1.1 Visual and audio tells linked to AI or generic content
Most of this is [PRACTITIONER] opinion from designers. I found no peer-reviewed audience study that ranks specific visual tells.
- **Colour and effects:** purple-to-blue or dark neon gradients (designers call this the most recognisable AI tell), glow, glassmorphism, floating particles or "bokeh dust", 3D blobs and chrome, and starbursts.
  - Sources: https://www.925studios.co/blog/ai-slop-design-tells ; https://github.com/Laith0003/ux-skill/wiki/How-to-detect-AI-slop-in-your-design ; https://www.superdesign.dev/blog/why-ai-design-looks-generic
  - Why it happens: models fall back on the statistically common look when left to their defaults.
- **Layout:** centred hero text with three cards, emoji used as icons, too-perfect symmetry, and the same template every time.
- **Image-generator artefacts** (general knowledge, widely reported): waxy, over-smooth skin; extra or merged fingers; garbled or fake text on signs and packaging; shop signs in Devanagari that are wrong or meaningless; generic "stock" scenes with no location; lighting that is too even.
- **Voice:** monotone text-to-speech, identical pauses after every sentence, mispronounced Hindi words, an American "explainer" tone on Hindi scripts, wall-to-wall stock music. [PRACTITIONER]
- **Copy clichés:** "In today's fast-paced world", "Unlock", "Elevate", "Game-changer", "Dive in", rows of emoji, and lines that could apply to any business anywhere. [PRACTITIONER]
- **Platform view [OFFICIAL]:** In his year-end post (around 31 Dec 2025), Mosseri said polish is now cheap and that creators will move toward "unproduced and unflattering imagery". He also expects AI to fake that imperfect look too, so authenticity ends up resting on who posts something and why.
  - https://www.storyboard18.com/digital/instagram-chief-warns-ai-generated-content-will-flood-feeds-flags-fingerprinting-of-real-media-86899.htm

### 1.2 What makes content feel authentic
- **Real people and places:** the owner or founder on camera; the real shop, team and work in progress; real customers, with written consent; local landmarks, the city name, local prices and festivals. This matches Mosseri's view that the bar is rising toward work only one specific person could make (same source as above).
- **Proof over claims:** real screenshots (Google Business Profile insights, inquiry counts, before/after rankings) with personal data blurred and dates visible. This is also what ASCI's ban on unverifiable claims requires.
- **Human marks:** handwritten notes, arrows and circles on screenshots, sticky-note style callouts, phone-shot B-roll, natural room sound.
- **Design system:** 2 brand colours plus neutrals, 1 to 2 fonts, a consistent cover layout, flat or editorial design, real photos instead of AI illustration. Designers suggest the same fixes: brand tokens, distinctive type, real product images (925studios source above).
- **Platform originality rules [OFFICIAL], which also improve reach:**
  - **Instagram, 30 Apr 2026:** accounts that mostly repost other people's content, now including photos and carousels, are no longer eligible for recommendations. Edits only count as original if they add something, such as commentary, unique text, creative editing or voiceover. A watermark, a speed change, or a screenshot with credit does not count.
    - https://techcrunch.com/2026/04/30/instagram-restricts-reach-of-content-aggregators-in-new-crackdown/
    - A 30-day assessment window is mentioned in secondary coverage only, so treat it as [SECONDARY]: https://petapixel.com/2026/04/30/new-instagram-policies-target-reposted-content/
  - **Facebook, 14 Jul 2025:** Pages get the most distribution when their content is mostly original. Duplicate copies get less distribution. Repeat offenders lose monetisation and reach. Meta's caption advice: no links, sparing capitals, fewer than 5 hashtags.
    - https://creators.facebook.com/blog/combating-unoriginal-content
  - **Instagram Reels:** the Help Center says Instagram shows fewer Reels that are muted, blurry or low-resolution, have borders, logos or watermarks, or are mostly covered by text. It favours vertical video with library music or original audio.
    - https://help.instagram.com/1525585517644948 (the page did not render for me, so this wording comes via secondary coverage; the 2021 rule is confirmed at https://tubefilter.com/2021/02/10/instagram-reels-with-tiktok-watermark-less-discoverable/)
    - Practical point: do not cover the whole Reel frame with text. Keep text to the safe zone.

### 1.3 Hindi typography done right
Source: https://www.alphabettes.org/devanagari-typography-101-a-guide-for-typesetting-with-latin/
- Use a font family that supports both Devanagari and Latin (for example Mukta, Hind, Noto Sans Devanagari, Baloo 2, Tiro Devanagari Hindi; these are Google Fonts, but I did not check them individually). Match the Latin x-height to the shirorekha (headline) height.
- Give Devanagari more line spacing than Latin, and set it by hand. Check that upper matras do not collide with the line above and that ukar and lower matras are not cut off.
- Do not track or justify Devanagari headlines: it breaks the shirorekha and detaches matras. Use ragged alignment and no hyphenation.
- Devanagari has no capitals, so build hierarchy with size and weight. Do not pair it with ALL-CAPS English, which looks heavy.
- Paste text from a Unicode source. Wrong input order, or apps without Indic shaping, cause broken "dotted circle" matras and reordered i-matras. Check every export at 100% zoom.
- Get a native-speaker proofread for every graphic.
- Hinglish in Roman script: choose one spelling style and stick to it (for example "aapka", not mixing in "apka").

### 1.4 Natural voiceover tips [PRACTITIONER]
- Prefer the owner or staff voice recorded on a phone in a quiet room, with a lapel mic if possible. Write the script as speech, in short spoken Hinglish, not translated English.
- Read it aloud before recording. Leave the natural "dekhiye", "toh" and pauses in. Do not remove every breath.
- If you use AI text-to-speech, ASCI's 2026 guidelines may require a label when the synthetic voice materially affects a consumer decision (for example a cloned real person). See 1.6.

### 1.5 Data on audience trust in AI content
- **Ipsos AI Monitor 2025 [STUDY]:** 30 countries; fieldwork 21 Mar to 4 Apr 2025; India n≈2,200.
  - Trust in AI-made images or video for advertising: India 44%, global 30%.
  - For video ads, 47% of Indians prefer human-made and 40% prefer AI.
  - 67% of Indians (79% globally) expect companies to disclose AI use.
  - https://agencyreporter.com/trust-and-transparency-emerge-key-cornerstones-of-ai-usage-among-indians-ipsos-ai-monitor-2025/
  - Takeaway: Indians are more accepting of AI than the global average, but they still lean toward human-made ads and expect disclosure.
- **Raptive, Jul 2025 [SECONDARY]:** 3,000 US adults. When people believed content was AI-made, they also rated nearby ads as less trustworthy, whether or not the content really was AI. https://ppc.land/raptive-study-shows-ai-content-cuts-reader-trust-by-half/
- **NIM "Transparency Without Trust" [STUDY]:** experiments in the US, UK and Germany. Ads labelled "AI-generated" were rated less natural and less useful, and people were less willing to engage, than with identical ads labelled human-made. https://www.nim.org/publikationen/detail/transparency-without-trust
- **Gartner, Oct 2025 [SECONDARY]:** 1,539 US consumers. About half would prefer brands avoid generative AI in ads, and 68% doubt content authenticity. https://letsdatascience.com/news/us-consumers-reject-genai-in-brand-marketing-346b1a86
- **Sprout Social [SECONDARY]:**
  - 2025 Index: 52% of consumers in the US, UK and Australia worry about brands posting undisclosed AI content. https://www.emarketer.com/content/ai-transparency--data-privacy-top-consumers--concerns-brands-on-social-media
  - Q1 2026 Pulse: unlabelled AI content is the No. 1 brand turn-off, at 28%. https://www.emarketer.com/content/hiding-ai-use-brands--biggest-social-media-sin (the page returned 403 for me)
- **Yahoo/Publicis, Feb 2024 [SECONDARY], which points the other way:** when people noticed an AI disclosure, ad trust rose. https://www.advanced-television.com/2024/02/29/survey-ai-ad-disclosure-increases-consumer-trust/
- **Overall reading:** hiding AI use is the worst option. A visible AI look lowers trust even when labelled. Real, human-made content avoids the problem.

### 1.6 Labelling rules (Meta and India)
- **Meta ads [OFFICIAL]:**
  - An "AI info" label is applied to ads that were made or significantly edited with Meta's generative AI tools. Meta also detects third-party AI tools through industry signals such as C2PA metadata.
  - A photorealistic AI human puts the label next to "Sponsored".
  - Since 1 Jun 2026, the labels appear in a unified "About this ad" menu.
  - https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/
- **Organic posts:** Meta applies "AI info" labels to organic content detected as AI or declared by the creator. Details here are general knowledge; I did not re-verify the current Help Center wording.
- **India, IT Rules amendment 2026 [OFFICIAL]:**
  - Notified 10 Feb 2026, in force 20 Feb 2026.
  - Synthetic audio, visual or audio-visual content must be labelled prominently. Large platforms must collect a user declaration before publishing. Text-only content is outside the definition.
  - https://www.hoganlovells.com/en/publications/india-introduces-mandatory-labelling-for-ai-and-3hour-takedown-for-illegal-content ; https://www.businesstoday.in/amp/technology/story/govt-tightens-rules-on-ai-generated-content-mandates-labels-and-faster-takedowns-515505-2026-02-10
  - In practice, use the platform's "AI label" toggle on Reels and posts that contain synthetic visuals or audio.
- **ASCI Guidelines for Responsible Labelling of Synthetically Generated Content in Advertising [OFFICIAL, via law-firm summary]:**
  - Issued 29 Sep 2026, effective about 3 months later (around late Dec 2026).
  - **Label required:** synthetic influencers or ambassadors; use of a real person's likeness or voice; fabricated events or settings that affect understanding of a product; demos of products that do not exist; AI sound effects tied to a product's core features. Sponsored AI recommendations must say "Sponsored by [Brand]".
  - **No label needed:** routine edits, decorative elements, obvious fantasy, AI-written ad copy, subtitles and translations.
  - **Prohibited even with a label:** fake endorsements, deepfakes or likeness use without consent, and showing non-existent locations as real.
  - **Example labels:** "Video created using AI" and "Video enhanced using AI".
  - https://foxmandal.in/news/asci-issues-guidelines-for-labelling-of-ai-content-in-advertising/
  - The dates rest on one law-firm source, so check against ascionline.in.
  - For small businesses, the biggest risk is an AI-generated "customer", "shop" or "team member" presented as real. Do not do this.

---

## PART 2: What drives engagement (saves, sends, comments, watch time) in 2025–26

### 2.1 Official Instagram and Meta signals
- **Mosseri, 22 Jan 2025 [OFFICIAL quote]:**
  - "The top three signals that matter most for ranking are watch time, likes and sends."
  - Likes matter slightly more for followers ("connected" content); sends matter slightly more for non-followers ("unconnected").
  - Track average watch time, likes per reach, and sends per reach.
  - https://www.socialmediatoday.com/news/instagram-shares-algorithm-insights-2025/738034/
- **Mosseri, 2024 [OFFICIAL quote via SEJ]:** "One of the most important signals we use in ranking is sends per reach." It is a rate, not a count. https://searchenginejournal.com/instagram-algorithm-shift-why-sends-matter-more-than-ever/521389
- **Five-signal update [UNVERIFIED]:** reports of a "five-signal" update (31 Dec 2025) did not hold up.
- **Trial Reels [OFFICIAL feature, Dec 2024]:**
  - A Reel goes to non-followers first, with metrics after about 24 hours.
  - You can share it to followers manually, or auto-share it if it performs well within 72 hours.
  - Use it to test hooks and formats without hurting the main grid.
  - https://techcrunch.com/2024/12/10/instagram-rolls-out-trial-reels-that-arent-shown-to-a-creators-followers ; https://www.engadget.com/social-media/instagram-will-let-video-creators-make-trial-reels-for-non-followers-160016725.html
- **Reel length:** up to 3 minutes since Jan 2025 [OFFICIAL]. Instagram has published no "ideal" length. https://www.businesstoday.in/technology/news/story/instagram-head-announces-big-changes-3-minute-reels-and-new-look-for-profile-grid-461527-2025-01-21
- **Business accounts and music [SECONDARY, partly OFFICIAL]:**
  - Business accounts are limited to Meta Sound Collection (royalty-free, commercial use, Meta platforms only). Trending licensed songs risk muted or blocked posts.
  - So for business accounts, original voiceover plus Sound Collection beats chasing trending audio.
  - https://www.soundstripe.com/blogs/instagram-music-library ; https://www.osborneclarke.com/insights/use-music-social-media-platforms-what-businesses-and-creators-need-know-about-usage

### 2.2 Engagement bait rules (must respect)
- **Meta Transparency Center [OFFICIAL]:**
  - Engagement bait is a post that openly asks for votes, reactions, shares, comments or tags for reasons other than a genuine call to action. Examples: "Comment YES", "Tag 3 friends", "Share if you agree", "Like for A, love for B".
  - Feed distribution is reduced, and repeat offenders get Page-level demotion.
  - Genuine requests for help, advice or recommendations are exempt.
  - https://transparency.meta.com/en-gb/features/approach-to-ranking/content-distribution-guidelines/engagement-bait ; https://transparency.meta.com/enforcement/taking-action/repeatedly-posting-low-quality-content/
- **Safer prompts (these ask for genuine input, not a token reply):**
  - "Aapke area mein customers sabse zyada kaunsa sawaal poochte hain? Comment mein likhiye, agla post usi par banayenge."
  - "Kaunsa step aapko sabse mushkil lagta hai: 1) photos 2) reviews 3) posts? Apna experience batayiye."
  - Share prompt with a specific reason: "Jo dost naya shop khol raha hai, usko ye checklist bhej dijiye." This sits in a grey zone. Keep it occasional, specific and tied to real value; do not use it as a generic "share this".
- Avoid "Comment 'GUIDE' and I'll DM you" keyword prompts on Facebook. They fit Meta's "comment baiting" definition. They are common on Instagram, but treat them as a risk. [PRACTITIONER]

### 2.3 Format data (cite with care; benchmarks conflict)
- **Socialinsider [STUDY]:** about 67.5M posts from about 579k business accounts.
  - Engagement by followers in 2025: carousels 0.55%, Reels 0.52%, images 0.37%, overall 0.48%.
  - Q3 2026: carousels 0.50%, Reels 0.48%, images 0.35%.
  - Average Reels per month went from 6 to 8.
  - The page has internal inconsistencies, so cite it carefully.
  - https://www.socialinsider.io/instagram-engagement-report-2025/
- **Buffer [STUDY]:**
  - 4M+ posts, Jan 2022 to Oct 2024: Reels get 1.36x the reach of carousels and 2.25x that of images. Carousels get 1.12x the engagement of Reels and 2.14x that of images. https://buffer.com/resources/instagram-reach-engagement-analysis/
  - 2026 report, 52M+ posts: median engagement by reach was carousels 6.90%, images 4.44%, Reels 3.31%. https://buffer.com/resources/state-of-social-media-engagement-2026/
- **Metricool 2026 [STUDY]:** 24.4M posts from 375k accounts. Carousels get 9x the saves of single images. Watch time per Reel more than doubled year on year. https://metricool.com/instagram-research-study/
- **Takeaway:** use Reels for reach and discovery, and carousels for engagement and saves. A weekly mix of both is the evidence-backed default.

### 2.4 Hooks, structure and pacing (mostly [PRACTITIONER])
- **Reel hook (0–3 s):** show the outcome or problem visually in frame 1, and put a text hook in the first 3 seconds, since many people watch muted. Common target is a 3-second hold of 60% or more [PRACTITIONER, not an Instagram threshold]. Test 2–3 hook variants of the same body, for example with Trial Reels.
  - https://www.opus.pro/blog/instagram-reels-hook-formulas ; https://www.inro.social/blog/instagram-reels-3-second-hook-leads
- **Hook formulas that suit service education, with no unverifiable claims:**
  - Mistake: "Google profile pe ye galti 90% shops karti hain". Avoid made-up percentages; say "zyada tar shops" instead.
  - Specific question: "Customer 'near me' search kare toh aapki dukaan kyun nahi dikhti?"
  - Proof-first: real screenshot plus "Ye change karne ke 30 din baad kya hua". Only with real data, dated, and with client consent.
  - Myth vs fact: "Myth: Zyada hashtags = zyada reach."
  - Local POV: "Indore ke salon owners, ye dekhiye".
- **Reel length:** start at 15–45 s for tips. Go longer only if retention holds. Most sources say 7–30 s gets the best completion, but this is [PRACTITIONER]. Cut every pause. Change the visual every 2–4 s (B-roll, zoom, screenshot) [PRACTITIONER].
- **Subtitles:** always burn in Hindi or Hinglish captions, or use auto-captions. Keep them big, high-contrast and inside the safe zone (away from the bottom roughly 20% and the right-side buttons). Do not cover most of the frame, per the Instagram guidance in 1.2.
- **Carousels:**
  - Cover slide: a promise or problem in 6 words or fewer, a real photo or bold type, and a number ("5 steps").
  - Slide 2: why it matters, or the payoff.
  - Slides 3 to N–1: one idea per slide.
  - Last slide: a summary checklist (the save trigger) plus a soft CTA.
  - Ideal count: vendor advice ranges from 5–10 slides (opinion; no rigorous study). The app allows up to 20; the API allows 10.
  - https://postnitro.ai/blog/post/instagram-carousel-limit-20-photos-per-post-guide
- **Caption first line:** the hook again, or a specific benefit. Then value, then one CTA. Under 5 relevant hashtags (Meta's Facebook guidance). Add the city name and service keywords, since Instagram search uses captions [PRACTITIONER].
- **Save-worthy formats:** checklists, step-by-step guides, templates ("WhatsApp reply template for inquiries"), myth vs fact, mistakes to avoid, real before/after with numbers (consented and dated), festival calendars.
- **Send-worthy formats:** "this is so you", relatable owner struggles, a useful tip for a friend's business, local humour, Hindi wordplay.
- **Series:** recurring named formats ("Monday Mistake", "GBP Tip #12"). They train the audience and simplify production [PRACTITIONER].
- **Consistency:** brands averaged about 8 Reels and 5 carousels a month in 2025 (Socialinsider, above). A sustainable cadence of 3–5 feed posts a week plus Stories is a common recommendation, but treat it as [PRACTITIONER].
- **Stories:** use polls, quizzes and question stickers for research ("Kaunsa topic next?"), FAQs, and behind-the-scenes. These are genuine interactive features, not bait. There is no strong 2025–26 data on sticker performance [UNVERIFIED].
- **Google Business Profile posts:** a real photo of the business or work, an offer or update, and a clear button (Call / WhatsApp / Book). Avoid AI people and AI shopfronts entirely: they confuse local customers and risk violating Google's misrepresentation policies (general knowledge; not re-verified here).

### 2.5 Hindi and Hinglish specifics
- No Meta or Instagram study isolating Hinglish engagement was found.
- **IIT Delhi [STUDY]:** about 260k X posts from about 17k users; 34%+ of users prefer Hinglish to connect with followers. This is about X, not Instagram. https://www.dtnext.in/lifestyle/wellbeing/hinglish-helps-users-engage-more-effectively-with-a-broader-audience-study-790290
- Claims that vernacular content gets "1.5–2x engagement" are [UNVERIFIED] blog figures. Do not cite them.
- **Practical:**
  - Spoken Hinglish voiceover.
  - On-screen text in Devanagari for Hindi-belt local audiences, or Roman Hinglish for urban and young audiences. Test both with Trial Reels.
  - Use English for technical terms people actually say ("Google Business Profile", "reviews", "SEO").
  - Use local references: city, mandi or market, festivals, Diwali/GST-season pain points.

---

## Flagged uncertainties
1. The Instagram Help Center page on Reels recommendations did not render. That guidance is confirmed only through secondary coverage and the 2021 announcement.
2. The ASCI final guidelines date (29 Sep 2026) and effective date come from one law-firm summary. Verify on ascionline.in.
3. The current wording of Meta's organic "AI info" labelling was not re-verified.
4. The Sprout, Gartner and Raptive figures are secondary. Socialinsider's page has internal inconsistencies.
5. All guidance on hook timing, Reel length, slide counts and posting cadence is practitioner opinion, not official guidance.
6. There is no rigorous data on Hinglish versus Hindi versus English performance on Instagram or Facebook in India.
7. Keyword-comment prompts ("Comment GUIDE") are a grey area under Meta's engagement-bait definition.
