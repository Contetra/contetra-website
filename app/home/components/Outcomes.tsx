
import { OutcomeCarousel } from "./OutcomeCarousel";
import {
  outcomes,
  outcomesIntro,
  outcomesTestimonialsHeading,
  outcomesTestimonialsIntro,
} from "./content";
import { CheckList } from "@/components/ui/CheckList";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { selectedOutcomes } from "@/lib/outcomes";

export function Outcomes() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CheckList
          heading="Selected business outcomes"
          intro={outcomesIntro}
          items={outcomes}
        />

        <ScrollReveal delay={0.1} className="mt-16">
          <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
            {outcomesTestimonialsHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {outcomesTestimonialsIntro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10">
          <OutcomeCarousel outcomes={selectedOutcomes} />
        </ScrollReveal>
      </div>
    </section>
  );
}
