import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1640] via-[#221971] to-[#1a1640] py-24 dark:from-[#0A0A0A] dark:via-[#111827] dark:to-[#0A0A0A]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(80,160,133,0.18)_0%,transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-[#50a085]/30 bg-[#50a085]/10 px-4 py-2 text-sm font-semibold text-[#77bcab] dark:border-[#86efac]/30 dark:bg-[#172036] dark:text-[#86efac]">
          Oracle ERP Implementation
        </div>
        <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
          Planning an Oracle ERP implementation or optimisation project?
        </h2>
        <p className="mb-8 text-base leading-7 text-white/70 dark:text-[#D1D5DB]">
          Before investing further in Oracle ERP, understand your process gaps, automation opportunities, reporting needs, implementation roadmap, resource requirements and ROI potential.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm border border-[#50a085] bg-[#50a085] px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#459678] hover:shadow-[0_8px_24px_rgba(80,160,133,0.35)] dark:border-[#80D7AA] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">
            Schedule an ERP Scope & ROI Audit
          </Link>
          <Link href="/erp-implementation-solutions" className="inline-flex items-center justify-center rounded-sm border border-white/60 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#50a085]/20 dark:border-[#344155] dark:hover:bg-[#172036]">
            Explore ERP Implementation Services
          </Link>
        </div>
      </div>
    </section>
  );
}
