#!/usr/bin/env python3
"""
Nudge Sense — Reddit collector (official Reddit Data API, read-only).

Searches Reddit for Now Nudge posts and saves them, verbatim, with engagement counts,
to runs/<run>/inbox/reddit.json for the agent to code. No usernames are saved.

Setup (once):
  1. Log into Reddit and open https://www.reddit.com/prefs/apps
  2. Click "create another app…", choose "script", any name, redirect uri: http://localhost:8080
  3. Copy tools/reddit_credentials.example.json to tools/reddit_credentials.json
     and fill in client_id (the code under the app name), client_secret and your Reddit username.

Run:
  python3 tools/reddit_fetch.py --run run-2
  (optional) --since YYYY-MM-DD  --max-pages 5  --comments 40

Runs are incremental: by default it only collects posts and comments made since the
last run (runs[0].date in dashboard/voc-data.js). Use --since only to override that.
"""
import argparse, base64, json, os, sys, time, urllib.error, urllib.parse, urllib.request
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CRED = os.path.join(HERE, "reddit_credentials.json")

KEYWORDS = ['"now nudge"', '"now nudges"', '"samsung nudge"']
SUBREDDITS = ["samsung", "galaxys26", "oneui", "GalaxyS26Ultra", "GalaxyFold", "GooglePixel", "pixel_phones"]
MAGIC_CUE_ONLY = {"GooglePixel", "pixel_phones"}   # keep only posts that also mention Now Nudge


def last_run_date():
    """Newest run date from dashboard/voc-data.js; falls back to the study start."""
    path = os.path.join(ROOT, "dashboard", "voc-data.js")
    raw = open(path, encoding="utf-8").read()
    k = "window.VOC_DATA = {"
    d = json.loads(raw[raw.index(k) + len(k) - 1: raw.rindex(";")])
    runs = sorted(d.get("runs", []), key=lambda r: r["n"], reverse=True)
    return runs[0]["date"] if runs else d["config"]["windows"]["study"]["from"]


def load_creds():
    if not os.path.exists(CRED):
        sys.exit("Missing tools/reddit_credentials.json — copy the .example file and fill it in.")
    c = json.load(open(CRED))
    for k in ("client_id", "client_secret", "username"):
        if not c.get(k) or c[k].startswith("YOUR_"):
            sys.exit("Fill in '%s' in tools/reddit_credentials.json" % k)
    return c


def token(c):
    auth = base64.b64encode(("%s:%s" % (c["client_id"], c["client_secret"])).encode()).decode()
    req = urllib.request.Request(
        "https://www.reddit.com/api/v1/access_token",
        data=urllib.parse.urlencode({"grant_type": "client_credentials"}).encode(),
        headers={"Authorization": "Basic " + auth, "User-Agent": ua(c)})
    with urllib.request.urlopen(req, timeout=30) as r:
        t = json.load(r)
    if "access_token" not in t:
        sys.exit("Could not get a token: %s" % t)
    return t["access_token"]


def ua(c):
    return "script:nudge-sense-voc:1.0 (by /u/%s)" % c["username"]


def get(path, params, tok, c):
    url = "https://oauth.reddit.com" + path + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"Authorization": "bearer " + tok, "User-Agent": ua(c)})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                remaining = r.headers.get("x-ratelimit-remaining")
                data = json.load(r)
            if remaining and float(remaining) < 5:
                time.sleep(float(r.headers.get("x-ratelimit-reset", "60")))
            time.sleep(1.1)  # stay well under Reddit's rate limit
            return data
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503):
                time.sleep(5 * (attempt + 1)); continue
            print("  HTTP %s for %s" % (e.code, url), file=sys.stderr)
            return None
    return None


def iso(ts):
    return datetime.fromtimestamp(ts, tz=timezone.utc).strftime("%Y-%m-%d")


def mentions_nudge(text):
    t = (text or "").lower()
    return "nudge" in t


def search(tok, c, since, max_pages):
    found = {}
    scopes = [("/search", {})] + [("/r/%s/search" % s, {"restrict_sr": "1"}) for s in SUBREDDITS]
    for path, extra in scopes:
        for kw in KEYWORDS:
            after = None
            for _ in range(max_pages):
                params = dict(q=kw, sort="new", t="year", limit=100, raw_json=1, **extra)
                if after: params["after"] = after
                d = get(path, params, tok, c)
                if not d or "data" not in d: break
                kids = d["data"]["children"]
                for k in kids:
                    p = k["data"]
                    if iso(p["created_utc"]) < since: continue
                    if p["subreddit"] in MAGIC_CUE_ONLY and not mentions_nudge(p.get("title", "") + p.get("selftext", "")): continue
                    found[p["id"]] = p
                after = d["data"].get("after")
                if not after or not kids or iso(kids[-1]["data"]["created_utc"]) < since: break
        print("  searched %-28s → %d posts so far" % (path, len(found)))
    return found


def flatten(children, post, depth, out, limit):
    for ch in children:
        if ch.get("kind") != "t1" or len(out) >= limit: continue
        d = ch["data"]
        body = d.get("body", "")
        if body in ("[deleted]", "[removed]"): continue
        out.append({
            "id": d["id"], "postedAt": iso(d["created_utc"]), "depth": depth,
            "content": body, "score": d.get("score"),
            "replies": len([r for r in ((d.get("replies") or {}).get("data", {}).get("children", [])) if r.get("kind") == "t1"]),
            "url": "https://www.reddit.com" + d.get("permalink", ""),
            "mentionsNudge": mentions_nudge(body),
        })
        rep = d.get("replies")
        if rep and isinstance(rep, dict):
            flatten(rep["data"]["children"], post, depth + 1, out, limit)


def comments(tok, c, post, limit):
    d = get("/comments/%s" % post["id"], {"limit": 200, "depth": 4, "sort": "top", "raw_json": 1}, tok, c)
    out = []
    if d and len(d) > 1:
        flatten(d[1]["data"]["children"], post, 0, out, limit)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--run", required=True, help="e.g. run-2")
    ap.add_argument("--since", default=None, help="default: date of the last run")
    ap.add_argument("--max-pages", type=int, default=5)
    ap.add_argument("--comments", type=int, default=40, help="max comments kept per post")
    a = ap.parse_args()
    if not a.since:
        a.since = last_run_date()
        print("Last run was on %s, so collecting posts and comments since then." % a.since)
    c = load_creds()
    print("Getting token…")
    tok = token(c)
    print("Searching Reddit for Now Nudge posts since %s…" % a.since)
    posts = search(tok, c, a.since, a.max_pages)
    print("Fetching comments for %d posts…" % len(posts))
    items = []
    for i, p in enumerate(sorted(posts.values(), key=lambda x: x["created_utc"]), 1):
        cs = [x for x in comments(tok, c, p, a.comments) if x["postedAt"] >= a.since]
        items.append({
            "id": p["id"], "subreddit": "r/" + p["subreddit"], "postedAt": iso(p["created_utc"]),
            "title": p.get("title", ""), "content": p.get("selftext", ""),
            "linkUrl": None if p.get("is_self") else p.get("url"),
            "url": "https://www.reddit.com" + p["permalink"],
            "engagement": {"reactions": p.get("score"), "comments": p.get("num_comments"),
                           "upvoteRatio": p.get("upvote_ratio"), "shares": p.get("num_crossposts")},
            "flair": p.get("link_flair_text"),
            "comments": cs,
        })
        print("  [%d/%d] %s — %s (%d comments kept)" % (i, len(posts), iso(p["created_utc"]), p.get("title", "")[:60], len(cs)))
    out_dir = os.path.join(ROOT, "runs", a.run, "inbox")
    os.makedirs(out_dir, exist_ok=True)
    path = os.path.join(out_dir, "reddit.json")
    json.dump({"source": "Reddit Data API", "capturedAt": datetime.now().strftime("%Y-%m-%d"), "since": a.since,
               "keywords": KEYWORDS, "subreddits": SUBREDDITS, "posts": items},
              open(path, "w"), ensure_ascii=False, indent=1)
    print("\nSaved %d posts to %s" % (len(items), os.path.relpath(path, ROOT)))
    print("Now tell the agent: 'Reddit export is ready for Run 2'.")


if __name__ == "__main__":
    main()
