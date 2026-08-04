import { NextResponse } from "next/server";

// NOTE: a strict script-src CSP (even 'self' alone, no 'unsafe-eval') silently broke the
// framer-motion entrance animation on the homepage hero in production — elements stayed
// stuck at their `initial` state (opacity: 0) instead of animating in, with no console
// error to flag it. Removed until a CSP can be reintroduced with real verification that
// every client-side animation still completes, not just "no console error + page loads".
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
