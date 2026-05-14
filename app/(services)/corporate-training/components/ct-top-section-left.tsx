"use client";

import Image from "next/image";
import Lottie from "lottie-react";

import animationSix from "@/components/lottie/animation-6.json";

const leftPoints = [
  {
    id: "finance-focused-expertise",
    content: (
      <>
        <span className="font-bold text-contetra-blue dark:text-[#93C5FD] ">
          Finance-Focused Expertise:
        </span>{" "}
        As finance consultants, we specialize in creating tailored programs for
        the finance function. Our{" "}
        <span className="font-bold text-contetra-green dark:text-[#86efac]">
          deep subject matter expertise and practical application experience
        </span>{" "}
        ensures valuable ROI driven training.
      </>
    ),
  },
  {
    id: "customized-for-your-needs",
    content: (
      <>
        <span className="font-bold text-contetra-blue dark:text-[#93C5FD]">
          Customized for your Needs:
        </span>{" "}
        We understand that a one-size-fits-all approach does not work when it
        comes to corporate training. That&apos;s why we take a personalized
        approach to develop{" "}
        <span className="font-bold text-contetra-green dark:text-[#86efac]">
          training programs that align with your organization&apos;s goals,
          challenges, and industry-specific requirements
        </span>
        .
      </>
    ),
  },
  {
    id: "keeping-up-with-latest-industry-trends",
    content: (
      <>
        <span className="font-bold text-contetra-blue dark:text-[#93C5FD]">
          Keeping up with latest industry trends is crucial:
        </span>{" "}
        We offer financial trainings for executives and the C suite. Our
        Finance training programs are designed to{" "}
        <span className="font-bold text-contetra-green dark:text-[#86efac]">
          bridge skills gaps
        </span>{" "}
        and equip you with in-demand competencies, create remarkable leaders,
        foster high-performing teams, and cultivate thriving cultures within
        organizations, all leading to tangible results for you.
      </>
    ),
  },
] as const;

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

export const CtTopSectionLeft = () => {
  return (
    <div className="min-w-0 w-full px-1 py-2 sm:px-2 sm:py-4">
      <h1 className="text-[35px] font-semibold leading-[1.2] text-[#101828] dark:text-white sm:text-[36px]">
        Learn Today, <span className="text-contetra-green">Lead Tomorrow</span>
      </h1>

      <h1 className="mt-3 text-[15px] font-semibold leading-[1.5] text-[#1F2937] dark:text-[#E5E7EB] sm:text-[20px]">
      Corporate Finance Training for Teams & Business Leaders
      </h1>
      <p className="mt-3 text-[15px] font-semibold italic leading-[1.5] text-[#1F2937] dark:text-[#E5E7EB] sm:text-[16px]">
        Inspiring leaders through progressive, human powered Learning sessions
      </p>

      <div className="mt-6 flex flex-col gap-5">
          {leftPoints.map((point) => (
            <div key={point.id} className="flex items-start gap-3.5">
              <div className="relative mt-0.5 h-7 w-7 shrink-0 sm:h-8 sm:w-8">
                <Image
                  src={`${cdnUrl}/pages/services/ct/ct-check.png`}
                  alt="Check icon"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <p className="text-[14px] leading-[1.5] text-[#111827] dark:text-[#E5E7EB] sm:text-[15px]">
                {point.content}
              </p>
            </div>
          ))}
      </div>

      <div className="mx-auto mt-6 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
        <Lottie className="w-full" animationData={animationSix} loop />
      </div>
    </div>
  );
};
