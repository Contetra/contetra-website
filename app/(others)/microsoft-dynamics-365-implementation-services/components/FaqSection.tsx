"use client";

import { useState } from 'react';

type Faq = {
  q: string;
  a: string;
};

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Common Questions</div>
            <div className="mb-6 h-px w-16 bg-[#50a085] dark:bg-[#86efac]" />
            <h2 className="mb-6  text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">
              Frequently Asked Questions
            </h2>
            <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              Answers to common questions about Microsoft Dynamics 365 implementation, module selection, ERP failure risks and ContetraA&apos;s role as a finance-led ERP consulting partner.
            </p>
            <a href="/contact-us" className="mt-6 inline-flex items-center justify-center rounded-sm border border-[#50a085] bg-transparent px-8 py-3 text-sm font-semibold text-[#50a085] transition duration-200 hover:bg-[#eaf6f2] dark:border-[#80D7AA] dark:text-[#86efac] dark:hover:bg-[#172036]">
              Ask Us Directly
            </a>
          </div>

          <div>
            <div className="space-y-0 overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
              {faqs.map((faq, i) => (
                <div key={faq.q} className={i < faqs.length - 1 ? 'border-b border-[#eef1f8] dark:border-[#1F2937]' : ''}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-[#1a1640] transition hover:bg-[#F8F9FE] dark:text-white dark:hover:bg-[#172036]"
                  >
                    <span>{faq.q}</span>
                    <span className="text-2xl text-[#50a085] dark:text-[#86efac]">{openFaqIndex === i ? '-' : '+'}</span>
                  </button>
                  {openFaqIndex === i && (
                    <div className="bg-[#eaf6f2] px-6 pb-5 text-sm leading-7 text-[#25243a] dark:bg-[#172036] dark:text-[#D1D5DB]">
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
