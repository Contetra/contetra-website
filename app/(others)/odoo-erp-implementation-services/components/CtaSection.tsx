import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-[#1a1640] via-[#221971] to-[#1a1640] py-24 text-white dark:from-[#0A0A0A] dark:via-[#111827] dark:to-[#0A0A0A]">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
          Planning an Odoo ERP Implementation or Reviewing Your Current System?
        </h2>
        <p className="mb-8 text-base leading-8 text-white/70 dark:text-[#D1D5DB]">
          Before investing further in Odoo, understand your process gaps, migration risks, reporting needs, implementation scope and ROI potential clearly.
        </p>
        <div className="mx-auto flex justify-center">
          <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm bg-[#50a085] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#459678] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">
            Schedule an ERP Scope & ROI Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
