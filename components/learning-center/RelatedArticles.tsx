import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles/types";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;

  return (
    <div className="mt-14 border-t border-[var(--color-line)] pt-10">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Continue Reading</span>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/learning-center/${article.slug}`}
            className="group flex flex-col rounded-xl border border-[var(--color-line)] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--color-brand)]/50 hover:shadow-md"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-brand)]">
              {article.category}
            </span>
            <h3 className="mt-2 flex-1 font-heading text-sm font-bold leading-snug text-[var(--color-ink)]">
              {article.title}
            </h3>
            <span className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)] transition-colors group-hover:text-[var(--color-brand-dark)]">
              Read article
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
