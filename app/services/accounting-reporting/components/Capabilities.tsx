
import { accountingReportingService } from "@/app/services/accounting-reporting/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function Capabilities() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Accounting and Reporting Advisory Capabilities"
          items={accountingReportingService.capabilities}
          tint="green"
        />
      </div>
    </section>
  );
}
