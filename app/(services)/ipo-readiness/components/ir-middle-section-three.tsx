import Image from "next/image";

import { cn } from "@/lib/utils";

const IR_ROADMAP =
  "https://contetra.b-cdn.net/pages/services/ir/ir-roadmap.png";

const gold = "text-[#FDD03F]";

export function IrMiddleSectionThree() {
  return (
    <section
      className="w-full overflow-x-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 dark:bg-[#0a0a0f]"
      aria-labelledby="ir-roadmap-heading"
    >
      <div className="w-full bg-[#180130] py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
        <div className="mx-auto w-full px-4 text-center sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <h2
            id="ir-roadmap-heading"
            className={cn(
              "text-balance font-bold leading-tight text-white",
              "text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]",
            )}
          >
            Integrated IPO Readiness <span className={gold}>Roadmap</span>
            <br />
            (12-18 Months)
          </h2>
        </div>

        <div
          className={cn(
            "relative mx-auto mt-6 w-full max-w-[min(100%,920px)] px-4 sm:mt-8 sm:px-6 md:mt-10 md:max-w-[min(100%,880px)] lg:mt-12 lg:max-w-[min(100%,1200px)]",
          )}
        >
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src={IR_ROADMAP}
              alt="Timeline infographic: five phases Q1–Q2 through Q5–Q6 with alternating segments and smartphone graphic."
              width={920}
              height={368}
              sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1024px) min(880px, 90vw), min(800px, 85vw)"
              className="h-auto w-full object-contain object-center"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
