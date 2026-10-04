/* =========================================================
   Nudge Sense — shared design system script
   Single source of truth for icons, theme, tooltip, formatting
   and chart / component renderers.
   Used by design-system.html (documentation) and index.html (dashboard).
   Edit components HERE; both pages update.
   Exposes: window.VOC
   ========================================================= */
(function () {
  "use strict";
  var root = document.documentElement;
  var NS = "http://www.w3.org/2000/svg";

  /* ---------- Helpers ---------- */
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function svgEl(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function css(name) { return getComputedStyle(root).getPropertyValue(name).trim(); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function signed(n) { return (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n); }

  /* ---------- Language (English / Korean) ----------
     UI text lives in I18N; agent-written data text carries an optional "ko" object (obj.ko.field).
     Verbatim source text (titles, content) is never translated. */
  var I18N = {
    en: {
      posts_per_period: "Posts per period", net_sentiment: "Net sentiment", posts: "Posts", more_n: "+{n} more",
      period: "Period", event: "Event", theme: "Theme", pos_short: "Pos", neu_short: "Neu", neg_short: "Neg",
      baseline: "Baseline", last60: "Last 60 days", status: "Status", no_data: "No data", net_v: "Net {v}",
      takeaway: "Takeaway", takeaway_colon: "Takeaway:", open: "Open", open_on: "Open on {d}", verbatim: "Verbatim", source: "Source",
      kind_post: "Post", kind_comment: "Comment", kind_article: "Article", kind_video: "Video comment",
      on_video: "On video: ", comment_on: "Comment on: ", show_full: "Show full text", show_less: "Show less",
      removed: "Removed or unavailable since capture", copy_url: "Copy URL", copied: "Copied", open_new: "Open source in new tab",
      posted: "Posted", captured: "Captured", counts_asof: "counts as of capture", approx_title: "Approximate: the source showed '{x}' on the capture date",
      eng_reactions: "Reactions", eng_downvotes: "Downvotes", eng_comments: "Comments", eng_shares: "Shares", eng_views: "Views",
      eng_upvotes: "Upvotes", eng_crossposts: "Crossposts", eng_likes: "Likes", eng_replies: "Replies", eng_reposts: "Reposts",
      no_eng: "No engagement counts captured", no_counts: "No counts", weighted: "{n} weighted interactions",
      lvl_low: "Low", lvl_medium: "Medium", lvl_high: "High", not_enough: "Not enough data", posts_n: "{n} posts",
      not_answered: "Not answered yet.", see_evidence: "See evidence", insight_n: "Insight {n}", see_sources: "See sources", none: "None",
      run_n: "Run {n}", latest: "Latest", run_meta: "{date} · +{p} posts · {s} sources", run_window: "Posts from {a} to {b}",
      summary: "Summary", could_not: "{name} could not be checked", go_to: "Go to", key_sources: "Key sources",
      show_table: "Show as table", show_chart: "Show as chart", about_x: "About {x}",
      sent_pos: "Positive", sent_neu: "Neutral", sent_neg: "Negative", sent_mix: "Mixed",
      mom_new: "New", mom_up: "Rising", mom_flat: "Stable", mom_down: "Fading", mom_resolved: "Resolved",
      split_aria: "{p}% positive, {u}% neutral, {x}% negative"
    },
    ko: {
      posts_per_period: "기간별 게시물", net_sentiment: "순 감성", posts: "게시물", more_n: "+{n}건",
      period: "기간", event: "이벤트", theme: "테마", pos_short: "긍정", neu_short: "중립", neg_short: "부정",
      baseline: "기준 기간", last60: "최근 60일", status: "상태", no_data: "데이터 없음", net_v: "순 {v}",
      takeaway: "시사점", takeaway_colon: "시사점:", open: "열기", open_on: "{d}에서 열기", verbatim: "원문", source: "출처",
      kind_post: "게시물", kind_comment: "댓글", kind_article: "기사", kind_video: "영상 댓글",
      on_video: "영상: ", comment_on: "댓글 대상: ", show_full: "전체 보기", show_less: "간단히 보기",
      removed: "수집 이후 삭제되었거나 볼 수 없음", copy_url: "URL 복사", copied: "복사됨", open_new: "새 탭에서 출처 열기",
      posted: "게시", captured: "수집", counts_asof: "수집 시점 기준 수치", approx_title: "추정치: 수집일에 출처에 '{x}'(으)로 표시됨",
      eng_reactions: "반응", eng_downvotes: "비추천", eng_comments: "댓글", eng_shares: "공유", eng_views: "조회수",
      eng_upvotes: "추천", eng_crossposts: "크로스포스트", eng_likes: "좋아요", eng_replies: "답글", eng_reposts: "재게시",
      no_eng: "수집된 참여 수치 없음", no_counts: "수치 없음", weighted: "가중 상호작용 {n}건",
      lvl_low: "낮음", lvl_medium: "보통", lvl_high: "높음", not_enough: "데이터 부족", posts_n: "게시물 {n}건",
      not_answered: "아직 답변되지 않았습니다.", see_evidence: "근거 보기", insight_n: "인사이트 {n}", see_sources: "출처 보기", none: "없음",
      run_n: "실행 {n}", latest: "최신", run_meta: "{date} · 게시물 +{p}건 · 출처 {s}곳", run_window: "{a} ~ {b} 게시물",
      summary: "요약", could_not: "{name} 확인 불가", go_to: "바로가기", key_sources: "주요 출처",
      show_table: "표로 보기", show_chart: "차트로 보기", about_x: "{x} 설명",
      sent_pos: "긍정", sent_neu: "중립", sent_neg: "부정", sent_mix: "혼합",
      mom_new: "신규", mom_up: "증가", mom_flat: "유지", mom_down: "감소", mom_resolved: "해결됨",
      split_aria: "긍정 {p}%, 중립 {u}%, 부정 {x}%"
    }
  };
  var lang = "en";
  var langListeners = [];
  function t(key, vars) {
    var s = (I18N[lang] && I18N[lang][key] != null) ? I18N[lang][key] : (I18N.en[key] != null ? I18N.en[key] : key);
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  }
  var tr = t; /* alias for functions where "t" is a data row */
  /* Register page-level strings: VOC.addStrings({ en:{...}, ko:{...} }) */
  function addStrings(map) { Object.keys(map).forEach(function (l) { I18N[l] = Object.assign(I18N[l] || {}, map[l]); }); }
  /* Translated data text: obj.ko[field] in Korean when present, else the English field */
  function tx(obj, field) {
    if (!obj) return "";
    if (lang !== "en" && obj[lang] && obj[lang][field] != null) return obj[lang][field];
    return obj[field];
  }
  function getLang() { return lang; }
  function setLang(l, persist) {
    lang = I18N[l] ? l : "en";
    root.setAttribute("lang", lang);
    refreshVocab();
    $$("[data-lang-set]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.langSet === lang)); });
    if (persist !== false) { try { localStorage.setItem("voc-lang", lang); } catch (e) {} }
    langListeners.forEach(function (fn) { fn(lang); });
  }
  function onLangChange(fn) { langListeners.push(fn); }
  /* Two-way switch (English / 한국어). With no saved choice, start from the browser language. */
  function initLang() {
    $$("[data-lang-set]").forEach(function (b) { b.addEventListener("click", function () { if (b.dataset.langSet !== lang) setLang(b.dataset.langSet); }); });
    var saved = null;
    try { saved = localStorage.getItem("voc-lang"); } catch (e) {}
    if (!I18N[saved]) saved = /^ko/i.test(navigator.language || "") ? "ko" : "en";
    setLang(saved, false);
  }

  var MON_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function fmtDate(iso) {
    if (!iso) return ""; var p = iso.split("-");
    if (lang === "ko") return p[0] + ". " + (+p[1]) + ". " + (+p[2]) + ".";
    return p[2] + " " + MON_EN[+p[1] - 1] + " " + p[0];
  }
  /* Month label from "YYYY-MM": short ("Mar" / "3월") or long ("Mar 2026" / "2026년 3월") */
  function monthLabel(key, long) {
    var p = String(key).split("-"), m = +p[1];
    if (lang === "ko") return long ? p[0] + "년 " + m + "월" : m + "월";
    return long ? MON_EN[m - 1] + " " + p[0] : MON_EN[m - 1];
  }
  /* Relative time as shown by a source ("4 months ago"), in the current language */
  function relLabel(s) {
    if (lang !== "ko" || !s) return s;
    return String(s).replace(/(\d+)\s*months? ago/, "$1개월 전").replace(/(\d+)\s*days? ago/, "$1일 전").replace(/(\d+)\s*hours? ago/, "$1시간 전");
  }
  /* Posted date: approximate dates (s.postedApprox, e.g. "4 months ago" as shown by the source) render as "~Jun 2026" */
  function fmtPosted(s) {
    if (!s || !s.postedAt) return "";
    if (s.postedApprox) return "~" + monthLabel(s.postedAt.slice(0, 7), true);
    return fmtDate(s.postedAt);
  }
  function icon(id, size) { size = size || 16; return '<svg width="' + size + '" height="' + size + '" aria-hidden="true"><use href="#' + id + '"/></svg>'; }

  /* ---------- Icon sprite (injected once) ---------- */
  var SPRITE = "<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\"> <defs> <symbol id=\"i-internal\" viewBox=\"0 0 16 16\"><path d=\"M4 3v5a2 2 0 0 0 2 2h6M9.5 7.5 12 10l-2.5 2.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></symbol> <symbol id=\"i-external\" viewBox=\"0 0 16 16\"><path d=\"M6 3.5H3.5v9h9V10M9 3h4v4M13 3 7.5 8.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></symbol> <symbol id=\"i-up\" viewBox=\"0 0 16 16\"><path d=\"M8 12.5v-9M4.5 7 8 3.5 11.5 7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></symbol> <symbol id=\"i-down\" viewBox=\"0 0 16 16\"><path d=\"M8 3.5v9M4.5 9 8 12.5 11.5 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></symbol> <symbol id=\"i-flat\" viewBox=\"0 0 16 16\"><path d=\"M3.5 8h9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-new\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"3\" fill=\"currentColor\"/></symbol> <symbol id=\"i-check\" viewBox=\"0 0 16 16\"><path d=\"m3.5 8.5 3 3 6-7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></symbol> <symbol id=\"i-chev\" viewBox=\"0 0 16 16\"><path d=\"m6 3.5 4.5 4.5L6 12.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></symbol> <symbol id=\"i-search\" viewBox=\"0 0 16 16\"><circle cx=\"7\" cy=\"7\" r=\"4.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"m10.5 10.5 3 3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-warn\" viewBox=\"0 0 16 16\"><path d=\"M8 2 14.5 13.5h-13z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M8 6.5v3.2M8 11.6v.1\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-agent\" viewBox=\"0 0 16 16\"><path d=\"M8 1.5 9.4 6.6 14.5 8 9.4 9.4 8 14.5 6.6 9.4 1.5 8l5.1-1.4z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/></symbol> <symbol id=\"i-sun\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-moon\" viewBox=\"0 0 16 16\"><path d=\"M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></symbol> <symbol id=\"i-system\" viewBox=\"0 0 16 16\"><rect x=\"2\" y=\"3\" width=\"12\" height=\"8.5\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M6 14h4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-table\" viewBox=\"0 0 16 16\"><rect x=\"2\" y=\"2.5\" width=\"12\" height=\"11\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M2 6.5h12M2 10h12M6.5 6.5v7\" stroke=\"currentColor\" stroke-width=\"1.5\"/></symbol> <symbol id=\"i-chart\" viewBox=\"0 0 16 16\"><path d=\"M2.5 13.5h11M4.5 11V8M8 11V4.5M11.5 11V6.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-filter\" viewBox=\"0 0 16 16\"><path d=\"M2.5 4h11M4.5 8h7M6.5 12h3\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-calendar\" viewBox=\"0 0 16 16\"><rect x=\"2.5\" y=\"3.5\" width=\"11\" height=\"10\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M2.5 6.5h11M5.5 2v3M10.5 2v3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-close\" viewBox=\"0 0 16 16\"><path d=\"m4 4 8 8M12 4l-8 8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-panel\" viewBox=\"0 0 16 16\"><rect x=\"2\" y=\"2.5\" width=\"12\" height=\"11\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M10 2.5v11\" stroke=\"currentColor\" stroke-width=\"1.5\"/></symbol> <symbol id=\"i-inbox\" viewBox=\"0 0 24 24\"><path d=\"M3 13.5 5.5 5h13l2.5 8.5V19H3z M3 13.5h5l1.5 2.5h5l1.5-2.5h5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></symbol> <symbol id=\"i-flag\" viewBox=\"0 0 16 16\"><path d=\"M3.5 14V2.5M3.5 3h8l-1.8 3 1.8 3h-8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-copy\" viewBox=\"0 0 16 16\"><rect x=\"5.5\" y=\"5.5\" width=\"8\" height=\"8\" rx=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M10.5 3.5V3A1.5 1.5 0 0 0 9 1.5H3.5A1.5 1.5 0 0 0 2 3v5.5A1.5 1.5 0 0 0 3.5 10H4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></symbol> <symbol id=\"i-quote\" viewBox=\"0 0 16 16\"><path d=\"M3 4.5h4v4c0 2-1 3.5-3 4M9.5 4.5h4v4c0 2-1 3.5-3 4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></symbol> <symbol id=\"i-info\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"6.25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M8 7.2v3.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><circle cx=\"8\" cy=\"5.1\" r=\"0.9\" fill=\"currentColor\"/></symbol> </defs> </svg>";
  function injectSprite() {
    if (document.getElementById("voc-sprite")) return;
    var wrap = document.createElement("div");
    wrap.id = "voc-sprite";
    wrap.innerHTML = SPRITE;
    document.body.insertBefore(wrap, document.body.firstChild);
  }
  var ICONS = [["i-internal", "Internal link"], ["i-external", "External link"], ["i-up", "Rising"], ["i-down", "Fading"], ["i-flat", "Stable"], ["i-new", "New"], ["i-check", "Resolved / done"], ["i-warn", "Warning"], ["i-agent", "Agent"], ["i-table", "Table view"], ["i-chart", "Chart view"], ["i-filter", "Filter"], ["i-search", "Search"], ["i-calendar", "Date"], ["i-flag", "Event marker"], ["i-panel", "Toggle panel"], ["i-chev", "Expand"], ["i-close", "Close"], ["i-copy", "Copy URL"], ["i-quote", "Verbatim source"], ["i-info", "Info"]];

  /* ---------- Theme switch ---------- */
  var themeListeners = [];
  function applyTheme(mode) {
    if (mode === "system") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", mode);
    $$("[data-theme-set]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.themeSet === mode)); });
    try { localStorage.setItem("voc-theme", mode); } catch (e) {}
    themeListeners.forEach(function (fn) { fn(); });
  }
  function initTheme() {
    $$("[data-theme-set]").forEach(function (b) { b.addEventListener("click", function () { applyTheme(b.dataset.themeSet); }); });
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var on = function () { themeListeners.forEach(function (fn) { fn(); }); };
      if (mq.addEventListener) mq.addEventListener("change", on); else if (mq.addListener) mq.addListener(on);
    }
    /* Two-way switch (Dark / Light). With no saved choice, start from the device setting. */
    var saved = null;
    try { saved = localStorage.getItem("voc-theme"); } catch (e) {}
    if (saved !== "light" && saved !== "dark") saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(saved);
  }
  function onThemeChange(fn) { themeListeners.push(fn); }

  /* ---------- Tooltip ---------- */
  var tt;
  function ensureTip() {
    if (tt) return tt;
    tt = document.createElement("div");
    tt.className = "tooltip"; tt.setAttribute("role", "tooltip");
    document.body.appendChild(tt);
    return tt;
  }
  function showTip(html, x, y) {
    ensureTip();
    tt.innerHTML = html; tt.classList.add("show");
    var r = tt.getBoundingClientRect();
    var left = x + 14, top = y + 14;
    if (left + r.width > window.innerWidth - 8) left = x - r.width - 14;
    if (top + r.height > window.innerHeight - 8) top = y - r.height - 14;
    tt.style.left = Math.max(8, left) + "px"; tt.style.top = Math.max(8, top) + "px";
  }
  function hideTip() { if (tt) tt.classList.remove("show"); }
  function tipRow(label, val, color) {
    return '<div class="tt-row"><span>' + (color ? '<i style="background:' + color + '"></i>' : "") + esc(label) + "</span><span>" + esc(val) + "</span></div>";
  }

  /* ---------- Vocabulary ---------- */
  var SENT = {}, MOM_LABEL = {};
  var MOM_ICON = { new: "i-new", up: "i-up", flat: "i-flat", down: "i-down", resolved: "i-check" };
  /* Momentum from share of conversation: ±25% relative change = rising / fading */
  function momentum(base, recent) {
    if (!base) return recent ? "new" : "flat";
    var r = (recent - base) / base;
    return r >= 0.25 ? "up" : r <= -0.25 ? "down" : "flat";
  }

  /* Vocabulary objects follow the current language (refreshed by setLang) */
  function refreshVocab() {
    ["pos", "neu", "neg", "mix"].forEach(function (k) { SENT[k] = t("sent_" + k); });
    ["new", "up", "flat", "down", "resolved"].forEach(function (k) { MOM_LABEL[k] = t("mom_" + k); });
    ["post", "comment", "article", "video"].forEach(function (k) { KIND[k] = t("kind_" + k); });
    ["reactions", "downvotes", "comments", "shares", "views"].forEach(function (k) { ENG_DEFAULT[k] = t("eng_" + k); });
    var L = function (r, c, s) { var o = { reactions: t("eng_" + r), comments: t("eng_" + c) }; if (s) o.shares = t("eng_" + s); return o; };
    ENG_LABELS["r/"] = L("upvotes", "comments", "crossposts"); ENG_LABELS.X = L("likes", "replies", "reposts");
    ENG_LABELS.YT = L("likes", "replies"); ENG_LABELS.SM = L("likes", "replies"); ENG_LABELS.XDA = L("reactions", "replies"); ENG_LABELS.BL = L("likes", "replies");
    ENG_LEVEL.length = 0; ENG_LEVEL.push("", t("lvl_low"), t("lvl_medium"), t("lvl_high"));
  }

  /* ---------- Small components (return HTML strings) ---------- */
  function sentBadge(s) { return '<span class="badge sent-' + s + '"><span class="sw"></span>' + SENT[s] + "</span>"; }
  function momBadge(m, label) { return '<span class="badge mom' + (m === "new" ? " new" : "") + '">' + icon(MOM_ICON[m], 12) + esc(label || MOM_LABEL[m]) + "</span>"; }
  function tag(text, isUser) { return '<span class="tag' + (isUser ? " user" : "") + '">' + esc(text) + "</span>"; }
  function platform(code, title) { return '<span class="platform"' + (title ? ' title="' + esc(title) + '"' : "") + ">" + esc(code) + "</span>"; }
  function splitBar(pos, neu, neg) {
    return '<div class="split-bar" role="img" aria-label="' + esc(t("split_aria", { p: pos, u: neu, x: neg })) + '"><span class="p" style="width:' + pos + '%"></span><span class="n" style="width:' + neu + '%"></span><span class="x" style="width:' + neg + '%"></span></div>';
  }
  function confidence(level, text) {
    return '<span class="confidence" data-level="' + level + '"><span class="track"><i></i><i></i><i></i></span>' + esc(text) + "</span>";
  }
  function ilink(href, text, sub) {
    if (sub == null) return '<a class="ilink" href="' + esc(href) + '">' + icon("i-internal") + esc(text) + "</a>";
    return '<a class="ilink" href="' + esc(href) + '">' + icon("i-internal") + '<span><span class="ln-text">' + esc(text) + '</span><span class="ln-sub">' + esc(sub) + "</span></span></a>";
  }
  function xlink(url, text, domain, stacked) {
    var a = '<a class="xlink" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"';
    if (stacked) return a + ">" + icon("i-external") + '<span><span class="ln-text">' + esc(text) + '</span><span class="ln-sub">' + esc(domain) + "</span></span></a>";
    if (!text) return a + ' aria-label="' + esc(t("open_on", { d: domain })) + '">' + icon("i-external", 14) + "</a>";
    return a + '><span class="label">' + esc(text) + '</span><span class="domain">' + esc(domain) + "</span>" + icon("i-external", 14) + "</a>";
  }
  function delta(dir, text, note) {
    var ic = dir === "up" ? "i-up" : dir === "down" ? "i-down" : "i-flat";
    return '<span class="delta ' + dir + '">' + icon(ic, 12) + esc(text) + (note ? '<span class="vs">' + esc(note) + "</span>" : "") + "</span>";
  }

  /* ---------- Sparkline ---------- */
  function sparkline(values, opts) {
    opts = opts || {};
    var w = 84, h = 28, pad = 3;
    if (!values || values.length < 2) return "";
    var min = Math.min.apply(null, values), max = Math.max.apply(null, values);
    if (max === min) { max += 1; min -= 1; }
    var x = function (i) { return pad + i * (w - pad * 2) / (values.length - 1); };
    var y = function (v) { return pad + (h - pad * 2) * (1 - (v - min) / (max - min)); };
    var d = values.map(function (v, i) { return (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1); }).join(" ");
    var area = d + " L" + x(values.length - 1) + " " + (h - pad) + " L" + x(0) + " " + (h - pad) + " Z";
    var last = values.length - 1;
    var col = opts.color || "var(--ink-2)";
    return '<svg class="spark" viewBox="0 0 ' + w + " " + h + '" aria-hidden="true"><path d="' + area + '" fill="' + col + '" opacity=".10"/><path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="' + x(last) + '" cy="' + y(values[last]) + '" r="2.5" fill="' + col + '"/></svg>';
  }

  /* ---------- Stat tile ---------- */
  /* Info tip: small "i" button that explains a number or chart on hover, focus or tap */
  function infoTip(text, about) {
    return '<button type="button" class="info-tip" data-info="' + esc(text) + '" aria-label="' + esc(t("about_x", { x: about || "" })) + ": " + esc(text) + '">' + icon("i-info", 14) + "</button>";
  }
  function statTile(t) {
    return '<div class="tile"><span class="label-row"><span class="label">' + esc(t.label) + "</span>" + (t.info ? infoTip(t.info, t.label) : "") + '</span><span class="value">' + esc(t.value) + '</span><div class="foot">' + delta(t.dir || "flat", t.delta || "", t.note) + sparkline(t.spark) + "</div></div>";
  }

  /* ---------- Chart: sentiment trend + volume ----------
     data: { labels:[], net:[], vol:[], events:[{i,label}], yLabelSuffix }   */
  function trendChart(svg, data, tableEl) {
    svg.innerHTML = "";
    /* Group events that fall in the same period; stagger flags over two rows so labels never overlap */
    var evGroups = [];
    (data.events || []).forEach(function (ev) {
      var g = evGroups.filter(function (x) { return x.i === ev.i; })[0];
      if (g) g.labels.push(ev.label); else evGroups.push({ i: ev.i, labels: [ev.label] });
    });
    evGroups.sort(function (a, b) { return a.i - b.i; });
    var rows = evGroups.length > 1 ? 2 : 1;
    /* Draw at the real pixel width so text stays 11px; redraw when the card resizes */
    var measured = Math.round(svg.getBoundingClientRect().width);
    if (window.ResizeObserver && !svg._ro) {
      svg._ro = new ResizeObserver(function () {
        var w = Math.round(svg.getBoundingClientRect().width);
        if (w && Math.abs(w - (svg._w || 0)) > 24) trendChart(svg, svg._data, svg._table);
      });
      svg._ro.observe(svg);
    }
    svg._data = data; svg._table = tableEl; svg._w = measured;
    var W = measured ? Math.max(420, measured) : 680, L = 40, R = 16, top1 = 10 + rows * 20, h1 = 150, gap = 22, h2 = 70, top2 = top1 + h1 + gap;
    svg.setAttribute("viewBox", "0 0 " + W + " " + (top2 + h2 + 24));
    var n = data.labels.length, step = (W - L - R) / n;
    var cx = function (i) { return L + step * i + step / 2; };
    var ext = Math.max(30, Math.ceil(Math.max.apply(null, data.net.map(Math.abs)) / 10) * 10); /* multiple of 10 so ±ext/2 ticks are whole numbers */
    var yMin = -ext, yMax = ext;
    var y1 = function (v) { return top1 + h1 * (1 - (v - yMin) / (yMax - yMin)); };
    var vMax = Math.max(50, Math.ceil(Math.max.apply(null, data.vol) / 50) * 50);
    var y2 = function (v) { return top2 + h2 * (1 - v / vMax); };
    [yMin, yMin / 2, 0, yMax / 2, yMax].forEach(function (t) {
      svgEl("line", { x1: L, x2: W - R, y1: y1(t), y2: y1(t), class: t === 0 ? "zero" : "gridline" }, svg);
      svgEl("text", { x: L - 8, y: y1(t) + 4, "text-anchor": "end" }, svg).textContent = t > 0 ? "+" + t : t;
    });
    [0, vMax / 2, vMax].forEach(function (t) {
      svgEl("line", { x1: L, x2: W - R, y1: y2(t), y2: y2(t), class: t === 0 ? "zero" : "gridline" }, svg);
      svgEl("text", { x: L - 8, y: y2(t) + 4, "text-anchor": "end" }, svg).textContent = t;
    });
    svgEl("text", { x: L, y: top2 - 8 }, svg).textContent = t("posts_per_period");
    evGroups.forEach(function (ev, k) {
      var x = cx(ev.i), row = k % rows, fy = 4 + row * 20;
      var suffix = ev.labels.length > 1 ? "  " + t("more_n", { n: ev.labels.length - 1 }) : "";
      var maxChars = Math.max(8, Math.floor((step * 2 - 16) / 6)) - suffix.length;
      var label = ev.labels[0].length > maxChars ? ev.labels[0].slice(0, maxChars - 1) + "…" : ev.labels[0];
      label += suffix;
      var w = label.length * 6 + 12;
      var left = x + 4 + w > W - R ? x - 4 - w : x + 4;
      svgEl("line", { x1: x, x2: x, y1: fy + 8, y2: top2 + h2, stroke: "var(--axis)", "stroke-dasharray": "3 3" }, svg);
      var g = svgEl("g", { transform: "translate(" + left + "," + fy + ")" }, svg);
      svgEl("title", {}, g).textContent = ev.labels.join(" · ");
      svgEl("rect", { x: 0, y: 0, width: w, height: 16, rx: 4, fill: "var(--surface-2)" }, g);
      svgEl("text", { x: 6, y: 11.5, style: "font-size:10px;fill:var(--ink-2)" }, g).textContent = label;
    });
    var bw = Math.min(28, step * 0.5);
    var bars = data.vol.map(function (v, i) {
      var y = y2(v), r = Math.min(4, top2 + h2 - y);
      return svgEl("path", { d: "M" + (cx(i) - bw / 2) + " " + (top2 + h2) + " V" + (y + r) + " q0 -" + r + " " + r + " -" + r + " h" + (bw - 2 * r) + " q" + r + " 0 " + r + " " + r + " V" + (top2 + h2) + " Z", fill: "var(--vol)" }, svg);
    });
    var d = data.net.map(function (v, i) { return (i ? "L" : "M") + cx(i) + " " + y1(v); }).join(" ");
    svgEl("path", { d: d, fill: "none", stroke: "var(--ink-2)", "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }, svg);
    var dots = data.net.map(function (v, i) {
      return svgEl("circle", { cx: cx(i), cy: y1(v), r: 4.5, fill: v >= 0 ? "var(--pos)" : "var(--neg)", stroke: "var(--surface)", "stroke-width": 2 }, svg);
    });
    svgEl("text", { x: cx(n - 1), y: y1(data.net[n - 1]) - 10, "text-anchor": "middle", style: "font-size:11px;font-weight:600;fill:var(--ink)" }, svg).textContent = signed(data.net[n - 1]);
    data.labels.forEach(function (m, i) { svgEl("text", { x: cx(i), y: top2 + h2 + 16, "text-anchor": "middle" }, svg).textContent = m; });
    var cross = svgEl("line", { x1: 0, x2: 0, y1: top1, y2: top2 + h2, stroke: "var(--ink-2)", "stroke-width": 1, opacity: 0 }, svg);
    var hit = svgEl("rect", { x: L, y: 0, width: W - L - R, height: top2 + h2, fill: "transparent" }, svg);
    hit.addEventListener("mousemove", function (evt) {
      var pt = svg.getBoundingClientRect();
      var sx = (evt.clientX - pt.left) * (W / pt.width);
      var i = Math.max(0, Math.min(n - 1, Math.floor((sx - L) / step)));
      cross.setAttribute("x1", cx(i)); cross.setAttribute("x2", cx(i)); cross.setAttribute("opacity", 0.5);
      bars.forEach(function (b, j) { b.setAttribute("fill", j === i ? "var(--vol-hover)" : "var(--vol)"); });
      dots.forEach(function (c, j) { c.setAttribute("r", j === i ? 6 : 4.5); });
      var ev = evGroups.filter(function (e) { return e.i === i; })[0];
      showTip('<div class="tt-title">' + esc(data.tipLabels ? data.tipLabels[i] : data.labels[i]) + "</div>" + tipRow(t("net_sentiment"), signed(data.net[i]), data.net[i] >= 0 ? "var(--pos)" : "var(--neg)") + tipRow(t("posts"), data.vol[i], "var(--vol)") + (ev ? ev.labels.map(function (l) { return '<div style="margin-top:4px;color:var(--muted)">⚑ ' + esc(l) + "</div>"; }).join("") : ""), evt.clientX, evt.clientY);
    });
    hit.addEventListener("mouseleave", function () { cross.setAttribute("opacity", 0); hideTip(); bars.forEach(function (b) { b.setAttribute("fill", "var(--vol)"); }); dots.forEach(function (c) { c.setAttribute("r", 4.5); }); });
    if (tableEl) tableEl.innerHTML = "<thead><tr><th>" + t("period") + "</th><th class='r'>" + t("net_sentiment") + "</th><th class='r'>" + t("posts") + "</th><th>" + t("event") + "</th></tr></thead><tbody>" + data.labels.map(function (m, i) {
      var ev = (data.events || []).filter(function (e) { return e.i === i; })[0];
      return "<tr><td>" + esc(data.tipLabels ? data.tipLabels[i] : m) + "</td><td class='r num'>" + signed(data.net[i]) + "</td><td class='r num'>" + data.vol[i] + "</td><td>" + (ev ? esc(ev.label) : "") + "</td></tr>";
    }).join("") + "</tbody>";
  }

  /* ---------- Chart: ranked bars with sentiment split ----------
     rows: [{ name, pos, neu, neg, vol, href? }]                       */
  function hbarChart(el, rows, tableEl) {
    var maxVol = Math.max.apply(null, rows.map(function (t) { return t.vol; })) || 1;
    el.innerHTML = rows.map(function (t, i) {
      var w = t.vol / maxVol * 100;
      return '<div class="hbar-row" data-i="' + i + '"><span class="lbl" title="' + esc(t.name) + '">' + esc(t.name) + '</span><div><div class="hbar-track" style="width:' + w + '%"><span class="p" style="width:' + t.pos + '%"></span><span class="n" style="width:' + t.neu + '%"></span><span class="x" style="width:' + t.neg + '%"></span></div></div><span class="val">' + t.vol + "</span></div>";
    }).join("");
    $$(".hbar-row", el).forEach(function (row) {
      var t = rows[+row.dataset.i];
      row.addEventListener("mousemove", function (e) {
        showTip('<div class="tt-title">' + esc(t.name) + "</div>" + tipRow(SENT.pos, t.pos + "%", "var(--pos)") + tipRow(SENT.neu, t.neu + "%", "var(--neu)") + tipRow(SENT.neg, t.neg + "%", "var(--neg)") + tipRow(tr("posts"), t.vol), e.clientX, e.clientY);
      });
      row.addEventListener("mouseleave", hideTip);
      if (t.href) { row.style.cursor = "pointer"; row.addEventListener("click", function () { location.hash = t.href.replace(/^#/, ""); }); }
    });
    if (tableEl) tableEl.innerHTML = "<thead><tr><th>" + tr("theme") + "</th><th class='r'>" + tr("posts") + "</th><th class='r'>" + tr("pos_short") + "</th><th class='r'>" + tr("neu_short") + "</th><th class='r'>" + tr("neg_short") + "</th></tr></thead><tbody>" + rows.map(function (t) {
      return "<tr><td>" + esc(t.name) + "</td><td class='r num'>" + t.vol + "</td><td class='r num'>" + t.pos + "%</td><td class='r num'>" + t.neu + "%</td><td class='r num'>" + t.neg + "%</td></tr>";
    }).join("") + "</tbody>";
  }

  /* ---------- Chart: slope (baseline → recent share) ----------
     rows: [{ name, short?, base, recent }]                             */
  function spread(items, minGap, lo, hi) {
    items.sort(function (a, b) { return a.y - b.y; });
    for (var k = 0; k < 4; k++) {
      for (var i = 1; i < items.length; i++) if (items[i].y - items[i - 1].y < minGap) items[i].y = items[i - 1].y + minGap;
      if (items.length && items[items.length - 1].y > hi) { items[items.length - 1].y = hi; for (var j = items.length - 2; j >= 0; j--) if (items[j + 1].y - items[j].y < minGap) items[j].y = items[j + 1].y - minGap; }
      if (items.length && items[0].y < lo) items[0].y = lo;
    }
    return items;
  }
  function slopeChart(svg, rows, tableEl, labels) {
    labels = labels || [tr("baseline"), tr("last60")];
    svg.innerHTML = "";
    /* Draw at the real pixel width so labels stay 11px; redraw when the card resizes */
    var measured = Math.round(svg.getBoundingClientRect().width);
    if (window.ResizeObserver && !svg._ro) {
      svg._ro = new ResizeObserver(function () {
        var w = Math.round(svg.getBoundingClientRect().width);
        if (w && Math.abs(w - (svg._w || 0)) > 24) slopeChart(svg, svg._rows, svg._table, svg._labels);
      });
      svg._ro.observe(svg);
    }
    svg._rows = rows; svg._table = tableEl; svg._labels = labels; svg._w = measured;
    var W = measured ? Math.max(360, measured) : 440;
    var xa = Math.round(Math.min(Math.max(150, W * 0.3), 260)), xb = Math.round(W - Math.min(Math.max(90, W * 0.3), 320)), top = 30, bot = 250;
    svg.setAttribute("viewBox", "0 0 " + W + " 280");
    var max = Math.max(10, Math.ceil(Math.max.apply(null, rows.map(function (t) { return Math.max(t.base, t.recent); })) / 5) * 5 + 2);
    var y = function (v) { return bot - (bot - top) * v / max; };
    svgEl("text", { x: xa, y: 14, "text-anchor": "middle" }, svg).textContent = labels[0];
    svgEl("text", { x: xb, y: 14, "text-anchor": "middle" }, svg).textContent = labels[1];
    svgEl("line", { x1: xa, x2: xa, y1: top - 6, y2: bot, class: "zero" }, svg);
    svgEl("line", { x1: xb, x2: xb, y1: top - 6, y2: bot, class: "zero" }, svg);
    var colFor = function (m) { return m === "up" || m === "new" ? "var(--accent)" : m === "down" ? "var(--muted)" : "var(--ink-2)"; };
    var left = spread(rows.map(function (t, i) { return { i: i, y: y(t.base) }; }), 14, top, bot);
    var right = spread(rows.map(function (t, i) { return { i: i, y: y(t.recent) }; }), 14, top, bot);
    var groups = rows.map(function (t, i) {
      var m = momentum(t.base, t.recent), c = colFor(m);
      var g = svgEl("g", { "data-i": i }, svg);
      svgEl("line", { x1: xa, y1: y(t.base), x2: xb, y2: y(t.recent), stroke: c, "stroke-width": m === "flat" ? 1.5 : 2.5, opacity: m === "flat" ? 0.6 : 1 }, g);
      svgEl("circle", { cx: xa, cy: y(t.base), r: 4, fill: c, stroke: "var(--surface)", "stroke-width": 2 }, g);
      svgEl("circle", { cx: xb, cy: y(t.recent), r: 4, fill: c, stroke: "var(--surface)", "stroke-width": 2 }, g);
      svgEl("line", { x1: xa, y1: y(t.base), x2: xb, y2: y(t.recent), stroke: "transparent", "stroke-width": 14 }, g);
      return g;
    });
    left.forEach(function (p) {
      var t = rows[p.i];
      svgEl("text", { x: xa - 10, y: p.y + 4, "text-anchor": "end", style: "fill:var(--ink-2)" }, svg).textContent = (t.short || t.name.split(" /")[0]) + "  " + t.base + "%";
    });
    right.forEach(function (p) {
      var t = rows[p.i], m = momentum(t.base, t.recent);
      svgEl("text", { x: xb + 10, y: p.y + 4, style: "fill:" + (m === "up" || m === "new" ? "var(--accent-ink)" : "var(--ink-2)") + ";font-weight:" + (m === "up" || m === "new" ? 600 : 400) }, svg).textContent = t.recent + "%  " + (m === "up" || m === "new" ? "▲" : m === "down" ? "▼" : "");
    });
    groups.forEach(function (g) {
      var t = rows[+g.getAttribute("data-i")];
      g.addEventListener("mousemove", function (e) {
        groups.forEach(function (o) { o.setAttribute("opacity", o === g ? 1 : 0.25); });
        showTip('<div class="tt-title">' + esc(t.name) + "</div>" + tipRow(labels[0], t.base + "%") + tipRow(labels[1], t.recent + "%") + tipRow(tr("status"), MOM_LABEL[momentum(t.base, t.recent)]), e.clientX, e.clientY);
      });
      g.addEventListener("mouseleave", function () { groups.forEach(function (o) { o.setAttribute("opacity", 1); }); hideTip(); });
    });
    if (tableEl) tableEl.innerHTML = "<thead><tr><th>" + tr("theme") + "</th><th class='r'>" + esc(labels[0]) + "</th><th class='r'>" + esc(labels[1]) + "</th><th>" + tr("status") + "</th></tr></thead><tbody>" + rows.map(function (t) {
      return "<tr><td>" + esc(t.name) + "</td><td class='r num'>" + t.base + "%</td><td class='r num'>" + t.recent + "%</td><td>" + MOM_LABEL[momentum(t.base, t.recent)] + "</td></tr>";
    }).join("") + "</tbody>";
  }

  /* ---------- Chart: heatmap (net sentiment, theme × period) ----------
     rows: [{ name, values:[] }], cols: []                              */
  var HM_STEPS = ["--hm-n3", "--hm-n2", "--hm-n1", "--hm-0", "--hm-p1", "--hm-p2", "--hm-p3"];
  function hmStep(v) {
    if (v == null) return "--surface-2";
    if (v <= -40) return "--hm-n3"; if (v <= -20) return "--hm-n2"; if (v < -5) return "--hm-n1";
    if (v <= 5) return "--hm-0"; if (v < 20) return "--hm-p1"; if (v < 40) return "--hm-p2"; return "--hm-p3";
  }
  function scaleLegend(el) {
    el.innerHTML = "<span>" + SENT.neg + '</span><span class="steps">' + HM_STEPS.map(function (s) { return '<i style="background:var(' + s + ')"></i>'; }).join("") + "</span><span>" + SENT.pos + "</span>";
  }
  function heatmap(el, rows, cols, tableEl) {
    el.style.gridTemplateColumns = "160px repeat(" + cols.length + ", minmax(36px, 1fr))";
    el.style.minWidth = (160 + cols.length * 40) + "px";
    var h = "<span></span>" + cols.map(function (m) { return '<span class="hm-col">' + esc(m) + "</span>"; }).join("");
    rows.forEach(function (t, r) {
      h += '<span class="hm-label" title="' + esc(t.name) + '">' + esc(t.name) + "</span>";
      t.values.forEach(function (v, c) { h += '<span class="hm-cell" data-r="' + r + '" data-c="' + c + '" style="background:var(' + hmStep(v) + ')"></span>'; });
    });
    el.innerHTML = h;
    $$(".hm-cell", el).forEach(function (cell) {
      cell.addEventListener("mousemove", function (e) {
        var t = rows[+cell.dataset.r], v = t.values[+cell.dataset.c];
        showTip('<div class="tt-title">' + esc(t.name) + "</div>" + tipRow(cols[+cell.dataset.c], v == null ? tr("no_data") : tr("net_v", { v: signed(v) })), e.clientX, e.clientY);
      });
      cell.addEventListener("mouseleave", hideTip);
    });
    if (tableEl) tableEl.innerHTML = "<thead><tr><th>" + tr("theme") + "</th>" + cols.map(function (m) { return "<th class='r'>" + esc(m) + "</th>"; }).join("") + "</tr></thead><tbody>" + rows.map(function (t) {
      return "<tr><td>" + esc(t.name) + "</td>" + t.values.map(function (v) { return "<td class='r num'>" + (v == null ? "–" : signed(v)) + "</td>"; }).join("") + "</tr>";
    }).join("") + "</tbody>";
  }

  /* ---------- Cards & rows ----------
     post: { platform, where, date, userType, quote, takeaway, theme, sentiment, momentum?, isNew?, url, domain } */
  function sourceCard(p) {
    return '<article class="card src-card' + (p.isNew ? " is-new" : "") + '"' + (p.id ? ' id="' + esc(p.id) + '"' : "") + '>' +
      '<div class="src-meta">' + platform(p.platform) + '<span class="where">' + esc(p.where) + '</span><span>·</span><span class="mono">' + fmtDate(p.date) + "</span>" + (p.userType ? "<span>·</span>" + tag(p.userType, true) : "") + "</div>" +
      '<p class="src-quote">"' + esc(p.quote) + '"</p>' +
      '<div class="takeaway"><span class="eyebrow">' + t("takeaway") + '</span><p>' + esc(p.takeaway) + "</p></div>" +
      '<div class="src-foot">' + (p.theme ? tag(p.theme) : "") + sentBadge(p.sentiment) + (p.momentum ? momBadge(p.momentum) : p.isNew ? momBadge("new") : "") + xlink(p.url, t("open"), p.domain) + "</div></article>";
  }
  /* Compact source row. Text falls back to the verbatim title, then content.
     p.href (optional) makes the text an internal link to the full source. */
  function sourceRow(p) {
    var text = '"' + esc(p.quote || p.title || p.content || "") + '"';
    var date = p.date || p.postedAt;
    var dateTxt = p.postedApprox ? fmtPosted(p) : (date ? fmtDate(date) : "");
    var q = p.href ? '<a class="q" href="' + esc(p.href) + '">' + text + "</a>" : '<div class="q">' + text + "</div>";
    return '<div class="src-row">' + platform(p.platform) + "<div>" + q + '<div class="t"><b>' + t("takeaway_colon") + "</b> " + esc(p.takeaway) + (dateTxt ? ' · <span class="mono">' + dateTxt + "</span>" : "") + "</div></div>" + xlink(p.url, "", p.domain) + "</div>";
  }


  /* ---------- Engagement ----------
     source.engagement = raw counts exactly as shown on the platform at capture time:
       { reactions, downvotes, comments, shares, views }  (omit or null what the platform doesn't show)
     Interactions = reactions + 2×comments + 3×shares − downvotes (views are shown but not scored).
     Score 0–100 = log-scaled against the most-engaged captured post on the SAME platform,
     so a big subreddit doesn't drown out a small forum. Level: High ≥ 67, Medium ≥ 34, else Low. */
  var ENG_KEYS = ["reactions", "downvotes", "comments", "shares", "views"];
  var ENG_DEFAULT = {}, ENG_LABELS = {}, ENG_LEVEL = [];
  function engLabels(platformCode) { return Object.assign({}, ENG_DEFAULT, ENG_LABELS[platformCode] || {}); }
  function engRaw(e) {
    if (!e) return null;
    var any = ENG_KEYS.some(function (k) { return e[k] != null; });
    if (!any) return null;
    return Math.max(0, (e.reactions || 0) + 2 * (e.comments || 0) + 3 * (e.shares || 0) - (e.downvotes || 0));
  }
  /* Adds s.eng = { raw, score, level } to every source (null when no counts) */
  function scoreEngagement(list) {
    var max = {};
    list.forEach(function (s) { var r = engRaw(s.engagement); if (r != null) max[s.platform] = Math.max(max[s.platform] || 0, r); });
    list.forEach(function (s) {
      var r = engRaw(s.engagement);
      if (r == null) { s.eng = null; return; }
      var m = max[s.platform] || 0;
      var sc = m > 0 ? Math.round(100 * Math.log(1 + r) / Math.log(1 + m)) : 0;
      s.eng = { raw: r, score: sc, level: sc >= 67 ? 3 : sc >= 34 ? 2 : 1 };
    });
    return list;
  }
  function fmtNum(n) { return Number(n).toLocaleString("en-GB"); }
  function engScoreChip(s) {
    if (!s.eng) return '<span class="eng-score is-none">' + t("no_counts") + "</span>";
    return '<span class="eng-score" data-level="' + s.eng.level + '" title="' + esc(t("weighted", { n: s.eng.raw })) + '">' + '<span class="track"><i></i><i></i><i></i></span>' + s.eng.score + " · " + ENG_LEVEL[s.eng.level] + "</span>";
  }
  /* Engagement row: raw counts (verbatim) + score chip */
  function engagement(s) {
    var e = s.engagement || {}, L = engLabels(s.platform);
    var m = ENG_KEYS.filter(function (k) { return e[k] != null; }).map(function (k) { return '<span class="eng-m">' + esc(L[k]) + " <b>" + fmtNum(e[k]) + "</b></span>"; }).join("");
    return '<div class="sv-eng">' + (m || '<span class="eng-m">' + t("no_eng") + "</span>") + engScoreChip(s) + "</div>";
  }
  /* Per-platform summary: [{ site, platform, posts, withCounts, interactions, median, share }] */
  function platformEngagement(list) {
    var by = {}, total = 0;
    list.forEach(function (s) {
      var g = by[s.site] || (by[s.site] = { site: s.site, platform: s.platform, posts: 0, withCounts: 0, raws: [] });
      g.posts++;
      if (s.eng) { g.withCounts++; g.raws.push(s.eng.raw); total += s.eng.raw; }
    });
    return Object.keys(by).map(function (k) {
      var g = by[k], r = g.raws.slice().sort(function (a, b) { return a - b; });
      var sum = r.reduce(function (a, b) { return a + b; }, 0);
      var med = r.length ? (r.length % 2 ? r[(r.length - 1) / 2] : Math.round((r[r.length / 2 - 1] + r[r.length / 2]) / 2)) : 0;
      return { site: g.site, platform: g.platform, posts: g.posts, withCounts: g.withCounts, interactions: sum, median: med, share: total ? Math.round(100 * sum / total) : 0 };
    }).sort(function (a, b) { return b.interactions - a.interactions; });
  }

  /* ---------- Source evidence (verbatim) ----------
     s: { kind: "post"|"comment"|"article"|"video", platform, site, where, title, parentTitle,
          content, truncated, url, postedAt, capturedAt, unavailable,
          takeaway?, theme? | themes?[], sentiment? }
     title / content / url are rendered EXACTLY as given (escaped only). */
  var KIND = {};
  function sourcePreview(s) {
    var h = '<article class="card src-verbatim' + (s.unavailable ? " is-unavailable" : "") + (s.isNew ? " is-new" : "") + '"' + (s.id ? ' id="' + esc(s.id) + '"' : "") + ">";
    h += '<header class="sv-head">' + platform(s.platform) + '<span class="sv-site">' + esc(s.site) + "</span>" + (s.where ? '<span class="sv-where">' + esc(s.where) + "</span>" : "") +
      (s.isNew ? '<span class="sv-new">' + momBadge("new") + "</span>" : "") + '<span class="badge verbatim">' + icon("i-quote", 12) + t("verbatim") + " · " + (KIND[s.kind] || t("source")) + "</span></header>";
    h += '<div class="sv-verbatim">';
    if (s.parentTitle) h += '<p class="sv-context">' + (s.kind === "video" ? t("on_video") : t("comment_on")) + "<span>" + esc(s.parentTitle) + "</span></p>";
    if (s.title) h += '<h4 class="sv-title">' + esc(s.title) + "</h4>";
    if (s.content) h += '<div class="sv-body">' + esc(s.content) + (s.truncated ? ' <span class="sv-cut">[…]</span>' : "") + "</div>" +
      '<button class="btn ghost sm sv-more" type="button" hidden>' + t("show_full") + "</button>";
    h += "</div>";
    if (s.unavailable) h += '<div><span class="status critical">' + icon("i-warn", 14) + t("removed") + "</span></div>";
    h += '<div class="sv-url"><a class="sv-link" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.url) + "</a>" +
      '<button class="btn ghost sm icon-btn sm" type="button" data-copy="' + esc(s.url) + '" title="' + t("copy_url") + '" aria-label="' + t("copy_url") + '">' + icon("i-copy", 14) + "</button>" +
      '<a class="btn ghost sm icon-btn sm" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" title="' + t("open_new") + '" aria-label="' + t("open_new") + '">' + icon("i-external", 14) + "</a></div>";
    if (s.engagement || s.eng !== undefined) h += engagement(s);
    h += '<div class="sv-foot">' + (s.postedAt ? "<span" + (s.postedApprox ? ' title="' + esc(t("approx_title", { x: relLabel(s.postedApprox) })) + '"' : "") + ">" + t("posted") + " " + fmtPosted(s) + (s.postedApprox ? " (" + esc(relLabel(s.postedApprox)) + ")" : "") + "</span>" : "") + (s.capturedAt ? "<span>" + t("captured") + " " + fmtDate(s.capturedAt) + (s.engagement && Object.keys(s.engagement).length ? " · " + t("counts_asof") : "") + "</span>" : "") + "</div>";
    var themeTags = (s.themes || (s.theme ? [s.theme] : [])).map(function (t) { return tag(t); }).join("");
    if (s.takeaway) h += '<div class="sv-take"><span class="eyebrow">' + t("takeaway") + '</span><p>' + esc(s.takeaway) + "</p>" +
      ((themeTags || s.sentiment) ? '<div class="row">' + themeTags + (s.sentiment ? sentBadge(s.sentiment) : "") + "</div>" : "") + "</div>";
    return h + "</article>";
  }
  function wireSourcePreviews(scope) {
    $$(".src-verbatim .sv-body", scope).forEach(function (b) {
      var more = b.nextElementSibling;
      if (!more || more._wired) return; more._wired = true;
      if (b.scrollHeight > b.clientHeight + 2) { b.classList.add("is-clamped"); more.hidden = false; }
      more.addEventListener("click", function () {
        var open = b.classList.toggle("is-open");
        more.textContent = open ? t("show_less") : t("show_full");
      });
    });
    $$("[data-copy]", scope).forEach(function (btn) {
      if (btn._wired) return; btn._wired = true;
      btn.addEventListener("click", function () {
        var text = btn.getAttribute("data-copy");
        var done = function () { btn.title = t("copied"); btn.setAttribute("aria-label", t("copied")); setTimeout(function () { btn.title = t("copy_url"); btn.setAttribute("aria-label", t("copy_url")); }, 1500); };
        var fallback = function () {
          var link = btn.parentNode.querySelector(".sv-link");
          var r = document.createRange(); r.selectNodeContents(link);
          var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        };
        try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
      });
    });
  }

  /* ---------- Lists, cards & agent run ----------
     Internal routes are written without "#/" (e.g. "themes/triggering"). */
  function routeHref(route) { return "#/" + String(route || "").replace(/^#?\/?/, ""); }
  function itemLink(it) {
    if (typeof it === "string") return esc(it);
    return it.route ? '<a class="ilink" href="' + esc(routeHref(it.route)) + '">' + esc(tx(it, "label")) + "</a>" : esc(tx(it, "label"));
  }
  var CHANGE_GROUPS = ["new", "up", "down", "resolved"];
  /* changes: { new:[], up:[], down:[], resolved:[] } — items are strings or { label, route } */
  function changeGroups(ch) {
    ch = ch || {};
    return '<div class="change-groups">' + CHANGE_GROUPS.map(function (g) {
      var items = ch[g] || [];
      return "<div><h5>" + momBadge(g) + '</h5><ul class="list">' + (items.length ? items.map(function (it) { return "<li>" + itemLink(it) + "</li>"; }).join("") : '<li style="color:var(--muted)">' + t("none") + "</li>") + "</ul></div>";
    }).join("") + "</div>";
  }
  /* history: [{ label, short, text }] newest first */
  function timeline(history) {
    return '<ol class="list timeline">' + (history || []).map(function (h, i) {
      return "<li" + (i === 0 ? ' class="is-current"' : "") + '><span class="when">' + esc(h.label) + "</span><p>" + (h.short ? "<b>" + esc(h.short) + "</b> " : "") + esc(h.text) + "</p></li>";
    }).join("") + "</ol>";
  }
  function confidenceText(level, posts) {
    if (!level) return t("not_enough") + (posts ? " · " + t("posts_n", { n: posts }) : "");
    return ENG_LEVEL[level] + " · " + t("posts_n", { n: posts });
  }
  /* q: { id?, num, text, short, answer, confidence(0-3), posts, change?:{status,label}, tags:[] } */
  function rqCard(q, opts) {
    opts = opts || {};
    var chips = (q.change ? momBadge(q.change.status, q.change.label) : "") + (q.tags || []).map(function (t) { return tag(t); }).join("");
    return '<article class="card rq-card"' + (q.id ? ' id="' + esc(q.id) + '"' : "") + '><span class="qnum">' + esc(q.num) + "</span><h4>" + esc(q.text) + '</h4><p class="answer">' + (q.short ? "<b>" + esc(q.short) + "</b> " : "") + esc(q.answer || t("not_answered")) + "</p>" +
      (chips ? '<div class="row">' + chips + "</div>" : "") +
      '<div class="meta">' + confidence(q.confidence || 0, confidenceText(q.confidence || 0, q.posts || 0)) + (opts.href ? ilink(opts.href, opts.linkText || t("see_evidence")) : "") + "</div></article>";
  }
  /* i: { id?, title, body, status?, pos?, neu?, neg?, meta? } */
  function insightCard(i, n, opts) {
    opts = opts || {};
    return '<article class="card insight"' + (i.id ? ' id="' + esc(i.id) + '"' : "") + '><div class="meta"><span class="eyebrow">' + t("insight_n", { n: n }) + "</span>" + (i.status ? momBadge(i.status) : "") + "</div><h4>" + esc(i.title) + "</h4><p>" + esc(i.body) + "</p>" +
      (i.pos != null ? splitBar(i.pos, i.neu, i.neg) : "") +
      '<div class="foot"><span>' + esc(i.meta || "") + "</span>" + (opts.href ? ilink(opts.href, opts.linkText || t("see_sources")) : "") + "</div></article>";
  }
  /* run: { id, n, date, collected?:{from,to}, postsAdded, sourcesChecked:[{name,status,note}], summary:[], links:[{type,label,route,section}|{type,label,url,domain}] } */
  function agentRun(run, latest) {
    var links = run.links || [];
    var internal = links.filter(function (l) { return l.type === "internal"; });
    var external = links.filter(function (l) { return l.type === "external"; });
    var checked = run.sourcesChecked || [];
    var failed = checked.filter(function (s) { return s.status !== "ok"; });
    var h = '<details class="run" id="' + esc(run.id) + '"' + (latest ? " open" : "") + '><summary><span class="run-title">' + esc(t("run_n", { n: run.n })) + (latest ? ' <span class="run-badge">' + t("latest") + "</span>" : "") + '</span><svg class="chev" width="14" height="14" aria-hidden="true"><use href="#i-chev"/></svg><span class="run-meta">' + esc(t("run_meta", { date: fmtDate(run.date), p: run.postsAdded || 0, s: checked.length })) + (run.collected ? "<br>" + esc(t("run_window", { a: fmtDate(run.collected.from), b: fmtDate(run.collected.to) })) : "") + "</span></summary><div class=\"run-body\">";
    var summ = tx(run, "summary");
    if (summ && summ.length) h += "<div><h6>" + t("summary") + "</h6><ul>" + summ.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div>";
    if (failed.length) h += '<div class="stack" style="gap:4px">' + failed.map(function (s) { return '<span class="status critical">' + icon("i-warn", 14) + esc(t("could_not", { name: tx(s, "name") })) + (s.note ? " · " + esc(tx(s, "note")) : "") + "</span>"; }).join("") + "</div>";
    if (internal.length) h += '<div><h6>' + t("go_to") + '</h6><ul class="run-links">' + internal.map(function (l) { return "<li>" + ilink(routeHref(l.route), tx(l, "label"), tx(l, "section") || "") + "</li>"; }).join("") + "</ul></div>";
    if (external.length) h += '<div><h6>' + t("key_sources") + '</h6><ul class="run-links">' + external.map(function (l) { return "<li>" + xlink(l.url, l.label, l.domain, true) + "</li>"; }).join("") + "</ul></div>";
    return h + "</div></details>";
  }

  /* ---------- Behaviours ---------- */
  function wireInfoTips(scope) {
    $$(".info-tip", scope).forEach(function (b) {
      if (b._wired) return; b._wired = true;
      var show = function () { var r = b.getBoundingClientRect(); showTip('<div class="tt-info">' + esc(b.getAttribute("data-info")) + "</div>", r.left, r.bottom - 6); b.setAttribute("aria-expanded", "true"); };
      var hide = function () { hideTip(); b.setAttribute("aria-expanded", "false"); };
      b.addEventListener("mouseenter", show);
      b.addEventListener("mouseleave", hide);
      b.addEventListener("focus", show);
      b.addEventListener("blur", hide);
      b.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); if (b.getAttribute("aria-expanded") === "true") hide(); else show(); });
      b.addEventListener("keydown", function (e) { if (e.key === "Escape") hide(); });
    });
  }
  function wireTableToggles(scope) {
    $$("[data-table-toggle]", scope).forEach(function (btn) {
      if (btn._wired) return; btn._wired = true;
      btn.addEventListener("click", function () {
        var fig = btn.closest("[data-chart-wrap]");
        var c = $("[data-view=chart]", fig), t = $("[data-view=table]", fig);
        var showTable = t.hidden;
        t.hidden = !showTable; c.hidden = showTable;
        btn.setAttribute("aria-pressed", String(showTable));
        btn.innerHTML = icon(showTable ? "i-chart" : "i-table", 14);
        btn.title = showTable ? t("show_chart") : t("show_table");
        btn.setAttribute("aria-label", btn.title);
      });
    });
  }
  function wireControls(scope) {
    $$(".tabs", scope).forEach(function (g) { $$(".tab", g).forEach(function (t) { t.addEventListener("click", function () { $$(".tab", g).forEach(function (o) { o.setAttribute("aria-selected", String(o === t)); }); }); }); });
    $$("[data-seg]", scope).forEach(function (g) { $$("button", g).forEach(function (b) { b.addEventListener("click", function () { $$("button", g).forEach(function (o) { o.setAttribute("aria-pressed", String(o === b)); }); }); }); });
    $$("[data-chip]", scope).forEach(function (c) {
      var flip = function () { c.setAttribute("aria-pressed", String(c.getAttribute("aria-pressed") !== "true")); c.dispatchEvent(new CustomEvent("chipchange", { bubbles: true })); };
      c.addEventListener("click", flip);
      c.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
    });
  }
  /* Sortable table: rows = data array, render(row) → <tr> HTML, keys on th[data-sort] buttons */
  function sortableTable(table, rows, render, initial) {
    var state = initial || { key: null, dir: 1 };
    function draw() {
      var list = rows.slice();
      if (state.key) list.sort(function (a, b) { var k = state.key; return (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0) * state.dir; });
      $("tbody", table).innerHTML = list.map(render).join("");
    }
    $$("th button[data-sort]", table).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.dataset.sort;
        state.dir = state.key === k ? -state.dir : 1;
        state.key = k;
        $$("th", table).forEach(function (th) { if (th.hasAttribute("aria-sort")) th.setAttribute("aria-sort", "none"); });
        b.parentNode.setAttribute("aria-sort", state.dir === 1 ? "ascending" : "descending");
        draw();
      });
    });
    draw();
    return { setRows: function (r) { rows = r; draw(); } };
  }

  window.VOC = {
    $: $, $$: $$, svgEl: svgEl, css: css, esc: esc, signed: signed, fmtDate: fmtDate, fmtPosted: fmtPosted, monthLabel: monthLabel, relLabel: relLabel, icon: icon, ICONS: ICONS,
    t: t, tx: tx, addStrings: addStrings, setLang: setLang, getLang: getLang, initLang: initLang, onLangChange: onLangChange,
    SENT: SENT, MOM_LABEL: MOM_LABEL, momentum: momentum,
    initTheme: initTheme, applyTheme: applyTheme, onThemeChange: onThemeChange,
    showTip: showTip, hideTip: hideTip, tipRow: tipRow,
    sentBadge: sentBadge, momBadge: momBadge, tag: tag, platform: platform, splitBar: splitBar, confidence: confidence,
    ilink: ilink, xlink: xlink, delta: delta, sparkline: sparkline, statTile: statTile, infoTip: infoTip, wireInfoTips: wireInfoTips,
    trendChart: trendChart, hbarChart: hbarChart, slopeChart: slopeChart, heatmap: heatmap, scaleLegend: scaleLegend, HM_STEPS: HM_STEPS,
    routeHref: routeHref, changeGroups: changeGroups, timeline: timeline, confidenceText: confidenceText,
    rqCard: rqCard, insightCard: insightCard, agentRun: agentRun,
    flash: function (el) { if (!el) return; el.classList.remove("is-flash"); void el.offsetWidth; el.classList.add("is-flash"); setTimeout(function () { el.classList.remove("is-flash"); }, 2100); },
    scoreEngagement: scoreEngagement, engagement: engagement, engScoreChip: engScoreChip, platformEngagement: platformEngagement, engLabels: engLabels, fmtNum: fmtNum,
    sourceCard: sourceCard, sourceRow: sourceRow, sourcePreview: sourcePreview, wireSourcePreviews: wireSourcePreviews,
    wireTableToggles: wireTableToggles, wireControls: wireControls, sortableTable: sortableTable
  };
  refreshVocab();
  injectSprite();
})();
