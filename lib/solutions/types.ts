import type { LucideIcon } from "lucide-react";

export type SolutionCategory = "Legal" | "Healthcare" | "Home Services" | "Insurance" | "Software & B2B";

export type SolutionHowItWorksStep = {
  title: string;
  detail: string;
};

export type SolutionBenefitAudience = {
  tag: string;
  icon: LucideIcon;
  title: string;
  detail: string;
};

export type SolutionVertical = {
  slug: string;
  label: string;
  category: SolutionCategory;
  keywords: string[];
  tagline: string;
  highlight: string;
  subheadline: string;
  searchChips: string[];
  demoIndustry: string;
  overviewEyebrow: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  benefitsHeading: string;
  benefits: string[];
  howItWorksHeading: string;
  howItWorksSubheading: string;
  howItWorksSteps: SolutionHowItWorksStep[];
  whoBenefitsHeading: string;
  whoBenefitsSubheading: string;
  whoBenefits: SolutionBenefitAudience[];
  faqs: { q: string; a: string }[];
};
