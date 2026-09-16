import Link from "next/link";
import SectionHeading from "./SectionHeading";
import DataTable from "./DataTable";

const rows: string[][] = [
  ["Business requirements and BRD ownership", "System configuration"],
  ["Process design and finance-led solution review", "Technical build"],
  ["Vendor selection and proposal comparison", "Infrastructure and deployment"],
  ["Chart of accounts and reporting structure", "Development and integrations"],
  ["Data migration governance and reconciliation", "Technical data loading"],
  ["UAT planning and business validation", "System testing support"],
  ["Change-management planning", "Product training support"],
  ["Post-go-live process optimization", "Break-fix support"],
];

export default function ContetraApproachSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="How Contetra Approaches Microsoft Dynamics 365 Implementation" />

        <div className="mx-auto mb-10 max-w-3xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>Contetra works as an advisory-led ERP consulting partner that sits on the business side of the implementation.</p>
          <p>
            The role is not to push one software product or maximize license sales. The role is to help management define requirements, make better design decisions, govern implementation, challenge unnecessary customization and ensure that the ERP supports finance, reporting, controls and business operations.
          </p>
        </div>

        <DataTable columns={["Contetra Supports", "Technical Vendor / Implementation Partner Supports"]} rows={rows} />

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            For businesses that already have a Microsoft Dynamics implementation partner, Contetra can work alongside the technical team to provide functional oversight, finance-process clarity, reporting design, business-side governance and decision support.
          </p>
          <p>
            For businesses still evaluating Microsoft Dynamics, Contetra can help clarify whether Business Central, Dynamics 365 Finance, another ERP product, or even the existing system is the right next step.
          </p>
          <p>
            Contetra&apos;s broader finance transformation capability also connects ERP decisions with{" "}
            <Link href="/services/management-reporting/fpa-services" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              FP&amp;A
            </Link>
            ,{" "}
            <Link href="/services/accounting-reporting/technical-accounting-advisory" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              technical accounting
            </Link>
            ,{" "}
            <Link href="/services/agentic-ai-and-process-automation" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              automation
            </Link>
            ,{" "}
            <Link href="/services/ipo-readiness" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              IPO readiness
            </Link>{" "}
            and{" "}
            <Link href="/offshore-accounting-services" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              offshore accounting
            </Link>{" "}
            support where relevant.
          </p>
          <p>
            You can also explore Contetra&apos;s{" "}
            <Link href="/blog" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              ERP and finance resources
            </Link>{" "}
            to understand how we approach ERP, reporting, finance transformation and automation challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
