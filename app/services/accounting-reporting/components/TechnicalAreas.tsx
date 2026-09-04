
import { accountingReportingService } from "@/app/services/accounting-reporting/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function TechnicalAreas() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Technical Accounting Standards We Support"
          items={accountingReportingService.technicalAreas}
          tint="green"
        />
      </div>
    </section>
  );
}
