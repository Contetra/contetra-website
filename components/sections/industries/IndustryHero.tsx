
import type { CaseStudy } from "@/lib/case-studies";
import { getVerticalCounts, type IndustryConfig } from "@/lib/industries";
import { IndustryMotif } from "@/components/sections/industries/IndustryMotif";
import { IndustryStatsStrip } from "@/components/sections/industries/IndustryStatsStrip";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface IndustryHeroProps {
  config: IndustryConfig;
  records: CaseStudy[];
}

export function IndustryHero({ config, records }: IndustryHeroProps) {
  const verticalCounts = getVerticalCounts(records);

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(66,178,139,0.18) 0%, rgba(35,25,91,0.12) 60%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-5 pb-10 sm:px-6 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-8 lg:pb-16">
        <ScrollReveal className="order-last lg:order-first">
          <span className="inline-flex items-center rounded-full bg-brand-green-tint px-3 py-1 text-xs font-semibold tracking-wide text-brand-green uppercase">
            Industries
          </span>

          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-brand-blue sm:text-5xl lg:text-[3.25rem]">
            {config.label}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {config.blurb}
          </p>

          <IndustryStatsStrip total={records.length} verticalCounts={verticalCounts} />
        </ScrollReveal>

        <ScrollReveal className="order-first lg:order-last" delay={0.1} y={20}>
          <IndustryMotif config={config} totalCount={records.length} />
        </ScrollReveal>
      </div>
    </section>
  );
}
