"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/graphics/Wordmark";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";
import { NavDropdown } from "@/components/layout/NavDropdown";

const advertiserLinks = [
  { href: "/buy-leads", label: "Buy Leads" },
  { href: "/buy-warm-transfers", label: "Buy Warm Transfers" },
  { href: "/buy-inbounds", label: "Buy Inbounds" },
];

const publisherLinks = [
  { href: "/sell-leads", label: "Sell Leads" },
  { href: "/sell-warm-transfers", label: "Sell Warm Transfers" },
  { href: "/sell-inbounds", label: "Sell Inbounds" },
  { href: "/revenue-share", label: "40% RevShare" },
  { href: "/affiliates", label: "Affiliate Program" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Wordmark className="font-heading text-2xl font-semibold text-[var(--color-ink)]" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
          >
            Home
          </Link>
          <NavDropdown label="Affiliates" items={publisherLinks} />
          <NavDropdown label="Advertisers" items={advertiserLinks} />
          <Link
            href="/solutions"
            className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
          >
            Solutions
          </Link>
          <Link
            href="/coverage"
            className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
          >
            Coverage
          </Link>
          <Link
            href="/learning-center"
            className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
          >
            Learning Center
          </Link>
          <DemoTriggerButton className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]">
            Contact Us
          </DemoTriggerButton>
        </nav>

        <div className="hidden items-center gap-3 md:flex lg:flex">
          <DemoTriggerButton className="rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]">
            Book a Demo Call
          </DemoTriggerButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-ink)] lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-[var(--color-line)] bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-alt)]"
            >
              Home
            </Link>

            <div className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Affiliates
            </div>
            {publisherLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-alt)]"
              >
                {item.label}
              </Link>
            ))}

            <div className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Advertisers
            </div>
            {advertiserLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-alt)]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/solutions"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-alt)]"
            >
              Solutions
            </Link>
            <Link
              href="/coverage"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-alt)]"
            >
              Coverage
            </Link>
            <Link
              href="/learning-center"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-alt)]"
            >
              Learning Center
            </Link>
            <DemoTriggerButton className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-alt)]">
              Contact Us
            </DemoTriggerButton>
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-[var(--color-line)] pt-4">
            <DemoTriggerButton className="w-full rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]">
              Book a Demo Call
            </DemoTriggerButton>
          </div>
        </nav>
      )}
    </header>
  );
}
