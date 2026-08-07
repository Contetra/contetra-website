import Image from "next/image";

import { cn } from "@/lib/utils";

const IR_CONNECTS =
  "https://contetra.b-cdn.net/pages/services/ir/ir-connects.png";

const gold = "text-[#FDD03F]";

const headingClass = cn(
  "text-balance text-center font-bold leading-tight",
  "text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]",
);

const phases = [
  {
    id: "phase-1",
    label: "Phase 1",
    title: "Technical Accounting & GAAP Alignment",
  },
  {
    id: "phase-2",
    label: "Phase 2",
    title: "CFO Office Transformation (FP&A + Governance Engine)",
  },
  {
    id: "phase-3",
    label: "Phase 3",
    title: "Digital, ERP & Automation Readiness",
  },
] as const;

export function IrMiddleSectionFour() {
  return (
    <section
      className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-16 dark:bg-[#0a0a0f]"
      aria-labelledby="ir-blueprint-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <h2
          id="ir-blueprint-heading"
          className={cn(headingClass, "text-neutral-900 dark:text-white")}
        >
          The Contetra{" "}
          <span className={gold}>IPO-Readiness Blueprint</span>
        </h2>

        <ul
          className={cn(
            "mx-auto mt-10 grid w-full max-w-[880px] list-none justify-items-center gap-10 sm:mt-12 md:mt-14 md:max-w-[900px] md:grid-cols-3 md:gap-6 lg:gap-8",
          )}
        >
          {phases.map((item) => (
            <li
              key={item.id}
              className="flex w-full min-w-0 max-w-[270px] justify-center"
              aria-label={`${item.label}: ${item.title}`}
            >
              <div className="relative flex w-full flex-col">
                {/* Badge: vertical center on card top border — half disk above, half inside */}
                <div
                  className={cn(
                    "absolute left-1/2 top-0 z-20 flex h-[5rem] w-[5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FDD03F] shadow-md",
                    "text-sm font-bold leading-none tracking-tight text-[#1a1a2e] sm:h-[5.25rem] sm:w-[5.25rem] sm:text-base",
                  )}
                >
                  <span className="px-2 text-center">{item.label}</span>
                </div>

                <div
                  className={cn(
                    "flex min-h-[16rem] flex-1 flex-col items-center justify-center rounded-2xl bg-white px-5 pb-10 pt-14 text-center sm:min-h-[17.5rem] sm:px-6 sm:pb-11 sm:pt-16",
                    "shadow-[0_22px_50px_-12px_rgba(15,23,42,0.2),0_12px_32px_-10px_rgba(15,23,42,0.14),0_4px_12px_-2px_rgba(15,23,42,0.08)]",
                    "dark:bg-neutral-900 dark:shadow-[0_24px_56px_-12px_rgba(0,0,0,0.55),0_12px_28px_-8px_rgba(0,0,0,0.4)]",
                  )}
                >
                  <p
                    className={cn(
                      "text-lg font-bold leading-snug text-[#1a1a2e] sm:text-xl sm:leading-snug md:text-[1.35rem] md:leading-snug",
                      "dark:text-neutral-100",
                    )}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <h2
          id="ir-connects-heading"
          className={cn(
            headingClass,
            "mt-14 text-neutral-900 dark:text-white sm:mt-16 md:mt-20 lg:mt-24",
          )}
        >
          How Everything <span className={gold}>Connects</span>
        </h2>

        <div className="relative mx-auto mt-8 w-full max-w-[min(100%,960px)] sm:mt-10 md:mt-12 lg:mt-14">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src={IR_CONNECTS}
              alt="Process flow: Technical Accounting, FP&amp;A, Digital Systems, Controls, GCC, IPO Storytelling."
              width={960}
              height={320}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 960px"
              className="h-auto w-full object-contain object-center"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
