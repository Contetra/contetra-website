import type { Metadata } from "next";
import { workingCapitalCashflowPage } from "@/app/services/management-reporting/working-capital-cashflow-advisory/content";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

const siteUrl = "https://contetra.com";
const pagePath = "/services/fractional-cfo-fpa/working-capital-cashflow-advisory";
const { title, description } = workingCapitalCashflowPage.meta;

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
  name: workingCapitalCashflowPage.jsonLdName,
  serviceType: workingCapitalCashflowPage.jsonLdName,
  provider: { "@type": "Organization", name: "Contetra Private Limited", url: siteUrl },
  url: `${siteUrl}${pagePath}`,
  description,
  isPartOf: {
    "@type": "Service",
    name: "Fractional CFO and FP&A Services",
    url: `${siteUrl}/services/fractional-cfo-fpa`,
  },
};


export default function WorkingCapitalCashflowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        title={workingCapitalCashflowPage.hero.title}
        paragraphs={workingCapitalCashflowPage.hero.paragraphs}
        positioningLine={workingCapitalCashflowPage.hero.positioningLine}
      />
      <LogoCarousel />
      <WhatWeHelp items={workingCapitalCashflowPage.whatWeHelp} />
      <HowWeWork steps={workingCapitalCashflowPage.howWeWork} />
      <ClosingCta
        heading={workingCapitalCashflowPage.closingCta.heading}
        body={workingCapitalCashflowPage.closingCta.body}
        primaryCta={{ label: workingCapitalCashflowPage.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: workingCapitalCashflowPage.closingCta.secondaryCta, href: bookingCta.href }}
        form={workingCapitalCashflowPage.closingCta.form}
      />
    </>
  );
}
