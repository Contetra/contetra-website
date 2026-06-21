import SectionHeading from "./SectionHeading";

const caseStudies = [
  {
    company: "Gupshup",
    title: "Oracle Fusion Finance Automation",
    challenge: "A fast-growing technology business required better financial workflow automation, compliance visibility and faster close processes.",
    solution: "Contetra supported Oracle Fusion finance transformation through financial process review, reconciliation automation, CFO dashboard planning and KPI reporting alignment.",
    value: "Improved process fit, stronger finance visibility, automation opportunities and real-time CFO reporting.",
  },
  {
    company: "V-Trans",
    title: "Transportation and Fleet Cost Visibility",
    challenge: "A logistics business needed better visibility into fleet costs, trip expenses, route profitability, procurement and vendor management.",
    solution: "Contetra supported ERP transformation planning across fleet costing, procurement workflows, vendor payment automation and operational reporting.",
    value: "Improved route profitability visibility, stronger procurement control and better cost tracking across logistics operations.",
  },
  {
    company: "3PL and Warehouse Operations",
    title: "SCM and Billing Improvement",
    challenge: "A logistics and warehousing business required better control over warehouse billing, inventory movement, freight costing and operational workflows.",
    solution: "Contetra supported Oracle SCM process planning, warehouse management integration, freight costing visibility and billing accuracy improvements.",
    value: "Faster warehouse processing, improved order fulfilment and stronger revenue accuracy.",
  },
  {
    company: "Multi-Entity Finance",
    title: "Consolidation and Reporting Structure",
    challenge: "A growing enterprise needed better reporting across entities, intercompany transactions, approvals and financial governance.",
    solution: "Contetra supported finance structure review, reporting design, consolidation visibility and Oracle ERP-linked control planning.",
    value: "Stronger financial governance, cleaner reporting structures and improved leadership visibility.",
  },
  {
    company: "Project-Led Business",
    title: "Project Costing and Revenue Recognition",
    challenge: "A project-driven business needed better tracking of project costs, resources, billing milestones and revenue recognition.",
    solution: "Contetra supported functional requirements around project accounting, time tracking, billing, revenue visibility and management reporting.",
    value: "Improved project profitability visibility and stronger billing control.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow="Case Studies" title="Oracle ERP Case Study Snapshots" />
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((story) => (
            <article key={story.title} className="overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white shadow-[0_8px_28px_rgba(26,22,64,0.08)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
              <div className="bg-gradient-to-br from-[#1a1640] to-[#50a085] p-6 text-white dark:from-[#172036] dark:to-[#111827]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{story.company}</p>
                <h3 className="mt-2 text-xl font-bold leading-tight">{story.title}</h3>
              </div>
              <div className="space-y-5 p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#50a085] dark:text-[#86efac]">Challenge</p>
                  <p className="mt-2 text-sm leading-7 text-[#25243a] dark:text-[#D1D5DB]">{story.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#50a085] dark:text-[#86efac]">Solution</p>
                  <p className="mt-2 text-sm leading-7 text-[#25243a] dark:text-[#D1D5DB]">{story.solution}</p>
                </div>
                <div className="border-t border-[#eef1f8] pt-5 dark:border-[#1F2937]">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1a1640] dark:text-white">Business Value</p>
                  <p className="mt-2 rounded-[10px] bg-[#eaf6f2] px-4 py-3 text-sm font-semibold leading-6 text-[#1a1640] dark:bg-[#172036] dark:text-[#E5E7EB]">{story.value}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
