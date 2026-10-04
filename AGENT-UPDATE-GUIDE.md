# Agent Update Guide: Nudge Sense

How to run a Voice of Customer (VoC) check on Samsung Now Nudge and put the results into the Nudge Sense dashboard.
Read this whole file before every run.

---

## 1. Read first

| File | Why |
|---|---|
| `VOC-Method.md` | The method. Scope, sources, keywords, codebook, research questions. **Source of truth.** |
| `Feature-Background.md` | Facts about Now Nudge, so you can tell real issues from misunderstandings. |
| `CLAUDE.md` | Design system rules. |
| `dashboard/voc-data.js` | The current data. You update this file. |

---

## 2. What you may edit

| File | Edit? |
|---|---|
| `dashboard/voc-data.js` | **Yes.** This is the only file a normal run changes. |
| `dashboard/index.html`, `voc-ds.css`, `voc-ds.js`, `design-system.html` | **No.** Only if the user asks for a design change. Then follow `CLAUDE.md`: change the design system first, and document any new variant. |
| `dashboard/voc-data.sample.js` | **No.** Sample data only. |

`voc-data.js` must stay in this exact shape:

```js
window.VOC_DATA = { ...valid JSON... }
;
```

No comments or code inside the object. Keep it valid JSON so any tool can parse it.

---

## 3. Run steps

> **Runs are incremental.** Each run collects only what was **posted since the previous run**. Everything already captured stays in `sources[]`, and the dashboard's numbers (sentiment, themes, clusters, answers) are always recalculated over **all runs together**.
>
> | | Rule |
> |---|---|
> | **Last run date** | `runs[0].date` in `voc-data.js` (the newest run) |
> | **Collect** | Posts and comments with a posted date **on or after** the last run date, up to today |
> | **Same day as the last run** | Include them, but skip any URL already in `sources[]` |
> | **New comments on old threads** | Include them if the *comment* was posted on or after the last run date (`parentTitle` = the old thread) |
> | **Older posts found for the first time** | Don't add them. Mention them in the run summary if they matter |
> | **Engagement counts on old posts** | Leave them as captured. Counts are a snapshot from each post's own run |
> | **First run ever** | No previous run, so collect from `config.windows.study.from` |

### Step 1: Set up the run
1. Open `voc-data.js`.
   - **Last run date:** `runs[0].date`. This is where collection starts.
   - **New run number:** `n = (highest runs[].n) + 1`. Its id is `"run-<n>"`.
   - **Collection window:** `{ "from": <last run date>, "to": <today> }`. Save it on the run entry as `"collected"` (see Step 8).
2. Set the date windows (today = the run date):
   - `config.windows.study.to` = today
   - `config.windows.recent` = the 60 days ending today
   - `config.windows.baseline` = from `study.from` to the day before `recent.from`
3. Leave the rest of `config` alone unless the user changed the method.

### Step 2: Collect posts
1. Search every source in `config.sourceList` (and its platform in `config.sources`) using `config.keywords`.
   - If a source's `status` is `"To verify"`, check that it exists. Set it to `"Active"`, or to `"Not found"` and skip it.
   - Pair broad terms (Nudge, AI suggestions, Keyboard suggestions) with Samsung, Galaxy, S26 or One UI.
2. Keep only posts that:
   - were **posted on or after the last run date** (the collection window)
   - are actually about **Now Nudge**
   - On X, add `since:<last run date>` to the search. On forums, sort by newest and stop at the last run date.
3. Skip any URL already in `sources[]`. Check this by `url`.
4. If a source can't be checked (blocked, rate-limited, down), record it in the run's `sourcesChecked` with `"status": "failed"` and a short `note`. Never guess its content.
5. **Reddit comes from an export, not browsing.** Reddit is blocked for browsing tools. The user runs `python3 tools/reddit_fetch.py --run run-<n>` with their own API keys. It starts from the last run date automatically and saves `runs/run-<n>/inbox/reddit.json`.
   - If that file exists, code it like any other source (`platform: "r/"`, `site: "Reddit"`, `where`: the subreddit). Use `engagement` as given (`reactions` = score, `comments` = number of comments). Keep only comments that are about Now Nudge.
   - The user may instead fill `runs/run-<n>/inbox/reddit.csv` (or `.xlsx`) by hand, following `Reddit-Capture-Template.md`. It should only hold posts since the last run; drop any older rows and say so in the run summary. Code it the same way: `upvotes` goes to `reactions`, `comments` to `comments`, `crossposts` to `shares`.
   - If neither file exists, record Reddit as `"failed"` with the note `"no export this run"`.
6. **Tech blogs: read the articles, not the comments.** Comment sections sit in third-party widgets that can't be read. Add an article only if it **reports or summarises user voices**: forum or Reddit reactions, AMA questions, polls, or a reviewer's own day-to-day experience. Skip plain feature announcements. Capture one verbatim paragraph that carries the user voice (`truncated: true`), with `kind: "article"`, `platform: "BL"` and `userType: "Reviewer or press"`.
7. **Magic Cue is secondary.** Only collect Magic Cue posts that also talk about Now Nudge. Set `"competitor": true` on them.

### Step 3: Capture each post verbatim
Add one object to `sources[]` per post (field list in §5).

**Verbatim rules (strict):**
- **`title`:** exactly as at the source. Keep the original spelling, casing, emoji and punctuation. Never fix, translate or reword. Use `""` if the source has no title.
- **`content`:** exactly as at the source.
  - If you keep only part of it, cut at a sentence boundary (about 600 characters at most) and set `"truncated": true`.
  - Never merge, summarise or translate inside `content`.
- **`url`:** the full URL exactly as visited. Never shortened.
- **`parentTitle`:** for comments, the exact title of the thread, article or video.
- Your own words go **only** in `takeaway`.
- If a URL you captured earlier is now removed, keep the old text and set `"unavailable": true`. Never delete sources.
- **Privacy:** don't record usernames, real names or profile links. Use `userType` instead.

**Engagement counts (`engagement`):**
- Copy the counts exactly as the platform shows them when you capture the post. Never estimate, round up or fill gaps.
- Map them to these keys:

| Key | Reddit | X | YouTube | Samsung Members | XDA | Blogs |
|---|---|---|---|---|---|---|
| `reactions` | Upvotes (post score) | Likes | Likes | Likes | Reactions | Likes |
| `downvotes` | Only if shown | – | – | – | – | – |
| `comments` | Comments | Replies | Replies | Replies | Replies | Replies |
| `shares` | Crossposts | Reposts + quotes | – | – | – | – |
| `views` | Only if shown | Views | – | Views | Views | – |

- Leave out any key the platform doesn't show. If no counts are shown, use `"engagement": {}`.
- Don't calculate the score. The dashboard works it out (see §5).

### Step 4: Code each post
- **`themeIds`:** one or more ids from `config.themes`.
  - Add a new theme only if 3 or more posts fit nothing. Add it to `config.themes` with a one-line definition and the research questions it answers.
- **`sentiment`:** the post's overall sentiment: `pos`, `neu`, `neg` or `mix`.
- **`userType`:** one of `config.userTypes`. Tag reviewers and press as `"Reviewer or press"`.
- **`takeaway`:** one plain sentence on what the post means for the study.

### Step 5: Compute the numbers
Use **all** posts in `sources[]`, not just the new ones.

| Field | How |
|---|---|
| `trend.periods[]` | One entry per month in the study window. `pos`/`neu`/`neg` = % of that month's posts (`mix` counts as neutral). `net = pos − neg`. `vol` = number of posts. Add `key` (`"YYYY-MM"`), `label` (`"Mar"`), `tip` (`"Mar 2026"`). |
| `themes[].vol` | Posts tagged with the theme. |
| `themes[].pos/neu/neg` | % split of those posts (whole numbers that add up to 100). |
| `themes[].base` / `recent` | Share of conversation: theme posts in the window ÷ all posts in the window × 100, rounded. One for the baseline window, one for the recent window. |
| `themes[].byPeriod[]` | Net sentiment per month, in the same order as `trend.periods`. Use `null` when the month has fewer than 3 posts for that theme. |
| `clusters[]` | Specific recurring topics inside a theme, such as "Missing in group chats". A cluster needs 3 or more posts. `base`/`recent` = share of conversation, as for themes. Set `firstSeenRun` when it first appears. |
| Momentum | Worked out by the dashboard from `base` → `recent`: a change of ±25% or more is Rising or Fading, otherwise Stable. A cluster with `base: 0` that is first seen this run is New. Set `"status": "resolved"` on a cluster only when it had 3+ posts before and none in the recent window. |

### Step 6: Answer the research questions
For each `questions[]` entry (`id` matches `config.researchQuestions`):

| Field | How |
|---|---|
| `short` | 1–5 words, e.g. "Partly." |
| `answer` | 1–3 plain sentences, grounded in the evidence. |
| `posts` | Number of posts that inform the answer. |
| `confidence` | `0` = fewer than 3 posts (not enough data), `1` = 3–9, `2` = 10–40, `3` = more than 40. |
| `change` | Compared with the previous run: `{ "status": "up"|"down"|"flat"|"new", "label": "Better than Run 2" }`. Use `"new"` with `"Answered this run"` the first time. |
| `themeIds`, `sourceIds` | The themes and the posts (3–8 of the strongest) behind the answer. |
| `history` | **Add** `{ runId, date, short, text }` to the **start** of the list. Never remove old entries. |

### Step 7: Write insights and the competitor note
- **`insights[]`:** at most 3, most important first.
  - Each has `title`, `body` (2 sentences), `status` (`new`/`up`/`flat`/`down`), the sentiment split of its posts, `posts`, `themeIds` and `sourceIds`.
  - Each must be backed by at least 3 sources.
- **`competitor`:**
  - `summary`: 1–2 sentences on how Magic Cue comes up in Now Nudge conversations
  - `sourceIds`: the posts behind it

### Step 8: Add the run entry
Add this to the **start** of `runs[]`:

```json
{
  "id": "run-4", "n": 4, "date": "YYYY-MM-DD",
  "collected": { "from": "<last run date>", "to": "YYYY-MM-DD" },
  "postsAdded": 0, "totalPosts": 0,
  "sourcesChecked": [{ "name": "Reddit", "status": "ok" }, { "name": "X", "status": "failed", "note": "why" }],
  "summary": ["3–5 short bullets, plain English, most important first"],
  "changes": {
    "new": [{ "label": "…", "route": "emerging/<clusterId>" }],
    "up": [], "down": [], "resolved": []
  },
  "links": [
    { "type": "internal", "label": "…", "route": "themes/<themeId>", "section": "Themes" },
    { "type": "external", "label": "exact source title", "url": "https://…", "domain": "reddit.com" }
  ],
  "snapshot": { "posts": 0, "net": 0, "emerging": 0, "answered": 0 }
}
```

- **`collected`:** the collection window, from the last run date to today. The dashboard shows it on the run entry.
- **`postsAdded`:** new posts in this window only. **`totalPosts`:** all posts across all runs.
- **`summary`:** what changed since the last run, not a restatement of everything. Start with the window, for example "Posts from 3 Oct to 2 Nov: 41 new."
- **`links`:**
  - **2–6 internal links:** one for each summary point that has a place in the dashboard.
  - **1–5 external links:** the strongest new sources. Use each source's exact `title` (or the start of its `content` if it has no title) as the `label`.
- **`snapshot`:**
  - `posts`: total posts
  - `net`: net sentiment over all posts
  - `emerging`: clusters marked New or Rising
  - `answered`: questions with confidence of 1 or more

---

## 3b. Korean version (required on every run)

The dashboard has an **English / 한국어** switch. Every piece of text **you write** needs a Korean copy, stored next to the English in a `ko` object:

| Where | Add |
|---|---|
| `sources[]` | `"ko": { "takeaway": "…" }` |
| `themes[]` | `"ko": { "summary": "…" }` |
| `clusters[]` | `"ko": { "name": "…", "summary": "…" }` |
| `questions[]` | `"ko": { "short": "…", "answer": "…" }`, `change.ko.label`, and each new `history[]` entry's `ko.short` / `ko.text` |
| `insights[]` | `"ko": { "title": "…", "body": "…" }` |
| `runs[]` (new entry) | `"ko": { "summary": [ … ] }`, each internal link's `ko.label` / `ko.section`, each `changes` item's `ko.label`, each `sourcesChecked` item's `ko.name` / `ko.note` |
| `competitor` | `"ko": { "summary": "…" }` |
| `config` (only if you change it) | new themes' `ko.name` / `ko.definition`, events' `ko.label`, `config.ko.limitations` |

**Rules:**
- **Never translate verbatim source text** (`title`, `content`, `parentTitle`). Korean readers see posts exactly as written, in their original language.
- Keep product names in English: Now Nudge, Now Brief, Galaxy AI, One UI, Magic Cue, Gboard. Use 삼성 키보드 for Samsung Keyboard.
- Use plain, neutral Korean (합니다체), short sentences.
- If a Korean copy is missing, the dashboard falls back to English for that item, so a gap is visible rather than broken.

---

## 4. Internal link routes

The dashboard opens these when a link is clicked. Never write `#/` yourself; the dashboard adds it.

| Route | Opens |
|---|---|
| `overview` | Overview |
| `trend` | Sentiment trend |
| `trend/heatmap` | Theme × month heatmap |
| `themes/<themeId>` | That theme, with its evidence |
| `emerging/<clusterId>` | That cluster, with its evidence |
| `questions/<qId>` | That research question (`q1`–`q6`) |
| `sources` | Source library |
| `competitor` | Magic Cue mentions |
| `method` | Method: study setup, research questions, codebook, limitations |

Every `<themeId>`, `<clusterId>` and `<qId>` must exist in the data.

---

## 5. Data reference

### `sources[]`
| Field | Type | Notes |
|---|---|---|
| `id` | string | `"s<number>"`, never reused |
| `run` | number | Run number in which it was first captured |
| `kind` | `post` · `comment` · `article` · `video` | |
| `platform` | `r/` · `SM` · `XDA` · `X` · `YT` · `BL` | Monogram from `config.sources[].code` |
| `site` | string | e.g. "Reddit" |
| `where` | string | Subreddit, forum board, "Comment", etc. |
| `title` | string | **Verbatim**, `""` if none |
| `parentTitle` | string | **Verbatim**, for comments only |
| `content` | string | **Verbatim** (use `\n` for line breaks) |
| `truncated` | boolean | `true` if `content` is partial |
| `url`, `domain` | string | Full URL; domain without `www.` |
| `postedAt`, `capturedAt` | `YYYY-MM-DD` | |
| `postedApprox` | string | Only when the exact date isn't shown: the source's relative time, e.g. `"4 months ago"`. Set `postedAt` to the capture date minus that amount. The dashboard then shows "~Jun 2026". |
| `userType` | string | From `config.userTypes` |
| `themeIds` | string[] | |
| `sentiment` | `pos` · `neu` · `neg` · `mix` | |
| `takeaway` | string | Agent's words, 1 sentence |
| `competitor` | boolean | Mentions Magic Cue |
| `unavailable` | boolean | Removed since capture |
| `engagement` | object | `{ reactions, downvotes, comments, shares, views }`, exactly as shown at capture time; leave out unknown keys |

**Engagement score (worked out by the dashboard, don't write it):**
- **Interactions** = reactions + 2 × comments + 3 × shares − downvotes. Views are shown but not counted.
- **Score (0–100)** = log-scaled against the most-engaged captured post on the **same platform**.
- **Levels:** High ≥ 67, Medium ≥ 34, otherwise Low.

### `themes[]`
`{ id, pos, neu, neg, vol, base, recent, byPeriod[], summary, sourceIds[] }`. The name and definition come from `config.themes`. `summary` is one plain sentence.

### `clusters[]`
`{ id, name, themeId, base, recent, firstSeenRun, status?, summary, sourceIds[] }`

---

## 6. Writing style
- Simple English, short sentences, no jargon.
- Neutral: report what people say. Don't defend or attack Samsung or Google.
- Numbers come with evidence. Never write a claim you can't link to sources.
- Separate users from press: lean on `"Reviewer or press"` posts only when the question is about press coverage.

---

## 7. Checklist before you finish
- [ ] `voc-data.js` is still `window.VOC_DATA = {…};` and the object is valid JSON
- [ ] Every new source was posted on or after the last run date (`runs[0].date` before this run)
- [ ] No URL from an earlier run was added again
- [ ] Every new source has a verbatim `title`/`content`/`url`, `postedAt` and `capturedAt`
- [ ] Every new source has `engagement` counts copied from the platform (or `{}` if none are shown)
- [ ] Every `config.sourceList` entry marked "To verify" has been checked
- [ ] No usernames or personal details
- [ ] Every `sourceIds` entry exists in `sources[]`
- [ ] Every internal `route` matches §4 and points to an existing id
- [ ] Theme `pos`+`neu`+`neg` = 100; `byPeriod` length = `trend.periods` length
- [ ] New run added at the start of `runs[]`; question `history` entries added at the start
- [ ] Failed sources are recorded in `sourcesChecked`
- [ ] Every new agent-written text has its Korean copy (`ko`), and verbatim text is untouched
- [ ] Open `dashboard/index.html` and check that it loads without errors, in English and in 한국어

---

## 8. Publishing (GitHub Pages)

The project is published at **https://karthikeya-gs07.github.io/nudge-sense/** from the public repo `karthikeya-gs07/nudge-sense` (branch `main`). The site is **public**.

After a run passes the checklist, **ask the user before publishing**, then:

```bash
git add -A
git commit -m "Run <n>: <one-line summary>"
git push
```

GitHub Pages rebuilds in about a minute. Never commit `tools/reddit_credentials.json` (it is in `.gitignore`).

---

## 9. Viewing the dashboard
- Open `dashboard/index.html` in a browser by double-clicking it. No server is needed.
- To see sample data instead: `dashboard/index.html?sample`
- To see the components: `dashboard/design-system.html`

When the run is done, reply to the user with the run's `summary` bullets and say which sources failed, if any.
