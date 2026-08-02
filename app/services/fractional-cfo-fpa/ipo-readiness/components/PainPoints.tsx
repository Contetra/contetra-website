
import { ipoReadinessPage } from "@/app/services/fractional-cfo-fpa/ipo-readiness/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function PainPoints() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Why companies discover readiness problems too late"
          items={ipoReadinessPage.painPoints}
          tint="blue"
          hoverEffect
        />
      </div>
    </section>
  );
}
