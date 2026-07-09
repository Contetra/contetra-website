"use client";

import { integrations } from "./data";
import { Reveal, SectionHeader, SectionShell } from "./Primitives";

export function IntegrationMarquee() {
  const repeated = [...integrations, ...integrations];
  return (
    <SectionShell className="bg-[#030814]">
      <SectionHeader
        title="Plays nice with everything you already use."
        subtitle="Your CRM, ERP, inbox, chat, spreadsheets. Automations sit on top of your existing stack. 600+ integrations, no rip-and-replace."
      />
      <Reveal>
        <div className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-3 motion-safe:animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
            {repeated.map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="group inline-flex min-w-36 items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-100 hover:shadow-[0_0_28px_rgba(34,211,238,0.16)]"
              >
                <span className="h-2 w-2 rounded-full bg-slate-500 transition group-hover:bg-cyan-300" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
