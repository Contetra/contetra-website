"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "How do I choose the right Zoho implementation partner?",
    a: "Contetra advises evaluating the partner's ability to understand your business. They should be able to design workflows, recommend automation opportunities, support integrations, and align the platform with your operational objectives. Also, find out who will lead the implementation, how post-go-live support is handled, and relevant experience working with organizations of similar size and complexity.",
  },
  {
    q: "How long does a Zoho ERP implementation take?",
    a: "Implementation timelines depend on the number of applications being deployed, the complexity of existing business processes, data migration requirements, and the level of customization. A focused implementation involving one or two applications may be completed within a few weeks, while a broader Zoho One rollout covering multiple departments may take several months.",
  },
  {
    q: "What is the typical cost of Zoho implementation?",
    a: "Zoho implementation costs vary depending on the number of applications, users, integrations, automation requirements, and data migration needs. As a general industry benchmark, implementation services can range from around $5,000 for straightforward setups to $25,000+ for complex Zoho One deployments, excluding Zoho licensing and ongoing support.",
  },
  {
    q: "What types of businesses benefit most from implementing Zoho as an ERP?",
    a: "Professional services firms, distributors, manufacturers, retail businesses, logistics companies, technology organizations, and other SMEs benefit from Zoho's flexibility, scalability, and ability to automate routine business processes across departments.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
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
