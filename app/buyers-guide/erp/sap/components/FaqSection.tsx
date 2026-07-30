"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import SectionIntro from "./SectionIntro";

const faqs = [
  {
    question: "How do I choose the right SAP ERP implementation partner?",
    answer:
      "Match the partner category to your company's scale and how much of the project you want to own. Then use the same evaluation checklist for every candidate, including reference checks at your actual company size.",
  },
  {
    question: "How long does an SAP ERP implementation typically take?",
    answer:
      "A focused mid-market single-entity implementation can run from a few months to around a year. Multi-entity, multi-country rollouts commonly take 12 to 24 months or longer.",
  },
  {
    question: "How much does SAP ERP implementation typically cost?",
    answer:
      "The guide's industry benchmarks range from roughly $150,000 for a lean mid-market deployment to more than $750,000 for complex multi-entity rollouts, before licensing.",
  },
  {
    question: "What industries benefit most from SAP ERP?",
    answer:
      "Manufacturing, retail and consumer goods, professional services, logistics and financial services often benefit because they depend on close integration between finance, supply-chain and operations data.",
  },
  {
    question: "How is a functional partner different from a technical vendor?",
    answer:
      "A technical vendor sells or configures SAP. A functional partner represents finance and operations: writing requirements, negotiating scope, designing controls and managing change alongside the technical team.",
  },
  {
    question: "Does Contetra replace the SAP technical vendor?",
    answer:
      "No. Contetra works alongside the technical vendor, owning requirements, negotiation and change management while the vendor handles configuration, infrastructure and technical execution.",
  },
  {
    question: "Which systems does Contetra support besides SAP?",
    answer:
      "Contetra's ERP practice is agnostic and also supports Microsoft Dynamics, ERPNext and Odoo, so recommendations are not tied to one vendor's licence revenue.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 text-[#17143a] dark:bg-[#080b10] md:py-28">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionIntro
          index="06"
          eyebrow="FAQs"
          title="FAQs"
        />
        <div data-reveal className="border-t border-[#dfe3e7] dark:border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-[#dfe3e7] dark:border-white/10">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-bold leading-6 dark:text-white md:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#cdd4d8] dark:border-white/15">
                    <Plus
                      className={`h-4 w-4 text-[#347d68] transition-transform duration-300 dark:text-[#86d7b8] ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-7 pr-12 text-sm leading-7 text-[#606473] dark:text-[#b9c0cd]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
     
      </div>
    </section>
  );
}
