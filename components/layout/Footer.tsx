import Link from "next/link";
import { Wordmark } from "@/components/graphics/Wordmark";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about-us", label: "About Us" },
      { href: "/lead-validation-partners", label: "Lead Validation Partners" },
      { href: "/learning-center", label: "Learning Center" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-use", label: "Terms of Use" },
    ],
  },
  {
    title: "For Advertisers",
    links: [
      { href: "/buy-leads", label: "Buy Leads" },
      { href: "/buy-warm-transfers", label: "Buy Warm Transfers" },
      { href: "/buy-inbounds", label: "Buy Inbounds" },
      { href: "/solutions", label: "Solutions by Industry" },
    ],
  },
  {
    title: "For Affiliates",
    links: [
      { href: "/sell-leads", label: "Sell Leads" },
      { href: "/sell-warm-transfers", label: "Sell Warm Transfers" },
      { href: "/sell-inbounds", label: "Sell Inbounds" },
      { href: "/affiliates", label: "Affiliate Program" },
    ],
  },
  {
    title: "Our Brands",
    links: [
      { href: "https://everlawyer.com", label: "EverLawyer.com" },
      { href: "https://everfinancier.com", label: "EverFinancier.com" },
      { href: "https://evercontractor.com", label: "EverContractor.com" },
      { href: "https://everinsurer.com", label: "EverInsurer.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] pt-16 text-white/80">
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Wordmark className="font-heading text-2xl font-semibold text-white" />
            <p className="mt-4 max-w-xs text-sm">
              The hub where buyers, affiliates, and providers connect. Premium leads and live warm transfers,
              nationwide.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href="mailto:info@eilite.com" className="transition-colors hover:text-white">
                  info@eilite.com
                </a>
              </li>
              <li>
                <a href="tel:+13022447240" className="transition-colors hover:text-white">
                  (302) 244-7240
                </a>
              </li>
              <li className="max-w-[220px]">1111B S Governors Ave STE 21889, Dover, Delaware 19904</li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold uppercase tracking-[0.1em] text-white">{col.title}</div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
                {col.title === "Company" && (
                  <li>
                    <DemoTriggerButton className="text-sm transition-colors hover:text-white">
                      Contact Us
                    </DemoTriggerButton>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-white/50 sm:flex-row lg:px-8">
          <span>&copy; {new Date().getFullYear()} Eilite.com. All rights reserved.</span>
          <span>Dover, DE &middot; New York, NY &middot; Abu Dhabi, UAE</span>
        </div>
      </div>
    </footer>
  );
}
