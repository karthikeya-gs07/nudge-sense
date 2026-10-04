# Run 1 — tech blog articles that report or summarise user voices (read 2026-10-04).
# Rule: only articles that describe what users say (forums, Reddit, AMAs, hands-on experience).
# Plain feature announcements are not added. Content is a verbatim paragraph (truncated = partial).
PRESS = "Reviewer or press"

def A(**k):
    k.update(kind="article", platform="BL", userType=PRESS, truncated=True); return k

SOURCES_BLOGS = [
 A(site="Android Police", where="News", url="https://www.androidpolice.com/samsung-grilled-by-fans-over-galaxy-ai-in-spiky-reddit-ama/",
   title="Samsung grilled by fans over Galaxy AI in spiky Reddit AMA",
   content="Another questions how Galaxy AI uses data shared to Galaxy AI. One person asks how Galaxy AI actually helps them day-to-day, and another still writes, “From conversations I have, many people are extremely wary of AI. Would Samsung ever be interested in servicing this market?”",
   postedAt="2026-04-16", themes=["usefulness","privacy"], sentiment="neg",
   takeaway="Report on Samsung's Reddit AMA: fans questioned Galaxy AI's day-to-day value and data use; Now Nudge was among the features discussed most.", clusters=["privacy-worries"]),
 A(site="PiunikaWeb", where="News", url="https://piunikaweb.com/2026/05/08/samsung-one-ui-8-5-galaxy-s25-missing-features/",
   title="Galaxy S25's One UI 8.5 update excludes several S26 features, including 'Now Nudge' and the '24MP' camera mode",
   content="Early feedback from users who bagged the update suggests at least nine significant omissions. The biggest gripes so far center on the absent 24MP camera mode and the Now Nudge feature. Many had assumed these would make their way to the S25 phones since they do not appear to depend on brand-new hardware.",
   postedAt="2026-05-08", themes=["exclusivity"], sentiment="neg",
   takeaway="Summarises S25 owners' reaction to One UI 8.5: Now Nudge's absence is one of the two biggest gripes.", clusters=["older-devices"]),
 A(site="Digital Trends", where="News", url="https://www.digitaltrends.com/phones/samsung-gave-galaxy-s25-users-one-ui-8-5-but-skipped-the-features-they-wanted-most/",
   title="Samsung gave Galaxy S25 users One UI 8.5, but skipped the features they wanted most",
   content="On Samsung’s Korean community forums, many users are treating the omissions as feature gatekeeping rather than a hardware issue. Their argument is that the Galaxy S25 series already has Snapdragon 8 Elite chips, which should be powerful enough for many of these tools. Some users suggest Samsung’s newer NPU hardware in the S26 lineup could explain a few limits, but the broader reaction is that Samsung is drawing a clear software line between the two generations.",
   postedAt="2026-05-09", themes=["exclusivity"], sentiment="neg",
   takeaway="Summarises Samsung's Korean forum: S25 owners see Now Nudge's absence as gatekeeping, not a hardware limit.", clusters=["older-devices"]),
 A(site="SammyGuru", where="Feature", url="https://sammyguru.com/one-ui-9-features/",
   title="Just Got One UI 9? Here Are 15 Features You Should Try First",
   content="It can also pull up saved details such as your email, address, or passport number through Personal Data Intelligence. You’ll need to allow it to use your personal data for that to work. Now Nudge is useful when it appears, but its suggestions are still too inconsistent to rely on.",
   postedAt="2026-09-26", themes=["triggering","usefulness","autofill"], sentiment="mix",
   takeaway="One UI 9 hands-on: useful when it appears, but too inconsistent to rely on.", clusters=["not-appearing"]),
]
