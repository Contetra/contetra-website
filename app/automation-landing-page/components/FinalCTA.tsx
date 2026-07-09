"use client";

import { MagneticButton, Reveal, SectionShell } from "./Primitives";

export function FinalCTA({ onOpenLead }: { onOpenLead: () => void }) {
  return (
    <SectionShell className="bg-slate-950">
      <Reveal>
        <div className="relative overflow-hidden rounded-[8px] border border-cyan-300/25 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_34rem),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 text-center shadow-[0_0_90px_rgba(34,211,238,0.18)] sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
          {["CRM updates", "Reports", "Reconciliations", "Follow-ups"].map((item, index) => (
            <span
              key={item}
              className="absolute hidden rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-semibold text-slate-300 motion-safe:animate-[float_5s_ease-in-out_infinite] md:block"
              style={{
                left: `${8 + index * 24}%`,
                top: index % 2 ? "70%" : "18%",
                animationDelay: `${index * 0.35}s`,
              }}
            >
              {item}
            </span>
          ))}
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              That process won&apos;t fix itself.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              One call. One process. Fourteen days. Zero USD/INR/SGD/AED. The only
              thing you risk is finding out how much time your team&apos;s been losing.
            </p>
            <div className="mt-8">
              <MagneticButton onClick={onOpenLead}>Claim your free 14-day POC</MagneticButton>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Or just email us the messiest process you own:{" "}
              <a className="text-cyan-200 underline-offset-4 hover:underline" href="mailto:automations@contetra.com">
                automations@contetra.com
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
