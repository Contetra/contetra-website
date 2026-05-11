"use client";

import type { ReactNode } from "react";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ILLUSTRATION_URL =
  "https://contetra.b-cdn.net/pages/services/frc/frc-image.png";

const financialReportingLeaves = [
  {
    id: "ifrs-gaap",
    label: "IND AS, IFRS, US GAAP",
    detail:
      "Introduction, Framework, Financial instruments, Leases, Financial Reporting Disclosures, Revenue Recognition, much more!",
  },
  {
    id: "auditor-navigator",
    label: "Auditor Navigator",
    detail:
      "Understanding the Audit Process, Audit Planning and Risk Assessment, Documentation , Internal Controls and Audit Compliance, Analytical Procedures, Audit Sampling Techniques, Fraud Detection and Prevention, Handling Audit Queries and Requests, etc",
  },
] as const;

const businessFinanceLeaves = [
  {
    id: "fpa",
    label: "FP&A Essentials",
    tier: "top" as const,
    detail:
      "Budgeting and Forecasting, Cost Analysis, Cash Flow Analysis, Capital Budgeting, Financial Reporting, Profitability Analysis, etc.",
  },
  {
    id: "toolbox",
    label: "Finance Toolbox",
    tier: "top" as const,
    detail:
      "Power BI, Advanced Excel, Macros, Tableau etc",
  },
  {
    id: "decoded",
    label: "Business Finance Decoded",
    tier: "bottom" as const,
    detail:
      "Decoding the business model, numbers that matter, storytelling with numbers and becoming a finance wizard!",
  },
] as const;

function BranchLeaf({
  leafId,
  label,
  detail,
  className,
}: {
  leafId: string;
  label: string;
  detail: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  }, [clearClose]);

  const openNow = useCallback(() => {
    clearClose();
    setOpen(true);
  }, [clearClose]);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center",
        /* Open leaf must sit above later siblings (e.g. Business Finance Decoded) so the panel isn’t covered */
        open ? "z-[200]" : "z-10",
        className,
      )}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        id={`frc-s7-leaf-${leafId}`}
        aria-controls={`frc-s7-panel-${leafId}`}
        aria-haspopup="true"
        data-state={open ? "open" : "closed"}
        className={cn(
          "relative flex min-h-[3rem] w-full max-w-[280px] cursor-default items-center justify-center rounded-xl border-2 border-[#50a085] bg-white px-4 py-3 text-center text-[13px] font-bold uppercase leading-snug tracking-wide text-[#1a1640] shadow-sm outline-none transition sm:min-h-[3rem] sm:max-w-[300px] sm:px-5 sm:text-[14px]",
          /* Panel uses z-[60] = chip z-[50] + 10 so hover detail stacks above illustration & CTA */
          open ? "z-[50]" : "z-10",
          "hover:bg-[#f4faf8] focus-visible:ring-2 focus-visible:ring-[#50a085]/50",
          open && "ring-2 ring-[#50a085]/35",
        )}
        onMouseEnter={openNow}
        onFocus={openNow}
        onBlur={scheduleClose}
      >
        {label}
      </button>

      <div
        id={`frc-s7-panel-${leafId}`}
        role="region"
        aria-labelledby={`frc-s7-leaf-${leafId}`}
        className={cn(
          "absolute left-1/2 top-full w-[min(calc(100vw-2rem),400px)] -translate-x-1/2 px-2 pt-2 transition-opacity duration-150",
          open
            ? "z-[60] pointer-events-auto opacity-100"
            : "pointer-events-none z-0 opacity-0",
        )}
        onMouseEnter={openNow}
      >
        <div className="relative z-[60] rounded-lg border-2 border-[#1a1640] bg-[#50a085] px-3 py-3 text-center text-[12px] font-medium leading-snug text-white shadow-[0_14px_36px_rgba(26,22,64,0.22)] sm:px-4 sm:text-[13px] sm:leading-relaxed">
          {detail}
        </div>
      </div>
    </div>
  );
}

function ParentPill({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[min(100%,420px)] rounded-full border-[3px] border-[#50a085] bg-[#1a1640] px-7 py-4 text-center shadow-sm sm:max-w-[480px] sm:px-10 sm:py-5 lg:max-w-[520px] lg:px-12 lg:py-5">
      <h3 className="text-[clamp(0.95rem,1.8vw,1.25rem)] font-bold uppercase tracking-wide text-white">
        {children}
      </h3>
    </div>
  );
}

function FinancialReportingTree() {
  return (
    <div className="flex w-full max-w-[440px] flex-col items-center lg:max-w-none">
      <ParentPill>Financial reporting</ParentPill>

      <div className="relative mt-0 w-full max-w-[400px] px-1 sm:max-w-[440px]">
        <svg
          className="mx-auto block h-[52px] w-full sm:h-[56px]"
          viewBox="0 0 400 56"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <path
            d="M 200 0 L 200 14 M 120 14 L 280 14 M 120 14 L 120 56 M 280 14 L 280 56"
            stroke="#50a085"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="-mt-1 flex flex-col items-stretch gap-4 sm:flex-row sm:items-start sm:justify-center sm:gap-3">
          {financialReportingLeaves.map((item) => (
            <BranchLeaf
              key={item.id}
              leafId={item.id}
              label={item.label}
              detail={item.detail}
              className="sm:max-w-[300px] sm:flex-1"
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
      <ParentPill>Business finance</ParentPill>

      <div className="relative mt-0 w-full max-w-[440px] px-1">
        <svg
          className="mx-auto block h-[72px] w-full sm:h-[80px]"
          viewBox="0 0 400 80"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <path
            d="M 200 0 L 200 18 M 100 18 L 300 18 M 100 18 L 100 42 M 300 18 L 300 42 M 200 18 L 200 80"
            stroke="#50a085"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="-mt-2 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-3">
          {top.map((item) => (
            <BranchLeaf
              key={item.id}
              leafId={item.id}
              label={item.label}
              detail={item.detail}
              className={cn(
                "sm:max-w-[300px]",
                item.id === "fpa" && "sm:justify-self-end",
                item.id === "toolbox" && "sm:justify-self-start",
              )}
            />
          ))}
        </div>

        {bottom ? (
          <div className="mt-5 flex justify-center px-2 sm:mt-6">
            <BranchLeaf
              leafId={bottom.id}
              label={bottom.label}
              detail={bottom.detail}
              className="w-full max-w-[300px]"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function TreeMobile({
  title,
  leaves,
}: {
  title: string;
  leaves: readonly { id: string; label: string; detail: string }[];
}) {
  return (
    <div className="flex w-full max-w-[400px] flex-col items-center">
      <ParentPill>{title}</ParentPill>
      <div className="mt-4 flex w-full flex-col gap-4 border-l-2 border-[#50a085] pl-3 sm:pl-4">
        {leaves.map((item) => (
          <BranchLeaf
            key={item.id}
            leafId={item.id}
            label={item.label}
            detail={item.detail}
          />
        ))}
      </div>
    </div>
  );
}

export function FrcMiddleSectionSeven() {
  return (
    <section
      className="relative z-0 w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 xl:px-14 2xl:px-[80px]"
      aria-labelledby="frc-section-seven-heading"
    >
      <div className="relative z-0 mx-auto w-full max-w-[1280px]">
        <header className="text-center">
          <h2
            id="frc-section-seven-heading"
            className="mx-auto max-w-3xl text-balance text-[clamp(1.35rem,2.4vw,2rem)] font-bold leading-tight"
          >
            <span className="text-[#1a1640]">Ready to elevate your </span>
            <span className="text-[#50a085]">Finance Team&apos;s Expertise?</span>
          </h2>
          <div
            className="mx-auto mt-3 h-[3px] w-[clamp(140px,22vw,220px)] bg-[#50a085]"
            aria-hidden
          />
        </header>

        <div className="relative z-10 mt-10 sm:mt-12">
          <div className="hidden grid-cols-1 gap-12 sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12">
            <div className="flex justify-center lg:justify-end">
              <FinancialReportingTree />
            </div>
            <div className="flex justify-center lg:justify-start">
              <BusinessFinanceTreeDesktop />
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 sm:hidden">
            <TreeMobile title="Financial reporting" leaves={financialReportingLeaves} />
            <TreeMobile title="Business finance" leaves={businessFinanceLeaves} />
          </div>
        </div>

        <div className="relative z-[5] mx-auto mt-4 flex max-w-[420px] flex-col items-center gap-0 sm:mt-2 sm:max-w-[460px]">
          <div className="relative aspect-[4/3] w-full max-w-[min(100%,320px)] sm:max-w-[380px]">
            <Image
              src={ILLUSTRATION_URL}
              alt="Two finance professionals in discussion with growth and operations icons"
              fill
              unoptimized
              className="object-contain object-bottom"
              sizes="(max-width: 640px) 320px, 380px"
            />
          </div>

          <div className="relative z-[5] -mt-px flex w-full justify-center">
            <Button
              asChild
              className="mt-0 h-auto min-h-12 rounded-full border-2 border-[#3d8f6f] bg-[#50a085] px-6 py-3.5 text-center text-[clamp(0.85rem,1.1vw,1rem)] font-bold text-white shadow-sm hover:bg-[#459678] hover:text-white"
            >
              <Link href="/corporate-trainings-at-contetra/">
                Invest in your finance team&apos;s growth!
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
