import SectionHeading from "./SectionHeading";

const oracleModules = [
  { module: "Oracle Financials Cloud", use: "General ledger, accounts payable, accounts receivable, fixed assets, cash management, tax, expense management and financial reporting" },
  { module: "Oracle Procurement Cloud", use: "Supplier management, purchase requisitions, purchase orders, sourcing, vendor portals and contract management" },
  { module: "Oracle Supply Chain Management", use: "Inventory, warehouse management, demand planning, logistics and transportation management" },
  { module: "Oracle Project Management", use: "Project costing, resource management, time tracking, project billing and revenue recognition" },
  { module: "Oracle Manufacturing Cloud", use: "Production planning, BOM, work orders, quality control and shopfloor execution" },
  { module: "Oracle Enterprise Performance Management", use: "Budgeting, forecasting, scenario planning, management reporting and board reporting" },
  { module: "Oracle Analytics / Reporting", use: "Dashboards, KPI tracking, performance reporting and leadership visibility" },
  { module: "Integrations and Extensions", use: "CRM, HRMS, banking, BI tools, tax platforms and third-party enterprise applications" },
];

const industries = [
  { industry: "Manufacturing", help: "Production planning, procurement automation, inventory control, costing, quality and shopfloor visibility" },
  { industry: "Logistics and Transportation", help: "Fleet costs, route profitability, freight costing, vendor management and operational reporting" },
  { industry: "IT and Technology", help: "Project accounting, resource utilisation, revenue recognition, subscription billing and profitability tracking" },
  { industry: "Professional Services", help: "Timesheets, project billing, project profitability, resource planning and contract visibility" },
  { industry: "Real Estate and Infrastructure", help: "Project costing, lease accounting, revenue recognition, multi-SPV accounting and reporting" },
  { industry: "Retail and Distribution", help: "Procurement, warehouse visibility, inventory optimisation, demand planning and fulfilment" },
  { industry: "Healthcare and Pharma", help: "Procurement, inventory control, compliance visibility, approvals and financial reporting" },
  { industry: "Multi-Entity Businesses", help: "Consolidation, intercompany workflows, entity-wise reporting and governance" },
];

export default function ModulesIndustriesSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Oracle ERP Fitment"
          title="Oracle ERP Modules and Industries We Support"
          desc="Oracle ERP can support complex finance, procurement, project, supply chain, manufacturing and enterprise reporting needs. The right module selection depends on business size, industry, process complexity, reporting expectations and future growth plans."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {oracleModules.map((item) => (
            <div key={item.module} className="rounded-[12px] border border-[#eef1f8] bg-white p-6 shadow-[0_2px_12px_rgba(26,22,64,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#50a085]/35 dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)] dark:hover:border-[#86efac]/50">
              <h3 className="mb-3 text-base font-bold leading-snug text-[#1a1640] dark:text-white">{item.module}</h3>
              <p className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{item.use}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-[#eaf6f2] py-20 dark:bg-[#111827]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow="Industries" title="Industries That Can Benefit from Oracle ERP" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((item) => (
              <div key={item.industry} className="rounded-[12px] border border-transparent bg-white p-6 shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#0A0A0A] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
                <h3 className="mb-3 text-base font-bold text-[#1a1640] dark:text-white">{item.industry}</h3>
                <p className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{item.help}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
