"use client";

import type { ReactNode } from "react";
import Lottie from "lottie-react";

import animationTen from "@/components/lottie/animation-10.json";
import animationEleven from "@/components/lottie/animation-11.json";
import animationTwelve from "@/components/lottie/animation-12.json";
import animationThirteen from "@/components/lottie/animation-13.json";
import { cn } from "@/lib/utils";

const rows = [
  {
    id: "cost-savings",
    mediaFirst: false as const,
    animation: animationTen,
    ariaLabel: "Cost savings and streamlined accounting animation",
    title: "Cha-Ching: Instant Cost Savings",
    body: (
      <>
        Outsourcing your accounting and bookkeeping services can{" "}
        <strong className="font-semibold text-slate-900 dark:text-white">
          save you money and streamline your financial operations.
        </strong>{" "}
        Hiring an in-house team comes with added expenses (such as salary cost,
        retirement benefits, training costs, infrastructure support, etc.).
        Standardizing your accounting processes creates consistency and
        accuracy, and annual agreements allow for flexibility and performance
        evaluation.
      </>
    ),
  },
  {
    id: "scalability",
    mediaFirst: true as const,
    animation: animationEleven,
    ariaLabel: "Scalable accounting operations animation",
    title: "Grow Well: Sustainable Scalability",
    body: (
      <>
        Outsourcing provides the{" "}
        <strong className="font-semibold text-slate-900 dark:text-white">
          flexibility to scale the accounting functions up or down based on
          needs.
        </strong>{" "}
        This allows firms to efficiently manage fluctuations in their accounting
        workloads, particularly during seasonal changes in demand. As a result,
        there is necessary flexibility to achieve optimal operational efficiency
        while ensuring they meet their financial obligations.
      </>
    ),
  },
  {
    id: "roi",
    mediaFirst: false as const,
    animation: animationTwelve,
    ariaLabel: "ROI and measurable deliverables animation",
    title: "Show me the money: ROI-driven Approach",
    body: (
      <>
        When you outsource with the right partner,{" "}
        <strong className="font-semibold text-slate-900 dark:text-white">
          the output is more tangible, measurable, and tailored to specific
          requirements, with clear time-bound deliverables that can be easily
          tracked.
        </strong>{" "}
        That means clearer accountability, predictable outcomes, and a finance
        function aligned to business priorities.
      </>
    ),
  },
  {
    id: "expertise",
    mediaFirst: true as const,
    animation: animationThirteen,
    ariaLabel: "Expert team and deep accounting experience animation",
    title: "Access to Expertise",
    body: (
      <>
        Finding and retaining top-notch candidates for financial reporting
        positions is not easy. Offshore accounting outsourcing presents a golden
        opportunity to tap into a{" "}
        <strong className="font-semibold text-slate-900 dark:text-white">
          pool of experts with a wealth of combined experience spanning several
          decades.
        </strong>{" "}
        This extensive expertise is vital to keeping up with the ever-changing
        business landscape while staying ahead of the competition and complying
        with relevant regulations.
      </>
    ),
  },
] as const;

function OasLottieBlock({
  animationData,
  ariaLabel,
}: {
  animationData: object;
  ariaLabel: string;
}) {
  return (
    <div
      className="relative mx-auto flex w-full max-w-[260px] shrink-0 items-center justify-center sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]"
      role="img"
      aria-label={ariaLabel}
    >
      <Lottie
        className="h-full w-full max-h-[200px] max-w-[200px] sm:max-h-[220px] sm:max-w-[220px] md:max-h-[240px] md:max-w-[240px] lg:max-h-[260px] lg:max-w-[260px]"
        animationData={animationData}
        loop
      />
    </div>
  );
}

function TextBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-center text-left">
      <h3 className="text-[1.35rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-[1.48rem] md:text-[1.62rem] lg:text-[1.75rem] xl:text-[1.85rem] 2xl:text-[1.92rem] dark:text-white">
        {title}
      </h3>
      <p className="mt-3 text-[13px] leading-[1.65] text-slate-600 sm:mt-4 sm:text-[14px] sm:leading-[1.62] md:text-[15px] md:leading-[1.65] dark:text-slate-300">
        {children}
      </p>
    </div>
  );
}

export function OasMiddleSectionThree() {
  return (
    <section
      className={cn(
        "w-full bg-white",
        "box-border px-[10px] py-10 sm:px-4 sm:py-12 md:px-8 md:py-14 lg:py-16",
        "xl:px-14 xl:py-16 2xl:px-[80px] 2xl:py-20"
      )}
    >
      <div className="w-full">
        <div className="flex flex-col">
          {rows.map((row, index) => {
            const lottie = (
              <OasLottieBlock
                animationData={row.animation}
                ariaLabel={row.ariaLabel}
              />
            );
            const text = (
              <TextBlock title={row.title}>{row.body}</TextBlock>
            );

            return (
              <div
                key={row.id}
                className={cn(
                  index > 0 &&
                    "border-t border-slate-200 pt-10 sm:pt-12 md:pt-14 lg:pt-16 dark:border-slate-800"
                )}
              >
                <div
                  className={
                    row.mediaFirst
                      ? "flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:gap-10 lg:gap-12 xl:gap-14"
                      : "flex flex-col-reverse gap-6 sm:gap-8 md:flex-row md:items-center md:gap-10 lg:gap-12 xl:gap-14"
                  }
                >
                  {row.mediaFirst ? (
                    <>
                      <div className="flex w-full shrink-0 justify-center md:w-[42%] md:max-w-none lg:w-[40%]">
                        {lottie}
                      </div>
                      <div className="w-full md:min-w-0 md:flex-1">{text}</div>
                    </>
                  ) : (
                    <>
                      <div className="w-full md:min-w-0 md:flex-1">{text}</div>
                      <div className="flex w-full shrink-0 justify-center md:w-[42%] md:max-w-none lg:w-[40%]">
                        {lottie}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
