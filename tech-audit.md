# eilite.com Technical SEO Audit

Run 2026-08-05. Real data only — Lighthouse via PageSpeed Insights (mobile, live site), HTTP headers via curl against the live domain, and codebase scans across all 2,825 article records and ~2,849 rendered routes.

## Core Web Vitals (Lighthouse lab data, mobile, throttled)

| Metric | Value | Target | Status |
|---|---|---|---|
| LCP | 2.4s | <2.5s | Pass (tight — see note) |
| CLS | 0 | <0.1 | Pass |
| TBT (lab proxy for INP) | 10ms | — | Excellent |
| FCP | 0.9s | — | Excellent |
| Speed Index | 3.6s | — | OK |

**No CrUX field data available** — Google doesn't have enough real-user traffic on this domain yet to report actual field INP/LCP/CLS. The numbers above are single-run lab data (Lighthouse, emulated Moto G Power, slow 4G), not real-user measurement. Re-check field data once the site has more organic traffic.

Lighthouse category scores (mobile): **Performance 96, Accessibility 96, Best Practices 96 (was, now higher after header fixes), SEO 100.**

LCP is passing but close to the 2.5s line — the hero video (`videos/hero.mp4`, 3840×2160 source) is the likely LCP element on most viewports. If this ever regresses, a compressed/lower-res poster frame or a smaller source encode would create margin.

## Security Headers — FIXED

Before this audit, `curl -I https://www.eilite.com/` showed only `strict-transport-security` (Vercel's platform default) and no other security headers. Added via `next.config.ts` (static headers, all routes) and `proxy.ts` (CSP, production only):

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (now explicit, not just relying on Vercel's default)
- `Cross-Origin-Opener-Policy: same-origin`
- `Content-Security-Policy` (production only): `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;`

Verified via a real local production build (`next build && next start`) — confirmed correct headers on the wire, zero console errors, zero CSP violations, video/JS/forms all functioning. A nonce + `strict-dynamic` CSP was tried first (the modern best-practice pattern) but broke all JS chunk loading in production because Next.js's own script tags weren't threaded with the nonce; reverted to a simpler `'self'`-based script-src, which is fully safe here since the codebase has zero third-party or inline scripts.

`style-src` keeps `'unsafe-inline'` because Tailwind/React can emit inline `style` attributes; tightening that further would need a broader audit of every component, which is out of scope for a "safe fix."

## Structured Data (JSON-LD)

- **Global**: Organization + WebSite schema on every page (root layout).
- **Articles**: Article + Breadcrumb schema on all 2,825 learning-center articles; FAQPage schema added automatically wherever an article has an `faqs` array.
- **Marketplace pages**: buy/sell leads, warm transfers, inbounds, and all 4 coverage industry pages carry their own JSON-LD.
- **Gaps (low priority)**: `/learning-center` index, `/privacy-policy`, `/terms-of-use`, `/affiliates` have no page-specific schema. Not flagged as urgent — these aren't pages Google typically rich-results on, but a CollectionPage schema on the learning-center index would be a reasonable future add.

## Meta Titles

**Clean.** Scanned all 2,825 articles: zero missing titles, zero over 60 characters, zero instances of the "| Eilite" doubling bug (title template + baked-in suffix) that was fixed earlier this project. The earlier title-tag length work has held up across every batch added since.

## Meta Descriptions — 5 FIXED, 1,922 FLAGGED (needs a decision)

- **5 articles had explicit `metaDescription` over 165 characters** — trimmed all 5 to fit. Fixed and committed.
- **2,201 of 2,825 articles have no explicit `metaDescription`** at all, falling back to `article.excerpt` (a real fallback, not a blank tag — confirmed in `app/learning-center/[slug]/page.tsx`). Of those, **1,922 excerpts are under 120 characters** (average 100), meaningfully under-using the ~150-160 characters Google actually displays in a SERP snippet. This is a real, large-scale on-page SEO gap, but writing ~1,922 new descriptions is content work at the same scale as the paused Task #4 — **not done without your sign-off**, flagged below.

## robots.txt / sitemap.xml

Both exist and resolve correctly (`https://eilite.com/robots.txt`, `/sitemap.xml`, 2,849 URLs). `robots.txt` is a blanket `Allow: /` for all user agents — this implicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot) but doesn't name them explicitly, so there's no documented, deliberate policy on AI-crawler access. **Flagged below** — this is a real business decision (do you want this content used for AI training / cited by AI answer engines?), not something to decide silently.

## Broken Links / Redirect Chains / Orphan Pages

- **Zero broken internal links.** Scanned all 2,143 inline markdown links across every article's content — every `/learning-center/[slug]` target resolves to a real article, every `/buy-leads`, `/coverage/legal`, etc. target resolves to a real route.
- **One redirect**: `eilite.com` → `www.eilite.com` (308, single hop, no chain). Normal and fine.
- Orphan-page check wasn't fully exhaustive (would require crawling the full site graph rather than just article-embedded links) — no evidence of orphans found in what was checked, but flagging as not 100% verified.

## Console Errors

Live production homepage: clean, zero console errors or warnings.

## Mobile Rendering / Thin or Duplicate Pages

- Mobile Lighthouse run (above) shows no rendering-blocking issues at the homepage level.
- **Thin content**: a much larger finding than originally scoped — see Task #4 (paused pending your input): 2,165 of 2,825 articles are under 500 words, concentrated almost entirely in the site's earliest batch/cluster content (nearly every `keyword-batch-*`, `medicare-batch-*`, and dozens of `*-cluster-*` files average 200-400 words per article).
- **Duplicate content**: not exhaustively checked in this pass (would need a similarity/clustering analysis across all 2,825 articles' body text, a separate, sizable piece of work) — flagging as unverified rather than claiming it's clean.

---

## Two things that need your call before I touch them

1. **1,922 short/generic meta descriptions.** Same shape of decision as Task #4 — writing real descriptions for ~1,922 articles is a large content project, not a quick fix.
2. **Explicit AI-crawler robots.txt policy.** Currently implicit-allow via wildcard. I can add explicit `Allow` lines naming GPTBot/ClaudeBot/PerplexityBot/Google-Extended/CCBot (documents intent, doesn't change actual behavior) if you want that formalized — two-minute fix once you confirm you want AI crawlers indexing this content.
