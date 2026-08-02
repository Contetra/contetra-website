
import { accountingReportingService } from "@/app/services/accounting-reporting/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function WhyContetraAccounting() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Why finance teams engage Contetra"
          items={accountingReportingService.whyContetra}
          tint="green"
        />
      </div>
    </section>
  );
}
