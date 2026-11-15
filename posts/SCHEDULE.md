# Scheduled / published posts (IST)

| Date & time | Post | Platforms | Status |
|---|---|---|---|
| 2 Nov 2026, 9:09 PM | Diwali — Google par dukaan taiyaar hai? (static) | IG, FB, GBP | Published |
| 4 Nov 2026, 7:00 AM | Ads service Reel — Naya maal aa gaya, customer kab aayega? | IG (AI label on), FB | Scheduled |
| 4 Nov 2026, 2:00 PM | Diwali ke orders WhatsApp par — 3 aasaan tareeke | IG, FB, GBP | Scheduled |
| 5 Nov 2026, 2:00 PM | Google Business Profile kya hai? (8-slide carousel) | IG, FB, GBP | Scheduled |
| 6 Nov 2026, 8:00 AM | Shubh Dhanteras (greeting) | IG, FB, GBP | Scheduled |

Next in the 7-day plan: 7 Nov service post (website + WhatsApp order), 8 Nov Diwali greeting (8 AM), 9 Nov carousel "Diwali ke baad customer dobara kaise aaye?", 10 Nov Govardhan Puja greeting + Story poll.

| 10 Nov 2026, 6:00 PM | Achchi business website ki 5 pehchaan (7-slide carousel; GBP single image) | IG, FB, GBP | Scheduled |
| 11 Nov 2026, 2:00 PM | Ads chal rahi hain, par budget waste ho raha hai? (5-slide carousel; GBP single image) | IG, FB, GBP | Scheduled |

## Scheduled 10-11 Nov 2026 (Buffer free plan: max 10 scheduled posts per channel — limit reached)
| Date & time (IST) | Post | Platforms | Status |
|---|---|---|---|
| 12 Nov 2:00 PM | Myth vs Fact: website bana li | IG FB GBP | Scheduled |
| 13 Nov 2:00 PM | Infographic: FutureTech services | IG FB GBP | Scheduled |
| 17 Nov 2:00 PM | Carousel: Excel+WhatsApp vs Web app (8) | IG FB GBP | Scheduled |
| 19 Nov 2:00 PM | Single: Knowledge Graph | IG FB GBP | Scheduled |
| 20 Nov 2:00 PM | Infographic: Google par dikhne ke 6 kadam | IG FB GBP | Scheduled |
| 24 Nov 8:00 AM | Greeting: Guru Nanak Jayanti | IG FB GBP | Scheduled |
| 26 Nov 2:00 PM | Carousel: Gym plan (9) | IG FB GBP | Scheduled |
| 27 Nov 2:00 PM | Single: NAP | IG FB GBP | Scheduled |
| 1 Dec 2:00 PM | Carousel: Coaching/College (9) | IG FB GBP | Scheduled |

NOT scheduled yet (Buffer limit): 3 Dec Local SEO, 4 Dec Excel vs Web app infographic, 8 Dec Clinic carousel, 10 Dec Web app modules. Their images are already uploaded to /social/ — later run ONLY `node tools/post-schedule.js <folder>/spec.json schedule` (never `upload` again: gate refuses existing names). Free slots open as posts publish, or upgrade the Buffer plan.
NOT in Buffer by design: 4 Reels (no voice yet), 4 Story polls (poll sticker added manually).

## Update 12 Nov 2026 (slots freed after 11-12 Nov posts published)
| 3 Dec 2:00 PM | Single: Local SEO | IG FB GBP | Scheduled |
| 4 Dec 2:00 PM | Infographic: Excel+WhatsApp vs Web app | IG FB GBP | Scheduled |
Remaining unscheduled: 8 Dec Clinic carousel (reminder 17 Nov), 10 Dec Web app modules infographic (reminder 19 Nov). The 13 Nov reminder was deleted (4 Dec already done).

## Update 15 Nov 2026 (Buffer + Gemini keys renewed and verified)
| 8 Dec 2:00 PM | Carousel: Clinic/Doctor (9) | IG FB GBP | Scheduled |
Remaining unscheduled: 10 Dec Web app modules infographic (reminder 19 Nov). The 17 Nov reminder was deleted (8 Dec already done). SEO post (replaces 20 Nov) still waiting founder OK. Gemini TTS (gemini-3.8-flash-tts, voice Achird) works again.

## 15 Nov 2026 — Auto queue (founder: "video ko chhod ke baaki sab schedule karo")
Buffer free plan allows 10 scheduled posts per channel (currently 10/10), so remaining NON-video posts go through `tools/schedule-queue.js` (daily check 4:41 PM IST via a scheduled task; schedules the next post whenever a slot is free; state in posts/QUEUE_STATE.json).
Queue (14, in order): 10 Dec Web app modules infographic · 11 Dec Myth: budget · 14 Dec Gym 6 fayde · 15 Dec Website kyu zaruri carousel · 17 Dec Domain vs Hosting · 18 Dec Myth: Boost · 22 Dec GBP guide · 24 Dec WhatsApp Business · 29 Dec Reviews · 5 Jan Website 5-min check · 7 Jan Billing/udhaar · 12 Jan Local SEO 30 din · 14 Jan Ads 7 sawal · 19 Jan Salon/Restaurant.
Not in queue: Reels (video), Story polls (sticker added manually), SEO replacement for 20 Nov (waiting founder OK). Old 19 Nov reminder for 10 Dec deleted (now handled by the queue).
