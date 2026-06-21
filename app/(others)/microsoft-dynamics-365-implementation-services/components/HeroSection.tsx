import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a1640] py-24 dark:bg-[#0A0A0A] md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(80,160,133,0.22)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(91,141,239,0.12)_0%,transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/70">
          <Link href="/" className="transition hover:text-[#50a085] dark:hover:text-[#86efac]">Home</Link>
          <span className="opacity-50">/</span>
          <Link href="/erp-implementation-solutions" className="transition hover:text-[#50a085] dark:hover:text-[#86efac]">ERP Services</Link>
          <span className="opacity-50">/</span>
          <span className="text-[#50a085] dark:text-[#86efac]">Microsoft Dynamics 365</span>
        </nav>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-block h-[2px] w-8 bg-[#50a085] dark:bg-[#86efac]" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Microsoft Dynamics 365 Implementation Services</span>
            </div>
            <h1 className="mb-6 text-[clamp(2.2rem,4.5vw,3.8rem)]  font-bold leading-tight text-white">
              Microsoft Dynamics 365 Implementation Services
            </h1>
            <p className="mb-5 max-w-[560px] text-[1.18rem] leading-[1.7] text-white/80 dark:text-[#E5E7EB]">
              Implement Microsoft Dynamics 365 around business outcomes, not just software configuration.
            </p>
            <p className="mb-10 max-w-[560px] text-base leading-7 text-white/65 dark:text-[#D1D5DB]">
              Contetra helps growing businesses plan, implement and optimise Microsoft Dynamics 365 with a finance-led approach. We support business process mapping, ERP scope definition, module planning, vendor coordination, data readiness, UAT, reporting design and post-go-live optimisation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm border border-[#221971] bg-[#221971] px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#181253] hover:shadow-[0_8px_24px_rgba(34,25,113,0.28)] dark:border-[#80D7AA] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">
                Schedule an ERP Scope & ROI Audit
              </Link>
              <Link href="/erp-implementation-solutions" className="inline-flex items-center justify-center rounded-sm border border-[#50a085] bg-white/5 px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#50a085]/15 dark:border-[#344155] dark:hover:bg-[#172036]">
                Explore All ERP Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#50a085]/40 dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/50">
                <div className="mb-1 text-[2.2rem]  font-bold leading-none text-[#50a085] dark:text-[#86efac]">Scope</div>
                <div className="text-sm font-medium text-white/70 dark:text-[#D1D5DB]">ERP requirements, risks and ROI clarity</div>
              </div>
              <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#50a085]/40 dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/50">
                <div className="mb-1 text-[2.2rem]  font-bold leading-none text-[#50a085] dark:text-[#86efac]">BRD</div>
                <div className="text-sm font-medium text-white/70 dark:text-[#D1D5DB]">Functional requirements before configuration</div>
              </div>
              <div className="sm:col-span-2 rounded-[12px] border border-[#50a085]/25 bg-[#50a085]/12 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 dark:border-[#86efac]/30 dark:bg-[#172036]">
                <div className="mb-1 text-[2.2rem]  font-bold leading-none text-[#50a085] dark:text-[#86efac]">10+</div>
                <div className="text-sm font-medium text-white/70 dark:text-[#D1D5DB]">Years of finance transformation and ERP advisory experience</div>
              </div>
              <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#50a085]/40 dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/50">
                <div className="mb-1 text-[2.2rem]  font-bold leading-none text-[#50a085] dark:text-[#86efac]">MIS</div>
                <div className="text-sm font-medium text-white/70 dark:text-[#D1D5DB]">Power BI and management reporting design</div>
              </div>
              <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#50a085]/40 dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/50">
                <div className="mb-1 text-[2.2rem]  font-bold leading-none text-[#50a085] dark:text-[#86efac]">UAT</div>
                <div className="text-sm font-medium text-white/70 dark:text-[#D1D5DB]">Testing, issue tracking and go-live readiness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
