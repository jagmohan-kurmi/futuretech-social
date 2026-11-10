# 30-day content — drafts ready for founder review (nothing scheduled)

Built with the engine in `tools/engine/` (`node tools/engine/render.js [id]`). Each folder has images for every platform, `Captions.txt` (IG/FB/GBP text, alt text, lead codes) and `spec.json` (Buffer schedule spec; run `node tools/post-schedule.js <folder>/spec.json upload|schedule` ONLY after founder's OK).
Contact sheets: `posts/_review_sheets/`.

| Date (IST) | Time | Post | Folder | Platforms | Status |
|---|---|---|---|---|---|
| 11 Nov | 2:00 PM | Ads budget waste carousel (5) | 2026-11-19_Ads_Budget_Carousel | IG FB GBP | SCHEDULED |
| 12 Nov | 2:00 PM | Myth vs Fact: website bana li (generic) | 2026-11-12_Myth_Website_Generic | IG FB GBP | Waiting OK |
| 14 Nov | 7:00 PM | Reel 1: website hai par customer nahi | 2026-11-14_Reel_Website_Customer_Nahi | IG FB (video) | VIDEO BUILT (silent, Hindi subtitles); voice pending |
| 17 Nov | 2:00 PM | Carousel: Website kyu zaruri (9, with 5-minute self-check) | 2026-11-17_Website_Kyu_Zaruri | IG FB GBP | Draft |
| 18 Nov | 2:00 PM | Story poll 1 | 2026-11-18_Story_Poll_1 | IG FB Story | Draft (sticker added manually) |
| 19 Nov | 2:00 PM | Single: Knowledge Graph | 2026-11-19_Knowledge_Graph | IG FB GBP | Draft |
| 20 Nov | 2:00 PM | Myth vs Fact: budget = leads? | 2026-11-20_Myth_Budget_Leads | IG FB GBP | Draft |
| 21 Nov | 7:00 PM | Reel 2: Website + Google + WhatsApp | 2026-11-21_Reel_Website_Google_WhatsApp | IG FB (video) | VIDEO BUILT (silent, Hindi subtitles); voice pending |
| 24 Nov | 8:00 AM | Greeting: Guru Nanak Jayanti | 2026-11-24_Guru_Nanak_Jayanti | IG FB GBP | Draft |
| 25 Nov | 2:00 PM | Story poll 2 | 2026-11-25_Story_Poll_2 | Story | Draft |
| 26 Nov | 2:00 PM | Carousel: Gym — roz post nahi, sahi plan (9 slides; weekly rhythm + calendar) | 2026-11-26_Gym_Digital_Marketing_Plan | IG FB GBP | Draft |
| 27 Nov | 2:00 PM | Single: NAP | 2026-11-27_NAP_Kya_Hota_Hai | IG FB GBP | Draft |
| 28 Nov | 7:00 PM | Reel 3: Gym Google Profile | 2026-11-28_Reel_Gym_Google_Profile | IG FB (video) | VIDEO BUILT (silent, Hindi subtitles); voice pending |
| 1 Dec | 2:00 PM | Carousel: Coaching/College (9, with parents' FAQ slide) | 2026-12-01_Coaching_College_Admission_Plan | IG FB GBP | Draft |
| 2 Dec | 2:00 PM | Story poll 3 | 2026-12-02_Story_Poll_3 | Story | Draft |
| 3 Dec | 2:00 PM | Single: Local SEO | 2026-12-03_Local_SEO_Kya_Hai | IG FB GBP | Draft |
| 4 Dec | 2:00 PM | Myth vs Fact: Boost button | 2026-12-04_Myth_Boost_Button | IG FB GBP | Draft |
| 5 Dec | 7:00 PM | Reel 4: Landing page ya WhatsApp | 2026-12-05_Reel_Landing_Page_ya_WhatsApp | IG FB (video) | VIDEO BUILT (silent, Hindi subtitles); voice pending |
| 8 Dec | 2:00 PM | Carousel: Clinic/Doctor (9, with Google Profile self-check) | 2026-12-08_Clinic_Doctor_Online_Presence | IG FB GBP | Draft |
| 9 Dec | 2:00 PM | Story poll 4 | 2026-12-09_Story_Poll_4 | Story | Draft |
| 10 Dec | 2:00 PM | Single: Domain vs Hosting | 2026-12-10_Domain_vs_Hosting | IG FB GBP | Draft |

## Platform rules applied
- IG: carousel 1080x1350, single 1080x1350, hook in first 125 chars, max 5 hashtags, caption < 2200, alt text. FB: carousel 1080x1080, single 1200x1200, wa.me link with FB lead code, 0-2 hashtags. GBP: 1200x900 single image, 2-3 sentence text, NO phone number, NO hashtags, button Learn more + UTM. Story/Reel: 1080x1920, top 250px / bottom 340px kept clear.
- Content: no unverified numbers/claims, no price/offer/"free", no GST; clinic/gym: no guarantee, no best/before-after, patient/member photos only with written permission; Knowledge Graph post says panel is not guaranteed; festive = greeting only.
- Reels: videos NOT produced yet (need founder voice/face or AI-voice decision). AI voice => IG isAiGenerated true + manual Facebook AI label.
- Story polls: poll sticker must be added manually in the app.

## Improvements made after first review (11 Nov)
- Added original, actionable slides: 5-minute website self-check, 7-day gym content calendar, coaching parents' FAQ, clinic Google Profile self-check.
- Relatable Indian examples (kirana, tent house, coaching, salon); GBP texts name Sagar (MP).
- Knowledge Graph wording cross-checked against several sources (SEO/industry sites; Google's own help page not retrievable): Knowledge panels are built from Google's Knowledge Graph; owners cannot edit it directly; accurate, consistent info helps; no guarantee. Re-check against Google's help page before posting.
- Bigger hub chips and CTA recap text; new scorecard / week / FAQ patterns reduce layout repetition.
- All 4 Reels now exist as MP4 (1080x1920, text-timed scenes, Hindi subtitles in safe zone, end card with WhatsApp + QR). No voice yet: Gemini API key in the environment is rejected (401) so AI voice is blocked until the key is renewed. Options: founder records voice -> `node tools/engine/reel.js reel-1 voice.wav` re-times the video to the voice; or ElevenLabs voice; or post silent and add licensed audio inside Instagram.
