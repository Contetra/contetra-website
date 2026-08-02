import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface CheckListProps {
  heading: string;
  intro?: string;
  items: string[];
  itemBackground?: "offwhite" | "white";
}

export function CheckList({
  heading,
  intro,
  items,
  itemBackground = "offwhite",
}: CheckListProps) {
  return (
    <>
      <ScrollReveal>
        <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
          {heading}
        </h2>
        {intro && (
          <p className="mt-3 text-sm italic text-muted-foreground">{intro}</p>
        )}
      </ScrollReveal>

      <ul className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {items.map((item, i) => (
          <ScrollReveal
            key={item}
            as="li"
            delay={i * 0.06}
            className={cn(
              "flex items-start gap-3 rounded-2xl border border-border/70 p-5",
              itemBackground === "offwhite" ? "bg-brand-offwhite/60" : "bg-white"
            )}
          >
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-green" />
            <span className="text-sm leading-relaxed text-foreground">{item}</span>
          </ScrollReveal>
        ))}
      </ul>
    </>
  );
}
