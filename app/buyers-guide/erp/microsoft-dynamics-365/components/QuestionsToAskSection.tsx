import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const questions = [
  {
    q: "Who will work on our project after the contract is signed?",
    a: "Ask for the actual project manager, functional consultants, technical specialists, data resources and senior reviewers.",
  },
  {
    q: "How many projects have you completed using the Dynamics product we are considering?",
    a: "Ask specifically about Business Central, Finance, Supply Chain Management or the relevant application.",
  },
  {
    q: "What exactly is included in the proposed scope?",
    a: "Clarify whether the proposal includes data migration, integrations, reports, extensions, training, documentation, change management and hypercare.",
  },
  {
    q: "Who owns data cleansing, migration and final validation?",
    a: "Data responsibilities should be divided clearly between the partner and the business.",
  },
  {
    q: "How are scope changes handled?",
    a: "Ask how a new requirement becomes a change request, who approves it and how timeline impact is calculated.",
  },
  {
    q: "Will the same senior consultants remain involved throughout the project?",
    a: "Team continuity affects requirement understanding and solution quality.",
  },
  {
    q: "What happens after go-live?",
    a: "Confirm the hypercare period, support model, escalation route and ongoing enhancement process.",
  },
  {
    q: "What decisions must our internal team own?",
    a: "ERP success depends on business ownership, not just partner execution.",
  },
];

export default function QuestionsToAskSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Questions to Ask Before You Sign a Dynamics 365 Partner"
          desc="Before appointing any Microsoft Dynamics implementation partner, ask direct questions about how the project will actually work."
        />

        <ul className="space-y-5">
          {questions.map((item) => (
            <li key={item.q} className="flex items-start gap-3 rounded-[8px] border border-[#eef1f8] bg-white p-5 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]">
              <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#50a085] dark:text-[#86efac]" />
              <div>
                <p className="text-sm font-bold leading-6 text-[#1a1640] dark:text-white">{item.q}</p>
                <p className="mt-1 text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{item.a}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          A partner that cannot explain how the project will be governed before signing may struggle to create clarity once implementation begins.
        </p>
       </div>
      </div>
    </section>
  );
}
