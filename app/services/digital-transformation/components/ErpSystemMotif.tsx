import { Database, GitBranch, LayoutDashboard, Plug } from "lucide-react";

const NODES = [
  { icon: Database, label: "Core ERP", tint: "blue" as const },
  { icon: Plug, label: "Integrations", tint: "green" as const },
  { icon: LayoutDashboard, label: "Reporting", tint: "green" as const },
  { icon: GitBranch, label: "Workflows", tint: "blue" as const },
];

export function ErpSystemMotif() {
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
              System Architecture
            </span>
          </div>

          <div className="relative mt-4 grid grid-cols-2 gap-3">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, transparent 48%, var(--brand-blue) 49%, var(--brand-green) 51%, transparent 52%)",
              }}
              aria-hidden
            />
            {NODES.map(({ icon: Icon, label, tint }) => (
              <div
                key={label}
                className={
                  tint === "blue"
                    ? "relative rounded-xl bg-brand-blue-tint p-3"
                    : "relative rounded-xl bg-brand-green-tint p-3"
                }
              >
                <Icon
                  className={
                    tint === "blue"
                      ? "size-4 text-brand-blue"
                      : "size-4 text-brand-green"
                  }
                />
                <p
                  className={
                    tint === "blue"
                      ? "mt-2 font-heading text-[11px] font-semibold text-brand-blue"
                      : "mt-2 font-heading text-[11px] font-semibold text-brand-green"
                  }
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
