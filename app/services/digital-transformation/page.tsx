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
import { LogoCarousel } from "@/components/common/logo-carousel";



export default function ErpImplementationPage() {
  return (
    <>
      <Hero />
      <LogoCarousel />
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
