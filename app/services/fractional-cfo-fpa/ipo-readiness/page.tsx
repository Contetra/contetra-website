import type { Metadata } from "next";
import { Hero } from "@/app/services/fractional-cfo-fpa/ipo-readiness/components/Hero";
import { PainPoints } from "@/app/services/fractional-cfo-fpa/ipo-readiness/components/PainPoints";
import { Workstreams } from "@/app/services/fractional-cfo-fpa/ipo-readiness/components/Workstreams";
import { ReadinessOutputs } from "@/app/services/fractional-cfo-fpa/ipo-readiness/components/ReadinessOutputs";
import { ReadinessQuestions } from "@/app/services/fractional-cfo-fpa/ipo-readiness/components/ReadinessQuestions";
import { AdviserFit } from "@/app/services/fractional-cfo-fpa/ipo-readiness/components/AdviserFit";
import { PhasedProgramme } from "@/app/services/fractional-cfo-fpa/ipo-readiness/components/PhasedProgramme";
import { FaqSection } from "@/app/services/fractional-cfo-fpa/ipo-readiness/components/FaqSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ipoReadinessPage } from "@/app/services/fractional-cfo-fpa/ipo-readiness/content";
import { primaryCta as bookingCta } from "@/lib/nav";

const siteUrl = "https://contetra.com";
const pagePath = "/services/fractional-cfo-fpa/ipo-readiness";
const { title, description } = ipoReadinessPage.meta;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title,
    description,
    url: pagePath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IPO Readiness Services",
  serviceType: "IPO Readiness Services",
  provider: {
    "@type": "Organization",
    name: "Contetra Private Limited",
    url: siteUrl,
  },
  url: `${siteUrl}${pagePath}`,
  description,
  isPartOf: {
    "@type": "Service",
    name: "Fractional CFO and FP&A Services",
    url: `${siteUrl}/services/fractional-cfo-fpa`,
  },
};

export default function IpoReadinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <PainPoints />
      <Workstreams />
      <ReadinessOutputs />
      <ReadinessQuestions />
      <AdviserFit />
      <PhasedProgramme />
      <FaqSection />
      <ClosingCta
        heading={ipoReadinessPage.closingCta.heading}
        body={ipoReadinessPage.closingCta.body}
        primaryCta={{ label: ipoReadinessPage.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: ipoReadinessPage.closingCta.secondaryCta, href: bookingCta.href }}
      />
    </>
  );
}
