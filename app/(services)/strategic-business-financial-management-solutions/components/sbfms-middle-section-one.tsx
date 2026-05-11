import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const MID_IMAGE =
  "https://contetra.b-cdn.net/pages/services/sbfms/sbfm-mid.webp";

const CENTER_COPY = `6-12 months of
Complete Numbers
Direction with
Structured
Implementation
& Handholding`;

const QUESTIONS = [
  "Do you set budgets internally for your revenue segments as well as expenses?",
  "Is your cash blocked in the working capital cycle?",
  "Lack of a Performance Monitoring system leading to daily firefighting?",
  "Want to go for an SME IPO but lack of finance direction?",
  "Unable to improve sales team performance?",
] as const;

const OUTCOMES: { key: string; parts: ReactNode }[] = [
  {
    key: "o1",
    parts: (
      <>
        Creating{" "}
        <strong className="font-semibold text-[#15803d]">
          data-based budgets
        </strong>{" "}
        with increased predictability and monitoring actual performance
        regularly to get{" "}
        <strong className="font-semibold text-[#15803d]">true numbers.</strong>
      </>
    ),
  },
  {
    key: "o2",
    parts: (
      <>
        Remove bottlenecks & reduce your cash conversion cycle time by upto 50%
        and{" "}
        <strong className="font-semibold text-[#15803d]">
          improve liquidity.
        </strong>
      </>
    ),
  },
  {
    key: "o3",
    parts: (
      <>
        1-page dashboards giving a bird&apos;s eye view of the business{" "}
        <strong className="font-semibold text-[#15803d]">
          turning data into strategy.
        </strong>
      </>
    ),
  },
  {
    key: "o4",
    parts: (
      <>
        Get{" "}
        <Link
          href="/ipo-readiness"
          className="inline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803d]/35 focus-visible:ring-offset-2 rounded-sm"
        >
          <strong className="font-semibold text-[#15803d]">IPO ready</strong>
        </Link>{" "}
        with a valuation story backed by Numbers.
      </>
    ),
  },
  {
    key: "o5",
    parts: (
      <>
        A{" "}
        <strong className="font-semibold text-[#15803d]">
          win-win incentive structure
        </strong>{" "}
        leading to a happier sales team with increased efficiency.
      </>
    ),
  },
];

function CenterOverlayText({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "pointer-events-none text-center font-semibold leading-snug text-white",
        "whitespace-pre-line text-[0.7rem] sm:text-xs sm:leading-snug md:text-sm md:leading-snug",
        "xl:text-[0.65rem] xl:text-[16px] 2xl:leading-snug",
        "max-w-[11rem] sm:max-w-[13rem] md:max-w-[14rem] xl:max-w-[10.5rem] 2xl:max-w-[12rem]",
        className,
      )}
    >
      {CENTER_COPY}
    </p>
  );
}

export function SbfmsMiddleSectionOne() {
  return (
    <section
      className="w-full overflow-x-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16 dark:bg-[#0a0a0f]"
      aria-labelledby="sbfms-support-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8 2xl:px-6">
        <h2
          id="sbfms-support-heading"
          className={cn(
            "text-balance text-center font-bold leading-tight text-[#1a2744] dark:text-white",
            "text-[1.5rem] sm:text-[1.65rem] md:text-[1.85rem] lg:text-[2rem]",
          )}
        >
          Common Finance Challenges our{" "}
          <span className="text-[#16a34a] dark:text-[#4ade80]">
            Fractional CFO services
          </span>{" "}
          solve for SMEs and Corporates
        </h2>

        <div className="mx-auto mt-5 max-w-[52rem] space-y-4 text-pretty text-center text-sm leading-relaxed text-neutral-700 sm:mt-6 sm:text-base dark:text-neutral-300">
          <p>
            We specialize in{" "}
            <strong className="font-semibold text-neutral-900 dark:text-white">
              financial strategy consulting for optimizing business operations
            </strong>{" "}
            by helping businesses streamline their processes, improve
            profitability, and achieve long-term growth through data-driven{" "}
            <strong className="font-semibold text-neutral-900 dark:text-white">
              SME financial strategy
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-neutral-900 dark:text-white">
              cash flow optimization
            </strong>
            .
          </p>
          <p>
            Our{" "}
            <strong className="font-semibold text-neutral-900 dark:text-white">
              virtual and fractional CFO services
            </strong>{" "}
            provide businesses with expert financial guidance, strategic
            planning, and comprehensive financial management solutions,
            empowering them to make informed decisions and drive sustainable
            growth.
          </p>
        </div>

        <div
          className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#16a34a] sm:mt-7 sm:w-14"
          aria-hidden
        />

        {/* Three columns: problems | hub | outcomes */}
        <div
          className={cn(
            "mt-10 flex flex-col gap-10 sm:mt-12 sm:gap-12",
            "xl:mt-14 xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(260px,380px)_minmax(0,1fr)] xl:items-center xl:gap-6 2xl:gap-8",
          )}
        >
          <ul className="flex list-none flex-col gap-5 sm:gap-6">
            {QUESTIONS.map((q) => (
              <li key={q} className="flex gap-2.5 sm:gap-3">
                <span
                  className="shrink-0 text-2xl font-bold leading-none text-[#b91c1c] sm:text-3xl"
                  aria-hidden
                >
                  ?
                </span>
                <span className="text-sm font-medium leading-snug text-[#7f1d1d] sm:text-base dark:text-red-200/90">
                  {q}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center xl:min-w-0">
            {/* Full infographic — visible at 1280px+ (Tailwind xl) */}
            <div className="relative hidden w-full max-w-[380px] xl:block 2xl:max-w-[420px]">
              <Image
                src={MID_IMAGE}
                alt="Diagram: five challenges flowing into a central hub and five outcomes flowing out."
                width={420}
                height={420}
                sizes="(min-width: 1280px) min(380px, 30vw), 0px"
                className="h-auto w-full object-contain"
                priority={false}
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <CenterOverlayText />
              </div>
            </div>

            {/* Simple hub — below 1280px */}
            <div
              className={cn(
                "relative aspect-square w-full max-w-[220px] rounded-full bg-[#16a34a] shadow-md sm:max-w-[260px] md:max-w-[280px]",
                "xl:hidden",
              )}
            >
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <CenterOverlayText />
              </div>
            </div>
          </div>

          <ul className="flex list-none flex-col gap-5 sm:gap-6">
            {OUTCOMES.map((item) => (
              <li
                key={item.key}
                className="relative pl-0 text-sm leading-snug text-[#1a2744] sm:text-base dark:text-neutral-200"
              >
                <span className="font-medium">{item.parts}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
