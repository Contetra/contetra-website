
import type { EngagementStep } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";
import { AnimatedLine } from "./AnimatedLine";

interface EngagementStepperProps {
  heading: string;
  steps: EngagementStep[];
}

export function EngagementStepper({ heading, steps }: EngagementStepperProps) {
  const rows = [steps.slice(0, 3), steps.slice(3, 6)];

  return (
    <div>
      <ScrollReveal>
        <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
          {heading}
        </h2>
      </ScrollReveal>

      <div className="relative mt-16 flex flex-col gap-10">
        <AnimatedLine
          axis="y"
          className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-blue to-brand-green lg:hidden"
        />

        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-6"
          >
            <AnimatedLine
              axis="x"
              className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-brand-blue to-brand-green lg:block"
            />

            {row.map((step, i) => {
              const stepNumber = rowIndex * 3 + i + 1;
              return (
                <ScrollReveal
                  key={step.title}
                  delay={i * 0.1}
                  className="relative flex gap-4 lg:flex-1 lg:flex-col lg:items-start lg:gap-5"
                >
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-green bg-white text-brand-blue shadow-sm">
                    <step.icon className="size-5" />
                  </div>
                  <p className="max-w-[15rem] text-sm leading-relaxed text-muted-foreground lg:max-w-[13rem]">
                    <span className="mb-1 block font-heading text-xs font-semibold uppercase tracking-wide text-brand-green">
                      Step {stepNumber} · {step.title}
                    </span>
                    {step.body}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
