const businessProblems = [
  { challenge: "Finance, procurement and operations work in silos", outcome: "Integrated workflows and consistent reporting" },
  { challenge: "Month-end closing is delayed", outcome: "Faster financial close and better reconciliations" },
  { challenge: "Approvals are manual and person-dependent", outcome: "Structured workflows and approval controls" },
  { challenge: "Procurement lacks visibility", outcome: "Better supplier, PO, contract and spend control" },
  { challenge: "Project profitability is unclear", outcome: "Project costing, billing and revenue visibility" },
  { challenge: "Inventory and supply chain reporting is delayed", outcome: "Real-time stock, warehouse and logistics visibility" },
  { challenge: "Leadership depends on Excel for decisions", outcome: "Dashboards, KPIs and management reporting" },
];

const outcomes = [
  "Improve finance and operational visibility",
  "Reduce manual Excel dependency",
  "Strengthen approval workflows and governance",
  "Improve procurement and vendor control",
  "Track project, inventory and profitability better",
  "Accelerate reporting and month-end close",
  "Build a single source of truth for management decisions",
];

export default function StrategySection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Why Businesses Need the Right Oracle ERP Implementation Strategy</h2>
          <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>Many growing businesses reach a stage where spreadsheets, disconnected systems, legacy ERPs and manual approval workflows can no longer support scale.</p>
            <p>Finance teams struggle with delayed reporting. Procurement lacks visibility. Month-end closing takes longer. Inventory and project costs become difficult to track. Leadership teams are forced to make decisions without real-time financial and operational insight.</p>
            <p>ERP systems such as Oracle ERP, SAP, Microsoft Dynamics 365, Odoo, ERPNext and other platforms help businesses bring finance, procurement, inventory, projects, manufacturing, supply chain and reporting into one connected environment.</p>
            <p>But Oracle ERP implementation should not be treated only as a software deployment. It should be designed around business processes, financial controls, reporting expectations, user adoption and measurable ROI.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="mb-5 text-2xl font-bold leading-tight dark:text-white">Oracle ERP Should Solve Business Problems, Not Just Digitise Processes</h3>
            <p className="mb-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">A poorly planned Oracle ERP implementation can still leave businesses with delayed MIS, manual reconciliations, poor data quality, weak approval controls and expensive customisations.</p>
            <p className="mb-5 text-base font-semibold leading-7 dark:text-white">A successful Oracle ERP implementation should help the business:</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="border-l-2 border-[#50a085] bg-white px-4 py-3 text-sm font-semibold leading-6 shadow-sm transition hover:translate-x-1 hover:border-l-4 dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]">{outcome}</div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <h3 className="mb-5 text-2xl font-bold leading-tight dark:text-white">Common Business Problems Oracle ERP Can Help Address</h3>
            <div className="overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white shadow-[0_6px_20px_rgba(26,22,64,0.06)] dark:border-[#1F2937] dark:bg-[#111827]">
              <div className="grid bg-[#1a1640] px-5 py-4 text-sm font-bold text-white dark:bg-[#172036] sm:grid-cols-2">
                <div>Business Challenge</div>
                <div className="hidden sm:block">Oracle ERP Outcome Required</div>
              </div>
              {businessProblems.map((item, index) => (
                <div key={item.challenge} className={`group relative grid gap-2 px-5 py-4 transition hover:bg-[#eaf6f2] sm:grid-cols-2 dark:hover:bg-[#172036] ${index < businessProblems.length - 1 ? "border-b border-[#e2e8e6] dark:border-[#1F2937]" : ""}`}>
                  <span className="absolute inset-y-0 left-0 w-1 bg-transparent transition group-hover:bg-[#50a085] dark:group-hover:bg-[#86efac]" />
                  <div className="text-sm font-semibold leading-6 dark:text-white">{item.challenge}</div>
                  <div className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{item.outcome}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
