"use client";

import { Reveal, SectionHeader, SectionShell, TiltCard } from "./Primitives";

const steps = [
  {
    day: "Day 0",
    title: "Show us",
    copy: "One call. You walk us through the process, we tell you what's automatable and what the ROI looks like. No 40-page assessment.",
  },
  {
    day: "Days 1-14",
    title: "We build",
    copy: "Our team designs, builds, and tests on phinite.ai with proper access controls, audit trails, and your data staying yours.",
  },
  {
    day: "Day 15 ->",
    title: "We run it",
    copy: "Monitoring, fixes, improvements, support. One monthly subscription. Your team gets the output; we keep the machinery humming.",
  },
];

export function HowItWorks() {
  return (
    <SectionShell id="how-it-works" className="bg-slate-950">
      <SectionHeader
        title="You don't buy software. You get a running automation."
        subtitle="Most automation projects die between the demo and the go-live. Ours don't, because we never hand you a toolkit and wish you luck."
      />
      <div className="relative grid gap-6 lg:grid-cols-3">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 lg:block" />
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 100}>
            <TiltCard className="h-full">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                  {step.day}
                </span>
                <span className="flex h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)] motion-safe:animate-pulse" />
              </div>
              <h3 className="text-2xl font-black text-white">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{step.copy}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-12 max-w-4xl rounded-[8px] border border-white/10 bg-white/[0.045] p-6 text-center text-lg font-semibold leading-8 text-white">
        Service-as-a-software. Automation-as-a-Service. Like having an automation
        team on staff, minus the hiring, the tooling, and the &quot;who maintains this
        when Roshni leaves&quot; problem.
      </Reveal>
    </SectionShell>
  );
}
