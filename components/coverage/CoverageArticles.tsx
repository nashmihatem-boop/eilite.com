import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles/types";

export function CoverageArticles({ articles, industryLabel }: { articles: Article[]; industryLabel: string }) {
  if (!articles.length) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          03 For Buyers
        </span>
        <h2 className="mt-3 font-heading text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
          Buying {industryLabel.toLowerCase()} leads: what to know
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/learning-center/${article.slug}`}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-[var(--color-line)] p-5 transition-colors hover:border-[var(--color-brand)]/40"
            >
              <div>
                <h3 className="font-heading text-base font-bold text-[var(--color-ink)]">{article.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-ink-soft)]">{article.excerpt}</p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand)] transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>

        <Link
          href="/learning-center"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] hover:text-[var(--color-brand-dark)]"
        >
          Browse the full Learning Center
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
