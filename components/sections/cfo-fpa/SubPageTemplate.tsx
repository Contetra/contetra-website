import type { ReactNode } from "react";
import { CfoDashboardMotif } from "@/components/sections/cfo-fpa/CfoDashboardMotif";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { primaryCta as bookingCta } from "@/lib/nav";
import type { SubPageContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { SimpleStepper } from "@/components/ui/SimpleStepper";

interface SubPageTemplateProps {
  content: SubPageContent;
  /** Where the closing CTA's secondary button should point. */
  secondaryCtaHref: string;
  /** Breadcrumb + hero trail up to (not including) this page, e.g. Services › ERP Transformation. */
  breadcrumbTrail: { label: string; href: string }[];
  /** Hero visual. Defaults to the finance-dashboard motif used by the CFO/FP&A sub-pages. */
  motif?: ReactNode;
}

/** Shared compact template for one-off service sub-pages (hero, 2x2 "what we help", 4-step "how we work", closing CTA). */
export function SubPageTemplate({
  content,
  secondaryCtaHref,
  breadcrumbTrail,
  motif = <CfoDashboardMotif />,
}: SubPageTemplateProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(66,178,139,0.18) 0%, rgba(35,25,91,0.12) 60%, transparent 75%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-5 pb-16 sm:px-6 md:pb-20 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-8 lg:pb-24">
          <ScrollReveal className="order-first lg:order-last" y={20}>
            {motif}
          </ScrollReveal>

          <ScrollReveal className="order-last lg:order-first" delay={0.1}>
            <Breadcrumb items={[...breadcrumbTrail, { label: content.breadcrumbLabel }]} />

            <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-brand-blue sm:text-5xl lg:text-[3.25rem]">
              {content.hero.title}
            </h1>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {content.hero.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <p className="mt-6 rounded-xl border-l-4 border-brand-green bg-brand-green-tint/50 px-4 py-3 text-sm font-medium leading-relaxed text-brand-blue sm:text-base">
              {content.hero.positioningLine}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-offwhite py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <IconCardGrid heading="What we help you do" items={content.whatWeHelp} tint="green" />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SimpleStepper heading="How we work" steps={content.howWeWork} />
        </div>
      </section>

      <ClosingCta
        heading={content.closingCta.heading}
        body={content.closingCta.body}
        primaryCta={{ label: content.closingCta.primaryCta, href: bookingCta.href }}
        secondaryCta={{ label: content.closingCta.secondaryCta, href: secondaryCtaHref }}
        form={content.closingCta.form}
      />
    </>
  );
}
