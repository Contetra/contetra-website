import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#1a1640] py-24 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
          Planning a Zoho ERP implementation or optimisation project?
        </h2>
        <p className="mb-8 text-base leading-7 text-white/80 dark:text-[#D1D5DB]">
          Before investing further in Zoho ERP, understand your process gaps,
          reporting needs, implementation scope, data migration risks and ROI
          potential clearly.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center rounded-sm border border-[#50a085] bg-[#50a085] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#459678] dark:border-[#80D7AA] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]"
        >
          Schedule an ERP Scope &amp; ROI Audit
        </Link>
      </div>
    </section>
  );
}
