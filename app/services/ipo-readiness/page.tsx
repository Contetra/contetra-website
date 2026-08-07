
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { Workstreams } from "./components/Workstreams";
import { ReadinessOutputs } from "./components/ReadinessOutputs";
import { ReadinessQuestions } from "./components/ReadinessQuestions";
import { AdviserFit } from "./components/AdviserFit";
import { PhasedProgramme } from "./components/PhasedProgramme";
import { FaqSection } from "./components/FaqSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ipoReadinessPage } from "./content";
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
