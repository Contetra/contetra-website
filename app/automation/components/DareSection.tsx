"use client";

import { Icon } from "./Icons";
import { CountUp, MagneticButton, Reveal, SectionHeader, SectionShell, TiltCard } from "./Primitives";

const stats = [
  { icon: "clock", value: 14, suffix: "", label: "days to working automation" },
  { icon: "banknote", value: 0, suffix: "$", label: "for your first POC" },
  { icon: "presentation", value: 0, suffix: "", label: "slide decks harmed" },
];

export function DareSection({ onOpenLead }: { onOpenLead: () => void }) {
  return (
    <SectionShell id="dare" className="bg-slate-950">
      <SectionHeader title="The 14-Day Dare" />
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <Reveal>
          <div className="max-w-2xl space-y-6 text-lg leading-9 text-slate-300">
            <p>
              Give us your ugliest process. The 47-tab spreadsheet. The CRM nobody
              updates. The report that eats every Monday. The follow-ups that slip
              through every single week.
            </p>
            <p>
              In 14 days, we&apos;ll hand back a working automation. Free. No deck, no
              discovery phase that lasts a quarter, no phase 1 scoping document.
            </p>
            <p>
              If it works, we run it for you. If it doesn&apos;t, you&apos;ve lost nothing and
              gained a very honest conversation about your processes.
            </p>
          </div>
          <MagneticButton onClick={onOpenLead} className="mt-8">
            Dare us <span aria-hidden="true">-&gt;</span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => (
              <TiltCard key={stat.label}>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
                    <Icon name={stat.icon} />
                  </span>
                  <div>
                    <p className="text-4xl font-black text-white">
                      {stat.suffix === "$" ? "$" : ""}
                      <CountUp value={stat.value} />
                      {stat.suffix !== "$" ? stat.suffix : ""}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                </div>
                {index === 2 ? (
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-rose-300/70 to-transparent" />
                ) : null}
              </TiltCard>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal delay={180} className="mt-14">
        <div className="relative mx-auto max-w-4xl rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
          <div className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300" />
          <div className="relative grid grid-cols-3 text-center text-sm font-semibold text-white">
            {["Day 0: show us", "Day 7: prototype live", "Day 14: working output"].map((label) => (
              <span key={label} className="mx-auto rounded-full border border-white/10 bg-slate-950 px-3 py-2">
                {label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
