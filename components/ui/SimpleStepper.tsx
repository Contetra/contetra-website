
import type { Step } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";
import { AnimatedLine } from "./AnimatedLine";

interface SimpleStepperProps {
  heading: string;
  steps: Step[];
}

/** Single-row numbered stepper for short sequences (e.g. a 4-step "how we work"). */
export function SimpleStepper({ heading, steps }: SimpleStepperProps) {
  return (
    <div>
      <ScrollReveal>
        <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
          {heading}
        </h2>
      </ScrollReveal>

      <div className="relative mt-16 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
        <AnimatedLine
          axis="y"
          className="absolute top-2 bottom-2 left-6 w-0.5 bg-gradient-to-b from-brand-blue to-brand-green lg:hidden"
        />
        <AnimatedLine
          axis="x"
          className="absolute top-6 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-brand-blue to-brand-green lg:block"
        />

        {steps.map((step, i) => (
          <ScrollReveal
            key={step.body}
            delay={i * 0.12}
            className="relative flex gap-4 lg:flex-1 lg:flex-col lg:items-start lg:gap-5"
          >
            <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-green bg-white text-brand-blue shadow-sm">
              <step.icon className="size-5" />
            </div>
            <p className="max-w-[15rem] text-sm leading-relaxed text-muted-foreground lg:max-w-[13rem]">
              <span className="mb-1 block font-heading text-xs font-semibold tracking-wide text-brand-green uppercase">
                Step {i + 1}
              </span>
              {step.body}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
