import { SbfmsMiddleSectionOne } from "./components/sbfms-middle-section-one";
import { SbfmsMiddleSectionFour } from "./components/sbfms-middle-section-four";
import { SbfmsMiddleSectionFive } from "./components/sbfms-middle-section-five";
import { SbfmsMiddleSectionThree } from "./components/sbfms-middle-section-three";
import { SbfmsMiddleSectionTwo } from "./components/sbfms-middle-section-two";
import { SbfmsTopSection } from "./components/sbfms-top-section";
import { LogoCarousel } from "@/components/common/logo-carousel";

export default function StrategicBusinessFinancialManagementSolutions() {
  return (
    <section className="mt-[90px] flex min-h-screen w-full flex-col gap-10 md:mt-[80px]">
      <SbfmsTopSection />
      <LogoCarousel />
      <SbfmsMiddleSectionOne />
      <SbfmsMiddleSectionTwo />
      <SbfmsMiddleSectionThree />
      <SbfmsMiddleSectionFour />
      <SbfmsMiddleSectionFive />
    </section>
  );
}
