
import { accountingReportingService } from "@/app/services/accounting-reporting/content";
import { EngagementStepper } from "@/components/ui/EngagementStepper";

export function EngagementSteps() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <EngagementStepper
          heading="How an engagement typically works"
          steps={accountingReportingService.engagementSteps}
        />
      </div>
    </section>
  );
}
