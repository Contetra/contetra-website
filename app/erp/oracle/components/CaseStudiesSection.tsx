const caseStudies = [
  {
    title: "Gupshup: Oracle Fusion Finance Automation",
    paragraphs: [
      "A fast-growing technology business required better financial workflow automation, compliance visibility and faster close processes.",
      "Contetra supported Oracle Fusion finance transformation through financial process review, reconciliation automation, CFO dashboard planning and KPI reporting alignment.",
      "Business value: Improved process fit, stronger finance visibility, automation opportunities and real-time CFO reporting.",
    ],
  },
  {
    title: "V-Trans: Transportation and Fleet Cost Visibility",
    paragraphs: [
      "A logistics business needed better visibility into fleet costs, trip expenses, route profitability, procurement and vendor management.",
      "Contetra supported ERP transformation planning across fleet costing, procurement workflows, vendor payment automation and operational reporting.",
      "Business value: Improved route profitability visibility, stronger procurement control and better cost tracking across logistics operations.",
    ],
  },
  {
    title: "3PL and Warehouse Operations: SCM and Billing Improvement",
    paragraphs: [
      "A logistics and warehousing business required better control over warehouse billing, inventory movement, freight costing and operational workflows.",
      "Contetra supported Oracle SCM process planning, warehouse management integration, freight costing visibility and billing accuracy improvements.",
      "Business value: Faster warehouse processing, improved order fulfilment and stronger revenue accuracy.",
    ],
  },
  {
    title: "Multi-Entity Finance: Consolidation and Reporting Structure",
    paragraphs: [
      "A growing enterprise needed better reporting across entities, intercompany transactions, approvals and financial governance.",
      "Contetra supported finance structure review, reporting design, consolidation visibility and Oracle ERP-linked control planning.",
      "Business value: Stronger financial governance, cleaner reporting structures and improved leadership visibility.",
    ],
  },
  {
    title: "Project-Led Business: Project Costing and Revenue Recognition",
    paragraphs: [
      "A project-driven business needed better tracking of project costs, resources, billing milestones and revenue recognition.",
      "Contetra supported functional requirements around project accounting, time tracking, billing, revenue visibility and management reporting.",
      "Business value: Improved project profitability visibility and stronger billing control.",
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-14 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Case Studies, Why Contetra and FAQs</h2>
        <h3 className="mb-10 text-center text-2xl font-bold dark:text-white">Oracle ERP Case Study Snapshots</h3>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white p-7 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/55 hover:shadow-[0_16px_34px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/50">
              <span className="absolute inset-x-0 top-0 h-1 bg-[#50a085] opacity-70 transition group-hover:opacity-100 dark:bg-[#86efac]" />
              <h4 className="mb-5 text-lg font-bold leading-snug transition-colors group-hover:text-[#347d68] dark:text-white dark:group-hover:text-[#86efac]">{study.title}</h4>
              <div className="space-y-4 text-sm leading-7 text-[#3f4352] dark:text-[#D1D5DB]">
                {study.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className={index === 2 ? "border-t border-[#e2e8e6] pt-4 font-semibold text-[#1a1640] dark:border-[#1F2937] dark:text-[#E5E7EB]" : ""}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
