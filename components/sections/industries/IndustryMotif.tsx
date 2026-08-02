import type { IndustryConfig } from "@/lib/industries";
import { INDUSTRY_ICONS } from "@/components/sections/industries/industryIcons";

interface IndustryMotifProps {
  config: IndustryConfig;
  totalCount: number;
}

export function IndustryMotif({ config, totalCount }: IndustryMotifProps) {
  const Icon = INDUSTRY_ICONS[config.icon];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px]">
      <div
        className="pointer-events-none absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(66,178,139,0.28) 0%, rgba(35,25,91,0.22) 55%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-[280px] flex-col items-center rounded-3xl border border-border/70 bg-white p-8 text-center shadow-xl">
          <span
            className="flex size-16 items-center justify-center rounded-2xl text-white"
            style={{
              background: "linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-green) 100%)",
            }}
          >
            <Icon className="size-8" aria-hidden />
          </span>

          <p className="mt-5 font-heading text-3xl font-semibold text-brand-blue">
            {totalCount}
          </p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            Client engagements in {config.label}
          </p>
        </div>
      </div>
    </div>
  );
}
