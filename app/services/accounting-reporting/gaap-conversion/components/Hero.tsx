import type { ReactNode } from "react";
import { CfoDashboardMotif } from "@/components/sections/cfo-fpa/CfoDashboardMotif";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface HeroProps {
  title: string;
  paragraphs: string[];
  positioningLine: string;
  motif?: ReactNode;
}

export function Hero({
  title,
  paragraphs,
  positioningLine,
  motif = <CfoDashboardMotif />,
}: HeroProps) {
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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-5 pb-16 sm:px-6 md:pb-20 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-8 lg:pb-24">
        <ScrollReveal className="order-first lg:order-last" y={20}>
          {motif}
        </ScrollReveal>

        <ScrollReveal className="order-last lg:order-first" delay={0.1}>
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-brand-blue sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <p className="mt-6 rounded-xl border-l-4 border-brand-green bg-brand-green-tint/50 px-4 py-3 text-sm font-medium leading-relaxed text-brand-blue sm:text-base">
            {positioningLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
