import { cfoFpaService } from "../content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function WhenToCall() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="When the finance function needs to become a management function"
          items={cfoFpaService.whenToCall}
          tint="blue"
          hoverEffect
        />
      </div>
    </section>
  );
}
