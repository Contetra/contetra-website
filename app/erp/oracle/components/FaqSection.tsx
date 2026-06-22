"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What is Oracle ERP implementation?", a: "Oracle ERP implementation is the process of planning, configuring, testing and adopting Oracle ERP applications across finance, procurement, projects, supply chain, manufacturing and reporting. It includes process mapping, FRD preparation, data migration, UAT, training, change management and post-go-live support." },
  { q: "Which businesses should consider Oracle ERP?", a: "Oracle ERP is suitable for mid-market and enterprise businesses that need stronger finance control, procurement automation, project visibility, supply chain integration, multi-entity reporting, governance and scalable cloud infrastructure." },
  { q: "Is Oracle ERP suitable for mid-sized businesses?", a: "Yes. Oracle ERP can support mid-sized businesses that have complex finance, procurement, supply chain, project accounting or reporting requirements and need a scalable ERP platform for future growth." },
  { q: "What Oracle ERP modules should be implemented first?", a: "Most businesses should begin with core modules such as financials, procurement, reporting and relevant operational modules. Manufacturing businesses may need supply chain and manufacturing modules. Project-based businesses may need project management and billing modules." },
  { q: "Is Oracle ERP better than SAP, Microsoft Dynamics 365, Odoo or ERPNext?", a: "There is no single best ERP for every business. Oracle ERP, SAP, Microsoft Dynamics 365, Odoo and ERPNext serve different business needs. The right choice depends on business size, process complexity, industry, budget, reporting needs, integrations and scalability expectations." },
  { q: "Why do Oracle ERP implementations fail?", a: "Oracle ERP implementations often fail because of unclear requirements, weak process mapping, poor data quality, lack of user adoption, insufficient UAT, excessive customisation, poor reporting design and weak governance." },
  { q: "How does Contetra help during Oracle ERP implementation?", a: "Contetra helps with ERP scope assessment, business process mapping, FRD preparation, module planning, Chart of Accounts and reporting review, data migration support, UAT coordination, implementation governance, vendor coordination and post-go-live optimisation." },
  { q: "Does Contetra handle Oracle technical configuration?", a: "Contetra primarily supports the functional, financial, process, reporting and governance side of Oracle ERP implementation. We can work with Oracle technical partners or internal IT teams to ensure the implementation aligns with business requirements." },
  { q: "Can Oracle ERP integrate with CRM, HRMS and third-party systems?", a: "Yes. Oracle ERP can integrate with CRM platforms, HRMS systems, banking solutions, BI tools, tax systems and other enterprise applications. Contetra helps define integration requirements from a business process and reporting perspective." },
  { q: "What is an ERP Scope & ROI Audit?", a: "An ERP Scope & ROI Audit is a structured review of your current systems, process gaps, ERP requirements, automation opportunities, implementation risks, resource needs and ROI potential. It helps leadership understand what should be implemented, why it matters and how Oracle ERP can create measurable business value." },
];

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="mb-10 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Frequently Asked Questions</h3>
        <div className="overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={faq.q} className={index < faqs.length - 1 ? "border-b border-[#e2e8e6] dark:border-[#1F2937]" : ""}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaqIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm transition hover:bg-[#F8F9FE] dark:text-white dark:hover:bg-[#172036]">
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
