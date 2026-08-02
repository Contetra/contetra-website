
import { ipoReadinessPage } from "@/app/services/fractional-cfo-fpa/ipo-readiness/content";
import { EngagementStepper } from "@/components/ui/EngagementStepper";

export function PhasedProgramme() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <EngagementStepper
          heading="A phased readiness programme"
          steps={ipoReadinessPage.phasedProgramme}
        />
      </div>
    </section>
  );
}
