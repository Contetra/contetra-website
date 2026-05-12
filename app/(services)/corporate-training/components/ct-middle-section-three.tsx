"use client";

import Image from "next/image";
import Lottie from "lottie-react";

import animationNine from "@/components/lottie/animation-9.json";
import { cn } from "@/lib/utils";

const featureCards = [
  {
    id: "skill-gap",
    iconSrc: "https://contetra.b-cdn.net/pages/services/ct/influence.gif",
    title: "Close the skill-gap in your finance teams",
  },
  {
    id: "roi-trainings",
    iconSrc: "https://contetra.b-cdn.net/pages/services/ct/classroom.gif",
    title: "Conduct ROI-driven trainings with a measurable impact",
  },
  {
    id: "productivity",
    iconSrc: "https://contetra.b-cdn.net/pages/services/ct/bar-chart.gif",
    title:
      "Improve productivity and boost your finance team's performance",
  },
  {
    id: "upskilling",
    iconSrc: "https://contetra.b-cdn.net/pages/services/ct/implementation.gif",
    title: "Support your effort in upskilling your finance team",
  },
  {
    id: "ahead-of-curve",
    iconSrc: "https://contetra.b-cdn.net/pages/services/ct/steps.gif",
    title:
      "Help your employees and organisation stay ahead of the curve",
  },
] as const;

export const CtMiddleSectionThree = () => {
  return (
    <section className="w-full  px-[10px] py-6 sm:px-4 sm:py-8 md:px-8 xl:px-14 2xl:px-[80px] ">
      <div className="mx-auto w-full max-w-[1260px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1">
            <h2 className="text-left text-[26px] font-bold leading-[1.2] text-[#1a1a3c] sm:text-[30px] md:text-[32px] dark:text-white">
            Finance Training Programs That Drive Measurable Business Change
            </h2>
            <p className="mt-4 text-left text-[15px] leading-[1.6] text-[#6B7280] sm:text-[16px] dark:text-[#E5E7EB]">
              We&apos;re here to ignite your finance team with game-changing
              L&amp;D initiatives by helping you:
            </p>
          </div>

          <div
            className="relative mx-auto flex w-full max-w-[360px] shrink-0 items-center justify-center sm:max-w-[400px] md:max-w-[440px] lg:mx-0 lg:max-w-[min(440px,46%)]"
            role="img"
            aria-label="Finance team learning and development illustration"
          >
            <Lottie
              className="h-full w-full max-h-[260px] max-w-full sm:max-h-[280px] md:max-h-[300px]"
              animationData={animationNine}
              loop
            />
          </div>
        </div>

        <div
          className={cn(
            "mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 md:mt-20",
            "xl:grid-cols-5 xl:gap-4",
          )}
        >
          {featureCards.map((card, index) => (
            <div
              key={card.id}
              className={cn(
                index === 4 &&
                  "sm:col-span-2 sm:flex sm:justify-center xl:col-span-1 xl:block",
              )}
            >
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm dark:border-[#1F2937] dark:bg-[#111827]",
                  "transition-all duration-300 ease-out",
                  "hover:z-10 hover:scale-[1.045] hover:shadow-[0_16px_40px_-12px_rgba(26,26,60,0.22)] dark:hover:shadow-[0_22px_60px_rgba(0,0,0,0.32)]",
                  index === 4 && "w-full max-w-md sm:max-w-lg xl:max-w-none",
                )}
              >
                <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                  <Image
                    src={card.iconSrc}
                    alt=""
                    fill
                    className="object-contain object-left-top"
                    sizes="64px"
                    unoptimized
                  />
                </div>
                <p className="mt-4 text-left text-[15px] font-bold leading-snug text-[#1a1a3c] sm:text-[16px] dark:text-white">
                  {card.title}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
