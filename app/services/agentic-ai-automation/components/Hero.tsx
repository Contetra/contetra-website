import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AgentWorkflowMotif } from "@/app/services/agentic-ai-automation/components/AgentWorkflowMotif";
import { agenticAiService } from "@/app/services/agentic-ai-automation/content";
import { primaryCta as bookingCta } from "@/lib/nav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ErpForm } from "../../erp-implementation/components/erp-form";

export function Hero() {
  const { hero } = agenticAiService;

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
          <AgentWorkflowMotif />
        </ScrollReveal>

        <ScrollReveal className="order-last lg:order-first" delay={0.1}>
          <span className="inline-flex items-center rounded-full bg-brand-green-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
            {hero.eyebrow}
          </span>

          <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-brand-blue sm:text-5xl lg:text-[3.25rem]">
            {hero.title}
          </h1>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {hero.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-blue/15 bg-brand-blue-tint p-6 sm:p-8">
            <p className="font-heading text-lg font-semibold text-brand-blue sm:text-xl">
              {hero.callout.kicker}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {hero.callout.subline}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <ErpForm
                trigger={
                  <Button
                    variant="outline"
                    className={cn(
                      buttonVariants({ size: "xl" }),
                      "whitespace-nowrap",
                    )}
                  >
                    {hero.callout.primaryCta}
                  </Button>
                }
              />
              <Link
                href="/solutions/finance-automation"
                className={cn(
                  buttonVariants({ variant: "brand-outline", size: "xl" }),
                  "group whitespace-nowrap",
                )}
              >
                {hero.callout.secondaryCta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
