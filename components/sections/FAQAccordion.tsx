"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { homeFaqs as faqs } from "@/lib/faq-data";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[var(--color-surface-alt)] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">FAQ</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          Frequently Asked <span className="text-[var(--color-brand)]">Questions</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[var(--color-ink-soft)]">
          Everything you need to know about how Eilite validates, delivers, and supports every lead.
        </p>

        <div className="mt-10 space-y-3 text-left">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[var(--color-ink)]">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--color-brand)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-[var(--color-ink-soft)]">{faq.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
