import { BarChart3, Boxes, BriefcaseBusiness, Factory, Landmark, ShoppingCart, TrendingUp, Workflow } from "lucide-react";

const oracleModules = [
  { module: "Oracle Financials Cloud", use: "General ledger, accounts payable, accounts receivable, fixed assets, cash management, tax, expense management and financial reporting", icon: Landmark },
  { module: "Oracle Procurement Cloud", use: "Supplier management, purchase requisitions, purchase orders, sourcing, vendor portals and contract management", icon: ShoppingCart },
  { module: "Oracle Supply Chain Management", use: "Inventory, warehouse management, demand planning, logistics and transportation management", icon: Boxes },
  { module: "Oracle Project Management", use: "Project costing, resource management, time tracking, project billing and revenue recognition", icon: BriefcaseBusiness },
  { module: "Oracle Manufacturing Cloud", use: "Production planning, BOM, work orders, quality control and shopfloor execution", icon: Factory },
  { module: "Oracle Enterprise Performance Management", use: "Budgeting, forecasting, scenario planning, management reporting and board reporting", icon: TrendingUp },
  { module: "Oracle Analytics / Reporting", use: "Dashboards, KPI tracking, performance reporting and leadership visibility", icon: BarChart3 },
  { module: "Integrations and Extensions", use: "CRM, HRMS, banking, BI tools, tax platforms and third-party enterprise applications", icon: Workflow },
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
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Oracle ERP Modules and Industries We Support</h2>
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">Oracle ERP can support complex finance, procurement, project, supply chain, manufacturing and enterprise reporting needs. The right module selection depends on business size, industry, process complexity, reporting expectations and future growth plans.</p>
        </div>
        <div className="mb-9 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#50a085]/50 dark:bg-[#86efac]/50" />
          <h3 className="text-center text-2xl font-bold dark:text-white">Key Oracle ERP Modules</h3>
          <span className="h-px w-12 bg-[#50a085]/50 dark:bg-[#86efac]/50" />
        </div>
        <div className="rounded-[8px] border border-[#e5ece9] bg-[#f5faf8] p-4 dark:border-[#1F2937] dark:bg-[#0f1518] sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-4 rounded-[8px] bg-[#1a1640] px-5 py-3 text-xs font-bold text-white dark:bg-[#172036]"><span>Oracle ERP Module</span><span>Business Use</span></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {oracleModules.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.module} className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white p-6 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/55">
                  <span className="absolute inset-x-0 top-0 h-1 bg-[#50a085] opacity-70 transition group-hover:opacity-100 dark:bg-[#86efac]" />
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] transition group-hover:bg-[#50a085] group-hover:text-white dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac] dark:group-hover:bg-[#86efac] dark:group-hover:text-[#0A0A0A]"><Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} /></span>
                  <h3 className="mb-3 text-base font-bold leading-snug dark:text-white">{item.module}</h3>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">{item.use}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-20 bg-[#eaf6f2] py-20 dark:bg-[#111827]">
        <div className="mx-auto max-w-[1200px] px-6">
          <h3 className="mb-10 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Industries That Can Benefit from Oracle ERP</h3>
          <div className="mb-5 flex items-center justify-between gap-4 rounded-[8px] bg-[#1a1640] px-5 py-3 text-xs font-bold text-white dark:bg-[#172036]"><span>Industry</span><span>How Oracle ERP Can Help</span></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
              <article key={item.industry} className="group relative min-h-[190px] overflow-hidden rounded-[8px] border border-[#dce7e3] bg-white p-7 pl-8 shadow-[0_5px_18px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/45 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#0A0A0A] dark:hover:border-[#86efac]/45">
                <span className="absolute inset-y-0 left-0 w-1 bg-[#50a085] transition-all duration-300 group-hover:w-2 dark:bg-[#86efac]" />
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="mb-3 text-base font-bold transition-colors group-hover:text-[#347d68] dark:text-white dark:group-hover:text-[#86efac]">{item.industry}</h3>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">{item.help}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
