import Link from "next/link";
import SectionHeading from "./SectionHeading";
import DataTable from "./DataTable";

const rows: string[][] = [
  [
    "Product-specific experience",
    "Has the team implemented the exact Dynamics product you are considering?",
    "[Insert: Contetra's specific Business Central / F&O project history]",
  ],
  [
    "Industry and process understanding",
    "Can they explain your operating model beyond module names?",
    "Discovery starts with business processes and pain points, not module configuration, see “Discovery and Assessment” below",
  ],
  [
    "Business process design",
    "Will they challenge poor legacy processes or simply configure them?",
    "Contetra's blueprint stage is explicitly designed to challenge legacy workarounds before they get built into the new system",
  ],
  [
    "Delivery team",
    "Who exactly will work on the project after signing?",
    "The senior consultants involved in discovery remain engaged through hypercare — no handoff to a junior team post-sale",
  ],
  [
    "Implementation methodology",
    "How will requirements, risks, decisions and scope be governed?",
    "Governed through the seven-stage process outlined below, with Contetra owning BRD, process design and UAT planning",
  ],
  [
    "Data migration approach",
    "Who owns extraction, cleansing, reconciliation and sign-off?",
    "Contetra owns migration governance and reconciliation; the technical implementation partner handles technical data loading (see RACI table below)",
  ],
  [
    "Integration capability",
    "How will interfaces be designed, tested and supported?",
    "Contetra defines integration requirements and validates them during UAT; technical build sits with the implementation vendor",
  ],
  [
    "Testing approach",
    "Will UAT test real business scenarios or only screens?",
    "UAT is structured around end-to-end scenarios (e.g. procure-to-pay, order-to-cash, month-end close), not screen-by-screen checks",
  ],
  [
    "Change management",
    "How will users be prepared for new responsibilities?",
    "Change-management planning is a named Contetra workstream, run alongside — not after — technical build",
  ],
  [
    "Post-go-live support",
    "What happens after the system is live?",
    "Contetra leads post-go-live process optimization; break-fix support sits with the technical vendor",
  ],
];

export default function EvaluatePartnerSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="How to Evaluate a Microsoft Dynamics 365 Implementation Partner" />

        <p className="mx-auto mb-10 max-w-3xl text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          A polished proposal, an impressive client list or a low commercial quote does not tell you enough about implementation quality. The real evaluation should focus on the proposed team, product experience, process understanding, data approach, governance, integration capability, testing discipline and support after launch.
        </p>

        <DataTable columns={["Evaluation Criteria", "What to Check", "How Contetra Approaches This"]} rows={rows} />

        <div className="mx-auto mt-14 max-w-3xl rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827]">
          <h3 className="mb-4 text-xl font-bold leading-tight dark:text-white">
            Practical Example: Reporting Is Slow
          </h3>
          <div className="space-y-4 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>A CFO may say, &quot;We need faster month-end reporting.&quot;</p>
            <p>
              A configuration-only approach may immediately focus on new reports. A consulting-led approach first asks why reporting is slow.
            </p>
            <p>
              The underlying issue may be different charts of accounts across entities, manual intercompany reconciliations, delayed transaction posting, disconnected applications, spreadsheet-based adjustments, inconsistent master data, weak closing controls or poor process ownership.
            </p>
            <p>
              The right solution may therefore involve changes to finance processes, master data, workflows, controls and reporting design — not just a new dashboard.
            </p>
            <p>This is what distinguishes Microsoft Dynamics consulting from simple software configuration.</p>
            <p>
              Where reporting gaps come from manual workflows or disconnected systems,{" "}
              <Link href="/services/agentic-ai-and-process-automation/finance-and-reporting-automation" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
                finance process automation
              </Link>{" "}
              can support better MIS, reconciliations, approvals and dashboard visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
