import { NextResponse } from "next/server";

// script-src relies on 'self' rather than nonce + 'strict-dynamic': the site has no inline
// or third-party scripts, so 'self' alone covers every script Next.js actually serves,
// without requiring the nonce to be manually threaded through every rendered <script> tag.
const CSP_HEADER_VALUE = `
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

export function proxy() {
  const response = NextResponse.next();

  // React's dev-mode Fast Refresh relies on eval(), which a strict CSP blocks; React never
  // uses eval() in production, so this only relaxes the policy in development.
  if (process.env.NODE_ENV === "production") {
    response.headers.set("Content-Security-Policy", CSP_HEADER_VALUE);
  }

  return response;
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
