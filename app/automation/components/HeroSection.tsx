"use client";

import { heroOutputs, heroTasks, trustLogos } from "./data";
import { MagneticButton, Reveal } from "./Primitives";

export function HeroSection({ onOpenLead }: { onOpenLead: () => void }) {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.22),transparent_34rem),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.18),transparent_30rem),linear-gradient(180deg,#020617,#07111f_45%,#020617)] px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--spot-x,50%)_var(--spot-y,35%),rgba(34,211,238,0.18),transparent_30rem)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {["First automation free", "Working output in 14 days", "We build + run it"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                >
                  {badge}
                </span>
              )
            )}
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your best people are doing their{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              worst work.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Reconciliations. CRM updates. Campaign reports. Follow-up emails. We
            build AI automations that take the grunt work off your team, and we run
            them for you. First one&apos;s free. Working in 14 days.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton onClick={onOpenLead}>Claim your free 14-day POC</MagneticButton>
            <MagneticButton href="#use-cases" variant="secondary">
              See it work in 3 minutes <span aria-hidden="true">-&gt;</span>
            </MagneticButton>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-400">
            Trusted by teams at {trustLogos.join(" · ")} · Powered by phinite.ai
          </p>
        </Reveal>

        <Reveal delay={120}>
          <AutomationDashboard />
        </Reveal>
      </div>
    </section>
  );
}

function AutomationDashboard() {
  return (
    <div
      data-cursor="active"
      className="relative rounded-[8px] border border-white/10 bg-white/[0.055] p-4 shadow-[0_0_90px_rgba(34,211,238,0.18)] backdrop-blur-xl sm:p-6"
    >
      <div className="absolute -inset-px rounded-[8px] bg-gradient-to-br from-cyan-300/30 via-transparent to-violet-400/30 opacity-70" />
      <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-slate-950/80 p-4">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Agent control</p>
            <p className="mt-1 text-sm font-semibold text-white">phinite.ai automation mesh</p>
          </div>
          <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            Live
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_0.8fr_1fr]">
          <TaskColumn title="Manual noise" items={heroTasks} tone="rose" />
          <div className="relative flex min-h-64 flex-col items-center justify-center rounded-[8px] border border-cyan-300/20 bg-cyan-300/[0.06]">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.18)_1px,transparent_1px)] bg-[size:18px_18px] opacity-50" />
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="absolute left-[-34%] h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,1)] motion-safe:animate-[packet_2.8s_linear_infinite]"
                style={{ top: `${24 + i * 16}%`, animationDelay: `${i * 0.45}s` }}
              />
            ))}
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-200/40 bg-slate-950 shadow-[0_0_55px_rgba(34,211,238,0.45)]">
              <div className="absolute inset-3 rounded-full border border-violet-300/30 motion-safe:animate-spin [animation-duration:9s]" />
              <div className="text-center">
                <p className="text-xl font-black text-white">AI</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">phinite</p>
              </div>
            </div>
            <div className="relative mt-5 flex flex-wrap justify-center gap-2 px-3">
              {["Audit trail", "RBAC", "PII safe", "Live monitoring", "Human review"].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-200"
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>
          <TaskColumn title="Human-ready output" items={heroOutputs} tone="emerald" />
        </div>
      </div>
    </div>
  );
}

function TaskColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "rose" | "emerald";
}) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-3">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{title}</p>
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-slate-900/80 p-3"
          >
            <span
              className={`h-2 w-2 rounded-full ${
                tone === "rose" ? "bg-rose-300" : "bg-emerald-300"
              } motion-safe:animate-pulse`}
            />
            <span className="text-sm text-slate-200">{item}</span>
            <span className="ml-auto font-mono text-[10px] text-slate-500">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
