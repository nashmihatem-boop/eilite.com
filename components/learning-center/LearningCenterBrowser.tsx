"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";
import type { Article } from "@/lib/articles/types";

const PAGE_SIZE = 12;

export type ArticleSummary = Pick<Article, "slug" | "title" | "excerpt" | "category" | "readTime">;

export function LearningCenterBrowser({ articles, categories }: { articles: ArticleSummary[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      const matchesQuery =
        !q || article.title.toLowerCase().includes(q) || article.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [articles, query, activeCategory]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            placeholder="Search articles..."
            className="w-full rounded-full border border-[var(--color-line)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-brand)]"
          />
        </div>
        <span className="text-sm text-[var(--color-muted)]">
          {filtered.length} article{filtered.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="relative mt-5">
        <div className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(PAGE_SIZE);
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                activeCategory === category
                  ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                  : "border-[var(--color-line)] bg-white text-[var(--color-ink-soft)] hover:border-[var(--color-brand)]/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent sm:hidden" />
      </div>

      {visible.length === 0 ? (
        <p className="mt-14 text-center text-[var(--color-ink-soft)]">
          No articles match that search yet — try a different keyword or category.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {visible.map((article) => (
            <Link
              key={article.slug}
              href={`/learning-center/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-brand)]/50 hover:shadow-md"
            >
              <div className="h-1.5 bg-[var(--color-brand)]" />
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-brand)]/40 bg-[var(--color-surface-tint)] px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand)]">
                    {article.category}
                  </span>
                </span>

                <h2 className="mt-4 font-heading text-xl font-bold leading-snug text-[var(--color-ink)]">
                  {article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-[var(--color-ink-soft)]">{article.excerpt}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] transition-colors group-hover:text-[var(--color-brand-dark)]">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {visibleCount < filtered.length && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="rounded-full border-2 border-[var(--color-brand)] px-8 py-3 text-sm font-semibold text-[var(--color-brand)] transition-colors hover:bg-[var(--color-brand)] hover:text-white"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}
