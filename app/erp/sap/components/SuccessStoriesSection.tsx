import { Check } from "lucide-react";

const stories = [
  {
    title: "NeoLiv \u2013 Business-Tailored SAP S/4HANA Deployment",
    challengeIntro: "NeoLiv required SAP S/4HANA to support:",
    challengeItems: ["Complex lease accounting", "Multi-entity structures", "Project-based accounting", "Revenue recognition for real estate projects"],
    challengeOutro: "A standard SAP implementation would not adequately support the firm's business model.",
    solution: ["Business requirement workshops", "SAP customization for real estate operations", "Project accounting configuration", "Automated milestone-based revenue recognition", "PMO leadership and governance", "Change management and user adoption"],
    resultLabel: "Results",
    results: ["96% alignment with actual business workflows", "70% reduction in manual lease-to-revenue processes", "Improved cash flow forecasting", "Real-time CFO reporting and visibility"],
  },
  {
    title: "UpGrad \u2013 Enterprise-Wide SAP S/4HANA Transformation",
    challengeIntro: "UpGrad faced:",
    challengeItems: ["Multiple ERP systems", "Complex subsidiary structures", "Intercompany reconciliation challenges", "Consolidation and reporting inefficiencies"],
    solution: ["Unified SAP S/4HANA transformation", "Multi-subsidiary process design", "Automated intercompany accounting", "Revenue recognition configuration", "PMO governance directly supporting CFO objectives"],
    resultLabel: "Expected Outcomes",
    results: ["80% reduction in manual consolidation effort", "Centralized reporting across subsidiaries", "Real-time intercompany visibility", "Improved financial automation and governance"],
  },
  {
    title: "Hindustan Pencils (Nataraj)",
    challengeIntro: "Multiple standalone systems, fragmented reporting, and limited ERP integration were slowing financial decision-making.",
    challengeItems: [],
    solution: ["Comprehensive ERP diagnostic", "Process mapping", "Reporting transformation roadmap", "SAP S/4HANA readiness assessment"],
    resultLabel: "Results",
    results: ["Improved system integration", "Better reporting accuracy", "Enhanced real-time visibility", "Structured roadmap for SAP S/4HANA migration"],
  },
  {
    title: "VISSCO \u2013 SAP Business One Optimization",
    challengeIntro: "SAP Business One had become underutilized with numerous manual workarounds and disconnected processes.",
    challengeItems: [],
    solution: ["ERP diagnostic review", "Functional gap assessment", "Reporting redesign", "Automation roadmap"],
    resultLabel: "Results",
    results: ["Single source of truth established", "Improved compliance", "Faster monthly closures", "Enhanced ERP utilization across departments"],
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-12 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">SAP S/4HANA Success Stories</h2>
        <div className="space-y-6">
          {stories.map((story) => (
            <article key={story.title} className="overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white shadow-[0_8px_26px_rgba(26,22,64,0.06)] dark:border-[#1F2937] dark:bg-[#111827]">
              <h3 className="border-l-8 border-[#50a085] bg-[#1a1640] px-6 py-5 text-xl font-bold leading-snug text-white dark:border-[#86efac] dark:bg-[#172036]">{story.title}</h3>
              <div className="grid lg:grid-cols-3">
                <div className="p-6 lg:border-r lg:border-[#e2e8e6] lg:dark:border-[#1F2937]">
                  <h4 className="mb-4 text-sm font-bold uppercase text-[#9b4d55] dark:text-[#f0a0aa]">Challenge</h4>
                  <p className="text-sm leading-7 text-[#3f4352] dark:text-[#D1D5DB]">{story.challengeIntro}</p>
                  {story.challengeItems.length ? <div className="mt-3 space-y-2">{story.challengeItems.map((item) => <p key={item} className="border-l-2 border-[#9b4d55] pl-3 text-sm leading-6 text-[#3f4352] dark:border-[#f0a0aa] dark:text-[#D1D5DB]">{item}</p>)}</div> : null}
                  {story.challengeOutro ? <p className="mt-4 text-sm leading-7 text-[#3f4352] dark:text-[#D1D5DB]">{story.challengeOutro}</p> : null}
                </div>
                <div className="border-y border-[#e2e8e6] p-6 dark:border-[#1F2937] lg:border-y-0 lg:border-r">
                  <h4 className="mb-4 text-sm font-bold uppercase text-[#1a1640] dark:text-white">Solution</h4>
                  <div className="space-y-2">{story.solution.map((item) => <p key={item} className="border-l-2 border-[#1a1640]/30 pl-3 text-sm leading-6 text-[#3f4352] dark:border-white/25 dark:text-[#D1D5DB]">{item}</p>)}</div>
                </div>
                <div className="bg-[#edf8f4] p-6 dark:bg-[#172036]">
                  <h4 className="mb-4 text-sm font-bold uppercase text-[#347d68] dark:text-[#86efac]">{story.resultLabel}</h4>
                  <div className="space-y-3">{story.results.map((item) => <p key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[#1a1640] dark:text-[#E5E7EB]"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#50a085] dark:text-[#86efac]" />{item}</p>)}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
