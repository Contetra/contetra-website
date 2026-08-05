import type { Metadata } from "next";
import { fpaServicesPage } from "@/app/services/management-reporting/fpa-services/content";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { Hero } from "./components/Hero";
import { WhatWeHelp } from "./components/WhatWeHelp";
import { HowWeWork } from "./components/HowWeWork";
import { LogoCarousel } from "@/components/common/logo-carousel";

const siteUrl = "https://contetra.com";
const pagePath = "/services/fractional-cfo-fpa/fpa-services";
const { title, description } = fpaServicesPage.meta;

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
  name: fpaServicesPage.jsonLdName,
  serviceType: fpaServicesPage.jsonLdName,
  provider: { "@type": "Organization", name: "Contetra Private Limited", url: siteUrl },
  url: `${siteUrl}${pagePath}`,
  description,
  isPartOf: {
    "@type": "Service",
    name: "Fractional CFO and FP&A Services",
    url: `${siteUrl}/services/fractional-cfo-fpa`,
  },
};


export default function FpaServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        title={fpaServicesPage.hero.title}
        paragraphs={fpaServicesPage.hero.paragraphs}
        positioningLine={fpaServicesPage.hero.positioningLine}
      />
      <LogoCarousel />
      <WhatWeHelp items={fpaServicesPage.whatWeHelp} />
      <HowWeWork steps={fpaServicesPage.howWeWork} />
      <ClosingCta
        heading={fpaServicesPage.closingCta.heading}
        body={fpaServicesPage.closingCta.body}
        primaryCta={{ label: fpaServicesPage.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: fpaServicesPage.closingCta.secondaryCta, href: bookingCta.href }}
        form={fpaServicesPage.closingCta.form}
      />
    </>
  );
}
