import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d1b2a] via-[#102535] to-[#0d2233] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(14,124,123,0.15)_0%,transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-[#0e7c7b]/20 bg-[#0e7c7b]/10 px-4 py-2 text-sm font-semibold text-[#14a8a7]">
          Microsoft Dynamics 365 Implementation
        </div>
        <h2 className="mb-4 font-serif text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
          Planning a Microsoft Dynamics 365 implementation or ERP optimisation project?
        </h2>
        <p className="mb-8 text-base leading-7 text-white/70">
          Before investing further in ERP, understand the scope, risks, process gaps and ROI potential clearly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm border border-[#c9a84c] bg-[#c9a84c] px-8 py-3 text-sm font-semibold text-[#0d1b2a] transition duration-200 hover:bg-[#e8c97a] hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]">
            Schedule an ERP Scope & ROI Audit
          </Link>
          <Link href="/erp-implementation-solutions" className="inline-flex items-center justify-center rounded-sm border border-white/60 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/20">
            Explore ERP Implementation Services
          </Link>
        </div>
      </div>
    </section>
  );
}
