# FINAL 30-day calendar (11 Nov – 10 Dec 2026) — drafts ready for founder review

SCHEDULED in Buffer (10 per channel, plan limit): 11 Nov, 12, 13, 17, 19, 20, 24, 26, 27 Nov, 1 Dec. NOT yet scheduled: 3, 4, 8, 10 Dec (limit) — see SCHEDULE.md. Every folder has images for all platforms, `Captions.txt` (IG/FB/GBP, alt text, lead codes) and `spec.json` for Buffer.
Schedule only after the founder's explicit OK: `node tools/post-schedule.js <folder>/spec.json upload` then `... schedule`. Contact sheets: `posts/_review_sheets/`. Rebuild: `node tools/engine/render.js [id]`.
Rhythm: 4 feed posts/week (Tue carousel · Thu single · Fri infographic/myth · Sat Reel) + Wed Story poll. Services covered: website, web app/billing, Google Profile/Local SEO, ads. Segments: gym, coaching, clinic.

| Date | Time | Format | Topic | Folder | Needs OK by |
|---|---|---|---|---|---|
| Wed 11 Nov | 2 PM | Carousel (5) | Ads: budget waste | 2026-11-19_Ads_Budget_Carousel | SCHEDULED (old-style CTA) |
| Thu 12 Nov | 2 PM | Myth vs Fact | Website bana li, customer aa jayenge? | 2026-11-12_Myth_Website_Generic | 11 Nov |
| Fri 13 Nov | 2 PM | Infographic | FutureTech kya karta hai (4 services) | 2026-11-13_Infographic_FutureTech_Services | 12 Nov |
| Sat 14 Nov | 7 PM | Reel | Website hai par customer nahi | 2026-11-14_Reel_Website_Customer_Nahi | 13 Nov (+voice decision) |
| Tue 17 Nov | 2 PM | Carousel (8) | Excel + WhatsApp se business? Web app | 2026-11-17_WebApp_Excel_WhatsApp_Business | 16 Nov |
| Wed 18 Nov | 2 PM | Story poll | Website hai? | 2026-11-18_Story_Poll_1 | 17 Nov |
| Thu 19 Nov | 2 PM | Single | Knowledge Graph | 2026-11-19_Knowledge_Graph | 18 Nov |
| Fri 20 Nov | 2 PM | Infographic | Google par dikhne ke 6 kadam | 2026-11-20_Infographic_Google_Par_Dikhne_Ke_6_Kadam | 19 Nov |
| Sat 21 Nov | 7 PM | Reel | Website + Google + WhatsApp | 2026-11-21_Reel_Website_Google_WhatsApp | 20 Nov |
| Tue 24 Nov | 8 AM | Greeting | Guru Nanak Jayanti | 2026-11-24_Guru_Nanak_Jayanti | 23 Nov |
| Wed 25 Nov | 2 PM | Story poll | Ads chalate hain? | 2026-11-25_Story_Poll_2 | 24 Nov |
| Thu 26 Nov | 2 PM | Carousel (9) | Gym: roz post nahi, sahi plan | 2026-11-26_Gym_Digital_Marketing_Plan | 25 Nov |
| Fri 27 Nov | 2 PM | Single | NAP | 2026-11-27_NAP_Kya_Hota_Hai | 26 Nov |
| Sat 28 Nov | 7 PM | Reel | Gym Google Profile 5 steps | 2026-11-28_Reel_Gym_Google_Profile | 27 Nov |
| Tue 1 Dec | 2 PM | Carousel (9) | Coaching/College admission plan | 2026-12-01_Coaching_College_Admission_Plan | 30 Nov |
| Wed 2 Dec | 2 PM | Story poll | Enquiry ka jawab kitni jaldi? | 2026-12-02_Story_Poll_3 | 1 Dec |
| Thu 3 Dec | 2 PM | Single | Local SEO | 2026-12-03_Local_SEO_Kya_Hai | 2 Dec |
| Fri 4 Dec | 2 PM | Infographic | Excel+WhatsApp vs Web app | 2026-12-04_Infographic_Excel_WhatsApp_vs_WebApp | 3 Dec |
| Sat 5 Dec | 7 PM | Reel | Landing page ya WhatsApp? | 2026-12-05_Reel_Landing_Page_ya_WhatsApp | 4 Dec |
| Tue 8 Dec | 2 PM | Carousel (9) | Clinic/Doctor online presence | 2026-12-08_Clinic_Doctor_Online_Presence | 7 Dec |
| Wed 9 Dec | 2 PM | Story poll | Google par dukaan search ki? | 2026-12-09_Story_Poll_4 | 8 Dec |
| Thu 10 Dec | 2 PM | Infographic | Web app mein kya-kya ho sakta hai | 2026-12-10_Infographic_WebApp_Modules | 9 Dec |

## Bench (ready, for Dec 11 onwards)
11 Dec Myth: budget badhao=leads? · 14 Dec Gym 6 fayde (grid) · 15 Dec Carousel: Website kyu zaruri (9) · 17 Dec Domain vs Hosting · 18 Dec Myth: Boost button.

## Quality gates run on every post
Size per platform · no text overflow · text >= 24px · IG <= 5 hashtags, hook in first 125 chars · GBP no phone/hashtag · FB wa.me link with FB lead code · lead codes unique · no numbers/prices/offers/guarantees (the only "guarantee" mentions are denials) · Hindi proofread · clinic/gym compliance (no best/before-after/guarantee, permission for photos).

## Still open
1. Reels have no voice yet (Gemini key rejected, 401). Options: founder voice (`node tools/engine/reel.js reel-1 voice.wav`), silent + licensed audio in Instagram, or renew key.
2. 11 Nov ads carousel still has the old (long) CTA; replacing it means deleting 3 scheduled Buffer posts — needs founder OK before 2 PM 11 Nov.
3. Web app: confirm real modules/services; any permitted demo/client.
4. Hindi tone + Knowledge Graph wording to be read once by founder; no stats posts until sources verified.
