import Link from "next/link";
import type { ReactNode } from "react";

// Internal paths, or Eilite's own sister brands (same company — not a third-party backlink).
const LINK_PATTERN =
  /\[([^\]]+)\]\((\/[^\s)]*|https:\/\/(?:www\.)?(?:everlawyer|everfinancier|evercontractor|everinsurer)\.com[^\s)]*)\)/g;

const linkClassName =
  "font-semibold text-[var(--color-brand)] underline decoration-[var(--color-brand)]/40 underline-offset-2 transition-colors hover:text-[var(--color-brand-dark)]";

export function renderRichText(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  LINK_PATTERN.lastIndex = 0;

  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const href = match[2];
    const isExternal = href.startsWith("http");
    nodes.push(
      isExternal ? (
        <a key={`link-${key++}`} href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          {match[1]}
        </a>
      ) : (
        <Link key={`link-${key++}`} href={href} className={linkClassName}>
          {match[1]}
        </Link>
      ),
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}
