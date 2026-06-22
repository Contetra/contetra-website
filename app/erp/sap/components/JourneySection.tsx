import { Compass, Database, FileText, GraduationCap, Network, RefreshCw, ShieldCheck } from "lucide-react";

const capabilities = [
  { title: "ERP Strategy & Readiness Assessment", icon: Compass, items: ["ERP selection support", "SAP readiness review", "Future-state architecture", "ROI assessment"] },
  { title: "Business Process Mapping", icon: Network, items: ["Procure-to-Pay (P2P)", "Order-to-Cash (O2C)", "Record-to-Report (R2R)", "Plan-to-Produce", "Project-to-Profit"] },
  { title: "Functional Requirement Documentation (FRD)", icon: FileText, items: ["Detailed BRDs", "Process flows", "Control matrices", "Reporting requirements"] },
  { title: "PMO & Governance", icon: ShieldCheck, items: ["Steering committee management", "Project governance", "Risk management", "Vendor coordination"] },
  { title: "Master Data Management", icon: Database, items: ["Customer masters", "Vendor masters", "Material masters", "Data cleansing", "Data migration planning"] },
  { title: "UAT & Training", icon: GraduationCap, items: ["User acceptance testing", "End-user training", "SOP preparation", "Hypercare support"] },
  { title: "Change Management", icon: RefreshCw, items: ["Stakeholder alignment", "User adoption", "Process redesign", "KPI definition"] },
];

export default function JourneySection() {
  return (
    <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h3 className="mb-6 text-3xl font-semibold leading-tight md:text-[2.6rem]">What Contetra Brings to Your SAP S/4HANA Journey</h3>
          <p className="text-base leading-8 text-white/75 dark:text-[#D1D5DB]">Unlike traditional system integrators that focus primarily on technology, Contetra acts as the functional and transformation partner, ensuring SAP supports your strategic business objectives.</p>
        </div>
        <div className="border-y border-white/15 dark:border-[#1F2937]">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className={`group grid gap-5 py-7 transition hover:bg-white/5 md:grid-cols-[0.8fr_1.2fr] md:items-start md:px-6 dark:hover:bg-[#111827] ${index < capabilities.length - 1 ? "border-b border-white/15 dark:border-[#1F2937]" : ""}`}>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#50a085]/50 text-[#77bcab] transition group-hover:bg-[#50a085] group-hover:text-white dark:border-[#86efac]/40 dark:text-[#86efac] dark:group-hover:bg-[#86efac] dark:group-hover:text-[#0A0A0A]"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                  <h3 className="text-lg font-bold leading-snug">{capability.title}</h3>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {capability.items.map((item) => <p key={item} className="border-l border-white/25 pl-3 text-sm leading-6 text-white/65 dark:border-[#344155] dark:text-[#D1D5DB]">{item}</p>)}
                </div>
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-10 max-w-4xl border-l-4 border-[#50a085] bg-white/5 px-6 py-5 text-center text-base font-semibold leading-8 dark:border-[#86efac] dark:bg-[#111827]">This finance-led methodology ensures SAP becomes a transformation platform rather than just a system replacement.</p>
      </div>
    </section>
  );
}
