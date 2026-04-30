"use client";

import { AuthorInfo } from "@/components/common/author-info";
import { Highlighter } from "@/components/ui/highlighter";

export const TaigasMiddleSectionSeven = () => {
  return (
    <section className="w-full">
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
            The Leadership
          </h2>
        </Highlighter>
      </div>

      <AuthorInfo />
    </section>
  );
};
