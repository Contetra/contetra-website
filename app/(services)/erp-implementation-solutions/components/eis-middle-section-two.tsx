"use client";

import { ArrowRight } from "lucide-react";

const EIS_BOTTOM_SECTION_ID = "eis-bottom-section";

export const EisMiddleSectionTwo = () => {
  function scrollToBottomForm() {
    document
      .getElementById(EIS_BOTTOM_SECTION_ID)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="w-full px-3 py-6 sm:px-4 md:px-8 lg:py-8 xl:px-14 2xl:px-20">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-5 sm:gap-6">
        <div className="mx-auto flex w-full max-w-[1100px] justify-center rounded-[24px] bg-white px-5 py-8 shadow-[0_22px_60px_rgba(18,12,84,0.16)] dark:bg-[#111827] dark:shadow-[0_22px_60px_rgba(0,0,0,0.32)] sm:rounded-[28px] sm:px-8 sm:py-10 md:rounded-[32px] md:px-12 md:py-12">
          <div className="flex w-full max-w-[760px] flex-col items-center text-center">
            <h2 className="text-[20px] font-bold leading-[1.2em] text-[#232323] dark:text-white sm:text-[24px] md:text-[28px] lg:text-[30px]">
              Evaluate How to Optimize the
              <br className="hidden sm:block" /> Functionality &amp; Cost of Your{" "}
              <span className="text-[#F7C73C]">ERP</span>
            </h2>

            <button
              type="button"
              onClick={scrollToBottomForm}
              className="cursor-pointer mt-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFD145] px-6 py-3 text-[11px] font-semibold tracking-[0.02em] text-white shadow-[0_16px_35px_rgba(255,209,69,0.4)] transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#f3c22d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD145] focus-visible:ring-offset-2 dark:ring-offset-[#111827] sm:mt-8 sm:gap-3 sm:px-8 sm:py-4 sm:text-[13px]"
            >
              <span className="cursor-pointer">BOOK A FREE CALL NOW</span>
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
