import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-contetra-blue py-24 text-white">
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
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-contetra-green">
              <span className="h-px flex-1 bg-white/20" />
              Odoo ERP Implementation Partner
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Choosing the Right <span className="text-contetra-green">Odoo Implementation Partner</span> for Scalable ERP Success
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Connect finance, sales, inventory, procurement, manufacturing and reporting through an Odoo ERP environment designed around your business needs. Contetra supports businesses evaluating or implementing Odoo through finance-led process mapping and adoption support.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-contetra-green px-8 py-3 text-sm font-semibold text-[#0d1b2a] transition hover:brightness-110">
                Book an Odoo ERP Strategy Discussion
              </Link>
              <Link href="/erp-implementation-solutions" className="inline-flex items-center justify-center rounded-sm border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore All ERP Services
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1">
              <div className="text-[2.5rem] font-serif font-bold text-[#c9a84c]">7+</div>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Odoo functional areas supported from finance to manufacturing
              </p>
            </div>
            <div className="rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1">
              <div className="text-[2.5rem] font-serif font-bold text-white">4</div>
              <p className="mt-3 text-sm leading-7 text-slate-200">Industry verticals with proven implementations</p>
            </div>
            <div className="rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1">
              <div className="text-[2.5rem] font-serif font-bold text-white">100+</div>
              <p className="mt-3 text-sm leading-7 text-slate-200">Global clients served</p>
            </div>
            <div className="rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1">
              <div className="text-[2.5rem] font-serif font-bold text-white">30%</div>
              <p className="mt-3 text-sm leading-7 text-slate-200">Average implementation cost reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
