import { BarChart3, Boxes, BriefcaseBusiness, Calculator, Factory, Landmark, ShoppingCart } from "lucide-react";

const modules = [
  { name: "SAP Finance (FI)", icon: Landmark, items: ["General Ledger", "Accounts Payable", "Accounts Receivable", "Fixed Assets", "Cash & Bank Management", "Financial Closing", "Consolidation"] },
  { name: "SAP Controlling (CO)", icon: Calculator, items: ["Cost Center Accounting", "Profit Center Accounting", "Product Costing", "Internal Orders", "Profitability Analysis"] },
  { name: "SAP Materials Management (MM)", icon: ShoppingCart, items: ["Procurement", "Vendor Management", "Purchase Requisitions", "Purchase Orders", "Inventory Control"] },
  { name: "SAP Sales & Distribution (SD)", icon: Boxes, items: ["Order Management", "Pricing", "Billing", "Credit Management", "Customer Management"] },
  { name: "SAP Production Planning (PP)", icon: Factory, items: ["Production Scheduling", "BOM Management", "Shop Floor Control", "Capacity Planning"] },
  { name: "SAP Project Systems (PS)", icon: BriefcaseBusiness, items: ["Project Costing", "Budget Management", "Resource Planning", "Project Billing"] },
  { name: "SAP Extended Warehouse Management (EWM)", icon: Boxes, items: ["Warehouse Operations", "Inventory Tracking", "Material Movement", "Fulfilment Management"] },
  { name: "SAP Analytics & Reporting", icon: BarChart3, items: ["SAP Analytics Cloud", "Executive Dashboards", "CFO Reporting", "Operational KPIs"] },
];

export default function ModulesSection() {
  return (
    <section className="py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1440px] px-6">
        <h3 className="mb-10 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">SAP S/4HANA Modules We Support</h3>
        <div className="rounded-[8px] border border-[#e5ece9] bg-[#f5faf8] p-4 dark:border-[#1F2937] dark:bg-[#0f1518] sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article key={module.name} className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white p-6 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/55">
                <span className="absolute inset-x-0 top-0 h-1 bg-[#50a085] opacity-70 transition group-hover:opacity-100 dark:bg-[#86efac]" />
                <span className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] transition group-hover:bg-[#50a085] group-hover:text-white dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac] dark:group-hover:bg-[#86efac] dark:group-hover:text-[#0A0A0A]"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                <h4 className="mb-5 text-base font-bold leading-snug text-[#1a1640] dark:text-white">{module.name}</h4>
                <div className="space-y-1">
                  {module.items.map((item) => <p key={item} className="border-l-2 border-[#50a085] px-3 py-1.5 text-sm leading-6 text-[#3f4352] dark:border-[#86efac] dark:text-[#D1D5DB]">{item}</p>)}
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
