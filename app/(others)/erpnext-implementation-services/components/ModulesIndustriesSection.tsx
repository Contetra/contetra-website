import SectionHeading from "./SectionHeading";

const modules = [
  { name: "Accounting and Finance", use: "General ledger, accounts payable, accounts receivable, payments, taxes, financial statements and reporting" },
  { name: "Sales and CRM", use: "Leads, opportunities, quotations, sales orders, customer management and sales visibility" },
  { name: "Purchase and Procurement", use: "Purchase requests, purchase orders, supplier management, goods receipts and purchase tracking" },
  { name: "Inventory and Stock", use: "Item masters, stock movements, warehouses, batches, serial numbers and valuation" },
  { name: "Manufacturing", use: "BOM, work orders, production planning, job cards, WIP and material consumption" },
  { name: "Projects", use: "Project tracking, tasks, timesheets, billing and project profitability" },
  { name: "HR and Payroll", use: "Employee data, attendance, payroll, leave and expense claims" },
  { name: "Asset Management", use: "Fixed assets, depreciation, maintenance and asset tracking" },
  { name: "Website / Ecommerce / POS", use: "Online selling, retail operations, POS billing and customer transactions" },
  { name: "Reporting and Dashboards", use: "MIS, operational reports, finance reports and management visibility" },
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
          eyebrow="ERPNext Fitment"
          title="ERPNext Modules and Industries We Support"
          desc="ERPNext is suitable for businesses that need an integrated, flexible and scalable system across core functions. The right module selection depends on industry, transaction volume, reporting needs and operational complexity."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {modules.map((item) => (
            <div key={item.name} className="rounded-[12px] border border-[#eef1f8] bg-white p-6 shadow-[0_2px_12px_rgba(26,22,64,0.05)] transition hover:-translate-y-1 hover:border-[#50a085]/35 dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)] dark:hover:border-[#86efac]/50">
              <h3 className="mb-3 text-base font-bold leading-snug text-[#1a1640] dark:text-white">{item.name}</h3>
              <p className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{item.use}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-[#eaf6f2] py-20 dark:bg-[#111827]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow="Industries" title="Industries That Can Benefit from ERPNext" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item) => (
              <div key={item.name} className="rounded-[12px] border border-transparent bg-white p-6 shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#0A0A0A] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
                <h3 className="mb-3 text-base font-bold text-[#1a1640] dark:text-white">{item.name}</h3>
                <p className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{item.help}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
