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
import { LogoCarousel } from "@/components/common/logo-carousel";


export default function AccountingReportingPage() {
  return (
    <>
      <Hero />
      <LogoCarousel />
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
