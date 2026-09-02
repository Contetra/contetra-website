import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const criteria = [
  {
    title: "Does the Consultant Understand Your Business Processes?",
    body: "The most effective Zoho implementations begin with understanding how your business operates. Whether you're managing inventory, professional services, manufacturing, distribution, or multi-location retail, your implementation partner should understand the operational realities driving your workflows.",
    approach:
      "Our consultants bring experience across diverse business processes and industries, helping translate operational requirements into practical Zoho workflows, automations, and system configurations.",
  },
  {
    title: "Can They Design Workflows Apart from Configuring Applications?",
    body: "Zoho's flexibility allows businesses to create workflows tailored to their operations. Ask prospective partners how they approach process design, approvals, reporting, and automation before configuration starts. The answers will reveal whether they're implementing software or designing business solutions.",
    approach:
      "Our consultants design workflows, approvals, reporting, and automation around your business requirements before they translate into Zoho configurations.",
  },
  {
    title: "Do They Possess Automation and Integration Expertise?",
    body: "Many businesses invest in Zoho to eliminate repetitive manual work. However, that requires expertise beyond standard implementation. Look for experience with:",
    bullets: [
      "Workflow automation",
      "Deluge scripting",
      "Third-party integrations",
      "Custom business rules",
      "Cross-application data flows",
    ],
    approach:
      "Our team combines process knowledge with Zoho automation and integration expertise, including Deluge scripting, custom business rules, third-party integrations, and cross-application workflows.",
  },
  {
    title: "Who Will Deliver the Project?",
    body: "Decision-makers should find out whether the consultants leading early discovery workshops will remain involved throughout implementation. Consistency helps maintain business context, reduces communication gaps, and enables faster decision-making as the project progresses.",
    approach:
      "Our senior consultants are present from discovery and requirements through implementation and go-live, preserving business context, maintaining accountability, and enabling faster decisions throughout the project.",
  },
  {
    title: "What Happens After Go-Live?",
    body: "Go-live isn't the end of the implementation. In fact, it's the beginning of adoption. Ask how the partner supports optimization, user adoption, process improvements, and future enhancements once the system is live. To extract the most long-term value from Zoho, view implementation as the foundation for continuous improvement rather than a one-time technology project.",
    approach:
      "We continue to support clients beyond go-live, helping to optimize processes, improve user adoption, identify automation opportunities, and refine workflows as business needs evolve.",
  },
];

const questionsToAsk = [
  "Who owns data migration from our existing accounting or business systems, including data cleansing and validation?",
  "What customization and Deluge scripting are included in the proposed scope?",
  "How will third-party integrations be scoped, developed, tested, and supported?",
  "What does your change management and end-user training approach include?",
  "How are timeline delays handled if key implementation milestones are missed?",
  "Will the senior consultants involved in discovery and requirements remain on the project through go-live?",
];

const redFlags = [
  "Undersized implementation teams that lack the functional or technical expertise required for the project scope.",
  "No clear data migration plan covering data cleansing, mapping, validation, and reconciliation.",
  "\"We'll figure out customization later\" without clearly defining Deluge scripting, custom workflows, or development requirements upfront.",
  "No defined post-launch support tier for user adoption, optimization, enhancements, or issue resolution.",
];

export default function EvaluationCriteriaSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Evaluation Criteria"
          title="How to Evaluate a Zoho Implementation Partner"
          desc="Once you've identified the type of implementation partner that fits your business, the next step is evaluating firms. At first glance, this can seem straightforward. Many partners hold Zoho certifications, possess experience implementing the platform, and boast successful clients. But successful implementations are rarely determined by certifications alone. The questions you ask should dive much deeper."
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
                {item.bullets ? (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-4 rounded-[8px] bg-[#eaf6f2] px-4 py-3 dark:bg-[#172036]">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.1em] text-[#347d68] dark:text-[#86efac]">
                    Contetra&apos;s Difference
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
                Red Flags to Watch For
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
