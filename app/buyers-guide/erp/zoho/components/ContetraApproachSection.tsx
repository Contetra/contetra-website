import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const ownership = [
  { contetra: "Business discovery workshops", technical: "Application configuration" },
  {
    contetra: "Business Requirements Document (BRD)",
    technical: "Workflow implementation",
  },
  {
    contetra: "Process design and optimization",
    technical: "Deluge scripting and technical development",
  },
  {
    contetra: "Reporting framework and dashboard planning",
    technical: "Third-party integrations",
  },
  {
    contetra: "Change management and user adoption",
    technical: "Data migration execution",
  },
  {
    contetra: "Executive stakeholder alignment",
    technical: "Technical troubleshooting",
  },
  {
    contetra: "Post-go-live optimization",
    technical: "Product upgrades and maintenance",
  },
];

export default function ContetraApproachSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Where the Value Sits"
          title="How Contetra Adds Value"
          desc="We don't approach Zoho as a collection of applications to be deployed. Contetra approaches it as an opportunity to improve how information flows across the business."
        />

        <ScrollReveal className="mx-auto max-w-4xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            The focus extends beyond implementation to include process
            design, workflow optimization, reporting structures, automation
            opportunities, and governance that continue creating value.
          </p>
          <p className="font-semibold text-[#1a1640] dark:text-white">
            This advisory-led approach allows businesses to make
            implementation decisions with confidence while ensuring every
            workflow, dashboard, and automation supports broader
            operational goals.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
          <div className="grid bg-[#1a1640] px-6 py-4 text-sm font-bold text-white dark:bg-[#172036] sm:grid-cols-2">
            <div>Contetra Owns</div>
            <div className="hidden sm:block">Technical Implementation Activities</div>
          </div>
          {ownership.map((row, index) => (
            <div
              key={row.contetra}
              className={`grid gap-2 px-6 py-5 sm:grid-cols-2 ${
                index < ownership.length - 1
                  ? "border-b border-[#eef1f8] dark:border-[#1F2937]"
                  : ""
              }`}
            >
              <div className="text-sm font-semibold leading-6 text-[#1a1640] dark:text-white">
                {row.contetra}
              </div>
              <div className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">
                {row.technical}
              </div>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            This collaborative model enables leadership teams to stay
            focused on strategic outcomes while technical specialists
            concentrate on delivering the solution.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
