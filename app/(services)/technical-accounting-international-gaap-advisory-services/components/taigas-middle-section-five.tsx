"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const whyUsCards = [
  {
    title:
      "Focus on strategic finance activities and not on tracking the latest accounting pronouncements!",
    description:
      "As the head of accounting and finance, you and your team have many responsibilities including monthly book closures, payroll processing, MIS reporting, GL reconciliations, managing collections and vendor payments. Having experienced IND AS or IFRS implementation consultants, you can free up significant bandwidth and allow experts to handle financial statements preparation and audit closures efficiently and cost-effectively.",
    image: `${cdnUrl}/pages/services/taigas/taigas-icon-2.png`,
    imageAlt: "Strategic finance icon",
  },
  {
    title: "Kiss those drawn-out audits goodbye.",
    description:
      "Your finance team can't keep up with all the changes on their own. That's where we come in. Our team includes former Big 4 auditors who know exactly what auditors are looking for and how to get their pesky questions out of the way.",
    image: `${cdnUrl}/pages/services/taigas/taigas-icon-1.png`,
    imageAlt: "Audit support icon",
  },
  {
    title:
      "Unleash the power of IFRS and transform financial statements and business operations.",
    description:
      "Apart from timely preparation of financial statements, what sets us apart is showcasing the bottom-line impact of IFRS & IND AS on business operations. Whether it is rationalizing ECL provisions in line with IFRS or setting up effective ESOP structures without drastically affecting net margins, we work closely with your finance team to ensure a smooth audit closure.",
    image: `${cdnUrl}/pages/services/taigas/taigas-icon-3.png`,
    imageAlt: "IFRS transformation icon",
  },
] as const;

export const TaigasMiddleSectionFive = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (cardIndex: number) => {
    setExpandedCard((current) => (current === cardIndex ? null : cardIndex));
  };

  return (
    <section className="my-[40px] flex w-full flex-col gap-8 sm:my-[50px] sm:gap-10">
      <div className="flex w-full flex-col items-center justify-center rounded-b-[40px] bg-[#F8F9FE] px-3 py-[28px] dark:bg-[#111827] sm:rounded-b-[50px] sm:px-4 sm:py-[40px] md:px-8 xl:rounded-b-[100px] xl:px-14 2xl:px-20">
        <Highlighter
          iterations={6}
          strokeWidth={2}
          padding={5}
          action="underline"
          color="#FF9800"
          animationDuration={1500}
        >
          <h2 className="text-center text-[26px] font-medium text-[#222222] dark:text-white sm:text-[32px] xl:text-[40px]">
            Why Us?
          </h2>
        </Highlighter>
      </div>

      <div className="mx-auto grid w-full max-w-[1320px] items-start justify-items-center gap-5 px-3 sm:px-4 md:gap-6 md:px-8 lg:grid-cols-3 xl:px-14 2xl:px-20">
        {whyUsCards.map((card, index) => {
          const isExpanded = expandedCard === index;

          return (
            <article
              key={card.title}
              className={cn(
                "flex w-full max-w-[430px] self-start flex-col rounded-[22px] bg-white px-5 py-6 shadow-[0_18px_45px_rgba(18,12,84,0.14)] transition-[min-height,box-shadow,transform] duration-500 ease-in-out dark:bg-[#111827] dark:shadow-[0_18px_45px_rgba(0,0,0,0.3)] sm:px-6 sm:py-8 lg:max-w-none lg:py-9",
                isExpanded
                  ? "min-h-[430px] sm:min-h-[500px] xl:min-h-[540px]"
                  : "min-h-[250px] sm:min-h-[280px] xl:min-h-[300px]"
              )}
            >
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="relative h-[62px] w-[62px] sm:h-[74px] sm:w-[74px]">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 62px, 74px"
                  />
                </div>

                <h3 className="mt-5 max-w-[22ch] text-[16px] font-semibold leading-[1.3] text-black dark:text-white sm:mt-6 sm:text-[20px]">
                  {card.title}
                </h3>

                <div
                  className={cn(
                    "grid w-full transition-all duration-500 ease-in-out",
                    isExpanded
                      ? "mt-6 grid-rows-[1fr] opacity-100 sm:mt-8"
                      : "mt-0 grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-left text-[14px] leading-[1.65] text-black dark:text-[#E5E7EB] sm:text-[16px] sm:leading-[1.55]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => toggleCard(index)}
                className="mt-6 inline-flex min-w-[150px] self-center justify-center rounded-[12px] bg-[#1A166B] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#241f85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A166B] focus-visible:ring-offset-2 dark:ring-offset-[#111827] sm:mt-8 sm:min-w-[170px] sm:px-8 sm:text-[15px]"
                aria-label={`${isExpanded ? "Collapse" : "Expand"} ${card.title}`}
              >
                <span>{isExpanded ? "show Less" : "show More"}</span>
                {isExpanded ? (
                  <ArrowUp className="ml-2 h-4 w-4" />
                ) : (
                  <ArrowDown className="ml-2 h-4 w-4" />
                )}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};
