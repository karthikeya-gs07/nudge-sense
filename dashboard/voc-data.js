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
      "study": {
        "from": "2026-02-25",
        "to": "2026-10-03"
      },
      "recent": {
        "from": "2026-08-04",
        "to": "2026-10-03"
      },
      "baseline": {
        "from": "2026-02-25",
        "to": "2026-08-03"
      }
    },
    "researchQuestions": [
      {
        "id": "q1",
        "num": "Q1",
        "text": "What problems are people facing with this feature?"
      },
      {
        "id": "q2",
        "num": "Q2",
        "text": "Does it appear when they anticipate it?"
      },
      {
        "id": "q3",
        "num": "Q3",
        "text": "When are people anticipating a Now Nudge?"
      },
      {
        "id": "q4",
        "num": "Q4",
        "text": "Do people find Now Nudge helpful when it actually works?"
      },
      {
        "id": "q5",
        "num": "Q5",
        "text": "Do they feel it is intrusive?"
      },
      {
        "id": "q6",
        "num": "Q6",
        "text": "Do they wish it were available on other chatting platforms too?"
      }
    ],
    "themes": [
      {
        "id": "usefulness",
        "name": "Usefulness",
        "definition": "Nudge helped get something done",
        "rq": [
          "q4"
        ]
      },
      {
        "id": "accuracy",
        "name": "Accuracy",
        "definition": "Wrong or irrelevant suggestions",
        "rq": [
          "q1",
          "q4"
        ]
      },
      {
        "id": "triggering",
        "name": "Triggering / reliability",
        "definition": "Nudge didn't appear, or appeared at the wrong time",
        "rq": [
          "q1",
          "q2"
        ]
      },
      {
        "id": "anticipation",
        "name": "Anticipation moments",
        "definition": "Situations where people expected a nudge",
        "rq": [
          "q2",
          "q3"
        ]
      },
      {
        "id": "intrusiveness",
        "name": "Frequency / intrusiveness",
        "definition": "Too many nudges, distracting, annoying",
        "rq": [
          "q5"
        ]
      },
      {
        "id": "keyboard",
        "name": "Keyboard lock-in",
        "definition": "Needs Samsung Keyboard; Gboard users miss out",
        "rq": [
          "q1"
        ]
      },
      {
        "id": "coverage",
        "name": "App coverage",
        "definition": "Requests for more chat apps or platforms",
        "rq": [
          "q6"
        ]
      },
      {
        "id": "privacy",
        "name": "Privacy",
        "definition": "Concerns about the feature reading the screen",
        "rq": [
          "q5"
        ]
      },
      {
        "id": "autofill",
        "name": "Autofill / Personal Data Intelligence",
        "definition": "Form filling with saved personal details",
        "rq": [
          "q1",
          "q4"
        ]
      },
      {
        "id": "exclusivity",
        "name": "Device exclusivity",
        "definition": "Not available on S25 or older devices",
        "rq": [
          "q1"
        ]
      },
      {
        "id": "languages",
        "name": "Languages / regions",
        "definition": "Language or country limits",
        "rq": [
          "q1"
        ]
      },
      {
        "id": "setup",
        "name": "Setup / discoverability",
        "definition": "Finding, turning on or understanding the feature",
        "rq": [
          "q1"
        ]
      },
      {
        "id": "performance",
        "name": "Battery / performance",
        "definition": "Lag or battery drain linked to the feature",
        "rq": [
          "q1"
        ]
      },
      {
        "id": "comparison",
        "name": "Comparison to Magic Cue",
        "definition": "\"Copy of Magic Cue\", better or worse than Google's",
        "rq": []
      }
    ],
    "userTypes": [
      "S26 owner",
      "Fold 8 / Flip 8 owner",
      "Older Galaxy on One UI 9 beta",
      "S25 or older owner (left out)",
      "Galaxy owner (device not stated)",
      "Pixel 10 owner",
      "Brand switcher",
      "Reviewer or press",
      "Samsung (official or bot)"
    ],
    "sources": [
      {
        "code": "r/",
        "name": "Reddit",
        "detail": "r/samsung, r/galaxys26, r/oneui (main); r/GooglePixel, r/pixel_phones for Magic Cue mentions only"
      },
      {
        "code": "SM",
        "name": "Samsung Members",
        "detail": "Global and regional communities"
      },
      {
        "code": "XDA",
        "name": "XDA Forums",
        "detail": ""
      },
      {
        "code": "X",
        "name": "X",
        "detail": ""
      },
      {
        "code": "YT",
        "name": "YouTube",
        "detail": "Comments on S26 reviews and Now Nudge videos"
      },
      {
        "code": "BL",
        "name": "Tech blog comments",
        "detail": "SamMobile, SammyFans, Android Authority, 9to5Google, Android Police"
      }
    ],
    "sourceList": [
      {
        "platform": "r/",
        "name": "r/samsung",
        "url": "https://www.reddit.com/r/samsung/",
        "type": "Subreddit",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "r/",
        "name": "r/galaxys26",
        "url": "https://www.reddit.com/r/galaxys26/",
        "type": "Subreddit",
        "scope": "Primary",
        "status": "To verify"
      },
      {
        "platform": "r/",
        "name": "r/oneui",
        "url": "https://www.reddit.com/r/oneui/",
        "type": "Subreddit",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "r/",
        "name": "r/GooglePixel",
        "url": "https://www.reddit.com/r/GooglePixel/",
        "type": "Subreddit",
        "scope": "Magic Cue mentions only",
        "status": "Active"
      },
      {
        "platform": "r/",
        "name": "r/pixel_phones",
        "url": "https://www.reddit.com/r/pixel_phones/",
        "type": "Subreddit",
        "scope": "Magic Cue mentions only",
        "status": "Active"
      },
      {
        "platform": "r/",
        "name": "r/S25Ultra",
        "url": "https://www.reddit.com/r/S25Ultra/",
        "type": "Subreddit",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "r/",
        "name": "r/S24Ultra",
        "url": "https://www.reddit.com/r/S24Ultra/",
        "type": "Subreddit",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "r/",
        "name": "r/GalaxyS24",
        "url": "https://www.reddit.com/r/GalaxyS24/",
        "type": "Subreddit",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "r/",
        "name": "r/GalaxyFold",
        "url": "https://www.reddit.com/r/GalaxyFold/",
        "type": "Subreddit",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "r/",
        "name": "r/samsunggalaxy",
        "url": "https://www.reddit.com/r/samsunggalaxy/",
        "type": "Subreddit",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "r/",
        "name": "r/galaxys26ultra",
        "url": "https://www.reddit.com/r/galaxys26ultra/",
        "type": "Subreddit",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "SM",
        "name": "Samsung Members (global)",
        "url": "https://r1.community.samsung.com/",
        "type": "Community forum",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "SM",
        "name": "Samsung Community (US)",
        "url": "https://us.community.samsung.com/",
        "type": "Community forum",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "XDA",
        "name": "XDA Forums",
        "url": "https://xdaforums.com/",
        "type": "Forum",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "X",
        "name": "X search: \"Now Nudge\"",
        "url": "https://x.com/search?q=%22Now%20Nudge%22&f=live",
        "type": "Social search",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "YT",
        "name": "YouTube search: Now Nudge Galaxy S26",
        "url": "https://www.youtube.com/results?search_query=Now+Nudge+Galaxy+S26",
        "type": "Video comments",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "BL",
        "name": "SamMobile",
        "url": "https://www.sammobile.com/",
        "type": "Blog comments",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "BL",
        "name": "SammyFans",
        "url": "https://www.sammyfans.com/",
        "type": "Blog comments",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "BL",
        "name": "Android Authority",
        "url": "https://www.androidauthority.com/",
        "type": "Blog comments",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "BL",
        "name": "9to5Google",
        "url": "https://9to5google.com/",
        "type": "Blog comments",
        "scope": "Primary",
        "status": "Active"
      },
      {
        "platform": "BL",
        "name": "Android Police",
        "url": "https://www.androidpolice.com/",
        "type": "Blog comments",
        "scope": "Primary",
        "status": "Active"
      }
    ],
    "keywords": {
      "primary": [
        "Now Nudge",
        "Now nudge",
        "Now nudges",
        "Nudge",
        "Samsung Nudge",
        "NowNudge",
        "AI suggestions",
        "Keyboard suggestions",
        "Keyboard AI suggestions",
        "Personal Data Intelligence"
      ],
      "secondary": [
        "Magic Cue",
        "Magic Cues",
        "Magic Q"
      ],
      "note": "Pair broad terms with Samsung, Galaxy, S26 or One UI."
    },
    "events": [
      {
        "date": "2026-02-25",
        "label": "Now Nudge announced"
      },
      {
        "date": "2026-03-11",
        "label": "S26 on sale"
      },
      {
        "date": "2026-05-11",
        "label": "One UI 8.5 on S25, no Nudge"
      },
      {
        "date": "2026-05-20",
        "label": "Magic Cue expansion announced"
      },
      {
        "date": "2026-06-01",
        "label": "June Pixel Drop",
        "approx": true
      },
      {
        "date": "2026-07-22",
        "label": "Fold 8 / Flip 8 launch"
      },
      {
        "date": "2026-09-04",
        "label": "S26 FE on sale"
      },
      {
        "date": "2026-09-08",
        "label": "One UI 9 Beta 2 brings Nudge to S25"
      },
      {
        "date": "2026-09-14",
        "label": "One UI 9 Beta 2 brings Nudge to S24"
      },
      {
        "date": "2026-09-16",
        "label": "One UI 9 stable starts (S26)"
      }
    ],
    "limitations": [
      "Online forums lean negative and over-represent power users.",
      "Only public posts are included; private groups and support tickets are not.",
      "Early press often framed Now Nudge as a Magic Cue copy; press opinions are tagged separately from users.",
      "Now Nudge only exists on the Galaxy S26 series, so most voices are early adopters.",
      "Reddit was captured by hand: posting dates are approximate (from 'N months ago'), and vote and comment counts weren't available.",
      "X is dominated by update news and paid promotions (#AD); those posts are tagged as press, not users."
    ]
  },
  "runs": [
    {
      "id": "run-1",
      "n": 1,
      "date": "2026-10-03",
      "collected": {
        "from": "2026-02-25",
        "to": "2026-10-03"
      },
      "postsAdded": 156,
      "totalPosts": 156,
      "sourcesChecked": [
        {
          "name": "Samsung Members",
          "status": "ok"
        },
        {
          "name": "Samsung Community (US, EU)",
          "status": "ok"
        },
        {
          "name": "X",
          "status": "ok",
          "note": "read via Chrome (signed in)"
        },
        {
          "name": "XDA Forums",
          "status": "ok",
          "note": "no forum threads found; XDA review captured"
        },
        {
          "name": "Tech blogs",
          "status": "ok",
          "note": "articles captured"
        },
        {
          "name": "Reddit",
          "status": "ok",
          "note": "captured by hand; dates approximate, no vote counts"
        },
        {
          "name": "YouTube comments",
          "status": "failed",
          "note": "comments did not load"
        },
        {
          "name": "Tech blog comments",
          "status": "failed",
          "note": "comment widgets not readable"
        }
      ],
      "summary": [
        "Baseline run: 156 posts: 52 from Samsung's communities, 80 from Reddit (captured by hand), 18 from X and 6 press articles.",
        "Sentiment is negative overall (net -41): most posts say nudges don't appear at all, on the forums and on X alike.",
        "Since August, talk has moved from 'older phones are left out' to 'it doesn't work on the One UI 9 beta' and 'it doesn't work in WhatsApp or Telegram'.",
        "One UI 9 adds suggestions in notifications and a floating button, and reportedly works without Samsung Keyboard; Turkish support arrived around 1 October.",
        "Reddit adds two new clusters: confusion about what Now Nudge is (often mistaken for Writing Assist) and suspected region locks, plus the first real privacy and annoyance complaints."
      ],
      "changes": {
        "new": [
          {
            "label": "Not working on the One UI 9 beta (S24)",
            "route": "emerging/s24-beta"
          },
          {
            "label": "Turkish language support arrives",
            "route": "emerging/turkish"
          }
        ],
        "up": [],
        "down": [
          {
            "label": "Older Galaxy phones want it (and the beta brings it)",
            "route": "emerging/older-devices"
          },
          {
            "label": "Screen-reading privacy worries",
            "route": "emerging/privacy-worries"
          }
        ],
        "resolved": []
      },
      "links": [
        {
          "type": "internal",
          "label": "Nudges not appearing",
          "route": "emerging/not-appearing",
          "section": "Emerging clusters"
        },
        {
          "type": "internal",
          "label": "New: support in more chat apps",
          "route": "emerging/whatsapp-telegram",
          "section": "Emerging clusters"
        },
        {
          "type": "internal",
          "label": "New: not working on the S24 beta",
          "route": "emerging/s24-beta",
          "section": "Emerging clusters"
        },
        {
          "type": "internal",
          "label": "Keyboard lock-in and One UI 9",
          "route": "themes/keyboard",
          "section": "Themes"
        },
        {
          "type": "internal",
          "label": "Q2 · Does it appear when expected?",
          "route": "questions/q2",
          "section": "Research questions"
        },
        {
          "type": "external",
          "label": "my thoughts on One UI 9 so far 👇 ",
          "url": "https://x.com/i/status/2090789053130055719",
          "domain": "x.com"
        },
        {
          "type": "external",
          "label": "Notification Highlights Are Welcome, But Its Not Enough Galaxy S25 Ultra Users Demand Full",
          "url": "https://us.community.samsung.com/t5/Galaxy-S25/Notification-Highlights-Are-Welcome-But-Its-Not-Enough-Galaxy/td-p/3590581",
          "domain": "us.community.samsung.com"
        },
        {
          "type": "external",
          "label": "This update brings MyFanCam from Fold 8 and Now nudge from S26 Series. Also able to create",
          "url": "https://x.com/i/status/2099374670050988270",
          "domain": "x.com"
        },
        {
          "type": "external",
          "label": "Now Nudge, la nueva función de los Galaxy S26",
          "url": "https://eu.community.samsung.com/t5/galaxy-s26-series/now-nudge-la-nueva-funci%C3%B3n-de-los-galaxy-s26/td-p/14265683",
          "domain": "eu.community.samsung.com"
        }
      ],
      "snapshot": {
        "posts": 156,
        "net": -41,
        "emerging": 4,
        "answered": 6
      }
    }
  ],
  "trend": {
    "grain": "month",
    "periods": [
      {
        "key": "2026-02",
        "label": "Feb",
        "tip": "Feb 2026 (from 25 Feb)",
        "net": 0,
        "vol": 2,
        "pos": 0,
        "neu": 100,
        "neg": 0
      },
      {
        "key": "2026-03",
        "label": "Mar",
        "tip": "Mar 2026",
        "net": -12,
        "vol": 25,
        "pos": 24,
        "neu": 40,
        "neg": 36
      },
      {
        "key": "2026-04",
        "label": "Apr",
        "tip": "Apr 2026",
        "net": -22,
        "vol": 14,
        "pos": 14,
        "neu": 50,
        "neg": 36
      },
      {
        "key": "2026-05",
        "label": "May",
        "tip": "May 2026",
        "net": -75,
        "vol": 8,
        "pos": 0,
        "neu": 25,
        "neg": 75
      },
      {
        "key": "2026-06",
        "label": "Jun",
        "tip": "Jun 2026",
        "net": -70,
        "vol": 27,
        "pos": 0,
        "neu": 30,
        "neg": 70
      },
      {
        "key": "2026-07",
        "label": "Jul",
        "tip": "Jul 2026",
        "net": -50,
        "vol": 4,
        "pos": 25,
        "neu": 0,
        "neg": 75
      },
      {
        "key": "2026-08",
        "label": "Aug",
        "tip": "Aug 2026",
        "net": -56,
        "vol": 27,
        "pos": 7,
        "neu": 30,
        "neg": 63
      },
      {
        "key": "2026-09",
        "label": "Sep",
        "tip": "Sep 2026",
        "net": -31,
        "vol": 35,
        "pos": 26,
        "neu": 17,
        "neg": 57
      },
      {
        "key": "2026-10",
        "label": "Oct",
        "tip": "Oct 2026 (to 3 Oct)",
        "net": -29,
        "vol": 14,
        "pos": 7,
        "neu": 57,
        "neg": 36
      }
    ]
  },
  "themes": [
    {
      "id": "usefulness",
      "pos": 30,
      "neu": 18,
      "neg": 52,
      "vol": 33,
      "base": 17,
      "recent": 28,
      "byPeriod": [
        null,
        71,
        null,
        null,
        -100,
        null,
        -34,
        -39,
        null
      ],
      "summary": "Split: people who get it working find it handy (places, locations, less typing), while others call it a gimmick because it rarely shows up.",
      "sourceIds": [
        "s59",
        "s70",
        "s43",
        "s33",
        "s38",
        "s47",
        "s1",
        "s18",
        "s53",
        "s4"
      ]
    },
    {
      "id": "triggering",
      "pos": 0,
      "neu": 9,
      "neg": 91,
      "vol": 56,
      "base": 31,
      "recent": 44,
      "byPeriod": [
        null,
        -100,
        -100,
        -100,
        -94,
        null,
        -100,
        -100,
        -56
      ],
      "summary": "The most common complaint across Samsung's forums, Reddit and X: nudges never appear, stop appearing, or 'barely show up', on the S26, the Fold 8 and the One UI 9 betas. Some say it worked at first and stopped after a late-March update.",
      "sourceIds": [
        "s69",
        "s20",
        "s27",
        "s47",
        "s1",
        "s18",
        "s13",
        "s46",
        "s24",
        "s75"
      ]
    },
    {
      "id": "anticipation",
      "pos": 30,
      "neu": 20,
      "neg": 50,
      "vol": 10,
      "base": 5,
      "recent": 9,
      "byPeriod": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        -25,
        null
      ],
      "summary": "People expect a nudge when a chat contains a date, a time, a place or a question about whether they're free.",
      "sourceIds": [
        "s43",
        "s33",
        "s24",
        "s4",
        "s56",
        "s77",
        "s94",
        "s107",
        "s114",
        "s116"
      ]
    },
    {
      "id": "intrusiveness",
      "pos": 0,
      "neu": 25,
      "neg": 75,
      "vol": 4,
      "base": 3,
      "recent": 2,
      "byPeriod": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "summary": "Few say it appears too often (it rarely appears), but some describe it as a nag, like Navi's 'Hey, Listen!', and are glad it can be turned off.",
      "sourceIds": [
        "s123",
        "s124",
        "s125",
        "s133"
      ]
    },
    {
      "id": "keyboard",
      "pos": 17,
      "neu": 16,
      "neg": 67,
      "vol": 12,
      "base": 8,
      "recent": 7,
      "byPeriod": [
        null,
        -34,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "summary": "Needing Samsung Keyboard put off Gboard users in One UI 8.5; One UI 9 adds suggestions in notifications and a floating button, which may ease this.",
      "sourceIds": [
        "s66",
        "s38",
        "s53",
        "s29",
        "s30",
        "s42",
        "s41",
        "s49",
        "s79",
        "s92"
      ]
    },
    {
      "id": "coverage",
      "pos": 9,
      "neu": 48,
      "neg": 43,
      "vol": 23,
      "base": 8,
      "recent": 26,
      "byPeriod": [
        null,
        null,
        null,
        null,
        -50,
        null,
        -62,
        -22,
        null
      ],
      "summary": "People expect nudges in WhatsApp, Telegram and other apps where they chat. Reddit users say full nudges only work in Samsung Messages, Google Messages and Google Chat; elsewhere it only suggests replies.",
      "sourceIds": [
        "s66",
        "s68",
        "s47",
        "s24",
        "s48",
        "s74",
        "s26",
        "s29",
        "s25",
        "s49"
      ]
    },
    {
      "id": "privacy",
      "pos": 29,
      "neu": 14,
      "neg": 57,
      "vol": 7,
      "base": 7,
      "recent": 0,
      "byPeriod": [
        null,
        -34,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "summary": "A vocal minority on Reddit see screen reading as 'Samsung Recall' and refuse it; others point out it runs on the device.",
      "sourceIds": [
        "s44",
        "s39",
        "s124",
        "s132",
        "s135",
        "s136",
        "s137"
      ]
    },
    {
      "id": "autofill",
      "pos": 0,
      "neu": 50,
      "neg": 50,
      "vol": 2,
      "base": 2,
      "recent": 0,
      "byPeriod": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "summary": "Personal-detail autofill (name, passport, phone) is one of the few parts people see working, in the browser and in forms.",
      "sourceIds": [
        "s95",
        "s100"
      ]
    },
    {
      "id": "exclusivity",
      "pos": 21,
      "neu": 49,
      "neg": 30,
      "vol": 33,
      "base": 27,
      "recent": 11,
      "byPeriod": [
        null,
        0,
        25,
        -100,
        -29,
        null,
        -33,
        100,
        null
      ],
      "summary": "Owners of older Galaxy phones wanted it from April; X cheered loudly when the One UI 9 beta brought it to the S24 and S25 in September.",
      "sourceIds": [
        "s71",
        "s36",
        "s73",
        "s5",
        "s44",
        "s61",
        "s32",
        "s17",
        "s31",
        "s52"
      ]
    },
    {
      "id": "languages",
      "pos": 12,
      "neu": 50,
      "neg": 38,
      "vol": 8,
      "base": 2,
      "recent": 11,
      "byPeriod": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        0
      ],
      "summary": "Turkish support arrived around 1 October; Reddit users in Italy, Austria, North America and Australia suspect features are region-locked.",
      "sourceIds": [
        "s7",
        "s8",
        "s9",
        "s10",
        "s77",
        "s100",
        "s113",
        "s115"
      ]
    },
    {
      "id": "setup",
      "pos": 3,
      "neu": 66,
      "neg": 31,
      "vol": 29,
      "base": 21,
      "recent": 14,
      "byPeriod": [
        null,
        -25,
        -25,
        -33,
        -60,
        null,
        null,
        0,
        -20
      ],
      "summary": "Many aren't sure what Now Nudge is: it's mixed up with Writing Assist replies and Now Brief cards, even Samsung's Galaxy Guide can't explain it, and getting it working takes several settings changes.",
      "sourceIds": [
        "s52",
        "s11",
        "s26",
        "s64",
        "s12",
        "s28",
        "s21",
        "s22",
        "s51",
        "s84"
      ]
    },
    {
      "id": "comparison",
      "pos": 0,
      "neu": 40,
      "neg": 60,
      "vol": 5,
      "base": 5,
      "recent": 0,
      "byPeriod": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "summary": "Press framed Now Nudge as Samsung's Magic Cue; users themselves rarely mention Google's feature.",
      "sourceIds": [
        "s53",
        "s54",
        "s55",
        "s134",
        "s155"
      ]
    }
  ],
  "clusters": [
    {
      "id": "not-appearing",
      "name": "Nudges never appear or stop appearing",
      "themeId": "triggering",
      "base": 27,
      "recent": 23,
      "firstSeenRun": 1,
      "summary": "Across Samsung's forums and X, owners report Now Nudge never shows a suggestion, stops after a while, or 'barely shows up', even with every setting on.",
      "sourceIds": [
        "s69",
        "s20",
        "s27",
        "s18",
        "s46",
        "s24",
        "s75",
        "s19",
        "s28",
        "s30"
      ]
    },
    {
      "id": "s24-beta",
      "name": "Not working on the One UI 9 beta (S24)",
      "themeId": "triggering",
      "base": 0,
      "recent": 11,
      "firstSeenRun": 1,
      "summary": "Since One UI 9 Beta 2 reached the S24 (14 Sep), beta users report the feature is present but shows nothing.",
      "sourceIds": [
        "s1",
        "s13",
        "s6",
        "s2",
        "s15",
        "s146"
      ]
    },
    {
      "id": "older-devices",
      "name": "Older Galaxy phones want it (and the beta brings it)",
      "themeId": "exclusivity",
      "base": 30,
      "recent": 11,
      "firstSeenRun": 1,
      "summary": "Owners of older Galaxy phones asked for Now Nudge from April; the One UI 9 beta brought it to the S25 (8 Sep) and S24 (14 Sep).",
      "sourceIds": [
        "s71",
        "s36",
        "s73",
        "s5",
        "s44",
        "s61",
        "s32",
        "s17",
        "s31",
        "s52"
      ]
    },
    {
      "id": "whatsapp-telegram",
      "name": "Support in more chat apps",
      "themeId": "coverage",
      "base": 6,
      "recent": 26,
      "firstSeenRun": 1,
      "summary": "People want nudges in WhatsApp, Telegram and other apps where they chat; support is patchy.",
      "sourceIds": [
        "s68",
        "s47",
        "s24",
        "s48",
        "s74",
        "s26",
        "s29",
        "s25",
        "s49",
        "s51"
      ]
    },
    {
      "id": "keyboard-only",
      "name": "Only works with Samsung Keyboard",
      "themeId": "keyboard",
      "base": 8,
      "recent": 7,
      "firstSeenRun": 1,
      "summary": "In One UI 8.5 Now Nudge only works with Samsung Keyboard; One UI 9 reportedly removes this limit.",
      "sourceIds": [
        "s66",
        "s38",
        "s53",
        "s29",
        "s30",
        "s42",
        "s41",
        "s49",
        "s79",
        "s92"
      ]
    },
    {
      "id": "turkish",
      "name": "Turkish language support arrives",
      "themeId": "languages",
      "base": 0,
      "recent": 7,
      "firstSeenRun": 1,
      "summary": "Turkish language support arrived around 1 October with mixed early results.",
      "sourceIds": [
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    {
      "id": "feature-confusion",
      "name": "Unclear what Now Nudge is",
      "themeId": "setup",
      "base": 9,
      "recent": 7,
      "firstSeenRun": 1,
      "summary": "People mistake Writing Assist reply suggestions or Now Brief cards for Now Nudge, argue about which One UI version has it, and even Samsung's Galaxy Guide can't explain it.",
      "sourceIds": [
        "s11",
        "s12",
        "s84",
        "s86",
        "s93",
        "s99",
        "s102",
        "s103",
        "s122",
        "s144"
      ]
    },
    {
      "id": "regional",
      "name": "Works only in some regions",
      "themeId": "languages",
      "base": 3,
      "recent": 4,
      "firstSeenRun": 1,
      "summary": "Users in Italy, Austria, North America and Australia suspect Now Nudge is region-locked; Samsung support reportedly said it isn't active everywhere yet.",
      "sourceIds": [
        "s77",
        "s88",
        "s100",
        "s113",
        "s115"
      ]
    },
    {
      "id": "privacy-worries",
      "name": "Screen-reading privacy worries",
      "themeId": "privacy",
      "base": 5,
      "recent": 0,
      "firstSeenRun": 1,
      "summary": "Some see Now Nudge as 'Samsung Recall' that reads everything on screen; others reply that it runs on the device.",
      "sourceIds": [
        "s124",
        "s132",
        "s135",
        "s136",
        "s137"
      ]
    },
    {
      "id": "annoying",
      "name": "Feels like a nag",
      "themeId": "intrusiveness",
      "base": 2,
      "recent": 2,
      "firstSeenRun": 1,
      "summary": "Some describe it as an annoying nag, like Navi's 'Hey, Listen!', and are glad it can be switched off.",
      "sourceIds": [
        "s123",
        "s124",
        "s125"
      ]
    }
  ],
  "questions": [
    {
      "id": "q1",
      "short": "Mostly: it doesn't show up.",
      "answer": "The biggest problem is that nudges don't appear: they never show, stop showing, or 'barely show up', and Reddit, X and the Samsung forums all agree. After that: patchy support beyond three messaging apps, confusion about what the feature is (it's mistaken for Writing Assist), older phones being left out, possible region locks, and needing Samsung Keyboard.",
      "posts": 84,
      "confidence": 3,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "triggering",
        "exclusivity",
        "coverage",
        "setup",
        "keyboard"
      ],
      "sourceIds": [
        "s69",
        "s36",
        "s20",
        "s44",
        "s27",
        "s47",
        "s1",
        "s18"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-03",
          "short": "Mostly: it doesn't show up.",
          "text": "First answer (Run 1: Samsung communities + X, 84 posts)."
        }
      ]
    },
    {
      "id": "q2",
      "short": "Mostly no.",
      "answer": "Mostly no. People ask for photos or try to arrange meetings in WhatsApp and get nothing. Some only get reply suggestions, which turn out to be Writing Assist. It works for some in Samsung Messages or Google Messages, and one user says it worked at first and stopped after a late-March update.",
      "posts": 61,
      "confidence": 3,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "triggering",
        "anticipation"
      ],
      "sourceIds": [
        "s69",
        "s43",
        "s20",
        "s33",
        "s27",
        "s47",
        "s1",
        "s18"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-03",
          "short": "Mostly no.",
          "text": "First answer (Run 1: Samsung communities + X, 61 posts)."
        }
      ]
    },
    {
      "id": "q3",
      "short": "Dates, times and places in chats.",
      "answer": "When a chat mentions a date, a time or a place, when a friend shares a location, when someone asks 'can you send the photos from yesterday?', or when clients ask whether they're free, as shown at Unpacked and on Fold 8 demo units.",
      "posts": 10,
      "confidence": 2,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "anticipation"
      ],
      "sourceIds": [
        "s43",
        "s33",
        "s24",
        "s4",
        "s56",
        "s77",
        "s94",
        "s107"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-03",
          "short": "Dates, times and places in chats.",
          "text": "First answer (Run 1: Samsung communities + X, 10 posts)."
        }
      ]
    },
    {
      "id": "q4",
      "short": "Yes, when it works.",
      "answer": "People who get it working like saving places from chats, opening shared locations in Maps and typing less; some on X call it 'how AI should be implemented'. Others call it a gimmick, but mostly because it rarely appears, not because the suggestions are bad.",
      "posts": 33,
      "confidence": 2,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "usefulness"
      ],
      "sourceIds": [
        "s59",
        "s70",
        "s43",
        "s33",
        "s38",
        "s47",
        "s1",
        "s18"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-03",
          "short": "Yes, when it works.",
          "text": "First answer (Run 1: Samsung communities + X, 33 posts)."
        }
      ]
    },
    {
      "id": "q5",
      "short": "Some do, mostly over privacy.",
      "answer": "Some do. On Reddit, a few call it an annoying nag (one compares it to Navi's 'Hey, Listen!') and several see screen reading as a privacy risk, like Windows Recall; others note processing stays on the device. Few complain it appears too often, because it rarely appears.",
      "posts": 10,
      "confidence": 2,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "privacy",
        "intrusiveness"
      ],
      "sourceIds": [
        "s44",
        "s39",
        "s123",
        "s124",
        "s125",
        "s132",
        "s133",
        "s135"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-03",
          "short": "Some do, mostly over privacy.",
          "text": "First answer (Run 1: Samsung communities + X, 10 posts)."
        }
      ]
    },
    {
      "id": "q6",
      "short": "Yes, especially WhatsApp.",
      "answer": "Yes. People chat in WhatsApp and Telegram, but users say full nudges only work in Samsung Messages, Google Messages and Google Chat, with WhatsApp limited to reply suggestions in most regions. One UI 9's notification and floating-button suggestions may widen this.",
      "posts": 23,
      "confidence": 2,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "coverage"
      ],
      "sourceIds": [
        "s66",
        "s68",
        "s47",
        "s24",
        "s48",
        "s74",
        "s26",
        "s29"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-03",
          "short": "Yes, especially WhatsApp.",
          "text": "First answer (Run 1: Samsung communities + X, 23 posts)."
        }
      ]
    }
  ],
  "insights": [
    {
      "id": "i1",
      "title": "The main complaint is that nudges don't show up",
      "body": "Most negative posts aren't about bad suggestions; they're about getting none at all. Reddit, X and the Samsung forums all say the same, and some say it stopped after a late-March update.",
      "status": "new",
      "pos": 0,
      "neu": 9,
      "neg": 91,
      "posts": 56,
      "themeIds": [
        "triggering"
      ],
      "sourceIds": [
        "s69",
        "s20",
        "s27",
        "s47",
        "s1",
        "s18",
        "s13",
        "s46"
      ]
    },
    {
      "id": "i2",
      "title": "People want nudges where they actually chat",
      "body": "Users expect nudges in WhatsApp, Telegram and with their own keyboard, but full nudges reportedly only work in three messaging apps. One UI 9's notification and floating-button suggestions could address both.",
      "status": "new",
      "pos": 10,
      "neu": 40,
      "neg": 50,
      "posts": 30,
      "themeIds": [
        "coverage",
        "keyboard"
      ],
      "sourceIds": [
        "s66",
        "s68",
        "s38",
        "s47",
        "s53",
        "s24",
        "s48",
        "s74"
      ]
    },
    {
      "id": "i3",
      "title": "Older-phone owners went from 'left out' to 'it doesn't work'",
      "body": "On X, the top Now Nudge posts celebrate it reaching the S24 and S25 in the One UI 9 beta. On the forums, beta users now say it shows nothing.",
      "status": "new",
      "pos": 21,
      "neu": 49,
      "neg": 30,
      "posts": 33,
      "themeIds": [
        "exclusivity",
        "triggering"
      ],
      "sourceIds": [
        "s71",
        "s36",
        "s73",
        "s5",
        "s44",
        "s61",
        "s32",
        "s17"
      ]
    }
  ],
  "sources": [
    {
      "id": "s1",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "One UI Beta · S24 · Suggestions",
      "title": "Now Nudge is really useless",
      "content": "Dear Samsung\nKindly improve galaxy AI, especially this Now Nudge, it doesn't work reliably. It could be the most useful feature, you boasted a lot about it as if it's a personal assistant but it doesn't work at all, except in calculator app 🤣",
      "url": "https://r2.community.samsung.com/t5/Suggestions/Now-Nudge-is-really-useless/m-p/22907176",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-19",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "triggering",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "On the One UI 9 beta, the user finds Now Nudge unreliable and says it only shows up in the calculator app.",
      "engagement": {
        "reactions": 0,
        "comments": 4,
        "views": 87
      }
    },
    {
      "id": "s2",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "One UI Beta · S24 · Suggestions",
      "title": "",
      "content": "It doesn't work even 1₹",
      "url": "https://r2.community.samsung.com/t5/Suggestions/Now-Nudge-is-really-useless/m-p/22908069",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-20",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Agrees the feature does not work at all on the beta.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now Nudge is really useless"
    },
    {
      "id": "s3",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "One UI Beta · S24 · Suggestions",
      "title": "",
      "content": "They should bring notification highlights. At least this is more useful than Now Nudge",
      "url": "https://r2.community.samsung.com/t5/Suggestions/Now-Nudge-is-really-useless/m-p/22912089",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-20",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Ranks Now Nudge below other Galaxy AI features for usefulness.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "Now Nudge is really useless"
    },
    {
      "id": "s4",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "One UI Beta · S24 · Suggestions",
      "title": "S24 Ultra",
      "content": "Contextual Now Nudges (Calendar Availability): When an incoming message asks about your availability (for example, \"Are you busy on this date?\"), Now Nudge actively parses the context, checks your calendar in the background, and pops up an instant response chip or prompt directly in your chat showing whether you have a conflict or are free to reply.",
      "url": "https://r2.community.samsung.com/t5/Suggestions/S24-Ultra/m-p/22912128",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-20",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "anticipation",
        "usefulness"
      ],
      "sentiment": "neu",
      "takeaway": "Describes the nudge they expect: when a message asks if they're free, show calendar availability right in the chat.",
      "engagement": {
        "reactions": 3,
        "comments": 1,
        "views": 120
      },
      "truncated": true
    },
    {
      "id": "s5",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "One UI Beta · S24 · Suggestions",
      "title": "Feature Request",
      "content": "Hi Samsung Team,\nI am a Galaxy S24 series user in India. As we approach the official stable rollout of One UI 9.0, I am writing to request two highly demanded features that the Galaxy S24 community around the world is eagerly waiting for:\nNotification Highlights (AI Summary): We highly appreciate the inclusion of \"Now Nudge\" and \"Now Brief\" in Beta 2.",
      "url": "https://r2.community.samsung.com/t5/Suggestions/Feature-Request/m-p/22954380",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-27",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "pos",
      "takeaway": "S24 user welcomes Now Nudge arriving on older phones in One UI 9 Beta 2.",
      "engagement": {
        "reactions": 7,
        "comments": 8,
        "views": 21
      },
      "truncated": true
    },
    {
      "id": "s6",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "One UI Beta · S24 · Suggestions",
      "title": "",
      "content": "Now nudge is there but not working. Any body working?",
      "url": "https://r2.community.samsung.com/t5/Suggestions/Feature-Request/m-p/22954880",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-27",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Now Nudge is present on the S24 beta but produces no suggestions.",
      "engagement": {
        "reactions": 2
      },
      "parentTitle": "Feature Request"
    },
    {
      "id": "s7",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "S26 now nudge Türkçe dil desteği",
      "content": "Evet now nudgeye Türkçeye dil desteği gelmiştir şuan çalışmaya başladı bende",
      "url": "https://r2.community.samsung.com/t5/Galaxy-S/S26-now-nudge-T%C3%BCrk%C3%A7e-dil-deste%C4%9Fi/m-p/22985585",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-10-01",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "languages"
      ],
      "sentiment": "pos",
      "takeaway": "Turkish language support has arrived, and Now Nudge started working for this user.",
      "engagement": {
        "reactions": 10,
        "comments": 9,
        "views": 237
      }
    },
    {
      "id": "s8",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "",
      "content": "Bende çalışmıyor s26+",
      "url": "https://r2.community.samsung.com/t5/Galaxy-S/S26-now-nudge-T%C3%BCrk%C3%A7e-dil-deste%C4%9Fi/m-p/22985832",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-10-01",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "languages"
      ],
      "sentiment": "neg",
      "takeaway": "Still not working for this S26+ user after Turkish support arrived.",
      "engagement": {
        "reactions": 2
      },
      "parentTitle": "S26 now nudge Türkçe dil desteği"
    },
    {
      "id": "s9",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "",
      "content": "Bende biraz gösterdi sonra kayboldu şuan hala yok güncellemelerle düzelir mi bilmiyorum ama Türkçe olarak bugün ilk kez çalıştığını gördüm",
      "url": "https://r2.community.samsung.com/t5/Galaxy-S/S26-now-nudge-T%C3%BCrk%C3%A7e-dil-deste%C4%9Fi/m-p/22986695",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-10-01",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "languages"
      ],
      "sentiment": "mix",
      "takeaway": "Saw Turkish suggestions for the first time, but they appeared briefly and then disappeared.",
      "engagement": {
        "reactions": 2
      },
      "parentTitle": "S26 now nudge Türkçe dil desteği"
    },
    {
      "id": "s10",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "",
      "content": "Arada git gelleri oluyor daha önce hiç çıkmıyor du buda bir gelişme sanırım dahada optimize olup yakında kararlı çalışabileceğini düşünüyorum",
      "url": "https://r2.community.samsung.com/t5/Galaxy-S/S26-now-nudge-T%C3%BCrk%C3%A7e-dil-deste%C4%9Fi/m-p/22985894",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-10-01",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "languages"
      ],
      "sentiment": "mix",
      "takeaway": "Works on and off; seen as progress because it never appeared before.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "S26 now nudge Türkçe dil desteği"
    },
    {
      "id": "s11",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "Samsung Galaxy S24fe. oneui 9 beta 2. Now nudge cards are not getting created.",
      "content": "I am on oneui 9 beta 2. Now nudge cards are not getting created. Samsung galaxy S24fe here. The following message is popping up every time.",
      "url": "https://r2.community.samsung.com/t5/Galaxy-S/Samsung-Galaxy-S24fe-oneui-9-beta-2-Now-nudge-cards-are-not/m-p/22889226",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-16",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neg",
      "takeaway": "User thinks Now Nudge is broken, but is actually looking at Now Brief cards.",
      "engagement": {
        "reactions": 2,
        "comments": 1,
        "views": 2
      }
    },
    {
      "id": "s12",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "",
      "content": "Brother that's Now Brief which pops up at your Now Bar thrice a day. 😊😊\nNow Nudge is the one that provides Contextual shortcuts on your keyboard",
      "url": "https://r2.community.samsung.com/t5/Galaxy-S/Samsung-Galaxy-S24fe-oneui-9-beta-2-Now-nudge-cards-are-not/m-p/22987291",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-10-01",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Another member explains the difference: Now Brief lives in the Now Bar, Now Nudge sits above the keyboard.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Samsung Galaxy S24fe. oneui 9 beta 2. Now nudge cards are not getting created."
    },
    {
      "id": "s13",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Discussions",
      "title": "Now nudge",
      "content": "Now nudge not giving any suggestions eventhough i turn it on in s24 plus. Anyone who tried? Share ur experience",
      "url": "https://r2.community.samsung.com/t5/Discussions/Now-nudge/m-p/22881701",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-15",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "No suggestions at all on an S24+ even with the feature switched on.",
      "engagement": {
        "reactions": 1,
        "comments": 3,
        "views": 27
      }
    },
    {
      "id": "s14",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Discussions",
      "title": "",
      "content": "It honestly just seems like a gimmick for now.",
      "url": "https://r2.community.samsung.com/t5/Discussions/Now-nudge/m-p/22881755",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-15",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Sees Now Nudge as a gimmick in its current state.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now nudge"
    },
    {
      "id": "s15",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Discussions",
      "title": "",
      "content": "Same issue there is no suggestions.. lol",
      "url": "https://r2.community.samsung.com/t5/Discussions/Now-nudge/m-p/22881834",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-15",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Confirms the same issue: no suggestions appear.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now nudge"
    },
    {
      "id": "s16",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Discussions",
      "title": "",
      "content": "Not satisfied. The event worked but map not working. Also it is not appealing l",
      "url": "https://r2.community.samsung.com/t5/Discussions/Now-nudge/m-p/22900030",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-09-18",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "triggering",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "The calendar event nudge worked, the map nudge did not, and the design doesn't appeal.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now nudge"
    },
    {
      "id": "s17",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Tech Talk",
      "title": "Now Nudge",
      "content": "Is Now Nudge feature will available for S24 FE Devices by next os update??",
      "url": "https://r2.community.samsung.com/t5/Tech-Talk/Now-Nudge/td-p/21663660",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-03-02",
      "capturedAt": "2026-10-02",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "Within a week of launch, an S24 FE owner asks whether Now Nudge will reach older phones.",
      "engagement": {
        "reactions": 1,
        "comments": 2,
        "views": 228
      }
    },
    {
      "id": "s18",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "Now nudge",
      "content": "Hello Samsung fans I noticed the now nudge is not on my screen anymore it used to help me out. Have you noticed that on yours .my s26 ultra running 1UI 8.5",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/now-nudge/m-p/39519052",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-09-19",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Now Nudge used to help this S26 Ultra owner, but it stopped appearing.",
      "engagement": {
        "reactions": 2,
        "comments": 3,
        "views": 119
      }
    },
    {
      "id": "s19",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "",
      "content": "Thank you for your response. As previously noted, the function remains present in the system, but it is currently non-operational.",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/now-nudge/m-p/39521646",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-09-19",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "After support's steps, the setting is still there but the feature does nothing.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now nudge"
    },
    {
      "id": "s20",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "Now brief and now Nudge",
      "content": "Hi\nI've got the S26 and now brief and Now Nudge just stopped working even if everything is turned on??\nS26 big selling point was AI and it doesn't work ridiculous. Any help would appreciate \nThanks",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/now-brief-and-now-nudge/td-p/37482434",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-03-31",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Three weeks after launch, Now Nudge and Now Brief stopped working for an S26 owner who bought the phone for its AI.",
      "engagement": {
        "reactions": 1,
        "comments": 9,
        "views": 2400
      }
    },
    {
      "id": "s21",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "",
      "content": "Hi all software are updated and there is no Briefing or Nudge in the app section.All ai is turned on it just doesn't work",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/now-brief-and-now-nudge/m-p/37482921",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-03-31",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "setup"
      ],
      "sentiment": "neg",
      "takeaway": "Support's troubleshooting steps don't match what the user sees in Settings.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "Now brief and now Nudge"
    },
    {
      "id": "s22",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "",
      "content": "Same problem here thats doesn't solve anything, now nudge never worked,  advertise features that don't work and no solutions it has been almost 5 months, even when seeking support with Samsung, we get questions like, what do you mean by now nudge? What is that. Hilarious 😂",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/now-brief-and-now-nudge/m-p/38424075",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-06-20",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "setup"
      ],
      "sentiment": "neg",
      "takeaway": "Never worked in almost 5 months, and Samsung support didn't know what Now Nudge was.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "Now brief and now Nudge"
    },
    {
      "id": "s23",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "",
      "content": "Hello Samsung, even my now nudge is not working even I turned on the now nudge from the settings, please give us a solution, very disappointing",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/now-brief-and-now-nudge/m-p/38848360",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-07-26",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Still not working in late July despite being switched on.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "Now brief and now Nudge"
    },
    {
      "id": "s24",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy Z",
      "title": "Now Nudge",
      "content": "Now Nudge is not working on my Fold 8. When date/time and location information were sent to me via WhatsApp or Telegram, the AI prompt did not work.",
      "url": "https://r1.community.samsung.com/t5/galaxy-z/now-nudge/m-p/39237722",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-08-27",
      "capturedAt": "2026-10-02",
      "userType": "Fold 8 / Flip 8 owner",
      "themeIds": [
        "triggering",
        "coverage",
        "anticipation"
      ],
      "sentiment": "neg",
      "takeaway": "Expected a nudge when a date, time and place arrived in WhatsApp or Telegram, but nothing appeared.",
      "engagement": {
        "reactions": 0,
        "comments": 3,
        "views": 90
      }
    },
    {
      "id": "s25",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy Z",
      "title": "",
      "content": "Not sure if it's due to the fact that what's app and telegram not even in this list?",
      "url": "https://r1.community.samsung.com/t5/galaxy-z/now-nudge/m-p/39287261",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-09-01",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage"
      ],
      "sentiment": "neu",
      "takeaway": "Suspects WhatsApp and Telegram aren't on the supported-apps list.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "Now Nudge"
    },
    {
      "id": "s26",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy Z",
      "title": "",
      "content": "I solved the issue. Pretty complicated. There's quite a few setting for Now Nudge to work correctly. Works with WhatsApp but not telegram for now.",
      "url": "https://r1.community.samsung.com/t5/galaxy-z/now-nudge/m-p/39288020",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-09-01",
      "capturedAt": "2026-10-02",
      "userType": "Fold 8 / Flip 8 owner",
      "themeIds": [
        "setup",
        "coverage"
      ],
      "sentiment": "mix",
      "takeaway": "Got it working only after changing several settings; WhatsApp works, Telegram doesn't.",
      "engagement": {
        "reactions": 2
      },
      "parentTitle": "Now Nudge"
    },
    {
      "id": "s27",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy AI",
      "title": "Now nudge não funciona",
      "content": "Meu now nudge não funcina de maneira alguma, tentei todas possibilidades e sigo sem fazer ela aparecer. Alguém já teve o mesmo problema que eu?",
      "url": "https://r1.community.samsung.com/t5/galaxy-ai/now-nudge-n%C3%A3o-funciona/m-p/39741371",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-09-30",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Tried every option and still can't get a single nudge to appear.",
      "engagement": {
        "reactions": 4,
        "comments": 4
      }
    },
    {
      "id": "s28",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy AI",
      "title": "",
      "content": "Também tô tentando entender como ele funciona. Até o momento também não recebi nenhuma recomendação do Nudge. Tô ansioso pra testar pois de todas as novidades parece ser a mais promissora.\n\nÚnica coisa que li é que por hora ele é limitado a alguns recursos de mensagens e notificações, pelo menos pra identificação, se não me engano.",
      "url": "https://r1.community.samsung.com/t5/galaxy-ai/now-nudge-n%C3%A3o-funciona/m-p/39742783",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-10-01",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering",
        "setup"
      ],
      "sentiment": "mix",
      "takeaway": "Sees Now Nudge as the most promising new feature, but hasn't received a single suggestion yet.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now nudge não funciona"
    },
    {
      "id": "s29",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy AI",
      "title": "",
      "content": "O WhatsApp está sim, mas aparece bem pouco. E acredito que só funciona no teclado da Samsung.",
      "url": "https://r1.community.samsung.com/t5/galaxy-ai/now-nudge-n%C3%A3o-funciona/m-p/39748253",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-10-01",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage",
        "keyboard"
      ],
      "sentiment": "neu",
      "takeaway": "WhatsApp is supported but nudges show up rarely there; believes it only works with Samsung Keyboard.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now nudge não funciona"
    },
    {
      "id": "s30",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy AI",
      "title": "",
      "content": "Sim, eu usava o gboard, aí comecei a usar o teclado Samsung pra utilizar o recurso, porém nada.\n\nTambém recebi o une ui 9 e os cards que podem ser criados no now brief não geram, acredito que eu esteja com um problema e não sei a fonte dele",
      "url": "https://r1.community.samsung.com/t5/galaxy-ai/now-nudge-n%C3%A3o-funciona/m-p/39748439",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-10-01",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "keyboard",
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Switched from Gboard to Samsung Keyboard just for this feature, and still got nothing.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now nudge não funciona"
    },
    {
      "id": "s31",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "Will S24 Ultra get Now Nudge?",
      "content": "My Galaxy S24 Ultra is on One UI 8.5, but apparently i heard it's getting the new Now Nudge Galaxy AI feature but I don't see it anywhere. Does the S24 Ultra support Now Nudge?",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/will-s24-ultra-get-now-nudge/m-p/38278380",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-06-07",
      "capturedAt": "2026-10-02",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "S24 Ultra owner on One UI 8.5 can't find Now Nudge and asks if it's coming.",
      "engagement": {
        "reactions": 1,
        "comments": 2,
        "views": 948
      }
    },
    {
      "id": "s32",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "New AI Features for S24",
      "content": "Supposedly, the Now Nudge feature, My FanCam, Now Brief Custom Cards and the Call Brief AI Features are all coming to the Galaxy S24 by One UI 9.\nSeen in the newest One UI 9 BETA 2 for the S24.",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/new-ai-features-for-s24/m-p/39446944",
      "domain": "r1.community.samsung.com",
      "postedAt": "2026-09-14",
      "capturedAt": "2026-10-02",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "pos",
      "takeaway": "Spots Now Nudge in One UI 9 Beta 2 for the S24.",
      "engagement": {
        "reactions": 2,
        "comments": 2,
        "views": 199
      }
    },
    {
      "id": "s33",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Community (US)",
      "where": "Use it, Share it",
      "title": "Did you use Now Nudge on your Galaxy S26 FE?",
      "content": "This is one of those Galaxy AI features I did not realize I needed… until I started using it. \n\nAs an avid motorcycle rider, I am someone who constantly gets recommendations for places in chats -restaurants, coffee shops, scenic spots, you name it.\n\nBefore, I would read the message, think “I will save that for later,” and then eventually have to go back through the conversation and search for the place again, a complete double searching.\n\nWith Now Nudge, I can save a place from my chat directly to Google Maps when it comes up.",
      "url": "https://us.community.samsung.com/t5/Use-it-Share-it/Did-you-use-Now-Nudge-on-your-Galaxy-S26-FE/m-p/3655052",
      "domain": "us.community.samsung.com",
      "postedAt": "2026-09-01",
      "capturedAt": "2026-10-02",
      "userType": "Reviewer or press",
      "themeIds": [
        "usefulness",
        "anticipation"
      ],
      "sentiment": "pos",
      "takeaway": "Promotional-style story about saving places from chats to Maps; replies point out the S26 FE wasn't on sale yet.",
      "engagement": {
        "reactions": 0,
        "comments": 8,
        "views": 405
      },
      "truncated": true
    },
    {
      "id": "s34",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (US)",
      "where": "Use it, Share it",
      "title": "",
      "content": "How could they use the Now Nudge on the S26 FE?\n\nIt hasn't released yet!",
      "url": "https://us.community.samsung.com/t5/Use-it-Share-it/Did-you-use-Now-Nudge-on-your-Galaxy-S26-FE/m-p/3655098",
      "domain": "us.community.samsung.com",
      "postedAt": "2026-09-01",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Members question promotional posts praising Now Nudge before the phone was available.",
      "engagement": {
        "reactions": 2
      },
      "parentTitle": "Did you use Now Nudge on your Galaxy S26 FE?"
    },
    {
      "id": "s35",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Community (US)",
      "where": "Use it, Share it",
      "title": "Finding More Ease in My Everyday Life with the S26 FE Feature",
      "content": "One feature I’m especially excited about on the S26 FE is Now Nudge. I love anything that can make everyday life a little easier and more organized, and this feels like such a smart way to stay on top of things without having to constantly think about what I might be forgetting.",
      "url": "https://us.community.samsung.com/t5/Use-it-Share-it/Finding-More-Ease-in-My-Everyday-Life-with-the-S26-FE-Feature/m-p/3659878",
      "domain": "us.community.samsung.com",
      "postedAt": "2026-09-07",
      "capturedAt": "2026-10-02",
      "userType": "Reviewer or press",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "pos",
      "takeaway": "Promotional-style post looking forward to Now Nudge on the S26 FE.",
      "engagement": {
        "reactions": 1,
        "comments": 0,
        "views": 148
      },
      "truncated": true
    },
    {
      "id": "s36",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Community (US)",
      "where": "Galaxy S25",
      "title": "Notification Highlights Are Welcome, But Its Not Enough Galaxy S25 Ultra Users Demand Full Feature Parity",
      "content": "For those inquiring about hardware readiness, please observe the system package details below. The activity for Now Nudge (com.samsung.android.smartsuggestions) has been integrated since the initial release, even prior to the June patch, fully present but disabled by a simple system toggle. This verifies that the hardware is capable and the code exists. This is artificial gating.",
      "url": "https://us.community.samsung.com/t5/Galaxy-S25/Notification-Highlights-Are-Welcome-But-Its-Not-Enough-Galaxy/td-p/3590581",
      "domain": "us.community.samsung.com",
      "postedAt": "2026-06-11",
      "capturedAt": "2026-10-02",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "S25 owners see Now Nudge's absence as artificial gating, since its code is already on their phones.",
      "engagement": {
        "reactions": 13,
        "comments": 74,
        "views": 13971
      },
      "truncated": true
    },
    {
      "id": "s37",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (US)",
      "where": "Galaxy S25",
      "title": "",
      "content": "One UI 8.5 has been released missing several features from the S26 that the hardware on the S25 could easily handle. Most notably to me is the now nudge and notification highlights.",
      "url": "https://us.community.samsung.com/t5/Galaxy-S25/One-UI-8-0-or-8-5-Stable-Release-and-Feedback/m-p/3563687",
      "domain": "us.community.samsung.com",
      "postedAt": "2026-05-13",
      "capturedAt": "2026-10-02",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "S25 owner calls One UI 8.5 a disappointment mainly because Now Nudge was left out.",
      "engagement": {
        "reactions": 1,
        "views": 2432
      },
      "parentTitle": "One UI 8.5 Huge Disappointment",
      "truncated": true
    },
    {
      "id": "s38",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "AI",
      "title": "Now Nudge Galaxy AI",
      "content": "I am not a huge fan of AI but I am a huge fan of smart things which is can be very useful in a daily basis. \nSamsung Now Nudge is a proactive, AI-driven contextual assistant for the Galaxy S26 series (running One UI 8.5)\nThat analyzes on-screen content to suggest relevant actions, such as saving calendar events, sharing photos, or opening map locations directly from messages or social media. Only working with Samsung keyboard with supported languages.\nI love using it so far",
      "url": "https://eu.community.samsung.com/t5/ai/now-nudge-galaxy-ai/td-p/14321234",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-03-12",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "usefulness",
        "keyboard"
      ],
      "sentiment": "pos",
      "takeaway": "Early S26 owner loves it so far, but notes it only works with Samsung Keyboard in supported languages.",
      "engagement": {
        "reactions": 4,
        "comments": 5,
        "views": 913
      },
      "truncated": true
    },
    {
      "id": "s39",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "AI",
      "title": "",
      "content": "Handy and will try once UI8.5 drops for me, at least with Samsung AI it is processed on device.",
      "url": "https://eu.community.samsung.com/t5/ai/now-nudge-galaxy-ai/m-p/14321302",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-03-12",
      "capturedAt": "2026-10-02",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "privacy"
      ],
      "sentiment": "pos",
      "takeaway": "On-device processing makes the feature more acceptable for this user.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now Nudge Galaxy AI",
      "truncated": true
    },
    {
      "id": "s40",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "AI",
      "title": "",
      "content": "Love using it. Especially if has no time to typing so handy",
      "url": "https://eu.community.samsung.com/t5/ai/now-nudge-galaxy-ai/m-p/14321337",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-03-12",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "pos",
      "takeaway": "Finds it handy because it saves typing.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "Now Nudge Galaxy AI"
    },
    {
      "id": "s41",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "AI",
      "title": "",
      "content": "Only on Samsung keyboard though 😕",
      "url": "https://eu.community.samsung.com/t5/ai/now-nudge-galaxy-ai/m-p/14321966",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-03-12",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "keyboard"
      ],
      "sentiment": "neg",
      "takeaway": "Disappointed that it only works with Samsung Keyboard.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "Now Nudge Galaxy AI"
    },
    {
      "id": "s42",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "AI",
      "title": "",
      "content": "Never,",
      "url": "https://eu.community.samsung.com/t5/ai/now-nudge-galaxy-ai/m-p/14323245",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-03-12",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "keyboard"
      ],
      "sentiment": "neg",
      "takeaway": "Answering a suggestion to return to Samsung Keyboard: refuses to switch.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now Nudge Galaxy AI"
    },
    {
      "id": "s43",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "Galaxy S26 series",
      "title": "Now Nudge, la nueva función de los Galaxy S26",
      "content": "Hola members!\nTras la vorágine de emociones que ha sido el Unpacked 2026 y haber tenido la suerte de poder vivirlo en directo, hoy os quiero hablar de una nueva función que presentaron y que me encantó. Se trata deNow Nudge, que reduce el cambio entre aplicaciones al mostrar información relevante en contexto.",
      "url": "https://eu.community.samsung.com/t5/galaxy-s26-series/now-nudge-la-nueva-funci%C3%B3n-de-los-galaxy-s26/td-p/14265683",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-03-04",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "usefulness",
        "anticipation"
      ],
      "sentiment": "pos",
      "takeaway": "Enthusiastic first look after Unpacked: likes that it cuts down switching between apps.",
      "engagement": {
        "reactions": 16,
        "comments": 9
      },
      "truncated": true
    },
    {
      "id": "s44",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "Questions",
      "title": "Ai",
      "content": "Really enjoying the new ai features. Samsung was a bit vague what they added. Instead of just drawing pictures now you can now type what you want changed in a photo. Anyone know if s25 will get now nudge? Im not particularly worried as its a bit of privacy invasion. If we get it can it be turned off?",
      "url": "https://eu.community.samsung.com/t5/question/ai/td-p/14555926",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-04-20",
      "capturedAt": "2026-10-02",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity",
        "privacy"
      ],
      "sentiment": "mix",
      "takeaway": "S25 owner asks if Now Nudge is coming, but calls it 'a bit of privacy invasion' and wants to be able to turn it off.",
      "engagement": {
        "reactions": 2,
        "comments": 7,
        "views": 477
      }
    },
    {
      "id": "s45",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "Galaxy S23 Serie",
      "title": "",
      "content": "Es fehlt (nur eine Auswahl der wichtigsten)\n\nAirdrop in Quick Share, Bilderkennung für Zielauswahl\n\nBesserer Dokumentenscan mit der Kamera (Fingerentfernung, Glättung, ...)\n\nAI-Textprompt für Fotobearbeitung\n\nBewegungsbilder automatisch einschalten\n\n24MP Modus\n\nNow Nudge (und immer noch kein Now Brief)",
      "url": "https://eu.community.samsung.com/t5/galaxy-s23-serie/umfang-neuerungen-s23u-in-oneui-8-5/m-p/14728347",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-05-20",
      "capturedAt": "2026-10-02",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "S23 Ultra owner lists Now Nudge among the features missing from One UI 8.5.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Umfang Neuerungen S23U in OneUI 8.5",
      "truncated": true
    },
    {
      "id": "s46",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "S26 Ultra Galaxy AI \"Now Nudge\" not working at all",
      "content": "I am trying to test out the new Now nudge feature on my Galaxy S26 Ultra, but I cannot get it to trigger a single suggestion. Is anyone else facing the same issue?",
      "url": "https://r2.community.samsung.com/t5/Galaxy-S/S26-Ultra-Galaxy-AI-quot-Now-Nudge-quot-not-working-at-all/m-p/22501237",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-07-09",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Can't get a single suggestion to appear on the S26 Ultra.",
      "engagement": {
        "reactions": 3,
        "comments": 2,
        "views": 195
      }
    },
    {
      "id": "s47",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "Galaxy Z Fold / Z Flip",
      "title": "Now Nudge on WhatsApp?",
      "content": "Good morning!\n\n\nI've spent all morning trying to troubleshoot this but it doesn't appear to work.\n\n\nI've been trying to get now nudge to work on whats app as one of the previous Samsung staff on her reported it is supported.\n\n\nUnfortunately, I have had no joy getting this to work on my new Z fold 8 ultra.\n\n\nIt works correctly in Samsung messages but I never text anymore and would find this incredibly useful on whats app.\n\n\nI appreciate any assistance in getting this sorted!\n\n\nThank you",
      "url": "https://eu.community.samsung.com/t5/galaxy-z-fold-z-flip/now-nudge-on-whatsapp/td-p/15177506",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-08-07",
      "capturedAt": "2026-10-02",
      "userType": "Fold 8 / Flip 8 owner",
      "themeIds": [
        "coverage",
        "triggering",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Works in Samsung Messages, but the user lives in WhatsApp, where it never appears.",
      "engagement": {
        "reactions": 0,
        "comments": 5,
        "views": 341
      }
    },
    {
      "id": "s48",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "Galaxy Z Fold / Z Flip",
      "title": "",
      "content": "Now nudge is a Samsung based app thing, which makes its scope narrow, never heard of WhatsApp support.",
      "url": "https://eu.community.samsung.com/t5/galaxy-z-fold-z-flip/now-nudge-on-whatsapp/m-p/15178967",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-08-07",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage"
      ],
      "sentiment": "neu",
      "takeaway": "Another member believes Now Nudge only works in Samsung apps.",
      "engagement": {
        "reactions": 4
      },
      "parentTitle": "Now Nudge on WhatsApp?",
      "truncated": true
    },
    {
      "id": "s49",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "Galaxy Z Fold / Z Flip",
      "title": "",
      "content": "I mean they advertise it with third party messaging and social media support. Sounds like another gimmick falsely advertised as always! Not that I bought the phone for that though! Ho hum. Gboard it is",
      "url": "https://eu.community.samsung.com/t5/galaxy-z-fold-z-flip/now-nudge-on-whatsapp/m-p/15181269",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-08-07",
      "capturedAt": "2026-10-02",
      "userType": "Fold 8 / Flip 8 owner",
      "themeIds": [
        "coverage",
        "keyboard",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Feels the third-party app support was oversold, and goes back to Gboard.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "Now Nudge on WhatsApp?"
    },
    {
      "id": "s50",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "Galaxy Z Fold / Z Flip",
      "title": "",
      "content": "Mine doesn't even work with messages. No idea why. Iv tried all troubleshooting",
      "url": "https://eu.community.samsung.com/t5/galaxy-z-fold-z-flip/now-nudge-on-whatsapp/m-p/15201919",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-08-11",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Doesn't work even in Samsung Messages after all troubleshooting.",
      "engagement": {
        "reactions": 1
      },
      "parentTitle": "Now Nudge on WhatsApp?"
    },
    {
      "id": "s51",
      "run": 1,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Community (EU)",
      "where": "Galaxy Z Fold / Z Flip",
      "title": "",
      "content": "https://youtube.com/shorts/YUnUSJOuODA?si=fGkOveJ-8A1WLvLB \n\nIt works. Maybe your issue is about some permission",
      "url": "https://eu.community.samsung.com/t5/galaxy-z-fold-z-flip/now-nudge-on-whatsapp/m-p/15411694",
      "domain": "eu.community.samsung.com",
      "postedAt": "2026-09-22",
      "capturedAt": "2026-10-02",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup",
        "coverage"
      ],
      "sentiment": "pos",
      "takeaway": "Shares a video showing it working in WhatsApp; suggests a permission issue.",
      "engagement": {
        "reactions": 0
      },
      "parentTitle": "Now Nudge on WhatsApp?"
    },
    {
      "id": "s52",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "One UI 8.5 - S25 Ultra - Issues and Missing features",
      "content": "Missing One UI 8.5 features:\n-Now nudge (not sure , couldnt find in settings)\n-Priority Notifications\n-24MP default mode in Camera App(not RAW)",
      "url": "https://r2.community.samsung.com/t5/Galaxy-S/One-UI-8-5-S25-Ultra-Issues-and-Missing-features/m-p/22053323",
      "domain": "r2.community.samsung.com",
      "postedAt": "2026-05-12",
      "capturedAt": "2026-10-02",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity",
        "setup"
      ],
      "sentiment": "neg",
      "takeaway": "S25 Ultra owner can't find Now Nudge after the One UI 8.5 update.",
      "engagement": {
        "reactions": 1,
        "comments": 2,
        "views": 1183
      },
      "truncated": true
    },
    {
      "id": "s53",
      "run": 1,
      "kind": "article",
      "platform": "BL",
      "site": "9to5Google",
      "where": "News",
      "title": "Galaxy S26 ‘Now Nudge’ is basically Google Pixel’s Magic Cue, but you’re forced to use Samsung Keyboard",
      "content": "Now Nudge, on the other hand, looks incredibly promising. From the little time we’ve had at Samsung Unpacked with the new series, the Galaxy S26’s Now Nudge function does a surprisingly consistent job of bringing up that relevant information as needed. It works in any messaging app to suggest calendar events, surface only relevant photos, and share contact information.",
      "url": "https://9to5google.com/2026/02/25/samsung-galaxy-now-nudge-works-like-magic-cue/",
      "domain": "9to5google.com",
      "postedAt": "2026-02-25",
      "capturedAt": "2026-10-02",
      "userType": "Reviewer or press",
      "themeIds": [
        "comparison",
        "keyboard",
        "usefulness"
      ],
      "sentiment": "mix",
      "takeaway": "Hands-on: more consistent than Magic Cue at Unpacked, but forcing Samsung Keyboard is the catch.",
      "engagement": {
        "comments": 4
      },
      "truncated": true,
      "competitor": true
    },
    {
      "id": "s54",
      "run": 1,
      "kind": "article",
      "platform": "BL",
      "site": "Android Authority",
      "where": "News",
      "title": "Samsung has its own version of the Pixel 10's Magic Cue for the Galaxy S26 series",
      "content": "As we saw with Magic Cue, though, for as nice of an idea as a system like this might sound, actually getting it working in a way that feels genuinely useful can be an uphill challenge, and it might be worth spending some more time actually using Now Nudge before we make any judgements about how successful Samsung was with this effort.",
      "url": "https://www.androidauthority.com/galaxy-s26-now-nudge-3643684/",
      "domain": "androidauthority.com",
      "postedAt": "2026-02-25",
      "capturedAt": "2026-10-02",
      "userType": "Reviewer or press",
      "themeIds": [
        "comparison"
      ],
      "sentiment": "neu",
      "takeaway": "Launch coverage frames Now Nudge as Samsung's Magic Cue and holds judgement until real use.",
      "engagement": {},
      "truncated": true,
      "competitor": true
    },
    {
      "id": "s55",
      "run": 1,
      "kind": "article",
      "platform": "XDA",
      "site": "XDA Developers",
      "where": "Review",
      "title": "Samsung Galaxy S26 Ultra review: Samsung's most complete phone yet",
      "content": "I ran into issues with the Pixel 10 Pro's Magic Cue feature, and I've encountered the same problem with Samsung's version of the same concept, Now Nudge. The feature is supposed to analyze what's on your screen, whether it's text or images, and offer useful shortcuts, like sending photos to a friend from a recent trip. I've mostly used the Galaxy S26 Ultra as my main device for the past few weeks, and it still hasn't shown up for me. Samsung says it can take time for the feature to learn how you use your smartphone before it activates.",
      "url": "https://www.xda-developers.com/samsung-galaxy-s26-ultra-review/",
      "domain": "xda-developers.com",
      "postedAt": "2026-03-12",
      "capturedAt": "2026-10-02",
      "userType": "Reviewer or press",
      "themeIds": [
        "triggering",
        "comparison"
      ],
      "sentiment": "neg",
      "takeaway": "After weeks of daily use, a reviewer never saw Now Nudge appear — the same problem they had with Magic Cue.",
      "engagement": {},
      "truncated": true,
      "competitor": true
    },
    {
      "id": "s56",
      "run": 1,
      "kind": "article",
      "platform": "BL",
      "site": "Android Police",
      "where": "Feature",
      "title": "This underrated Samsung Galaxy 26 feature is a game-changer. Here's how I use it",
      "content": "When someone shares their location, Now nudge detects that and suggests the action above the keyboard, allowing me to view the location in a map app.",
      "url": "https://www.androidpolice.com/underrated-samsung-galaxy-26-feature-game-changer-how-i-use-it/",
      "domain": "androidpolice.com",
      "postedAt": "2026-03-27",
      "capturedAt": "2026-10-02",
      "userType": "Reviewer or press",
      "themeIds": [
        "usefulness",
        "anticipation"
      ],
      "sentiment": "pos",
      "takeaway": "A reviewer uses it daily and calls it a game-changer, especially for opening shared locations in Maps.",
      "engagement": {},
      "truncated": true
    },
    {
      "id": "s57",
      "run": 1,
      "kind": "article",
      "platform": "BL",
      "site": "Digital Trends",
      "where": "News",
      "title": "Galaxy S25 users are finally getting some missing One UI 8.5 AI features",
      "content": "Features such as Now Nudge, the 24MP camera mode, improved fingerprint accuracy option, and some camera-related tools are still missing.",
      "url": "https://www.digitaltrends.com/phones/galaxy-s25-users-are-finally-getting-some-missing-one-ui-8-5-ai-features/",
      "domain": "digitaltrends.com",
      "postedAt": "2026-06-12",
      "capturedAt": "2026-10-02",
      "userType": "Reviewer or press",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "June update brought some S26 AI features to the S25, but not Now Nudge.",
      "engagement": {},
      "truncated": true
    },
    {
      "id": "s58",
      "run": 1,
      "kind": "article",
      "platform": "BL",
      "site": "Android Authority",
      "where": "News",
      "title": "Galaxy S24 series gets second One UI 9 beta, bringing the Z Fold 8's best features",
      "content": "Tipster Tarun Vats and Redditors report that the second One UI 9 beta (firmware version ending in ZZI4) is out now for the Galaxy S24 range. Best of all, this update brings Now Nudge, My FanCam, Call Brief, and custom cards in Now Brief to Samsung’s 2024 flagships.",
      "url": "https://www.androidauthority.com/samsung-galaxy-s24-one-ui-9-beta-features-3710765/",
      "domain": "androidauthority.com",
      "postedAt": "2026-09-14",
      "capturedAt": "2026-10-02",
      "userType": "Reviewer or press",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "pos",
      "takeaway": "One UI 9 Beta 2 brings Now Nudge to the Galaxy S24 series.",
      "engagement": {},
      "truncated": true
    },
    {
      "id": "s59",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "Now Nudge : How useful is this one? 🤷‍♀️",
      "url": "https://x.com/i/status/2032813642132156624",
      "domain": "x.com",
      "postedAt": "2026-03-14",
      "capturedAt": "2026-10-03",
      "userType": "Reviewer or press",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "neu",
      "takeaway": "Influencer post asking how useful Now Nudge is; most of its 19 replies are off-topic.",
      "engagement": {
        "reactions": 187,
        "comments": 19,
        "shares": 74,
        "views": 4571
      }
    },
    {
      "id": "s60",
      "run": 1,
      "kind": "comment",
      "platform": "X",
      "site": "X",
      "where": "Reply",
      "title": "",
      "content": "This is really useful.. that's how AI should be implemented",
      "url": "https://x.com/i/status/2032824449054224511",
      "domain": "x.com",
      "postedAt": "2026-03-14",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "pos",
      "takeaway": "Sees Now Nudge as the right way to build AI into a phone.",
      "engagement": {
        "reactions": 0,
        "views": 39
      },
      "parentTitle": "Now Nudge : How useful is this one? 🤷‍♀️"
    },
    {
      "id": "s61",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "I hope we get AI notifications and now nudge features",
      "url": "https://x.com/i/status/2044485024519430241",
      "domain": "x.com",
      "postedAt": "2026-04-15",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "Owner of an older Galaxy hopes Now Nudge comes to their phone.",
      "engagement": {
        "reactions": 7,
        "views": 443
      }
    },
    {
      "id": "s62",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "Do you think AI notifications and now nudge? I really am loving to see that Samsung is bringing almost everything from the s26 ultra to my s24 ultra.",
      "url": "https://x.com/i/status/2044484735032869287",
      "domain": "x.com",
      "postedAt": "2026-04-15",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "pos",
      "takeaway": "S24 Ultra owner is happy about features coming down from the S26 and asks about Now Nudge.",
      "engagement": {
        "reactions": 2,
        "comments": 1,
        "views": 538
      }
    },
    {
      "id": "s63",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "I saw a one ui 9 leak for s25 with now nudge\nCan you confirm that?",
      "url": "https://x.com/i/status/2046556043145359618",
      "domain": "x.com",
      "postedAt": "2026-04-21",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "S25 owner asks whether the One UI 9 leak with Now Nudge is real.",
      "engagement": {
        "reactions": 2,
        "comments": 1,
        "views": 1342
      }
    },
    {
      "id": "s64",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "Can you please tell me where is now nudge in S26? What ia that?",
      "url": "https://x.com/i/status/2057101651975245983",
      "domain": "x.com",
      "postedAt": "2026-05-20",
      "capturedAt": "2026-10-03",
      "userType": "S26 owner",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "S26 owner can't find Now Nudge and doesn't know what it is.",
      "engagement": {
        "reactions": 2,
        "views": 280
      }
    },
    {
      "id": "s65",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "Hoping for now nudge to come for S24, but i doubt",
      "url": "https://x.com/i/status/2065033456128811062",
      "domain": "x.com",
      "postedAt": "2026-06-11",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "S24 owner doubts Now Nudge will ever reach their phone.",
      "engagement": {
        "reactions": 2,
        "views": 206
      }
    },
    {
      "id": "s66",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "With One UI 9, the Now Nudge feature can now be used even without the Samsung keyboard‼️‼️\n\nNow you can use it in LINE or messaging apps while sticking with your favorite keyboard!",
      "url": "https://x.com/i/status/2080228277541810225",
      "domain": "x.com",
      "postedAt": "2026-07-23",
      "capturedAt": "2026-10-03",
      "userType": "Reviewer or press",
      "themeIds": [
        "keyboard",
        "coverage"
      ],
      "sentiment": "pos",
      "takeaway": "Tipster reports One UI 9 lets Now Nudge work without Samsung Keyboard; Samsung's changelog adds notification and floating-button suggestions.",
      "engagement": {
        "reactions": 16,
        "comments": 1,
        "views": 5440
      }
    },
    {
      "id": "s67",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "ok but I don't think S24 series will get the Now Nudge feature even if it uses the same Local LLM as S25. S24 is obsolete already imo",
      "url": "https://x.com/i/status/2080649996081287580",
      "domain": "x.com",
      "postedAt": "2026-07-24",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "Expects the S24 to be left out of Now Nudge.",
      "engagement": {
        "reactions": 2,
        "comments": 1,
        "views": 58
      }
    },
    {
      "id": "s68",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "What’s the one feature from the Z Fold 8 One UI 9 that you most want on the S26 series? \n\nFor me it’s the improved Now Brief cards and Call Brief. \n\nThe rest feels kinda secondary right now.\n\nIt'd be nice if Now Nudge worked in more apps.\n\n#OneUI9 #S26",
      "url": "https://x.com/i/status/2087792263912989103",
      "domain": "x.com",
      "postedAt": "2026-08-13",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage"
      ],
      "sentiment": "neu",
      "takeaway": "Wants Now Nudge to work in more apps.",
      "engagement": {
        "reactions": 12,
        "comments": 1,
        "shares": 1,
        "views": 914
      }
    },
    {
      "id": "s69",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "my thoughts on One UI 9 so far 👇 \n\nanimations are smooth AF 💨\nbattery life is good actually (beta 5)\nNow Nudge barely shows up 😔\nControl centre changes I love 😛\nshould've been 8.6 not 9 🫥\nnot a whole ton of changes 🤭\nmainly focuses on refinements",
      "url": "https://x.com/i/status/2090789053130055719",
      "domain": "x.com",
      "postedAt": "2026-08-21",
      "capturedAt": "2026-10-03",
      "userType": "S26 owner",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Widely seen One UI 9 beta review: Now Nudge 'barely shows up'.",
      "engagement": {
        "reactions": 453,
        "comments": 12,
        "shares": 15,
        "views": 28723
      }
    },
    {
      "id": "s70",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "Multitasking made easy 👀 #GalaxyZFold8 + #GalaxyAI  Now Nudge lets you jump into split screen with one tap. Less switching, more getting things done. 💙 \n@samsungmobilesa\n #AD",
      "url": "https://x.com/i/status/2091873431994179673",
      "domain": "x.com",
      "postedAt": "2026-08-24",
      "capturedAt": "2026-10-03",
      "userType": "Reviewer or press",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "pos",
      "takeaway": "Paid promotion (#AD) for the Fold 8, one of dozens posted on 24 Aug; not a user voice.",
      "engagement": {
        "reactions": 16,
        "comments": 5,
        "shares": 23,
        "views": 235
      }
    },
    {
      "id": "s71",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "Breaking!\n\nGreat news for Galaxy S24 Series users!\n\nThe One UI 9 Beta 2 update (ZZI4) finally brings Galaxy S26 and Z Fold8 AI features:\n\n*Now Nudge\n*My Fan Cam\n*Custom cards in Now Brief\n*Call Brief\n\nThe most-awaited features are finally here.",
      "url": "https://x.com/i/status/2099377976714592303",
      "domain": "x.com",
      "postedAt": "2026-09-14",
      "capturedAt": "2026-10-03",
      "userType": "Reviewer or press",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "pos",
      "takeaway": "The most-engaged Now Nudge post on X: a tipster announcing it for the S24 in One UI 9 Beta 2.",
      "engagement": {
        "reactions": 990,
        "comments": 134,
        "shares": 49,
        "views": 68811
      }
    },
    {
      "id": "s72",
      "run": 1,
      "kind": "comment",
      "platform": "X",
      "site": "X",
      "where": "Reply",
      "title": "",
      "content": "now nudge more powerfull ai power than notification highlights idk why they didnt add it",
      "url": "https://x.com/i/status/2099382898856219013",
      "domain": "x.com",
      "postedAt": "2026-09-14",
      "capturedAt": "2026-10-03",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "pos",
      "takeaway": "Sees Now Nudge as more powerful than Notification Highlights.",
      "engagement": {
        "reactions": 0,
        "views": 205
      },
      "parentTitle": "Breaking!\n\nGreat news for Galaxy S24 Series users!"
    },
    {
      "id": "s73",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "This update brings MyFanCam from Fold 8 and Now nudge from S26 Series. Also able to create custom now brief cards.  Great to see Samsung supporting older models too.",
      "url": "https://x.com/i/status/2099374670050988270",
      "domain": "x.com",
      "postedAt": "2026-09-14",
      "capturedAt": "2026-10-03",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "pos",
      "takeaway": "Welcomes Now Nudge on older models with the One UI 9 beta.",
      "engagement": {
        "reactions": 82,
        "comments": 10,
        "shares": 6,
        "views": 4384
      }
    },
    {
      "id": "s74",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "But the question is, does Now Nudge actually work with other apps? Because currently, it only works with WhatsApp and Instagram if you're using Google Chat or RCS messaging, and even then, it only suggests replies. Please clarify this for me.",
      "url": "https://x.com/i/status/2099545422104543421",
      "domain": "x.com",
      "postedAt": "2026-09-14",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Says it only works in a few apps and mostly just suggests replies.",
      "engagement": {
        "reactions": 4,
        "views": 886
      }
    },
    {
      "id": "s75",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "to this day I've never seen now nudge actually work",
      "url": "https://x.com/i/status/2099516082595700923",
      "domain": "x.com",
      "postedAt": "2026-09-14",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Has never seen Now Nudge work.",
      "engagement": {
        "reactions": 6,
        "views": 903
      }
    },
    {
      "id": "s76",
      "run": 1,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "daily driving every beta I haven't seen a single glitch or bug besides GPay not working on beta 1 and Now nudge not working at all",
      "url": "https://x.com/i/status/2105963876672036911",
      "domain": "x.com",
      "postedAt": "2026-10-02",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "On the One UI 9 betas, everything works except Now Nudge, which doesn't work at all.",
      "engagement": {
        "reactions": 0,
        "views": 228
      }
    },
    {
      "id": "s77",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "But... Now Nudge works??",
      "content": "I can't figure out whether the Now Nudge feature works on my S26 Ultra or not. - I've enabled all the features available in Galaxy AI - granted all possible authorisations - data processing has been extended to include Samsung servers as well, rather than just the device - I only use the Samsung keyboard Despite all that, I’ve never seen Now Nudge appear. On WhatsApp, I’ve been asked questions like “Can you send me the photos from yesterday?” or been asked to arrange meetings on more than one occasion, but Now Nudge has never made an appearance. Have I missed something? Where am I going wrong? I’m in Italy, and my phone is set to Italian, which is one of the supported languages. Is it possible that this feature hasn’t been enabled here yet (if I’m not mistaken, they said during the Unpacked event that it wasn’t yet active globally, but I could be wrong)?",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "anticipation",
        "languages"
      ],
      "sentiment": "neg",
      "takeaway": "In Italy, with every setting on and Samsung Keyboard, the user has never seen a nudge, even when asked for photos or meetings on WhatsApp.",
      "engagement": {},
      "postedApprox": "4 months ago"
    },
    {
      "id": "s78",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Same here. I just think this feature is unfinished or something",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Thinks the feature is unfinished.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s79",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Are you using Samsung Keyboard? I haven't seen a nudge because I use Gboard. I've been thinking of moving to Pixel because I basically use everything Google, and I don't get most of the benefits from Samsung.",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "keyboard"
      ],
      "sentiment": "neg",
      "takeaway": "Uses Gboard, has never seen a nudge, and is considering a Pixel.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s80",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Then it should be showing but for some reason it is not.",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "With Samsung Keyboard it should appear, but it doesn't.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s81",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Never seen it either. Dont think it works.",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Has never seen it and doesn't think it works.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s82",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "So many of us are saying this. At this point, I think it’s Samsung that’s put it on hold. Perhaps it will actually be enabled with One UI 9? 🤷‍♂️",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Suspects Samsung has paused the feature, perhaps until One UI 9.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s83",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "It works for me, but only really appears with text messages so far.",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering",
        "coverage"
      ],
      "sentiment": "mix",
      "takeaway": "Works, but only with text messages so far.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s84",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "So that isn't actually \"Now Nudge\" that you're seeing but the \"Writing assist\" ai feature. This should work for most people. Now nudge is supposed to actively link to your gallery or calendar depending on the conversations context. I.e someone asks about the beach trip yesterday and the phone will automatically suggest you send the photos from yesterday.",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Explains that what many see is Writing Assist, not Now Nudge, which should link to the gallery or calendar.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s85",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Ok seems that something happens! Now I've Now Nudge but only in Google Messages app. What I've done: - activate Suggested answers in Writing assistance AI functionality - wipe cache in \"Android System Intelligence\" and Samsung Keyboard Now I've Now Nudge functioning but only in that app. Nothing in Whatsapp or other apps but it's a beginning 😅",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup",
        "coverage"
      ],
      "sentiment": "mix",
      "takeaway": "After turning on suggested replies and clearing caches, it started working, but only in Google Messages.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s86",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Bro that is not now nudge, writing assist is a different ai feature, now nudge is not working",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup",
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Says the suggestions people see are Writing Assist; Now Nudge itself isn't working.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s87",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Si funciona, solo que a día de hoy, solo es compatible con Google Chat, Google Messages y Mensajes de Samsung.",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage"
      ],
      "sentiment": "neu",
      "takeaway": "Says it works, but only in Google Chat, Google Messages and Samsung Messages.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s88",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "I am in Austria and the only thing it does right now is giving me KI generated responses in my chats - but they are pretty useless. The strange thing is: I have the S26U since release and I am sure that Now Nudge initially was showing shortcuts to the calendar when talking about appointments and it was even showing me the location of a restaurant we were chatting about. But since a certain update (I think it was the update that arrived at the end of March) it's just proposing pretty useless responses in my chats - and nothing else. So here's hoping that the full functionality will come back one day.",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "In Austria, calendar and place nudges worked at first but stopped after a late-March update; now it only offers useless replies.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s89",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Same. It only shows up when I take a screenshot and suggests me to send it in chat",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering",
        "coverage"
      ],
      "sentiment": "neg",
      "takeaway": "Only shows up after taking a screenshot, to suggest sending it.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s90",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Using s 26 ultra since last 3 months and still haven't seen now nudge coming up on the keyboard. All required settings are turned on and i am using samsung keyboard.",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "S26 owner",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Three months on an S26 Ultra with Samsung Keyboard and every setting on, and still no nudge.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s91",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26ultra",
      "title": "",
      "content": "Solo es compatible con 3 apps, como son Google Chat, Google Mensajes y Mensajes de Samsung. Por eso no funciona. Es triste",
      "url": "https://www.reddit.com/r/galaxys26ultra/comments/1td1xoj/but_now_nudge_works/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage"
      ],
      "sentiment": "neg",
      "takeaway": "Says it only supports three apps, which is why it doesn't work for most people.",
      "engagement": {},
      "parentTitle": "But... Now Nudge works??",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s92",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "Now Nudge hasn't done anything yet",
      "content": "I've had my S26 Ultra for almost a week now. I switched over to Samsung Keyboard so I could try out some of the new software/AI features. Now Nudge has yet to do anything for me. What are some ways to trigger it?",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "keyboard"
      ],
      "sentiment": "neg",
      "takeaway": "Switched to Samsung Keyboard to try it; after a week, Now Nudge hasn't done anything.",
      "engagement": {},
      "postedApprox": "6 months ago"
    },
    {
      "id": "s93",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "Even the Galaxy Guide can't explain it lol",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neg",
      "takeaway": "Even Samsung's Galaxy Guide can't explain the feature.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "6 months ago"
    },
    {
      "id": "s94",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "Ask your friend to ask for pictures (like: \"can you send the pics from yesterday?\"), maybe now nudge will then show",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "anticipation",
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Suggests testing it by having a friend ask for yesterday's photos.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "6 months ago"
    },
    {
      "id": "s95",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "Encountered it a few times but not really useful atm. I had once asked for passport details and it gave my passport number.",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "usefulness",
        "autofill"
      ],
      "sentiment": "mix",
      "takeaway": "Seen it a few times; it once filled a passport number, but it's not really useful yet.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "6 months ago"
    },
    {
      "id": "s96",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "Has it worked for anyone consistently? 2 weeks in and i haven't seen it activate once yet. Posted about it last week and tried more methods and still no luck. Maybe it'll get fixed in the next update if we keep complaining about it",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Two weeks in, it hasn't activated once, despite trying several methods.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "6 months ago"
    },
    {
      "id": "s97",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "Nope. I've been waiting to see it and haven't seen it yet in the past 3 weeks.",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Hasn't seen it in three weeks of waiting.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "6 months ago"
    },
    {
      "id": "s98",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "Never worked for me and we are almost in June",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Has never worked, almost three months after launch.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s99",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "Yep I haven't seen it activate yet, nor have I seen proof of it working for ANYONE, only brief mentions of it in website reviews. I suspect samsung has deactivated or removed the feature since release. Many people who THINK they've seen it have actually only seen the \"writing assist\" feature, which is a separate AI function.",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering",
        "setup"
      ],
      "sentiment": "neg",
      "takeaway": "Has never seen proof of it working; suspects Samsung deactivated it and that people mistake Writing Assist for it.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s100",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "I called samsung about this and apparently it isn't functional yet in some regions. North America being one of them. It will be in a future update. Somethings show up like when im on chrome or Samsung internet. My name, passport, cell. Hopefully that was correct info and we get the update soon. They never mentioned this before opening preorders and purchasing. It would have been nice to know ahead of time.",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "languages",
        "autofill"
      ],
      "sentiment": "neg",
      "takeaway": "Samsung support said it isn't working yet in some regions, including North America; only personal-detail autofill shows up in the browser.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "6 months ago"
    },
    {
      "id": "s101",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "If you try to turn off personal intelligence it warns you that it can take several days to relearn your data so it starts suggesting again. I believe this applies as well to someone who uses it for the first time so it may take days for it to start suggesting.",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-05-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Thinks it may need several days of learning before suggestions start.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "5 months ago"
    },
    {
      "id": "s102",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "That's because Now nudges are a One UI 9.0 feature",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Believes Now Nudge is a One UI 9 feature (it launched with One UI 8.5).",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "6 months ago"
    },
    {
      "id": "s103",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "No? They're a One UI 8.5 launch feature for the S26 Series",
      "url": "https://www.reddit.com/r/oneui/comments/1rwdx67/now_nudge_hasnt_done_anything_yet/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Corrects the thread: it's a One UI 8.5 launch feature for the S26.",
      "engagement": {},
      "parentTitle": "Now Nudge hasn't done anything yet",
      "postedApprox": "6 months ago"
    },
    {
      "id": "s104",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "Now Nudge not working?",
      "content": "Anyone else noticed that now nudge doesn't work? Mine hasn't since I've got the phone.. has anyone managed to figure out how to get it to work besides having everything on in Galaxy Ai?",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1s6mzrx/now_nudge_not_working/",
      "domain": "reddit.com",
      "postedAt": "2026-05-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Has never worked since getting the phone, even with every Galaxy AI setting on.",
      "engagement": {},
      "postedApprox": "5 months ago"
    },
    {
      "id": "s105",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "Hola, alguien ha logrado solucionar, a mi tampoco me funciona Now Nudge, solo me brinda respuestas automaticas.",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1s6mzrx/now_nudge_not_working/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Doesn't work; only offers automatic replies.",
      "engagement": {},
      "parentTitle": "Now Nudge not working?",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s106",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "mine never worked properly either, tried enabling everything in galaxy ai settings but still nothing",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1s6mzrx/now_nudge_not_working/",
      "domain": "reddit.com",
      "postedAt": "2026-05-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Never worked properly, even with everything enabled.",
      "engagement": {},
      "parentTitle": "Now Nudge not working?",
      "postedApprox": "5 months ago"
    },
    {
      "id": "s107",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "It's soo stupid.. it was a game changer for me.. i have tons of clients who ask me if I'm free on this date and x time.. I was amazed that now nudge could potentially pull my calender and let me know from what I saw at Galaxy Unpacked to save me time going through my calender manually.. as well as my wife after a weekend asking me to send photos.. sad that what we see on Unpacked vs the actual device isn't what it is..",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1s6mzrx/now_nudge_not_working/",
      "domain": "reddit.com",
      "postedAt": "2026-05-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "anticipation",
        "triggering",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Bought into the Unpacked demo for checking availability with clients and sharing photos; the real device doesn't deliver.",
      "engagement": {},
      "parentTitle": "Now Nudge not working?",
      "postedApprox": "5 months ago"
    },
    {
      "id": "s108",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "A mí me pasa igual. No funciona para nada. Al inicio, sólo salió por un día en Google messenger y no en otra app. Será que #Samsung nos pueda responder?",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1s6mzrx/now_nudge_not_working/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering",
        "coverage"
      ],
      "sentiment": "neg",
      "takeaway": "Showed up for one day in Google Messages, then never again.",
      "engagement": {},
      "parentTitle": "Now Nudge not working?",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s109",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "El principal problema de Now Nudge, es que solo es compatible con el teclado de Samsung, y unicamente en 3 apps, Samsung Messages, Google Messages y Google Chat",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1s6mzrx/now_nudge_not_working/",
      "domain": "reddit.com",
      "postedAt": "2026-09-15",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "keyboard",
        "coverage"
      ],
      "sentiment": "neg",
      "takeaway": "Says the main problem is that it needs Samsung Keyboard and only works in three apps.",
      "engagement": {},
      "parentTitle": "Now Nudge not working?",
      "postedApprox": "18 days ago"
    },
    {
      "id": "s110",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyFold",
      "title": "Now nudge and whats app?",
      "content": "Has anyone had any joy getting now nudge to work in whats app? Feel like this feature would be particularly useful for me if it worked but doesn't seem to work in whats app. Seems to work in messages fine but I never text anymore, as I'm sure most people are the same? Starting to give up hope and going to revert back to gboard at this rate 🤣",
      "url": "https://www.reddit.com/r/GalaxyFold/comments/1vhoe9r/now_nudge_and_whats_app/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Fold 8 / Flip 8 owner",
      "themeIds": [
        "coverage",
        "triggering",
        "keyboard"
      ],
      "sentiment": "neg",
      "takeaway": "Works in Messages but not WhatsApp, where they actually chat; close to going back to Gboard.",
      "engagement": {},
      "postedApprox": "2 months ago"
    },
    {
      "id": "s111",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyFold",
      "title": "",
      "content": "I can't even get it to show up in messages.",
      "url": "https://www.reddit.com/r/GalaxyFold/comments/1vhoe9r/now_nudge_and_whats_app/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Can't get it to appear even in Messages.",
      "engagement": {},
      "parentTitle": "Now nudge and whats app?",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s112",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyFold",
      "title": "",
      "content": "I actually managed to get it working there tbh. But no one ever sends me a normal text now!",
      "url": "https://www.reddit.com/r/GalaxyFold/comments/1vhoe9r/now_nudge_and_whats_app/",
      "domain": "reddit.com",
      "postedAt": "2026-09-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage",
        "usefulness"
      ],
      "sentiment": "mix",
      "takeaway": "Got it working in Messages, but nobody sends normal texts any more.",
      "engagement": {},
      "parentTitle": "Now nudge and whats app?",
      "postedApprox": "1 month ago"
    },
    {
      "id": "s113",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyFold",
      "title": "",
      "content": "Yeah it's strange. It's working for me in google messages and not whatsapp. I've just watched a video on YouTube showing it working in whatsapp. Maybe it's region lock. Im in Australia 6:03 into linked video. But on S series phone",
      "url": "https://www.reddit.com/r/GalaxyFold/comments/1vhoe9r/now_nudge_and_whats_app/",
      "domain": "reddit.com",
      "postedAt": "2026-09-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage",
        "languages"
      ],
      "sentiment": "mix",
      "takeaway": "In Australia it works in Google Messages but not WhatsApp; wonders whether it's region-locked.",
      "engagement": {},
      "parentTitle": "Now nudge and whats app?",
      "postedApprox": "1 month ago"
    },
    {
      "id": "s114",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyFold",
      "title": "",
      "content": "So I actually have gotten as far as getting what he shows to work but what was sold was calendar prompts when someone mentions a date etc so you can check which doesn't seem to work!",
      "url": "https://www.reddit.com/r/GalaxyFold/comments/1vhoe9r/now_nudge_and_whats_app/",
      "domain": "reddit.com",
      "postedAt": "2026-09-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "anticipation",
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Reply suggestions work, but the advertised calendar prompts don't.",
      "engagement": {},
      "parentTitle": "Now nudge and whats app?",
      "postedApprox": "1 month ago"
    },
    {
      "id": "s115",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyFold",
      "title": "",
      "content": "En el 95% de las regiones en WhatsApp solo funciona para sugerencias de texto. Pero si es cierto que en alguna que otra región funciona completamente dentro de WhatsApp como se puede ver en las imágenes que adjunto.",
      "url": "https://www.reddit.com/r/GalaxyFold/comments/1vhoe9r/now_nudge_and_whats_app/",
      "domain": "reddit.com",
      "postedAt": "2026-09-25",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage",
        "languages"
      ],
      "sentiment": "neu",
      "takeaway": "Says that in most regions it only gives text suggestions in WhatsApp, with full support in a few.",
      "engagement": {},
      "parentTitle": "Now nudge and whats app?",
      "postedApprox": "8 days ago"
    },
    {
      "id": "s116",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyFold",
      "title": "",
      "content": "I can see the suggested AI response based on the messages but I never see the add to calendar suggestions that I see in the z fold 8 demo units at best buy",
      "url": "https://www.reddit.com/r/GalaxyFold/comments/1vhoe9r/now_nudge_and_whats_app/",
      "domain": "reddit.com",
      "postedAt": "2026-09-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "anticipation",
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Sees reply suggestions but never the calendar prompts shown on Fold 8 demo units in stores.",
      "engagement": {},
      "parentTitle": "Now nudge and whats app?",
      "postedApprox": "1 month ago"
    },
    {
      "id": "s117",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyFold",
      "title": "",
      "content": "No perdáis el tiempo. Now Nudge, solo es compatible con Google Messages, Samsung Messages, y Google Chat. Lo pone en la letra pequeña de todos sus últimos vídeos de presentación. En WhatsApp, como en muchas otras apps de mensajería, únicamente proporciona sugerencias de respuesta.",
      "url": "https://www.reddit.com/r/GalaxyFold/comments/1vhoe9r/now_nudge_and_whats_app/",
      "domain": "reddit.com",
      "postedAt": "2026-09-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "coverage"
      ],
      "sentiment": "neg",
      "takeaway": "Says the fine print limits it to three apps; elsewhere it only suggests replies.",
      "engagement": {},
      "parentTitle": "Now nudge and whats app?",
      "postedApprox": "1 month ago"
    },
    {
      "id": "s118",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "content": "Now nudge was added on a new One UI 9 firmware for Galaxy S25. https://x.com/i/status/2080558617288495336",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Reviewer or press",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "News post: Now Nudge found in One UI 9 firmware for the S25.",
      "engagement": {},
      "postedApprox": "2 months ago"
    },
    {
      "id": "s119",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "Always thought Now Brief was just a gimmick but if they adding more control with nudge it might actually be useful. My S24 still runs smooth so hope they really push this update for it too, Samsung usually slow with these things",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity",
        "usefulness"
      ],
      "sentiment": "pos",
      "takeaway": "S24 owner thinks Now Nudge might be useful and hopes it reaches their phone.",
      "engagement": {},
      "parentTitle": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s120",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "I doubt they will being it to the FE series... for Ultra and the main S series, sure maybe... but Samsung is been very lazy lately bringing new features to the FE series...",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "Doubts the FE series will get it.",
      "engagement": {},
      "parentTitle": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s121",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "Same here with S24 Ultra. Would be a waste not to anyway 🫠",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "S24 Ultra owner wants it too.",
      "engagement": {},
      "parentTitle": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s122",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "Anyone care to explain what is it for people who don't know?",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Asks what Now Nudge even is.",
      "engagement": {},
      "parentTitle": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s123",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "You ever play Legend of Zelda: Ocarina of Time ? Remember when Navi who insistently bother you constantly with \"Hey, Listen!\" over and over and over again without stop to tell you to do something when you had no actual intention of doing it and were just trying to have fun? That's Now Nudge.",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "intrusiveness"
      ],
      "sentiment": "neg",
      "takeaway": "Compares Now Nudge to Navi's constant 'Hey, Listen!': a nag nobody asked for.",
      "engagement": {},
      "parentTitle": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s124",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "The best feature for this technology is shown in OP's photo, and I'm so glad it's there. The toggle is very simple to disable this! Seriously the second I saw this feature in practice as a demo I immediately had PTSD flashbacks of Legend of Zeld: Ocarina of Time. No, Google/Samsung, under no circumstance do I want my phone telling me things I ought to do, and I absolutely don't want to have the phone's systems scanning every little text, e-mail, etc seeking out ways to annoy me all day long. Almost making me not regret my swap to iOS at this rate.",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Brand switcher",
      "themeIds": [
        "intrusiveness",
        "privacy"
      ],
      "sentiment": "neg",
      "takeaway": "Glad it can be switched off; doesn't want the phone scanning messages or telling them what to do.",
      "engagement": {},
      "parentTitle": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s125",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "Coming from a 26U user it's useless and quite annoying...",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-09-03",
      "capturedAt": "2026-10-03",
      "userType": "S26 owner",
      "themeIds": [
        "usefulness",
        "intrusiveness"
      ],
      "sentiment": "neg",
      "takeaway": "S26 Ultra owner finds it useless and quite annoying.",
      "engagement": {},
      "parentTitle": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "postedApprox": "1 month ago"
    },
    {
      "id": "s126",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "More Samsung bloatware",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Dismisses it as more Samsung bloatware.",
      "engagement": {},
      "parentTitle": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s127",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsunggalaxy",
      "title": "",
      "content": "pretty much - It's another AI feature to pad their numbers of the current gen smartphones which have seen little to no major hardware revisions since the s22u.",
      "url": "https://www.reddit.com/r/samsunggalaxy/comments/1v54tns/exclusive_samsung_to_bring_now_nudge_to_galaxy/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Sees it as an AI feature to pad out phones with few hardware changes.",
      "engagement": {},
      "parentTitle": "Exclusive: Samsung to bring Now nudge to Galaxy S25, possibly even to Galaxy S24",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s128",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsung",
      "title": "S25 Series will be getting Now Nudges with One UI 9",
      "content": "",
      "url": "https://www.reddit.com/r/samsung/comments/1v7c56o/s25_series_will_be_getting_now_nudges_with_one_ui/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Reviewer or press",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "News post: the S25 series will get Now Nudge with One UI 9.",
      "engagement": {},
      "postedApprox": "2 months ago"
    },
    {
      "id": "s129",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsung",
      "title": "",
      "content": "Imagine the company is so brutal for older devices that a one year old device receiving the new feature is an extraordinary news",
      "url": "https://www.reddit.com/r/samsung/comments/1v7c56o/s25_series_will_be_getting_now_nudges_with_one_ui/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "Criticises Samsung for treating a one-year-old phone getting a feature as big news.",
      "engagement": {},
      "parentTitle": "S25 Series will be getting Now Nudges with One UI 9",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s130",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsung",
      "title": "",
      "content": "they weren't going to add to s24 & s25 until people complained. it was an exclusive feature for s26 series.",
      "url": "https://www.reddit.com/r/samsung/comments/1v7c56o/s25_series_will_be_getting_now_nudges_with_one_ui/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "Believes the S24 and S25 only got it because people complained.",
      "engagement": {},
      "parentTitle": "S25 Series will be getting Now Nudges with One UI 9",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s131",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsung",
      "title": "",
      "content": "Welcome to Samsung where they promise updates and then bogart those updates for each new release lmao",
      "url": "https://www.reddit.com/r/samsung/comments/1v7c56o/s25_series_will_be_getting_now_nudges_with_one_ui/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "Frustrated that Samsung holds features back for each new release.",
      "engagement": {},
      "parentTitle": "S25 Series will be getting Now Nudges with One UI 9",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s132",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsung",
      "title": "",
      "content": "> Now nudge understands what's on your screen and suggests helpful information and features. Absolutely not. > Samsung does not collect, store, or process your data to provide Now nudge suggestions. Even worse, who is the third party?",
      "url": "https://www.reddit.com/r/samsung/comments/1v7c56o/s25_series_will_be_getting_now_nudges_with_one_ui/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "privacy"
      ],
      "sentiment": "neg",
      "takeaway": "Refuses a feature that reads the screen and questions which third party is involved.",
      "engagement": {},
      "parentTitle": "S25 Series will be getting Now Nudges with One UI 9",
      "postedApprox": "2 months ago"
    },
    {
      "id": "s133",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyS24",
      "title": "Now Nudge giving real-time suggestions sounds interesting. Helpful or potentially distracting?",
      "content": "",
      "url": "https://www.reddit.com/r/GalaxyS24/comments/1reordy/now_nudge_giving_realtime_suggestions_sounds/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "usefulness",
        "intrusiveness"
      ],
      "sentiment": "neu",
      "takeaway": "Asks whether real-time suggestions are helpful or distracting.",
      "engagement": {},
      "postedApprox": "7 months ago"
    },
    {
      "id": "s134",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyS24",
      "title": "",
      "content": "Google had it first (not that it matters). Good in concept, but I don't know, I've tried it before and it's not that reliable.",
      "url": "https://www.reddit.com/r/GalaxyS24/comments/1reordy/now_nudge_giving_realtime_suggestions_sounds/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "comparison",
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Good concept, but in their experience (Google had it first) not reliable.",
      "engagement": {},
      "parentTitle": "Now Nudge giving real-time suggestions sounds interesting. Helpful or potentially distracting?",
      "competitor": true,
      "postedApprox": "7 months ago"
    },
    {
      "id": "s135",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyS24",
      "title": "",
      "content": "It doesn't matter why is it the first thing you mention. Lol. Bad though it's bad in every way. Means your phone is literally memory remembering everything you put on your screen at every time even on encrypted sites like signal. Samsung recall instead of Windows recall. Wants to distracted by the stupid privacy screen they don't realize that using the s25 ultra with now nudge is The biggest privacy disaster since Windows recall.",
      "url": "https://www.reddit.com/r/GalaxyS24/comments/1reordy/now_nudge_giving_realtime_suggestions_sounds/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "privacy"
      ],
      "sentiment": "neg",
      "takeaway": "Calls it 'Samsung Recall': a privacy disaster that remembers everything on screen, even in Signal.",
      "engagement": {},
      "parentTitle": "Now Nudge giving real-time suggestions sounds interesting. Helpful or potentially distracting?",
      "postedApprox": "7 months ago"
    },
    {
      "id": "s136",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyS24",
      "title": "",
      "content": "It's Windows recall. wouldn't know what I'm typing on signal. This is outrageous. absolutely stupid dangerous privacy invading etc",
      "url": "https://www.reddit.com/r/GalaxyS24/comments/1reordy/now_nudge_giving_realtime_suggestions_sounds/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "privacy"
      ],
      "sentiment": "neg",
      "takeaway": "Sees it as privacy-invading, like Windows Recall.",
      "engagement": {},
      "parentTitle": "Now Nudge giving real-time suggestions sounds interesting. Helpful or potentially distracting?",
      "postedApprox": "7 months ago"
    },
    {
      "id": "s137",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/GalaxyS24",
      "title": "",
      "content": "Except it only processes on the Knox security chip, and encrypts anything it uses looks are out uses to provide suggestions. Everything happens on the phone only, and nobody can see or gain access to any of your personal information or data.",
      "url": "https://www.reddit.com/r/GalaxyS24/comments/1reordy/now_nudge_giving_realtime_suggestions_sounds/",
      "domain": "reddit.com",
      "postedAt": "2026-04-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "privacy"
      ],
      "sentiment": "pos",
      "takeaway": "Counters that processing stays on the device, in Knox, and is encrypted.",
      "engagement": {},
      "parentTitle": "Now Nudge giving real-time suggestions sounds interesting. Helpful or potentially distracting?",
      "postedApprox": "6 months ago"
    },
    {
      "id": "s138",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "Any way to open now nudge section in settings?",
      "content": "currently using a custom rom, elite ui culto 8.4.0 i dont remember how but i managed to show the now nudge option in the settings... but when i click on it just says \"not allowed to access this feature\". if any smart dev can suggest me something to try comment down here! thank you all in advance😄",
      "url": "https://www.reddit.com/r/oneui/comments/1riawfd/any_way_to_open_now_nudge_section_in_settings/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity",
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Tries to unlock Now Nudge on an older phone with a custom ROM; settings say 'not allowed'.",
      "engagement": {},
      "postedApprox": "7 months ago"
    },
    {
      "id": "s139",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "Check it in system ui tuner enable it from there using the method people enabled the now breif on older devices in august 2025",
      "url": "https://www.reddit.com/r/oneui/comments/1riawfd/any_way_to_open_now_nudge_section_in_settings/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Suggests a System UI Tuner workaround.",
      "engagement": {},
      "parentTitle": "Any way to open now nudge section in settings?",
      "postedApprox": "7 months ago"
    },
    {
      "id": "s140",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "So, I tried the og method, personal data intelligence dev and things but that section doesnt open, also the one you said (with system ui tuner) how does it work? I did it long ago and i dont remember nor cant find a tutorial😅 Could you help me?",
      "url": "https://www.reddit.com/r/oneui/comments/1riawfd/any_way_to_open_now_nudge_section_in_settings/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Workarounds via Personal Data Intelligence don't open the section.",
      "engagement": {},
      "parentTitle": "Any way to open now nudge section in settings?",
      "postedApprox": "7 months ago"
    },
    {
      "id": "s141",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "how to get this i mean how to activate this now nudge ?? on any samsung phone one ui 8.0?",
      "url": "https://www.reddit.com/r/oneui/comments/1riawfd/any_way_to_open_now_nudge_section_in_settings/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "Asks how to activate it on One UI 8.0.",
      "engagement": {},
      "parentTitle": "Any way to open now nudge section in settings?",
      "postedApprox": "7 months ago"
    },
    {
      "id": "s142",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "So I got the option by downloading an apk of personal data intelligence from apkmirror, the latest possible and it appeared!",
      "url": "https://www.reddit.com/r/oneui/comments/1riawfd/any_way_to_open_now_nudge_section_in_settings/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "mix",
      "takeaway": "Got the option to appear by sideloading the Personal Data Intelligence app.",
      "engagement": {},
      "parentTitle": "Any way to open now nudge section in settings?",
      "postedApprox": "7 months ago"
    },
    {
      "id": "s143",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "BTW I haven't found a way for now",
      "url": "https://www.reddit.com/r/oneui/comments/1riawfd/any_way_to_open_now_nudge_section_in_settings/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neg",
      "takeaway": "Still hasn't found a way to make it work.",
      "engagement": {},
      "parentTitle": "Any way to open now nudge section in settings?",
      "postedApprox": "7 months ago"
    },
    {
      "id": "s144",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "That's a great question about \"Nudge\"! It sounds like you're looking to dive into some of the latest Galaxy features. \"Nudge\" is actually a cool feature that comes with Galaxy AI on the new Galaxy S26 Series. It's designed to give you information right when you need it, sometimes even before you realize it! If you're curious about all the awesome things Galaxy AI can do, you can check out the S26 Series.",
      "url": "https://www.reddit.com/r/oneui/comments/1riawfd/any_way_to_open_now_nudge_section_in_settings/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "Samsung (official or bot)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Samsung's Galaxy Guide bot replies with marketing copy instead of help.",
      "engagement": {},
      "parentTitle": "Any way to open now nudge section in settings?",
      "postedApprox": "7 months ago"
    },
    {
      "id": "s145",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "title": "",
      "content": "Because it's not a feature yet, got to wait until 9.0",
      "url": "https://www.reddit.com/r/oneui/comments/1riawfd/any_way_to_open_now_nudge_section_in_settings/",
      "domain": "reddit.com",
      "postedAt": "2026-03-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Believes it isn't a feature yet and needs One UI 9.",
      "engagement": {},
      "parentTitle": "Any way to open now nudge section in settings?",
      "postedApprox": "7 months ago"
    },
    {
      "id": "s146",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S24Ultra",
      "title": "Does now nudge work for anyone on the latest one ui 9 beta?",
      "content": "I updated yesterday, but i still cannot get now nudge to work, when creating custom cards. I keep getting the error \"online processing isn't responding. please try again later.\" I have all of the necessary items enabled, I think. s24 ultra. Carrier unlocked. all apps updated via play store and galaxy store as well.",
      "url": "https://www.reddit.com/r/S24Ultra/comments/1wgtz97/does_now_nudge_work_for_anyone_on_the_latest_one/",
      "domain": "reddit.com",
      "postedAt": "2026-10-03",
      "capturedAt": "2026-10-03",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "triggering",
        "setup"
      ],
      "sentiment": "neg",
      "takeaway": "S24 Ultra on the One UI 9 beta can't get it working; the error is actually from Now Brief custom cards.",
      "engagement": {},
      "postedApprox": "22 hours ago"
    },
    {
      "id": "s147",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S24Ultra",
      "title": "",
      "content": "It doesnt even work properly on the fold 8 yet. Still kinda nascent in implementation.",
      "url": "https://www.reddit.com/r/S24Ultra/comments/1wgtz97/does_now_nudge_work_for_anyone_on_the_latest_one/",
      "domain": "reddit.com",
      "postedAt": "2026-10-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Says it doesn't work properly even on the Fold 8 yet.",
      "engagement": {},
      "parentTitle": "Does now nudge work for anyone on the latest one ui 9 beta?",
      "postedApprox": "21 hours ago"
    },
    {
      "id": "s148",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S24Ultra",
      "title": "",
      "content": "This is good to know. When I googled the issue, there wasn't much info on it. Thanks, I assumed I had just set it up wrong.",
      "url": "https://www.reddit.com/r/S24Ultra/comments/1wgtz97/does_now_nudge_work_for_anyone_on_the_latest_one/",
      "domain": "reddit.com",
      "postedAt": "2026-10-03",
      "capturedAt": "2026-10-03",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Assumed they had set it up wrong; there's little information online.",
      "engagement": {},
      "parentTitle": "Does now nudge work for anyone on the latest one ui 9 beta?",
      "postedApprox": "21 hours ago"
    },
    {
      "id": "s149",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S24Ultra",
      "title": "",
      "content": "Ah don't worry. I'm sure it needs more time to index stuff too, plus it all depends on how well android allows this stuff to work, which would determine accuracy and reliability. A few months in would be a good point to judge it's usability. Glad they didn't exclude this from the s24 tho.",
      "url": "https://www.reddit.com/r/S24Ultra/comments/1wgtz97/does_now_nudge_work_for_anyone_on_the_latest_one/",
      "domain": "reddit.com",
      "postedAt": "2026-10-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "exclusivity",
        "triggering"
      ],
      "sentiment": "mix",
      "takeaway": "Expects it needs time to index; glad the S24 wasn't left out.",
      "engagement": {},
      "parentTitle": "Does now nudge work for anyone on the latest one ui 9 beta?",
      "postedApprox": "18 hours ago"
    },
    {
      "id": "s150",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S24Ultra",
      "title": "",
      "content": "Now nudge and custom cards are different. Custom cards are under now brief. Now nudge is in a different menu. Both menus function for me, I can't say I use either yet.",
      "url": "https://www.reddit.com/r/S24Ultra/comments/1wgtz97/does_now_nudge_work_for_anyone_on_the_latest_one/",
      "domain": "reddit.com",
      "postedAt": "2026-10-03",
      "capturedAt": "2026-10-03",
      "userType": "Older Galaxy on One UI 9 beta",
      "themeIds": [
        "setup"
      ],
      "sentiment": "neu",
      "takeaway": "Explains Now Nudge and Now Brief custom cards are separate menus.",
      "engagement": {},
      "parentTitle": "Does now nudge work for anyone on the latest one ui 9 beta?",
      "postedApprox": "2 hours ago"
    },
    {
      "id": "s151",
      "run": 1,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S25Ultra",
      "title": "Did the S25 Ultra get all of the agentic AI features with the One UI 8.5 update?",
      "content": "I'm thinking of getting s25 ultra but I'll buy the upgrade if it doesn't have these features. Now Nudge Now Brief and Cross-App Multi-Step Bixby/Gemini and Triple Agent Integration, Finder AI, AI Call Screening, Audio Eraser, Writing & Note Assist, AI Select, Intelligent Document Scanner. Are these all present or are some of these missing? I just want the agentic features like autobooking uber and all.",
      "url": "https://www.reddit.com/r/S25Ultra/comments/1u29np8/did_the_s25_ultra_get_all_of_the_agentic_ai/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "Prospective buyer asks whether the S25 Ultra has Now Nudge and other S26 AI features.",
      "engagement": {},
      "postedApprox": "4 months ago"
    },
    {
      "id": "s152",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S25Ultra",
      "title": "",
      "content": "Never in my wildest dreams did ever imagine someone would even think about \"agentic\" ai features as a reason to buy a phone",
      "url": "https://www.reddit.com/r/S25Ultra/comments/1u29np8/did_the_s25_ultra_get_all_of_the_agentic_ai/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Doubts anyone would choose a phone for 'agentic' AI features.",
      "engagement": {},
      "parentTitle": "Did the S25 Ultra get all of the agentic AI features with the One UI 8.5 update?",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s153",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S25Ultra",
      "title": "",
      "content": "now nudge and finder AI are S26 only",
      "url": "https://www.reddit.com/r/S25Ultra/comments/1u29np8/did_the_s25_ultra_get_all_of_the_agentic_ai/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "Says Now Nudge is S26-only (at the time).",
      "engagement": {},
      "parentTitle": "Did the S25 Ultra get all of the agentic AI features with the One UI 8.5 update?",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s154",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S25Ultra",
      "title": "",
      "content": "Dude get the S27. Only by then will samsung make these features work and fully functioning.",
      "url": "https://www.reddit.com/r/S25Ultra/comments/1u29np8/did_the_s25_ultra_get_all_of_the_agentic_ai/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "triggering",
        "usefulness"
      ],
      "sentiment": "neg",
      "takeaway": "Expects these features to work properly only by the S27.",
      "engagement": {},
      "parentTitle": "Did the S25 Ultra get all of the agentic AI features with the One UI 8.5 update?",
      "postedApprox": "4 months ago"
    },
    {
      "id": "s155",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S25Ultra",
      "title": "",
      "content": "Not having it is actually a deal breaker for me. I have it on my Pixel and it's excellent",
      "url": "https://www.reddit.com/r/S25Ultra/comments/1u29np8/did_the_s25_ultra_get_all_of_the_agentic_ai/",
      "domain": "reddit.com",
      "postedAt": "2026-08-03",
      "capturedAt": "2026-10-03",
      "userType": "Pixel 10 owner",
      "themeIds": [
        "comparison",
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "Pixel owner says Magic Cue is excellent and lacking Now Nudge is a deal breaker.",
      "engagement": {},
      "parentTitle": "Did the S25 Ultra get all of the agentic AI features with the One UI 8.5 update?",
      "competitor": true,
      "postedApprox": "2 months ago"
    },
    {
      "id": "s156",
      "run": 1,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/S25Ultra",
      "title": "",
      "content": "I think everything you mentioned is there except for Now Nudge. Btw, as far as I know the \"autobooking\" features aren't available on any phone yet, but they most definitely will when it rolls out on the Gemini app.",
      "url": "https://www.reddit.com/r/S25Ultra/comments/1u29np8/did_the_s25_ultra_get_all_of_the_agentic_ai/",
      "domain": "reddit.com",
      "postedAt": "2026-06-03",
      "capturedAt": "2026-10-03",
      "userType": "Galaxy owner (device not stated)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neu",
      "takeaway": "Says everything is on the S25 except Now Nudge.",
      "engagement": {},
      "parentTitle": "Did the S25 Ultra get all of the agentic AI features with the One UI 8.5 update?",
      "postedApprox": "4 months ago"
    }
  ],
  "competitor": {
    "summary": "Magic Cue comes up in 5 of 156 posts, all from press. Launch coverage called Now Nudge Samsung's version of Magic Cue and found it more consistent at Unpacked; one reviewer later never saw either feature appear in daily use. Users on the forums and X don't compare the two.",
    "sourceIds": [
      "s53",
      "s54",
      "s55",
      "s134",
      "s155"
    ]
  }
}
;
