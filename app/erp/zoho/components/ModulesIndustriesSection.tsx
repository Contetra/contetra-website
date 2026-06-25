import {
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Cable,
  Handshake,
  Landmark,
  ReceiptText,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const modules = [
  {
    name: "Zoho Books",
    use: "Accounting, invoicing, receivables, payables, taxes, banking and financial reporting",
    icon: Landmark,
  },
  {
    name: "Zoho Inventory",
    use: "Inventory, warehouses, stock movement, order fulfilment, shipping and stock reports",
    icon: Boxes,
  },
  {
    name: "Zoho CRM",
    use: "Leads, opportunities, customer management, sales pipeline and sales visibility",
    icon: Handshake,
  },
  {
    name: "Zoho Projects",
    use: "Project planning, tasks, timesheets, billing support and project tracking",
    icon: BriefcaseBusiness,
  },
  {
    name: "Zoho People",
    use: "Employee data, HR workflows, attendance, leave and employee operations",
    icon: Users,
  },
  {
    name: "Zoho Expense",
    use: "Expense claims, approvals, reimbursement workflows and cost control",
    icon: ReceiptText,
  },
  {
    name: "Zoho Analytics",
    use: "MIS dashboards, KPI reporting, profitability views and management reporting",
    icon: BarChart3,
  },
  {
    name: "Zoho Creator",
    use: "Custom workflows, business apps, approvals and process automation",
    icon: Wrench,
  },
  {
    name: "Zoho Flow",
    use: "App integrations, workflow automation and cross-system connectivity",
    icon: Cable,
  },
  {
    name: "Zoho Desk",
    use: "Customer support, ticketing, service workflows and customer experience tracking",
    icon: ShieldCheck,
  },
];

const industries = [
  {
    name: "Trading and Distribution",
    help: "Sales orders, purchases, inventory, warehousing, customer management and reporting",
  },
  {
    name: "Retail and Ecommerce",
    help: "Inventory, online orders, POS workflows, CRM, fulfilment and accounting visibility",
  },
  {
    name: "Professional Services",
    help: "CRM, projects, timesheets, invoicing, collections and project profitability",
  },
  {
    name: "Manufacturing SMEs",
    help: "Purchase, inventory, BOM-related tracking, production coordination and finance visibility",
  },
  {
    name: "IT and Technology Businesses",
    help: "Sales pipeline, projects, billing, resource tracking and management reporting",
  },
  {
    name: "Consulting and Agencies",
    help: "CRM, projects, timesheets, billing, expenses and profitability tracking",
  },
  {
    name: "Multi-location SMEs",
    help: "Branch-level reporting, stock visibility, approvals and centralised business control",
  },
  {
    name: "Service Businesses",
    help: "Customer requests, support tickets, billing, follow-ups and operational visibility",
  },
];

export default function ModulesIndustriesSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Zoho ERP Modules and Industries We Support"
          desc="Zoho offers multiple business applications that can be combined to create an ERP-like system for growing businesses. The right module mix depends on business size, industry, transaction volume, reporting needs and process complexity."
        />
        <div className="mb-9 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#50a085]/50 dark:bg-[#86efac]/50" />
          <h3 className="text-center text-2xl font-bold text-[#1a1640] dark:text-white">
            Key Zoho ERP Modules
          </h3>
          <span className="h-px w-12 bg-[#50a085]/50 dark:bg-[#86efac]/50" />
        </div>
        <div className="rounded-[8px] border border-[#e5ece9] bg-[#f5faf8] p-4 dark:border-[#1F2937] dark:bg-[#0f1518] sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {modules.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.name}
                  className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white p-6 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_30px_rgba(0,0,0,0.25)] dark:hover:border-[#86efac]/55"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-[#50a085] opacity-70 transition group-hover:opacity-100 dark:bg-[#86efac]" />
                  <div className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-3 text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {item.use}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          An experienced Zoho ERP consultant can help determine which
          applications should be implemented first, which workflows need
          standardisation and where customisation is genuinely required.
        </p>
      </div>

      <div className="mt-20 bg-[#eaf6f2] py-20 dark:bg-[#111827]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading
            title="Industries That Can Benefit from Zoho ERP"
            level="h3"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item) => (
              <article
                key={item.name}
                className="group relative min-h-[168px] overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white p-7 pl-8 shadow-[0_5px_18px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/45 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#0A0A0A] dark:shadow-[0_12px_30px_rgba(0,0,0,0.24)] dark:hover:border-[#86efac]/45"
              >
                <span className="absolute inset-y-0 left-0 w-1 bg-[#50a085] transition-all duration-300 group-hover:w-2 dark:bg-[#86efac]" />
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="mb-3 text-base font-bold text-[#1a1640] transition-colors group-hover:text-[#347d68] dark:text-white dark:group-hover:text-[#86efac]">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {item.help}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
