import Link from "next/link";
import SectionHeading from "./SectionHeading";

export default function SmeSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="mx-auto max-w-3xl">
        <SectionHeading title="Microsoft Dynamics 365 for SMEs and Growing Businesses" />

        <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>Small and mid-sized businesses usually evaluate ERP when operating complexity grows faster than existing systems can support.</p>
          <p>
            Common warning signs include slow management reporting, separate spreadsheets across teams, inconsistent customer or inventory data, manual reconciliations, offline approval workflows, weak inventory visibility and delays in month-end closing.
          </p>
          <p>At this stage, the decision should not be driven by software popularity. It should be driven by the operational problems the business needs to solve.</p>
          <p>
            A practical SME implementation should usually prioritize the highest-value processes, use standard functionality where practical, follow a phased roadmap, secure senior consultant involvement, maintain tight scope control and keep change management practical.
          </p>
          <p>
            For growing businesses, the goal is not to copy a multinational implementation model. The goal is to build an ERP environment that improves control, reporting, scalability and decision-making without overwhelming the organization.
          </p>
          <p>
            Where recurring accounting work needs additional execution capacity after ERP implementation, businesses may also evaluate{" "}
            <Link href="/offshore-accounting-services" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              offshore accounting services
            </Link>{" "}
            alongside ERP process design.
          </p>
        </div>
       </div>
      </div>
    </section>
  );
}
