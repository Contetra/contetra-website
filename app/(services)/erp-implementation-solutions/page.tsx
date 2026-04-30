import { LogoCarousel } from "@/components/common/logo-carousel";
import { EisMiddleSectionFive } from "./components/eis-middle-section-five";
import { EisMiddleSectionFour } from "./components/eis-middle-section-four";
import { EisMiddleSectionOne } from "./components/eis-middle-section-one";
import { Separator } from "@/components/ui/separator";
import { EisMiddleSectionThree } from "./components/eis-middle-section-three";
import { EisMiddleSectionTwo } from "./components/eis-middle-section-two";
import { EisTopSection } from "./components/eis-top-section";

export default function ErpImplementationSolutions() {
  return (
    <section className="w-full min-h-screen flex flex-col mt-[90px] md:mt-[80px]  gap-10 ">
      <EisTopSection />
      <LogoCarousel />
      <EisMiddleSectionOne />
      <Separator className="bg-[#D9DDE7]" />
      <EisMiddleSectionTwo />
      <Separator className="bg-[#D9DDE7]" />
      <EisMiddleSectionThree />
      <Separator className="bg-[#D9DDE7]" />
      <EisMiddleSectionFour />
      <Separator className="bg-[#D9DDE7]" />
      <EisMiddleSectionFive />
      <Separator className="bg-[#D9DDE7]" />
    </section>
  );
}
