"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LayoutList, Sparkles } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { EbookSpotlightList } from "./spotlight/ebook-spotlight-list";
import { EbookSpotlightPreview } from "./spotlight/ebook-spotlight-preview";
import type { Ebook } from "./spotlight/types";

const eBooks: Ebook[] = [
  {
    title: "Business Insights into IFRS 16",
    link: "/business-insights-into-ifrs-16",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Business-Insights-into-IFRS-16.png`,
  },
  {
    title: "Interview Prep Guide for Careers in Financial Reporting",
    link: "/interview-prep-guide-for-careers-in-financial-reporting",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Interview-Prep-Guide-for-Careers-in-Financial-Reporting.png`,
  },
  {
    title: "Implementable ECL template for non-BFSI sector",
    link: "/implementable-ecl-template-for-non-bfsi-sector",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Implementable-ECL-template-for-non-BFSI-sector.png`,
  },
  {
    title: "Top-20-Questions-your-FY-22-23 Business-Plan-must-answer",
    link: "/top-20-questions-your-fy-22-23-business-plan-must-answer",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Top-20-Questions-your-FY-22-23-Business-Plan-must-answer-3.png`,
  },
  {
    title: "Turbocharge your Finance Function through Offshore Accounting",
    link: "/turbocharge-your-finance-function-through-offshore-accounting",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/TURBOCHARGE-YOUR-FINANCE-FUNCTION-THROUGH-OFFSHORE-ACCOUNTING.png`,
  },
  {
    title: "Maximise Profitability, Choose the right ERP",
    link: "/maximize-profitability-choose-the-right-erp",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Maximise-Profitability-Choose-the-right-ERP.png`,
  },
  {
    title: "How to Master Business Budgeting",
    link: "/strategic-business-budget-guide",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/how-to-master-business-budgeting.png`,
  },
  {
    title: "Unlocking 200% Revenue Growth: The CHHABI Success Story",
    link: "/unlocking-200-revenue-growth-the-chhabi-success-story",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Unlocking-200-Revenue-Growth-the-Chhabi-success-story.png`,
  },
  {
    title: "Business Insights into IFRS 9",
    link: "/business-insights-into-ifrs-9",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Business-insights-into-IFRS-9.png`,
  },
  {
    title: "MSME Collection Advantage: New Amendment Explained!",
    link: "/msme-collection-advantage-new-amendment-explained",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/MSME-Collection-Advantage-New-Amendment-Explained.png`,
  },
  {
    title: "Year-end Closure Checklist for Business Owners",
    link: "/year-end-closure-checklist-for-business-owners",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Year-end-Closure-Checklist-for-Business-Owners.png`,
  },
  {
    title: "Business Growth & Compliance",
    link: "/business-growth-compliance",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Business-Growth-Compliance.png`,
  },
  {
    title: "ERP Success: The Essential Blueprint",
    link: "/erp-implementation-unveiled",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/ERP-Implementation-Decoded.png`,
  },
  {
    title: "Roi-Driven Trainings With Contetra",
    link: "/roi-driven-trainings-with-contetra",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/ROI-Driven-Trainings-with-Contetra.png`,
  },
  {
    title:
      "HOW TO OPTIMISE YOUR CUSTOMERS: A Comprehensive Guide Achieve 10X Growth",
    link: "/how-to-optimise-your-customers-a-comprehensive-guide-achieve-10x-growth",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/How-to-optimise-your-customers-a-Comprehensive-Guide-to-Achieve-10X-Growth.png`,
  },
  {
    title: "8 Actionable Strategies to Improve Profit After Tax - Ebook",
    link: "/8-actionable-strategies-to-improve-profit-after-tax-ebook",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/8-Actionable-Strategies-to-Improve-Profit-After-Tax.png`,
  },
  {
    title:
      "The CFO's guide to Controlling ERP Costs:6 Strategies to Stay on Budget - Ebook",
    link: "/the-cfos-guide-to-controlling-erp-costs6-strategies-to-stay-on-budget-ebook",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/The-CFOs-guide-to-Controlling-ERP-Costs-6-Strategies-to-Stay-on-Budget.png`,
  },
  {
    title: "Business Insights into Revenue Recognition",
    link: "/business-insights-into-revenue-recognition",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/business-insights-into-revenue-recognition.png`,
  },
  {
    title: "Period closure checklist",
    link: "/period-closure-checklist",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Period-closure-checklist.png`,
  },
  {
    title:
      "Revamping Revenue unveiling ASC 606 Implications on Acquisition memo",
    link: "/revamping-revenue-unveiling-asc-606-implications-on-acquisition-memo",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/revamping-Revenue-unveiling-ASC-606-Implications-on-Acquisition-memo.png`,
  },
  {
    title: "Your Financial Playbook fy 2025-26 edition",
    link: "/your-financial-playbook-fy-2025-26-edition",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/ebooks/images/Your-Financial-Playbook-fy-2025-26-edition-cover-page.png`,
  },
];

export const EbooksSectionTwo = () => {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "spotlight">("spotlight");
  const [activeEbookIndex, setActiveEbookIndex] = useState(0);

  const filteredEbooks = useMemo(
    () =>
      eBooks.filter((ebook) =>
        ebook.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );
  const activeEbook = filteredEbooks[activeEbookIndex];

  useEffect(() => {
    if (filteredEbooks.length === 0) {
      setActiveEbookIndex(0);
      return;
    }

    setActiveEbookIndex((current) =>
      current >= filteredEbooks.length ? filteredEbooks.length - 1 : current,
    );
  }, [filteredEbooks.length]);

  const openEbook = useCallback((link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  }, []);

  const handleSpotlightSelect = useCallback((index: number) => {
    setActiveEbookIndex(index);
  }, []);

  const moveSpotlight = useCallback((direction: "prev" | "next") => {
    if (filteredEbooks.length === 0) return;

    setActiveEbookIndex((current) => {
      if (direction === "prev") {
        return current === 0 ? filteredEbooks.length - 1 : current - 1;
      }

      return current === filteredEbooks.length - 1 ? 0 : current + 1;
    });
  }, [filteredEbooks.length]);

  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-10 px-4 py-10 sm:gap-12 sm:px-6 sm:py-12 md:gap-14 md:px-8 md:py-14 lg:gap-16 lg:px-12 xl:px-16 2xl:px-[80px] 2xl:py-20">
      <div className="flex w-full max-w-[900px] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
        <Input
          placeholder="Search ebooks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:flex-1"
        />
        <div className="inline-flex items-center self-end rounded-lg border border-neutral-300 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-900 sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode("spotlight")}
            className={` cursor-pointer inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition ${
              viewMode === "spotlight"
                ? "bg-contetra-blue text-white"
                : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            Spotlight
          </button>
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`cursor-pointer inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition ${
              viewMode === "list"
                ? "bg-contetra-blue text-white"
                : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            }`}
          >
            <LayoutList className="h-4 w-4" />
            List
          </button>
        </div>
      </div>

      {filteredEbooks.length === 0 ? (
        <div className="w-full max-w-[900px] rounded-xl border border-dashed border-neutral-300 px-6 py-14 text-center text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
          No ebooks found for this search.
        </div>
      ) : viewMode === "list" ? (
        <div className="flex w-full flex-col gap-14 sm:gap-16 md:gap-20 lg:gap-24">
          {filteredEbooks.map((ebook, i) => (
            <div
              key={ebook.title}
              className="flex w-full flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:gap-8 lg:gap-10"
            >
              <div className="flex w-full shrink-0 justify-center md:w-1/2 md:max-w-[50%]">
                <Image
                  data-cursor-text="View Ebook!"
                  src={ebook.image}
                  alt={ebook.title}
                  priority={i < 2}
                  width={320}
                  height={400}
                  sizes="(max-width: 767px) min(100vw - 2rem, 320px), (max-width: 1279px) 40vw, 360px"
                  className="h-auto w-full max-w-[min(100%,280px)] cursor-pointer rounded-xl object-contain sm:max-w-[300px] md:max-w-[320px]"
                  quality={100}
                />
              </div>

              <div className="flex w-full flex-col items-start gap-6 text-left sm:gap-8 md:w-1/2 md:max-w-[50%] md:justify-center">
                <div className="w-full text-balance border-l-2 border-green-500 pl-3 text-left text-[1.125rem] font-bold leading-snug text-neutral-900 dark:text-neutral-100 sm:pl-4 sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.65rem] xl:text-[1.75rem]">
                  {ebook.title}
                </div>

                <Button
                  type="button"
                  disabled={!ebook.link}
                  onClick={() => {
                    if (!ebook.link) return;
                    openEbook(ebook.link);
                  }}
                  className="self-start cursor-pointer bg-contetra-blue dark:text-white"
                >
                  View Ebook
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full overflow-visible lg:flex lg:gap-6">
          <div className="order-2 lg:order-none lg:w-[44%] lg:self-start">
            <EbookSpotlightList
              ebooks={filteredEbooks}
              activeEbookIndex={activeEbookIndex}
              onSelect={handleSpotlightSelect}
              onOpen={openEbook}
            />
          </div>

          <div className="menularge-cursor order-1 mb-6 overflow-visible lg:order-none lg:mb-0 lg:w-[56%] lg:self-start lg:sticky lg:top-24">
            <EbookSpotlightPreview
              activeEbook={activeEbook}
              activeEbookIndex={activeEbookIndex}
              total={filteredEbooks.length}
              onMove={moveSpotlight}
              onOpen={openEbook}
            />
          </div>
        </div>
      )}
    </div>
  );
};
