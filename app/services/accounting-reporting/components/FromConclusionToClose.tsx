
import { accountingReportingService } from "@/app/services/accounting-reporting/content";
import { EditorialStatement } from "@/components/ui/EditorialStatement";

export function FromConclusionToClose() {
  const { fromConclusionToClose } = accountingReportingService;

  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <EditorialStatement
          heading="From Technical Conclusion to Audit-Ready Reporting"
          paragraphs={[fromConclusionToClose.paragraph1, fromConclusionToClose.paragraph2]}
        />
      </div>
    </section>
  );
}
