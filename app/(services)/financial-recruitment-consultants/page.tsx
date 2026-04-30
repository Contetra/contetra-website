import { FrcTopSection } from "./components/frc-top-section";
import { FrcMiddleSectionOne } from "./components/frc-middle-section-one";
import { FrcMiddleSectionTwo } from "./components/frc-middle-section-two";
import { FrcMiddleSectionThree } from "./components/frc-middle-section-three";

export default function FinancialRecruitmentConsultantsPage() {
  return (
    <section className="mt-[90px] flex min-h-screen w-full flex-col gap-10 md:mt-[80px]">
      <FrcTopSection />
      <FrcMiddleSectionOne />
      <FrcMiddleSectionTwo />
      <FrcMiddleSectionThree />
    </section>
  );
}
