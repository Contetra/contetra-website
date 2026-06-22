"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Faq = { q: string; a: string };

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="mb-10 text-center text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">Frequently Asked Questions</h3>
        <div className="overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={faq.q} className={index < faqs.length - 1 ? "border-b border-[#e2e8e6] dark:border-[#1F2937]" : ""}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaqIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm text-[#1a1640] transition hover:bg-[#F8F9FE] dark:text-white dark:hover:bg-[#172036]">
                  <h4 className="font-semibold">{faq.q}</h4>
                  <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 text-[#50a085] transition-transform duration-300 dark:text-[#86efac] ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen ? <div className="border-l-4 border-[#50a085] bg-[#eaf6f2] px-6 py-5 text-sm leading-7 text-[#25243a] dark:border-[#86efac] dark:bg-[#172036] dark:text-[#D1D5DB]">{faq.a}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
