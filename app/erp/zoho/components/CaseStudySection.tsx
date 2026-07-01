const businessValues = [
  "Batch-level inventory traceability across the complete supply chain",
  "Profitability visibility by shipment and product line",
  "Streamlined three-way matching between Purchase Orders, Goods Receipts, and Invoices",
  "Real-time dashboards for pending receivables and payables",
  "Faster and more accurate bank reconciliation through automated bank feeds",
  "Reduced manual data entry using validated bulk upload templates",
  "Improved operational controls, procurement governance, and reporting visibility",
];

export default function CaseStudySection() {
  return (
    <section className="bg-white py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h3 className="mb-5 text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">
            Zoho ERP Implementation Case Study
          </h3>
          <h4 className="text-xl font-bold leading-snug text-[#50a085] dark:text-[#86efac] md:text-2xl">
            Pharmaceutical Trading Company: End-to-End Zoho Books &amp; Zoho
            Inventory Implementation
          </h4>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[8px] border border-[#e5ece9] bg-[#f5faf8] p-7 shadow-[0_10px_28px_rgba(26,22,64,0.06)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_16px_40px_rgba(0,0,0,0.25)] md:p-9">
            <div className="space-y-6 text-base leading-8 text-[#25243a] dark:text-[#D1D5DB]">
              <p>
                A pharmaceutical trading company dealing in active and
                non-active pharmaceutical ingredients required a more scalable
                ERP platform to support its growing domestic and international
                trading operations. The existing Tally-based environment lacked
                batch-level inventory traceability, shipment-wise profitability
                reporting, structured purchase order management, approval
                workflows, and comprehensive visibility into pending receivables
                and payables.
              </p>
              <p>
                Contetra implemented Zoho Books and Zoho Inventory as an
                integrated business solution tailored to the client&apos;s
                operational workflows. The engagement included end-to-end system
                configuration, batch-level inventory tracking, approval
                workflows for purchase orders and manual journals, customised
                purchase order and invoice templates, automated bank feed
                integration, and structured bulk upload utilities for Item
                Masters and Purchase Orders with built-in validation rules.
                Cutover data was migrated into the new environment, followed by
                user training and post-go-live support to ensure business
                continuity.
              </p>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#dcebe6] bg-white p-7 shadow-[0_10px_28px_rgba(26,22,64,0.06)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_16px_40px_rgba(0,0,0,0.25)] md:p-9">
            <h4 className="mb-6 text-xl font-bold text-[#1a1640] dark:text-white">
              Business Value Delivered
            </h4>
            <div className="space-y-3">
              {businessValues.map((value) => (
                <div
                  key={value}
                  className="border-l-2 border-[#50a085] bg-[#f5faf8] px-4 py-3 text-sm font-semibold leading-6 text-[#1a1640] transition hover:translate-x-1 dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
