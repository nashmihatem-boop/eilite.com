import { FileCheck, PhoneCall, Phone, Percent, ArrowRight } from "lucide-react";

const sellOffers = [
  {
    icon: FileCheck,
    title: "Sell Leads",
    detail: "Route your lead traffic to buyers who pay for it in real time.",
  },
  {
    icon: PhoneCall,
    title: "Sell Warm Transfers",
    detail: "Get paid for live, qualified phone conversations you generate.",
  },
  {
    icon: Phone,
    title: "Sell Inbounds",
    detail: "Monetize every inbound call you generate, from any sourcing channel.",
  },
  {
    icon: Percent,
    title: "40% RevShare",
    detail: "Send us the leads you can't place — we work them and split the payout.",
  },
];

const buyOffers = [
  {
    icon: FileCheck,
    title: "Buy Leads",
    detail: "Exclusive, verified leads across every vertical we serve.",
  },
  {
    icon: PhoneCall,
    title: "Buy Warm Transfers",
    detail: "Live, pre-qualified callers connected straight to your team.",
  },
  {
    icon: Phone,
    title: "Buy Inbounds",
    detail: "Pay for engaged conversations, not clicks — calls route straight to your line.",
  },
];

function OfferCard({ icon: Icon, title, detail }: { icon: typeof FileCheck; title: string; detail: string }) {
  return (
    <a
      href="#apply"
      className="group flex flex-col rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm transition-colors hover:border-[var(--color-brand)]/40"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-tint)]">
        <Icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
      </span>
      <h3 className="mt-4 font-heading text-lg font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-[var(--color-ink-soft)]">{detail}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-brand-dark)]">
        Get started
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export function CommunityPartnerPaths() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            How We Help You Profit
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Buy, Sell, or <span className="text-[var(--color-brand)]">Both</span> — Pick What Fits
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            Every card below leads to the same application — tell us which ones apply and our team will confirm
            availability for your vertical and volume.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">Sell</h3>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sellOffers.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">Buy</h3>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {buyOffers.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
