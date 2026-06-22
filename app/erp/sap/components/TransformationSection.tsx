import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const legacyChallenges = [
  "Delayed month-end closures",
  "Multiple versions of the truth",
  "Manual reporting",
  "Inefficient procurement processes",
  "Poor inventory visibility",
  "Difficult compliance management",
  "Inconsistent master data",
  "Limited scalability",
];

const sapOutcomes = [
  "Automate finance operations",
  "Improve working capital visibility",
  "Streamline procurement",
  "Optimize manufacturing",
  "Enable real-time analytics",
  "Manage multi-company structures",
  "Strengthen governance and compliance",
  "Support global expansion",
];

export default function TransformationSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h3 className="mb-10 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Why Businesses are Moving to SAP S/4HANA</h3>
        <div className="grid overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white shadow-[0_12px_36px_rgba(26,22,64,0.08)] dark:border-[#1F2937] dark:bg-[#111827] lg:grid-cols-2">
          <div className="p-7 md:p-9 lg:border-r lg:border-[#e2e8e6] lg:dark:border-[#1F2937]">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#f5eeee] text-[#9b4d55] dark:bg-[#251b20] dark:text-[#f0a0aa]"><ArrowDownRight aria-hidden="true" className="h-5 w-5" /></span>
              <p className="text-lg font-bold dark:text-white">Legacy ERPs and disconnected applications create:</p>
            </div>
            <div className="divide-y divide-[#e2e8e6] dark:divide-[#1F2937]">
              {legacyChallenges.map((item) => <p key={item} className="py-3 text-sm font-medium text-[#3f4352] transition hover:pl-2 hover:text-[#9b4d55] dark:text-[#D1D5DB] dark:hover:text-[#f0a0aa]">{item}</p>)}
            </div>
          </div>
          <div className="bg-[#edf8f4] p-7 dark:bg-[#172036] md:p-9">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#50a085] text-white dark:bg-[#86efac] dark:text-[#0A0A0A]"><ArrowUpRight aria-hidden="true" className="h-5 w-5" /></span>
              <p className="text-lg font-bold dark:text-white">SAP S/4HANA provides a unified digital core that enables businesses to:</p>
            </div>
            <div className="divide-y divide-[#cfe4dc] dark:divide-[#2a3b4d]">
              {sapOutcomes.map((item) => <p key={item} className="py-3 text-sm font-semibold text-[#347d68] transition hover:pl-2 dark:text-[#86efac]">{item}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
