"use client";

import { ChevronDown, ChevronRight, Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import { EIS_FAQ_ITEMS, type EisFaqItem } from "./eis-faq-items";

export type { EisFaqItem } from "./eis-faq-items";

/** Override entries here — when non-empty, replaces default FAQ list. */
export const eisFaqItems: EisFaqItem[] = [];

const faqItemsToRender: EisFaqItem[] =
  eisFaqItems.length > 0 ? eisFaqItems : EIS_FAQ_ITEMS;

export const EisMiddleSectionEight = () => {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="w-full overflow-hidden rounded-t-[36px] border-b border-[#E5E7EB] bg-[#F8F9FE] px-4 py-10 dark:border-[#374151] dark:bg-[#111827] sm:rounded-t-[50px] sm:px-6 sm:py-12 md:px-8 lg:py-14 xl:rounded-t-[72px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
          <h2 className="text-[26px] font-semibold leading-[1.35] text-[#252B42] dark:text-white sm:text-[32px] lg:text-[36px]">
            Frequently Asked Questions
          </h2>

          <div
            className="mt-4 flex items-center justify-center gap-2.5 sm:mt-5"
            aria-hidden
          >
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4C8DEB]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#4C8DEB]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#4C8DEB]" />
            </div>
            <div className="h-[3px] w-[44px] rounded-full bg-[#4C8DEB] sm:w-[52px]" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full justify-center px-4 sm:mt-10 sm:px-6 md:px-8">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full min-w-0 max-w-[920px] overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white sm:w-[88%] sm:rounded-[24px] md:w-[78%] lg:w-[70%] dark:border-[#374151] dark:bg-[#0F172A]"
        >
          {faqItemsToRender.map((item, index) => (
            <AccordionItem
              key={`${item.question}-${index}`}
              value={`item-${index}`}
              className="border-0 border-b border-[#E5E7EB] last:border-b-0 dark:border-[#374151]"
            >
              <AccordionTrigger
                className={cn(
                  "group rounded-none py-0 hover:no-underline focus-visible:ring-2 focus-visible:ring-[#4C8DEB]/40 [&>svg:last-child]:hidden",
                  "data-[state=closed]:bg-[#F9FAFB] data-[state=closed]:text-[#252B42]",
                  "data-[state=open]:bg-[#2F3237] data-[state=open]:text-white dark:data-[state=closed]:bg-[#1e293b] dark:data-[state=open]:bg-[#2F3237] dark:text-white",
                )}
              >
                <div className="flex w-full items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9">
                    <Plus
                      strokeWidth={2.5}
                      className="size-5 text-[#3a3a3a] group-data-[state=open]:hidden dark:text-[#E5E7EB]"
                      aria-hidden
                    />
                    <Minus
                      strokeWidth={2.5}
                      className="hidden size-5 text-white group-data-[state=open]:block"
                      aria-hidden
                    />
                  </span>
                  <span className="flex-1 text-left text-[14px] font-semibold leading-snug sm:text-[15px]">
                    {item.question}
                  </span>
                  <ChevronRight
                    strokeWidth={2}
                    className="size-5 shrink-0 text-[#3a3a3a] group-data-[state=open]:hidden dark:text-[#E5E7EB]"
                    aria-hidden
                  />
                  <ChevronDown
                    strokeWidth={2}
                    className="hidden size-5 shrink-0 text-white group-data-[state=open]:block"
                    aria-hidden
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className="border-t dark:text-white border-[#E5E7EB] bg-white px-4 pb-5 pt-1 text-[14px] leading-relaxed text-[#444444] dark:border-[#374151] dark:bg-[#0F172A] dark:text-[#D1D5DB] sm:px-5 sm:text-[15px]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
