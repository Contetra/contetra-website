import type { Metadata } from "next";
import { Hero } from "@/app/services/digital-transformation/components/Hero";
import { WhyUnderperform } from "@/app/services/digital-transformation/components/WhyUnderperform";
import { HowWeSupport } from "@/app/services/digital-transformation/components/HowWeSupport";
import { DiagnosticReview } from "@/app/services/digital-transformation/components/DiagnosticReview";
import { IndependentLeadership } from "@/app/services/digital-transformation/components/IndependentLeadership";
import { GoodGovernance } from "@/app/services/digital-transformation/components/GoodGovernance";
import { Platforms } from "@/app/services/digital-transformation/components/Platforms";
import { FaqSection } from "@/app/services/digital-transformation/components/FaqSection";
import { ExploreSubPages } from "@/app/services/digital-transformation/components/ExploreSubPages";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { erpImplementationService } from "@/app/services/digital-transformation/content";
import { primaryCta as bookingCta } from "@/lib/nav";

const siteUrl = "https://contetra.com";
const pagePath = "/services/erp-implementation";
const title = "ERP Implementation & Diagnostic Review Services | Contetra";
const description =
  "Select, implement, rescue and optimise ERP systems with finance-led process design, independent functional consulting, PMO, data, UAT and change support.";

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
  name: "ERP Implementation and Diagnostic Review",
  serviceType: "ERP Implementation and Diagnostic Review",
  provider: {
    "@type": "Organization",
    name: "Contetra Private Limited",
    url: siteUrl,
  },
  url: `${siteUrl}${pagePath}`,
  description,
};

export default function ErpImplementationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <WhyUnderperform />
      <HowWeSupport />
      <DiagnosticReview />
      <IndependentLeadership />
      <GoodGovernance />
      <Platforms />
      <FaqSection />
      <ExploreSubPages />
      <ClosingCta
        heading={erpImplementationService.closingCta.heading}
        body={erpImplementationService.closingCta.body}
        primaryCta={{
          label: erpImplementationService.closingCta.primaryCta,
          href: "/solutions/erp-diagnostic-review",
        }}
        secondaryCta={{
          label: erpImplementationService.closingCta.secondaryCta,
          href: bookingCta.href,
        }}
        form={erpImplementationService.closingCta.form}
      />
    </>
  );
}
