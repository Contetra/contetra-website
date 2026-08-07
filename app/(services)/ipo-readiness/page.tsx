import { IrMiddleSectionOne } from "./components/ir-middle-section-one";
import { IrMiddleSectionTwo } from "./components/ir-middle-section-two";
import { IrMiddleSectionFour } from "./components/ir-middle-section-four";
import { IrMiddleSectionThree } from "./components/ir-middle-section-three";
import { IrMiddleSectionFive } from "./components/ir-middle-section-five";
import { IrBottomSection } from "./components/ir-bottom-section";
import { IrTopSection } from "./components/ir-top-section";
import { LogoCarousel } from "@/components/common/logo-carousel";

export default function IPOReadiness() {
  return (
    <section className="flex min-h-screen w-full flex-col gap-10 ">
      <IrTopSection />
      <LogoCarousel />
      <IrMiddleSectionOne />
      <IrMiddleSectionTwo />
      <IrMiddleSectionThree />
      <IrMiddleSectionFour />
      <IrMiddleSectionFive />
      <IrBottomSection />
    </section>
  );
}
