
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ClosingCta } from "@/components/sections/ClosingCta";
import { INDUSTRY_ICONS } from "@/components/sections/industries/industryIcons";
import { getIndustryCaseStudies, industries } from "@/lib/industries";
import { caseStudies } from "@/lib/case-studies";
import { primaryCta as bookingCta } from "@/lib/nav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";



export default function IndustriesOverviewPage() {
  return (
    <>


      <section className="bg-white pt-5 pb-10 sm:pb-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center rounded-full bg-brand-green-tint px-3 py-1 text-xs font-semibold tracking-wide text-brand-green uppercase">
              Industries
            </span>
            <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-brand-blue sm:text-5xl">
              Industry experience across {caseStudies.length} client engagements
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From plant floors to boardrooms, we bring sector-specific finance, ERP and
              reporting expertise. Explore case studies grouped by the industries we know best.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-offwhite py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((config, i) => {
              const count = getIndustryCaseStudies(config.slug).length;
              const Icon = INDUSTRY_ICONS[config.icon];
              return (
                <ScrollReveal key={config.slug} delay={i * 0.05}>
                  <Link
                    href={`/industries/${config.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="flex size-12 items-center justify-center rounded-2xl text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-green) 100%)",
                        }}
                      >
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <span className="rounded-full bg-brand-blue-tint px-2.5 py-1 text-xs font-semibold text-brand-blue">
                        {count} case studies
                      </span>
                    </div>

                    <h2 className="mt-5 font-heading text-xl font-semibold text-brand-blue">
                      {config.label}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {config.blurb}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                      View industry
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ClosingCta
        heading="See what we've done in your industry"
        body="Discuss your specific situation and we'll share the most relevant case studies and a recommended starting point."
        primaryCta={{ label: "Book a Transformation Consultation", href: bookingCta.href }}
        secondaryCta={{ label: "Browse All Case Studies", href: "/proof/case-studies" }}
      />
    </>
  );
}
