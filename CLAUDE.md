# Nudge Sense (Now Nudge VoC) — project rules

## Files
- `VOC-Method.md` — how the VoC study is run (source of truth for method)
- `Feature-Background.md` — factual profile of Samsung Now Nudge
- `dashboard/design-system.html` — design system documentation (the "Figma components" page)
- `dashboard/voc-ds.css` — shared tokens + component styles (single source of truth)
- `dashboard/voc-ds.js` — shared icons, theme, tooltip, chart and component renderers (`window.VOC`)
- `dashboard/index.html` — the Nudge Sense dashboard (renders `voc-data.js` with design-system components)
- `dashboard/voc-data.js` — study data; the only file a VoC run edits
- `dashboard/voc-data.sample.js` — sample data, shown with `index.html?sample`
- `AGENT-UPDATE-GUIDE.md` — how an agent runs a VoC check and fills `voc-data.js`

## Design system rules (always follow)
1. **Build the dashboard only from the design system.** `index.html` must load `voc-ds.css` and `voc-ds.js` and use their classes and `VOC.*` renderers. No one-off styles or hand-rolled components.
2. **Edits flow from the design system.** Change a component in `voc-ds.css` / `voc-ds.js` (and its specimen in `design-system.html`), never by overriding it inside `index.html`. Both pages then update together, like a Figma main component and its instances.
3. **New styles become variants immediately.** If dashboard work needs a style that doesn't exist yet, add it to `voc-ds.css` / `voc-ds.js` as a variant of the closest existing component (e.g. `.badge.mom.new`, `.btn.sm`), and document it in `design-system.html` with its class name and a usage note in the same change.
4. `design-system.html` may contain documentation-only styles (doc shell, swatches, specimens) in its own `<style>` block; nothing the dashboard uses may live there.

## Publishing
Public site: https://karthikeya-gs07.github.io/nudge-sense/ (repo `karthikeya-gs07/nudge-sense`, branch `main`, GitHub Pages). Pushing to `main` publishes publicly — ask the user before each push.

## Preview
Shared files load over HTTP, not from a `data:`/file preview. Use the `voc-dashboard` server in `.claude/launch.json` (http://localhost:8765).

## Run rule (always follow)
Every VoC run is **incremental**: collect only what was posted **since the last run** (`runs[0].date` in `dashboard/voc-data.js`), skip URLs already captured, and recalculate all dashboard numbers over all runs combined. Details: `AGENT-UPDATE-GUIDE.md` §3.

## Languages (always follow)
The dashboard is bilingual (English / 한국어). UI strings live in the `voc-ds.js` dictionary (`VOC.t`) or a page's `VOC.addStrings`; agent-written data carries a `ko` copy (`VOC.tx`). Never translate verbatim source text. Any new UI text must be added in both languages. Details: `AGENT-UPDATE-GUIDE.md` §3b.
