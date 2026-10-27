"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "What is the difference between a standard and logistics & supply chain ERP?",
    a: "A standard ERP provides broad business functions such as finance, HR, procurement, and basic inventory management. A logistics & supply chain ERP dives deeper into supply chain operations, warehouse management, transportation, inventory, demand planning, order fulfilment, fleet management, and shipment visibility.",
  },
  {
    q: "How long does it take to implement a supply chain & logistics ERP?",
    a: "Implementation timelines vary based on the number of locations, users, integrations, data complexity, customization, and the modules. A relatively standard implementation may take 3-6 months, while larger multi-location or highly integrated deployments can take 3-12 months.",
  },
  {
    q: "How can you choose the right logistics ERP?",
    a: "Map your supply chain processes and identify the capabilities you need. Evaluate platforms based on inventory visibility, warehouse and transportation management, demand planning, integrations, multi-location support, reporting, scalability, and total cost of ownership.",
  },
  {
    q: "What are the key modules of a supply chain & logistics ERP?",
    a: "Core modules typically include warehouse management, transportation management, inventory management, procurement and supplier management, order management, fleet and asset management, demand and supply planning, finance and accounting, and customer or 3PL management.",
  },
  {
    q: "Can small logistics firms use ERPs?",
    a: "Yes, small 3PLs, freight forwarders, and distributors can use ERP software to manage shipments, inventory, warehouse operations, billing, and financial records from a centralized system. Cloud-based logistics ERP software is often a practical starting point because it requires lower upfront investment and can scale as the business grows.",
  },
  {
    q: "What is the difference between logistics & supply chain ERP vs WMS vs TMS?",
    a: "A logistics and supply chain ERP manages connected business processes, including procurement, inventory, warehousing, transportation, and finance. A Warehouse Management System (WMS) focuses on warehouse operations, such as receiving, picking, packing, and dispatching. A Transportation Management System (TMS) manages the movement of goods, including route planning, carrier selection, freight costs, and shipment tracking. The main difference is scope: ERP connects business functions, WMS optimizes warehouse activities, and TMS streamlines transportation.",
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
              FAQs
            </h2>
          </ScrollReveal>
          <ScrollReveal
            delay={0.1}
            className="overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]"
          >
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
                  aria-expanded={openIndex === index}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-[#1a1640] transition hover:bg-[#F8F9FE] dark:text-white dark:hover:bg-[#172036]"
                >
                  <h3 className="font-semibold">{faq.q}</h3>
                  <span
                    className="text-2xl text-[#50a085] transition-transform duration-300 dark:text-[#86efac]"
                    style={{
                      transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
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
