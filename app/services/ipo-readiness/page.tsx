import type { Metadata } from "next";
import { Hero } from "@/app/services/ipo-readiness/components/Hero";
import { PainPoints } from "@/app/services/ipo-readiness/components/PainPoints";
import { Workstreams } from "@/app/services/ipo-readiness/components/Workstreams";
import { ReadinessOutputs } from "@/app/services/ipo-readiness/components/ReadinessOutputs";
import { ReadinessQuestions } from "@/app/services/ipo-readiness/components/ReadinessQuestions";
import { AdviserFit } from "@/app/services/ipo-readiness/components/AdviserFit";
import { PhasedProgramme } from "@/app/services/ipo-readiness/components/PhasedProgramme";
import { FaqSection } from "@/app/services/ipo-readiness/components/FaqSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ipoReadinessPage } from "@/app/services/ipo-readiness/content";
import { primaryCta as bookingCta } from "@/lib/nav";
import { LogoCarousel } from "@/components/common/logo-carousel";

export default function IpoReadinessPage() {
  return (
    <>
      <Hero />
      <LogoCarousel />
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
