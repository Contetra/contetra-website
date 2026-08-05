import { Hero } from "@/app/services/management-reporting/components/Hero";
import { WhenToCall } from "@/app/services/management-reporting/components/WhenToCall";
import { WhatWeCover } from "@/app/services/management-reporting/components/WhatWeCover";
import { DecisionSystem } from "@/app/services/management-reporting/components/DecisionSystem";
import { EngagementModel } from "@/app/services/management-reporting/components/EngagementModel";
import { Deliverables } from "@/app/services/management-reporting/components/Deliverables";
import { WhyContetraCfo } from "@/app/services/management-reporting/components/WhyContetraCfo";
import { FaqSection } from "@/app/services/management-reporting/components/FaqSection";
import { ExploreSubPages } from "@/app/services/management-reporting/components/ExploreSubPages";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import { cfoFpaService } from "./content";


export default function FractionalCfoFpaPage() {
  return (
    <>
      <Hero />
      <WhenToCall />
      <WhatWeCover />
      <DecisionSystem />
      <EngagementModel />
      <Deliverables />
      <WhyContetraCfo />
      <FaqSection />
      <ExploreSubPages />
      <ClosingCta
        heading={cfoFpaService.closingCta.heading}
        body={cfoFpaService.closingCta.body}
        form={cfoFpaService.closingCta.form}
        primaryCta={{
          label: cfoFpaService.closingCta.primaryCta,
          href: bookingCta.href,
        }}
        secondaryCta={{
          label: cfoFpaService.closingCta.secondaryCta,
          href: "#",
        }}
      />
    </>
  );
}
