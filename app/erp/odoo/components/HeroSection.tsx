import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#1a1640] py-24 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Odoo ERP Implementation Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-semibold leading-8 text-white">
            Choose the right Odoo Implementation partner to connect finance, sales, inventory, procurement, manufacturing and reporting.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 dark:text-[#D1D5DB] md:text-lg">
            Contetra helps growing businesses plan, implement and optimise Odoo ERP through business process mapping, ERP scope definition, module planning, Odoo Data migration readiness, UAT support, reporting design and post-go-live improvement.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm bg-[#221971] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#181253] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">
              Schedule an ERP Scope & ROI Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
