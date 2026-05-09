import Image from "next/image";
import Link from "next/link";

const ICON_BASE = "https://contetra.b-cdn.net/pages/home-page";

const cards = [
  {
    title: "Technical Accounting Advisory Services",
    icon: `${ICON_BASE}/home-icon-1.png`,
    link: "/technical-accounting-international-gaap-advisory-services",
    items: [
      "Ind AS, IFRS & US GAAP Advisory.",
      "CFO-Led Technical Accounting and International GAAP Solutions.",
      "Complex Accounting Standards Implementation.",
      "Revenue Recognition and Lease Accounting Support.",
      "International GAAP Consulting Services.",
      "Financial Reporting and Disclosure Advisory.",
    ],
  },
  {
    title: "End-to-end ERP Implementation Services",
    icon: `${ICON_BASE}/home-icon-2.png`,
    link: "/erp-implementation-solutions",
    items: [
      "End-to-End ERP Implementation.",
      "SAP & Microsoft Dynamics Functional Consulting.",
      "ERPNext & Odoo Implementation Partner.",
      "Mid-Market ERP Implementation Partner.",
      "ERP System Health Check.",
      "Industry-Specific ERP Solutions.",
    ],
  },
  {
    title: "Financial Planning and Analysis Services",
    icon: `${ICON_BASE}/home-icon-3.png`,
    link: "/strategic-business-financial-management-solutions",
    items: [
      "Strategic Financial Management Solutions.",
      "Strategic CFO Services for SMEs.",
      "Business Financial Strategy Consulting.",
      "Cash Flow Planning and Optimization.",
      "Budgeting and Forecasting Advisory Services.",
      "ROI-Driven Finance Transformation Partner.",
    ],
  },
  {
    title: "Finance Process Automation Services",
    icon: `${ICON_BASE}/home-icon-4.png`,
    link: "/strike-that",
    items: [
      "MCA Struck Off Companies Check",
      "Automated Financial Reporting",
      "Automated MIS and Segment Reporting",
      "Finance-based LLMs and AI Tools",
      "ROC Struck Off Verification",
      "AI-based workflow automation",
      "Finance process automation",
      "Third-party tool integrations with ERP",
      "ERP custom builds",
    ],
  },
  {
    title: "IPO Readiness and Financial Transformation Services",
    icon: `${ICON_BASE}/home-icon-5.png`,
    link: "/ipo-readiness",
    items: [
      "IPO Readiness Services.",
      "IPO-Grade ERP Implementation and Integration.",
      "IPO Readiness Assessment for Finance and Systems.",
      "IPO Financial Planning and Analysis Support.",
      "Technical Accounting for IPO Readiness.",
      "Pre-IPO Financial Statements and GAAP Compliance.",
      "IPO Accounting and Reporting Transformation.",
    ],
  },
  {
    title: "Global capability center and shared services consulting",
    icon: `${ICON_BASE}/home-icon-6.png`,
    link: "/financial-recruitment-consultants",
    items: [
      "Offshore Accounting Services in India.",
      "Outsourced Finance and Accounting Operations.",
      "Offshore Bookkeeping and Accounting.",
      "Offshore Payroll and Compliance Services.",
      "Virtual Accounting Team for Global Businesses.",
      "Technology-Enabled Offshore Accounting Solutions.",
    ],
  },
] as const;

export function SectionTwo() {
  return (
    <section className="w-full bg-background text-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 md:gap-12 md:py-16 lg:gap-14 lg:px-8 lg:py-20">
        <header className="flex w-full max-w-4xl flex-col items-center gap-3 text-center sm:gap-4 md:gap-5">
          <h2 className="text-balance text-[30px] font-semibold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            <span className="text-contetra-blue dark:!text-zinc-100">
              End-to-End Finance Transformation {""}
            </span>
            <span className="text-contetra-green">
            Services for CFOs & Growing Businesses
            </span>
          </h2>
          <p className="max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Partner with Contetra for{" "}
            <strong className="font-semibold text-foreground">
              end-to-end finance transformation
            </strong>
            —combining{" "}
            <strong className="font-semibold text-foreground">
              Virtual CFO leadership
            </strong>
            ,{" "}
            <strong className="font-semibold text-foreground">
              world-class ERP implementation
            </strong>
            , and modern{" "}
            <strong className="font-semibold text-foreground">
              finance automation tools
            </strong>
            .
          </p>
        </header>

        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <Link key={card.title} href={card.link} className="block">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-md motion-reduce:transition-none dark:ring-white/10 dark:hover:shadow-md sm:rounded-[1.25rem] sm:p-6 md:p-7 lg:p-8">
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-0 bg-contetra-green transition-[height] duration-500 ease-out motion-reduce:transition-none group-hover:h-full dark:brightness-110 dark:saturate-110"
                  aria-hidden
                />
                <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-contetra-blue transition-colors duration-300 group-hover:bg-white/15 sm:h-12 sm:w-12">
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      width={28}
                      height={28}
                      priority
                      className="h-6 w-6 object-contain transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert motion-reduce:transition-none sm:h-7 sm:w-7"
                    />
                  </div>
                  <h3 className="text-base font-bold text-contetra-blue transition-colors duration-300 group-hover:!text-white dark:!text-zinc-100 dark:!group-hover:text-white md:text-lg lg:text-xl">
                    {card.title}
                  </h3>
                  <ul className="list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-muted-foreground transition-colors duration-300 marker:text-muted-foreground group-hover:!text-white group-hover:!marker:!text-white sm:text-sm md:text-[0.9375rem] dark:!text-zinc-400 dark:!marker:!text-zinc-500">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
