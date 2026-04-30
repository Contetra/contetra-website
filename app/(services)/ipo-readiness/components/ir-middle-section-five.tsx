import Image from "next/image";

import { cn } from "@/lib/utils";

const gold = "text-[#FDD03F]";

const WHY_CONTETRA_ITEMS = [
  "We are functional, not technical vendors",
  "100+ clients across India, Middle East, US, UK",
  "Deep IND-AS + IFRS + US GAAP expertise",
  "CFO-led capability - your CFO is still in control",
  "ERP-agnostic functional partner",
  "GCC setup experience across multiple geographies",
  "No conflict of interest with auditors or bankers",
  "Trusted by PE-backed, VC-backed, family businesses, and global firms",
] as const;

const OFFERINGS = [
  {
    id: "erp-finance-transformation",
    icon: "https://contetra.b-cdn.net/pages/services/ir/IPO-Readiness-landing-page-icon-1.png",
    title: "ERP & Finance Transformation",
    description:
      "Implement ERP & automations that fit your business, integrate finance & operations, and unlock real-time decision-making.",
  },
  {
    id: "technical-accounting",
    icon: "https://contetra.b-cdn.net/pages/services/ir/IPO-Readiness-landing-page-icon-2.png",
    title: "Technical Accounting & Global GAAP Advisory",
    description:
      "Ensure IFRS / Ind AS / US GAAP compliance, strengthen audit readiness, and simplify complex accounting treatments.",
  },
  {
    id: "offshore-accounting-services",
    icon: "https://contetra.b-cdn.net/pages/services/ir/IPO-Readiness-landing-page-icon-3.png",
    title: "Offshore Accounting Services",
    description:
      "Run your finance function end-to-end from India - from bookkeeping to FP&A; with speed, accuracy, and scale.",
  },
  {
    id: "gcc-shared-services-setup",
    icon: "https://contetra.b-cdn.net/pages/services/ir/IPO-Readiness-landing-page-icon-4.png",
    title: "GCC & Shared Services Setup",
    description:
      "Set up and manage India-based finance & operations hubs for global companies: from talent to process to systems.",
  },
] as const;

export function IrMiddleSectionFive() {
  return (
    <section
      className="w-full  py-10 sm:py-12 md:py-14 lg:py-16 dark:bg-[#0f0f14]"
      aria-labelledby="ir-why-contetra-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <h2
          id="ir-why-contetra-heading"
          className={cn(
            "text-center text-balance font-bold leading-tight text-[#120322] dark:text-white",
            "text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]",
          )}
        >
          Why <span className={gold}>Contetra?</span>
        </h2>

        <ul className="mx-auto mt-8 grid max-w-[980px] list-none gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2">
          {WHY_CONTETRA_ITEMS.map((item, idx) => {
            const isGold = idx % 2 === 1;
            return (
              <li
                key={item}
                className={cn(
                  "mx-auto w-full max-w-[470px] rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4",
                  "text-sm font-semibold leading-snug sm:text-base",
                  isGold
                    ? "bg-[#E9BE49] text-[#161616]"
                    : "bg-[#180130] text-white",
                )}
              >
                <span className="mr-2 inline-block">•</span>
                {item}
              </li>
            );
          })}
        </ul>

        <div className="mt-14 text-center sm:mt-16 md:mt-20">
          <h2
            id="ir-one-partner-heading"
            className={cn(
              "text-balance font-bold leading-tight text-[#120322] dark:text-white",
              "text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem]",
            )}
          >
            One <span className={gold}>Partner.</span> Future-Ready{" "}
            <span className={gold}>Finance.</span>
          </h2>
          <p
            className={cn(
              "mt-2 text-pretty text-[#161616] dark:text-neutral-200",
              "text-lg leading-relaxed sm:mt-3 sm:text-xl md:text-[2rem] md:leading-tight",
            )}
          >
            ERP I Automation I CFO Services I Global Accounting
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1080px] gap-10 sm:mt-14 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {OFFERINGS.map((item) => (
            <article key={item.id} className="relative mx-auto w-full max-w-[250px] pt-10">
              <div className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-[#4B36A2] bg-[#f3f3f3] p-3 dark:bg-[#0f0f14]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={54}
                  height={54}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="-mt-6 flex h-[250px] flex-col rounded-2xl bg-[#180130] px-5 pb-7 pt-12 text-center text-white">
                <h3 className="text-xl font-bold leading-snug text-[#FDD03F]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/95">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
