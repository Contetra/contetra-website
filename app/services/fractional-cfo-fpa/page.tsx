import { Hero } from "@/app/services/fractional-cfo-fpa/components/Hero";
import { WhenToCall } from "@/app/services/fractional-cfo-fpa/components/WhenToCall";
import { WhatWeCover } from "@/app/services/fractional-cfo-fpa/components/WhatWeCover";
import { DecisionSystem } from "@/app/services/fractional-cfo-fpa/components/DecisionSystem";
import { EngagementModel } from "@/app/services/fractional-cfo-fpa/components/EngagementModel";
import { Deliverables } from "@/app/services/fractional-cfo-fpa/components/Deliverables";
import { WhyContetraCfo } from "@/app/services/fractional-cfo-fpa/components/WhyContetraCfo";
import { FaqSection } from "@/app/services/fractional-cfo-fpa/components/FaqSection";
import { ExploreSubPages } from "@/app/services/fractional-cfo-fpa/components/ExploreSubPages";
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
