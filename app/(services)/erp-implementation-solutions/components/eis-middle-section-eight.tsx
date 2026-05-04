"use client";

import { ChevronDown, ChevronRight, Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type EisFaqItem = {
  question: string;
  answer: string;
};

/** Add FAQ entries here — each item is one accordion row. */
export const eisFaqItems: EisFaqItem[] = [];

const faqItemsToRender: EisFaqItem[] =
  eisFaqItems.length > 0
    ? eisFaqItems
    : [
        {
          question: "1. What Are the Steps to Successful ERP Implementation?",
          answer:
            "At Contetra, our ERP functional consulting services guide you through every step from initial analysis to final deployment. We tailor systems like manufacturing ERP modules, HR ERP modules, and finance ERP modules to your business needs. Our expert team ensures smooth data migration, extensive training, and thorough testing for a successful rollout.",
        },
        {
          question: "2. How do I choose the right ERP system?",
          answer:
            "Contetra’s ERP consulting solutions assess your unique requirements and recommend the best modules whether cloud-based ERP modules or ERP modules for services industries. As one of the top ERP Service Providers in Mumbai, we help you select a scalable and customized ERP platform as a service solution that fits your budget and goals.",
        },
        {
          question: "3. How Much Does an ERP Implementation Cost?",
          answer:
            "We provide transparent pricing tailored to your business scope and chosen ERP modules. Contetra’s cloud-based ERP offer flexible, cost-effective deployment, minimizing upfront investment while providing robust functionality backed by our post-implementation support.",
        },
        {
          question: "4. Do you offer post implementation support?",
          answer:
            "Absolutely. Contetra’s commitment extends beyond deployment with comprehensive post-implementation support. Our ERP consultant services ensure you maximize the ROI of your ERP system through continuous updates, troubleshooting, and user training.",
        },
        {
          question: "5. Which ERP is the best for my company?",
          answer:
            "Contetra offers deep expertise in deploying ERP software tailored for various sectors. Whether you need manufacturing ERP modules or cloud-based ERP, our team ensures you get the most efficient, future-proof ERP system designed for your business size and industry.",
        },
        {
          question: "6. How do we measure project success with ERP functional implementation?",
          answer:
            "Project success is measured by tracking user adoption, process efficiency improvements, timeline adherence, and key business KPIs. Contetra’s experienced erp functional consultants provide comprehensive post-implementation support and real-time analytics to monitor success, gather user feedback, and ensure the ERP system continues to deliver sustainable business value.",
        },
        {
          question: "7. How quickly can my business start seeing measurable benefits after going live with a new ERP system?",
          answer:
            "Businesses typically begin to see measurable benefits from a new ERP system within 3 to 9 months after going live. Contetra’s expert ERP Consulting Services & Solutions accelerate this process by ensuring smooth integration, effective training, and quick adoption. These services also help maximize ROI by streamlining workflows, reducing errors, and enabling real-time data-driven decisions for sustained business growth.",
        },
        {
          question: "8. Can ERP systems be tailored to meet the specific needs and unique processes of our industry?",
          answer:
            "Contetra’s ERP services offer end-to-end ERP consulting solutions designed to streamline business operations and maximize ROI. Their expert team handles ERP evaluation, installation, configuration, and database management, working closely with your finance team and implementation partners. Whether it’s ERPNext or SAP, Contetra’s ERP consultants ensure the system is customized to your unique business needs, reduce implementation costs by up to 30%, and provide ongoing post-implementation support with dedicated project tracking for smooth and successful ERP adoption.",
        },
        {
          question: "9. How does modern ERP integrate with AI, analytics, or IoT for smarter business decisions in 2025",
          answer:
            "Modern ERP systems integrate seamlessly with AI, analytics, and IoT to empower smarter business decisions in 2025. Leading platforms like SAP, ERPNext, and Odoo service providers offer AI-driven insights, predictive analytics, and real-time IoT data integration that optimize operations, forecast trends, and automate routine tasks for enhanced efficiency and agility.",
        },
        {
          question: "10. How do we ensure data accuracy during ERP functional implementation?",
          answer:
            "Ensuring data accuracy during erp functional implementation involves cleansing and validating legacy data before migration, setting clear data governance standards, and performing thorough testing. Contetra’s ERP functional implementation services include expert data migration support and tailored consulting to maintain high-quality, reliable data throughout the project for smooth and accurate transitions.",
        },
      ];

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
                  "data-[state=open]:bg-[#2F3237] data-[state=open]:text-white dark:data-[state=closed]:bg-[#1e293b] dark:data-[state=open]:bg-[#2F3237]",
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
              <AccordionContent className="border-t border-[#E5E7EB] bg-white px-4 pb-5 pt-1 text-[14px] leading-relaxed text-[#444444] dark:border-[#374151] dark:bg-[#0F172A] dark:text-[#D1D5DB] sm:px-5 sm:text-[15px]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
