import type { Metadata } from "next";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";

export type IndustryIcon =
  | "Factory"
  | "ShoppingBag"
  | "Truck"
  | "MonitorSmartphone"
  | "Briefcase"
  | "Building2";

export interface IndustryConfig {
  slug: string;
  label: string;
  blurb: string;
  icon: IndustryIcon;
  /** Raw `CaseStudy.industry` values that roll up into this nav bucket. */
  sourceIndustries: string[];
}

/**
 * Industries nav → case-study bucket mapping. Every raw `industry` value in
 * lib/case-studies.ts must appear in exactly one bucket here so all 169
 * records land on a page with none uncovered and none duplicated.
 */
export const industries: IndustryConfig[] = [
  {
    slug: "manufacturing",
    label: "Manufacturing",
    blurb:
      "Finance, ERP, accounting and automation work for manufacturing and industrial businesses — from plant-level costing to group reporting.",
    icon: "Factory",
    sourceIndustries: [
      "Manufacturing / Industrial",
      "Auto / Engineering",
      "Pharma / Life Sciences",
      "Energy / Utilities",
    ],
  },
  {
    slug: "retail-consumer",
    label: "Retail & Consumer",
    blurb:
      "Helping retail, consumer, food & beverage and apparel businesses sharpen margins, reporting and systems.",
    icon: "ShoppingBag",
    sourceIndustries: ["Retail", "Food & Beverages", "Apparel / Textile", "Hospitality"],
  },
  {
    slug: "logistics",
    label: "Logistics",
    blurb:
      "Finance and systems support for logistics and supply-chain operations where cash, cost and control move fast.",
    icon: "Truck",
    sourceIndustries: ["Logistics & Supply Chain"],
  },
  {
    slug: "technology-saas",
    label: "Technology & SaaS",
    blurb:
      "FP&A, revenue, ERP and reporting support for technology, SaaS and media businesses scaling quickly.",
    icon: "MonitorSmartphone",
    sourceIndustries: ["Technology", "Media & Communications"],
  },
  {
    slug: "professional-services",
    label: "Professional Services",
    blurb:
      "Finance, accounting and reporting support for professional services and financial-services firms.",
    icon: "Briefcase",
    sourceIndustries: ["Professional Services", "Financial Services / NBFC", "Aviation"],
  },
  {
    slug: "multi-entity-groups",
    label: "Multi-entity Groups",
    blurb:
      "Consolidation, controls and reporting for diversified groups and multi-entity structures.",
    icon: "Building2",
    sourceIndustries: ["Diversified / Conglomerate", "Real Estate"],
  },
];

export function getIndustry(slug: string): IndustryConfig | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustryCaseStudies(slug: string): CaseStudy[] {
  const config = getIndustry(slug);
  if (!config) return [];
  return caseStudies.filter((study) => config.sourceIndustries.includes(study.industry));
}

export interface VerticalCount {
  category: CaseStudy["category"];
  count: number;
}

const CATEGORY_ORDER: CaseStudy["category"][] = [
  "ERP",
  "FP&A",
  "Technical Accounting",
  "Training",
];

/** Only verticals actually present in `records`, in a stable display order. */
export function getVerticalCounts(records: CaseStudy[]): VerticalCount[] {
  const counts = new Map<CaseStudy["category"], number>();
  for (const record of records) {
    counts.set(record.category, (counts.get(record.category) ?? 0) + 1);
  }
  return CATEGORY_ORDER.filter((category) => counts.has(category)).map((category) => ({
    category,
    count: counts.get(category)!,
  }));
}

const siteUrl = "https://contetra.com";

export function getIndustryMetadata(slug: string): Metadata {
  const config = getIndustry(slug);
  if (!config) return {};

  const pagePath = `/industries/${config.slug}`;
  const title = `${config.label} Case Studies & Finance Transformation | Contetra`;
  const description = config.blurb;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pagePath },
    openGraph: { title, description, url: `${siteUrl}${pagePath}`, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
