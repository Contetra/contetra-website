import ContetraApproachSection from "./components/ContetraApproachSection";
import DecisionSection from "./components/DecisionSection";
import EvaluationSection from "./components/EvaluationSection";
import FaqSection from "./components/FaqSection";
import GuideMotion from "./components/GuideMotion";
import HeroSection from "./components/HeroSection";
import ImplementationSection from "./components/ImplementationSection";
import PartnerLandscapeSection from "./components/PartnerLandscapeSection";

export default function SapErpBuyersGuide() {
  return (
    <GuideMotion>
      <HeroSection />
      <PartnerLandscapeSection />
      <EvaluationSection />
      <ImplementationSection />
      <DecisionSection />
      <ContetraApproachSection />
      <FaqSection />
    </GuideMotion>
  );
}
