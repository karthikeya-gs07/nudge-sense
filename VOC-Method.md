# Voice of Customer (VoC) Study — Method

A guide for running a **secondary VoC study**: analysing what people already say in public (Reddit, blogs, reviews, forums) about a launched feature and its competitor.

> **How to use this file**
> - Sections marked **⚙️ Tweak** must be filled in or adjusted for each feature studied.
> - The rest is the fixed method and applies to every study.

---

## 0. Study Setup ⚙️ Tweak

| Parameter | Value |
|---|---|
| **Feature studied** | Now Nudge (Galaxy AI, One UI 8.5) |
| **Product / company** | Samsung |
| **Launch date** | Announced 25 Feb 2026. On sale with Galaxy S26 from 11 Mar 2026 (some regions into early April) |
| **Competitor feature(s)** | Google Magic Cue (Pixel 10, Aug 2025). **Secondary only**, see Study focus |
| **Target users** | Galaxy S26 owners using Samsung Keyboard |
| **Time window** | 25 Feb 2026 → 2 Oct 2026 (announcement → today) |
| **Recent window (for clusters)** | 3 Aug 2026 → 2 Oct 2026 (last 60 days) |
| **Baseline window** | 25 Feb 2026 → 2 Aug 2026 |

> Background facts are in [Feature-Background.md](Feature-Background.md).

### Study focus ⚙️ Tweak
- **Primary goal:** understand what people say about **Now Nudge**, and nothing else.
- **Comparison is a small part:** look at Magic Cue only when people bring it up in Now Nudge conversations. Don't run a separate competitor study.

### Research questions ⚙️ Tweak
1. What problems are people facing with this feature?
2. Does it appear when they anticipate it?
3. When are people anticipating a Now Nudge?
4. Do people find Now Nudge helpful when it actually works?
5. Do they feel it is intrusive?
6. Do they wish it were available on other chatting platforms too?

---

## 1. Methods

### Sources ⚙️ Tweak (choose what fits the feature)
- **Reddit:** r/samsung, r/galaxys26, r/oneui (main). r/GooglePixel and r/pixel_phones only for Magic Cue mentions
- **Communities:** Samsung Members (global and regional), XDA Forums
- **Social:** X, YouTube comments on S26 reviews and Now Nudge videos
- **Tech blog comments:** SamMobile, SammyFans, Android Authority, 9to5Google, Android Police
- **Not used:** G2, Capterra, Trustpilot and app store reviews. They don't fit a built-in phone feature

### Keyword list ⚙️ Tweak
| Type | Now Nudge (primary) | Magic Cue (secondary) |
|---|---|---|
| Official name | "Now Nudge", "Now nudge" | "Magic Cue" |
| Nicknames / slang | "Nudge", "Samsung Nudge", "Now nudges" | "Magic Cues" |
| Misspellings | "Now Nudges", "NowNudge" | "Magic Q" |
| Related terms | "AI suggestions", "Keyboard suggestions", "Keyboard AI suggestions", "Personal Data Intelligence" | — |

> Broad terms ("Nudge", "AI suggestions", "Keyboard suggestions") will catch unrelated posts. Pair them with "Samsung", "Galaxy", "S26" or "One UI" when searching, and remove off-topic posts in the Clean step.

### Process
> **Each run is incremental:** it only collects what was **posted since the previous run**. Earlier posts stay in the data, and all results are recalculated over every run combined. (The first run collects from the start of the study window.)

1. **Scope:** fill in Section 0. Note the **last run date**; this run collects from that date to today.
2. **Keywords:** build the keyword list above.
3. **Collect:** gather posts **posted since the last run** and save the link, date, source, text and **engagement counts** (upvotes, comments, reposts, views as shown at capture) for each one.
4. **Clean:** remove duplicates, spam and posts that don't mention the feature.
5. **Code:** tag each post using the codebook (Section 2).
6. **Synthesise:** combine the tags into themes and insights (Section 3).

---

## 2. Grouping (Codebook)

Every post gets tagged on these dimensions:

| Dimension | Values |
|---|---|
| **Theme** ⚙️ Tweak | See theme list below |
| **Sentiment** | Positive / Neutral / Negative / Mixed |
| **Feedback type** | Praise / Complaint / Bug / Feature request / Question / Comparison |
| **User type** ⚙️ Tweak | S26 owner / S25 or older owner (left out) / Pixel 10 owner / Brand switcher / Reviewer or press |
| **Product** | Now Nudge / Magic Cue / Both |
| **Journey stage** ⚙️ Tweak | Aware → Enable → First nudges → Daily use → Ignore or turn off. Separate stage: **Can't access** (wrong device or keyboard) |
| **Source** | Reddit / Samsung Members / XDA / X / YouTube / Blog comments / Other |
| **Date** | Bucketed by week or month |

### Theme list ⚙️ Tweak
| Theme | What it covers | Research question |
|---|---|---|
| Usefulness | Nudge helped get something done | Q4 |
| Accuracy | Wrong or irrelevant suggestions | Q1, Q4 |
| Triggering / reliability | Nudge didn't appear, or appeared at the wrong time | Q1, Q2 |
| Anticipation moments | Situations where people expected a nudge | Q2, Q3 |
| Frequency / intrusiveness | Too many nudges, distracting, annoying | Q5 |
| Keyboard lock-in | Needs Samsung Keyboard; Gboard users miss out | Q1 |
| App coverage | Requests for more chat apps or platforms | Q6 |
| Privacy | Concerns about the feature reading the screen | Q5 |
| Autofill / Personal Data Intelligence | Form filling with saved personal details | Q1, Q4 |
| Device exclusivity | Not available on S25 or older devices | Q1 |
| Languages / regions | Language or country limits | Q1 |
| Setup / discoverability | Finding, turning on or understanding the feature | Q1 |
| Battery / performance | Lag or battery drain linked to the feature | Q1 |
| Comparison to Magic Cue | "Copy of Magic Cue", better or worse than Google's | Secondary |

**Codebook rules:**
- Write a one-line definition and one example post for each theme.
- One post can have several themes, but only one sentiment per theme.
- Add a new theme only when **3 or more posts** don't fit any existing one.

---

## 3. Expected Takeaways

- **Top pain points:** what frustrates people most
- **Top delights:** what people love and would defend
- **Unmet needs:** feature requests and workarounds people describe
- **Competitive gaps:** where the competitor wins and where we win
- **Language people use:** useful for UX copy and marketing
- **Switching triggers:** why people move to or away from us
- **Recommendations:** what to fix, build or communicate, in priority order

---

## 4. Visualisations

| What to show | Visualisation |
|---|---|
| Sentiment over time | Line chart or stacked area chart |
| Theme volume | Horizontal bar chart, ranked |
| Theme × sentiment | Heatmap or diverging bar chart |
| Us vs. competitor | Side-by-side bars or a comparison matrix |
| Which themes matter most | Bubble chart (x = volume, y = sentiment) |
| Rising vs. fading themes | Slope chart or momentum table |
| Real voices | Quote cards (always pair numbers with quotes) |
| Where feedback comes from | Stacked bars by source |

---

## 5. Best Practices

- **Start with the research questions.** Every finding should answer one of them.
- **Use a shared codebook** so tagging stays consistent.
- **Keep the layers separate:**
  - Raw data (posts)
  - Tags (codes)
  - Themes (groups of tags)
  - Insights (what it means)
- **Show volume and severity together.** One loud complaint is not a trend.
- **Show evidence for every insight:** a count, a quote and a link.
- **Note the bias.** Online forums lean negative and attract power users.
- **Separate press from users.** Tag reviewer and press opinions as their own user type. Early coverage often called Now Nudge a "Magic Cue clone", and that framing can skew the results.
- **Keep the competitor in its place.** Tag Magic Cue mentions found in Now Nudge conversations with the same codebook, but don't collect competitor data separately.

---

## 6. Sentiment Over Time

**Metrics:**
- **Net sentiment** = % positive − % negative, per week or month
- **Volume:** the number of posts in each period
- **Per-theme sentiment:** tracked separately from overall sentiment

**Event markers** ⚙️ Tweak: list key dates to mark on the timeline.
| Date | Event |
|---|---|
| 25 Feb 2026 | Now Nudge announced with Galaxy S26 |
| 11 Mar 2026 | Galaxy S26 goes on sale (regions continue to early April) |
| May 2026 | One UI 8.5 reaches Galaxy S25, without Now Nudge |
| 20 May 2026 | Google announces Magic Cue expansion and redesign |
| Jun 2026 | June Pixel Drop: Magic Cue expands to more apps |

**Common patterns after a launch:**
- **Early spike:** excitement and curiosity
- **Dip:** real use exposes bugs and limits
- **Settling:** sentiment stabilises around how valuable the feature really is

---

## 7. Latest Clusters (Emerging Themes)

1. Group posts by topic, either with manual tags or AI clustering.
2. Compare the **recent window** with the **baseline window** (set in Section 0).
3. Calculate each cluster's **share of conversation** in both windows.
4. Flag each cluster:
   - 🔺 **Emerging:** new, or share up by more than 50%
   - ➖ **Stable:** share roughly the same
   - 🔻 **Fading:** share down, possibly resolved

**Signals to watch:**
- A new complaint after a recent update
- The competitor being mentioned more often in our threads (a sign of switching)
- New use cases people have invented themselves
- The same workaround being shared again and again (an unmet need)

---

## 8. Report Structure

1. Summary (5 bullet points at most)
2. Key insights (with evidence)
3. Sentiment trend
4. Emerging clusters
5. Theme deep-dives
6. Competitor comparison
7. Recommendations
8. Method and limitations
