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
        "to": "2026-10-02"
      },
      "recent": {
        "from": "2026-08-03",
        "to": "2026-10-02"
      },
      "baseline": {
        "from": "2026-02-25",
        "to": "2026-08-02"
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
      "Reviewer or press"
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
        "date": "2026-09-14",
        "label": "One UI 9 Beta 2 brings Nudge to S24"
      }
    ],
    "limitations": [
      "Online forums lean negative and over-represent power users.",
      "Only public posts are included; private groups and support tickets are not.",
      "Early press often framed Now Nudge as a Magic Cue copy; press opinions are tagged separately from users.",
      "Now Nudge only exists on the Galaxy S26 series, so most voices are early adopters."
    ]
  },
  "runs": [
    {
      "id": "run-1",
      "n": 1,
      "date": "2026-10-02",
      "postsAdded": 58,
      "totalPosts": 58,
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
          "status": "failed",
          "note": "blocked from this environment"
        },
        {
          "name": "X",
          "status": "failed",
          "note": "requires sign-in"
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
        "First run: 58 posts captured, 52 from Samsung's own communities and 6 press articles.",
        "Sentiment is negative overall (net -32): most posts say nudges don't appear at all.",
        "Since August, talk has moved from 'older phones are left out' to 'it doesn't work on the S24 beta' and 'it doesn't work in WhatsApp or Telegram'.",
        "Turkish language support arrived around 1 October, with mixed early results.",
        "Reddit, X, YouTube comments and blog comments couldn't be read this run, so the numbers leave them out."
      ],
      "changes": {
        "new": [
          {
            "label": "Not working on the One UI 9 beta (S24)",
            "route": "emerging/s24-beta"
          },
          {
            "label": "WhatsApp and Telegram support",
            "route": "emerging/whatsapp-telegram"
          },
          {
            "label": "Turkish language support arrives",
            "route": "emerging/turkish"
          }
        ],
        "up": [],
        "down": [
          {
            "label": "Older Galaxy phones want it (and the S24 beta gets it)",
            "route": "emerging/older-devices"
          },
          {
            "label": "Only works with Samsung Keyboard",
            "route": "emerging/keyboard-only"
          }
        ],
        "resolved": []
      },
      "links": [
        {
          "type": "internal",
          "label": "Nudges not appearing",
          "route": "themes/triggering",
          "section": "Themes"
        },
        {
          "type": "internal",
          "label": "New: WhatsApp and Telegram support",
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
          "label": "Q2 · Does it appear when expected?",
          "route": "questions/q2",
          "section": "Research questions"
        },
        {
          "type": "internal",
          "label": "Sentiment by month",
          "route": "trend",
          "section": "Sentiment trend"
        },
        {
          "type": "external",
          "label": "Notification Highlights Are Welcome, But Its Not Enough Galaxy S25 Ultra Users Demand Full Feature Parity",
          "url": "https://us.community.samsung.com/t5/Galaxy-S25/Notification-Highlights-Are-Welcome-But-Its-Not-Enough-Galaxy/td-p/3590581",
          "domain": "us.community.samsung.com"
        },
        {
          "type": "external",
          "label": "Now Nudge, la nueva función de los Galaxy S26",
          "url": "https://eu.community.samsung.com/t5/galaxy-s26-series/now-nudge-la-nueva-funci%C3%B3n-de-los-galaxy-s26/td-p/14265683",
          "domain": "eu.community.samsung.com"
        },
        {
          "type": "external",
          "label": "S26 now nudge Türkçe dil desteği",
          "url": "https://r2.community.samsung.com/t5/Galaxy-S/S26-now-nudge-T%C3%BCrk%C3%A7e-dil-deste%C4%9Fi/m-p/22985585",
          "domain": "r2.community.samsung.com"
        }
      ],
      "snapshot": {
        "posts": 58,
        "net": -32,
        "emerging": 3,
        "answered": 5
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
        "net": 0,
        "vol": 11,
        "pos": 45,
        "neu": 10,
        "neg": 45
      },
      {
        "key": "2026-04",
        "label": "Apr",
        "tip": "Apr 2026",
        "net": 0,
        "vol": 1,
        "pos": 0,
        "neu": 100,
        "neg": 0
      },
      {
        "key": "2026-05",
        "label": "May",
        "tip": "May 2026",
        "net": -100,
        "vol": 3,
        "pos": 0,
        "neu": 0,
        "neg": 100
      },
      {
        "key": "2026-06",
        "label": "Jun",
        "tip": "Jun 2026",
        "net": -50,
        "vol": 4,
        "pos": 0,
        "neu": 50,
        "neg": 50
      },
      {
        "key": "2026-07",
        "label": "Jul",
        "tip": "Jul 2026",
        "net": -100,
        "vol": 2,
        "pos": 0,
        "neu": 0,
        "neg": 100
      },
      {
        "key": "2026-08",
        "label": "Aug",
        "tip": "Aug 2026",
        "net": -80,
        "vol": 5,
        "pos": 0,
        "neu": 20,
        "neg": 80
      },
      {
        "key": "2026-09",
        "label": "Sep",
        "tip": "Sep 2026",
        "net": -32,
        "vol": 22,
        "pos": 27,
        "neu": 14,
        "neg": 59
      },
      {
        "key": "2026-10",
        "label": "Oct",
        "tip": "Oct 2026 (to 2 Oct)",
        "net": -13,
        "vol": 8,
        "pos": 12,
        "neu": 63,
        "neg": 25
      }
    ]
  },
  "themes": [
    {
      "id": "usefulness",
      "pos": 38,
      "neu": 12,
      "neg": 50,
      "vol": 16,
      "base": 22,
      "recent": 31,
      "byPeriod": [
        null,
        100,
        null,
        null,
        null,
        null,
        null,
        -45,
        null
      ],
      "summary": "Split: people who get it working find it handy (places, locations, less typing), while others call it a gimmick because it rarely shows up.",
      "sourceIds": [
        "s43",
        "s33",
        "s38",
        "s47",
        "s1",
        "s18",
        "s53",
        "s4",
        "s34",
        "s14"
      ]
    },
    {
      "id": "triggering",
      "pos": 0,
      "neu": 13,
      "neg": 87,
      "vol": 23,
      "base": 26,
      "recent": 49,
      "byPeriod": [
        null,
        -100,
        null,
        null,
        null,
        null,
        -100,
        -100,
        -40
      ],
      "summary": "The most common complaint: nudges never appear, stop appearing, or only work in a few apps, on the S26, the Fold 8 and the S24 One UI 9 beta.",
      "sourceIds": [
        "s20",
        "s27",
        "s47",
        "s1",
        "s18",
        "s13",
        "s46",
        "s24",
        "s6",
        "s8"
      ]
    },
    {
      "id": "anticipation",
      "pos": 60,
      "neu": 20,
      "neg": 20,
      "vol": 5,
      "base": 9,
      "recent": 9,
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
      "summary": "People expect a nudge when a chat contains a date, a time, a place or a question about whether they're free.",
      "sourceIds": [
        "s43",
        "s33",
        "s24",
        "s4",
        "s56"
      ]
    },
    {
      "id": "keyboard",
      "pos": 14,
      "neu": 29,
      "neg": 57,
      "vol": 7,
      "base": 17,
      "recent": 9,
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
      "summary": "Needing Samsung Keyboard puts off Gboard users; some refuse to switch, and one switched and still saw nothing.",
      "sourceIds": [
        "s38",
        "s53",
        "s29",
        "s30",
        "s42",
        "s41",
        "s49"
      ]
    },
    {
      "id": "coverage",
      "pos": 12,
      "neu": 50,
      "neg": 38,
      "vol": 8,
      "base": 0,
      "recent": 23,
      "byPeriod": [
        null,
        null,
        null,
        null,
        null,
        null,
        -75,
        33,
        null
      ],
      "summary": "People expect nudges in WhatsApp and Telegram, where they actually chat; WhatsApp works inconsistently and Telegram not at all.",
      "sourceIds": [
        "s47",
        "s24",
        "s48",
        "s26",
        "s29",
        "s25",
        "s49",
        "s51"
      ]
    },
    {
      "id": "privacy",
      "pos": 50,
      "neu": 50,
      "neg": 0,
      "vol": 2,
      "base": 9,
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
      "summary": "Only two posts: one calls it 'a bit of privacy invasion', another is reassured that it runs on the device.",
      "sourceIds": [
        "s44",
        "s39"
      ]
    },
    {
      "id": "exclusivity",
      "pos": 27,
      "neu": 37,
      "neg": 36,
      "vol": 11,
      "base": 35,
      "recent": 9,
      "byPeriod": [
        null,
        null,
        null,
        -100,
        -33,
        null,
        null,
        100,
        null
      ],
      "summary": "S23, S24 and S25 owners felt left out after One UI 8.5; since mid-September the One UI 9 beta has brought it to the S24.",
      "sourceIds": [
        "s36",
        "s5",
        "s44",
        "s32",
        "s17",
        "s31",
        "s52",
        "s37",
        "s45",
        "s57"
      ]
    },
    {
      "id": "languages",
      "pos": 25,
      "neu": 50,
      "neg": 25,
      "vol": 4,
      "base": 0,
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
      "summary": "Turkish support arrived around 1 October; early reports range from 'working' to 'appeared once, then vanished'.",
      "sourceIds": [
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    {
      "id": "setup",
      "pos": 12,
      "neu": 38,
      "neg": 50,
      "vol": 8,
      "base": 13,
      "recent": 14,
      "byPeriod": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        0,
        null
      ],
      "summary": "Getting it to work can take several settings changes, support staff are unsure about it, and some users mix it up with Now Brief.",
      "sourceIds": [
        "s52",
        "s11",
        "s26",
        "s12",
        "s28",
        "s21",
        "s22",
        "s51"
      ]
    },
    {
      "id": "comparison",
      "pos": 0,
      "neu": 67,
      "neg": 33,
      "vol": 3,
      "base": 13,
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
        "s55"
      ]
    }
  ],
  "clusters": [
    {
      "id": "not-appearing",
      "name": "Nudges never appear or stop appearing",
      "themeId": "triggering",
      "base": 26,
      "recent": 20,
      "firstSeenRun": 1,
      "summary": "Owners of S26 and Fold 8 phones report Now Nudge never shows a suggestion, or stops after a while, even with every setting on.",
      "sourceIds": [
        "s20",
        "s27",
        "s18",
        "s46",
        "s24",
        "s19",
        "s28",
        "s30",
        "s50",
        "s21"
      ]
    },
    {
      "id": "s24-beta",
      "name": "Not working on the One UI 9 beta (S24)",
      "themeId": "triggering",
      "base": 0,
      "recent": 14,
      "firstSeenRun": 1,
      "summary": "Since One UI 9 Beta 2 reached the S24 (14 Sep), beta users report the feature is present but shows nothing.",
      "sourceIds": [
        "s1",
        "s13",
        "s6",
        "s2",
        "s15"
      ]
    },
    {
      "id": "older-devices",
      "name": "Older Galaxy phones want it (and the S24 beta gets it)",
      "themeId": "exclusivity",
      "base": 35,
      "recent": 9,
      "firstSeenRun": 1,
      "summary": "Owners of older Galaxy phones asked for Now Nudge after One UI 8.5 left it out; the S24 beta now has it.",
      "sourceIds": [
        "s36",
        "s5",
        "s44",
        "s32",
        "s17",
        "s31",
        "s52",
        "s37",
        "s45",
        "s57"
      ]
    },
    {
      "id": "whatsapp-telegram",
      "name": "WhatsApp and Telegram support",
      "themeId": "coverage",
      "base": 0,
      "recent": 23,
      "firstSeenRun": 1,
      "summary": "People want nudges in WhatsApp and Telegram; WhatsApp works for some after extra settings, Telegram does not.",
      "sourceIds": [
        "s47",
        "s24",
        "s48",
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
      "base": 17,
      "recent": 9,
      "firstSeenRun": 1,
      "summary": "Now Nudge only works with Samsung Keyboard, which keeps Gboard users from using it.",
      "sourceIds": [
        "s38",
        "s53",
        "s29",
        "s30",
        "s42",
        "s41",
        "s49"
      ]
    },
    {
      "id": "turkish",
      "name": "Turkish language support arrives",
      "themeId": "languages",
      "base": 0,
      "recent": 11,
      "firstSeenRun": 1,
      "summary": "Turkish language support arrived around 1 October with mixed early results.",
      "sourceIds": [
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    }
  ],
  "questions": [
    {
      "id": "q1",
      "short": "Mostly: it doesn't show up.",
      "answer": "The biggest problem is that nudges don't appear: they never show, stop showing, or only work in a few apps. After that come older phones being left out, WhatsApp and Telegram not working, needing Samsung Keyboard, and confusing setup.",
      "posts": 34,
      "confidence": 2,
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
        "s36",
        "s20",
        "s44",
        "s27",
        "s47",
        "s1",
        "s18",
        "s53"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-02",
          "short": "Mostly: it doesn't show up.",
          "text": "First answer (Run 1)."
        }
      ]
    },
    {
      "id": "q2",
      "short": "Mostly no.",
      "answer": "Most people who expect a nudge don't get one. It works for some in Samsung Messages and for calendar events, but often not in WhatsApp, Telegram or on the S24 beta. One reviewer never saw it in weeks of use.",
      "posts": 27,
      "confidence": 2,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "triggering",
        "anticipation"
      ],
      "sourceIds": [
        "s43",
        "s20",
        "s33",
        "s27",
        "s47",
        "s1",
        "s18",
        "s13"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-02",
          "short": "Mostly no.",
          "text": "First answer (Run 1)."
        }
      ]
    },
    {
      "id": "q3",
      "short": "Dates, times and places in chats.",
      "answer": "When a chat mentions a date, a time or a place, when a friend shares a location, or when someone asks whether they're free.",
      "posts": 5,
      "confidence": 1,
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
        "s56"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-02",
          "short": "Dates, times and places in chats.",
          "text": "First answer (Run 1)."
        }
      ]
    },
    {
      "id": "q4",
      "short": "Yes, when it works.",
      "answer": "People who get it working like saving places from chats, opening shared locations in Maps and typing less. Others call it a gimmick, but mostly because it rarely appears, not because the suggestions are bad.",
      "posts": 16,
      "confidence": 2,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "usefulness"
      ],
      "sourceIds": [
        "s43",
        "s33",
        "s38",
        "s47",
        "s1",
        "s18",
        "s53",
        "s4"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-02",
          "short": "Yes, when it works.",
          "text": "First answer (Run 1)."
        }
      ]
    },
    {
      "id": "q5",
      "short": "Too early to say.",
      "answer": "No post says nudges appear too often; the complaint is the opposite. One S25 owner called it 'a bit of privacy invasion' and asked to be able to turn it off; another was reassured that it runs on the device.",
      "posts": 2,
      "confidence": 0,
      "change": {
        "status": "new",
        "label": "Not enough data yet"
      },
      "themeIds": [
        "privacy",
        "intrusiveness"
      ],
      "sourceIds": [
        "s44",
        "s39"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-02",
          "short": "Too early to say.",
          "text": "First answer (Run 1)."
        }
      ]
    },
    {
      "id": "q6",
      "short": "Yes, WhatsApp and Telegram.",
      "answer": "Yes. Fold 8 and other owners want it in WhatsApp and Telegram, where they actually chat. WhatsApp works for some after extra settings; Telegram doesn't work at all.",
      "posts": 8,
      "confidence": 1,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "coverage"
      ],
      "sourceIds": [
        "s47",
        "s24",
        "s48",
        "s26",
        "s29",
        "s25",
        "s49",
        "s51"
      ],
      "history": [
        {
          "runId": "run-1",
          "date": "2026-10-02",
          "short": "Yes, WhatsApp and Telegram.",
          "text": "First answer (Run 1)."
        }
      ]
    }
  ],
  "insights": [
    {
      "id": "i1",
      "title": "The main complaint is that nudges don't show up",
      "body": "Most negative posts aren't about bad suggestions; they're about getting none at all. This shows up on the S26 since March, on the Fold 8 since August and on the S24 beta since September.",
      "status": "new",
      "pos": 0,
      "neu": 13,
      "neg": 87,
      "posts": 23,
      "themeIds": [
        "triggering"
      ],
      "sourceIds": [
        "s20",
        "s27",
        "s47",
        "s1",
        "s18",
        "s13",
        "s46",
        "s24"
      ]
    },
    {
      "id": "i2",
      "title": "People want nudges where they actually chat",
      "body": "Users expect nudges in WhatsApp and Telegram, and with the keyboard they already use. Both limits push people away, sometimes back to Gboard.",
      "status": "new",
      "pos": 15,
      "neu": 39,
      "neg": 46,
      "posts": 13,
      "themeIds": [
        "coverage",
        "keyboard"
      ],
      "sourceIds": [
        "s38",
        "s47",
        "s53",
        "s24",
        "s48",
        "s26",
        "s29",
        "s30"
      ]
    },
    {
      "id": "i3",
      "title": "Older-phone owners went from 'left out' to 'it doesn't work'",
      "body": "Complaints about the S25 and S24 missing Now Nudge peaked in May and June. Since the S24 beta added it in September, the posts are now about it not working.",
      "status": "new",
      "pos": 27,
      "neu": 37,
      "neg": 36,
      "posts": 11,
      "themeIds": [
        "exclusivity",
        "triggering"
      ],
      "sourceIds": [
        "s36",
        "s5",
        "s44",
        "s32",
        "s17",
        "s31",
        "s52",
        "s37"
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
    }
  ],
  "competitor": {
    "summary": "Magic Cue comes up in 3 of 58 posts, all from press. Launch coverage called Now Nudge Samsung's version of Magic Cue and found it more consistent at Unpacked; one reviewer later never saw either feature appear in daily use. Users themselves don't compare the two.",
    "sourceIds": [
      "s53",
      "s54",
      "s55"
    ]
  }
}
;
