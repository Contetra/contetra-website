import Image from "next/image";

import { cn } from "@/lib/utils";

const WORK_ITEMS = [
  {
    id: "1",
    title: "Business Value Simulator",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(5).png",
  },
  {
    id: "2",
    title: "Working Capital Management",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(6).png",
  },
  {
    id: "3",
    title: "Planning, Budgeting & Forecasting",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(4).png",
  },
  {
    id: "4",
    title: "Fixed Cost Meter",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(3).png",
  },
  {
    id: "5",
    title: "Preparing A Sales Dashboard",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(2).png",
  },
  {
    id: "6",
    title: "Continuous Performance Monitoring",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(1).png",
  },
] as const;

export function SbfmsMiddleSectionThree() {
  return (
    <section
      className="w-full bg-[#f4f6f8] py-10 sm:py-12 md:py-14 dark:bg-[#0f1218]"
      aria-labelledby="sbfms-numbers-work-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
        <h2
          id="sbfms-numbers-work-heading"
          className={cn(
            "text-center text-[1.8rem] font-bold leading-tight text-[#1a2751]",
            "sm:text-[2rem] md:text-[2.2rem] dark:text-white",
          )}
        >
          How we put the <span className="text-[#55b48a]">Numbers to Work</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[760px] text-center text-[1rem] font-medium leading-[1.45] text-[#111827] sm:text-[1.08rem] dark:text-neutral-200">
          Tired of guesswork and flying blind?
          <br />
          Turn your ambitions into actionable plans with our Strategic CFO
          services.
        </p>

        <div
          className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#55b48a]"
          aria-hidden
        />

        <div className="mt-10 grid grid-cols-1 justify-center gap-4 sm:grid-cols-[repeat(2,minmax(0,252px))] md:gap-10 lg:grid-cols-[repeat(3,minmax(0,252px))]">
          {WORK_ITEMS.map((item) => (
            <article
              key={item.id}
              className={cn(
                "relative flex h-[252px] w-full max-w-[248px] flex-col items-center rounded-[22px] border border-[#e5e7eb] bg-white px-5 pb-6 pt-7 text-center sm:max-w-[252px]",
                "shadow-[6px_6px_0px_0px_#48a56f]",
                "dark:border-neutral-700 dark:bg-[#141826] dark:shadow-[6px_6px_0px_0px_#2f7a56]",
              )}
            >
              <div className="relative h-[80px] w-[118px] sm:h-[84px] sm:w-[122px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="122px"
                />
              </div>
              <h3 className="mt-6 max-w-[220px] text-[1.35rem] font-semibold leading-[1.16] text-[#2a285d] sm:text-[1.55rem] md:text-[1.3rem] dark:text-[#d9ddff]">
                {item.title}
              </h3>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
