import SectionHeading from "./SectionHeading";
import DataTable from "./DataTable";

const rows: string[][] = [
  ["“The largest partner is always safest.”", "Large partners bring scale, but may not provide proportionate attention for focused mid-market projects."],
  ["“A low quote means better value.”", "A cheaper proposal may exclude migration, integrations, training, change management or hypercare."],
  ["“Business Central is only for small companies.”", "Business Central can support many growing businesses, but product fit depends on process complexity."],
  ["“ERP implementation is mostly IT work.”", "ERP implementation affects finance, operations, data, controls, reporting and people."],
  ["“Go-live means the project is complete.”", "Value realization often begins after go-live, during stabilization and optimization."],
  ["“Customization solves every gap.”", "Excessive customization can increase maintenance, testing and upgrade effort."],
];

export default function MythsSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Common Microsoft Dynamics 365 Myths" />

        <DataTable columns={["Myth", "Reality"]} rows={rows} />

        <div className="mx-auto mt-10 max-w-3xl space-y-3 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            For more context on why ERP systems often fail to support real-time decisions, read Contetra&apos;s article on why ERP systems fail to support real-time decisions.
          </p>
          <p>You may also find this useful: why ERP cannot fix broken processes alone.</p>
        </div>
      </div>
    </section>
  );
}
