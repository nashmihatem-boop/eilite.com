import Link from "next/link";
import { Logomark } from "@/components/graphics/Logomark";
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
  { href: "/affiliates", label: "Affiliate Program" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logomark className="h-8 w-8" />
          <span className="font-heading text-xl font-bold tracking-tight text-[var(--color-ink)]">Eilite</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
          >
            Home
          </Link>
          <NavDropdown label="Advertisers" items={advertiserLinks} />
          <NavDropdown label="Publishers" items={publisherLinks} />
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

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+13022447240"
            className="text-sm font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand)]"
          >
            (302) 244-7240
          </a>
          <DemoTriggerButton className="rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]">
            Book a Demo Call
          </DemoTriggerButton>
        </div>
      </div>
    </header>
  );
}
