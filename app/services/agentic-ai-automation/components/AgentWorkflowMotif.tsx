import { Bot, CheckCheck, Workflow } from "lucide-react";

const NODES = [
  { icon: Workflow, label: "Trigger", tint: "blue" as const },
  { icon: Bot, label: "Agent", tint: "green" as const },
  { icon: CheckCheck, label: "Approval", tint: "blue" as const },
];

export function AgentWorkflowMotif() {
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
              Governed Workflow
            </span>
          </div>

          <div className="relative mt-4 flex items-center justify-between">
            <div
              className="pointer-events-none absolute top-1/2 right-4 left-4 h-0.5 -translate-y-1/2 bg-gradient-to-r from-brand-blue to-brand-green"
              aria-hidden
            />
            {NODES.map(({ icon: Icon, label, tint }) => (
              <div key={label} className="relative z-10 flex flex-col items-center gap-2">
                <div
                  className={
                    tint === "blue"
                      ? "flex size-11 items-center justify-center rounded-full border-2 border-brand-green bg-brand-blue-tint text-brand-blue shadow-sm"
                      : "flex size-11 items-center justify-center rounded-full border-2 border-brand-green bg-brand-green-tint text-brand-green shadow-sm"
                  }
                >
                  <Icon className="size-5" />
                </div>
                <p className="text-[10px] font-semibold text-brand-blue">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-brand-offwhite p-3">
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Human approval required before posting or customer-facing action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
