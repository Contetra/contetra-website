"use client";

import Image from "next/image";

import { Highlighter } from "@/components/ui/highlighter";

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";
const completeOwnershipImage =
  `${cdnUrl}/pages/services/taigas/taigas-complete-ownership.png`;
const stackProcessImage =
  `${cdnUrl}/pages/services/taigas/taigas-rank.png`;

export const TaigasMiddleSectionFour = () => {
  return (
    <section className="my-[40px] flex w-full flex-col gap-8 sm:my-[50px] sm:gap-10">
      <div className="flex w-full flex-col items-center justify-center rounded-b-[40px] bg-[#F8F9FE] px-3 py-[32px] dark:bg-[#111827] sm:rounded-b-[50px] sm:px-4 sm:py-[40px] md:px-8 xl:rounded-b-[100px] xl:px-14 2xl:px-20">
        <Highlighter
          iterations={6}
          strokeWidth={2}
          padding={5}
          action="underline"
          color="#FF9800"
          animationDuration={1500}
        >
          <h2 className="text-center text-[28px] font-medium dark:text-white sm:text-[32px] xl:text-[40px]">
            How we work
          </h2>
        </Highlighter>
      </div>

      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 px-3 sm:px-4 md:gap-10 md:px-8 xl:px-14 2xl:px-20">
        <div className="mx-auto w-full max-w-[860px] lg:max-w-[920px]">
          <div className="relative aspect-[16/8.5] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src={completeOwnershipImage}
              alt="Complete ownership workflow for technical accounting support"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 920px"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1280px] justify-center">
          <p className="max-w-full rounded-[14px] border border-dashed border-[#E3A96A] px-4 py-2.5 text-center text-[14px] font-medium text-[#3B2C20] dark:border-[#E3A96A] dark:text-[#F3E6D8] sm:px-5 sm:py-3 sm:text-[15px]">
            We approach the project as follows:
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 xl:grid-cols-[1fr_minmax(240px,340px)_1fr] xl:items-start xl:gap-10">
          <div className="order-2 flex flex-col gap-8 md:order-2 xl:order-1">
            <div className="border-b border-[#D9D9D9] pb-6 dark:border-[#2A3054]">
              <h3 className="text-[22px] font-semibold leading-[1.25] text-[#2B2B2B] dark:text-white sm:text-[24px]">
                Pre-Closing{" "}
                <span className="text-[#F39A33]">Activities Support:</span>
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#2B2B2B] dark:text-[#D1D5DB] sm:mt-5">
                Understanding closure process for key areas and potential
                challenges, direct &amp; indirect Tax Positions. Recommendations
                on course of action regarding previous statutory &amp; internal
                audit observations. Preparedness review of estimates and data
                room structure.
              </p>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold leading-[1.25] text-[#2B2B2B] dark:text-white sm:text-[24px]">
                Preparation of{" "}
                <span className="text-[#F39A33]">Financial Statements</span>
                <br />
                as per GAAP
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#2B2B2B] dark:text-[#D1D5DB] sm:mt-5">
                Impact assessment of key standards with quantifiable aspects.
                Preparation of financial statements for the year as per Ind
                AS/IFRS/US GAAP, which shall include the Statement of Financial
                Position, Statement of Profit and Loss and Other Comprehensive
                Income, Statement of Cash Flows, Statement of Changes in Equity
                for the period, Notes to accounts, Comparatives and opening
                balance sheet of previous period.
              </p>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[280px] md:order-1 md:col-span-2 md:max-w-[320px] xl:order-2 xl:col-span-1 xl:max-w-[340px] xl:pt-12">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={stackProcessImage}
                alt="Step-by-step technical accounting process stack illustration"
                fill
                className="object-contain"
                sizes="(max-width: 767px) 280px, (max-width: 1279px) 320px, 340px"
              />
            </div>
          </div>

          <div className="order-3 flex flex-col gap-8 md:order-3 xl:order-3">
            <div className="border-b border-[#D9D9D9] pb-6 dark:border-[#2A3054]">
              <h3 className="text-[22px] font-semibold leading-[1.25] text-[#2B2B2B] dark:text-white sm:text-[24px]">
                <span className="text-[#F39A33]">Period Closure</span> Support:
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#2B2B2B] dark:text-[#D1D5DB] sm:mt-5">
                Creation &amp; review of every aspect of the financial
                statements, assessing key contracts where needed, technical
                positions where accounting memos are needed to substantiate
                positions, and preparing workings for quantifying financial
                impact. Review of GAAP adjustments, tax provision and deferred
                taxes computation.
              </p>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold leading-[1.25] text-[#2B2B2B] dark:text-white sm:text-[24px]">
                <span className="text-[#F39A33]">Audit Closure</span> Support:
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#2B2B2B] dark:text-[#D1D5DB] sm:mt-5">
                Getting auditor buy-in on all key positions considered in the
                financial statements. Assisting management during the audit in
                non document related matters (analytics, justifications, areas
                involving estimates, assumptions, projections, how to go about
                preparing various disclosures).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
