import SectionHeading from "./SectionHeading";

const studies = [
  { company: "NISPL", title: "Unified ERP for Manufacturing Operations", body: "A filtration manufacturing business needed better control across finance, inventory, manufacturing, CRM and HRMS. Contetra supported ERPNext planning across operational workflows, reporting needs and module-level requirements to improve visibility and process discipline." },
  { company: "LA Technologies", title: "Project and Service Business ERP Structure", body: "A service-led technology business needed better visibility across projects, services, faculty management, CRM activities and profitability. Contetra structured requirements around project tracking, billing, resource utilisation and management reporting." },
  { company: "Harissons Bags", title: "Manufacturing, Inventory and Quality Control", body: "A manufacturing business required better control over in-house production, outsourced processes, BOM, WIP, inventory and quality workflows. Contetra supported process design to improve operational visibility and reporting." },
  { company: "CGR Metalloys", title: "Multi-Location Refining and Inventory Control", body: "A precious metals business needed structured workflows across labs, refinery operations, inventory movement and finance reporting. Contetra supported planning to improve control over critical operations and stock visibility." },
  { company: "Ajanta Bottles", title: "Sales, Inventory and Reporting Visibility", body: "A growing trading and distribution business needed stronger customer, inventory, sales and management reporting visibility. Contetra identified ERPNext improvement areas around operations, integrations and business reporting." },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow="Case Studies" title="ERPNext Case Study Snapshots" />
        <div className="grid gap-6 lg:grid-cols-2">
          {studies.map((study) => (
            <article key={study.title} className="overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white shadow-[0_8px_28px_rgba(26,22,64,0.08)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
              <div className="bg-gradient-to-br from-[#1a1640] to-[#50a085] p-6 text-white dark:from-[#172036] dark:to-[#111827]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{study.company}</p>
                <h3 className="mt-2 text-xl font-bold leading-tight">{study.title}</h3>
              </div>
              <p className="p-6 text-sm leading-7 text-[#25243a] dark:text-[#D1D5DB]">{study.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
