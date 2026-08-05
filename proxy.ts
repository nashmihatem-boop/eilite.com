import { NextResponse } from "next/server";

// CSP now lives in next.config.ts's headers(), production-only. It was previously added
// here as `script-src 'self'` with no 'unsafe-inline', which silently broke the
// framer-motion hero animation (stuck at `initial` opacity: 0, no console error) — almost
// certainly because it blocked Next.js's own inline hydration bootstrap scripts, not
// because of anything framer-motion itself does. The current policy adds 'unsafe-inline'
// to script-src specifically to allow those, and was verified by reading the hero's
// computed opacity after a fresh production load (not just checking for console errors),
// confirming the animation actually completes at opacity: 1.
export function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
