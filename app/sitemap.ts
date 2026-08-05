import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { articles } from "@/lib/articles";
import { coverageIndustries } from "@/lib/coverage";
import { solutionVerticals } from "@/lib/solutions";

// Bump this only when a static marketing page's content actually changes —
// it should not track "now" on every build.
const STATIC_PAGES_LAST_UPDATED = new Date("2026-08-03");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-us",
    "/affiliates",
    "/lead-validation-partners",
    "/privacy-policy",
    "/terms-of-use",
    "/learning-center",
    "/buy-leads",
    "/buy-warm-transfers",
    "/buy-inbounds",
    "/sell-leads",
    "/sell-warm-transfers",
    "/sell-inbounds",
    "/coverage",
    "/solutions",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: STATIC_PAGES_LAST_UPDATED,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const coverageEntries: MetadataRoute.Sitemap = coverageIndustries.map((i) => ({
    url: `${siteConfig.url}/coverage/${i.slug}`,
    lastModified: STATIC_PAGES_LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${siteConfig.url}/learning-center/${a.slug}`,
    lastModified: new Date(a.updatedDate ?? a.publishedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const solutionEntries: MetadataRoute.Sitemap = solutionVerticals.map((v) => ({
    url: `${siteConfig.url}/solutions/${v.slug}`,
    lastModified: STATIC_PAGES_LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...coverageEntries, ...solutionEntries, ...articleEntries];
}
