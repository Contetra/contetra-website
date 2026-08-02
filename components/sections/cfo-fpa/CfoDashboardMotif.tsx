import { PieChart, TrendingUp, Wallet } from "lucide-react";

const BARS = [40, 65, 50, 85, 60, 95];

export function CfoDashboardMotif() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px]">
      <div
        className="pointer-events-none absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(66,178,139,0.28) 0%, rgba(35,25,91,0.22) 55%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative flex h-full w-full items-center justify-center">
        <div className="w-full max-w-[280px] rounded-2xl border border-border/70 bg-white p-5 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-green">
              Cash Position
            </span>
            <TrendingUp className="size-4 text-brand-green" />
          </div>

          <div className="mt-4 flex h-20 items-end gap-1.5">
            {BARS.map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-blue to-brand-green"
                style={{ height: `${height}%`, opacity: 0.55 + (i / BARS.length) * 0.45 }}
              />
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-brand-blue-tint p-3">
              <div className="flex items-center gap-1.5 text-brand-blue">
                <Wallet className="size-3.5" />
                <span className="text-[10px] font-semibold uppercase tracking-wide">
                  Working Capital
                </span>
              </div>
              <p className="mt-1 font-heading text-sm font-semibold text-brand-blue">
                On Track
              </p>
            </div>
            <div className="rounded-xl bg-brand-green-tint p-3">
              <div className="flex items-center gap-1.5 text-brand-green">
                <PieChart className="size-3.5" />
                <span className="text-[10px] font-semibold uppercase tracking-wide">
                  Margin Mix
                </span>
              </div>
              <p className="mt-1 font-heading text-sm font-semibold text-brand-green">
                Reviewed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
