import {
  ClipboardList,
  Cog,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatedLine } from "@/components/ui/AnimatedLine";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const phases = [
  {
    icon: ClipboardList,
    phase: "Discovery & Requirements",
    objective:
      "Understand business processes, document requirements, define project scope",
  },
  {
    icon: Layers,
    phase: "Solution Design",
    objective:
      "Design future-state processes, reporting structures, workflows, and integrations",
  },
  {
    icon: Cog,
    phase: "Configuration & Build",
    objective:
      "Configure Oracle modules, develop integrations and approved customizations",
  },
  {
    icon: ShieldCheck,
    phase: "Testing & User Validation",
    objective:
      "Validate business processes, conduct User Acceptance Testing (UAT), resolve issues",
  },
  {
    icon: Rocket,
    phase: "Go-Live",
    objective:
      "Migrate data, deploy the solution, and transition users to the new environment",
  },
  {
    icon: Sparkles,
    phase: "Hypercare & Optimization",
    objective:
      "Stabilize operations; resolve issues and identify opportunities for continuous improvement",
  },
];

const financeFirstQuestions = [
  "How should finance, operations, and procurement work together?",
  "Which reports does leadership rely on for strategic decisions?",
  "Where do current approval workflows slow down the business?",
  "Which manual activities can we standardize or automate?",
  "How should the ERP support future expansion, acquisitions, or new businesses?",
];

const stageComparison = [
  {
    stage: "Discovery",
    traditional: "Understand software requirements",
    contetra:
      "Dive deep into business objectives, financial processes, and operational challenges",
  },
  {
    stage: "Solution Design",
    traditional: "Configure Oracle modules",
    contetra:
      "Validate process design, governance, reporting, and internal controls",
  },
  {
    stage: "Configuration",
    traditional: "Build and customize the system",
    contetra: "Ensure configuration aligns with agreed business requirements",
  },
  {
    stage: "Testing",
    traditional: "Verify system functionality",
    contetra:
      "Validate business processes with key stakeholders and support User Acceptance Testing",
  },
  {
    stage: "Go-Live",
    traditional: "Deploy the solution",
    contetra:
      "Coordinate business readiness, change management, and executive communication",
  },
  {
    stage: "Post Go-Live",
    traditional: "Resolve technical issues",
    contetra: "Drive process optimization, adoption, and continuous improvement",
  },
];

export default function ImplementationProcessSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="How It Unfolds"
          title="Oracle ERP Implementation Process: Going Live and Delivering Business Value"
          desc="A typical Oracle ERP implementation looks like this:"
        />

        <div className="relative">
          <AnimatedLine
            axis="x"
            className="absolute top-6 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-[#1a1640] to-[#50a085] lg:block dark:from-[#172036] dark:to-[#86efac]"
          />
          <div className="relative grid gap-8 lg:grid-cols-6">
            {phases.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.phase} delay={index * 0.08}>
                  <div className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#50a085] bg-white text-[#1a1640] shadow-sm dark:border-[#86efac] dark:bg-[#0A0A0A] dark:text-white">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="mb-1 block text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#50a085] dark:text-[#86efac]">
                        Phase {index + 1}
                      </span>
                      <h3 className="mb-1.5 text-sm font-bold leading-snug text-[#1a1640] dark:text-white">
                        {item.phase}
                      </h3>
                      <p className="text-xs leading-5 text-[#3f4352] dark:text-[#D1D5DB]">
                        {item.objective}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal delay={0.1} className="mx-auto mt-14 max-w-4xl space-y-4 text-center">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            The implementation phases look straightforward on paper. However,
            the real work lies between these milestones, during stakeholder
            discussions, process decisions, governance reviews, and business
            change management.
          </p>
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            That is where an experienced functional consulting partner adds
            the greatest value.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
          <ScrollReveal>
            <h3 className="mb-5 text-2xl font-bold leading-tight text-[#1a1640] dark:text-white">
              Contetra&apos;s Finance-First Implementation Philosophy
            </h3>
            <p className="mb-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              At Contetra, Oracle ERP implementation begins with
              understanding how the business creates value:
            </p>
            <div className="space-y-3">
              {financeFirstQuestions.map((q) => (
                <div
                  key={q}
                  className="border-l-2 border-[#50a085] bg-white px-4 py-3 text-sm font-semibold leading-6 shadow-sm dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]"
                >
                  {q}
                </div>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              These discussions shape the Business Requirements Document
              (BRD), governance framework, and implementation roadmap before
              configuration begins.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:sticky lg:top-24">
            <h3 className="mb-5 text-2xl font-bold leading-tight text-[#1a1640] dark:text-white">
              Traditional Partner vs. Contetra&apos;s Advisory-Led Approach
            </h3>
            <p className="mb-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              The distinction becomes even clearer when comparing
              responsibilities throughout the project.
            </p>
            <div className="overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827]">
              <div className="grid grid-cols-3 gap-2 bg-[#1a1640] px-5 py-4 text-xs font-bold text-white dark:bg-[#172036]">
                <div>Implementation Stage</div>
                <div>Traditional Technical Partner</div>
                <div>Contetra&apos;s Advisory-Led Approach</div>
              </div>
              {stageComparison.map((row, index) => (
                <div
                  key={row.stage}
                  className={`grid grid-cols-3 gap-2 px-5 py-4 text-xs sm:text-sm ${
                    index < stageComparison.length - 1
                      ? "border-b border-[#eef1f8] dark:border-[#1F2937]"
                      : ""
                  }`}
                >
                  <div className="font-semibold leading-6 dark:text-white">
                    {row.stage}
                  </div>
                  <div className="leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {row.traditional}
                  </div>
                  <div className="leading-6 text-[#347d68] dark:text-[#86efac]">
                    {row.contetra}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15} className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            This approach creates greater alignment between leadership,
            functional users, and technical teams. Simultaneously, it
            ensures implementation decisions continue to support long-term
            business goals.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
