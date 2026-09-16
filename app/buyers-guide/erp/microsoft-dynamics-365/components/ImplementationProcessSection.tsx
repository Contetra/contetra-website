import Link from "next/link";
import SectionHeading from "./SectionHeading";
import DataTable from "./DataTable";

const rows: string[][] = [
  ["Discovery and Assessment", "Understand current processes, pain points, scope and business objectives"],
  ["Solution Blueprint and Process Design", "Define future-state processes, roles, controls, integrations and reporting"],
  ["Build and Configuration", "Configure the Dynamics environment based on agreed design"],
  ["Data Migration", "Extract, cleanse, map, migrate and reconcile data"],
  ["Testing and Business Validation", "Test complete business scenarios and reports"],
  ["Go-Live and Cutover", "Transition from legacy environment to live operations"],
  ["Hypercare and Stabilization", "Resolve issues, support users and refine the system"],
];

export default function ImplementationProcessSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Microsoft Dynamics 365 Implementation Process" />

        <div className="mx-auto mb-10 max-w-3xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>A successful Microsoft Dynamics ERP implementation does not begin with configuration. It begins with clarity.</p>
          <p>Most projects move through seven connected stages:</p>
        </div>

        <DataTable columns={["Phase", "What Happens"]} rows={rows} />

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Discovery should examine finance and operational processes, existing applications, manual workarounds, spreadsheet dependency, approval structures, internal controls, master data quality, integrations, legal entities, user groups and future growth plans.
          </p>
          <p>
            The blueprint stage defines how important business processes should operate in Microsoft Dynamics 365. It should resolve legal entities, chart of accounts, financial dimensions, approval workflows, procurement, sales, inventory, user roles, reporting, integration design and migration approach before these become expensive configuration changes.
          </p>
          <p>
            Data migration is one of the most underestimated workstreams. A technically well-configured system can still produce poor outcomes if the information loaded into it is incomplete, duplicated, outdated or incorrectly structured.
          </p>
          <p>
            Testing should prove that real business processes work from beginning to end. For example, procure-to-pay should be tested from purchase requirement to payment and reconciliation. Order-to-cash should be tested from customer order to collection and reporting. Month-end close should be tested from transaction posting to financial reporting.
          </p>
          <p>
            Go-live is not the end of implementation. It is the point where the business starts using the new environment for real transactions. Hypercare should then address user questions, process exceptions, integration failures, data issues, reporting adjustments, security problems and additional training.
          </p>
          <p>
            For businesses where ERP design affects cash flow, budgeting, profitability and board reporting,{" "}
            <Link href="/services/management-reporting/fractional-cfo-services" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              Virtual CFO
            </Link>{" "}
            and{" "}
            <Link href="/services/management-reporting/fpa-services" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              FP&amp;A support
            </Link>{" "}
            can help connect system design with management decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
