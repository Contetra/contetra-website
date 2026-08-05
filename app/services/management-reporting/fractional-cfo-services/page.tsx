import type { Metadata } from "next";
import { fractionalCfoServicesPage } from "@/app/services/management-reporting/fractional-cfo-services/content";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

const siteUrl = "https://contetra.com";
const pagePath = "/services/fractional-cfo-fpa/fractional-cfo-services";
const { title, description } = fractionalCfoServicesPage.meta;

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
  name: fractionalCfoServicesPage.jsonLdName,
  serviceType: fractionalCfoServicesPage.jsonLdName,
  provider: { "@type": "Organization", name: "Contetra Private Limited", url: siteUrl },
  url: `${siteUrl}${pagePath}`,
  description,
  isPartOf: {
    "@type": "Service",
    name: "Fractional CFO and FP&A Services",
    url: `${siteUrl}/services/fractional-cfo-fpa`,
  },
};


export default function FractionalCfoServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        title={fractionalCfoServicesPage.hero.title}
        paragraphs={fractionalCfoServicesPage.hero.paragraphs}
        positioningLine={fractionalCfoServicesPage.hero.positioningLine}
      />
      <LogoCarousel />
      <WhatWeHelp items={fractionalCfoServicesPage.whatWeHelp} />
      <HowWeWork steps={fractionalCfoServicesPage.howWeWork} />
      <ClosingCta
        heading={fractionalCfoServicesPage.closingCta.heading}
        body={fractionalCfoServicesPage.closingCta.body}
        primaryCta={{ label: fractionalCfoServicesPage.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: fractionalCfoServicesPage.closingCta.secondaryCta, href: "/proof/case-studies" }}
        form={fractionalCfoServicesPage.closingCta.form}
      />
    </>
  );
}
