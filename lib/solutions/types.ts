export type SolutionCategory = "Home Services" | "Insurance" | "Software & B2B";

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
  faqs: { q: string; a: string }[];
};
