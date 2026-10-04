"""Reddit rows for Run 1, captured by hand by the user on 2026-10-03 (inbox/reddit_capture.md).
Text, titles and URLs are read straight from the capture table, never retyped.
Posted dates are approximate, derived from 'Reddit showed Nmo/Nd/Nh ago' in the notes column.
Vote/comment counts were not available in the accessible view, so engagement is empty."""
import os, re
from datetime import date, timedelta

HERE = os.path.dirname(os.path.abspath(__file__))
CAPTURE = os.path.join(HERE, "inbox", "reddit_capture.md")
CAPTURED = date(2026, 10, 3)

S26 = "S26 owner"; OLD = "S25 or older owner (left out)"; BETA = "Older Galaxy on One UI 9 beta"; FOLD = "Fold 8 / Flip 8 owner"
UNK = "Galaxy owner (device not stated)"; PRESS = "Reviewer or press"; PIXEL = "Pixel 10 owner"; SWITCH = "Brand switcher"; BOT = "Samsung (official or bot)"

# One entry per table row, in order: (userType, themes, sentiment, clusters, takeaway, competitor?)
CODES = [
 # r/galaxys26ultra — "But... Now Nudge works??"
 (S26, ["triggering","anticipation","languages"], "neg", ["not-appearing","whatsapp-telegram","regional"], "In Italy, with every setting on and Samsung Keyboard, the user has never seen a nudge, even when asked for photos or meetings on WhatsApp."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "Thinks the feature is unfinished."),
 (UNK, ["keyboard"], "neg", ["keyboard-only"], "Uses Gboard, has never seen a nudge, and is considering a Pixel."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "With Samsung Keyboard it should appear, but it doesn't."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "Has never seen it and doesn't think it works."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "Suspects Samsung has paused the feature, perhaps until One UI 9."),
 (UNK, ["triggering","coverage"], "mix", ["whatsapp-telegram"], "Works, but only with text messages so far."),
 (UNK, ["setup"], "neu", ["feature-confusion"], "Explains that what many see is Writing Assist, not Now Nudge, which should link to the gallery or calendar."),
 (UNK, ["setup","coverage"], "mix", ["whatsapp-telegram"], "After turning on suggested replies and clearing caches, it started working, but only in Google Messages."),
 (UNK, ["setup","triggering"], "neg", ["feature-confusion","not-appearing"], "Says the suggestions people see are Writing Assist; Now Nudge itself isn't working."),
 (UNK, ["coverage"], "neu", ["whatsapp-telegram"], "Says it works, but only in Google Chat, Google Messages and Samsung Messages."),
 (S26, ["triggering","usefulness"], "neg", ["not-appearing","regional"], "In Austria, calendar and place nudges worked at first but stopped after a late-March update; now it only offers useless replies."),
 (UNK, ["triggering","coverage"], "neg", ["not-appearing"], "Only shows up after taking a screenshot, to suggest sending it."),
 (S26, ["triggering"], "neg", ["not-appearing"], "Three months on an S26 Ultra with Samsung Keyboard and every setting on, and still no nudge."),
 (UNK, ["coverage"], "neg", ["whatsapp-telegram"], "Says it only supports three apps, which is why it doesn't work for most people."),
 # r/oneui — "Now Nudge hasn't done anything yet"
 (S26, ["triggering","keyboard"], "neg", ["not-appearing","keyboard-only"], "Switched to Samsung Keyboard to try it; after a week, Now Nudge hasn't done anything."),
 (UNK, ["setup"], "neg", ["feature-confusion"], "Even Samsung's Galaxy Guide can't explain the feature."),
 (UNK, ["anticipation","setup"], "neu", [], "Suggests testing it by having a friend ask for yesterday's photos."),
 (UNK, ["usefulness","autofill"], "mix", [], "Seen it a few times; it once filled a passport number, but it's not really useful yet."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "Two weeks in, it hasn't activated once, despite trying several methods."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "Hasn't seen it in three weeks of waiting."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "Has never worked, almost three months after launch."),
 (UNK, ["triggering","setup"], "neg", ["not-appearing","feature-confusion"], "Has never seen proof of it working; suspects Samsung deactivated it and that people mistake Writing Assist for it."),
 (S26, ["triggering","languages","autofill"], "neg", ["not-appearing","regional"], "Samsung support said it isn't working yet in some regions, including North America; only personal-detail autofill shows up in the browser."),
 (UNK, ["setup"], "neu", [], "Thinks it may need several days of learning before suggestions start."),
 (UNK, ["setup"], "neu", ["feature-confusion"], "Believes Now Nudge is a One UI 9 feature (it launched with One UI 8.5)."),
 (UNK, ["setup"], "neu", ["feature-confusion"], "Corrects the thread: it's a One UI 8.5 launch feature for the S26."),
 # r/samsunggalaxy — "Now Nudge not working?"
 (UNK, ["triggering"], "neg", ["not-appearing"], "Has never worked since getting the phone, even with every Galaxy AI setting on."),
 (UNK, ["triggering","usefulness"], "neg", ["not-appearing"], "Doesn't work; only offers automatic replies."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "Never worked properly, even with everything enabled."),
 (UNK, ["anticipation","triggering","usefulness"], "neg", ["not-appearing"], "Bought into the Unpacked demo for checking availability with clients and sharing photos; the real device doesn't deliver."),
 (UNK, ["triggering","coverage"], "neg", ["not-appearing"], "Showed up for one day in Google Messages, then never again."),
 (UNK, ["keyboard","coverage"], "neg", ["keyboard-only","whatsapp-telegram"], "Says the main problem is that it needs Samsung Keyboard and only works in three apps."),
 # r/GalaxyFold — "Now nudge and whats app?"
 (FOLD, ["coverage","triggering","keyboard"], "neg", ["whatsapp-telegram","keyboard-only"], "Works in Messages but not WhatsApp, where they actually chat; close to going back to Gboard."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "Can't get it to appear even in Messages."),
 (UNK, ["coverage","usefulness"], "mix", ["whatsapp-telegram"], "Got it working in Messages, but nobody sends normal texts any more."),
 (UNK, ["coverage","languages"], "mix", ["whatsapp-telegram","regional"], "In Australia it works in Google Messages but not WhatsApp; wonders whether it's region-locked."),
 (UNK, ["anticipation","triggering"], "neg", ["not-appearing"], "Reply suggestions work, but the advertised calendar prompts don't."),
 (UNK, ["coverage","languages"], "neu", ["whatsapp-telegram","regional"], "Says that in most regions it only gives text suggestions in WhatsApp, with full support in a few."),
 (UNK, ["anticipation","triggering"], "neg", ["not-appearing"], "Sees reply suggestions but never the calendar prompts shown on Fold 8 demo units in stores."),
 (UNK, ["coverage"], "neg", ["whatsapp-telegram"], "Says the fine print limits it to three apps; elsewhere it only suggests replies."),
 # r/samsunggalaxy — "Exclusive: ... S25, possibly even to Galaxy S24"
 (PRESS, ["exclusivity"], "neu", ["older-devices"], "News post: Now Nudge found in One UI 9 firmware for the S25."),
 (OLD, ["exclusivity","usefulness"], "pos", ["older-devices"], "S24 owner thinks Now Nudge might be useful and hopes it reaches their phone."),
 (OLD, ["exclusivity"], "neg", ["older-devices"], "Doubts the FE series will get it."),
 (OLD, ["exclusivity"], "neu", ["older-devices"], "S24 Ultra owner wants it too."),
 (UNK, ["setup"], "neu", ["feature-confusion"], "Asks what Now Nudge even is."),
 (UNK, ["intrusiveness"], "neg", ["annoying"], "Compares Now Nudge to Navi's constant 'Hey, Listen!': a nag nobody asked for."),
 (SWITCH, ["intrusiveness","privacy"], "neg", ["annoying","privacy-worries"], "Glad it can be switched off; doesn't want the phone scanning messages or telling them what to do."),
 (S26, ["usefulness","intrusiveness"], "neg", ["annoying"], "S26 Ultra owner finds it useless and quite annoying."),
 (UNK, ["usefulness"], "neg", [], "Dismisses it as more Samsung bloatware."),
 (UNK, ["usefulness"], "neg", [], "Sees it as an AI feature to pad out phones with few hardware changes."),
 # r/samsung — "S25 Series will be getting Now Nudges with One UI 9"
 (PRESS, ["exclusivity"], "neu", ["older-devices"], "News post: the S25 series will get Now Nudge with One UI 9."),
 (OLD, ["exclusivity"], "neg", ["older-devices"], "Criticises Samsung for treating a one-year-old phone getting a feature as big news."),
 (OLD, ["exclusivity"], "neu", ["older-devices"], "Believes the S24 and S25 only got it because people complained."),
 (OLD, ["exclusivity"], "neg", ["older-devices"], "Frustrated that Samsung holds features back for each new release."),
 (UNK, ["privacy"], "neg", ["privacy-worries"], "Refuses a feature that reads the screen and questions which third party is involved."),
 # r/GalaxyS24 — "Helpful or potentially distracting?"
 (OLD, ["usefulness","intrusiveness"], "neu", [], "Asks whether real-time suggestions are helpful or distracting."),
 (UNK, ["comparison","triggering"], "neg", [], "Good concept, but in their experience (Google had it first) not reliable.", True),
 (UNK, ["privacy"], "neg", ["privacy-worries"], "Calls it 'Samsung Recall': a privacy disaster that remembers everything on screen, even in Signal."),
 (UNK, ["privacy"], "neg", ["privacy-worries"], "Sees it as privacy-invading, like Windows Recall."),
 (UNK, ["privacy"], "pos", ["privacy-worries"], "Counters that processing stays on the device, in Knox, and is encrypted."),
 # r/oneui — "Any way to open now nudge section in settings?"
 (OLD, ["exclusivity","setup"], "neu", ["older-devices"], "Tries to unlock Now Nudge on an older phone with a custom ROM; settings say 'not allowed'."),
 (UNK, ["setup"], "neu", ["older-devices"], "Suggests a System UI Tuner workaround."),
 (OLD, ["setup"], "neu", ["older-devices"], "Workarounds via Personal Data Intelligence don't open the section."),
 (OLD, ["exclusivity"], "neu", ["older-devices"], "Asks how to activate it on One UI 8.0."),
 (OLD, ["setup"], "mix", ["older-devices"], "Got the option to appear by sideloading the Personal Data Intelligence app."),
 (OLD, ["setup"], "neg", ["older-devices"], "Still hasn't found a way to make it work."),
 (BOT, ["setup"], "neu", ["feature-confusion"], "Samsung's Galaxy Guide bot replies with marketing copy instead of help."),
 (UNK, ["setup"], "neu", ["feature-confusion"], "Believes it isn't a feature yet and needs One UI 9."),
 # r/S24Ultra — "Does now nudge work for anyone on the latest one ui 9 beta?"
 (BETA, ["triggering","setup"], "neg", ["s24-beta","feature-confusion"], "S24 Ultra on the One UI 9 beta can't get it working; the error is actually from Now Brief custom cards."),
 (UNK, ["triggering"], "neg", ["not-appearing"], "Says it doesn't work properly even on the Fold 8 yet."),
 (BETA, ["setup"], "neu", [], "Assumed they had set it up wrong; there's little information online."),
 (UNK, ["exclusivity","triggering"], "mix", ["older-devices"], "Expects it needs time to index; glad the S24 wasn't left out."),
 (BETA, ["setup"], "neu", ["feature-confusion"], "Explains Now Nudge and Now Brief custom cards are separate menus."),
 # r/S25Ultra — "Did the S25 Ultra get all of the agentic AI features...?"
 (OLD, ["exclusivity"], "neu", ["older-devices"], "Prospective buyer asks whether the S25 Ultra has Now Nudge and other S26 AI features."),
 (UNK, ["usefulness"], "neg", [], "Doubts anyone would choose a phone for 'agentic' AI features."),
 (UNK, ["exclusivity"], "neu", ["older-devices"], "Says Now Nudge is S26-only (at the time)."),
 (UNK, ["triggering","usefulness"], "neg", [], "Expects these features to work properly only by the S27."),
 (PIXEL, ["comparison","exclusivity"], "neg", [], "Pixel owner says Magic Cue is excellent and lacking Now Nudge is a deal breaker.", True),
 (UNK, ["exclusivity"], "neu", ["older-devices"], "Says everything is on the S25 except Now Nudge."),
]


def approx_date(notes):
    m = re.search(r"Reddit showed (\d+)\s*(mo|d|h) ago", notes or "")
    if not m: return CAPTURED.isoformat(), None
    n, u = int(m.group(1)), m.group(2)
    if u == "mo":
        y, mth = CAPTURED.year, CAPTURED.month - n
        while mth <= 0: mth += 12; y -= 1
        d = date(y, mth, min(CAPTURED.day, 28))
    elif u == "d": d = CAPTURED - timedelta(days=n)
    else: d = CAPTURED - timedelta(hours=n)
    return d.isoformat(), "%d%s ago" % (n, {"mo": " months", "d": " days", "h": " hours"}[u] if n != 1 else {"mo": " month", "d": " day", "h": " hour"}[u])


def load():
    rows = []
    for line in open(CAPTURE, encoding="utf-8"):
        if not line.startswith("| post") and not line.startswith("| comment"): continue
        cells = [c.strip() for c in line.rstrip("\n").strip().strip("|").split(" | ")]
        if len(cells) != 12:  # tolerate empty cells collapsing
            cells = [c.strip() for c in line.rstrip("\n").strip()[1:-1].split("|")]
        rows.append(dict(zip(["type","subreddit","url","posted_date","title","parent_title","text","upvotes","comments","crossposts","captured_date","notes"], cells)))
    return rows


def build():
    rows = load()
    assert len(rows) == len(CODES), "rows %d vs codes %d" % (len(rows), len(CODES))
    out = []
    for r, c in zip(rows, CODES):
        ut, th, sent, cl, take = c[:5]; comp = len(c) > 5 and c[5]
        posted, rel = approx_date(r["notes"])
        if r["posted_date"]: posted, rel = r["posted_date"], None
        eng = {}
        for k, f in (("reactions", "upvotes"), ("comments", "comments"), ("shares", "crossposts")):
            if r[f]: eng[k] = int(r[f].replace(",", ""))
        o = dict(kind="post" if r["type"] == "post" else "comment", platform="r/", site="Reddit", where=r["subreddit"], url=r["url"],
                 title=r["title"], parentTitle=r["parent_title"], content=r["text"], postedAt=posted, postedApprox=rel,
                 engagement=eng, userType=ut, themes=th, sentiment=sent, clusters=cl, takeaway=take, competitor=comp)
        out.append(o)
    return out


SOURCES_REDDIT = build()

if __name__ == "__main__":
    print(len(SOURCES_REDDIT), "rows")
    print(SOURCES_REDDIT[0]["postedAt"], SOURCES_REDDIT[0]["postedApprox"], SOURCES_REDDIT[0]["content"][:60])
