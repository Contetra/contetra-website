import { FaqAccordion } from "@/components/sections/Faq";
import { ipoReadinessPage } from "@/app/services/fractional-cfo-fpa/ipo-readiness/content";

export function FaqSection() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FaqAccordion heading="Recommended FAQs" items={ipoReadinessPage.faqs} openFirstByDefault />
      </div>
    </section>
  );
}
