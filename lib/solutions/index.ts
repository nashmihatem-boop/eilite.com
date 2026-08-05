import type { SolutionVertical, SolutionCategory } from "./types";
import { homeServices1 } from "./home-services-1";
import { homeServices2 } from "./home-services-2";
import { homeServices3 } from "./home-services-3";
import { homeServices4 } from "./home-services-4";
import { homeServices5 } from "./home-services-5";
import { insuranceSolutions } from "./insurance";
import { insuranceSolutions2 } from "./insurance-2";
import { softwareSolutions } from "./software";
import { legalSolutions } from "./legal";
import { healthcareSolutions } from "./healthcare";

export type { SolutionVertical, SolutionCategory };

export const solutionVerticals: SolutionVertical[] = [
  ...legalSolutions,
  ...healthcareSolutions,
  ...homeServices1,
  ...homeServices2,
  ...homeServices3,
  ...homeServices4,
  ...homeServices5,
  ...insuranceSolutions,
  ...insuranceSolutions2,
  ...softwareSolutions,
];

export function getSolutionVertical(slug: string): SolutionVertical | undefined {
  return solutionVerticals.find((v) => v.slug === slug);
}

export function getSolutionsByCategory(category: SolutionCategory): SolutionVertical[] {
  return solutionVerticals.filter((v) => v.category === category);
}
