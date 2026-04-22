"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const authors = [
  {
    name: "RAMANUJAM NARAYAN",
    role: "CEO & CFO",
    image: `${cdnUrl}/pages/services/taigas/Ramanujam-narayan.png`,
    description: [
      "A subject matter expert of international reporting standards (IFRS, US GAAP, IND AS), Sai brings to the table his corporate finance experience of 15+ years. He builds strategies and drives value unlocking for his clients in the areas of GAAP implementation, business finance & finance transformation projects.",
      "Formerly the global finance controller at one of India's largest software companies & author of the best-selling Ind AS book published by CNBC TV-18. His clients and colleagues consider him the final authority when it comes to financial reporting.",
    ],
  },
  {
    name: "AMM ZULFIQUAR",
    role: "Head Finance Transformation",
    image: `${cdnUrl}/pages/services/taigas/Zulfi.png`,
    description: [
      "With an experience of over 20 years, and spanning multiple countries, Zulfi brings unmatched insights to the world of business finance and analytics. With professional qualifications like CA, CMA, CIMA, and ACCA, his areas of expertise cover the length and breadth of finance with functional experience in large multinational corporates across accounting & financial reporting, systems, process excellence, business finance, Operations & Business Analytics, project management, cash flow forecasting & management reporting.",
      "Zulfi is the steady hand you need to steer your ship.",
    ],
  },
] as const;

export const AuthorInfo = () => {
  const [expandedAuthor, setExpandedAuthor] = useState<number | null>(null);

  const toggleAuthor = (authorIndex: number) => {
    setExpandedAuthor((current) =>
      current === authorIndex ? null : authorIndex
    );
  };

  return (
    <div className="mx-auto grid w-full max-w-[1240px] items-start justify-items-center gap-5 px-3 py-8 sm:px-4 md:gap-6 md:px-8 md:py-10 lg:grid-cols-2 xl:px-14 2xl:px-20">
      {authors.map((author, index) => {
        const isExpanded = expandedAuthor === index;

        return (
          <article
            key={author.name}
            className={cn(
              "flex w-full max-w-[430px] self-start flex-col rounded-[22px] bg-white px-5 py-6 shadow-[0_18px_45px_rgba(18,12,84,0.14)] transition-[min-height,box-shadow,transform] duration-500 ease-in-out dark:bg-[#111827] dark:shadow-[0_18px_45px_rgba(0,0,0,0.3)] sm:px-6 sm:py-8 lg:max-w-none",
              isExpanded
                ? "min-h-[560px] sm:min-h-[620px] xl:min-h-[680px]"
                : "min-h-[320px] sm:min-h-[340px]"
            )}
          >
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="relative h-[110px] w-[110px] overflow-hidden rounded-full sm:h-[128px] sm:w-[128px]">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 110px, 128px"
                />
              </div>

              <h3 className="mt-6 text-[20px] font-bold leading-[1.15] text-[#161616] dark:text-white sm:text-[22px]">
                {author.name}
              </h3>

              <p className="mt-1 text-[15px] font-medium leading-[1.3] text-[#222222] dark:text-[#E5E7EB] sm:text-[16px]">
                {author.role}
              </p>

              <div
                className={cn(
                  "grid w-full transition-all duration-500 ease-in-out",
                  isExpanded
                    ? "mt-8 grid-rows-[1fr] opacity-100"
                    : "mt-0 grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="space-y-6 text-left text-[15px] leading-[1.45] text-[#111111] dark:text-[#E5E7EB] sm:text-[16px] sm:leading-[1.5]">
                    {author.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => toggleAuthor(index)}
              className="mt-8 inline-flex min-w-[165px] self-center justify-center rounded-[12px] bg-[#1A166B] px-8 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#241f85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A166B] focus-visible:ring-offset-2 dark:ring-offset-[#111827]"
              aria-label={`${isExpanded ? "Collapse" : "Expand"} ${author.name}`}
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
  );
};
