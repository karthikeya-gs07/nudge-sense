/* SAMPLE DATA — NOT STUDY DATA.
   Loaded only when the dashboard is opened with ?sample (index.html?sample).
   Shows what a populated dashboard looks like. All URLs contain EXAMPLE.
   Same shape as voc-data.js; "config" is taken from voc-data.js. */
window.VOC_SAMPLE = {
  "meta": {
    "isSample": true
  },
  "runs": [
    {
      "id": "run-3",
      "n": 3,
      "date": "2026-10-02",
      "postsAdded": 156,
      "totalPosts": 1161,
      "sourcesChecked": [
        {
          "name": "Reddit",
          "status": "ok"
        },
        {
          "name": "Samsung Members",
          "status": "ok"
        },
        {
          "name": "XDA Forums",
          "status": "ok"
        },
        {
          "name": "X",
          "status": "failed",
          "note": "search limit reached"
        },
        {
          "name": "YouTube",
          "status": "ok"
        },
        {
          "name": "Tech blog comments",
          "status": "ok"
        }
      ],
      "summary": [
        "Net sentiment dipped to +3 (−4 vs Run 2).",
        "\"Missing in group chats\" is now the most discussed problem.",
        "New cluster: requests for Telegram and Discord support.",
        "Complaints about S25 exclusion keep fading."
      ],
      "changes": {
        "new": [
          {
            "label": "Wish for Telegram / Discord support",
            "route": "emerging/telegram"
          }
        ],
        "up": [
          {
            "label": "Missing in group chats",
            "route": "emerging/group-chats"
          },
          {
            "label": "App coverage",
            "route": "themes/coverage"
          }
        ],
        "down": [
          {
            "label": "S25 exclusion complaints",
            "route": "themes/exclusivity"
          }
        ],
        "resolved": [
          {
            "label": "Toggle hard to find",
            "route": "themes/setup"
          }
        ]
      },
      "links": [
        {
          "type": "internal",
          "label": "September dip in net sentiment",
          "route": "trend",
          "section": "Sentiment trend"
        },
        {
          "type": "internal",
          "label": "Triggering / reliability",
          "route": "themes/triggering",
          "section": "Themes"
        },
        {
          "type": "internal",
          "label": "New cluster: more chat apps",
          "route": "emerging/telegram",
          "section": "Emerging clusters"
        },
        {
          "type": "internal",
          "label": "Q2 · Does it appear when expected?",
          "route": "questions/q2",
          "section": "Research questions"
        },
        {
          "type": "external",
          "label": "now nudge never shows up in group chats??",
          "url": "https://www.reddit.com/r/galaxys26/comments/EXAMPLE1/now_nudge_never_shows_up_in_group_chats/",
          "domain": "reddit.com"
        },
        {
          "type": "external",
          "label": "Can Now Nudge work with Telegram?",
          "url": "https://r1.community.samsung.com/t5/galaxy-s/EXAMPLE6/td-p/00000000",
          "domain": "community.samsung.com"
        }
      ],
      "snapshot": {
        "posts": 1161,
        "net": 3,
        "emerging": 2,
        "answered": 6
      }
    },
    {
      "id": "run-2",
      "n": 2,
      "date": "2026-09-04",
      "postsAdded": 132,
      "totalPosts": 1005,
      "sourcesChecked": [
        {
          "name": "Reddit",
          "status": "ok"
        },
        {
          "name": "Samsung Members",
          "status": "ok"
        },
        {
          "name": "XDA Forums",
          "status": "ok"
        },
        {
          "name": "X",
          "status": "ok"
        },
        {
          "name": "YouTube",
          "status": "ok"
        }
      ],
      "summary": [
        "Sentiment recovered after the May dip.",
        "Autofill is praised more often.",
        "First signs of group chat complaints."
      ],
      "changes": {
        "new": [
          {
            "label": "Missing in group chats",
            "route": "emerging/group-chats"
          }
        ],
        "up": [
          {
            "label": "Autofill",
            "route": "themes/autofill"
          }
        ],
        "down": [],
        "resolved": []
      },
      "links": [
        {
          "type": "internal",
          "label": "Autofill",
          "route": "themes/autofill",
          "section": "Themes"
        }
      ],
      "snapshot": {
        "posts": 1005,
        "net": 7,
        "emerging": 1,
        "answered": 4
      }
    },
    {
      "id": "run-1",
      "n": 1,
      "date": "2026-08-06",
      "postsAdded": 873,
      "totalPosts": 873,
      "sourcesChecked": [
        {
          "name": "Reddit",
          "status": "ok"
        },
        {
          "name": "Samsung Members",
          "status": "ok"
        },
        {
          "name": "XDA Forums",
          "status": "ok"
        },
        {
          "name": "X",
          "status": "ok"
        },
        {
          "name": "YouTube",
          "status": "ok"
        },
        {
          "name": "Tech blog comments",
          "status": "ok"
        }
      ],
      "summary": [
        "First full collection since launch (baseline).",
        "Keyboard lock-in and S25 exclusion lead the negatives."
      ],
      "changes": {
        "new": [],
        "up": [],
        "down": [],
        "resolved": []
      },
      "links": [
        {
          "type": "internal",
          "label": "Overview",
          "route": "overview",
          "section": "Overview"
        }
      ],
      "snapshot": {
        "posts": 873,
        "net": 4,
        "emerging": 0,
        "answered": 2
      }
    }
  ],
  "trend": {
    "grain": "month",
    "periods": [
      {
        "key": "2026-03",
        "label": "Mar",
        "tip": "Mar 2026",
        "net": 18,
        "vol": 212,
        "pos": 41,
        "neu": 36,
        "neg": 23
      },
      {
        "key": "2026-04",
        "label": "Apr",
        "tip": "Apr 2026",
        "net": 9,
        "vol": 164,
        "pos": 36,
        "neu": 37,
        "neg": 27
      },
      {
        "key": "2026-05",
        "label": "May",
        "tip": "May 2026",
        "net": -6,
        "vol": 238,
        "pos": 28,
        "neu": 38,
        "neg": 34
      },
      {
        "key": "2026-06",
        "label": "Jun",
        "tip": "Jun 2026",
        "net": -2,
        "vol": 141,
        "pos": 30,
        "neu": 38,
        "neg": 32
      },
      {
        "key": "2026-07",
        "label": "Jul",
        "tip": "Jul 2026",
        "net": 4,
        "vol": 118,
        "pos": 33,
        "neu": 38,
        "neg": 29
      },
      {
        "key": "2026-08",
        "label": "Aug",
        "tip": "Aug 2026",
        "net": 7,
        "vol": 132,
        "pos": 35,
        "neu": 37,
        "neg": 28
      },
      {
        "key": "2026-09",
        "label": "Sep",
        "tip": "Sep 2026",
        "net": 3,
        "vol": 156,
        "pos": 33,
        "neu": 37,
        "neg": 30
      }
    ]
  },
  "themes": [
    {
      "id": "triggering",
      "pos": 12,
      "neu": 18,
      "neg": 70,
      "vol": 184,
      "base": 14,
      "recent": 22,
      "byPeriod": [
        4,
        -2,
        -10,
        -14,
        -18,
        -22,
        -30
      ],
      "summary": "Most complaints are about nudges not appearing, especially in group chats.",
      "sourceIds": [
        "s1",
        "s7",
        "s9"
      ]
    },
    {
      "id": "usefulness",
      "pos": 62,
      "neu": 25,
      "neg": 13,
      "vol": 152,
      "base": 13,
      "recent": 14,
      "byPeriod": [
        40,
        36,
        30,
        32,
        38,
        41,
        44
      ],
      "summary": "Calendar clash warnings and photo suggestions are the most praised nudges.",
      "sourceIds": [
        "s5",
        "s10"
      ]
    },
    {
      "id": "keyboard",
      "pos": 8,
      "neu": 22,
      "neg": 70,
      "vol": 131,
      "base": 12,
      "recent": 10,
      "byPeriod": [
        -40,
        -42,
        -38,
        -36,
        -34,
        -35,
        -33
      ],
      "summary": "Gboard users give up the feature or switch keyboards reluctantly.",
      "sourceIds": [
        "s4"
      ]
    },
    {
      "id": "exclusivity",
      "pos": 4,
      "neu": 16,
      "neg": 80,
      "vol": 120,
      "base": 13,
      "recent": 6,
      "byPeriod": [
        -20,
        -30,
        -70,
        -60,
        -48,
        -40,
        -36
      ],
      "summary": "S25 owners were upset in May; complaints are fading.",
      "sourceIds": [
        "s8"
      ]
    },
    {
      "id": "intrusiveness",
      "pos": 10,
      "neu": 30,
      "neg": 60,
      "vol": 96,
      "base": 8,
      "recent": 8,
      "byPeriod": [
        -8,
        -12,
        -14,
        -10,
        -12,
        -9,
        -11
      ],
      "summary": "A minority find nudges too frequent, even among fans.",
      "sourceIds": [
        "s6"
      ]
    },
    {
      "id": "coverage",
      "pos": 15,
      "neu": 55,
      "neg": 30,
      "vol": 88,
      "base": 6,
      "recent": 11,
      "byPeriod": [
        -2,
        -4,
        -6,
        -8,
        -10,
        -14,
        -18
      ],
      "summary": "Requests for Telegram, Discord and Messenger are growing.",
      "sourceIds": [
        "s3",
        "s11"
      ]
    },
    {
      "id": "anticipation",
      "pos": 20,
      "neu": 50,
      "neg": 30,
      "vol": 74,
      "base": 5,
      "recent": 8,
      "byPeriod": [
        0,
        2,
        -2,
        -4,
        -6,
        -8,
        -10
      ],
      "summary": "People expect nudges when dates, places or 'send me' requests appear.",
      "sourceIds": [
        "s1",
        "s9"
      ]
    },
    {
      "id": "privacy",
      "pos": 5,
      "neu": 45,
      "neg": 50,
      "vol": 64,
      "base": 6,
      "recent": 5,
      "byPeriod": [
        -30,
        -26,
        -22,
        -20,
        -18,
        -20,
        -19
      ],
      "summary": "Some users turn it off over screen-reading concerns.",
      "sourceIds": [
        "s12"
      ]
    },
    {
      "id": "autofill",
      "pos": 58,
      "neu": 27,
      "neg": 15,
      "vol": 51,
      "base": 4,
      "recent": 5,
      "byPeriod": [
        20,
        28,
        34,
        30,
        36,
        40,
        42
      ],
      "summary": "Passport and address autofill is a clear delight.",
      "sourceIds": [
        "s2"
      ]
    },
    {
      "id": "accuracy",
      "pos": 10,
      "neu": 30,
      "neg": 60,
      "vol": 48,
      "base": 4,
      "recent": 5,
      "byPeriod": [
        -10,
        -12,
        -14,
        -16,
        -18,
        -20,
        -22
      ],
      "summary": "Occasional wrong photo or contact suggestions.",
      "sourceIds": [
        "s13"
      ]
    },
    {
      "id": "setup",
      "pos": 30,
      "neu": 50,
      "neg": 20,
      "vol": 31,
      "base": 5,
      "recent": 2,
      "byPeriod": [
        -12,
        -10,
        -6,
        -4,
        -2,
        0,
        2
      ],
      "summary": "Early confusion about where the toggle lives has mostly gone.",
      "sourceIds": []
    },
    {
      "id": "comparison",
      "pos": 30,
      "neu": 40,
      "neg": 30,
      "vol": 29,
      "base": 3,
      "recent": 2,
      "byPeriod": [
        0,
        2,
        0,
        -2,
        4,
        2,
        0
      ],
      "summary": "Comparisons with Magic Cue are mostly from reviewers.",
      "sourceIds": [
        "s14"
      ]
    },
    {
      "id": "languages",
      "pos": 5,
      "neu": 50,
      "neg": 45,
      "vol": 18,
      "base": 2,
      "recent": 1,
      "byPeriod": [
        null,
        -20,
        -24,
        -18,
        -20,
        -22,
        -20
      ],
      "summary": "Requests for more languages, mainly from Europe and South Asia.",
      "sourceIds": []
    },
    {
      "id": "performance",
      "pos": 10,
      "neu": 40,
      "neg": 50,
      "vol": 12,
      "base": 1,
      "recent": 1,
      "byPeriod": [
        null,
        null,
        -10,
        -12,
        -8,
        -10,
        -12
      ],
      "summary": "A few reports of keyboard lag.",
      "sourceIds": []
    }
  ],
  "clusters": [
    {
      "id": "group-chats",
      "name": "Missing in group chats",
      "themeId": "triggering",
      "base": 2,
      "recent": 9,
      "firstSeenRun": 2,
      "summary": "Nudges appear in 1:1 chats but not in group threads with the same kind of content.",
      "sourceIds": [
        "s1",
        "s9"
      ]
    },
    {
      "id": "telegram",
      "name": "Wish for Telegram / Discord support",
      "themeId": "coverage",
      "base": 0,
      "recent": 4,
      "firstSeenRun": 3,
      "summary": "Users of chat apps outside the supported list ask for Now Nudge there.",
      "sourceIds": [
        "s3",
        "s11"
      ]
    },
    {
      "id": "calendar-clash",
      "name": "Calendar clash warnings",
      "themeId": "usefulness",
      "base": 5,
      "recent": 6,
      "firstSeenRun": 1,
      "summary": "Conflict warnings remain the most praised single nudge.",
      "sourceIds": [
        "s5"
      ]
    },
    {
      "id": "gboard",
      "name": "Switching back to Gboard",
      "themeId": "keyboard",
      "base": 7,
      "recent": 6,
      "firstSeenRun": 1,
      "summary": "Users trade the feature for their preferred keyboard.",
      "sourceIds": [
        "s4"
      ]
    },
    {
      "id": "s25-missing",
      "name": "S25 left out",
      "themeId": "exclusivity",
      "base": 11,
      "recent": 4,
      "firstSeenRun": 1,
      "summary": "Complaints peaked with the May One UI 8.5 rollout.",
      "sourceIds": [
        "s8"
      ]
    }
  ],
  "questions": [
    {
      "id": "q1",
      "short": "Mostly reliability and lock-in.",
      "answer": "The top problems are nudges not appearing (especially in group chats), needing the Samsung Keyboard, and not being available on older Galaxy phones.",
      "confidence": 3,
      "posts": 435,
      "change": {
        "status": "flat",
        "label": "Same as Run 2"
      },
      "themeIds": [
        "triggering",
        "keyboard",
        "exclusivity"
      ],
      "sourceIds": [
        "s1",
        "s4",
        "s8"
      ],
      "history": [
        {
          "runId": "run-3",
          "date": "2026-10-02",
          "short": "Mostly reliability and lock-in.",
          "text": "Group chat misses moved to the top."
        },
        {
          "runId": "run-2",
          "date": "2026-09-04",
          "short": "Lock-in and exclusivity.",
          "text": "Keyboard and device limits led."
        },
        {
          "runId": "run-1",
          "date": "2026-08-06",
          "short": "Lock-in and exclusivity.",
          "text": "Baseline."
        }
      ]
    },
    {
      "id": "q2",
      "short": "Partly.",
      "answer": "Reliable for dates and places in 1:1 chats. Often missing in group chats and in apps outside the supported list.",
      "confidence": 2,
      "posts": 31,
      "change": {
        "status": "down",
        "label": "Worse than Run 2"
      },
      "themeIds": [
        "triggering",
        "coverage"
      ],
      "sourceIds": [
        "s1",
        "s9"
      ],
      "history": [
        {
          "runId": "run-3",
          "date": "2026-10-02",
          "short": "Partly.",
          "text": "Group chats are the main gap."
        },
        {
          "runId": "run-2",
          "date": "2026-09-04",
          "short": "Mostly yes.",
          "text": "Few complaints about missing nudges."
        },
        {
          "runId": "run-1",
          "date": "2026-08-06",
          "short": "Not enough data.",
          "text": "6 relevant posts."
        }
      ]
    },
    {
      "id": "q3",
      "short": "Plans, places and photo requests.",
      "answer": "People expect a nudge when a message has a date or time, an address, or a request like \"send me the photos\".",
      "confidence": 2,
      "posts": 22,
      "change": {
        "status": "new",
        "label": "Answered this run"
      },
      "themeIds": [
        "anticipation"
      ],
      "sourceIds": [
        "s1",
        "s9"
      ],
      "history": [
        {
          "runId": "run-3",
          "date": "2026-10-02",
          "short": "Plans, places and photo requests.",
          "text": "First answer."
        }
      ]
    },
    {
      "id": "q4",
      "short": "Yes.",
      "answer": "When it works, most people find it helpful. Calendar clash warnings and autofill are the most praised.",
      "confidence": 3,
      "posts": 203,
      "change": {
        "status": "flat",
        "label": "Same as Run 2"
      },
      "themeIds": [
        "usefulness",
        "autofill"
      ],
      "sourceIds": [
        "s2",
        "s5",
        "s10"
      ],
      "history": [
        {
          "runId": "run-3",
          "date": "2026-10-02",
          "short": "Yes.",
          "text": "Unchanged."
        },
        {
          "runId": "run-2",
          "date": "2026-09-04",
          "short": "Yes.",
          "text": "Autofill praise grew."
        }
      ]
    },
    {
      "id": "q5",
      "short": "A minority do.",
      "answer": "Around 1 in 10 posts mention nudges being too frequent or the feature reading the screen. Most of these people still keep it on.",
      "confidence": 2,
      "posts": 38,
      "change": {
        "status": "flat",
        "label": "Same as Run 2"
      },
      "themeIds": [
        "intrusiveness",
        "privacy"
      ],
      "sourceIds": [
        "s6",
        "s12"
      ],
      "history": [
        {
          "runId": "run-3",
          "date": "2026-10-02",
          "short": "A minority do.",
          "text": "Unchanged."
        }
      ]
    },
    {
      "id": "q6",
      "short": "Yes, growing.",
      "answer": "Requests for Telegram, Discord and Messenger support are rising.",
      "confidence": 1,
      "posts": 9,
      "change": {
        "status": "up",
        "label": "More than Run 2"
      },
      "themeIds": [
        "coverage"
      ],
      "sourceIds": [
        "s3",
        "s11"
      ],
      "history": [
        {
          "runId": "run-3",
          "date": "2026-10-02",
          "short": "Yes, growing.",
          "text": "New cluster appeared."
        },
        {
          "runId": "run-2",
          "date": "2026-09-04",
          "short": "Not enough data.",
          "text": "2 posts."
        }
      ]
    }
  ],
  "insights": [
    {
      "id": "i1",
      "title": "People expect nudges wherever they make plans",
      "body": "Most complaints are about nudges not appearing, not about wrong ones. Expectations are set by 1:1 chats and then broken in group chats and unsupported apps.",
      "status": "up",
      "pos": 18,
      "neu": 22,
      "neg": 60,
      "posts": 184,
      "themeIds": [
        "triggering",
        "anticipation",
        "coverage"
      ],
      "sourceIds": [
        "s1",
        "s3",
        "s9"
      ]
    },
    {
      "id": "i2",
      "title": "When it works, autofill and calendar nudges win people over",
      "body": "Positive posts cluster around two moments: filling personal details on booking sites, and calendar clash warnings.",
      "status": "flat",
      "pos": 60,
      "neu": 26,
      "neg": 14,
      "posts": 203,
      "themeIds": [
        "usefulness",
        "autofill"
      ],
      "sourceIds": [
        "s2",
        "s5"
      ]
    },
    {
      "id": "i3",
      "title": "The keyboard requirement is a quiet deal-breaker",
      "body": "Gboard users rarely complain loudly; they switch back and lose the feature.",
      "status": "flat",
      "pos": 8,
      "neu": 22,
      "neg": 70,
      "posts": 131,
      "themeIds": [
        "keyboard"
      ],
      "sourceIds": [
        "s4"
      ]
    }
  ],
  "sources": [
    {
      "id": "s1",
      "run": 3,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26",
      "title": "now nudge never shows up in group chats??",
      "content": "Works great when my wife texts me about dinner, it pops up the calendar thing right away. But in our family group chat someone literally wrote \"bbq at mine sat 6pm\" and nothing. Tried it 3 times. Is this a known thing or is mine broken\n\nS26+, One UI 8.5, Samsung keyboard obviously",
      "url": "https://www.reddit.com/r/galaxys26/comments/EXAMPLE1/now_nudge_never_shows_up_in_group_chats/",
      "domain": "reddit.com",
      "postedAt": "2026-09-14",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering",
        "anticipation"
      ],
      "sentiment": "neg",
      "takeaway": "Nudges seem to miss dates in group chats. The user expected the same behaviour as in 1:1 chats.",
      "engagement": {
        "reactions": 412,
        "comments": 96
      }
    },
    {
      "id": "s2",
      "run": 2,
      "kind": "comment",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "parentTitle": "Now Nudge – what do you actually use it for?",
      "content": "Honestly the passport autofill. Booked a flight on my phone and it just offered the number above the keyboard. First AI feature I use every week.",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/EXAMPLE2/td-p/00000000",
      "domain": "community.samsung.com",
      "postedAt": "2026-08-29",
      "capturedAt": "2026-09-04",
      "userType": "S26 owner",
      "themeIds": [
        "autofill",
        "usefulness"
      ],
      "sentiment": "pos",
      "takeaway": "Autofill from Personal Data Intelligence is seen as clearly useful when it works.",
      "engagement": {
        "reactions": 38,
        "comments": 11,
        "views": 2140
      }
    },
    {
      "id": "s3",
      "run": 3,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsung",
      "title": "Any chance Now Nudge comes to Telegram?",
      "content": "All my friends are on Telegram. I keep waiting for it to suggest something there. It never will, right?",
      "url": "https://www.reddit.com/r/samsung/comments/EXAMPLE3/",
      "domain": "reddit.com",
      "postedAt": "2026-09-21",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "coverage"
      ],
      "sentiment": "neg",
      "takeaway": "Users want support for more chat apps.",
      "engagement": {
        "reactions": 187,
        "comments": 54
      }
    },
    {
      "id": "s4",
      "run": 1,
      "kind": "post",
      "platform": "XDA",
      "site": "XDA Forums",
      "where": "Samsung Galaxy S26 Ultra",
      "title": "Gboard + Now Nudge workaround?",
      "content": "Is there any way to get Now Nudge suggestions while using Gboard? I really don't like the Samsung keyboard's autocorrect. Switched back and lost the nudges.",
      "url": "https://xdaforums.com/t/EXAMPLE4/",
      "domain": "xdaforums.com",
      "postedAt": "2026-07-03",
      "capturedAt": "2026-08-06",
      "userType": "S26 owner",
      "themeIds": [
        "keyboard"
      ],
      "sentiment": "neg",
      "takeaway": "Keyboard lock-in pushes some users to give up the feature.",
      "engagement": {
        "reactions": 22,
        "comments": 17,
        "views": 3890
      }
    },
    {
      "id": "s5",
      "run": 1,
      "kind": "video",
      "platform": "YT",
      "site": "YouTube",
      "where": "Comment",
      "parentTitle": "Example video: Galaxy S26 Now Nudge tested for a week",
      "content": "the calendar clash warning saved me from double booking lol. pretty neat",
      "url": "https://www.youtube.com/watch?v=EXAMPLE5",
      "domain": "youtube.com",
      "postedAt": "2026-06-18",
      "capturedAt": "2026-08-06",
      "userType": "S26 owner",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "pos",
      "takeaway": "Calendar conflict nudges are a clear delight.",
      "engagement": {
        "reactions": 64,
        "comments": 3
      }
    },
    {
      "id": "s6",
      "run": 3,
      "kind": "post",
      "platform": "X",
      "site": "X",
      "where": "Post",
      "title": "",
      "content": "love now nudge but it's a bit much when it pops up on literally every message",
      "url": "https://x.com/EXAMPLE/status/0000000000000000006",
      "domain": "x.com",
      "postedAt": "2026-09-02",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "intrusiveness"
      ],
      "sentiment": "mix",
      "takeaway": "Frequency can feel intrusive even to fans.",
      "engagement": {
        "reactions": 1240,
        "comments": 88,
        "shares": 71,
        "views": 96500
      }
    },
    {
      "id": "s7",
      "run": 3,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/oneui",
      "parentTitle": "One UI 8.5 Now Nudge megathread",
      "content": "Mine only triggers in Google Messages. WhatsApp group = nothing.",
      "url": "https://www.reddit.com/r/oneui/comments/EXAMPLE7/comment/EXAMPLE7c/",
      "domain": "reddit.com",
      "postedAt": "2026-09-19",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Group threads in WhatsApp seem to miss nudges too.",
      "engagement": {
        "reactions": 33,
        "comments": 4
      }
    },
    {
      "id": "s8",
      "run": 1,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S25",
      "title": "Why is Now Nudge not in One UI 8.5 for S25??",
      "content": "Got the update today and no Now Nudge. Same chip family, same RAM. Feels like a forced upgrade.",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/EXAMPLE8/td-p/00000000",
      "domain": "community.samsung.com",
      "postedAt": "2026-05-12",
      "capturedAt": "2026-08-06",
      "userType": "S25 or older owner (left out)",
      "themeIds": [
        "exclusivity"
      ],
      "sentiment": "neg",
      "takeaway": "S25 owners feel left out of the One UI 8.5 headline feature.",
      "engagement": {
        "reactions": 151,
        "comments": 63,
        "views": 12800
      }
    },
    {
      "id": "s9",
      "run": 3,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/galaxys26",
      "title": "When should Now Nudge actually show up?",
      "content": "I assumed it would pop up whenever someone mentions a time or a place. In practice it's hit or miss. Group chats basically never.",
      "url": "https://www.reddit.com/r/galaxys26/comments/EXAMPLE9/",
      "domain": "reddit.com",
      "postedAt": "2026-09-26",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "anticipation",
        "triggering"
      ],
      "sentiment": "neg",
      "takeaway": "Users expect nudges whenever a time or place is mentioned.",
      "engagement": {
        "reactions": 95,
        "comments": 41
      }
    },
    {
      "id": "s10",
      "run": 2,
      "kind": "comment",
      "platform": "BL",
      "site": "Example Tech Blog",
      "where": "Comments",
      "parentTitle": "Example headline: Six months with the Galaxy S26",
      "content": "The photo suggestion thing is the only AI feature my parents noticed. They loved it.",
      "url": "https://example.com/reviews/galaxy-s26-six-months#comment-EXAMPLE10",
      "domain": "example.com",
      "postedAt": "2026-08-20",
      "capturedAt": "2026-09-04",
      "userType": "S26 owner",
      "themeIds": [
        "usefulness"
      ],
      "sentiment": "pos",
      "takeaway": "Photo suggestions are noticed even by less technical users.",
      "engagement": {
        "reactions": 9,
        "comments": 2
      }
    },
    {
      "id": "s11",
      "run": 3,
      "kind": "post",
      "platform": "SM",
      "site": "Samsung Members",
      "where": "Galaxy S",
      "title": "Can Now Nudge work with Telegram?",
      "content": "Please add Telegram and Discord. Most of my plans happen there.",
      "url": "https://r1.community.samsung.com/t5/galaxy-s/EXAMPLE6/td-p/00000000",
      "domain": "community.samsung.com",
      "postedAt": "2026-09-28",
      "capturedAt": "2026-10-02",
      "userType": "S26 owner",
      "themeIds": [
        "coverage"
      ],
      "sentiment": "neu",
      "takeaway": "Direct request for Telegram and Discord support.",
      "engagement": {
        "reactions": 12,
        "comments": 5,
        "views": 740
      }
    },
    {
      "id": "s12",
      "run": 2,
      "kind": "comment",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsung",
      "parentTitle": "Turned off Now Nudge after a week",
      "content": "I don't love the idea of it reading every chat, even if it says on-device.",
      "url": "https://www.reddit.com/r/samsung/comments/EXAMPLE12/comment/EXAMPLE12c/",
      "domain": "reddit.com",
      "postedAt": "2026-08-15",
      "capturedAt": "2026-09-04",
      "userType": "S26 owner",
      "themeIds": [
        "privacy"
      ],
      "sentiment": "neg",
      "takeaway": "Screen reading worries some users despite on-device processing.",
      "engagement": {
        "reactions": 58,
        "comments": 19
      }
    },
    {
      "id": "s13",
      "run": 3,
      "kind": "post",
      "platform": "r/",
      "site": "Reddit",
      "where": "r/samsung",
      "title": "Nudge suggested the wrong person's photos",
      "content": "It offered pics from my sister's album when my friend asked for beach photos.",
      "url": "https://www.reddit.com/r/samsung/comments/EXAMPLE13/",
      "domain": "reddit.com",
      "postedAt": "2026-09-21",
      "capturedAt": "2026-09-22",
      "userType": "S26 owner",
      "themeIds": [
        "accuracy"
      ],
      "sentiment": "neg",
      "takeaway": "Photo suggestions sometimes pick the wrong album.",
      "unavailable": true,
      "engagement": {
        "reactions": 71,
        "comments": 26
      }
    },
    {
      "id": "s14",
      "run": 1,
      "kind": "article",
      "platform": "BL",
      "site": "Example Tech Blog",
      "where": "News",
      "title": "Example headline: Now Nudge vs Magic Cue, hands-on",
      "content": "Example excerpt. The captured paragraph from the article appears here word for word.",
      "truncated": true,
      "url": "https://example.com/news/now-nudge-vs-magic-cue",
      "domain": "example.com",
      "postedAt": "2026-03-20",
      "capturedAt": "2026-08-06",
      "userType": "Reviewer or press",
      "themeIds": [
        "comparison"
      ],
      "sentiment": "mix",
      "takeaway": "Reviewer finds Now Nudge more consistent but limited by the keyboard requirement.",
      "competitor": true,
      "engagement": {
        "comments": 143
      }
    }
  ],
  "competitor": {
    "summary": "Magic Cue comes up in about 3% of Now Nudge posts, mostly from reviewers. Users who mention it describe Now Nudge as more consistent but more restricted (keyboard and device).",
    "sourceIds": [
      "s14"
    ]
  }
}
;
