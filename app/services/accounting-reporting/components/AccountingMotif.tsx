import { FileCheck, FileSpreadsheet, ScrollText } from "lucide-react";

const STATEMENTS = [
  { icon: ScrollText, label: "Policy Memo", tint: "blue" as const },
  { icon: FileSpreadsheet, label: "Reconciliation", tint: "green" as const },
];

export function AccountingMotif() {
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
              Financial Statements
            </span>
            <FileCheck className="size-4 text-brand-green" />
          </div>

          <div className="mt-4 space-y-2">
            {[100, 85, 92, 70].map((width, i) => (
              <div key={i} className="h-2.5 rounded-full bg-brand-offwhite">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green"
                  style={{ width: `${width}%`, opacity: 0.5 + (i / 4) * 0.5 }}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {STATEMENTS.map(({ icon: Icon, label, tint }) => (
              <div
                key={label}
                className={
                  tint === "blue"
                    ? "rounded-xl bg-brand-blue-tint p-3"
                    : "rounded-xl bg-brand-green-tint p-3"
                }
              >
                <Icon
                  className={
                    tint === "blue" ? "size-3.5 text-brand-blue" : "size-3.5 text-brand-green"
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
