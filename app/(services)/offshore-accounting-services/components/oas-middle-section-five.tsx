import Image from "next/image";

import { cn } from "@/lib/utils";

const serviceCards = [
  {
    id: "operational-finance",
    icon: "https://contetra.b-cdn.net/pages/services/oas/oas_budget.png",
    title: "Operational finance",
    description:
      "Customer Invoicing, Weekly Payment Tracking, FAR Maintenance, Reimbursement Monitoring, Team Coordination for Data/Documents, Monthly Payroll Processing.",
  },
  {
    id: "bookkeeping",
    icon: "https://contetra.b-cdn.net/pages/services/oas/oas_notes.png",
    title: "Book-keeping and record management",
    description:
      "Intercompany Calculation & Invoicing, Bank Reconciliation, Vendor Invoicing, Employee Reimbursement Accounting, Transaction Document Management, Monthly Book Closure & Provisions, Process Implementation.",
  },
  {
    id: "process-reviews",
    icon: "https://contetra.b-cdn.net/pages/services/oas/oas_dashboard.png",
    title: "Process reviews & gap analysis & recommendations",
    description:
      "Automations using tech stacks most appropriate for the organisation to reduce reporting timelines, Reduction of bottlenecks and wasteful expenditures, Risk Factor Gap Analysis, Best Practice Recommendation.",
  },
  {
    id: "audit-support",
    icon: "https://contetra.b-cdn.net/pages/services/oas/oas_audit.png",
    title: "Finalisations and audit support",
    description:
      "Assistance in Annual Transfer Pricing Study Preparation of Financial Statements Working & liaising with auditors for closure of regulatory or statutory audits Working & liaising with auditors for closure of Tax Audit.",
  },
  {
    id: "statutory",
    icon: "https://contetra.b-cdn.net/pages/services/oas/oas_compliant.png",
    title: "Statutory compliance",
    description:
      "Vendor TDS Compliance, Employee TDS Records & Computations, TDS Returns, GST Invoice Compliance, Sales Tax Reconciliations, Tax Computations.",
  },
  {
    id: "management-reporting",
    icon: "https://contetra.b-cdn.net/pages/services/oas/oas_customer-service.png",
    title: "Management reporting and support",
    description:
      "Budget Preparation Assistance, Monthly Consolidated Financials, Key Performance Monitoring, Performance Analysis for Decision Making, ERP Implementation.",
  },
] as const;

function ServicesHeading() {
  return (
    <div className="mb-8 w-full sm:mb-10 md:mb-12">
      <div
        className={cn(
          "w-full rounded-b-[20px] bg-[#f0f4f8] px-4 py-6 text-center sm:rounded-b-[24px] sm:px-6 sm:py-8 md:rounded-b-[28px] md:py-10 lg:rounded-b-[32px]",
          "dark:bg-slate-800/90"
        )}
      >
        <h2 className="text-[1.5rem] font-bold leading-tight tracking-tight text-[#333333] sm:text-[1.65rem] md:text-[1.85rem] lg:text-[2rem] dark:text-slate-100">
        Contetra’s Offshore Accounting Services Approach
        </h2>
        <div
          className="mt-3 flex items-center justify-center gap-1.5 sm:mt-4 sm:gap-2"
          aria-hidden
        >
          <span className="size-1.5 shrink-0 rounded-full bg-[#3b82f6] sm:size-2" />
          <span className="size-1.5 shrink-0 rounded-full bg-[#3b82f6] sm:size-2" />
          <span className="size-1.5 shrink-0 rounded-full bg-[#3b82f6] sm:size-2" />
          <span className="ml-0.5 h-0.5 w-9 rounded-full bg-[#3b82f6] sm:ml-1 sm:w-11" />
        </div>
      </div>
    </div>
  );
}

export function OasMiddleSectionFive() {
  return (
    <section
      className={cn(
        "w-full bg-white",
        "box-border px-[10px] pb-10 pt-2 sm:px-4 sm:pb-12 sm:pt-3 md:px-8 md:pb-14 md:pt-4 lg:pb-16",
        "xl:px-14 2xl:px-[80px]"
      )}
    >
      <ServicesHeading />

      <div className="w-full px-4 pb-10 pt-4 sm:px-5 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-8 lg:px-10 lg:pb-16 lg:pt-10">
        <ul className="mx-auto grid w-full max-w-[1200px] list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:max-w-[1280px]">
          {serviceCards.map((card) => (
            <li key={card.id}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl border border-slate-300 bg-white p-4 shadow-sm sm:p-5 md:rounded-2xl md:p-6",
                  "dark:border-slate-600 dark:bg-[#111827] dark:shadow-none"
                )}
              >
                <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                  <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16">
                    <Image
                      src={card.icon}
                      alt=""
                      fill
                      className="object-contain object-left-top"
                      sizes="64px"
                      unoptimized
                    />
                  </div>
                  <h3 className="min-w-0 pt-0.5 text-left text-[12px] font-bold uppercase leading-snug tracking-wide text-[#0a0a3c] sm:text-[13px] md:text-[14px] dark:text-[#93c5fd]">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-3 text-left text-[12.5px] leading-[1.62] text-slate-700 sm:mt-4 sm:text-[13px] md:text-[14px] md:leading-[1.65] dark:text-slate-300">
                  {card.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
