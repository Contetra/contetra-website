import type { Metadata } from "next";
import { Hero } from "@/app/services/accounting-reporting/components/Hero";
import { Capabilities } from "@/app/services/accounting-reporting/components/Capabilities";
import { TechnicalAreas } from "@/app/services/accounting-reporting/components/TechnicalAreas";
import { FromConclusionToClose } from "@/app/services/accounting-reporting/components/FromConclusionToClose";
import { EngagementSteps } from "@/app/services/accounting-reporting/components/EngagementSteps";
import { WhyContetraAccounting } from "@/app/services/accounting-reporting/components/WhyContetraAccounting";
import { FaqSection } from "@/app/services/accounting-reporting/components/FaqSection";
import { ExploreSubPages } from "@/app/services/accounting-reporting/components/ExploreSubPages";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { accountingReportingService } from "@/app/services/accounting-reporting/content";
import { primaryCta as bookingCta } from "@/lib/nav";

const siteUrl = "https://contetra.com";
const pagePath = "/services/accounting-reporting";
const title = "Accounting & Reporting Consulting | IFRS, Ind AS, US GAAP";
const description =
  "Get technical accounting, financial statement, audit, GAAP conversion, transaction, due diligence and IPO-readiness support from experienced specialists.";

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
  name: "Accounting and Reporting Consulting",
  serviceType: "Accounting and Reporting Consulting",
  provider: {
    "@type": "Organization",
    name: "Contetra Private Limited",
    url: siteUrl,
  },
  url: `${siteUrl}${pagePath}`,
  description,
};

export default function AccountingReportingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <Capabilities />
      <TechnicalAreas />
      <FromConclusionToClose />
      <EngagementSteps />
      <WhyContetraAccounting />
      <FaqSection />
      <ExploreSubPages />
      <ClosingCta
        heading={accountingReportingService.closingCta.heading}
        body={accountingReportingService.closingCta.body}
        primaryCta={{
          label: accountingReportingService.closingCta.primaryCta,
          href: bookingCta.href,
        }}
        secondaryCta={{
          label: accountingReportingService.closingCta.secondaryCta,
          href: "#",
        }}
        form={accountingReportingService.closingCta.form}
      />
    </>
  );
}
