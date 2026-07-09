"use client";

import { useState } from "react";
import { IconBadge, MagneticButton, Reveal, SectionHeader, SectionShell, TiltCard } from "./Primitives";
import { useCaseTabs } from "./data";

export function UseCaseTabs({ onOpenLead }: { onOpenLead: () => void }) {
  const [active, setActive] = useState(0);
  const tab = useCaseTabs[active];

  return (
    <SectionShell id="use-cases" className="bg-[#030814]">
      <SectionHeader
        eyebrow="Start where it hurts most."
        title="Pick your department."
        subtitle="These aren't hypotheticals. They're patterns we build every week."
      />
      <Reveal>
        <div
          role="tablist"
          aria-label="Automation use case departments"
          className="grid overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] p-1 sm:grid-cols-4"
        >
          {useCaseTabs.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={`relative min-h-12 px-3 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 ${
                active === index ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {active === index ? (
                <span className="absolute inset-0 rounded-[6px] bg-gradient-to-r from-cyan-300/20 to-violet-400/20 shadow-[0_0_28px_rgba(34,211,238,0.18)]" />
              ) : null}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <div key={tab.id} className="mt-8 grid gap-4 md:grid-cols-2">
        {tab.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 70}>
            <TiltCard className="h-full">
              <IconBadge icon={card.icon} />
              <h3 className="text-xl font-black text-white">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{card.description}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <MagneticButton onClick={onOpenLead} variant="secondary">
          Don&apos;t see your process? Tell us your ugliest one <span aria-hidden="true">-&gt;</span>
        </MagneticButton>
      </Reveal>
    </SectionShell>
  );
}
