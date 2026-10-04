# Reddit Capture Template: Nudge Sense

How to collect Reddit posts about Samsung **Now Nudge** by hand, so the agent can add them to the dashboard.

**Save as:** `runs/<next-run>/inbox/reddit.csv` (or `.xlsx`). Example: `runs/run-3/inbox/reddit.csv`
**Format:** one row per post or comment.

---

## Columns

| Column | What to put | Example |
|---|---|---|
| `type` | `post` or `comment` | post |
| `subreddit` | Where it was posted | r/GalaxyS26 |
| `url` | Full link to the post or comment, from the address bar or the **Share** button | https://www.reddit.com/r/GalaxyS26/comments/abc123/… |
| `posted_date` | When it was posted, as `YYYY-MM-DD`. Hover over "5 mo. ago" to see the exact date | 2026-09-14 |
| `title` | **Posts only.** The title exactly as written, typos and emoji included | now nudge never shows up?? |
| `parent_title` | **Comments only.** The title of the post it's under | now nudge never shows up?? |
| `text` | The post body or comment, exactly as written. If you only copy part of it, end it with `[…]` | Works in Messages but not WhatsApp… |
| `upvotes` | The score shown next to the arrows | 412 |
| `comments` | **Posts only.** The number on the comments button | 96 |
| `crossposts` | **Posts only, optional.** Leave blank if not shown | |
| `captured_date` | The day you copied it, as `YYYY-MM-DD` | 2026-10-05 |
| `notes` | **Optional.** Anything useful, such as the user's device | user says S24 Ultra on One UI 9 beta |

### Header row (copy into your sheet)

```
type,subreddit,url,posted_date,title,parent_title,text,upvotes,comments,crossposts,captured_date,notes
```

---

## Rules

1. **Copy exactly.** Don't fix spelling, translate or shorten text. Use `[…]` only at the end of a partial copy.
2. **Counts as shown on the day.** Don't round or guess. Leave a cell blank if Reddit doesn't show the number.
3. **No usernames.** Skip the poster's name. If they mention their device, put it in `notes`.
4. **Only Now Nudge content.** For long threads, copy the post plus the comments that talk about Now Nudge, not every reply.
5. **One row per item.** Each comment gets its own row, with `parent_title` linking it to its post.

---

## Where to look

- **Search terms:** `"now nudge"` and `"now nudges"`
- **Sort by:** **New**, then by **Top → Past year**
- **Subreddits:**
  - r/samsung
  - r/GalaxyS26
  - r/oneui
  - r/GalaxyFold
- **Pixel subreddits:** r/GooglePixel and r/pixel_phones, but only threads that mention Now Nudge
- **Date range:** only posts and comments made **since the last run**. The agent tells you the date, or check the latest run in the dashboard's agent panel. Older posts were covered by earlier runs (the first run covered 25 Feb 2026 onward).

Even 20–30 rows make a big difference, since Reddit is currently the main gap.

---

## What the agent adds when coding

You don't need to fill these in. The agent adds them from your rows:

| Field | Meaning |
|---|---|
| Sentiment | Positive, neutral, negative or mixed |
| Themes | From the codebook in `VOC-Method.md` |
| User type | S26 owner, older Galaxy owner, and so on |
| Takeaway | One sentence on what the post means for the study |
| Engagement score | Worked out from upvotes and comments |

When the file is ready, tell the agent: **"Reddit export is ready for Run <n>."**
