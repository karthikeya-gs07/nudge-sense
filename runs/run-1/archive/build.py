import json, re, sys, os
sys.path.insert(0, os.path.dirname(__file__))
from sources_run1 import SOURCES

RUN = 1
CAPTURED = "2026-10-02"
REC_FROM, REC_TO = "2026-08-03", "2026-10-02"
BASE_FROM, BASE_TO = "2026-02-25", "2026-08-02"
MONTHS = ["2026-02","2026-03","2026-04","2026-05","2026-06","2026-07","2026-08","2026-09","2026-10"]
MLABEL = {"2026-02":"Feb","2026-03":"Mar","2026-04":"Apr","2026-05":"May","2026-06":"Jun","2026-07":"Jul","2026-08":"Aug","2026-09":"Sep","2026-10":"Oct"}

def base_of(url):
    m = re.match(r"(.*)/(m-p|td-p)/\d+.*$", url)
    return m.group(1) if m else url

out = []
for i, s in enumerate(SOURCES, 1):
    if "url" in s:
        url = s["url"]
    else:
        visited_id = re.search(r"/(?:m-p|td-p)/(\d+)", s["thread"]).group(1)
        url = s["thread"] if visited_id == s["msgId"] else base_of(s["thread"]) + "/m-p/" + s["msgId"]
    dom = re.sub(r"^https?://(www\.)?", "", url).split("/")[0]
    eng = {}
    if s.get("likes") is not None: eng["reactions"] = s["likes"]
    if s.get("replies") is not None: eng["comments"] = s["replies"]
    if s.get("views") is not None: eng["views"] = s["views"]
    o = {
        "id": "s%d" % i, "run": RUN, "kind": s["kind"], "platform": s.get("platform", "SM"),
        "site": s["site"], "where": s["where"], "title": s.get("title", "") if s["kind"] != "comment" else "",
        "content": s["content"], "url": url, "domain": dom,
        "postedAt": s["postedAt"], "capturedAt": CAPTURED, "userType": s["userType"],
        "themeIds": s["themes"], "sentiment": s["sentiment"], "takeaway": s["takeaway"], "engagement": eng,
    }
    if s["kind"] == "comment": o["parentTitle"] = s["parentTitle"]
    if s.get("truncated"): o["truncated"] = True
    if s.get("competitor"): o["competitor"] = True
    o["_clusters"] = s.get("clusters", [])
    out.append(o)

def inwin(d, a, b): return a <= d <= b
N = len(out)
def split(lst):
    n = len(lst) or 1
    pos = sum(1 for s in lst if s["sentiment"] == "pos"); neg = sum(1 for s in lst if s["sentiment"] == "neg")
    p = round(100 * pos / n); x = round(100 * neg / n); u = 100 - p - x
    return p, u, x
# Trend
periods = []
for m in MONTHS:
    lst = [s for s in out if s["postedAt"].startswith(m)]
    p, u, x = split(lst) if lst else (0, 0, 0)
    periods.append({"key": m, "label": MLABEL[m], "tip": MLABEL[m] + " 2026" + (" (to 2 Oct)" if m == "2026-10" else " (from 25 Feb)" if m == "2026-02" else ""), "net": p - x, "vol": len(lst), "pos": p, "neu": u, "neg": x})
rec = [s for s in out if inwin(s["postedAt"], REC_FROM, REC_TO)]
base = [s for s in out if inwin(s["postedAt"], BASE_FROM, BASE_TO)]
def share(lst, pred): return round(100 * sum(1 for s in lst if pred(s)) / (len(lst) or 1))
THEME_IDS = ["usefulness","accuracy","triggering","anticipation","intrusiveness","keyboard","coverage","privacy","autofill","exclusivity","languages","setup","performance","comparison"]
themes = []
for t in THEME_IDS:
    lst = [s for s in out if t in s["themeIds"]]
    if not lst: continue
    p, u, x = split(lst)
    byp = []
    for m in MONTHS:
        ml = [s for s in lst if s["postedAt"].startswith(m)]
        if len(ml) >= 3:
            a, b, c = split(ml); byp.append(a - c)
        else: byp.append(None)
    ids = sorted(lst, key=lambda s: -(s["engagement"].get("reactions", 0) + 2 * s["engagement"].get("comments", 0)))
    themes.append({"id": t, "pos": p, "neu": u, "neg": x, "vol": len(lst),
                   "base": share(base, lambda s: t in s["themeIds"]), "recent": share(rec, lambda s: t in s["themeIds"]),
                   "byPeriod": byp, "summary": "", "sourceIds": [s["id"] for s in ids]})
CL = {
 "not-appearing": ("Nudges never appear or stop appearing", "triggering"),
 "s24-beta": ("Not working on the One UI 9 beta (S24)", "triggering"),
 "older-devices": ("Older Galaxy phones want it (and the S24 beta gets it)", "exclusivity"),
 "whatsapp-telegram": ("WhatsApp and Telegram support", "coverage"),
 "keyboard-only": ("Only works with Samsung Keyboard", "keyboard"),
 "brief-confusion": ("Mixed up with Now Brief", "setup"),
 "turkish": ("Turkish language support arrives", "languages"),
 "calendar-moments": ("Calendar availability moments", "anticipation"),
 "places-moments": ("Saving and opening places from chats", "anticipation"),
}
clusters = []
for cid, (name, th) in CL.items():
    lst = [s for s in out if cid in s["_clusters"]]
    clusters.append({"id": cid, "name": name, "themeId": th, "count": len(lst),
                     "base": share(base, lambda s: cid in s["_clusters"]), "recent": share(rec, lambda s: cid in s["_clusters"]),
                     "firstSeenRun": 1, "summary": "", "sourceIds": [s["id"] for s in lst]})
stats = {"N": N, "base": len(base), "recent": len(rec), "overall": split(out),
         "sites": {}, "userTypes": {}}
for s in out:
    stats["sites"][s["site"]] = stats["sites"].get(s["site"], 0) + 1
    stats["userTypes"][s["userType"]] = stats["userTypes"].get(s["userType"], 0) + 1
json.dump({"sources": out, "periods": periods, "themes": themes, "clusters": clusters, "stats": stats},
          open(os.path.join(os.path.dirname(__file__), "computed.json"), "w"), ensure_ascii=False, indent=1)
print(json.dumps(stats, ensure_ascii=False))
print("PERIODS", [(p["label"], p["vol"], p["net"]) for p in periods])
print("THEMES", [(t["id"], t["vol"], t["pos"], t["neu"], t["neg"], t["base"], t["recent"]) for t in themes])
print("CLUSTERS", [(c["id"], c["count"], c["base"], c["recent"]) for c in clusters])
