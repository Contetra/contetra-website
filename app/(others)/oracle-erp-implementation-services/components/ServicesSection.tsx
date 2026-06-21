import SectionHeading from "./SectionHeading";

const services = [
  { title: "ERP Scope & ROI Audit", desc: "Review current systems, process gaps, Oracle ERP need, expected benefits, risks and ROI opportunities" },
  { title: "ERP Selection and Assessment", desc: "Evaluate business requirements, fit-gap areas and future-state ERP architecture" },
  { title: "Business Process Mapping", desc: "Map P2P, O2C, R2R, inventory, project accounting, procurement and reporting workflows" },
  { title: "Functional Requirement Documentation", desc: "Prepare detailed FRD, process documentation, workflow requirements and reporting needs" },
  { title: "Chart of Accounts and Reporting Review", desc: "Structure finance data for controls, MIS, consolidation and management reporting" },
  { title: "Data Migration Support", desc: "Support master data cleansing, validation, opening balances, reconciliations and cutover planning" },
  { title: "Implementation Governance and PMO", desc: "Track milestones, manage risks, coordinate vendors and support project governance" },
  { title: "UAT and Training Support", desc: "Help business users test workflows, document issues and improve adoption" },
  { title: "Change Management", desc: "Support user adoption, KPI redesign, governance frameworks and process transformation" },
  { title: "Post-Go-Live Optimisation", desc: "Stabilise processes, reduce manual workarounds and improve reporting after go-live" },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="What Contetra Delivers"
          title="What Contetra Delivers in Oracle ERP Implementation"
          desc="Contetra works as a finance-led Oracle ERP consulting partner that helps businesses bridge the gap between business requirements and technical implementation. We help define how finance, procurement, supply chain, manufacturing, projects and reporting should work together inside Oracle ERP."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-[12px] border border-[#eef1f8] bg-white p-8 shadow-[0_2px_12px_rgba(26,22,64,0.05)] transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-[0_18px_32px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)] dark:hover:shadow-[0_22px_60px_rgba(0,0,0,0.32)]">
              <div className="mb-3 text-[2.5rem] font-bold leading-none text-[#50a085]/25 dark:text-[#86efac]/30">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="mb-2 text-base font-bold text-[#1a1640] dark:text-white">{service.title}</h3>
              <p className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
