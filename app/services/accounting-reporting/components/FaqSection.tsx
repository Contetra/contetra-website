import { FaqAccordion } from "@/components/sections/Faq";
import { accountingReportingService } from "@/app/services/accounting-reporting/content";

export function FaqSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          heading="Accounting and Reporting Advisory FAQs"
          items={accountingReportingService.faqs}
          openFirstByDefault
        />
      </div>
    </section>
  );
}
