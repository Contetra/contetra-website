import { BarChart3, Blocks, BookOpenCheck, ClipboardCheck, Database, FileText, Network, RefreshCw, SearchCheck, UsersRound } from "lucide-react";

type Service = { title: string; desc: string };

const icons = [SearchCheck, FileText, Network, BookOpenCheck, Blocks, Database, ClipboardCheck, UsersRound, BarChart3, RefreshCw];

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">What Contetra Delivers in Microsoft Dynamics 365 Implementation</h2>
          <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>Contetra works as a finance-led ERP consulting partner that helps businesses bridge the gap between technology implementation and business outcomes.</p>
            <p>We do not only look at screens, modules and configuration. We help define how finance, procurement, inventory, sales, operations, projects and reporting should work together inside the ERP.</p>
          </div>
        </div>
        <h3 className="mb-9 text-center text-2xl font-bold dark:text-white">Our Microsoft ERP Implementation Support</h3>
        <div className="mb-5 flex items-center justify-between gap-4 rounded-[8px] bg-[#1a1640] px-5 py-3 text-xs font-bold text-white dark:bg-[#172036]">
          <span>Contetra Deliverable</span>
          <span>What It Means for Your Business</span>
        </div>
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
