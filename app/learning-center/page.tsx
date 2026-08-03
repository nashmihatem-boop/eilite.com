import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { LearningCenterCTA } from "@/components/sections/LearningCenterCTA";
import { LearningCenterBrowser } from "@/components/learning-center/LearningCenterBrowser";
import { articles, getCategories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Learning Center",
  description: "Articles on lead generation, warm transfers, and compliance across legal, financial, home services, and insurance.",
  alternates: { canonical: "/learning-center" },
};

export default function LearningCenterPage() {
  return (
    <>
      <Navbar />
      <MarketplaceHero
        eyebrow="Resources"
        headline="The Learning"
        highlight="Center"
        subheadline="Articles on lead generation, warm transfers, and compliance — across law, finance, home services, and insurance."
        ctaLabel="Book a Demo Call"
      />

      <section className="bg-white pb-20 pt-14">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <LearningCenterBrowser articles={articles} categories={getCategories()} />

          <div className="mt-14 max-w-2xl mx-auto">
            <LearningCenterCTA
              title="Ready to put better leads to work?"
              subtitle="Talk to our team about live, validated leads for your industry."
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
