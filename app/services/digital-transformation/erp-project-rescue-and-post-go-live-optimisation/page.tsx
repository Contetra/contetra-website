import type { Metadata } from "next";
import { erpSubPages } from "@/lib/content";
import { IconMotif } from "@/components/ui/IconMotif";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

const siteUrl = "https://contetra.com";
const SLUG = "erp-project-rescue";

const page = erpSubPages.find((p) => p.slug === SLUG)!;
const pagePath = "/services/digital-transformation/erp-project-rescue";
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
    name: "ERP Implementation and Diagnostic Review",
    url: `${siteUrl}/services/digital-transformation`,
  },
};


export default function ErpProjectRescueAndPostGoLiveOptimisationPage() {
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
