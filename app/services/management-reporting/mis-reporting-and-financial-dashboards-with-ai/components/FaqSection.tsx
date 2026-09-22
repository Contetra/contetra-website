import { FaqAccordion } from "@/components/sections/Faq";
import { faqItems } from "./faq-data";

export function FaqSection() {
  return (
    <section className="bg-[#f7f8fb] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          heading="MIS Reporting FAQs"
          items={faqItems}
          openFirstByDefault
        />
      </div>
    </section>
  );
}
