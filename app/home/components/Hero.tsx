import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MascotOrbit } from "./MascotOrbit";
import { hero } from "./content"
import { primaryCta } from "@/lib/nav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { renderWithBold } from "@/lib/utils copy";

export function Hero() {
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

      <div className="relative mx-auto max-w-7xl px-4 pt-5 pb-[2.4rem] sm:px-6 md:pb-[3.2rem] lg:px-8 lg:pb-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <ScrollReveal className="order-first lg:-translate-y-[15px] lg:order-last" y={20}>
            <MascotOrbit />
          </ScrollReveal>

          <ScrollReveal className="order-last lg:order-first" delay={0.1}>
            <span className="inline-flex items-center rounded-full bg-brand-green-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
              {hero.kicker}
            </span>

            <h1 className="mt-3 font-heading uppercase leading-[1.05] tracking-tight text-brand-blue">
              <span className="block text-[2.583rem] font-bold sm:text-[3.333rem] lg:text-[3.583rem]">
                {hero.title}
              </span>
              <span className="block whitespace-nowrap text-[1.75rem] font-bold sm:text-[2.25rem] lg:text-[2.4rem]">
                {hero.titleLine2}
              </span>
              <span className="mt-1 block font-heading text-xl font-semibold normal-case leading-tight text-brand-green sm:text-2xl">
                {hero.subtitle}
              </span>
            </h1>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {hero.paragraphs.map((p) => (
                <p key={p}>{renderWithBold(p)}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-6 flex flex-col items-center text-center" delay={0.2}>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-nowrap">
            <Link href={primaryCta.href} className={cn(buttonVariants({ size: "xl" }), "whitespace-nowrap")}>
              {hero.primaryCta}
            </Link>
            <Link
              href="#transformation-decision"
              className={cn(
                buttonVariants({ variant: "brand-outline", size: "xl" }),
                "group whitespace-nowrap"
              )}
            >
              {hero.secondaryCta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            {hero.microcopy}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
