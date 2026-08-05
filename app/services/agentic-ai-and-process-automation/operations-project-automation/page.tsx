import type { Metadata } from "next";
import { agenticAiSubPages } from "@/lib/content";
import { IconMotif } from "@/components/ui/IconMotif";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

const siteUrl = "https://contetra.com";
const SLUG = "operations-project-automation";

const page = agenticAiSubPages.find((p) => p.slug === SLUG)!;
const pagePath = "/services/agentic-ai-and-process-automation/operations-project-automation";
const { title, description } = page.meta;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pagePath },
  openGraph: { title, description, url: pagePath, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: page.jsonLdName,
  serviceType: page.jsonLdName,
  provider: {
    "@type": "Organization",
    name: "Contetra Private Limited",
    url: siteUrl,
  },
  url: `${siteUrl}${pagePath}`,
  description: page.meta.description,
  isPartOf: {
    "@type": "Service",
    name: "Agentic AI and Business Workflow Automation",
    url: `${siteUrl}/services/agentic-ai-and-process-automation`,
  },
};


export default function OperationsProjectAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        title={page.hero.title}
        paragraphs={page.hero.paragraphs}
        positioningLine={page.hero.positioningLine}
        motif={<IconMotif icon={page.motifIcon} label={page.motifLabel} />}
      />
      <LogoCarousel />
      <WhatWeHelp items={page.whatWeHelp} />
      <HowWeWork steps={page.howWeWork} />
      <ClosingCta
        heading={page.closingCta.heading}
        body={page.closingCta.body}
        primaryCta={{ label: page.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: page.closingCta.secondaryCta, href: page.secondaryCtaHref }}
        form={page.closingCta.form}
      />
    </>
  );
}
