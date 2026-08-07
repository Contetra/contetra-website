"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Replace each `detail` with your own copy (string or JSX). */
const financialReportingLeaves: {
  id: string;
  label: ReactNode;
  detail: ReactNode;
}[] = [
  {
    id: "ifrs-gaap",
    label: "IND AS, IFRS, US GAAP",
    detail: (
      <p className="m-0">
        Paste your content for <strong>IND AS, IFRS, US GAAP</strong> here.
      </p>
    ),
  },
  {
    id: "auditor-navigator",
    label: "Auditor navigator",
    detail: (
      <p className="m-0">
        Paste your content for <strong>Auditor navigator</strong> here.
      </p>
    ),
  },
];

const businessFinanceLeaves: {
  id: string;
  label: ReactNode;
  detail: ReactNode;
  tier: "top" | "bottom";
}[] = [
  {
    id: "fpa",
    label: "FP&A essentials",
    tier: "top",
    detail: (
      <p className="m-0">
        Paste your content for <strong>FP&amp;A essentials</strong> here.
      </p>
    ),
  },
  {
    id: "toolbox",
    label: "Finance toolbox",
    tier: "top",
    detail: (
      <p className="m-0">
        Paste your content for <strong>Finance toolbox</strong> here.
      </p>
    ),
  },
  {
    id: "decoded",
    label: "Business finance decoded",
    tier: "bottom",
    detail: (
      <p className="m-0">
        Paste your content for <strong>Business finance decoded</strong> here.
      </p>
    ),
  },
];

function LeafPillWithHover({
  color,
  className,
  label,
  detail,
}: {
  color: "green" | "navy";
  className?: string;
  label: ReactNode;
  detail: ReactNode;
}) {
  return (
    <div className={cn("group flex min-w-0 flex-col items-stretch", className)}>
      <div
        className={cn(
          "cursor-default rounded-md px-3 py-3 text-center text-[11px] font-bold uppercase leading-snug tracking-wide text-white sm:px-4 sm:text-[12px]",
          "shadow-sm transition-transform duration-300 ease-out",
          "group-hover:z-10 group-hover:scale-[1.045] group-hover:shadow-[0_12px_28px_-8px_rgba(26,26,60,0.25)] dark:group-hover:shadow-[0_18px_55px_rgba(0,0,0,0.28)]",
          color === "green"
            ? "bg-contetra-green dark:bg-[#4a9d78]"
            : "bg-[#1B1345] dark:bg-[#172036]",
        )}
      >
        {label}
      </div>
      <div
        className={cn(
          "max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity,margin] duration-300 ease-out",
          "group-hover:mt-2 group-hover:max-h-[min(50vh,320px)] group-hover:opacity-100",
        )}
      >
        <div
          className={cn(
            "rounded-md border border-[#E8EBF0] bg-[#F9FAFB] px-3 py-2.5 text-[12px] leading-relaxed text-[#374151]",
            "break-words sm:text-[13px] dark:border-[#344155] dark:bg-[#172036] dark:text-[#E5E7EB]",
          )}
        >
          {detail}
        </div>
      </div>
    </div>
  );
}

function FinancialReportingTree() {
  return (
    <div className="flex w-full max-w-[440px] flex-col items-center lg:max-w-none">
      <div
        className={cn(
          "w-full max-w-[340px] rounded-md border border-[#E8EBF0] bg-white px-5 py-4 text-center",
          "shadow-[0_2px_0_0_rgba(229,231,235,0.9),0_-2px_0_0_rgba(229,231,235,0.5)]",
          "dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_2px_0_0_rgba(31,41,55,0.8),0_-2px_0_0_rgba(31,41,55,0.5)]",
        )}
      >
        <h3 className="text-[15px] font-bold uppercase tracking-wide text-contetra-green sm:text-[16px] dark:text-[#86efac]">
          Financial reporting
        </h3>
      </div>

      <div className="relative w-full max-w-[380px] px-2 sm:max-w-[420px]">
        <svg
          className="mx-auto block h-[52px] w-full sm:h-[56px]"
          viewBox="0 0 400 56"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <path
            d="M 200 0 L 200 14 M 120 14 L 280 14 M 120 14 L 120 56 M 280 14 L 280 56"
            className="stroke-[#64cb9c] dark:stroke-[#6ee7b7]"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="-mt-1 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:justify-center sm:gap-3">
          {financialReportingLeaves.map((item) => (
            <LeafPillWithHover
              key={item.id}
              color="green"
              className="sm:max-w-[200px] sm:flex-1"
              label={item.label}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BusinessFinanceTreeDesktop() {
  const top = businessFinanceLeaves.filter((l) => l.tier === "top");
  const bottom = businessFinanceLeaves.find((l) => l.tier === "bottom");

  return (
    <div className="flex w-full max-w-[480px] flex-col items-center lg:max-w-none">
      <div
        className={cn(
          "w-full max-w-[340px] rounded-md border border-[#E8EBF0] bg-white px-5 py-4 text-center",
          "shadow-[0_2px_0_0_rgba(229,231,235,0.9),0_-2px_0_0_rgba(229,231,235,0.5)]",
          "dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_2px_0_0_rgba(31,41,55,0.8),0_-2px_0_0_rgba(31,41,55,0.5)]",
        )}
      >
        <h3 className="text-[15px] font-bold uppercase tracking-wide text-[#1B1345] sm:text-[16px] dark:text-[#93C5FD]">
          Business finance
        </h3>
      </div>

      <div className="relative w-full max-w-[440px] px-1">
        <svg
          className="mx-auto block h-[72px] w-full sm:h-[80px]"
          viewBox="0 0 400 80"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <path
            d="M 200 0 L 200 18 M 100 18 L 300 18 M 100 18 L 100 42 M 300 18 L 300 42 M 200 18 L 200 80"
            className="stroke-[#1B1345] dark:stroke-[#93C5FD]"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="-mt-2 grid grid-cols-1 items-start gap-3 sm:grid-cols-2 sm:gap-3">
          {top.map((item) => (
            <LeafPillWithHover
              key={item.id}
              color="navy"
              className={cn(
                "sm:max-w-[210px]",
                item.id === "fpa" && "sm:justify-self-end",
                item.id === "toolbox" && "sm:justify-self-start",
              )}
              label={item.label}
              detail={item.detail}
            />
          ))}
        </div>

        {bottom ? (
          <div className="mt-4 flex justify-center px-2">
            <LeafPillWithHover
              color="navy"
              className="w-full max-w-[320px]"
              label={bottom.label}
              detail={bottom.detail}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function BusinessFinanceTreeMobile() {
  return (
    <div className="flex w-full max-w-[440px] flex-col items-center">
      <div
        className={cn(
          "w-full rounded-md border border-[#E8EBF0] bg-white px-5 py-4 text-center",
          "shadow-[0_2px_0_0_rgba(229,231,235,0.9),0_-2px_0_0_rgba(229,231,235,0.5)]",
          "dark:border-[#1F2937] dark:bg-[#111827]",
        )}
      >
        <h3 className="text-[15px] font-bold uppercase tracking-wide text-[#1B1345] dark:text-[#93C5FD]">
          Business finance
        </h3>
      </div>

      <div className="mt-4 flex w-full flex-col gap-3 border-l-2 border-[#1B1345] pl-3 sm:pl-4 dark:border-[#93C5FD]">
        {businessFinanceLeaves.map((item) => (
          <LeafPillWithHover
            key={item.id}
            color="navy"
            label={item.label}
            detail={item.detail}
          />
        ))}
      </div>
    </div>
  );
}

function FinancialReportingMobile() {
  return (
    <div className="flex w-full max-w-[440px] flex-col items-center">
      <div
        className={cn(
          "w-full rounded-md border border-[#E8EBF0] bg-white px-5 py-4 text-center",
          "shadow-[0_2px_0_0_rgba(229,231,235,0.9),0_-2px_0_0_rgba(229,231,235,0.5)]",
          "dark:border-[#1F2937] dark:bg-[#111827]",
        )}
      >
        <h3 className="text-[15px] font-bold uppercase tracking-wide text-contetra-green dark:text-[#86efac]">
          Financial reporting
        </h3>
      </div>
      <div className="mt-3 flex w-full flex-col gap-3 border-l-2 border-contetra-green pl-3 sm:pl-4 dark:border-[#6ee7b7]">
        {financialReportingLeaves.map((item) => (
          <LeafPillWithHover
            key={item.id}
            color="green"
            label={item.label}
            detail={item.detail}
          />
        ))}
      </div>
    </div>
  );
}

export const CtMiddleSectionFour = () => {
  return (
    <section className="w-full  px-[10px] py-6 sm:px-4 sm:py-8 md:px-8 md:py-10 xl:px-14 2xl:px-[80px] ">
      <div className="mx-auto w-full max-w-[1260px]">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-4 xl:gap-6">
          <div className="flex w-full justify-center lg:justify-end">
            <div className="hidden w-full sm:block">
              <div className="mx-auto flex w-full max-w-[440px] justify-center lg:ml-auto lg:mr-0 lg:max-w-none">
                <FinancialReportingTree />
              </div>
            </div>
            <div className="w-full sm:hidden">
              <div className="mx-auto flex w-full max-w-[440px] justify-center">
                <FinancialReportingMobile />
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center lg:justify-start">
            <div className="hidden w-full sm:block">
              <div className="mx-auto flex w-full max-w-[480px] justify-center lg:ml-0 lg:mr-auto lg:max-w-none">
                <BusinessFinanceTreeDesktop />
              </div>
            </div>
            <div className="w-full sm:hidden">
              <div className="mx-auto flex w-full max-w-[440px] justify-center">
                <BusinessFinanceTreeMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
