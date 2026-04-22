import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const gold = "text-[#FDD03F]";

type CardBullet = string | { text: ReactNode };

type ServiceCard = {
  id: string;
  title: ReactNode;
  bullets: CardBullet[];
};

const cards: ServiceCard[] = [
  {
    id: "technical-accounting",
    title: (
      <>
        Technical Accounting
        <br />
        &amp; Gaap Conversion
      </>
    ),
    bullets: [
      "IND-AS/ IFRS/ US GAAP alignment",
      "Technical memos (IFRS 9, IFRS 15, IFRS 16, etc.)",
      "Complex accounting treatments",
      "Audit support & walkthroughs",
      "Consolidation readiness",
    ],
  },
  {
    id: "cfo-back-office",
    title: (
      <>
        CFO Back-Office &amp;
        <br />
        FP&amp;A Transformation
      </>
    ),
    bullets: [
      "Budgeting, forecasting, scenario modelling",
      "Board MIS + investor-grade packs",
      "Cash flow governance",
      "Profitability modelling",
      "Performance management",
    ],
  },
  {
    id: "digital-landscape",
    title: (
      <>
        Digital Landscape &amp;
        <br />
        ERP Transformation
      </>
    ),
    bullets: [
      "BRD, FRD, digital landscape, gap analysis",
      "ERP evaluation (SAP/Oracle/NetSuite/MS BC/Odoo/ERPNext)",
      "Implementation PMO & functional partner",
      "Automation roadmap",
      "System readiness for IPO disclosures",
    ],
  },
  {
    id: "offshore-accounting",
    title: (
      <>
        Offshore Accounting
        <br />
        &amp; GCC Setup
      </>
    ),
    bullets: [
      "Scalable accounting engine",
      "Multi-entity, multi-GAAP support",
      "Close calendar execution",
      "Policy enforcement",
      "Global Capability Centre setup in India",
      {
        text: (
          <>
            All these converge into a{" "}
            <strong className="font-bold">
              single IPO-ready finance engine.
            </strong>
          </>
        ),
      },
    ],
  },
];

export function IrMiddleSectionTwo() {
  return (
    <section
      className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-16 dark:bg-[#0a0a0f]"
      aria-labelledby="ir-cfo-solutions-heading"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="w-full">
          <div
            className={cn(
              "w-full bg-[#180130] px-5 py-6 text-center sm:px-8 sm:py-8 md:px-12 md:py-9",
              "rounded-[24px] sm:rounded-[32px] md:rounded-full",
            )}
          >
            <h2
              id="ir-cfo-solutions-heading"
              className={cn(
                "text-balance font-bold leading-tight text-white",
                "text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]",
              )}
            >
              Strategic <span className={gold}>CFO Solutions</span>
            </h2>
            <p
              className={cn(
                "mx-auto mt-3 max-w-[40rem] text-pretty text-white/95",
                "text-base leading-relaxed sm:mt-4 sm:text-[1.0625rem] md:text-lg lg:text-xl",
              )}
            >
              Industry Veterans + an elite team of Chartered Accountants
            </p>
          </div>
        </div>

        <div className="mt-12 text-center sm:mt-14 md:mt-16 lg:mt-[4.5rem]">
          <h2
            id="ir-what-contetra-heading"
            className={cn(
              "text-balance font-bold leading-tight text-neutral-900 dark:text-white",
              "text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.125rem] xl:text-[2.25rem]",
            )}
          >
            What <span className={gold}>Contetra Does</span>
          </h2>
          <p
            className={cn(
              "mx-auto mt-3 max-w-[40rem] text-pretty text-neutral-800 dark:text-neutral-200",
              "text-base italic sm:text-[1.0625rem] md:text-lg lg:text-xl",
            )}
          >
            (the less-glamorous IPO readiness aspects nobody wants to talk about)
          </p>
        </div>

        <div
          className={cn(
            "mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:mt-14",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {cards.map((card) => (
            <div key={card.id} className="min-w-0">
              <article className="flex h-full flex-col gap-2 sm:gap-2.5">
                <div
                  className={cn(
                    "flex w-full items-center rounded-[10px] bg-[#FDD03F] px-4 py-3 text-left",
                    "h-[6rem] shrink-0 sm:h-[4.25rem] sm:rounded-[10px] sm:px-4 sm:py-3.5 sm:text-sm",
                    "text-[0.8125rem] font-bold leading-tight text-black",
                  )}
                >
                  {card.title}
                </div>
                <div
                  className={cn(
                    "flex w-full flex-1 flex-col rounded-[10px] bg-[#F2F2F2] px-4 py-4",
                    "dark:bg-[#1a1a1f] sm:rounded-[10px] sm:px-4 sm:py-5",
                  )}
                >
                  <ul className="list-outside list-disc space-y-2.5 pl-4 text-left text-[0.8125rem] leading-relaxed text-neutral-900 marker:text-neutral-900 dark:text-neutral-100 dark:marker:text-neutral-200 sm:text-sm">
                    {card.bullets.map((item, i) => (
                      <li key={i} className="pl-0.5">
                        {typeof item === "string" ? item : item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
