import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { agenticAiSubPages } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const assessmentPage = agenticAiSubPages.find(
  (p) => p.slug === "automation-opportunity-assessment"
)!;
const executionPages = agenticAiSubPages.filter(
  (p) => p.slug !== "automation-opportunity-assessment"
);

export function ExploreSubPages() {
  return (
    <section className="bg-brand-offwhite py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Explore in detail
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05} className="mt-8">
          <h3 className="font-heading text-sm font-semibold text-brand-blue">Start here</h3>
        </ScrollReveal>
        <div className="mt-4">
          <ScrollReveal>
            <Link
              href={`/services/agentic-ai-automation/${assessmentPage.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-brand-blue/15 bg-white px-6 py-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue-tint text-brand-blue">
                <assessmentPage.motifIcon className="size-6" aria-hidden />
              </span>
              <span>
                <span className="block font-heading text-base font-semibold text-brand-blue">
                  {assessmentPage.breadcrumbLabel}
                </span>
                <span className="mt-0.5 block text-sm text-muted-foreground">
                  {assessmentPage.hero.positioningLine}
                </span>
              </span>
              <ArrowRight className="ml-auto size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand-green" />
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.05} className="mt-10">
          <h3 className="font-heading text-sm font-semibold text-brand-blue">
            Then execute across
          </h3>
        </ScrollReveal>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {executionPages.map(({ slug, breadcrumbLabel, motifIcon: Icon }, i) => (
            <ScrollReveal key={slug} delay={i * 0.05}>
              <Link
                href={`/services/agentic-ai-automation/${slug}`}
                className="group flex h-full items-center gap-3 rounded-2xl border border-border/70 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-tint text-brand-blue">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="font-heading text-sm font-semibold text-brand-blue">
                  {breadcrumbLabel}
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand-green" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
