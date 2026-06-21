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
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Implementation Strategy</div>
            <div className="mb-6 h-px w-16 bg-[#50a085] dark:bg-[#86efac]" />
            <h2 className="mb-6 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">
              Why Businesses Need the Right Oracle ERP Implementation Strategy
            </h2>
            <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              <p>Many growing businesses reach a stage where spreadsheets, disconnected systems, legacy ERPs and manual approval workflows can no longer support scale.</p>
              <p>Finance teams struggle with delayed reporting. Procurement lacks visibility. Month-end closing takes longer. Inventory and project costs become difficult to track. Leadership teams are forced to make decisions without real-time financial and operational insight.</p>
              <p>Oracle ERP implementation should not be treated only as a software deployment. It should be designed around business processes, financial controls, reporting expectations, user adoption and measurable ROI.</p>
            </div>
          </div>

          <div className="rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
            <h3 className="mb-5 text-xl font-bold leading-tight dark:text-white">Oracle ERP should solve business problems, not just digitise processes.</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="border-l-2 border-[#50a085] bg-[#eaf6f2] px-4 py-3 text-sm font-semibold leading-6 text-[#1a1640] dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]">
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
          <div className="grid bg-[#1a1640] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white dark:bg-[#172036] md:grid-cols-2">
            <div>Business Challenge</div>
            <div className="hidden md:block">Oracle ERP Outcome Required</div>
          </div>
          {businessProblems.map((item, index) => (
            <div key={item.challenge} className={`grid gap-3 px-6 py-5 md:grid-cols-2 ${index < businessProblems.length - 1 ? "border-b border-[#eef1f8] dark:border-[#1F2937]" : ""}`}>
              <div className="text-sm font-semibold leading-6 text-[#1a1640] dark:text-white">{item.challenge}</div>
              <div className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{item.outcome}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
