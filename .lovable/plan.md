## Plan: Add Google Analytics (GA4) to the site

This project is TanStack Start — there is no `index.html` to edit. The `<head>` is built by `src/routes/__root.tsx` via the `head()` option. GA4 must be added there so it loads on every page.

### Changes

**`src/routes/__root.tsx`** — extend the existing `head()` return with a `scripts` array:

1. External loader: `https://www.googletagmanager.com/gtag/js?id=G-ZZF7V2RT6D` with `async: true`.
2. Inline init script that sets `window.dataLayer`, defines `gtag`, and calls `gtag('config', 'G-ZZF7V2RT6D')`.

Both entries go in `head().scripts` so TanStack renders them inside `<head>` via `<HeadContent />`. No other files change.

### Notes

- Measurement ID `G-ZZF7V2RT6D` is public — safe to commit, no secret needed.
- Adds a third-party request to googletagmanager.com on every page load. This is free under Google's GA4 quota, doesn't affect Lovable hosting cost, but it is a tracking dependency (was previously called out as "no analytics" in the cost review).
- No cookie banner / consent gate is added. If you need KVKK/GDPR consent before GA fires, tell me and I'll wire a consent step instead.
