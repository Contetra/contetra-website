"use client";

import { metrics } from "./data";
import { CountUp, Reveal, SectionShell, TiltCard } from "./Primitives";

export function MetricsSection() {
  return (
    <SectionShell className="bg-slate-950">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 70}>
            <TiltCard className="h-full overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(135deg,transparent_20%,rgba(34,211,238,0.22)_20%,rgba(34,211,238,0.22)_24%,transparent_24%,transparent_45%,rgba(168,85,247,0.18)_45%,rgba(168,85,247,0.18)_49%,transparent_49%)] opacity-40" />
              <p className="relative text-4xl font-black text-white">
                <CountUp value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="relative mt-3 text-sm leading-6 text-slate-300">{metric.label}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
