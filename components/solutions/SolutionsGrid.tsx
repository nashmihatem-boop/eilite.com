import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SolutionVertical, SolutionCategory } from "@/lib/solutions";

const categoryOrder: SolutionCategory[] = ["Legal", "Healthcare", "Home Services", "Insurance"];

const categoryCopy: Record<SolutionCategory, { eyebrow: string; heading: string }> = {
  Legal: {
    eyebrow: "Legal",
    heading: "Legal Leads by Practice Area",
  },
  Healthcare: {
    eyebrow: "Healthcare",
    heading: "Medicare & Health Coverage Leads",
  },
  "Home Services": {
    eyebrow: "Home Services",
    heading: "Contractor & Trade Leads",
  },
  Insurance: {
    eyebrow: "Insurance",
    heading: "Insurance Leads by Line",
  },
  "Software & B2B": {
    eyebrow: "Technology",
    heading: "B2B Software & SaaS Leads",
  },
};

export function SolutionsGrid({ verticals }: { verticals: SolutionVertical[] }) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {categoryOrder.map((category) => {
          const items = verticals.filter((v) => v.category === category);
          if (!items.length) return null;
          const copy = categoryCopy[category];

          return (
            <div key={category} className="mb-16 last:mb-0">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                {copy.eyebrow}
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
                {copy.heading}
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((vertical) => (
                  <Link
                    key={vertical.slug}
                    href={`/solutions/${vertical.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-[var(--color-line)] bg-white p-5 transition-colors hover:border-[var(--color-brand)]/40"
                  >
                    <span className="font-semibold text-[var(--color-ink)]">{vertical.label}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[var(--color-brand)] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
