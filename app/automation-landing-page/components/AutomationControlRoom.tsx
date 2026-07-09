"use client";

import { Reveal, SectionHeader, SectionShell } from "./Primitives";

const inputs = ["ERP", "CRM", "Inbox", "Spreadsheet", "Chat"];
const layer = ["Classify", "Extract", "Validate", "Route", "Draft", "Reconcile", "Alert"];
const outputs = ["Exceptions only", "Clean reports", "CRM updated", "Follow-ups sent", "Audit log generated"];
const chips = ["Live", "Monitored", "Human-in-the-loop", "Audit-ready", "PII protected"];

export function AutomationControlRoom() {
  return (
    <SectionShell id="security" className="bg-[#030814]">
      <SectionHeader title="From messy workflow to monitored AI automation." />
      <Reveal>
        <div className="relative rounded-[8px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_0_80px_rgba(79,70,229,0.16)] backdrop-blur sm:p-6">
          <div className="absolute inset-0 rounded-[8px] bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.13),transparent_35rem)]" />
          <div className="relative mb-6 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="relative grid gap-5 lg:grid-cols-[0.8fr_1.2fr_0.9fr]">
            <ControlColumn title="Input systems" items={inputs} />
            <div className="relative rounded-[8px] border border-cyan-300/20 bg-slate-950/70 p-4">
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
                {layer.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[8px] border border-white/10 bg-white/[0.05] p-4 text-center text-sm font-semibold text-white"
                  >
                    <span
                      className="mx-auto mb-3 block h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,1)] motion-safe:animate-pulse"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <ControlColumn title="Human-ready output" items={outputs} />
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

function ControlColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-slate-950/70 p-4">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{title}</p>
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-[8px] border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-slate-200">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
