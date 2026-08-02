import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";
import { VERTICAL_META } from "@/components/sections/industries/verticalMeta";

interface VerticalBadgeProps {
  category: CaseStudy["category"];
  className?: string;
}

export function VerticalBadge({ category, className }: VerticalBadgeProps) {
  const meta = VERTICAL_META[category];
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        meta.bg,
        meta.text,
        className
      )}
    >
      <meta.Icon className="size-3.5" aria-hidden />
      {meta.label}
    </span>
  );
}
