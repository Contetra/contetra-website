import { BarChart3, ClipboardCheck, Database, FileSearch, FileText, Network, RefreshCw, SearchCheck, Settings2, UsersRound } from "lucide-react";

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

const icons = [SearchCheck, FileSearch, Network, FileText, BarChart3, Database, Settings2, ClipboardCheck, UsersRound, RefreshCw];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">What Contetra Delivers in Oracle ERP Implementation</h2>
          <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>Contetra works as a finance-led Oracle ERP consulting partner that helps businesses bridge the gap between business requirements and technical implementation.</p>
            <p>We do not only focus on modules and system configuration. We help define how finance, procurement, supply chain, manufacturing, projects and reporting should work together inside Oracle ERP.</p>
          </div>
        </div>
        <h3 className="mb-9 text-center text-2xl font-bold dark:text-white">Contetra&apos;s Oracle ERP Implementation Support</h3>
        <div className="mb-5 flex items-center justify-between gap-4 rounded-[8px] bg-[#1a1640] px-5 py-3 text-xs font-bold text-white dark:bg-[#172036]"><span>Contetra Deliverable</span><span>What It Means for Your Business</span></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article key={service.title} className="group flex min-h-[210px] flex-col rounded-[8px] border border-[#e2e8e6] bg-white p-7 shadow-[0_5px_18px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/50 hover:shadow-[0_14px_30px_rgba(26,22,64,0.11)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/50">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#eaf6f2] text-[#347d68] transition group-hover:bg-[#50a085] group-hover:text-white dark:bg-[#172036] dark:text-[#86efac] dark:group-hover:bg-[#86efac] dark:group-hover:text-[#0A0A0A]"><Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} /></span>
                <h3 className="mb-3 text-base font-bold leading-snug dark:text-white">{service.title}</h3>
                <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">{service.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
