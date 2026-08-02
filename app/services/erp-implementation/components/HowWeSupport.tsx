
import { erpImplementationService } from "@/app/services/erp-implementation/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function HowWeSupport() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="How Contetra supports the ERP lifecycle"
          items={erpImplementationService.howWeSupport}
          tint="green"
        />
      </div>
    </section>
  );
}
