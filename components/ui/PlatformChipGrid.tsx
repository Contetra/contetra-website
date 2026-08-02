
import type { PlatformItem } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

interface PlatformChipGridProps {
  heading: string;
  intro: string;
  items: PlatformItem[];
}

export function PlatformChipGrid({ heading, intro, items }: PlatformChipGridProps) {
  return (
    <>
      <ScrollReveal>
        <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {intro}
        </p>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.05}>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-border/70 bg-white p-4 shadow-sm">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue-tint text-brand-blue">
                <item.icon className="size-4" />
              </div>
              <p className="text-sm font-medium leading-snug text-foreground">{item.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
