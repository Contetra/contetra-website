import { LogoCarousel } from "@/components/common/logo-carousel";
import { OasBottomSection } from "./components/oas-bottom-section";
import { OasMiddleSectionOne } from "./components/oas-middle-section-one";
import { OasMiddleSectionFive } from "./components/oas-middle-section-five";
import { OasMiddleSectionFour } from "./components/oas-middle-section-four";
import { OasMiddleSectionThree } from "./components/oas-middle-section-three";
import { OasMiddleSectionTwo } from "./components/oas-middle-section-two";
import { OasTopSection } from "./components/oas-top-section";

export default function OffshoreAccountingServices() {
  return (
    <section className=" flex min-h-screen w-full flex-col gap-10 dark:bg-[#0A0A0A]">
      <OasTopSection />
      <OasMiddleSectionOne />
      <LogoCarousel />
      <OasMiddleSectionTwo />
      <OasMiddleSectionThree />
      <OasMiddleSectionFour />
      <OasMiddleSectionFive />
      <OasBottomSection />
    </section>
  );
}
