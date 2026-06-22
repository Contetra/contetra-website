type Challenge = {
  challenge: string;
  outcome: string;
};

const implementationOutcomes = [
  "Reduce spreadsheet dependency",
  "Improve finance and inventory visibility",
  "Standardise approval workflows",
  "Improve procurement and sales tracking",
  "Strengthen manufacturing and costing visibility",
  "Build MIS and dashboard-ready data",
  "Improve management decision-making",
];

export default function WhyOdooSection({ challenges }: { challenges: Challenge[] }) {
  return (
    <section className="bg-slate-100 py-20 text-slate-900 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="w-full">
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#50a085] dark:bg-[#86efac]" />
          <h2 className="text-center text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">
            Why Businesses Need the Right Odoo ERP Implementation Strategy
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-[#E5E7EB]">
            <p>
              Many businesses start with spreadsheets, Tally, standalone billing tools, disconnected inventory systems or manual approval trackers. These systems may work in the early stage, but they begin to break when transactions, teams, locations, products and reporting needs increase.
            </p>
            <p>
              ERP systems such as Odoo, SAP, Microsoft Dynamics 365, Oracle and ERPNext help businesses connect finance, procurement, inventory, sales, manufacturing, projects and reporting into one integrated environment. But an Odoo ERP project should not be treated only as software configuration. It should be planned around business processes, reporting needs, financial controls, data quality, user adoption and measurable ROI.
            </p>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold leading-tight text-[#1a1640] dark:text-white">
              Odoo Should Solve Business Problems, Not Just Automate Tasks
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-[#E5E7EB]">
              A poorly planned Odoo implementation can still leave businesses with delayed MIS, weak inventory visibility, manual reconciliations, unnecessary customisations and users returning to Excel after go-live.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#1a1640] dark:text-white">
              A successful Odoo implementation should help the business:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {implementationOutcomes.map((outcome) => (
                <p key={outcome} className="border-l-2 border-[#50a085] bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#1a1640] shadow-sm dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]">
                  {outcome}
                </p>
              ))}
            </div>
          </div>

          <div className="self-start lg:sticky lg:top-24">
            <h3 className="mb-5 text-2xl font-semibold leading-tight text-[#1a1640] dark:text-white">
              Common Business Problems Odoo Can Help Address
            </h3>
            <div className="overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
              <div className="grid grid-cols-2 bg-[#1a1640] text-xs font-bold uppercase tracking-[0.1em] text-white dark:bg-[#172036]">
                <div className="px-6 py-4">Business Challenge</div>
                <div className="px-6 py-4">Odoo ERP Outcome Required</div>
              </div>
              {challenges.map((row, index) => (
                <div key={row.challenge} className={`${index > 0 ? "border-t border-slate-200 dark:border-[#1F2937]" : ""} grid grid-cols-2`}>
                  <div className="bg-white px-6 py-5 text-sm font-medium text-slate-900 dark:bg-[#111827] dark:text-white">{row.challenge}</div>
                  <div className="bg-[#eaf6f2] px-6 py-5 text-sm font-medium text-[#3d8f76] dark:bg-[#172036] dark:text-[#86efac]">{row.outcome}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
