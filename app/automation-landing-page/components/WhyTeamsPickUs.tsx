"use client";

import { IconBadge, Reveal, SectionHeader, SectionShell, TiltCard } from "./Primitives";

const cards = [
  {
    icon: "chart",
    title: "Forged in finance.",
    copy: "We spent 10+ years automating for CFOs, where mostly accurate gets you fired and auditors check everything. 100+ clients, 250+ transformations. If our automations survive finance, your sales ops will be fine.",
  },
  {
    icon: "shield",
    title: "Enterprise-grade under the hood.",
    copy: "Powered by phinite.ai: bank-level encryption, full audit logs, role-based access, PII protection. Your IT and your auditors will actually like us.",
  },
  {
    icon: "clock",
    title: "14 days, not 14 weeks.",
    copy: "Pre-built automation patterns plus a platform designed for speed. You see working output before most vendors finish their proposal.",
  },
  {
    icon: "unlock",
    title: "No lock-in theatre.",
    copy: "Month-to-month running. If we stop earning our keep, you stop paying. That's the whole contract philosophy.",
  },
];

export function WhyTeamsPickUs() {
  return (
    <SectionShell className="bg-slate-950">
      <SectionHeader title="We cut our teeth in the hardest room in the building." />
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 80}>
            <TiltCard className="h-full">
              <IconBadge icon={card.icon} />
              <h3 className="text-2xl font-black text-white">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{card.copy}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
