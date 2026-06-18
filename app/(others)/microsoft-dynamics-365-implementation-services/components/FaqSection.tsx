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
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085]">Common Questions</div>
            <div className="mb-6 h-px w-16 bg-[#50a085]" />
            <h2 className="mb-6  text-3xl font-semibold leading-tight text-[#1a1640] md:text-[2.6rem]">
              Frequently Asked Questions
            </h2>
            <p className="text-base leading-7 text-[#25243a]">
              Answers to common questions about Microsoft Dynamics 365 implementation, module selection, ERP failure risks and ContetraA&apos;s role as a finance-led ERP consulting partner.
            </p>
            <a href="/contact-us" className="mt-6 inline-flex items-center justify-center rounded-sm border border-[#50a085] bg-transparent px-8 py-3 text-sm font-semibold text-[#50a085] transition duration-200 hover:bg-[#eaf6f2]">
              Ask Us Directly
            </a>
          </div>

          <div>
            <div className="space-y-0 overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white">
              {faqs.map((faq, i) => (
                <div key={faq.q} className={i < faqs.length - 1 ? 'border-b border-[#eef1f8]' : ''}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-[#1a1640] transition hover:bg-[#F8F9FE]"
                  >
                    <span>{faq.q}</span>
                    <span className="text-2xl text-[#50a085]">{openFaqIndex === i ? '-' : '+'}</span>
                  </button>
                  {openFaqIndex === i && (
                    <div className="bg-[#eaf6f2] px-6 pb-5 text-sm leading-7 text-[#25243a]">
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
