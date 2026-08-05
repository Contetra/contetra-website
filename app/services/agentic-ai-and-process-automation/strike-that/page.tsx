import { StBottomSection } from "./components/st-bottom-section";
import { StMiddleSectionOne } from "./components/st-middle-section-one";
import { StMiddleSectionFour } from "./components/st-middle-section-four";
import { StMiddleSectionFive } from "./components/st-middle-section-five";
import { StMiddleSectionThree } from "./components/st-middle-section-three";
import { StMiddleSectionTwo } from "./components/st-middle-section-two";
import { StTopSection } from "./components/st-top-section";

export default function StrikeThat() {
  return (
    <section className=" flex min-h-screen w-full flex-col gap-10 dark:bg-[#0A0A0A]">
      <StTopSection />
      <StMiddleSectionOne />
      <StMiddleSectionTwo />
      <StMiddleSectionThree />
      <StMiddleSectionFour />
      <StMiddleSectionFive />
      <StBottomSection />
    </section>
  );
}
