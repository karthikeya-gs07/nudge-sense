import json, os
HERE = os.path.dirname(__file__)
DATA = "/Users/karthikeyags/Desktop/Voice Of Customer - Nudge/dashboard/voc-data.js"
C = json.load(open(os.path.join(HERE, "computed.json")))
src = C["sources"]
byid = {s["id"]: s for s in src}
def eng(s): e = s["engagement"]; return e.get("reactions", 0) + 2 * e.get("comments", 0)
def top(ids, n=8): return sorted(ids, key=lambda i: -eng(byid[i]))[:n]
def ids_where(pred): return [s["id"] for s in src if pred(s)]
def split(ids):
    n = len(ids) or 1
    p = round(100 * sum(1 for i in ids if byid[i]["sentiment"] == "pos") / n)
    x = round(100 * sum(1 for i in ids if byid[i]["sentiment"] == "neg") / n)
    return p, 100 - p - x, x

THEME_SUMMARY = {
 "triggering": "The most common complaint: nudges never appear, stop appearing, or only work in a few apps, on the S26, the Fold 8 and the S24 One UI 9 beta.",
 "usefulness": "Split: people who get it working find it handy (places, locations, less typing), while others call it a gimmick because it rarely shows up.",
 "exclusivity": "S23, S24 and S25 owners felt left out after One UI 8.5; since mid-September the One UI 9 beta has brought it to the S24.",
 "coverage": "People expect nudges in WhatsApp and Telegram, where they actually chat; WhatsApp works inconsistently and Telegram not at all.",
 "setup": "Getting it to work can take several settings changes, support staff are unsure about it, and some users mix it up with Now Brief.",
 "keyboard": "Needing Samsung Keyboard puts off Gboard users; some refuse to switch, and one switched and still saw nothing.",
 "anticipation": "People expect a nudge when a chat contains a date, a time, a place or a question about whether they're free.",
 "languages": "Turkish support arrived around 1 October; early reports range from 'working' to 'appeared once, then vanished'.",
 "comparison": "Press framed Now Nudge as Samsung's Magic Cue; users themselves rarely mention Google's feature.",
 "privacy": "Only two posts: one calls it 'a bit of privacy invasion', another is reassured that it runs on the device.",
}
CLUSTER_KEEP = {
 "not-appearing": "Owners of S26 and Fold 8 phones report Now Nudge never shows a suggestion, or stops after a while, even with every setting on.",
 "s24-beta": "Since One UI 9 Beta 2 reached the S24 (14 Sep), beta users report the feature is present but shows nothing.",
 "older-devices": "Owners of older Galaxy phones asked for Now Nudge after One UI 8.5 left it out; the S24 beta now has it.",
 "whatsapp-telegram": "People want nudges in WhatsApp and Telegram; WhatsApp works for some after extra settings, Telegram does not.",
 "keyboard-only": "Now Nudge only works with Samsung Keyboard, which keeps Gboard users from using it.",
 "turkish": "Turkish language support arrived around 1 October with mixed early results.",
}
themes = []
for t in C["themes"]:
    t = dict(t); t["summary"] = THEME_SUMMARY.get(t["id"], ""); t["sourceIds"] = top(t["sourceIds"], 10); themes.append(t)
clusters = []
for c in C["clusters"]:
    if c["id"] not in CLUSTER_KEEP or c["count"] < 3: continue
    c = dict(c); c["summary"] = CLUSTER_KEEP[c["id"]]; c["sourceIds"] = top(c["sourceIds"], 10); c.pop("count"); clusters.append(c)

def has(t): return lambda s: t in s["themeIds"]
q1 = ids_where(lambda s: any(t in s["themeIds"] for t in ["triggering","exclusivity","coverage","setup","keyboard","languages"]) and s["sentiment"] in ("neg","mix"))
q2 = ids_where(lambda s: any(t in s["themeIds"] for t in ["triggering","anticipation"]))
q3 = ids_where(lambda s: "anticipation" in s["themeIds"] or s["id"] in [])
q4 = ids_where(has("usefulness"))
q5 = ids_where(lambda s: "privacy" in s["themeIds"] or "intrusiveness" in s["themeIds"])
q6 = ids_where(has("coverage"))
def conf(n): return 0 if n < 3 else 1 if n < 10 else 2 if n <= 40 else 3
NEWQ = {"status": "new", "label": "Answered this run"}
questions = [
 {"id": "q1", "short": "Mostly: it doesn't show up.", "answer": "The biggest problem is that nudges don't appear: they never show, stop showing, or only work in a few apps. After that come older phones being left out, WhatsApp and Telegram not working, needing Samsung Keyboard, and confusing setup.", "posts": len(q1), "confidence": conf(len(q1)), "change": NEWQ, "themeIds": ["triggering","exclusivity","coverage","setup","keyboard"], "sourceIds": top(q1)},
 {"id": "q2", "short": "Mostly no.", "answer": "Most people who expect a nudge don't get one. It works for some in Samsung Messages and for calendar events, but often not in WhatsApp, Telegram or on the S24 beta. One reviewer never saw it in weeks of use.", "posts": len(q2), "confidence": conf(len(q2)), "change": NEWQ, "themeIds": ["triggering","anticipation"], "sourceIds": top(q2)},
 {"id": "q3", "short": "Dates, times and places in chats.", "answer": "When a chat mentions a date, a time or a place, when a friend shares a location, or when someone asks whether they're free.", "posts": len(q3), "confidence": conf(len(q3)), "change": NEWQ, "themeIds": ["anticipation"], "sourceIds": top(q3)},
 {"id": "q4", "short": "Yes, when it works.", "answer": "People who get it working like saving places from chats, opening shared locations in Maps and typing less. Others call it a gimmick, but mostly because it rarely appears, not because the suggestions are bad.", "posts": len(q4), "confidence": conf(len(q4)), "change": NEWQ, "themeIds": ["usefulness"], "sourceIds": top(q4)},
 {"id": "q5", "short": "Too early to say.", "answer": "No post says nudges appear too often; the complaint is the opposite. One S25 owner called it 'a bit of privacy invasion' and asked to be able to turn it off; another was reassured that it runs on the device.", "posts": len(q5), "confidence": conf(len(q5)), "change": {"status": "new", "label": "Not enough data yet"}, "themeIds": ["privacy","intrusiveness"], "sourceIds": top(q5)},
 {"id": "q6", "short": "Yes, WhatsApp and Telegram.", "answer": "Yes. Fold 8 and other owners want it in WhatsApp and Telegram, where they actually chat. WhatsApp works for some after extra settings; Telegram doesn't work at all.", "posts": len(q6), "confidence": conf(len(q6)), "change": NEWQ, "themeIds": ["coverage"], "sourceIds": top(q6)},
]
for q in questions:
    q["history"] = [{"runId": "run-1", "date": "2026-10-02", "short": q["short"], "text": "First answer (Run 1)."}]

i1 = ids_where(has("triggering")); i2 = ids_where(lambda s: "coverage" in s["themeIds"] or "keyboard" in s["themeIds"]); i3 = ids_where(has("exclusivity"))
def ins(id_, title, body, status, ids, themes_):
    p, u, x = split(ids)
    return {"id": id_, "title": title, "body": body, "status": status, "pos": p, "neu": u, "neg": x, "posts": len(ids), "themeIds": themes_, "sourceIds": top(ids)}
insights = [
 ins("i1", "The main complaint is that nudges don't show up", "Most negative posts aren't about bad suggestions; they're about getting none at all. This shows up on the S26 since March, on the Fold 8 since August and on the S24 beta since September.", "new", i1, ["triggering"]),
 ins("i2", "People want nudges where they actually chat", "Users expect nudges in WhatsApp and Telegram, and with the keyboard they already use. Both limits push people away, sometimes back to Gboard.", "new", i2, ["coverage","keyboard"]),
 ins("i3", "Older-phone owners went from 'left out' to 'it doesn't work'", "Complaints about the S25 and S24 missing Now Nudge peaked in May and June. Since the S24 beta added it in September, the posts are now about it not working.", "new", i3, ["exclusivity","triggering"]),
]

trend_periods = C["periods"]
pos, neu, neg = C["stats"]["overall"]
net = pos - neg
emerging = sum(1 for c in clusters if (c["base"] == 0 and c["recent"] > 0) or (c["base"] and (c["recent"] - c["base"]) / c["base"] >= 0.25))
answered = sum(1 for q in questions if q["confidence"] >= 1)
N = len(src)
def label_of(i):
    s = byid[i]; return s.get("title") or s["content"][:80]
ext = top(ids_where(lambda s: True), 3)
run = {
 "id": "run-1", "n": 1, "date": "2026-10-02", "postsAdded": N, "totalPosts": N,
 "sourcesChecked": [
   {"name": "Samsung Members", "status": "ok"},
   {"name": "Samsung Community (US, EU)", "status": "ok"},
   {"name": "XDA Forums", "status": "ok", "note": "no forum threads found; XDA review captured"},
   {"name": "Tech blogs", "status": "ok", "note": "articles captured"},
   {"name": "Reddit", "status": "failed", "note": "blocked from this environment"},
   {"name": "X", "status": "failed", "note": "requires sign-in"},
   {"name": "YouTube comments", "status": "failed", "note": "comments did not load"},
   {"name": "Tech blog comments", "status": "failed", "note": "comment widgets not readable"}
 ],
 "summary": [
   "First run: %d posts captured, %d from Samsung's own communities and %d press articles." % (N, sum(1 for s in src if s["kind"] != "article"), sum(1 for s in src if s["kind"] == "article")),
   "Sentiment is negative overall (net %+d): most posts say nudges don't appear at all." % net,
   "Since August, talk has moved from 'older phones are left out' to 'it doesn't work on the S24 beta' and 'it doesn't work in WhatsApp or Telegram'.",
   "Turkish language support arrived around 1 October, with mixed early results.",
   "Reddit, X, YouTube comments and blog comments couldn't be read this run, so the numbers leave them out."
 ],
 "changes": {
   "new": [{"label": c["name"], "route": "emerging/" + c["id"]} for c in clusters if c["base"] == 0],
   "up": [],
   "down": [{"label": c["name"], "route": "emerging/" + c["id"]} for c in clusters if c["base"] and (c["recent"] - c["base"]) / c["base"] <= -0.25],
   "resolved": []
 },
 "links": [
   {"type": "internal", "label": "Nudges not appearing", "route": "themes/triggering", "section": "Themes"},
   {"type": "internal", "label": "New: WhatsApp and Telegram support", "route": "emerging/whatsapp-telegram", "section": "Emerging clusters"},
   {"type": "internal", "label": "New: not working on the S24 beta", "route": "emerging/s24-beta", "section": "Emerging clusters"},
   {"type": "internal", "label": "Q2 · Does it appear when expected?", "route": "questions/q2", "section": "Research questions"},
   {"type": "internal", "label": "Sentiment by month", "route": "trend", "section": "Sentiment trend"},
 ] + [{"type": "external", "label": label_of(i), "url": byid[i]["url"], "domain": byid[i]["domain"]} for i in ext],
 "snapshot": {"posts": N, "net": net, "emerging": emerging, "answered": answered}
}
comp_ids = ids_where(lambda s: s.get("competitor"))
competitor = {"summary": "Magic Cue comes up in %d of %d posts, all from press. Launch coverage called Now Nudge Samsung's version of Magic Cue and found it more consistent at Unpacked; one reviewer later never saw either feature appear in daily use. Users themselves don't compare the two." % (len(comp_ids), N), "sourceIds": comp_ids}

for s in src: s.pop("_clusters", None)

raw = open(DATA).read()
k = "window.VOC_DATA = {"
head = raw[:raw.index(k)]
D = json.loads(raw[raw.index(k) + len(k) - 1: raw.rindex(";")])
cfg = D["config"]
cfg["userTypes"] = ["S26 owner", "Fold 8 / Flip 8 owner", "Older Galaxy on One UI 9 beta", "S25 or older owner (left out)", "Galaxy owner (device not stated)", "Pixel 10 owner", "Brand switcher", "Reviewer or press"]
cfg["events"] = [
  {"date": "2026-02-25", "label": "Now Nudge announced"},
  {"date": "2026-03-11", "label": "S26 on sale"},
  {"date": "2026-05-11", "label": "One UI 8.5 on S25, no Nudge"},
  {"date": "2026-05-20", "label": "Magic Cue expansion announced"},
  {"date": "2026-06-01", "label": "June Pixel Drop", "approx": True},
  {"date": "2026-07-22", "label": "Fold 8 / Flip 8 launch"},
  {"date": "2026-09-04", "label": "S26 FE on sale"},
  {"date": "2026-09-14", "label": "One UI 9 Beta 2 brings Nudge to S24"}
]
D["runs"] = [run]
D["trend"] = {"grain": "month", "periods": trend_periods}
D["themes"] = themes; D["clusters"] = clusters; D["questions"] = questions; D["insights"] = insights
D["sources"] = src; D["competitor"] = competitor
open(DATA, "w").write(head + "window.VOC_DATA = " + json.dumps(D, ensure_ascii=False, indent=2) + "\n;\n")
print("written", N, "sources; net", net, "emerging", emerging, "answered", answered)
print([(q["id"], q["posts"], q["confidence"]) for q in questions])
print([(c["id"], c["base"], c["recent"]) for c in clusters])
