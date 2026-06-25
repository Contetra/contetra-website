const outcomes = [
  "Reduce manual dependency",
  "Improve finance and sales visibility",
  "Standardise approval workflows",
  "Strengthen inventory and order tracking",
  "Improve customer and collections visibility",
  "Build MIS and dashboard-ready data",
  "Support faster management decision-making",
];

const businessProblems = [
  {
    challenge: "Finance and sales data are disconnected",
    outcome: "Integrated accounting, CRM and reporting workflows",
  },
  {
    challenge: "Customer data is scattered across teams",
    outcome: "Centralised CRM and customer visibility",
  },
  {
    challenge: "Inventory tracking is manual",
    outcome: "Better stock, warehouse and order visibility",
  },
  {
    challenge: "Reports are delayed or Excel-dependent",
    outcome: "Structured MIS and dashboard-ready data",
  },
  {
    challenge: "Approvals are person-dependent",
    outcome: "Defined workflows and role-based controls",
  },
  {
    challenge: "Project profitability is unclear",
    outcome: "Project tracking, billing and margin visibility",
  },
  {
    challenge: "Leadership lacks real-time visibility",
    outcome: "Dashboards, KPIs and management reporting",
  },
];

export default function StrategySection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">
            Why Growing Businesses Need the Right Zoho ERP Implementation
            Strategy
          </h2>
          <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>
              Many businesses start with Excel, Tally, standalone billing
              tools, disconnected CRM systems, manual inventory records or
              scattered approval workflows. These systems may work in the early
              stage, but they begin to break when transaction volumes, teams,
              locations, customers and reporting needs increase.
            </p>
            <p>
              Zoho ERP can help businesses connect finance, sales, CRM,
              inventory, procurement, projects, HR, analytics and automation
              into one integrated business environment.
            </p>
            <p>
              But Zoho ERP implementation should not be treated only as software
              setup. It should be designed around business workflows, financial
              controls, reporting expectations, user adoption and measurable
              ROI.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="mb-5 text-2xl font-bold leading-tight dark:text-white">
              Zoho ERP Should Solve Business Problems, Not Just Automate Tasks
            </h3>
            <p className="mb-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              A poorly planned Zoho ERP implementation can still leave
              businesses with delayed MIS, weak inventory visibility, manual
              reconciliations, scattered customer data and users returning to
              Excel after go-live.
            </p>
            <p className="mb-5 text-base font-semibold leading-7 dark:text-white">
              A successful Zoho ERP implementation should help the business:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="border-l-2 border-[#50a085] bg-white px-4 py-3 text-sm font-semibold leading-6 shadow-sm dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <h3 className="mb-5 text-2xl font-bold leading-tight dark:text-white">
              Common Business Problems Zoho ERP Can Help Address
            </h3>
            <div className="overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827]">
              <div className="grid bg-[#1a1640] px-5 py-4 text-sm font-bold text-white dark:bg-[#172036] sm:grid-cols-2">
                <div>Business Challenge</div>
                <div className="hidden sm:block">Zoho ERP Outcome Required</div>
              </div>
              {businessProblems.map((item, index) => (
                <div
                  key={item.challenge}
                  className={`grid gap-2 px-5 py-4 sm:grid-cols-2 ${
                    index < businessProblems.length - 1
                      ? "border-b border-[#eef1f8] dark:border-[#1F2937]"
                      : ""
                  }`}
                >
                  <div className="text-sm font-semibold leading-6 dark:text-white">
                    {item.challenge}
                  </div>
                  <div className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">
                    {item.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
