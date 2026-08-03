import type { Article } from "@/lib/articles/types";

const pricingRelated = ["buy-verified-legal-leads", "exclusive-vs-shared-attorney-leads", "pay-per-lead-vs-pay-per-click"];

export const leadPricingArticles: Article[] = [
  {
    slug: "attorney-lead-pricing",
    title: "Attorney Lead Pricing: What Actually Drives the Cost",
    metaTitle: "Attorney Lead Pricing Explained",
    excerpt:
      "Prices for attorney leads vary enormously across providers and practice areas. Here's what specifically drives that variation, so you can evaluate whether a given price is actually fair.",
    metaDescription: "Prices for attorney leads vary enormously across providers and practice areas. Here's what specifically drives that variation.",
    category: "Legal Leads",
    readTime: "7 min read",
    publishedDate: "2026-08-06",
    relatedSlugs: pricingRelated,
    content: [
      {
        type: "paragraph",
        text: "Attorney lead prices can range from a few dollars for a shared, low-intent contact to several hundred dollars for an exclusive, high-value warm transfer — and without understanding what drives that range, it's genuinely difficult to know whether a given quote represents fair value or an overcharge.",
      },
      {
        type: "heading",
        text: "Practice Area and Typical Case Value",
      },
      {
        type: "paragraph",
        text: "Practice areas with high average case values — personal injury, mass tort, medical malpractice — generally command higher lead prices than lower-value categories, since firms can reasonably afford to pay more for a contact when a single signed case might be worth tens of thousands of dollars or more.",
      },
      {
        type: "heading",
        text: "Exclusivity",
      },
      {
        type: "paragraph",
        text: "An exclusive lead, sold to one firm only, costs meaningfully more than the same contact sold to multiple firms simultaneously. This is typically the single largest price driver after practice area itself, since exclusivity requires the provider to forgo revenue from reselling the same contact multiple times.",
      },
      {
        type: "heading",
        text: "Delivery Format and Speed",
      },
      {
        type: "list",
        items: [
          "Form-based leads generally cost less than [warm transfers](/buy-warm-transfers), since a warm transfer requires a live call center screening and connecting the prospect in real time.",
          "Real-time delivery typically commands a premium over batch delivery, given the meaningful conversion advantage speed provides.",
          "Geographic and demographic targeting precision generally increases price, since a highly-targeted lead is more efficiently matched to a specific firm's needs.",
        ],
      },
      {
        type: "heading",
        text: "Verification and Screening Depth",
      },
      {
        type: "paragraph",
        text: "Providers running genuine fraud detection, consent certification, and compliance screening before delivery generally price higher than providers offering minimal or no screening — and that higher price often reflects real, measurable value in reduced wasted intake time and reduced compliance risk.",
      },
      {
        type: "heading",
        text: "Why the Cheapest Option Is Rarely the Best Value",
      },
      {
        type: "paragraph",
        text: "A lower price per lead often correlates with lower exclusivity, less screening, or lower intent quality — all of which reduce actual conversion rate. Evaluating cost-per-signed-case, rather than cost-per-lead alone, is the only reliable way to compare providers charging different prices for genuinely different products.",
      },
      {
        type: "heading",
        text: "How to Evaluate Whether a Price Is Fair",
      },
      {
        type: "paragraph",
        text: "Ask specifically about exclusivity, delivery speed, and verification process before comparing price alone — a $150 exclusive, verified lead and a $40 shared, unscreened lead aren't competing products, even though they're both labeled \"attorney leads.\" Our [Buy Leads](/buy-leads) page outlines exactly what's included at each price point for our own delivery.",
      },
    ],
  },
  {
    slug: "law-firm-pay-per-lead-pricing-a-complete-breakdown",
    title: "Law Firm Pay-Per-Lead Pricing: A Complete Breakdown",
    metaTitle: "Law Firm Pay-Per-Lead Pricing: Full Breakdown",
    excerpt:
      "Beyond the sticker price per lead, several less obvious cost factors determine the real economics of a pay-per-lead program. Here's the complete picture.",
    category: "Legal Leads",
    readTime: "7 min read",
    publishedDate: "2026-08-06",
    relatedSlugs: [...pricingRelated, "attorney-lead-pricing"],
    content: [
      {
        type: "paragraph",
        text: "Evaluating a pay-per-lead program by its per-lead sticker price alone misses several cost factors that materially affect the actual economics. A complete breakdown requires looking beyond the quoted price to the full picture of what a program actually costs and returns.",
      },
      {
        type: "heading",
        text: "The Visible Cost: Price Per Lead or Transfer",
      },
      {
        type: "paragraph",
        text: "This is the number every provider leads with, and it varies by practice area, exclusivity, and delivery format as covered in our guide to [attorney lead pricing](/learning-center/attorney-lead-pricing). It's the starting point for evaluation, not the ending point.",
      },
      {
        type: "heading",
        text: "The Hidden Cost: Intake Time on Non-Converting Leads",
      },
      {
        type: "paragraph",
        text: "Every lead, whether it converts or not, consumes intake staff time — a phone call, research, follow-up attempts. A cheaper lead source with a lower contact or qualification rate can end up costing more in staff time per signed case than a pricier, better-screened source, even though the sticker price looks more attractive.",
      },
      {
        type: "heading",
        text: "The Real Metric: Cost Per Signed Case",
      },
      {
        type: "list",
        items: [
          "Total spend on a lead source divided by the number of actual signed clients it produced, not just contacts or consultations.",
          "This metric accounts for exclusivity, screening quality, and intake efficiency all at once, since all three affect the eventual signed-case count.",
          "Tracking this by source over a meaningful time period (at least several weeks of consistent volume) reveals which programs are actually worth the investment.",
        ],
      },
      {
        type: "heading",
        text: "Volume Discounts and Contract Terms",
      },
      {
        type: "paragraph",
        text: "Many providers offer reduced per-lead pricing at higher committed volumes, but committing to volume before validating quality at a smaller scale can lock a firm into an underperforming source. Testing at a modest volume before negotiating a larger, discounted commitment protects against this risk.",
      },
      {
        type: "heading",
        text: "Replacement and Credit Policies",
      },
      {
        type: "paragraph",
        text: "Understanding a provider's policy for invalid leads — wrong numbers, duplicate submissions, leads outside your specified criteria — affects the real effective price you're paying, since a provider without a fair credit policy for genuinely bad leads effectively charges more than its quoted price.",
      },
      {
        type: "heading",
        text: "Putting It All Together",
      },
      {
        type: "paragraph",
        text: "A complete pricing evaluation weighs the quoted price against exclusivity, screening quality, intake efficiency, and replacement policy together, arriving at a true cost-per-signed-case figure that's the only number that actually reflects a program's value to your firm. Our [Buy Leads](/buy-leads) and [Buy Warm Transfers](/buy-warm-transfers) pages detail our own approach to each of these factors.",
      },
    ],
  },
];
