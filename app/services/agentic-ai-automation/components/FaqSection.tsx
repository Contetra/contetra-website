import { FaqAccordion } from "@/components/sections/Faq";
import { agenticAiService } from "@/app/services/agentic-ai-automation/content";

export function FaqSection() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          heading="Frequently Asked Questions"
          items={agenticAiService.faqs}
          openFirstByDefault
        />
      </div>
    </section>
  );
}
