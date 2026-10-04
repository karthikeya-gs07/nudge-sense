# Feature Background: Samsung "Now Nudge"

A factual profile of the feature, based on official Samsung and Google sources plus factual news reporting. **No user opinions (VoC) are included here.** Reviewer opinions are left out or clearly labelled.

---

## 1. Overview

| Item | Detail |
|---|---|
| **Name** | Now Nudge (Samsung writes "Now nudge" in its support pages) |
| **Company** | Samsung |
| **Part of** | Galaxy AI. Found at *Settings → Galaxy AI → Now nudge* |
| **Software** | One UI 8.5 |
| **Launch device** | Galaxy S26 series |
| **Announced** | 25 Feb 2026 (Galaxy Unpacked, San Francisco). Pre-orders opened the same day |
| **On sale** | From 11 Mar 2026. Some sources report regional availability continuing into early April |
| **Cost** | Free. Samsung says some "enhanced" Galaxy AI features may be charged for in future |

> **Date check:** the March–April 2026 window matches retail availability. The feature was announced earlier, on 25 Feb 2026.

---

## 2. What It Does

Now Nudge reads what is **on screen** (messages, notifications, forms) and suggests a **next step** as a small, tappable prompt.

**Two types of nudge:**
1. **Action nudges:** do something without switching apps
   - Add an event to the calendar, or flag a clash with an existing event
   - Suggest photos from Gallery (e.g. "send me the trip photos")
   - Open a location in Maps or pin a location
   - Show a phone number, make a call, set a reminder
   - Send money, reply to a message
2. **Recall / autofill nudges:** fill forms with personal details (name, phone, email, passport number) saved in **Personal Data Intelligence**

---

## 3. How It Works

| Aspect | Detail |
|---|---|
| **Where nudges appear** | In the **Samsung Keyboard toolbar**, above the keyboard |
| **Keyboard dependency** | Works **only with Samsung Keyboard**. Users of Gboard or other keyboards don't get it |
| **Context source** | Screen content: text, images, notifications |
| **Data engine** | Personal Data Engine / Personal Data Intelligence. This is shared with Now Brief, Call Screening and Scam Detection |
| **Processing** | On-device, "unless you consent to share it with Samsung or its partners" |
| **Setup** | Turn on Now nudge in Settings. Auto suggestions must be on, and location permission is needed for location nudges |
| **Personal data control** | *Settings → Security and privacy → More privacy settings → Personal data intelligence*. It can be turned off fully or per tool |

**Supported apps (messaging nudges):** Samsung Messages, Google Messages, Google Chat, WhatsApp, WhatsApp Business, Instagram DMs, Signal, KakaoTalk, LINE, Tango, NTT Docomo Messages, KDDI Messages.

**Autofill examples:** Trip.com, DoorDash, Expedia, Market Kurly and others.

**Languages (13):** English, Spanish, Portuguese, French, German, Italian, Polish, Chinese, Japanese, Korean, Thai, Vietnamese, Hindi.

---

## 4. Where It Sits in the Samsung Ecosystem

```
Galaxy AI
├── Proactive / personal layer  ← Now Nudge sits here
│   ├── Now Brief      (daily personalised summaries)
│   ├── Now Bar        (live activity on lock screen)
│   ├── Now Nudge      (suggestions inside apps, while typing)
│   └── Personal Data Intelligence (shared data engine underneath)
├── Writing / communication tools (Writing Assist, Live Translate, etc.)
├── Photo / creative tools
└── Safety tools (Call Screening, Scam Detection)
```

- **How it's positioned:** Now Nudge works across third-party apps, not inside one Samsung app.
- **Nuance to note:** in practice it reaches other apps **through the Samsung Keyboard**. So it shows up where users type, in supported apps, and not as a free-floating system overlay.

---

## 5. Device Availability

| Device | Status (as of Oct 2026) |
|---|---|
| Galaxy S26 / S26+ / S26 Ultra | ✅ Available |
| Galaxy S25 series | ❌ Not included. One UI 8.5 stable reached S25 in **May 2026** (Korea first, then the US around 11 May) without Now Nudge |
| Z Fold 7 / Z Flip 7 and older | ❌ Not available |

Samsung has given no official reason for leaving it out, in the sources reviewed.

---

## 6. Competitor: Google "Magic Cue"

| Item | Magic Cue (Google) | Now Nudge (Samsung) |
|---|---|---|
| **Launched** | 20 Aug 2025 (Pixel 10) | 25 Feb 2026 (Galaxy S26) |
| **Head start** | About 6 months earlier | n/a |
| **Devices** | Pixel 10 series only (Tensor G5) | Galaxy S26 series only |
| **AI model** | Gemini Nano, on-device | Personal Data Engine, on-device |
| **Where it shows** | Chips and overlays inside apps (e.g. dialer, Messages) | Samsung Keyboard toolbar |
| **Data it pulls from** | Gmail, Calendar, Messages, Photos, Screenshots, Keep, Maps, Chrome, Docs and other Google apps | Screen content, Gallery, Calendar, Personal Data Intelligence |
| **Third-party apps** | Few at launch. Expansion announced May 2026 (I/O) and rolling out from the June 2026 Pixel Drop | 12 messaging apps plus autofill apps at launch |
| **Keyboard dependency** | No | Yes (Samsung Keyboard only) |
| **Announced changes** | Redesign with a persistent bottom bar (announced May 2026) | None found |
| **Google's own caveat** | "Some information produced by Magic Cue may be inaccurate" | n/a |

---

## 7. Key Timeline

| Date | Event |
|---|---|
| 20 Aug 2025 | Magic Cue launches with Pixel 10 |
| 25 Feb 2026 | Now Nudge announced with Galaxy S26 at Unpacked |
| 11 Mar 2026 | Galaxy S26 goes on sale (regional availability continues to early April) |
| May 2026 | One UI 8.5 stable reaches Galaxy S25, **without Now Nudge** |
| 20 May 2026 | Google announces Magic Cue expansion to more apps and a redesign |
| Jun 2026 | June Pixel Drop: Magic Cue expands to more conversation apps |

---

## 7b. Updates since launch (found during VoC runs)

| Date | Change |
|---|---|
| 22 Jul 2026 | Z Fold 8 / Flip 8 launch with One UI 9: Now Nudge suggestions also appear in **conversation notifications** and a **floating button**, not only the keyboard |
| 23 Jul 2026 | Reports that One UI 9 lets Now Nudge work **without Samsung Keyboard** |
| 4 Sep 2026 | Galaxy S26 FE on sale with Now Nudge |
| 8 Sep 2026 | One UI 9 Beta 2 brings Now Nudge to the **Galaxy S25** series (and Z Fold7 / Flip7) |
| 14 Sep 2026 | One UI 9 Beta 2 brings Now Nudge to the **Galaxy S24** series |
| 16 Sep 2026 | One UI 9 stable rollout starts on the Galaxy S26 |
| ~1 Oct 2026 | **Turkish** language support reported by users |

Sources: [Android Police: One UI 9 changelog](https://www.androidpolice.com/with-the-release-of-the-one-ui-9-changelog-samsung-details-everything-coming-to-phones/), [Android Authority: S24 One UI 9 beta](https://www.androidauthority.com/samsung-galaxy-s24-one-ui-9-beta-features-3710765/), [SamMobile: July Unpacked](https://www.sammobile.com/news/samsung-galaxy-unpacked-event-july-22-2026-z-flip-fold-8/)

---

## 8. Sources

- [Samsung US: How to use Now nudge](https://www.samsung.com/us/support/answer/ANS10010355/)
- [Samsung CA: Now nudge on Galaxy S26](https://www.samsung.com/ca/support/mobile-devices/how-to-use-the-now-nudge-feature-on-the-samsung-galaxy-s26-series/)
- [SamMobile: Now Nudge explained](https://www.sammobile.com/news/galaxy-s26-now-nudge-explained-what-can-this-new-ai-tool-do/)
- [9to5Google: Now Nudge vs Magic Cue](https://9to5google.com/2026/02/25/samsung-galaxy-now-nudge-works-like-magic-cue/)
- [Android Central: Galaxy S26 release date](https://www.androidcentral.com/phones/samsung-galaxy/samsung-galaxy-s26-release-date)
- [Android Authority: S25 stable One UI 8.5](https://www.androidauthority.com/samsung-galaxy-s25-one-ui-8-5-stable-rollout-3661337/)
- [Digital Trends: S25 One UI 8.5 missing features](https://www.digitaltrends.com/phones/samsung-gave-galaxy-s25-users-one-ui-8-5-but-skipped-the-features-they-wanted-most/)
- [9to5Google: Magic Cue launch](https://9to5google.com/2025/08/20/pixel-10-magic-cue-launch/)
- [Android Authority: What is Magic Cue](https://www.androidauthority.com/what-is-google-pixel-10-magic-cue-3588712/)
- [9to5Google: Magic Cue coming to more apps](https://9to5google.com/2026/05/20/google-pixel-10-magic-cue-more-apps/)
- [Android Authority: June 2026 Pixel Drop](https://www.androidauthority.com/june-2026-pixel-drop-3677777/)
