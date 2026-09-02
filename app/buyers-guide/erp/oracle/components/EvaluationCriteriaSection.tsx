import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const criteria = [
  {
    title: "Business and Industry Understanding",
    body: "Every industry brings unique operational challenges. A manufacturing company managing production, inventory, and procurement requires a different Oracle implementation than a professional services firm focused on project accounting and resource utilization.",
    approach:
      "Our expert professionals with experience across diverse industries bring a broader understanding of financial processes, controls, and operational requirements to Oracle implementations.",
  },
  {
    title: "Functional Expertise Before Technical Expertise",
    body: "Oracle ERP implementations focus heavily on technical delivery. However, functional consulting is equally important; experts who understand finance, procurement, supply chain, manufacturing, compliance, and business operations.",
    approach:
      "We combine finance and business-process expertise to ensure Oracle ERP reflects how the business actually operates, from financial controls and procurement workflows to supply chain processes, reporting, and compliance.",
  },
  {
    title: "Senior Consultant Involvement",
    body: "A common frustration buyers experience is senior consultants being replaced by junior delivery teams once the project begins. Therefore, ask who will actually conduct workshops, define business requirements, manage stakeholder discussions, and remain accountable through go-live.",
    approach:
      "Our senior consultants remain involved from initial scoping through go-live and hypercare, ensuring continuity of context, accountability, and decision-making.",
  },
  {
    title: "Clearly Defined Implementation Methodology",
    body: "Every Oracle partner describes their methodology. However, more important is how they adapt that methodology to your business. Ask how they will document requirements, manage scope changes, structure governance meetings, and encourage user participation throughout the project.",
    approach:
      "We define the BRD and implementation scope before engaging the technical vendor, helping leadership evaluate proposals and negotiate costs from a clearly established set of business requirements.",
  },
];

const questionsToAsk = [
  "How is scope defined, and what happens if new requirements emerge after implementation begins?",
  "Who owns data migration, including data cleansing, validation, and reconciliation before go-live?",
  "What is included in your change management and end-user training plan?",
  "How are timeline delays handled, and who is accountable if key implementation milestones are missed?",
  "How are change requests evaluated, approved, and priced if they fall outside the original scope?",
  "What governance structure will be used to track progress, risks, decisions, and unresolved issues throughout the implementation?",
];

const redFlags = [
  "Undersized implementation teams with insufficient functional or technical coverage for the project's scope.",
  "No clear organizational change management (OCM) plan for user adoption, training, and transition.",
  "A fixed-price quote that seems too good to be true relative to the scope and complexity discussed.",
  "Vague scope definitions that leave significant deliverables, responsibilities, or integrations open to interpretation.",
];

export default function EvaluationCriteriaSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Evaluation Criteria"
          title="How to Evaluate an Oracle ERP Implementation Partner"
          desc="Many decision-makers unintentionally narrow their evaluation to Oracle certifications, project costs, or implementation timelines. While these factors matter, they rarely tell the complete story. Here are the evaluation criteria we recommend:"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {criteria.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_2px_12px_rgba(26,22,64,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a1640] text-sm font-bold text-white dark:bg-[#172036]">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                  {item.body}
                </p>
                <div className="mt-4 rounded-[8px] bg-[#eaf6f2] px-4 py-3 dark:bg-[#172036]">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.1em] text-[#347d68] dark:text-[#86efac]">
                    Contetra&apos;s Approach
                  </p>
                  <p className="text-sm leading-6 text-[#1a1640] dark:text-white">
                    {item.approach}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <div className="h-full rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827]">
              <h3 className="mb-5 text-xl font-bold leading-tight text-[#1a1640] dark:text-white">
                Questions to Ask Before You Sign
              </h3>
              <ul className="space-y-3">
                {questionsToAsk.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#50a085] dark:text-[#86efac]"
                    />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-[12px] border border-[#f3d9c9] bg-[#fff8f3] p-7 shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#4a2f1f] dark:bg-[#1c140d]">
              <h3 className="mb-5 text-xl font-bold leading-tight text-[#1a1640] dark:text-white">
                Red Flags to Watch Out For
              </h3>
              <ul className="space-y-3">
                {redFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-3 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    <AlertTriangle
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#c2703d] dark:text-[#e0a06a]"
                    />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
