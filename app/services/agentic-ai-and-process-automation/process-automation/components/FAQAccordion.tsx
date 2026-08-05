"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { faqs } from "./data";
import { Reveal, SectionHeader, SectionShell } from "./Primitives";

export function FAQAccordion() {
  const [active, setActive] = useState(0);
  return (
    <SectionShell id="faqs" className="bg-[#030814]">
      <SectionHeader title="FAQs" subtitle="The practical questions your CFO, IT team, and ops lead will ask." />
      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map((faq, index) => {
          const open = active === index;
          return (
            <Reveal key={faq.question} delay={index * 55}>
              <div
                className={`rounded-[8px] border bg-white/[0.045] transition ${
                  open ? "border-cyan-300/45 shadow-[0_0_34px_rgba(34,211,238,0.12)]" : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-base font-bold text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  {faq.question}
                  <Icon
                    name="arrow"
                    className={`h-5 w-5 shrink-0 transition ${open ? "rotate-90 text-cyan-200" : "text-slate-500"}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 motion-reduce:transition-none ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-7 text-slate-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
