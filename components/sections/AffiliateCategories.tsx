"use client";

import { useState } from "react";
import { Scale, Landmark, Hammer, ShieldCheck } from "lucide-react";

const groups = [
  {
    icon: Scale,
    industry: "Legal",
    services: [
      "Personal Injury",
      "Mass Tort",
      "Auto Accidents",
      "Medical Malpractice",
      "Workers' Compensation",
      "Social Security Disability",
      "Bankruptcy",
      "Divorce & Family Law",
    ],
  },
  {
    icon: Landmark,
    industry: "Financial",
    services: [
      "Debt Consolidation",
      "Personal Loans",
      "Auto Loans",
      "Student Loan Refinance",
      "Credit Repair",
      "Tax Relief",
      "Mortgage Refinance",
      "Business Loans",
    ],
  },
  {
    icon: Hammer,
    industry: "Home Services",
    services: [
      "Solar",
      "Roofing",
      "HVAC",
      "Plumbing",
      "Windows",
      "Bathroom Remodel",
      "Kitchen Remodel",
      "Gutters",
      "Fencing",
      "Flooring",
      "Siding",
      "Foundation Repair",
    ],
  },
  {
    icon: ShieldCheck,
    industry: "Insurance",
    services: ["Auto Insurance", "Health Insurance", "Medicare", "Life Insurance", "Home Insurance", "Final Expense"],
  },
];

export function AffiliateCategories() {
  const [active, setActive] = useState(0);
  const current = groups[active];

  return (
    <section className="bg-[var(--color-surface-alt)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Coverage</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Pay-Per-Call &amp; Form Categories, <span className="text-[var(--color-brand)]">Across Every Industry</span>
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            We constantly expand our coverage across all four verticals we serve. We love affiliates that go
            after long-tail traffic and help monetize everything you send.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {groups.map((group, i) => {
            const isActive = i === active;
            return (
              <button
                key={group.industry}
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand)]/40"
                }`}
              >
                <group.icon className="h-4 w-4" strokeWidth={2} />
                {group.industry}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          <h3 className="font-heading text-2xl font-bold text-[var(--color-ink)]">
            Explore Eilite categories for {current.industry}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
            Send traffic for any of these — and many more — verticals within {current.industry.toLowerCase()}.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {current.services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-ink)] shadow-sm"
              >
                {service}
              </div>
            ))}
            <div className="flex items-center rounded-xl border border-dashed border-[var(--color-brand)]/40 px-4 py-3 text-sm font-semibold text-[var(--color-brand)]">
              And many more +
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
