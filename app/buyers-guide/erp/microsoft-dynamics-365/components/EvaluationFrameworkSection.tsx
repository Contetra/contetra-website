import SectionHeading from "./SectionHeading";
import DataTable from "./DataTable";

const rows: string[][] = [
  ["Business size", "Number of entities, locations, users and transaction volumes"],
  ["Product fit", "Business Central, Dynamics 365 Finance, Supply Chain Management or legacy NAV/GP migration"],
  ["Process complexity", "Finance, procurement, sales, inventory, manufacturing, warehousing, projects or service"],
  ["Reporting needs", "MIS, dashboards, statutory reporting, consolidation and management reporting"],
  ["Integration needs", "Banks, CRM, payroll, e-commerce, WMS, tax tools and BI systems"],
  ["Internal capability", "Whether your team can own requirements, testing, data and change"],
  ["Timeline", "Required go-live date and whether the business can realistically support it"],
  ["Post-go-live support", "Hypercare, issue resolution, enhancements and continuous improvement"],
];

export default function EvaluationFrameworkSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title='What Does “Best Microsoft Dynamics 365 Partner” Actually Mean?' />

        <div className="mx-auto mb-10 max-w-3xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>There is no single Microsoft Dynamics partner that is right for every business.</p>
          <p>
            A multinational company rolling out Dynamics 365 Finance and Supply Chain Management across multiple countries needs a different delivery model from a mid-sized company implementing Business Central for finance, purchasing, sales, inventory and reporting.
          </p>
          <p>
            Instead of asking, &quot;Who is the highest-ranked Microsoft Dynamics partner?&quot;, ask: which partner model fits our business complexity, internal capability, project risk and expected outcomes?
          </p>
        </div>

        <DataTable columns={["Evaluation Area", "What You Need to Understand"]} rows={rows} />

        <p className="mx-auto mt-10 max-w-3xl text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          The strongest Microsoft Dynamics 365 ERP partner is not automatically the largest firm or the lowest bidder. It is the partner whose team, methodology, commercial model and experience match the actual project.
        </p>
      </div>
    </section>
  );
}
