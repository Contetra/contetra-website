import { SbfmsMiddleSectionOne } from "./components/sbfms-middle-section-one";
import { SbfmsMiddleSectionFour } from "./components/sbfms-middle-section-four";
import { SbfmsBottomSection } from "./components/sbfms-bottom-section";
import { SbfmsMiddleSectionFive } from "./components/sbfms-middle-section-five";
import { SbfmsMiddleSectionThree } from "./components/sbfms-middle-section-three";
import { SbfmsMiddleSectionTwo } from "./components/sbfms-middle-section-two";
import { SbfmsReviewSheetProvider } from "./components/sbfms-review-sheet-provider";
import { SbfmsTopSection } from "./components/sbfms-top-section";
import { LogoCarousel } from "@/components/common/logo-carousel";

export default function StrategicBusinessFinancialManagementSolutions() {
  return (
    <SbfmsReviewSheetProvider>
      <section className="mt-[70px] flex min-h-screen w-full flex-col gap-10 md:mt-[70px]">
        <SbfmsTopSection />
        <LogoCarousel />
        <SbfmsMiddleSectionOne />
        <SbfmsMiddleSectionTwo />
        <SbfmsMiddleSectionThree />
        <SbfmsMiddleSectionFour />
        <SbfmsMiddleSectionFive />
        <SbfmsBottomSection />
      </section>
    </SbfmsReviewSheetProvider>
  );
}
