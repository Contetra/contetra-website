import type { Metadata } from "next";
import { misReportingDashboardsPage } from "@/app/services/management-reporting/mis-reporting-dashboards/content";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

const siteUrl = "https://contetra.com";
const pagePath = "/services/fractional-cfo-fpa/mis-reporting-dashboards";
const { title, description } = misReportingDashboardsPage.meta;

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
  name: misReportingDashboardsPage.jsonLdName,
  serviceType: misReportingDashboardsPage.jsonLdName,
  provider: { "@type": "Organization", name: "Contetra Private Limited", url: siteUrl },
  url: `${siteUrl}${pagePath}`,
  description,
  isPartOf: {
    "@type": "Service",
    name: "Fractional CFO and FP&A Services",
    url: `${siteUrl}/services/fractional-cfo-fpa`,
  },
};


export default function MisReportingDashboardsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        title={misReportingDashboardsPage.hero.title}
        paragraphs={misReportingDashboardsPage.hero.paragraphs}
        positioningLine={misReportingDashboardsPage.hero.positioningLine}
      />
      <LogoCarousel />
      <WhatWeHelp items={misReportingDashboardsPage.whatWeHelp} />
      <HowWeWork steps={misReportingDashboardsPage.howWeWork} />
      <ClosingCta
        heading={misReportingDashboardsPage.closingCta.heading}
        body={misReportingDashboardsPage.closingCta.body}
        primaryCta={{ label: misReportingDashboardsPage.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: misReportingDashboardsPage.closingCta.secondaryCta, href: bookingCta.href }}
        form={misReportingDashboardsPage.closingCta.form}
      />
    </>
  );
}
