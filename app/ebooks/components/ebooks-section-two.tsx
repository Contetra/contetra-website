"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";

export const EbooksSectionTwo = () => {
  const eBooks = [
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

  const [search, setSearch] = useState("");

  const filteredEbooks = eBooks.filter((ebook) =>
    ebook.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full px-[80px] flex justify-center items-center flex-col gap-[80px] my-[80px]">
      {/* Search */}
      <div className="w-full max-w-[500px]">
        <Input
          placeholder="Search ebooks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Ebook List */}
      <div className="w-full flex flex-col gap-[120px]">
        {filteredEbooks.map((ebook, i) => (
          <div key={i} className="w-full flex gap-5 h-[400px]">
            <div className="w-[50%] flex justify-center">
              <Image
                data-cursor-text="View Ebook!"
                src={`${ebook?.image}`}
                alt={`${ebook?.title}`}
                priority
                width={320}
                height={400}
                className="rounded-xl cursor-pointer"
                quality={100}
              />
            </div>

            <div className="w-[50%] flex items-start justify-end flex-col gap-10">
              <div className="text-[30px] font-semibold border-l-2 border-green-500 pl-4 leading-[1.2em]">
                {ebook?.title}
              </div>

              <Button
                type="button"
                disabled={!ebook?.link}
                onClick={() => {
                  if (!ebook?.link) return;
                  window.open(ebook.link, "_blank", "noopener,noreferrer");
                }}
                className="bg-contetra-blue cursor-pointer"
              >
                View Ebook
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
