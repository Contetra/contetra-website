import { Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VerticalCount } from "@/lib/industries";
import { VERTICAL_META } from "@/components/sections/industries/verticalMeta";

interface IndustryStatsStripProps {
  total: number;
  verticalCounts: VerticalCount[];
}

export function IndustryStatsStrip({ total, verticalCounts }: IndustryStatsStripProps) {
  return (
    <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue-tint px-4 py-3">
        <dt className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-brand-blue uppercase">
          <Users className="size-3.5" aria-hidden />
          Case studies
        </dt>
        <dd className="mt-1 font-heading text-2xl font-semibold text-brand-blue">{total}</dd>
      </div>

      {verticalCounts.map(({ category, count }) => {
        const meta = VERTICAL_META[category];
        return (
          <div
            key={category}
            className={cn("rounded-2xl border px-4 py-3", meta.border, meta.bg)}
          >
            <dt
              className={cn(
                "flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase",
                meta.text
              )}
            >
              <meta.Icon className="size-3.5" aria-hidden />
              {meta.label}
            </dt>
            <dd className={cn("mt-1 font-heading text-2xl font-semibold", meta.text)}>
              {count}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
