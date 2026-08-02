import { cfoFpaService } from "../content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function WhyContetraCfo() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Why Contetra for CFO and FP&A support"
          items={cfoFpaService.whyContetra}
          tint="green"
        />
      </div>
    </section>
  );
}
