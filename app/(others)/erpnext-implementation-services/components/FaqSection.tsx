"use client";

import { useState } from "react";

const faqs = [
  { q: "What is ERPNext implementation?", a: "ERPNext implementation is the process of planning, configuring, testing and adopting ERPNext across finance, sales, purchase, inventory, manufacturing, projects, HR and reporting. It includes process mapping, data migration, UAT, training and post-go-live support." },
  { q: "Which businesses should consider ERPNext?", a: "ERPNext is suitable for growing SMEs, manufacturers, trading companies, distributors, service businesses, retail businesses, project-based companies and multi-location businesses that need better process control and reporting visibility." },
  { q: "Is ERPNext suitable for manufacturing companies?", a: "Yes. ERPNext can support BOM, work orders, production planning, material consumption, inventory, WIP, subcontracting and quality-related workflows." },
  { q: "Is ERPNext better than Odoo, SAP or Microsoft Dynamics 365?", a: "There is no single best ERP for every business. ERPNext, Odoo, SAP, Microsoft Dynamics 365 and Oracle serve different needs. The right choice depends on business size, budget, process complexity, customisation needs, industry requirements and reporting expectations." },
  { q: "What modules should be implemented first in ERPNext?", a: "Most businesses should begin with accounting, sales, purchase, inventory and reporting. Manufacturing businesses may also need BOM, work orders and production planning. Service businesses may need projects, timesheets and billing." },
  { q: "Why do ERPNext implementations fail?", a: "ERPNext implementations usually fail because of unclear requirements, poor process mapping, weak master data, excessive customisation, lack of user training, poor UAT and missing reporting expectations." },
  { q: "How does Contetra help during ERPNext implementation?", a: "Contetra helps with ERP scope assessment, BRD preparation, process mapping, module fitment, Chart of Accounts review, master data readiness, UAT support, vendor coordination, MIS design and post-go-live optimisation." },
  { q: "Does Contetra handle ERPNext technical configuration?", a: "Contetra primarily supports the functional, financial, process and reporting side of ERPNext implementation. We can work with ERPNext technical partners or internal teams to align the system with business requirements and leadership expectations." },
  { q: "What is an ERP Scope & ROI Audit?", a: "An ERP Scope & ROI Audit reviews current systems, process gaps, ERP requirements, expected benefits, implementation risks and ROI opportunities. It helps leadership understand what to implement, why it matters and how ERPNext can create measurable business value." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Common Questions</div>
            <div className="mb-6 h-px w-16 bg-[#50a085] dark:bg-[#86efac]" />
            <h2 className="mb-6 text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">Frequently Asked Questions</h2>
            <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">Answers to common questions about ERPNext implementation, module selection, manufacturing fit and Contetra&apos;s finance-led consulting role.</p>
            <a href="/contact-us" className="mt-6 inline-flex items-center justify-center rounded-sm border border-[#50a085] px-8 py-3 text-sm font-semibold text-[#50a085] transition hover:bg-[#eaf6f2] dark:border-[#80D7AA] dark:text-[#86efac] dark:hover:bg-[#172036]">Ask Us Directly</a>
          </div>

          <div className="overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={index < faqs.length - 1 ? "border-b border-[#eef1f8] dark:border-[#1F2937]" : ""}>
                <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-[#1a1640] transition hover:bg-[#F8F9FE] dark:text-white dark:hover:bg-[#172036]">
                  <span>{faq.q}</span>
                  <span className="text-2xl text-[#50a085] dark:text-[#86efac]">{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index ? <div className="bg-[#eaf6f2] px-6 pb-5 text-sm leading-7 text-[#25243a] dark:bg-[#172036] dark:text-[#D1D5DB]">{faq.a}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
