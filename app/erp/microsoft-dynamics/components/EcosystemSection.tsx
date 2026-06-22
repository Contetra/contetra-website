import { BarChart3, Boxes, BriefcaseBusiness, Building2, Handshake, Landmark, Store, Workflow } from "lucide-react";

type AppInfo = { app: string; use: string };

const icons = [Landmark, Building2, Boxes, BriefcaseBusiness, Handshake, Store, BarChart3, Workflow];

export default function EcosystemSection({ msApps }: { msApps: AppInfo[] }) {
  return (
    <section className="py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">Microsoft Dynamics 365 Modules and Industries We Support</h2>
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">Microsoft Dynamics 365 offers multiple applications and modules that can support finance, operations, supply chain, projects, sales, service and reporting. The right module mix depends on business size, industry, process complexity and growth plans.</p>
        </div>
        <div className="mb-9 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#50a085]/50 dark:bg-[#86efac]/50" />
          <h3 className="text-center text-2xl font-bold text-[#1a1640] dark:text-white">Key Microsoft Dynamics 365 Modules</h3>
          <span className="h-px w-12 bg-[#50a085]/50 dark:bg-[#86efac]/50" />
        </div>
        <div className="rounded-[8px] border border-[#e5ece9] bg-[#f5faf8] p-4 dark:border-[#1F2937] dark:bg-[#0f1518] sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-4 rounded-[8px] bg-[#1a1640] px-5 py-3 text-xs font-bold text-white dark:bg-[#172036]">
            <span>Module / Application</span>
            <span>Business Use</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {msApps.map((item, index) => {
              const Icon = icons[index];
              return (
                <article key={item.app} className="group relative flex min-h-[238px] flex-col overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white p-6 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/55">
                  <span className="absolute inset-x-0 top-0 h-1 bg-[#50a085] opacity-70 transition group-hover:opacity-100 dark:bg-[#86efac]" />
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] transition group-hover:bg-[#50a085] group-hover:text-white dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac] dark:group-hover:bg-[#86efac] dark:group-hover:text-[#0A0A0A]"><Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} /></span>
                  <h3 className="mb-3 text-base font-bold leading-snug text-[#1a1640] dark:text-white">{item.app}</h3>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">{item.use}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
