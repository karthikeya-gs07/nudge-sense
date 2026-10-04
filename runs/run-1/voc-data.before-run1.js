/* Nudge Sense — study data (Samsung Now Nudge VoC).
   Written by the agent on every run (see ../AGENT-UPDATE-GUIDE.md).
   Keep this file as: window.VOC_DATA = <valid JSON>;  — no comments or code inside the object. */
window.VOC_DATA = {
  "meta": {
    "study": "Voice of Customer: Samsung Now Nudge",
    "feature": "Now Nudge (Galaxy AI, One UI 8.5)",
    "competitor": "Google Magic Cue (secondary only)",
    "schemaVersion": 1,
    "isSample": false
  },
  "config": {
    "windows": {
      "study": { "from": "2026-02-25", "to": "2026-10-02" },
      "recent": { "from": "2026-08-03", "to": "2026-10-02" },
      "baseline": { "from": "2026-02-25", "to": "2026-08-02" }
    },
    "researchQuestions": [
      { "id": "q1", "num": "Q1", "text": "What problems are people facing with this feature?" },
      { "id": "q2", "num": "Q2", "text": "Does it appear when they anticipate it?" },
      { "id": "q3", "num": "Q3", "text": "When are people anticipating a Now Nudge?" },
      { "id": "q4", "num": "Q4", "text": "Do people find Now Nudge helpful when it actually works?" },
      { "id": "q5", "num": "Q5", "text": "Do they feel it is intrusive?" },
      { "id": "q6", "num": "Q6", "text": "Do they wish it were available on other chatting platforms too?" }
    ],
    "themes": [
      { "id": "usefulness", "name": "Usefulness", "definition": "Nudge helped get something done", "rq": ["q4"] },
      { "id": "accuracy", "name": "Accuracy", "definition": "Wrong or irrelevant suggestions", "rq": ["q1", "q4"] },
      { "id": "triggering", "name": "Triggering / reliability", "definition": "Nudge didn't appear, or appeared at the wrong time", "rq": ["q1", "q2"] },
      { "id": "anticipation", "name": "Anticipation moments", "definition": "Situations where people expected a nudge", "rq": ["q2", "q3"] },
      { "id": "intrusiveness", "name": "Frequency / intrusiveness", "definition": "Too many nudges, distracting, annoying", "rq": ["q5"] },
      { "id": "keyboard", "name": "Keyboard lock-in", "definition": "Needs Samsung Keyboard; Gboard users miss out", "rq": ["q1"] },
      { "id": "coverage", "name": "App coverage", "definition": "Requests for more chat apps or platforms", "rq": ["q6"] },
      { "id": "privacy", "name": "Privacy", "definition": "Concerns about the feature reading the screen", "rq": ["q5"] },
      { "id": "autofill", "name": "Autofill / Personal Data Intelligence", "definition": "Form filling with saved personal details", "rq": ["q1", "q4"] },
      { "id": "exclusivity", "name": "Device exclusivity", "definition": "Not available on S25 or older devices", "rq": ["q1"] },
      { "id": "languages", "name": "Languages / regions", "definition": "Language or country limits", "rq": ["q1"] },
      { "id": "setup", "name": "Setup / discoverability", "definition": "Finding, turning on or understanding the feature", "rq": ["q1"] },
      { "id": "performance", "name": "Battery / performance", "definition": "Lag or battery drain linked to the feature", "rq": ["q1"] },
      { "id": "comparison", "name": "Comparison to Magic Cue", "definition": "\"Copy of Magic Cue\", better or worse than Google's", "rq": [] }
    ],
    "userTypes": ["S26 owner", "S25 or older owner (left out)", "Pixel 10 owner", "Brand switcher", "Reviewer or press"],
    "sources": [
      { "code": "r/", "name": "Reddit", "detail": "r/samsung, r/galaxys26, r/oneui (main); r/GooglePixel, r/pixel_phones for Magic Cue mentions only" },
      { "code": "SM", "name": "Samsung Members", "detail": "Global and regional communities" },
      { "code": "XDA", "name": "XDA Forums", "detail": "" },
      { "code": "X", "name": "X", "detail": "" },
      { "code": "YT", "name": "YouTube", "detail": "Comments on S26 reviews and Now Nudge videos" },
      { "code": "BL", "name": "Tech blog comments", "detail": "SamMobile, SammyFans, Android Authority, 9to5Google, Android Police" }
    ],
    "sourceList": [
      { "platform": "r/", "name": "r/samsung", "url": "https://www.reddit.com/r/samsung/", "type": "Subreddit", "scope": "Primary", "status": "Active" },
      { "platform": "r/", "name": "r/galaxys26", "url": "https://www.reddit.com/r/galaxys26/", "type": "Subreddit", "scope": "Primary", "status": "To verify" },
      { "platform": "r/", "name": "r/oneui", "url": "https://www.reddit.com/r/oneui/", "type": "Subreddit", "scope": "Primary", "status": "Active" },
      { "platform": "r/", "name": "r/GooglePixel", "url": "https://www.reddit.com/r/GooglePixel/", "type": "Subreddit", "scope": "Magic Cue mentions only", "status": "Active" },
      { "platform": "r/", "name": "r/pixel_phones", "url": "https://www.reddit.com/r/pixel_phones/", "type": "Subreddit", "scope": "Magic Cue mentions only", "status": "Active" },
      { "platform": "SM", "name": "Samsung Members (global)", "url": "https://r1.community.samsung.com/", "type": "Community forum", "scope": "Primary", "status": "Active" },
      { "platform": "SM", "name": "Samsung Community (US)", "url": "https://us.community.samsung.com/", "type": "Community forum", "scope": "Primary", "status": "Active" },
      { "platform": "XDA", "name": "XDA Forums", "url": "https://xdaforums.com/", "type": "Forum", "scope": "Primary", "status": "Active" },
      { "platform": "X", "name": "X search: \"Now Nudge\"", "url": "https://x.com/search?q=%22Now%20Nudge%22&f=live", "type": "Social search", "scope": "Primary", "status": "Active" },
      { "platform": "YT", "name": "YouTube search: Now Nudge Galaxy S26", "url": "https://www.youtube.com/results?search_query=Now+Nudge+Galaxy+S26", "type": "Video comments", "scope": "Primary", "status": "Active" },
      { "platform": "BL", "name": "SamMobile", "url": "https://www.sammobile.com/", "type": "Blog comments", "scope": "Primary", "status": "Active" },
      { "platform": "BL", "name": "SammyFans", "url": "https://www.sammyfans.com/", "type": "Blog comments", "scope": "Primary", "status": "Active" },
      { "platform": "BL", "name": "Android Authority", "url": "https://www.androidauthority.com/", "type": "Blog comments", "scope": "Primary", "status": "Active" },
      { "platform": "BL", "name": "9to5Google", "url": "https://9to5google.com/", "type": "Blog comments", "scope": "Primary", "status": "Active" },
      { "platform": "BL", "name": "Android Police", "url": "https://www.androidpolice.com/", "type": "Blog comments", "scope": "Primary", "status": "Active" }
    ],
    "keywords": {
      "primary": ["Now Nudge", "Now nudge", "Now nudges", "Nudge", "Samsung Nudge", "NowNudge", "AI suggestions", "Keyboard suggestions", "Keyboard AI suggestions", "Personal Data Intelligence"],
      "secondary": ["Magic Cue", "Magic Cues", "Magic Q"],
      "note": "Pair broad terms with Samsung, Galaxy, S26 or One UI."
    },
    "events": [
      { "date": "2026-02-25", "label": "Now Nudge announced" },
      { "date": "2026-03-11", "label": "S26 on sale" },
      { "date": "2026-05-11", "label": "One UI 8.5 on S25, no Nudge" },
      { "date": "2026-05-20", "label": "Magic Cue expansion announced" },
      { "date": "2026-06-01", "label": "June Pixel Drop", "approx": true }
    ],
    "limitations": [
      "Online forums lean negative and over-represent power users.",
      "Only public posts are included; private groups and support tickets are not.",
      "Early press often framed Now Nudge as a Magic Cue copy; press opinions are tagged separately from users.",
      "Now Nudge only exists on the Galaxy S26 series, so most voices are early adopters."
    ]
  },
  "runs": [],
  "trend": { "grain": "month", "periods": [] },
  "themes": [],
  "clusters": [],
  "questions": [],
  "insights": [],
  "sources": [],
  "competitor": { "summary": "", "sourceIds": [] }
}
;
