import Link from "next/link";
import {
  Cog,
  Database,
  GraduationCap,
  KeyRound,
  LifeBuoy,
  Plug,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const costElements = [
  {
    icon: KeyRound,
    name: "Software Licensing/Subscriptions",
    covers:
      "Core system access, user seat allocations, and activated supply chain or logistics functional modules.",
  },
  {
    icon: Wrench,
    name: "Implementation Services & Consulting",
    covers:
      "Business process discovery, system configuration, role setups, custom workflow design, and project management.",
  },
  {
    icon: Database,
    name: "Data Migration & Cleanup",
    covers:
      "Extracting, cleansing, mapping, and validating legacy data (SKUs, suppliers, customers) into the new database.",
  },
  {
    icon: Cog,
    name: "Customization & Integrations",
    covers:
      "API connections to peripheral software (e-commerce platforms, B2B EDI networks) and legacy operational hardware.",
  },
  {
    icon: Plug,
    name: "Infrastructure & Hardware",
    covers:
      "Cloud hosting fees or the purchase and maintenance of physical edge servers, backup units, and network components.",
  },
  {
    icon: GraduationCap,
    name: "Training & Change Management",
    covers:
      "Staff training workshops, creating standard operating procedures (SOPs), and user adoption planning.",
  },
  {
    icon: LifeBuoy,
    name: "Post-Go-Live Support",
    covers:
      "Ongoing technical troubleshooting, software patches, updates, and customer success desk access.",
  },
];

const budgetTiers = [
  {
    tier: "Small Business",
    size: "1–50 Employees",
    complexity: ["1 to 15 users", "Single facility", "Core modules"],
    software: "$10,000 – $75,000",
    implementation: "$15,000 – $150,000",
    firstYear: "$40,000 – $150,000",
  },
  {
    tier: "Mid-Market",
    size: "51–250 Employees",
    complexity: [
      "15 to 100 users",
      "Multi-location logistics",
      "Deep warehouse and transportation management modules needed",
    ],
    software: "$50,000 – $400,000",
    implementation: "$100,000 – $750,000",
    firstYear: "$150,000 – $750,000+",
    featured: true,
  },
  {
    tier: "Enterprise",
    size: "250+ Employees",
    complexity: [
      "100+ global users",
      "Complex multi-entity/multi-currency",
      "Automated robotics/heavy customization",
    ],
    software: "$250,000 – $1M+",
    implementation: "$300,000 – $5M+",
    firstYear: "$1M – $10M+",
  },
];

export default function CostPricingSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Budgeting"
          title="How Much Does Logistics & Supply Chain ERP Cost?"
          desc="Budgets vary from business to business. According to ERP statistics, mid-sized firms may spend 3% to 5% of annual revenue, while large enterprises may invest 2% to 3%. The cost of ownership (TCO) of a supply chain & logistics ERP can be broken down into several components. Below is a table that gives you a closer look:"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {costElements.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.name} delay={index * 0.06}>
                <article className="group flex h-full flex-col rounded-[8px] border border-[#e2e8e6] bg-white p-6 shadow-[0_5px_18px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/45 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827]">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-2 text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {item.covers}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-16">
          <SectionHeading
            level="h3"
            title="How Much Should You Budget for Supply Chain ERP?"
            desc="Below is an estimated summary based on business type and complexity. We've used industry pricing and ERP market research to create this estimated budget."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {budgetTiers.map((tier, index) => (
              <ScrollReveal key={tier.tier} delay={index * 0.1}>
                <article
                  className={`relative flex h-full flex-col rounded-[12px] border p-7 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 ${
                    tier.featured
                      ? "border-[#50a085] bg-[#eaf6f2] dark:border-[#86efac] dark:bg-[#172036]"
                      : "border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]"
                  }`}
                >
                  {tier.featured ? (
                    <span className="absolute right-5 top-5 rounded-full bg-[#347d68] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white dark:bg-[#50a085]">
                      Most Common
                    </span>
                  ) : null}
                  <h4 className="text-lg font-bold leading-snug text-[#1a1640] dark:text-white">
                    {tier.tier}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-[#50a085] dark:text-[#86efac]">
                    {tier.size}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-current/10 pt-4 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {tier.complexity.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <dl className="mt-5 space-y-3 border-t border-current/10 pt-4 text-sm">
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Software Cost (Annual)
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {tier.software}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Implementation Fee
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {tier.implementation}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Approx 1st-Year Budget
                      </dt>
                      <dd className="font-bold text-[#1a1640] dark:text-white">
                        {tier.firstYear}
                      </dd>
                    </div>
                  </dl>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15} className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#3f4352] dark:text-[#D1D5DB]">
              Your annual TCO will also include other expenses, such as
              costs related to handhelds, barcode and RFID hardware,
              telematics and GPS, and EDI network fees. All of these
              elements add to your yearly budget.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.2}
            className="mx-auto mt-8 max-w-3xl rounded-[12px] border border-[#eef1f8] bg-white p-8 text-center shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827]"
          >
            <p className="text-lg font-semibold leading-7 text-[#1a1640] dark:text-white">
              Do you need a professional estimation?
            </p>
            <p className="mt-3 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
              Contact Contetra for a personalized supply chain and logistics
              ERP cost comparison in India based on your requirements.
            </p>
            <Link
              href="/contact-us"
              className="mt-5 inline-flex items-center justify-center rounded-sm border border-[#221971] bg-[#221971] px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#181253] dark:border-[#80D7AA] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]"
            >
              Contact Contetra
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
