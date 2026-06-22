import BusinessIntroSection from "./components/BusinessIntroSection";
import CtaSection from "./components/CtaSection";
import ExperienceSection from "./components/ExperienceSection";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import JourneySection from "./components/JourneySection";
import MethodologySection from "./components/MethodologySection";
import ModulesSection from "./components/ModulesSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import TransformationSection from "./components/TransformationSection";
import WhyContetraSection from "./components/WhyContetraSection";

export default function SapImplementationServicesPage() {
  return (
    <main className="bg-white text-[#1a1640] dark:bg-[#0A0A0A]">
      <HeroSection />
      <BusinessIntroSection />
      <TransformationSection />
      <ModulesSection />
      <IndustriesSection />
      <JourneySection />
      <ExperienceSection />
      <SuccessStoriesSection />
      <MethodologySection />
      <WhyContetraSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
