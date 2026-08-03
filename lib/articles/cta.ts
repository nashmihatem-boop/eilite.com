import type { Article } from "@/lib/articles/types";

export type ArticleCta = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  industry?: string;
  href?: string;
};

const DEFAULT_CTA: ArticleCta = {
  title: "Ready to put better leads to work?",
  subtitle: "Talk to our team about live, validated leads for your industry.",
  buttonLabel: "Book a Demo Call",
};

const CATEGORY_CTAS: Record<string, ArticleCta> = {
  "Home Services Marketing": {
    title: "Ready to grow your home services business?",
    subtitle: "Talk to our team about live, validated leads for your industry.",
    buttonLabel: "Book a Demo Call",
    industry: "Home Services",
  },
  "Home Services": {
    title: "Ready to grow your home services business?",
    subtitle: "Talk to our team about live, validated leads for your industry.",
    buttonLabel: "Book a Demo Call",
    industry: "Home Services",
  },
  "Legal Leads": {
    title: "Ready to grow your caseload?",
    subtitle: "Talk to our team about live, validated legal leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Legal",
  },
  "Personal Injury": {
    title: "Ready to grow your caseload?",
    subtitle: "Talk to our team about live, validated personal injury leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Legal",
  },
  "Personal Injury Marketing": {
    title: "Ready to grow your caseload?",
    subtitle: "Talk to our team about live, validated personal injury leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Legal",
  },
  "Divorce & Family Law": {
    title: "Ready to grow your caseload?",
    subtitle: "Talk to our team about live, validated family law leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Legal",
  },
  "Family Law": {
    title: "Ready to grow your caseload?",
    subtitle: "Talk to our team about live, validated family law leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Legal",
  },
  "Immigration Law": {
    title: "Ready to grow your caseload?",
    subtitle: "Talk to our team about live, validated immigration law leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Legal",
  },
  "Legal Guides": {
    title: "Ready to grow your caseload?",
    subtitle: "Talk to our team about live, validated legal leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Legal",
  },
  "Law Firm Marketing": {
    title: "Ready to grow your caseload?",
    subtitle: "Talk to our team about live, validated legal leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Legal",
  },
  Insurance: {
    title: "Ready to grow your book of business?",
    subtitle: "Talk to our team about live, validated insurance leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Insurance",
  },
  "Medicare Leads": {
    title: "Ready to grow your Medicare book of business?",
    subtitle: "Talk to our team about live, validated Medicare leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Insurance",
  },
  "Financial Leads": {
    title: "Ready to grow your loan pipeline?",
    subtitle: "Talk to our team about live, validated financial leads.",
    buttonLabel: "Book a Demo Call",
    industry: "Financial Services",
  },
};

const SELLER_CTA: ArticleCta = {
  title: "Ready to start monetizing your traffic?",
  subtitle: "Join Eilite's affiliate program and turn the leads or calls you're already generating into revenue.",
  buttonLabel: "Apply as an Affiliate",
  href: "/affiliates",
};

export function getArticleCta(article: Article): ArticleCta {
  const isSellerFacing = article.relatedSlugs?.includes("affiliates");
  if (isSellerFacing) return SELLER_CTA;
  return CATEGORY_CTAS[article.category] ?? DEFAULT_CTA;
}
