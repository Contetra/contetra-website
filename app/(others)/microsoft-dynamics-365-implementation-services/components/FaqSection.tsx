"use client";

import { useState } from 'react';

type Faq = {
  q: string;
  a: string;
};

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">Common Questions</div>
            <div className="mb-6 h-px w-16 bg-[#d8dde7]" />
            <h2 className="mb-6 text-3xl font-semibold leading-tight font-serif text-[#0d1b2a] md:text-[2.6rem]">
              Frequently Asked Questions
            </h2>
            <p className="text-base leading-7 text-[#4d5b6e]">
              Everything you need to know about Microsoft Dynamics 365 implementation and working with Contetra as your ERP functional partner.
            </p>
            <button className="mt-6 inline-flex items-center justify-center rounded-sm border border-[#0e7c7b] bg-transparent px-8 py-3 text-sm font-semibold text-[#0e7c7b] transition duration-200 hover:bg-[#0e7c7b]/10">
              Ask Us Directly →
            </button>
          </div>

          <div>
            <div className="space-y-0 border border-[#d8dde7] rounded-[12px] overflow-hidden bg-white">
              {faqs.map((faq, i) => (
                <div key={i} className={`${i < faqs.length - 1 ? 'border-b border-[#d8dde7]' : ''}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-[#1a2d45] transition hover:bg-[#f8f9fb]"
                  >
                    <span>{faq.q}</span>
                    <span className="text-2xl text-[#0e7c7b]">{openFaqIndex === i ? '−' : '+'}</span>
                  </button>
                  {openFaqIndex === i && (
                    <div className="px-6 pb-5 text-sm leading-7 text-[#4d5b6e] bg-[#0e7c7b]/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
