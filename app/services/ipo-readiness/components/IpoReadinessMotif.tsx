import { CheckCircle2, CircleDashed, Gauge } from "lucide-react";

const WORKSTREAMS = [
  { label: "Technical accounting", done: true },
  { label: "Close & audit readiness", done: true },
  { label: "Internal controls", done: false },
  { label: "ERP & data architecture", done: false },
];

export function IpoReadinessMotif() {
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
              Readiness Score
            </span>
            <Gauge className="size-4 text-brand-green" />
          </div>

          <div className="mt-4 flex items-center gap-4">
            <div className="relative flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-blue-tint">
              <svg viewBox="0 0 36 36" className="absolute inset-0 size-16 -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="var(--brand-green)"
                  strokeWidth="3"
                  strokeDasharray="63 97"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-heading text-sm font-semibold text-brand-blue">65%</span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Gaps prioritised across accounting, controls, systems and reporting.
            </p>
          </div>

          <div className="mt-5 space-y-2">
            {WORKSTREAMS.map((w) => (
              <div key={w.label} className="flex items-center gap-2 rounded-lg bg-brand-offwhite px-3 py-2">
                {w.done ? (
                  <CheckCircle2 className="size-3.5 shrink-0 text-brand-green" />
                ) : (
                  <CircleDashed className="size-3.5 shrink-0 text-brand-blue/40" />
                )}
                <span className="text-[11px] font-medium text-foreground">{w.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
