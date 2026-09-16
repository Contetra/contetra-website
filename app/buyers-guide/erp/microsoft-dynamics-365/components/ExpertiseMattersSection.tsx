import Link from "next/link";
import SectionHeading from "./SectionHeading";

const businessCentralItems = [
  "Core financial management, general ledger and fixed assets",
  "Purchasing, vendor management and accounts payable",
  "Sales, order management and accounts receivable",
  "Inventory management and light warehousing",
  "Project and job costing (for services and light manufacturing businesses)",
  "Bank reconciliation and cash management",
  "Native Microsoft 365 and Power Platform integration (Excel, Outlook, Power BI)",
];

export default function ExpertiseMattersSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Business Central or Finance and Operations Expertise Matters" />

        <div className="mx-auto mb-8 max-w-3xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Microsoft Dynamics 365 is not one uniform ERP product. As covered above, Business Central and Finance and Supply Chain Management are genuinely different applications, and partner expertise in one does not automatically transfer to the other.
          </p>
          <p>Dynamics 365 Business Central is built around a single, integrated application covering:</p>
        </div>

        <ul className="mx-auto mb-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {businessCentralItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#50a085] dark:bg-[#86efac]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mb-5 max-w-3xl text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          Dynamics 365 Finance and Supply Chain Management is actually two connected applications, often licensed and scoped together:
        </p>

        <div className="mx-auto mb-10 max-w-3xl space-y-3">
          <div className="rounded-[8px] border-l-2 border-[#50a085] bg-white px-5 py-4 text-sm leading-6 text-[#25243a] shadow-sm dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]">
            <span className="font-semibold text-[#1a1640] dark:text-white">Finance</span> — multi-entity, multi-currency financial management, advanced budgeting, financial consolidation, and regulatory/tax compliance across countries
          </div>
          <div className="rounded-[8px] border-l-2 border-[#50a085] bg-white px-5 py-4 text-sm leading-6 text-[#25243a] shadow-sm dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]">
            <span className="font-semibold text-[#1a1640] dark:text-white">Supply Chain Management</span> — manufacturing (discrete and process), warehouse management, demand planning, procurement and complex distribution logic
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            A partner experienced mainly in Business Central may not automatically have the depth required for a complex Dynamics 365 Finance and Supply Chain Management rollout. Similarly, a large enterprise team may not be the most efficient choice for a focused mid-market Business Central project. Do not evaluate Microsoft credentials in isolation — ask specifically which of the two products the proposed team has implemented, and how many times.
          </p>
          <p>
            Where accounting treatment, chart of accounts, reporting structure or consolidation design affects ERP configuration, businesses may also need{" "}
            <Link href="/services/accounting-reporting/technical-accounting-advisory" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              technical accounting advisory support
            </Link>{" "}
            before finalizing the ERP blueprint.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[8px] border-l-2 border-[#50a085] bg-[#eaf6f2] px-5 py-4 text-sm font-semibold leading-6 text-[#1a1640] dark:border-[#86efac] dark:bg-[#172036] dark:text-white">
          Business Central study reports up to 12.5% productivity improvement for finance and operations staff.
        </div>
      </div>
    </section>
  );
}
