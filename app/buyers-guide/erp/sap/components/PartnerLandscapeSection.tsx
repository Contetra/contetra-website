import { Building2, Network, UserRound, UsersRound } from "lucide-react";
import SectionIntro from "./SectionIntro";

const partners = [
  {
    icon: Network,
    category: "Global systems integrators",
    best: "Massive, multi-country rollouts across dozens of legal entities.",
    watch:
      "Cost efficiency and speed for a single-entity or mid-market project.",
    expect: "Large account teams · Premium pricing · 12–24+ months",
  },
  {
    icon: UsersRound,
    category: "Regional & boutique partners",
    best: "Mid-market and growth-stage businesses wanting senior attention.",
    watch: "Enterprise rollouts spanning 50+ countries and a huge delivery bench.",
    expect: "Senior-led teams · Faster mobilisation · Proportionate pricing",
    featured: true,
  },
  {
    icon: UserRound,
    category: "Independent consultants",
    best: "A single module, health check or short-term staffing gap.",
    watch: "Full-scope projects that need team redundancy.",
    expect: "Lower cost · Narrow scope · No backup bench",
  },
  {
    icon: Building2,
    category: "DIY / in-house",
    best: "A very small, single-entity business with a SAP-literate finance team.",
    watch: "Most multi-module or change-heavy programmes.",
    expect: "Maximum ownership · Highest delivery risk",
  },
];

export default function PartnerLandscapeSection() {
  return (
    <section
      id="partner-landscape"
      className="scroll-mt-20 py-24 text-[#17143a] dark:bg-[#080b10] md:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionIntro
          index="01"
          eyebrow="Partner landscape"
          title='SAP ERP Companies: What “Best” Actually Means'
          description="A more useful question: which category of SAP ERP company fits your project?"
        />
        <div data-stagger className="grid gap-5 md:grid-cols-2">
          {partners.map((partner) => {
            const Icon = partner.icon;

            return (
              <article
                key={partner.category}
                className={`group relative overflow-hidden rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
                  partner.featured
                    ? "border-[#50a085] bg-[#edf8f4] shadow-[0_20px_60px_rgba(80,160,133,.13)] dark:bg-[#10221d]"
                    : "border-[#e2e6eb] bg-white hover:border-[#50a085]/60 dark:border-white/10 dark:bg-[#11151c]"
                }`}
              >
                {partner.featured ? (
                  <span className="absolute right-5 top-5 rounded-full bg-[#347d68] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    This is Contetra&apos;s category
                  </span>
                ) : null}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17143a] text-[#8ed7bc] dark:bg-[#20253a]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 pr-24 text-xl font-bold dark:text-white">
                  {partner.category}
                </h3>
                <dl className="mt-6 space-y-4 text-sm leading-6">
                  <div>
                    <dt className="font-bold uppercase tracking-[0.1em] text-[#347d68] dark:text-[#86d7b8]">
                      Best for
                    </dt>
                    <dd className="mt-1 text-[#55596b] dark:text-[#b9c0cd]">
                      {partner.best}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold uppercase tracking-[0.1em] text-[#8a5e3b] dark:text-[#e8b889]">
                      Watch out for
                    </dt>
                    <dd className="mt-1 text-[#55596b] dark:text-[#b9c0cd]">
                      {partner.watch}
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 border-t border-current/10 pt-4 text-xs font-semibold text-[#17143a]/70 dark:text-white/65">
                  {partner.expect}
                </p>
              </article>
            );
          })}
        </div>
        <div
          data-reveal
          className="mt-8 rounded-2xl border-l-4 border-[#50a085] bg-[#17143a] px-7 py-6 text-white dark:bg-[#11151c]"
        >
          <p className="max-w-4xl text-lg leading-8 text-white/82">
            Mid-market finance teams rarely need a 40-person account structure.
            They need two or three senior people who stay accountable through
            go-live. The honest trade-off is scale: a boutique is not the right
            fit for a 50-country, 100,000-employee rollout.
          </p>
        </div>
      </div>
    </section>
  );
}
