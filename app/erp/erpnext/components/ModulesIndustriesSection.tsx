import {
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Factory,
  Handshake,
  Landmark,
  ShoppingCart,
  Store,
  Users,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const modules = [
  { name: "Accounting and Finance", use: "General ledger, accounts payable, accounts receivable, payments, taxes, financial statements and reporting", icon: Landmark },
  { name: "Sales and CRM", use: "Leads, opportunities, quotations, sales orders, customer management and sales visibility", icon: Handshake },
  { name: "Purchase and Procurement", use: "Purchase requests, purchase orders, supplier management, goods receipts and purchase tracking", icon: ShoppingCart },
  { name: "Inventory and Stock", use: "Item masters, stock movements, warehouses, batches, serial numbers and valuation", icon: Boxes },
  { name: "Manufacturing", use: "BOM, work orders, production planning, job cards, WIP and material consumption", icon: Factory },
  { name: "Projects", use: "Project tracking, tasks, timesheets, billing and project profitability", icon: BriefcaseBusiness },
  { name: "HR and Payroll", use: "Employee data, attendance, payroll, leave and expense claims", icon: Users },
  { name: "Asset Management", use: "Fixed assets, depreciation, maintenance and asset tracking", icon: Wrench },
  { name: "Website / Ecommerce / POS", use: "Online selling, retail operations, POS billing and customer transactions", icon: Store },
  { name: "Reporting and Dashboards", use: "MIS, operational reports, finance reports and management visibility", icon: BarChart3 },
];

const industries = [
  { name: "Manufacturing", help: "Production planning, BOM, inventory, procurement, costing and shopfloor visibility" },
  { name: "Pharma and Chemicals", help: "Batch tracking, quality control, procurement, inventory and compliance visibility" },
  { name: "Trading and Distribution", help: "Sales orders, purchase planning, warehouse tracking, stock movement and receivables" },
  { name: "Textiles and Garments", help: "Production stages, job work, inventory control, vendor coordination and fulfilment" },
  { name: "IT and Professional Services", help: "Projects, timesheets, billing, resource planning and project profitability" },
  { name: "Retail and Ecommerce", help: "POS, ecommerce orders, inventory, pricing, fulfilment and customer visibility" },
  { name: "Real Estate and Projects", help: "Project tracking, vendor bills, milestone billing and cost control" },
  { name: "Education and Training", help: "Fee management, operations, HR, finance and reporting visibility" },
  { name: "Multi-location SMEs", help: "Branch-level control, centralised reporting, inventory visibility and process standardisation" },
];

export default function ModulesIndustriesSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="ERPNext Modules and Industries We Support"
          desc="ERPNext is suitable for businesses that need an integrated, flexible and scalable system across core functions. The right module selection depends on industry, transaction volume, reporting needs and operational complexity."
        />
        <div className="mb-9 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#50a085]/50 dark:bg-[#86efac]/50" />
          <h3 className="text-center text-2xl font-bold text-[#1a1640] dark:text-white">Key ERPNext Modules</h3>
          <span className="h-px w-12 bg-[#50a085]/50 dark:bg-[#86efac]/50" />
        </div>
        <div className="rounded-[8px] border border-[#e5ece9] bg-[#f5faf8] p-4 dark:border-[#1F2937] dark:bg-[#0f1518] sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {modules.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.name} className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white p-6 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_30px_rgba(0,0,0,0.25)] dark:hover:border-[#86efac]/55">
                  <span className="absolute inset-x-0 top-0 h-1 bg-[#50a085] opacity-70 transition group-hover:opacity-100 dark:bg-[#86efac]" />
                  <div className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-3 text-base font-bold leading-snug text-[#1a1640] dark:text-white">{item.name}</h3>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">{item.use}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-20 bg-[#eaf6f2] py-20 dark:bg-[#111827]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading title="Industries That Can Benefit from ERPNext" level="h3" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item) => (
              <article key={item.name} className="group relative min-h-[168px] overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white p-7 pl-8 shadow-[0_5px_18px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/45 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#0A0A0A] dark:shadow-[0_12px_30px_rgba(0,0,0,0.24)] dark:hover:border-[#86efac]/45">
                <span className="absolute inset-y-0 left-0 w-1 bg-[#50a085] transition-all duration-300 group-hover:w-2 dark:bg-[#86efac]" />
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="mb-3 text-base font-bold text-[#1a1640] transition-colors group-hover:text-[#347d68] dark:text-white dark:group-hover:text-[#86efac]">{item.name}</h3>
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
