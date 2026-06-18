import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d1b2a] py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(14,124,123,0.18)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(201,168,76,0.08)_0%,transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/70">
          <Link href="/" className="transition hover:text-[#14a8a7]">Home</Link>
          <span className="opacity-50">/</span>
          <Link href="/erp-implementation-solutions" className="transition hover:text-[#14a8a7]">ERP Services</Link>
          <span className="opacity-50">/</span>
          <span className="text-[#14a8a7]">Microsoft Dynamics 365</span>
        </nav>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-block h-[2px] w-8 bg-[#0e7c7b]" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#14a8a7]">Microsoft Dynamics 365 Implementation Services</span>
            </div>
            <h1 className="mb-6 text-[clamp(2.2rem,4.5vw,3.8rem)] font-serif font-bold leading-tight text-white">
              Microsoft Dynamics 365 Implementation Services
            </h1>
            <p className="mb-5 max-w-[560px] text-[1.18rem] leading-[1.7] text-white/80">
              Implement Microsoft Dynamics 365 around business outcomes, not just software configuration.
            </p>
            <p className="mb-10 max-w-[560px] text-base leading-7 text-white/65">
              Contetra helps growing businesses plan, implement and optimise Microsoft Dynamics 365 with a finance-led approach. We support business process mapping, ERP scope definition, module planning, vendor coordination, data readiness, UAT, reporting design and post-go-live optimisation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm border border-[#c9a84c] bg-[#c9a84c] px-8 py-3 text-sm font-semibold text-[#0d1b2a] transition duration-200 hover:bg-[#e8c97a] hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]">
                Schedule an ERP Scope & ROI Audit
              </Link>
              <Link href="/erp-implementation-solutions" className="inline-flex items-center justify-center rounded-sm border border-white/60 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10">
                Explore All ERP Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#0e7c7b]/40">
                <div className="mb-1 text-[2.2rem] font-serif font-bold leading-none text-[#14a8a7]">Scope</div>
                <div className="text-sm font-medium text-white/70">ERP requirements, risks and ROI clarity</div>
              </div>
              <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#0e7c7b]/40">
                <div className="mb-1 text-[2.2rem] font-serif font-bold leading-none text-[#14a8a7]">BRD</div>
                <div className="text-sm font-medium text-white/70">Functional requirements before configuration</div>
              </div>
              <div className="sm:col-span-2 rounded-[12px] border border-[#0e7c7b]/25 bg-[#0e7c7b]/12 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1">
                <div className="mb-1 text-[2.2rem] font-serif font-bold leading-none text-[#14a8a7]">10+</div>
                <div className="text-sm font-medium text-white/70">Years of finance transformation and ERP advisory experience</div>
              </div>
              <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#0e7c7b]/40">
                <div className="mb-1 text-[2.2rem] font-serif font-bold leading-none text-[#14a8a7]">MIS</div>
                <div className="text-sm font-medium text-white/70">Power BI and management reporting design</div>
              </div>
              <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#0e7c7b]/40">
                <div className="mb-1 text-[2.2rem] font-serif font-bold leading-none text-[#14a8a7]">UAT</div>
                <div className="text-sm font-medium text-white/70">Testing, issue tracking and go-live readiness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
