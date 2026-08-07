import Image from "next/image";

import { cn } from "@/lib/utils";

const WORK_ITEMS = [
  {
    id: "1",
    title: "Business Value Simulator",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(5).png",
    backLines: [
      "Segment-wise Gross-margin report",
      "Weekly action dashboard",
      "Pricing Strategy with segment-wise cost sheets",
    ],
  },
  {
    id: "2",
    title: "Working Capital Management",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(6).png",
    backLines: [
      "Vendor & Customer profiling.",
      "Procurement to collection cycle assessment.",
      "Effective inventory management.",
      "Ideal debt evaluation + negotiate with bankers.",
    ],
  },
  {
    id: "3",
    title: "Planning, Budgeting & Forecasting",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(4).png",
    backLines: [
      "Monthly top to bottom budgeting.",
      "Budgeting for individual line items.",
      "Data driven cash-flow projection.",
      "Roadmap to align the vision and mission of the company.",
    ],
  },
  {
    id: "4",
    title: "Fixed Cost Meter",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(3).png",
    backLines: [
      "Calculate fixed assets ROI.",
      "Determine capacity utilization.",
      "Work out abnormal costs.",
      "Achieve cost savings.",
    ],
  },
  {
    id: "5",
    title: "Preparing A Sales Dashboard",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(2).png",
    backLines: [
      "Revenue Forecasting with ideal sales mix.",
      "Break-even Analysis Report.",
      "Determine highest profitmaking segments.",
      "Lead to sales conversion cycle.",
    ],
  },
  {
    id: "6",
    title: "Continuous Performance Monitoring",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/numbers-to-work%20(1).png",
    backLines: [
      "One page dashboard for 7 key business drivers",
      "Actuals vs Budgeted Variance Analysis",
      "Course correction on budgets and projections",
      "Optimizations in existing system",
    ],
  },
] as const;

function NumbersFlipCard({
  title,
  icon,
  backLines,
}: (typeof WORK_ITEMS)[number]) {
  return (
    <div
      tabIndex={0}
      className={cn(
        "group relative mx-auto h-[260px] w-full max-w-[248px] outline-none [perspective:1200px] sm:max-w-[252px]",
      )}
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d]",
          "group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]",
        )}
      >
        <article
          className={cn(
            "absolute inset-0 flex h-full w-full flex-col items-center rounded-[22px] border border-[#e5e7eb] bg-white px-5 pb-6 pt-7 text-center",
            "shadow-[6px_6px_0px_0px_#48a56f]",
            "dark:border-neutral-700 dark:bg-[#141826] dark:shadow-[6px_6px_0px_0px_#2f7a56]",
            "[backface-visibility:hidden]",
          )}
        >
          <div className="relative h-[80px] w-[118px] sm:h-[84px] sm:w-[122px]">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain"
              sizes="122px"
            />
          </div>
          <h3 className="mt-6 max-w-[220px] text-[1.35rem] font-semibold leading-[1.16] text-[#2a285d] sm:text-[1.55rem] md:text-[1.3rem] dark:text-[#d9ddff]">
            {title}
          </h3>
        </article>

        <div
          aria-hidden
          className={cn(
            "absolute inset-0 flex h-full w-full flex-col justify-center overflow-hidden rounded-[22px] border border-[#48a56f]/40 bg-[#2a285d] px-5 py-5 text-left shadow-[6px_6px_0px_0px_#48a56f] sm:py-6",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "dark:border-[#2f7a56]/50 dark:bg-[#1a1f35]",
          )}
        >
          <ul className="list-disc space-y-2.5 pl-4 text-[0.9rem] font-medium leading-snug text-white sm:text-[0.95rem]">
            {backLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="sr-only">
        {title}. {backLines.join(" ")}.
      </p>
    </div>
  );
}

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
          Our Financial Management Frameworks:
          <br />
          <span className="text-[#55b48a]">
            Tools We Use to Drive Profitability
          </span>
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
            <NumbersFlipCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
