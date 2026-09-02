import { NumberTicker } from "@/components/ui/number-ticker";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const ownership = [
  { contetra: "Business process discovery", partner: "Oracle configuration and development" },
  {
    contetra: "Business Requirements Document (BRD)",
    partner: "Module configuration",
  },
  { contetra: "Functional solution design", partner: "Technical integrations" },
  {
    contetra: "Vendor evaluation and implementation governance",
    partner: "Data migration execution",
  },
  {
    contetra: "Change management and user adoption",
    partner: "Environment setup and deployment",
  },
  {
    contetra: "Executive reporting and stakeholder alignment",
    partner: "Technical support and bug resolution",
  },
  {
    contetra: "Post go-live process optimization",
    partner: "Product maintenance and upgrades",
  },
];

export default function ContetraApproachSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Why Mid-Sized Businesses Choose Oracle"
          title="Why More Mid-Sized Businesses Are Choosing Oracle ERP"
          desc="Once, Oracle was associated almost exclusively with large multinational enterprises. However, that perception has changed over the past decade. Cloud deployment, subscription-based licensing, and products such as NetSuite and Fusion Cloud ERP have made Oracle accessible to mid-sized organizations."
        />

        <ScrollReveal className="mx-auto mb-14 grid max-w-3xl grid-cols-2 gap-6 rounded-[12px] bg-[#1a1640] px-8 py-8 text-center text-white shadow-[0_18px_40px_rgba(26,22,64,0.25)] dark:bg-[#172036]">
          <div>
            <p className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-none">
              <NumberTicker value={44000} className="text-white" />+
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
              Organizations rely on NetSuite
            </p>
          </div>
          <div>
            <p className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-none">
              <NumberTicker value={220} className="text-white" />
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
              Countries served
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto max-w-4xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Oracle for small businesses now delivers enterprise-grade
            capabilities without requiring large internal IT teams. As a
            result, over 44,000 organizations across 220 countries rely on
            solutions like NetSuite to manage their operations.
          </p>
          <p>
            Moreover, mid-sized businesses today encounter many operational
            challenges large enterprises experience. They are expanding into
            new markets, managing multiple legal entities, strengthening
            financial controls, responding to increasing compliance
            requirements, and seeking greater visibility across operations.
          </p>
          <p>
            Oracle ERP provides a scalable platform that allows businesses to
            standardize financial processes, improve operational visibility,
            and support future growth without repeatedly replacing core
            business systems.
          </p>
          <p>
            However, implementation at this stage requires a different
            Oracle cloud ERP consulting model than enterprise initiatives.
            The focus shifts to practical guidance, senior consultant
            involvement, and structured decision-making.
          </p>
          <p>
            This is where Contetra&apos;s advisory-led approach aligns
            particularly well with mid-market businesses.
          </p>
          <p>
            Rather than introducing large delivery teams, Contetra works
            closely with leadership to define business requirements,
            establish governance, evaluate implementation options, and
            represent your interests.
          </p>
          <p className="font-semibold text-[#1a1640] dark:text-white">
            The objective is to support better financial visibility,
            stronger operational control, and sustainable business growth
            long beyond go-live.
          </p>
        </ScrollReveal>

        <div className="mt-16">
          <SectionHeading
            level="h3"
            eyebrow="Where the Value Sits"
            title="How Contetra Approaches Oracle ERP Implementation"
            desc="Our finance and business advisory approach continues throughout the implementation lifecycle, ensuring Oracle ERP supports today's operational requirements, future growth, reporting, compliance, and decision-making. This is how we add value:"
          />

          <ScrollReveal className="overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
            <div className="grid bg-[#1a1640] px-6 py-4 text-sm font-bold text-white dark:bg-[#172036] sm:grid-cols-2">
              <div>Contetra Owns</div>
              <div className="hidden sm:block">
                Technical Oracle Implementation Partner Owns
              </div>
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
                  {row.partner}
                </div>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              The technical implementation partner delivers Oracle ERP.
              Contetra helps ensure the business derives maximum value from
              it.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
