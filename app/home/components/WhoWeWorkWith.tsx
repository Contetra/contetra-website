
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IndustryBadges } from "./IndustryBadges";
import { whoWeWorkWith } from "./content";

export function WhoWeWorkWith() {
  return (
    <section className="overflow-hidden bg-brand-offwhite py-20 sm:py-28">
      <div className="relative mx-auto flex min-h-[640px] max-w-7xl flex-col items-center justify-center px-4 text-center sm:min-h-[680px] sm:px-6 lg:min-h-[760px] lg:px-8">
        <IndustryBadges />

        <ScrollReveal className="relative z-10">
          <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
            Who we work with
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {whoWeWorkWith.body}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
