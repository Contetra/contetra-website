import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="dark:bg-[#0A0A0A] py-24 text-white bg-[#1a1640]">
      <div className="mx-auto max-w-[1200px] px-6">
        <nav className="mb-10 flex flex-wrap gap-2 text-sm text-slate-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/erp-implementation-solutions" className="hover:text-white">ERP Services</Link>
          <span>/</span>
          <span className="font-semibold text-white">Odoo ERP</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-[#50a085] dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#86efac]">
              <span className="h-px flex-1 bg-white/20" />
              Odoo ERP Implementation Partner
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Odoo ERP Implementation <span className="text-[#50a085] dark:text-[#86efac]">Services</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 dark:text-[#D1D5DB] md:text-lg">
              Choose the right Odoo Implementation partner to connect finance, sales, inventory, procurement, manufacturing and reporting. Contetra helps growing businesses plan, implement and optimise Odoo ERP through business process mapping, ERP scope definition, module planning, Odoo Data migration readiness, UAT support, reporting design and post-go-live improvement.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm bg-[#221971] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#181253] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">
                Schedule an ERP Scope & ROI Audit
              </Link>
              <Link href="/erp-implementation-solutions" className="inline-flex items-center justify-center rounded-sm border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 dark:border-[#344155] dark:hover:bg-[#172036]">
                Explore All ERP Services
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 dark:border-[#1F2937] dark:bg-[#111827]">
              <div className="text-[2.5rem]  font-bold text-[#50a085] dark:text-[#86efac]">7+</div>
              <p className="mt-3 text-sm leading-7 text-slate-200 dark:text-[#D1D5DB]">
                Odoo functional areas supported from finance to manufacturing
              </p>
            </div>
            <div className="rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 dark:border-[#1F2937] dark:bg-[#111827]">
              <div className="text-[2.5rem]  font-bold text-white">4</div>
              <p className="mt-3 text-sm leading-7 text-slate-200 dark:text-[#D1D5DB]">Industry verticals with proven implementations</p>
            </div>
            <div className="rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 dark:border-[#1F2937] dark:bg-[#111827]">
              <div className="text-[2.5rem]  font-bold text-white">100+</div>
              <p className="mt-3 text-sm leading-7 text-slate-200 dark:text-[#D1D5DB]">Global clients served</p>
            </div>
            <div className="rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 dark:border-[#1F2937] dark:bg-[#111827]">
              <div className="text-[2.5rem]  font-bold text-white">30%</div>
              <p className="mt-3 text-sm leading-7 text-slate-200 dark:text-[#D1D5DB]">Average implementation cost reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
