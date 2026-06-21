const outcomes = [
  "Reduce manual dependency",
  "Improve finance and inventory visibility",
  "Standardise workflows",
  "Strengthen approval controls",
  "Track profitability better",
  "Improve month-end reporting",
  "Build a single source of truth for decision-making",
];

const businessProblems = [
  { challenge: "Finance and inventory data are disconnected", outcome: "Integrated finance, stock and operational workflows" },
  { challenge: "Procurement and sales approvals are manual", outcome: "Controlled approval flows and better process discipline" },
  { challenge: "Manufacturing visibility is weak", outcome: "BOM, production, WIP and material tracking" },
  { challenge: "Reports are delayed or Excel-dependent", outcome: "Structured MIS and dashboard-ready data" },
  { challenge: "Project profitability is unclear", outcome: "Project-wise cost, billing and margin visibility" },
  { challenge: "Multiple users follow different processes", outcome: "Standard workflows and clear role ownership" },
];

export default function StrategySection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Implementation Strategy</div>
            <div className="mb-6 h-px w-16 bg-[#50a085] dark:bg-[#86efac]" />
            <h2 className="mb-6 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Why Growing Businesses Need ERPNext Implementation</h2>
            <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              <p>Many businesses start with Excel, Tally, standalone billing tools, disconnected inventory systems or manual approval trackers. These systems begin to break when transactions, locations, products, teams and reporting needs increase.</p>
              <p>ERPNext can bring finance, operations, inventory, sales, procurement, manufacturing, projects and reporting into one connected environment.</p>
              <p>Implementation should not be treated only as a software setup. It should be designed around business workflows, financial controls, reporting expectations and user adoption.</p>
            </div>
          </div>

          <div className="rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
            <h3 className="mb-5 text-xl font-bold leading-tight dark:text-white">ERPNext should solve business problems, not just automate tasks.</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="border-l-2 border-[#50a085] bg-[#eaf6f2] px-4 py-3 text-sm font-semibold leading-6 text-[#1a1640] dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]">{outcome}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
          <div className="grid bg-[#1a1640] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white dark:bg-[#172036] md:grid-cols-2">
            <div>Business Challenge</div>
            <div className="hidden md:block">ERPNext Outcome Required</div>
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
