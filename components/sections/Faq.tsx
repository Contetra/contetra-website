import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, type FaqItem } from "@/lib/content";
import { renderRichText } from "@/lib/utils copy";
import { ScrollReveal } from "../ui/ScrollReveal";

interface FaqAccordionProps {
  heading: string;
  items: FaqItem[];
  /** Expand the first FAQ item on initial render instead of starting fully collapsed. */
  openFirstByDefault?: boolean;
}

export function FaqAccordion({ heading, items, openFirstByDefault }: FaqAccordionProps) {
  return (
    <>
      <ScrollReveal>
        <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
          {heading}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="mt-10">
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={openFirstByDefault ? ["0"] : undefined}
        >
          {items.map((faq, i) => (
            <AccordionItem key={faq.question} value={String(i)}>
              <AccordionTrigger className="font-heading text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {renderRichText(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </>
  );
}

export function Faq() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FaqAccordion heading="Homepage FAQs" items={faqs} openFirstByDefault />
      </div>
    </section>
  );
}
