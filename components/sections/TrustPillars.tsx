"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Lock, Users, SlidersHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useDemoModal } from "@/lib/demo-modal-context";

type Pillar = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
  isModal?: boolean;
};

const pillars: Pillar[] = [
  {
    icon: BadgeCheck,
    title: "Exclusive by Design",
    subtitle: "Every lead sold once, never shared.",
    description:
      "We don't do bulk resale. Each lead or transfer goes to a single buyer, so your intent data stays exclusive and your cost per acquisition stays predictable.",
    cta: "See lead options",
    href: "/#compliance",
  },
  {
    icon: Lock,
    title: "Privacy-First Handling",
    subtitle: "TCPA and DNC compliant, always.",
    description:
      "Every contact is scrubbed against DNC and TCPA litigator lists before it reaches you — protecting your business and the consumer's privacy.",
    cta: "View compliance partners",
    href: "/#compliance",
  },
  {
    icon: Users,
    title: "A Real Team, Not a Ticket Queue",
    subtitle: "Dedicated support from day one.",
    description:
      "You get a named account manager, not a ticket number. Onboarding, reporting, and troubleshooting all run through one relationship.",
    cta: "Talk to our team",
    href: "/contact-us",
    isModal: true,
  },
  {
    icon: SlidersHorizontal,
    title: "Scales With Your Business",
    subtitle: "From your first lead to your busiest month.",
    description:
      "Start with a handful of verified leads or plug into a full warm-transfer program — our capacity grows with your demand, not the other way around.",
    cta: "Get a free quote",
    href: "/contact-us",
    isModal: true,
  },
];

export function TrustPillars() {
  const [active, setActive] = useState(0);
  const current = pillars[active];
  const Icon = current.icon;
  const { open } = useDemoModal();

  return (
    <section className="bg-[var(--color-surface-alt)] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Why Eilite</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          Why People <span className="text-[var(--color-brand)]">Trust Eilite</span>
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">
          Growth is personal. The same things hold true across everything we do, from a single verified lead to
          a fully managed transfer program: real validation, private handling, real people, and support that
          scales with you.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-[360px_1fr] lg:gap-6">
          <div className="flex flex-col gap-4">
            {pillars.map((pillar, i) => {
              const isActive = i === active;
              return (
                <button
                  key={pillar.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex h-[84px] w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-[var(--color-brand)] bg-[var(--color-surface-tint)] shadow-sm"
                      : "border-[var(--color-line)] bg-white hover:border-[var(--color-brand)]/40"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isActive ? "bg-[var(--color-brand)]" : "bg-[var(--color-surface-tint)]"
                    }`}
                  >
                    <pillar.icon
                      className={`h-4.5 w-4.5 ${isActive ? "text-white" : "text-[var(--color-brand)]"}`}
                      strokeWidth={2}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-[var(--color-ink)]">{pillar.title}</span>
                    <span className="mt-0.5 block truncate text-xs text-[var(--color-ink-soft)]">{pillar.subtitle}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-linear-to-br from-[var(--color-surface-tint)] via-white to-white p-8 sm:p-12">
            <span className="pointer-events-none absolute right-8 top-6 font-heading text-7xl font-bold text-[var(--color-brand)]/10 sm:text-8xl">
              {String(active + 1).padStart(2, "0")}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative max-w-lg"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-brand)] shadow-md">
                  <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-4 text-[var(--color-ink-soft)]">{current.description}</p>
                {current.isModal ? (
                  <button
                    type="button"
                    onClick={() => open()}
                    className="mt-8 inline-block rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
                  >
                    {current.cta}
                  </button>
                ) : (
                  <Link
                    href={current.href}
                    className="mt-8 inline-block rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
                  >
                    {current.cta}
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
