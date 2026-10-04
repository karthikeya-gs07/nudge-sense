"""Run 1 (merged baseline): Samsung communities (captured 2 Oct) + X and Reddit (captured 3 Oct; Reddit by hand). Run: python3 runs/run-1/build_run1_merged.py"""
import json, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, os.path.join(ROOT, "runs", "run-1")); sys.path.insert(0, HERE)
from sources_run1 import SOURCES as S1
from sources_run1_x import SOURCES_X as S2
from sources_run1_reddit import SOURCES_REDDIT as S3
from sources_run1_blogs import SOURCES_BLOGS as S4
DATA = os.path.join(ROOT, "dashboard", "voc-data.js")
TODAY = "2026-10-03"
W = {"study": ("2026-02-25", TODAY), "recent": ("2026-08-04", TODAY), "baseline": ("2026-02-25", "2026-08-03")}
MONTHS = ["2026-02","2026-03","2026-04","2026-05","2026-06","2026-07","2026-08","2026-09","2026-10"]
ML = dict(zip(MONTHS, ["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]))

def base_of(url):
    m = re.match(r"(.*)/(m-p|td-p)/\d+.*$", url); return m.group(1) if m else url

def make(s, i, run, captured):
    if "url" in s: url = s["url"]
    else:
        vid = re.search(r"/(?:m-p|td-p)/(\d+)", s["thread"]).group(1)
        url = s["thread"] if vid == s["msgId"] else base_of(s["thread"]) + "/m-p/" + s["msgId"]
    eng = dict(s["engagement"]) if "engagement" in s else {}
    for k, f in (("reactions", "likes"), ("comments", "replies"), ("shares", "shares"), ("views", "views")):
        if s.get(f) is not None: eng[k] = s[f]
    o = {"id": "s%d" % i, "run": run, "kind": s["kind"], "platform": s.get("platform", "SM"), "site": s["site"], "where": s["where"],
         "title": "" if s["kind"] == "comment" else s.get("title", ""), "content": s["content"], "url": url,
         "domain": re.sub(r"^https?://(www\.)?", "", url).split("/")[0], "postedAt": s["postedAt"], "capturedAt": captured,
         "userType": s["userType"], "themeIds": s["themes"], "sentiment": s["sentiment"], "takeaway": s["takeaway"], "engagement": eng}
    if s["kind"] == "comment": o["parentTitle"] = s["parentTitle"]
    if s.get("truncated"): o["truncated"] = True
    if s.get("competitor"): o["competitor"] = True
    if s.get("postedApprox"): o["postedApprox"] = s["postedApprox"]
    if s["kind"] != "comment" and s.get("title") is not None: o["title"] = s.get("title", "")
    o["_cl"] = ["feature-confusion" if c == "brief-confusion" else c for c in s.get("clusters", [])]
    return o

src = [make(s, i, 1, "2026-10-02") for i, s in enumerate(S1, 1)] + [make(s, len(S1) + j, 1, TODAY) for j, s in enumerate(S2, 1)] + [make(s, len(S1) + len(S2) + j, 1, TODAY) for j, s in enumerate(S3, 1)] + [make(s, len(S1) + len(S2) + len(S3) + j, 1, "2026-10-04") for j, s in enumerate(S4, 1)]
byid = {s["id"]: s for s in src}
def inw(d, w): return W[w][0] <= d <= W[w][1]
rec = [s for s in src if inw(s["postedAt"], "recent")]; base = [s for s in src if inw(s["postedAt"], "baseline")]
def split(lst):
    n = len(lst) or 1
    p = round(100 * sum(s["sentiment"] == "pos" for s in lst) / n); x = round(100 * sum(s["sentiment"] == "neg" for s in lst) / n)
    return p, 100 - p - x, x
def share(lst, pred): return round(100 * sum(1 for s in lst if pred(s)) / (len(lst) or 1))
def eng(s): e = s["engagement"]; return e.get("reactions", 0) + 2 * e.get("comments", 0) + 3 * e.get("shares", 0)
def top(ids, n=10): return sorted(ids, key=lambda i: -eng(byid[i]))[:n]
def ids(pred): return [s["id"] for s in src if pred(s)]

periods = []
for m in MONTHS:
    l = [s for s in src if s["postedAt"].startswith(m)]; p, u, x = split(l) if l else (0, 0, 0)
    periods.append({"key": m, "label": ML[m], "tip": ML[m] + " 2026" + (" (to 3 Oct)" if m == "2026-10" else " (from 25 Feb)" if m == "2026-02" else ""), "net": p - x, "vol": len(l), "pos": p, "neu": u, "neg": x})

SUM = {
 "triggering": "The most common complaint across Samsung's forums, Reddit and X: nudges never appear, stop appearing, or 'barely show up', on the S26, the Fold 8 and the One UI 9 betas. Some say it worked at first and stopped after a late-March update.",
 "usefulness": "Split: people who get it working find it handy (places, locations, less typing), while others call it a gimmick because it rarely shows up.",
 "exclusivity": "Owners of older Galaxy phones wanted it from April; X cheered loudly when the One UI 9 beta brought it to the S24 and S25 in September.",
 "coverage": "People expect nudges in WhatsApp, Telegram and other apps where they chat. Reddit users say full nudges only work in Samsung Messages, Google Messages and Google Chat; elsewhere it only suggests replies.",
 "setup": "Many aren't sure what Now Nudge is: it's mixed up with Writing Assist replies and Now Brief cards, even Samsung's Galaxy Guide can't explain it, and getting it working takes several settings changes.",
 "keyboard": "Needing Samsung Keyboard put off Gboard users in One UI 8.5; One UI 9 adds suggestions in notifications and a floating button, which may ease this.",
 "anticipation": "People expect a nudge when a chat contains a date, a time, a place or a question about whether they're free.",
 "languages": "Turkish support arrived around 1 October; early reports range from 'working' to 'appeared once, then vanished'.",
 "comparison": "Press framed Now Nudge as Samsung's Magic Cue; users themselves rarely mention Google's feature.",
 "privacy": "A vocal minority on Reddit see screen reading as 'Samsung Recall' and refuse it; others point out it runs on the device.",
 "intrusiveness": "Few say it appears too often (it rarely appears), but some describe it as a nag, like Navi's 'Hey, Listen!', and are glad it can be turned off.",
 "languages": "Turkish support arrived around 1 October; Reddit users in Italy, Austria, North America and Australia suspect features are region-locked.",
 "autofill": "Personal-detail autofill (name, passport, phone) is one of the few parts people see working, in the browser and in forms.",
}
TH = ["usefulness","accuracy","triggering","anticipation","intrusiveness","keyboard","coverage","privacy","autofill","exclusivity","languages","setup","performance","comparison"]
themes = []
for t in TH:
    l = [s for s in src if t in s["themeIds"]]
    if not l: continue
    p, u, x = split(l); byp = []
    for m in MONTHS:
        ml = [s for s in l if s["postedAt"].startswith(m)]
        if len(ml) >= 3: a, b, c = split(ml); byp.append(a - c)
        else: byp.append(None)
    themes.append({"id": t, "pos": p, "neu": u, "neg": x, "vol": len(l), "base": share(base, lambda s: t in s["themeIds"]), "recent": share(rec, lambda s: t in s["themeIds"]),
                   "byPeriod": byp, "summary": SUM.get(t, ""), "sourceIds": top([s["id"] for s in l])})

CL = {
 "not-appearing": ("Nudges never appear or stop appearing", "triggering", "Across Samsung's forums and X, owners report Now Nudge never shows a suggestion, stops after a while, or 'barely shows up', even with every setting on."),
 "s24-beta": ("Not working on the One UI 9 beta (S24)", "triggering", "Since One UI 9 Beta 2 reached the S24 (14 Sep), beta users report the feature is present but shows nothing."),
 "older-devices": ("Older Galaxy phones want it (and the beta brings it)", "exclusivity", "Owners of older Galaxy phones asked for Now Nudge from April; the One UI 9 beta brought it to the S25 (8 Sep) and S24 (14 Sep)."),
 "whatsapp-telegram": ("Support in more chat apps", "coverage", "People want nudges in WhatsApp, Telegram and other apps where they chat; support is patchy."),
 "keyboard-only": ("Only works with Samsung Keyboard", "keyboard", "In One UI 8.5 Now Nudge only works with Samsung Keyboard; One UI 9 reportedly removes this limit."),
 "turkish": ("Turkish language support arrives", "languages", "Turkish language support arrived around 1 October with mixed early results."),
 "feature-confusion": ("Unclear what Now Nudge is", "setup", "People mistake Writing Assist reply suggestions or Now Brief cards for Now Nudge, argue about which One UI version has it, and even Samsung's Galaxy Guide can't explain it."),
 "regional": ("Works only in some regions", "languages", "Users in Italy, Austria, North America and Australia suspect Now Nudge is region-locked; Samsung support reportedly said it isn't active everywhere yet."),
 "privacy-worries": ("Screen-reading privacy worries", "privacy", "Some see Now Nudge as 'Samsung Recall' that reads everything on screen; others reply that it runs on the device."),
 "annoying": ("Feels like a nag", "intrusiveness", "Some describe it as an annoying nag, like Navi's 'Hey, Listen!', and are glad it can be switched off."),
}
clusters = []
for cid, (name, th, summ) in CL.items():
    l = [s for s in src if cid in s["_cl"]]
    if len(l) < 3: continue
    clusters.append({"id": cid, "name": name, "themeId": th, "base": share(base, lambda s: cid in s["_cl"]), "recent": share(rec, lambda s: cid in s["_cl"]),
                     "firstSeenRun": 1, "summary": summ, "sourceIds": top([s["id"] for s in l])})

def conf(n): return 0 if n < 3 else 1 if n < 10 else 2 if n <= 40 else 3
Q = {
 "q1": (lambda s: any(t in s["themeIds"] for t in ["triggering","exclusivity","coverage","setup","keyboard","languages"]) and s["sentiment"] in ("neg","mix"),
        "Mostly: it doesn't show up.", "The biggest problem is that nudges don't appear: they never show, stop showing, or 'barely show up', and Reddit, X and the Samsung forums all agree. After that: patchy support beyond three messaging apps, confusion about what the feature is (it's mistaken for Writing Assist), older phones being left out, possible region locks, and needing Samsung Keyboard.", ["triggering","exclusivity","coverage","setup","keyboard"]),
 "q2": (lambda s: any(t in s["themeIds"] for t in ["triggering","anticipation"]),
        "Mostly no.", "Mostly no. People ask for photos or try to arrange meetings in WhatsApp and get nothing. Some only get reply suggestions, which turn out to be Writing Assist. It works for some in Samsung Messages or Google Messages, and one user says it worked at first and stopped after a late-March update.", ["triggering","anticipation"]),
 "q3": (lambda s: "anticipation" in s["themeIds"],
        "Dates, times and places in chats.", "When a chat mentions a date, a time or a place, when a friend shares a location, when someone asks 'can you send the photos from yesterday?', or when clients ask whether they're free, as shown at Unpacked and on Fold 8 demo units.", ["anticipation"]),
 "q4": (lambda s: "usefulness" in s["themeIds"],
        "Yes, when it works.", "People who get it working like saving places from chats, opening shared locations in Maps and typing less; some on X call it 'how AI should be implemented'. Others call it a gimmick, but mostly because it rarely appears, not because the suggestions are bad.", ["usefulness"]),
 "q5": (lambda s: "privacy" in s["themeIds"] or "intrusiveness" in s["themeIds"],
        "Some do, mostly over privacy.", "Some do. On Reddit, a few call it an annoying nag (one compares it to Navi's 'Hey, Listen!') and several see screen reading as a privacy risk, like Windows Recall; others note processing stays on the device. Few complain it appears too often, because it rarely appears.", ["privacy","intrusiveness"]),
 "q6": (lambda s: "coverage" in s["themeIds"],
        "Yes, especially WhatsApp.", "Yes. People chat in WhatsApp and Telegram, but users say full nudges only work in Samsung Messages, Google Messages and Google Chat, with WhatsApp limited to reply suggestions in most regions. One UI 9's notification and floating-button suggestions may widen this.", ["coverage"]),
}
questions = []
for qid, (pred, short, ans, th) in Q.items():
    l = ids(pred); c = conf(len(l))
    questions.append({"id": qid, "short": short, "answer": ans, "posts": len(l), "confidence": c,
                      "change": {"status": "new", "label": "Answered this run" if c else "Not enough data yet"},
                      "themeIds": th, "sourceIds": top(l, 8),
                      "history": [{"runId": "run-1", "date": TODAY, "short": short, "text": "First answer (Run 1: Samsung communities + X, %d posts)." % len(l)}]})

def ins(i, title, body, status, l, th):
    p, u, x = split([byid[k] for k in l]); return {"id": i, "title": title, "body": body, "status": status, "pos": p, "neu": u, "neg": x, "posts": len(l), "themeIds": th, "sourceIds": top(l, 8)}
insights = [
 ins("i1", "The main complaint is that nudges don't show up", "Most negative posts aren't about bad suggestions; they're about getting none at all. Reddit, X and the Samsung forums all say the same, and some say it stopped after a late-March update.", "new", ids(lambda s: "triggering" in s["themeIds"]), ["triggering"]),
 ins("i2", "People want nudges where they actually chat", "Users expect nudges in WhatsApp, Telegram and with their own keyboard, but full nudges reportedly only work in three messaging apps. One UI 9's notification and floating-button suggestions could address both.", "new", ids(lambda s: "coverage" in s["themeIds"] or "keyboard" in s["themeIds"]), ["coverage","keyboard"]),
 ins("i3", "Older-phone owners went from 'left out' to 'it doesn't work'", "On X, the top Now Nudge posts celebrate it reaching the S24 and S25 in the One UI 9 beta. On the forums, beta users now say it shows nothing.", "new", ids(lambda s: "exclusivity" in s["themeIds"]), ["exclusivity","triggering"]),
]

pos, neu, neg = split(src); net = pos - neg
emerging = sum(1 for c in clusters if (c["base"] == 0 and c["recent"] > 0) or (c["base"] and (c["recent"] - c["base"]) / c["base"] >= 0.25))
answered = sum(1 for q in questions if q["confidence"] >= 1)
N = len(src); added = len(S2)
xs = [s for s in src if s["run"] == 2]
nForum = sum(1 for s in src if s["platform"] == "SM"); nX = sum(1 for s in src if s["platform"] == "X"); nR = sum(1 for s in src if s["platform"] == "r/"); nPress = sum(1 for s in src if s["kind"] == "article")
run = {
 "id": "run-1", "n": 1, "date": TODAY, "collected": {"from": W["study"][0], "to": TODAY}, "postsAdded": N, "totalPosts": N,
 "sourcesChecked": [
   {"name": "Samsung Members", "status": "ok"},
   {"name": "Samsung Community (US, EU)", "status": "ok"},
   {"name": "X", "status": "ok", "note": "read via Chrome (signed in)"},
   {"name": "XDA Forums", "status": "ok", "note": "no forum threads found; XDA review captured"},
   {"name": "Tech blog articles", "status": "ok", "note": "articles that report user voices; comment sections not used"},
   {"name": "Reddit", "status": "ok", "note": "captured by hand; dates approximate, no vote counts"},
   {"name": "YouTube comments", "status": "failed", "note": "comments did not load"}
 ],
 "summary": [
   "Baseline run: %d posts: %d from Samsung's communities, %d from Reddit (captured by hand), %d from X and %d press articles." % (N, nForum, nR, nX, nPress),
   "Sentiment is negative overall (net %+d): most posts say nudges don't appear at all, on the forums and on X alike." % net,
   "Since August, talk has moved from 'older phones are left out' to 'it doesn't work on the One UI 9 beta' and 'it doesn't work in WhatsApp or Telegram'.",
   "One UI 9 adds suggestions in notifications and a floating button, and reportedly works without Samsung Keyboard; Turkish support arrived around 1 October.",
   "Reddit adds two new clusters: confusion about what Now Nudge is (often mistaken for Writing Assist) and suspected region locks, plus the first real privacy and annoyance complaints."
 ],
 "changes": {
   "new": [{"label": c["name"], "route": "emerging/" + c["id"]} for c in clusters if c["base"] == 0],
   "up": [],
   "down": [{"label": c["name"], "route": "emerging/" + c["id"]} for c in clusters if c["base"] and (c["recent"] - c["base"]) / c["base"] <= -0.25],
   "resolved": []
 },
 "links": [
   {"type": "internal", "label": "Nudges not appearing", "route": "emerging/not-appearing", "section": "Emerging clusters"},
   {"type": "internal", "label": "New: support in more chat apps", "route": "emerging/whatsapp-telegram", "section": "Emerging clusters"},
   {"type": "internal", "label": "New: not working on the S24 beta", "route": "emerging/s24-beta", "section": "Emerging clusters"},
   {"type": "internal", "label": "Keyboard lock-in and One UI 9", "route": "themes/keyboard", "section": "Themes"},
   {"type": "internal", "label": "Q2 · Does it appear when expected?", "route": "questions/q2", "section": "Research questions"},
 ] + [{"type": "external", "label": (byid[i].get("title") or byid[i]["content"]).split("\n")[0][:90], "url": byid[i]["url"], "domain": byid[i]["domain"]}
      for i in top([s["id"] for s in src if s["userType"] != "Reviewer or press"], 4)],
 "snapshot": {"posts": N, "net": net, "emerging": emerging, "answered": answered}
}
comp = ids(lambda s: s.get("competitor"))
competitor = {"summary": "Magic Cue comes up in %d of %d posts, all from press. Launch coverage called Now Nudge Samsung's version of Magic Cue and found it more consistent at Unpacked; one reviewer later never saw either feature appear in daily use. Users on the forums and X don't compare the two." % (len(comp), N), "sourceIds": comp}

for s in src: s.pop("_cl", None)
raw = open(DATA).read(); k = "window.VOC_DATA = {"; head = raw[:raw.index(k)]
D = json.loads(raw[raw.index(k) + len(k) - 1: raw.rindex(";")])
D["config"]["windows"] = {w: {"from": a, "to": b} for w, (a, b) in W.items()}
ev = D["config"]["events"]
if not any(e["date"] == "2026-09-16" for e in ev): ev.append({"date": "2026-09-16", "label": "One UI 9 stable starts (S26)"})
if not any(e["date"] == "2026-09-08" for e in ev): ev.append({"date": "2026-09-08", "label": "One UI 9 Beta 2 brings Nudge to S25"})
ev.sort(key=lambda e: e["date"])
D["config"]["limitations"] = [l for l in D["config"]["limitations"] if not l.startswith("Reddit") and not l.startswith("X is")] + [
  "Reddit was captured by hand: posting dates are approximate (from 'N months ago'), and vote and comment counts weren't available.",
  "X is dominated by update news and paid promotions (#AD); those posts are tagged as press, not users."]
for s in D["config"]["sourceList"]:
    if s["platform"] == "X": s["status"] = "Active"
    if s["platform"] == "BL" and s["type"] == "Blog comments": s["type"] = "Blog articles (user voices)"
for s in D["config"]["sources"]:
    if s["code"] == "BL": s["name"] = "Tech blog articles"; s["detail"] = "Articles that report or summarise user voices (SamMobile, SammyFans, Android Authority, 9to5Google, Android Police and others). Comment sections are not used."
have = {s["name"] for s in D["config"]["sourceList"]}
for sub in ["r/galaxys26ultra", "r/samsunggalaxy", "r/GalaxyFold", "r/GalaxyS24", "r/S24Ultra", "r/S25Ultra"]:
    if sub not in have:
        D["config"]["sourceList"].insert(5, {"platform": "r/", "name": sub, "url": "https://www.reddit.com/" + sub + "/", "type": "Subreddit", "scope": "Primary", "status": "Active"})
if "Samsung (official or bot)" not in D["config"]["userTypes"]: D["config"]["userTypes"].append("Samsung (official or bot)")
D["runs"] = [run]
D["trend"] = {"grain": "month", "periods": periods}
D.update({"themes": themes, "clusters": clusters, "questions": questions, "insights": insights, "sources": src, "competitor": competitor})
open(DATA, "w").write(head + "window.VOC_DATA = " + json.dumps(D, ensure_ascii=False, indent=2) + "\n;\n")
print("N", N, "added", added, "net", net, "emerging", emerging, "answered", answered)
print([(q["id"], q["posts"], q["confidence"], q["change"]["status"]) for q in questions])
print([(c["id"], c["base"], c["recent"]) for c in clusters])
