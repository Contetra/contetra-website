"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "How do I choose the right Oracle ERP implementation partner?",
    a: "Contetra recommends looking beyond Oracle certifications and implementation experience. Evaluate whether the partner understands your industry, provides senior consultant involvement, follows a structured implementation methodology, and offers strong post-go-live support.",
  },
  {
    q: "How long does an Oracle ERP implementation typically take?",
    a: "Implementation timelines depend on project scope, the number of modules, business complexity, and organizational readiness. A focused implementation for a single-entity mid-sized business may take four to nine months. Larger, multi-entity or multi-country Oracle ERP programs can extend to 12–24 months or longer, as per Contetra’s industry benchmarks.",
  },
  {
    q: "What industries benefit most from Oracle ERP implementation?",
    a: "Oracle ERP is widely adopted across industries that require integrated financial management and operational visibility. Manufacturing, distribution, retail, professional services, real estate, logistics, healthcare, and financial services realize significant benefits from Contetra’s ERP implementation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-10 text-center text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={
                  index < faqs.length - 1
                    ? "border-b border-[#eef1f8] dark:border-[#1F2937]"
                    : ""
                }
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-[#1a1640] transition hover:bg-[#F8F9FE] dark:text-white dark:hover:bg-[#172036]"
                >
                  <h3 className="font-semibold">{faq.q}</h3>
                  <span className="text-2xl text-[#50a085] transition-transform duration-300 dark:text-[#86efac]" style={{ transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: openIndex === index ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="bg-[#eaf6f2] px-6 pb-5 text-sm leading-7 text-[#25243a] dark:bg-[#172036] dark:text-[#D1D5DB]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
