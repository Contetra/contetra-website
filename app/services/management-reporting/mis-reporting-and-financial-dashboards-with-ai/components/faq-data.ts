import type { FaqItem } from "@/lib/content";

export const faqItems: FaqItem[] = [
  {
    question: "What is MIS reporting and how is it different from a financial dashboard?",
    answer: "MIS (Management Information System) reporting refers to structured periodic reports  daily, weekly or monthly that convert raw accounting, ERP, sales and operational data into meaningful information for decision-making. A financial dashboard presents the same kind of information visually and interactively, often updated more frequently. Both exist for the same purpose: helping management see what's happening in the business and act on it, not just look at historical numbers.",
  },
  {
    question: "Why do businesses need MIS dashboards instead of relying on Excel?",
    answer: "Excel works when a business is small and simple. As transactions, teams and business units grow, Excel-based reporting tends to become slow, error-prone and dependent on one or two people. MIS dashboards standardise data from ERP, accounting and sales systems into a single reliable source, reducing manual effort, version confusion and reporting delays.",
  },
  {
    question: "What kind of dashboards can Contetra help build?",
    answer: "Contetra builds dashboards covering revenue, profitability, cash flow, working capital, receivables, payables, inventory, cost centres, business units, projects, customer profitability, budget vs. actuals, and other management KPIs tailored to what each business actually needs to track.",
  },
  {
    question: "Who typically uses MIS dashboards?",
    answer: "Business owners, founders, CFOs, finance heads, department leads and investors anyone who needs timely, reliable visibility into performance, cash flow, profitability or operations without waiting for someone to compile a report.",
  },
  {
    question: "Can MIS dashboards connect with our existing ERP or accounting software?",
    answer: "Yes. Dashboards can be built using data from ERP, accounting, CRM, inventory and sales systems. That said, the quality of the output depends heavily on how clean and structured the underlying data is things like chart of accounts, cost centre tagging and reconciliation discipline matter as much as the dashboard design itself.",
  },
  {
    question: "How does AI actually improve MIS reporting?",
    answer: "AI helps by scanning large volumes of financial and operational data to spot trends, flag exceptions and anomalies, and generate variance commentary automatically. In practice, this means leadership gets a faster answer to \"what changed, why did it change, and what needs attention\"  instead of waiting for someone to manually explain the numbers each month.",
  },
  {
    question: "Does Contetra only build dashboards, or help decide what to track in the first place?",
    answer: "Both. Before building anything, Contetra works with the business to define the right KPIs, reporting structure, data sources, calculation logic, ownership and review frequency. A well-designed dashboard is only useful if it's tracking the right things, the goal is decision-support, not just a good-looking report.",
  },
  {
    question: "How do we know if our MIS reporting needs improvement?",
    answer: "Some common signs: management reports are consistently late, numbers don't match across reports, there's heavy dependence on one person's Excel sheet, profitability by product/customer/project is unclear, cash flow visibility is weak, or decisions are being made on gut feel rather than data. Any of these usually indicate it's time to revisit the reporting setup.",
  },
  {
    question: "What does Contetra review before designing a dashboard for us?",
    answer: "Business objectives, existing reports, ERP/accounting data structure, chart of accounts, cost centres, revenue streams, customer and product data, working capital metrics, and what management actually needs to make decisions. This groundwork ensures the dashboard reflects how the business really operates, not a generic template.",
  },
  {
    question: "How long does it typically take to set up an MIS dashboard?",
    answer: "Timelines vary depending on data readiness and complexity a business with clean, well-structured ERP data will move faster than one still relying on scattered spreadsheets. Contetra typically starts with a short diagnostic to assess data quality and reporting needs before giving a realistic timeline.",
  },
  {
    question: "Is our financial data secure when Contetra sets up these dashboards?",
    answer: "Yes. Financial and operational data is handled with strict confidentiality, and access is limited to what's needed for the engagement. This is a standard part of how Contetra works with any client's sensitive business data.",
  },
  {
    question: "Does Contetra provide support after the dashboard is built?",
    answer: "Yes. Dashboards need periodic review as business needs, data sources or reporting requirements evolve. Contetra can support ongoing maintenance, refinements and updates as required, rather than treating it as a one-time build.",
  },
];
