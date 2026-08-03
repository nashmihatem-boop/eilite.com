import type { ArticleBlock } from "@/lib/articles/types";

export type TocItem = { id: string; text: string };

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function extractToc(content: ArticleBlock[]): TocItem[] {
  const seen = new Map<string, number>();
  const items: TocItem[] = [];
  for (const block of content) {
    if (block.type !== "heading") continue;
    const base = slugifyHeading(block.text);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    items.push({ id: count > 0 ? `${base}-${count}` : base, text: block.text });
  }
  return items;
}
