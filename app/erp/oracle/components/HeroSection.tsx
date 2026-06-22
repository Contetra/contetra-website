import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#1a1640] py-24 dark:bg-[#0A0A0A] md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h1 className="mx-auto mb-6 max-w-5xl text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-tight text-white">Oracle ERP Implementation Services</h1>
        <p className="mx-auto mb-5 max-w-4xl text-[1.18rem] font-semibold leading-[1.7] text-white">Implement Oracle ERP around finance control, operational visibility and scalable decision-making.</p>
        <p className="mx-auto mb-10 max-w-4xl text-base leading-7 text-white/80 dark:text-[#D1D5DB]">Contetra helps growing and mid-market businesses plan, implement and optimise Oracle ERP through business process mapping, ERP scope definition, module planning, FRD preparation, data readiness, UAT support, implementation governance, reporting design and post-go-live improvement.</p>
        <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm border border-[#221971] bg-[#221971] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#181253] dark:border-[#80D7AA] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">Schedule an ERP Scope &amp; ROI Audit</Link>
      </div>
    </section>
  );
}
