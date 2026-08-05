# Eilite.com — Technical SEO & UX Audit

Site: https://www.eilite.com (Next.js 16 App Router, hosted on Vercel)
Audit date: 2026-08-05
Scope: 3,880 indexable URLs — 15 static pages, 4 coverage-industry pages, 68 solution verticals, 3,792 Learning Center articles

Findings are ordered by impact. Each is marked **[FIXED]**, **[IN PROGRESS]** (fix running now, lands in the same commit), or **[CHECKLIST]** (needs your decision or a capability I don't have — exact change specified).

This audit also found and reconciled a leftover from an earlier pass in this same project (a security-header change that was added, then deliberately reverted after breaking something) — see §4.

---

## 1. Performance / Core Web Vitals

**Live PageSpeed Insights data wasn't available on this run** — the unauthenticated PSI API's shared daily quota returned `429 rateLimitExceeded` on the first request, and this environment has no Chrome binary for a local Lighthouse run. I'm not guessing at numbers to fill the gap. Run it yourself for current, authoritative Lighthouse + CrUX data: **https://pagespeed.web.dev/analysis?url=https://www.eilite.com&form_factor=mobile**

**Last real measurement on record** (an earlier PSI run against this same live site, mobile, throttled — from a prior pass in this project, cited here rather than discarded since it's genuine data, not a guess):

| Metric | Value | Target | Status |
|---|---|---|---|
| LCP | 2.4s | <2.5s | Pass, but tight |
| CLS | 0 | <0.1 | Pass |
| TBT (lab proxy for INP) | 10ms | — | Excellent |
| Category scores (mobile) | Perf 96 / A11y 96 / Best Practices 96 / SEO 100 | — | — |

That run flagged the same thing this one did independently: LCP passing but close to the line, with the hero video called out as the likely LCP element. Since that run, the article library grew from ~2,825 to 3,792 pages — none of that affects homepage LCP directly, but re-running PSI once quota resets is worth doing to confirm the site hasn't regressed.

**What I could measure fresh** — real browser timing from an actual live page load (Chromium, 375×812 mobile viewport, unthrottled — not equivalent to PSI's throttled mobile profile, so treat as directional):

| Metric | Value |
|---|---|
| LCP (PerformanceObserver) | 904 ms |
| CLS (layout-shift entries) | 0.00002 |
| TTFB | 34 ms (Vercel edge cache HIT) |
| DOMContentLoaded | 723 ms |

**[CHECKLIST] The hero video is 74.6 MB — this is the single biggest performance risk on the site.**
`public/videos/hero.mp4` (71.2 MiB) autoplays on every page load, including mobile, via `components/sections/Hero.tsx`:
```tsx
<video className="absolute inset-0 h-full w-full object-cover" src="/videos/hero.mp4" autoPlay loop muted playsInline />
```
No `poster`, no `preload` strategy, no `prefers-reduced-motion` check, no smaller mobile-specific source. In a live resource trace I caught the browser requesting this file **three separate times** in one page load (74.5 MB + 13.9 MB + 49 KB). On PSI's throttled mobile connection this is very likely what's keeping LCP close to the 2.5s line rather than comfortably under it, and it burns real bandwidth for every visitor regardless. I don't have `ffmpeg` in this environment, so I can't safely re-encode the file myself. In order of value:
1. **Re-encode the source.** A background loop like this should be a few MB, not 75. Once ffmpeg is available: `ffmpeg -i hero.mp4 -vcodec libx264 -crf 28 -preset slower -an -movflags +faststart hero-compressed.mp4`
2. **Code-level mitigation (I can do this on request):** `preload="none"`, defer the `src` assignment to after first paint, skip the video entirely under `prefers-reduced-motion` and `navigator.connection.saveData`. Doesn't shrink the file but stops it competing with critical resources. Held off since it changes runtime UX behavior and wasn't in your listed fix set.

---

## 2. Structured Data (JSON-LD)

Already well-implemented — Organization + WebSite (site-wide), Article + BreadcrumbList + FAQPage (Learning Center articles), BreadcrumbList (solutions/coverage index), FAQPage (marketplace + vertical + industry pages). Live-validated as syntactically correct on sampled pages (homepage: Organization/WebSite/FAQPage; an article page: all five types — parsed clean, zero JSON errors).

**[FIXED] Added `Service` schema to the 6 core marketplace pages** (`/buy-leads`, `/buy-warm-transfers`, `/buy-inbounds`, `/sell-leads`, `/sell-warm-transfers`, `/sell-inbounds`) via a new `serviceJsonLd()` helper in `lib/structured-data.ts`. These had FAQ schema only. Used `Service`, not `Product` — Eilite brokers a B2B lead-generation service, not a physical or SKU'd good, and `Product`/`Offer` schema expects a price, which doesn't apply. `Service` is what Google's own structured-data guidance points to for this category.

`Review`/`AggregateRating` would be the natural next addition once you have real, attributable testimonials — not fabricating that data.

---

## 3. Meta titles & descriptions

Checked all 3,792 articles + 68 solutions + 4 coverage pages against what actually renders (`metaTitle ?? title` + the site's `" | Eilite"` suffix for titles; `metaDescription ?? excerpt` for descriptions).

| Issue | Count | Status |
|---|---|---|
| Title missing | 0 | — |
| Title > 60 chars rendered | 254 articles + 2 solutions pages | **[FIXED]** — verified per-item |
| Description missing | 0 | — |
| Description > 160 chars | 291 articles + 66 solutions pages | **[FIXED]** — verified per-item |

All fixes are additive/surgical: adding or shortening only `metaTitle`/`metaDescription`. The on-page `title`/`excerpt` (articles) and `label`/`subheadline` (solutions pages) are never touched — those are real UI copy (H1s, card previews, hero text), not just SEO tags.

**Articles (254 titles, 291 descriptions):** fixed via 5 parallel passes across 79 data files. Notably, 176 of the 254 title issues were in content shipped earlier in *this same session* (today's 678-article keyword batch) — the instructions given to those writing agents said "over 60 chars" without being explicit that the check must include the `" | Eilite"` suffix, so several titles landed at 51–60 raw characters (fine on their own, but 60–69 once rendered). Folded into the same fix pass.

**Solutions pages (2 titles, 66 of 68 descriptions):** initially missed in my first pass — I checked these against the same rule but a bug in my own audit script silently excluded solutions/coverage pages from the fix list it generated, even though the total counts it printed did include them. Caught on a full re-verification after the article fixes landed, so nothing shipped without this being caught. Root cause: solutions page titles are formula-generated (`${label} Lead Generation`) and descriptions reuse the vertical's on-page `subheadline` (real hero copy, written to read well as marketing text, not to fit a 160-char SERP snippet) — so almost every vertical's subheadline ran long. Fixed the same way as articles: added optional `metaTitle`/`metaDescription` override fields to the `SolutionVertical` type (`lib/solutions/types.ts`), wired `generateMetadata` to prefer them, and populated both for every flagged vertical — `label`/`subheadline` themselves untouched. Coverage pages (4 industries) were checked directly and are genuinely clean — all under limit with real margin.

---

## 4. Security headers

Checked `next.config.ts` source, `proxy.ts`, and live response headers from `https://www.eilite.com/`.

| Header | Before this audit | After |
|---|---|---|
| Strict-Transport-Security | ✅ Present, live | unchanged |
| X-Content-Type-Options | ✅ Present, live | unchanged |
| X-Frame-Options | ✅ Present, live | unchanged |
| Referrer-Policy | ✅ Present, live | unchanged |
| Permissions-Policy | ✅ Present, live | unchanged |
| Content-Security-Policy | ❌ Missing | **[FIXED]** |

**Context worth knowing:** git history shows a CSP was added once already in this project, then *deliberately reverted* three days into it — the commit message says a strict `script-src 'self'` (no `unsafe-inline`) silently broke the homepage's Framer Motion hero animation in production: elements stayed stuck at their `initial` state (`opacity: 0`) instead of animating in, **with no console error to flag it**. It was pulled as a safety-first move, with a note that it should only come back "with verification that goes beyond 'no console error' — actually confirm every client-side animation completes."

I took that seriously rather than re-adding a CSP and assuming it's fine:

**[FIXED]** Added to `next.config.ts` (production-only — see below):
```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self' data:;
connect-src 'self';
media-src 'self';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
object-src 'none';
upgrade-insecure-requests
```
Two differences from the version that broke, both deliberate:
- **`'unsafe-inline'` on `script-src`.** The reverted version omitted this. Framer Motion itself doesn't inject `<script>` tags, so it isn't the direct cause — but Next.js hydrates via inline bootstrap `<script>` blocks, and this site's own JSON-LD renders as an inline `<script type="application/ld+json">`. A hydration failure would leave client components (including the motion wrapper, which only animates in via a client-side effect) stuck exactly at their server-rendered initial state — which matches the reported symptom precisely. This is very likely the actual root cause the original investigation couldn't pin down.
- **Gated to `NODE_ENV === "production"`**, matching what the reverted version already knew and I initially missed on my first pass: webpack's dev-mode Fast Refresh relies on `eval()`, which this CSP (no `unsafe-eval`) blocks. Ungated, it would work fine in the deployed site but break `next dev` locally.

**Verification I actually ran, not just "no console error":** built production (`next build`), served it (`next start`), loaded the homepage fresh, and read the hero's *computed* `opacity` and `transform` via the DOM after the animation's transition window — confirmed `opacity: 1`, `transform: none` (i.e., it reached its animated end state, not stuck at `initial`). Confirmed zero console messages of any kind on that load. Screenshotted the result — hero renders fully, no blank/stuck state.

`'unsafe-inline'` remains on `script-src`/`style-src` because there's no nonce middleware in this app (Next.js hydration scripts, this site's JSON-LD, and Framer Motion's inline `style=""` mutations all need it without one). **[CHECKLIST]** A stricter nonce-based CSP is a real follow-up if you want it — it means adding a `middleware.ts` that mints a per-request nonce and threads it through every inline script, which is a bigger change than a header tweak. I can build it on request.

**[CHECKLIST] — nginx and Cloudflare equivalents**, since you asked for these formats specifically (the site is actually served by Vercel, and the fix above is already live there — these are for reference or in case you front it with something else). Note these aren't gated to prod the way the Next.js version is — add your own environment check if you deploy a dev/staging environment behind the same config:

nginx:
```nginx
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; media-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests" always;
```

Cloudflare (Worker wrapping the origin response, or the same values via Transform Rules → Modify Response Header):
```js
export default {
  async fetch(request, env) {
    const res = await fetch(request);
    const headers = new Headers(res.headers);
    headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "DENY");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
    headers.set("Cross-Origin-Opener-Policy", "same-origin");
    headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; media-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests");
    return new Response(res.body, { ...res, headers });
  },
};
```

---

## 5. robots.txt, sitemap, AI-crawler handling

**No issues.** Live-verified both match source exactly.

- `robots.txt` explicitly and deliberately allows `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, and `CCBot`, in addition to the wildcard `*` — a documented, intentional choice (a source comment notes it's meant to let AI answer engines crawl, train on, and cite the content, not just an accidental gap from the wildcard).
- `sitemap.xml` has 3,880 `<loc>` entries, matching the exact expected count (15 static + 4 coverage + 68 solutions + 3,792 articles + homepage). No malformed entries.

**[FIXED] — one real defect: every sitemap URL and every page's canonical tag pointed at the wrong domain.**
`siteConfig.url` was `https://eilite.com` (no `www`). But that URL returns an HTTP 308 redirect to `https://www.eilite.com` — the apex domain is a redirect shell, not where content is actually served. That meant:
- All 3,880 sitemap URLs pointed at a URL that immediately redirects elsewhere instead of the final serving URL.
- Every page's `<link rel="canonical">` (live-confirmed on an article page) declared the redirecting non-www URL as canonical — the "canonicalizing to a redirect" anti-pattern, which can create ambiguity about which URL a search engine treats as authoritative.

Fixed by changing `siteConfig.url` to `https://www.eilite.com` in `lib/constants.ts` — the single source of truth for canonical tags, sitemap URLs, robots.txt's sitemap reference, JSON-LD `url` fields, and OpenGraph `url`, so one change corrects it everywhere at once.

---

## 6. Redirects

**No chains.** Only one redirect exists site-wide: `eilite.com` → `www.eilite.com`, a single 308 hop (Vercel's domain-alias behavior — there are no `redirects()`/`rewrites()` in `next.config.ts` at all). Nothing multi-hop.

---

## 7. Internal links / orphan pages

Checked programmatically against the site's actual route data — more complete than a live crawl, since every link is checked against the real, current slug set rather than sampled:

- **1,862** `relatedSlugs` references across the article library → **0 broken**
- **3,541** inline `[text](/path)` links inside article bodies → **0 broken** (151 unique targets)
- No orphans possible from the sitemap-generation logic — `sitemap.ts` derives its URL list directly from the same data arrays that power routing, so nothing in the data can be unreachable.

## 8. Duplicate / thin content

**[FIXED] — 8 exact-duplicate article pairs**, all from the content batch shipped earlier in this session (two independent writers converging on the same topic/near-identical title under different slugs — e.g. two "Arborist Leads" guides, two "Moving Company Leads" guides). Found via full-library duplicate-title and duplicate-slug scans; the weaker/redundant copy deleted from each pair, confirmed nothing referenced the removed slug, `tsc` clean after each removal.

**[CHECKLIST] — 698 of 3,792 articles (18.4%) are under 600 words**, 16 of those under 400. Exclusively in older batches — every one of the 678 articles shipped earlier this session is verified at 650+ words; this population predates that work. A genuinely large fix, comparable in scope to today's 678-article project, and wasn't in your listed fix set — flagging rather than starting unprompted. The 40 thinnest are almost entirely `Legal Leads`/`Personal Injury` category articles (e.g. `legal-leads-cost` at 310 words, several `generating-quality-personal-injury-attorney-leads-in-*` city pages at 330–420 words). Say the word and I'll batch-expand these the same way as the rest of this session's content work.

---

## 9. Mobile rendering

Spot-checked homepage at 375×812 against live production: renders cleanly, no layout breakage, hero/nav/CTA all legible and correctly stacked. No `<img>`/`<Image>` elements exist anywhere in the codebase (the site uses SVG icon components and the one hero video), so there's no image-alt-text or responsive-image-sizing surface to audit — that category is genuinely N/A here, not overlooked.

Viewport meta tag: correctly present in the live HTML (`width=device-width, initial-scale=1`) via Next.js's default behavior.

---

## 10. Other findings along the way

**[FIXED] — Twitter Card metadata was identical on every page.** `app/layout.tsx` hardcoded `twitter.title`/`twitter.description` to the homepage's own copy. Since no article/solution/coverage page overrode `twitter`, all 3,800+ pages showed the homepage's generic text when shared on X/Slack/etc. instead of their own — confirmed live on an article page before the fix (its `og:title`/`og:description` were correct; `twitter:title`/`twitter:description` weren't). Fixed by removing the hardcoded values, leaving only `card: "summary_large_image"` — Next.js's documented behavior is to fall back to each page's own resolved title/description when a child route doesn't set `twitter` itself.

**[FIXED] — leftover "publishers" wording.** `siteConfig.description` (used in the default meta description, OpenGraph, Twitter Card, and Organization JSON-LD on every page) still read "...buyers, publishers, and providers..." — a leftover from this session's earlier Publishers→Affiliates rename. The Footer component's tagline was already caught and fixed; this shared constant was missed. Now reads "...buyers, affiliates, and providers...".

---

## Summary

| Category | Found | Fixed directly | Left as checklist |
|---|---|---|---|
| Core Web Vitals | PSI unavailable this run (quota/no Chrome); last real run: 96/96/96/100, LCP 2.4s | — | Hero video (75MB) — needs ffmpeg or your sign-off on a UX-affecting code mitigation |
| Structured data | 1 gap (no Service schema) | ✅ Added to 6 pages | — |
| Meta titles | 256 over 60 chars (254 articles + 2 solutions) | ✅ Fixed, verified per-item | — |
| Meta descriptions | 357 over 160 chars (291 articles + 66 solutions) | ✅ Fixed, verified per-item | — |
| Security headers | 1 missing (CSP) — with a real history of it breaking something once | ✅ Re-added with a concrete fix for the actual cause, verified by measuring the animation, not just watching for errors | Stricter nonce-based CSP (needs new middleware.ts) |
| robots.txt / sitemap | Deliberate AI-crawler allowlist confirmed; 1 domain-mismatch bug | ✅ siteConfig.url fixed (fixes canonical + sitemap + JSON-LD + OG at once) | — |
| Redirects | 1 single-hop redirect, no chains | — | — |
| Internal links | 0 broken across 5,403 checked | — | — |
| Duplicate content | 8 exact-duplicate pairs | ✅ Deleted the weaker copy of each | — |
| Thin content | 698 articles under 600 words | — | Batch-expansion project, same scale as today's work |
| Twitter Card | Wrong on every page site-wide | ✅ Fixed at the root cause | — |
| Mobile rendering | Clean | — | — |
