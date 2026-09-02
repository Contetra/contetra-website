import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const studies = [
  {
    company: "Gupshup",
    title: "AI-Powered Financial Automation with Oracle Fusion",
    challenge:
      "Gupshup, a global conversational AI leader, required a robust ERP solution to automate financial workflows, strengthen compliance, and improve reporting accuracy. Manual reconciliation and compliance challenges slowed down financial close cycles.",
    solution: [
      "Oracle Fusion Financials implementation: Streamlined multi-entity financials, cash flow tracking, and compliance reporting.",
      "AI-based reconciliation and automation: Automated 80% of financial reconciliations, significantly reducing manual intervention.",
      "Custom reporting and KPI dashboards: Delivered CFO-level insights through real-time financial data visualization.",
    ],
    outcome: [
      "95% fit-to-business processes, minimizing workarounds.",
      "80% of financial reconciliations automated, reducing manual intervention.",
      "Real-time financial insights for the CFO and board.",
    ],
  },
  {
    company: "V-Trans",
    title: "Digitalizing Transportation & Fleet Management with Oracle Fusion",
    challenge:
      "V-Trans, a logistics and transportation major, needed an integrated ERP solution to manage fleet operations, strengthen financial tracking, and improve cost efficiency. The organization faced challenges in tracking fleet costs, trip expenses, and route optimization.",
    solution: [
      "Oracle Fusion ERP for fleet costing: Centralized vehicle cost tracking, fuel expense management, and fleet performance analytics.",
      "Route optimization: Implemented route planning and expense forecasting to improve operational efficiency.",
      "Financial automation & procurement: Automated vendor payments, spare-part procurement, and maintenance schedules.",
    ],
    outcome: [
      "18% reduction in fleet maintenance costs through predictive analytics.",
      "Improved profitability through route optimisation and lower trip expenses.",
      "Automated vendor payments, strengthening supplier relationships and cost efficiency.",
    ],
  },
  {
    company: "Kale Logistics",
    title: "Enhancing Supply Chain Visibility with NetSuite ERP",
    challenge:
      "Kale Logistics, a leader in logistics technology solutions, had a system that lacked real-time inventory tracking and integration with third-party logistics (3PL) partners. The situation demanded a centralized ERP system to manage supply chain workflows, financial tracking, and customer billing.",
    solution: [
      "NetSuite SCM implementation: Optimized order fulfilment, warehouse tracking, and supply chain operations.",
      "Freight and billing integration: Automated integrations with shipping partners, 3PLs, and e-invoicing systems.",
      "Custom revenue recognition models: Configured automated invoicing and revenue deferral based on contract structures.",
      "Role-based access and compliance: Strengthened data security and regulatory compliance across financial and operational processes.",
    ],
    outcome: [
      "99.5% inventory accuracy through automated warehouse tracking.",
      "80% reduction in invoicing errors through automated revenue recognition models.",
      "25% improvement in order fulfilment through seamless shipping and freight platform integrations.",
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Proven Across Industries"
          title="Real Oracle ERP Implementations, Real Outcomes"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {studies.map((study, index) => (
            <ScrollReveal key={study.company} delay={index * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white shadow-[0_8px_28px_rgba(26,22,64,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(26,22,64,0.16)] dark:border-[#1F2937] dark:bg-[#111827]">
                <div className="bg-gradient-to-br from-[#1a1640] to-[#50a085] p-6 text-white dark:from-[#172036] dark:to-[#111827]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    {study.company}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-tight">
                    {study.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div>
                    <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#50a085] dark:text-[#86efac]">
                      Challenge
                    </p>
                    <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#50a085] dark:text-[#86efac]">
                      Our Solution
                    </p>
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                      {study.solution.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto rounded-[8px] bg-[#eaf6f2] px-4 py-3 dark:bg-[#172036]">
                    <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#347d68] dark:text-[#86efac]">
                      Outcome
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-[#1a1640] dark:text-white">
                      {study.outcome.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15} className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            Contetra&apos;s implementation approach empowers leadership with
            visibility, control, and scalability that drives better business
            decisions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
