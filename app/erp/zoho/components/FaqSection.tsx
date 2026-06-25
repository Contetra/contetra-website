"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Zoho ERP implementation?",
    a: "Zoho ERP implementation is the process of planning, configuring, testing and adopting Zoho applications across business functions such as finance, sales, CRM, inventory, purchase, projects, HR, analytics and reporting. It includes process mapping, data migration, UAT, training and post-go-live support.",
  },
  {
    q: "Is Zoho a full ERP system?",
    a: "Zoho is a suite of connected business applications. When implemented properly, apps such as Zoho Books, Zoho Inventory, Zoho CRM, Zoho Projects, Zoho People, Zoho Analytics and Zoho Creator can work together as an ERP-like business system for growing companies.",
  },
  {
    q: "Which businesses should consider Zoho ERP?",
    a: "Zoho ERP may suit SMEs, trading companies, service businesses, retail and ecommerce brands, project-based companies, consulting firms, IT businesses and multi-location businesses that need better control over finance, sales, inventory, customer data and reporting.",
  },
  {
    q: "Why is a Zoho ERP consultant important?",
    a: "A Zoho ERP consultant helps map business requirements to the right Zoho applications, workflows, approvals, reports, migration needs and user responsibilities. This reduces the risk of implementing apps that do not fit actual business operations.",
  },
  {
    q: "What modules should be implemented first in Zoho ERP?",
    a: "Most businesses should begin with core modules such as accounting, CRM, inventory, sales, purchase and reporting. Project-based businesses may also need projects and timesheets. Businesses with specific workflows may need Zoho Creator or Zoho Flow for customisation and automation.",
  },
  {
    q: "How does Zoho Data Migration work?",
    a: "Zoho Data Migration may include customer masters, vendor masters, item masters, opening balances, inventory data, transaction history, CRM records and reporting data. The migration should be planned with proper cleanup, mapping, validation and reconciliation.",
  },
  {
    q: "How do Zoho ERP service providers support implementation?",
    a: "Zoho ERP service providers support businesses with requirement gathering, process mapping, application selection, configuration planning, data migration, testing, training, integration coordination and post-go-live optimisation.",
  },
  {
    q: "How is Contetra different from other Zoho ERP consultants?",
    a: "Contetra brings a finance-led and business-process-led approach. We focus on how Zoho ERP should improve reporting, controls, cash visibility, workflows, user adoption and management decision-making, not just application setup.",
  },
  {
    q: "Does Contetra handle Zoho technical configuration?",
    a: "Contetra primarily supports the functional, financial, process and reporting side of Zoho ERP implementation. We can work with Zoho technical partners or internal teams to ensure the system is aligned with business requirements and leadership expectations.",
  },
  {
    q: "What is an ERP Scope & ROI Audit?",
    a: "An ERP Scope & ROI Audit is a structured review of your current systems, process gaps, Zoho ERP requirements, expected benefits, implementation risks and ROI opportunities. It helps leadership understand what to implement, why it matters and how Zoho ERP can create measurable business value.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-10 text-center text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">
            Frequently Asked Questions
          </h3>
          <div className="overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
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
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-[#1a1640] transition hover:bg-[#F8F9FE] dark:text-white dark:hover:bg-[#172036]"
                >
                  <h4 className="font-semibold">{faq.q}</h4>
                  <span className="text-2xl text-[#50a085] dark:text-[#86efac]">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                {openIndex === index ? (
                  <div className="bg-[#eaf6f2] px-6 pb-5 text-sm leading-7 text-[#25243a] dark:bg-[#172036] dark:text-[#D1D5DB]">
                    {faq.a}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
