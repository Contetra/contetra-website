
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { whyContetra } from "./content";

export function WhyContetra() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid heading="Our finance business transformation model is built on four principles that keep advisory grounded in outcomes, not tools." items={whyContetra} tint="green" />
      </div>
    </section>
  );
}
