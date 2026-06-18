import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-[#0d1b2a] via-[#102535] to-[#0d2233] py-24 text-white">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-[#0e7c7b]/20 bg-[#0e7c7b]/10 px-4 py-2 text-sm font-semibold text-[#0e7c7b]">
          Odoo ERP Implementation
        </div>
        <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
          Planning an Odoo ERP Implementation or Reviewing Your Current System?
        </h2>
        <p className="mb-8 text-base leading-8 text-white/70">
          Before investing further in Odoo, understand your process gaps, migration risks, reporting needs, implementation scope and ROI potential clearly.
        </p>
        <div className="mx-auto flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-[#c9a84c] px-8 py-3 text-sm font-semibold text-[#0d1b2a] transition hover:bg-[#e8c97a]">
            Schedule an ERP Scope & ROI Audit
          </Link>
          <Link href="/erp-implementation-solutions" className="inline-flex items-center justify-center rounded-sm border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
            Explore Our ERP Implementation Services
          </Link>
        </div>
      </div>
    </section>
  );
}
