import { Check } from "lucide-react";
import Link from "next/link";

const auditPoints = [
  "Current process gaps",
  "ERP readiness level",
  "SAP implementation roadmap",
  "Expected ROI and business case",
  "Change management requirements",
  "Data migration complexity",
  "Governance and project risks",
];

export default function CtaSection() {
  return (
    <section className="bg-[#1a1640] py-24 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="text-center text-3xl font-semibold leading-tight md:text-[2.6rem]">Schedule an ERP Scope &amp; ROI Audit</h3>
        <p className="mt-5 text-center text-base leading-8 text-white/75 dark:text-[#D1D5DB]">Before committing to SAP S/4HANA, understand:</p>
        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          {auditPoints.map((item) => <p key={item} className="flex items-center gap-3 border-b border-white/15 py-3 text-sm font-semibold dark:border-[#1F2937]"><Check aria-hidden="true" className="h-4 w-4 shrink-0 text-[#77bcab] dark:text-[#86efac]" />{item}</p>)}
        </div>
        <div className="mt-10 border-t border-white/15 pt-10 text-center dark:border-[#1F2937]">
          <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm bg-[#50a085] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#459678] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">Schedule a SAP S/4HANA ERP Scope &amp; ROI Audit with Contetra</Link>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8">Build a business-first SAP roadmap that delivers measurable outcomes&mdash;not just a successful go-live.</p>
        </div>
      </div>
    </section>
  );
}
