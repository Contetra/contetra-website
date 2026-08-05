
import { erpImplementationService } from "@/app/services/digital-transformation/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function WhyUnderperform() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Why ERP programmes underperform"
          items={erpImplementationService.whyProgrammesUnderperform}
          tint="blue"
          hoverEffect
        />
      </div>
    </section>
  );
}
