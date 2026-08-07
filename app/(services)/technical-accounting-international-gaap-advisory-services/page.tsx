import { LogoCarousel } from "@/components/common/logo-carousel";
import { TaigasBottomSection } from "./components/taigas-bottom-section";
import { TaigasMiddleSectionOne } from "./components/taigas-middle-section-one";
import { TaigasMiddleSectionFour } from "./components/taigas-middle-section-four";
import { TaigasMiddleSectionFive } from "./components/taigas-middle-section-five";
import { TaigasMiddleSectionSeven } from "./components/taigas-middle-section-seven";
import { TaigasMiddleSectionSix } from "./components/taigas-middle-section-six";
import { TaigasMiddleSectionThree } from "./components/taigas-middle-section-three";
import { TaigasMiddleSectionTwo } from "./components/taigas-middle-section-two";
import { TaigasTopSection } from "./components/taigas-top-section";

export default function TechnicalAccountingInternationalGaapAdvisoryServices() {
  return (
    <section className="w-full min-h-screen flex flex-col  gap-10 ">
      <TaigasTopSection />
      <LogoCarousel />
      <TaigasMiddleSectionOne />
      <TaigasMiddleSectionTwo />
      <TaigasMiddleSectionThree />
      <TaigasMiddleSectionFour />
      <TaigasMiddleSectionFive />
      <TaigasMiddleSectionSix />
      <TaigasMiddleSectionSeven />
      <TaigasBottomSection />
    </section>
  );
}
