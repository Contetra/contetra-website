import { FrcTopSection } from "./components/frc-top-section";
import { FrcMiddleSectionOne } from "./components/frc-middle-section-one";
import { FrcMiddleSectionTwo } from "./components/frc-middle-section-two";
import { FrcMiddleSectionThree } from "./components/frc-middle-section-three";
import { FrcMiddleSectionFour } from "./components/frc-middle-section-four";
import { FrcMiddleSectionFive } from "./components/frc-middle-section-five";
import { FrcMiddleSectionSix } from "./components/frc-middle-section-six";
import { FrcMiddleSectionSeven } from "./components/frc-middle-section-seven";
import { FrcMiddleSectionHowHelp } from "./components/frc-middle-section-how-help";
import { FrcBottomSection } from "./components/frc-bottom-section";
import { FrcTestSection } from "./components/frc-test-section";

export default function FinancialRecruitmentConsultantsPage() {
  return (
    <section className="mt-[90px] flex min-h-screen w-full flex-col gap-10 md:mt-[80px]">
      <FrcTestSection />
      <FrcTopSection />
      <FrcMiddleSectionOne />
      <FrcMiddleSectionTwo />
      <FrcMiddleSectionThree />
      <FrcMiddleSectionHowHelp />
      <FrcMiddleSectionFour />
      <FrcMiddleSectionFive />
      <FrcMiddleSectionSix />
      <FrcMiddleSectionSeven />
      <FrcBottomSection />
    </section>
  );
}
