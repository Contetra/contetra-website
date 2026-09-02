import {
  ClipboardList,
  Cog,
  Database,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { AnimatedLine } from "@/components/ui/AnimatedLine";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const phases = [
  {
    icon: ClipboardList,
    phase: "Discovery & Business Assessment",
    objective:
      "Understand current processes, identify improvement opportunities, and define implementation objectives.",
  },
  {
    icon: Layers,
    phase: "Solution Design",
    objective:
      "Select the right Zoho applications, map workflows, approval hierarchies, reports, and integrations.",
  },
  {
    icon: Cog,
    phase: "Configuration & Automation",
    objective:
      "Configure applications, implement workflows, build automations, and develop approved customizations.",
  },
  {
    icon: Database,
    phase: "Data Migration & Validation",
    objective:
      "Clean, migrate, and validate data from legacy systems before testing.",
  },
  {
    icon: ShieldCheck,
    phase: "Testing & User Acceptance",
    objective:
      "Verify business processes, conduct user testing, and refine workflows before deployment.",
  },
  {
    icon: Rocket,
    phase: "Go-Live & Continuous Optimization",
    objective:
      "Deploy the solution, support users, and optimise processes as business requirements evolve.",
  },
];

const stageComparison = [
  {
    stage: "Discovery",
    other: "Gather software requirements",
    contetra:
      "Understand business processes, operational challenges, and reporting expectations",
  },
  {
    stage: "Solution Design",
    other: "Configure Zoho applications",
    contetra: "Design workflows, approvals, dashboards, and governance structures",
  },
  {
    stage: "Configuration",
    other: "Build applications and automation",
    contetra: "Validate implementation against agreed business objectives",
  },
  {
    stage: "Testing",
    other: "Verify application functionality",
    contetra:
      "Confirm business users can successfully execute day-to-day processes",
  },
  {
    stage: "Go-Live",
    other: "Deploy the platform",
    contetra: "Support change management, stakeholder alignment, and user adoption",
  },
  {
    stage: "Continuous Improvement",
    other: "Technical support and enhancements",
    contetra: "Identify optimization opportunities as the business grows",
  },
];

export default function ImplementationProcessSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="How It Unfolds"
          title="Zoho ERP Implementation: Turning Business Processes into Connected Workflows"
          desc="Experienced ERP implementation partners spend less time talking about software setup and more time validating workflows, refining reporting requirements, and reviewing integrations. They ensure every department understands how they'll work within the new platform. While every project differs, most Zoho ERP implementations follow a similar lifecycle."
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

        <ScrollReveal delay={0.1} className="mx-auto mt-14 max-w-4xl text-center">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            Although these stages appear straightforward, implementation
            success depends less on following a checklist and more on
            asking the right questions throughout the project.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
          <ScrollReveal>
            <h3 className="mb-5 text-2xl font-bold leading-tight text-[#1a1640] dark:text-white">
              How Contetra Approaches Zoho Implementations
            </h3>
            <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              <p>
                Contetra approaches Zoho implementation as a business
                improvement initiative rather than a software deployment
                project. Instead of applications, the engagement begins
                with business processes.
              </p>
              <p>
                The objective is to understand how information moves across
                finance, sales, procurement, inventory, HR, and operations
                before designing workflows within Zoho.
              </p>
              <p>
                This helps us ensure automation supports existing business
                objectives rather than introducing unnecessary complexity.
              </p>
              <p>
                The distinction becomes clearer when we compare
                responsibilities throughout the implementation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827]">
              <div className="grid grid-cols-3 gap-2 bg-[#1a1640] px-5 py-4 text-xs font-bold text-white dark:bg-[#172036]">
                <div>Implementation Stage</div>
                <div>Other Implementation Partners</div>
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
                    {row.other}
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
            Contetra&apos;s approach doesn&apos;t replace Zoho technical
            implementation. Rather, it complements technical implementation
            by ensuring technology decisions continue to support broader
            business goals post-deployment.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
