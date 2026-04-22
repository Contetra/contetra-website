import { LogoCarousel } from "@/components/common/logo-carousel";
import { CtMiddleSectionOne } from "./components/ct-middle-section-one";
import { CtMiddleSectionTwo } from "./components/ct-middle-section-two";
import { CtMiddleSectionThree } from "./components/ct-middle-section-three";
import { CtMiddleSectionFour } from "./components/ct-middle-section-four";
import { CtMiddleSectionFive } from "./components/ct-middle-section-five";
import { CtBottomSection } from "./components/ct-bottom-section";
import { CtTopSection } from "./components/ct-top-section";
import { Separator } from "@/components/ui/separator";
import { AuthorInfo } from "@/components/common/author-info";

export default function CorporateTraining() {
  return (
    <section className="w-full min-h-screen flex flex-col mt-[90px] md:mt-[80px]  gap-10 ">
      <CtTopSection />
      <LogoCarousel />
      <Separator className="bg-[#D9DDE7]" />
      <CtMiddleSectionOne />
      <CtMiddleSectionTwo />
      <CtMiddleSectionThree />
      <CtMiddleSectionFour />
      <AuthorInfo />
      <CtMiddleSectionFive />
      <CtBottomSection />
    </section>
  );
}
