import type { SolutionVertical, SolutionCategory } from "./types";
import { homeServices1 } from "./home-services-1";
import { homeServices2 } from "./home-services-2";
import { homeServices3 } from "./home-services-3";
import { homeServices4 } from "./home-services-4";
import { insuranceSolutions } from "./insurance";
import { softwareSolutions } from "./software";

export type { SolutionVertical, SolutionCategory };

export const solutionVerticals: SolutionVertical[] = [
  ...homeServices1,
  ...homeServices2,
  ...homeServices3,
  ...homeServices4,
  ...insuranceSolutions,
  ...softwareSolutions,
];

export function getSolutionVertical(slug: string): SolutionVertical | undefined {
  return solutionVerticals.find((v) => v.slug === slug);
}

export function getSolutionsByCategory(category: SolutionCategory): SolutionVertical[] {
  return solutionVerticals.filter((v) => v.category === category);
}
