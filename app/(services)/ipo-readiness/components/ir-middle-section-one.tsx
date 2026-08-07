import Image from "next/image";

import { cn } from "@/lib/utils";

const IR_CTA_DIAGRAM =
  "https://contetra.b-cdn.net/pages/services/ir/ir-cta.png";

const gold = "text-[#FDD03F]";

export function IrMiddleSectionOne() {
  return (
    <section
      className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-16 dark:bg-[#0a0a0f]"
      aria-labelledby="ir-reality-heading"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <div
          className={cn(
            "w-full bg-[#180130] px-5 py-6 text-center sm:px-8 sm:py-8 md:px-12 md:py-9",
            "rounded-[24px] sm:rounded-[32px] md:rounded-full",
          )}
        >
          <h2
            id="ir-reality-heading"
            className={cn(
              "text-balance font-bold leading-tight text-white",
              "text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]",
            )}
          >
            The Reality of <span className={gold}>IPO Readiness</span> Assessment 
          </h2>
          <p
            className={cn(
              "mx-auto mt-3 max-w-[52rem] text-pretty text-white/95",
              "text-base leading-relaxed sm:mt-4 sm:text-[1.0625rem] md:text-lg lg:text-xl",
            )}
          >
            Going public is not just a financial event. It is a systems,
            controls, people, and storytelling event.
          </p>
        </div>

        <div className="relative mt-12 w-full sm:mt-14 md:mt-16 lg:mt-[4.5rem]">
          <div className="mx-auto w-full max-w-[min(100%,720px)] sm:max-w-[min(100%,800px)] md:max-w-[min(100%,880px)]">
            <Image
              src={IR_CTA_DIAGRAM}
              alt="For CFOs: orchestrating clean financials, scalable systems, audit readiness, controls, forecasting, alignment, IFRS/GAAP consistency, governance, MI packs, and close cycles."
              width={880}
              height={502}
              sizes="(max-width: 768px) 92vw, 880px"
              className="h-auto w-full object-contain object-center"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
