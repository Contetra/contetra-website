import { cfoFpaService } from "../content";
import { EngagementStepper } from "@/components/ui/EngagementStepper";

export function EngagementModel() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <EngagementStepper
          heading="Our engagement model"
          steps={cfoFpaService.engagementModel}
        />
      </div>
    </section>
  );
}
