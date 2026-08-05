import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceFAQ } from "@/components/marketplace/MarketplaceFAQ";
import { ValidationPartnersGrid } from "@/components/sections/ValidationPartnersGrid";
import { PlatformHub } from "@/components/sections/PlatformHub";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Lead Validation Partners",
  description:
    "The fraud detection, identity verification, and compliance partners Eilite runs every lead and warm transfer through before delivery — Jornaya, TrustedForm, Anura, MaxMind, and more.",
  alternates: { canonical: "/lead-validation-partners" },
};

const faqs = [
  {
    q: "Why does Eilite use eight different validation tools instead of one?",
    a: "Each partner catches a different kind of problem. Anura and IPQualityScore focus on bot and fraud detection, MaxMind and Xverify focus on identity and contact accuracy, Jornaya and TrustedForm certify consent, and the TCPA Litigator List and DNC.com handle compliance screening. No single vendor covers all of that, so we run every lead through the full stack rather than relying on one check.",
  },
  {
    q: "Does this validation happen before or after I receive a lead?",
    a: "Before. Every lead and warm transfer is screened in real time as part of delivery — none of this happens retroactively after you've already paid for a bad contact.",
  },
  {
    q: "Do these partners apply to warm transfers as well as web form leads?",
    a: "Yes. Warm transfers go through the same TCPA and DNC scrubbing, consent verification, and fraud screening as form-submitted leads before a call is ever connected to your line.",
  },
  {
    q: "What happens if a lead fails one of these checks?",
    a: "It's filtered out before delivery. Our goal is for every lead or transfer that reaches you to have already cleared fraud, identity, consent, and compliance screening — not to deliver flagged contacts and let you sort them out.",
  },
  {
    q: "Can I request the compliance documentation for a specific lead?",
    a: "Yes. TrustedForm certificates and Jornaya consent records are retained and available on request, giving your team a defensible audit trail for any lead you've purchased.",
  },
];

export default function LeadValidationPartnersPage() {
  return (
    <>
      <Navbar />
      <MarketplaceHero
        eyebrow="Compliance & Fraud Prevention"
        headline="The Validation Stack Behind"
        highlight="Every Lead We Deliver"
        subheadline="Real-time fraud detection, identity verification, consent certification, and Do-Not-Call compliance — every lead and warm transfer clears all of it before it ever reaches you."
        ctaLabel="Book a Demo Call"
      />
      <ValidationPartnersGrid />
      <PlatformHub />
      <MarketplaceFAQ faqs={faqs} />
      <FinalCTA />
      <Footer />
    </>
  );
}
