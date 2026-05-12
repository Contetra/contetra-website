"use client";

import { Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { STRIKE_THAT_FAQ_ITEMS as FAQ_ITEMS } from "./strike-that-faq-items";

export function StMiddleSectionFive() {
  return (
    <section className="w-full bg-[#F2F3F5] px-4 pt-10 pb-12 sm:px-6 md:px-8 md:pt-12 md:pb-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-6 text-center text-[28px] font-semibold leading-tight text-[#3B7AB6] sm:text-[34px]">
          FAQ
        </h2>

        <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <AccordionTrigger className="group rounded-[10px] bg-[#0F0D67] px-4 py-5 text-base font-semibold text-white no-underline hover:no-underline [&>svg:last-child]:hidden sm:px-6">
                <span className="flex items-center gap-3">
                  <Plus className="size-5 group-data-[state=open]:hidden" />
                  <Minus className="hidden size-5 group-data-[state=open]:block" />
                  <span>{item.question}</span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="mt-0 border border-[#D9DDE4] bg-white px-4 py-4 text-[16px] text-[#454F62] sm:px-6">
                {item.id === "item-3" ? (
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>Obtain board approval for the strike-off.</li>
                    <li>
                      Submit the necessary forms and fees to the appropriate
                      authority.
                    </li>
                    <li>
                      Notify stakeholders and allow a period for objections.
                    </li>
                    <li>Ensure all debts and liabilities are settled.</li>
                    <li>
                      If no objections are received, the company will not be
                      considered as struck off anymore.
                    </li>
                  </ol>
                ) : item.id === "item-12" ? (
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>
                      We respect the confidentiality of client data shared for
                      struck-off status checks.
                    </li>
                    <li>
                      We do not store client data and we do not provide direct
                      access to the tool.
                    </li>
                    <li>
                      You share an input Excel file with business name and PAN
                      and/or GST details.
                    </li>
                    <li>
                      We process the file, handle exceptions manually, and rerun
                      checks for verification.
                    </li>
                    <li>
                      We deliver a detailed output with registered business
                      names, CIN details, and status (amalgamated, active,
                      struck off, etc.).
                    </li>
                  </ol>
                ) : (
                  item.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
