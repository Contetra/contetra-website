import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { IconCard } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

interface IconCardGridProps {
  heading: string;
  intro?: string;
  items: IconCard[];
  tint: "blue" | "green";
  hoverEffect?: boolean;
  /** Show a small numeral badge (01, 02, ...) on each card, e.g. for ordered workstreams. */
  numbered?: boolean;
}

export function IconCardGrid({
  heading,
  intro,
  items,
  tint,
  hoverEffect = false,
  numbered = false,
}: IconCardGridProps) {
  const tintClasses =
    tint === "blue"
      ? "bg-brand-blue-tint text-brand-blue"
      : "bg-brand-green-tint text-brand-green";

  return (
    <>
      <ScrollReveal>
        <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
          {heading}
        </h2>
        {intro && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.08}>
            <Card
              className={cn(
                "relative h-full rounded-2xl border border-border/70 shadow-sm",
                hoverEffect &&
                  "group transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/40 hover:shadow-lg"
              )}
            >
              <CardContent className="flex h-full flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      "flex size-12 items-center justify-center rounded-xl",
                      tintClasses,
                      hoverEffect && "transition-transform duration-300 group-hover:scale-110"
                    )}
                  >
                    <item.icon className="size-6" aria-hidden />
                  </div>
                  {numbered && (
                    <span
                      className="font-heading text-sm font-semibold text-muted-foreground/50"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="static rounded-sm outline-none after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-brand-green/60"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                {item.href && (
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                )}
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
