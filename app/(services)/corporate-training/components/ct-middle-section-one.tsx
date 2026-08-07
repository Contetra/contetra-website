"use client";

import {
  ChartLine,
  GraduationCap,
  Trophy,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

const FINANCE_LD_DYNAMICS_POST_HREF =
  "/2022/10/10/the-ld-dynamics-within-the-finance-function/";

const impactCards = [
  {
    title: "EMPLOYEE RETENTION",
    description:
      "Prioritizing training investments experience 53% reduction in employee turnover",
    icon: Users,
  },
  {
    title: "BOTTOMLINE IMPACT",
    description:
      "Companies can witness a remarkable improvement in employee productivity and performance",
    icon: ChartLine,
  },
  {
    title: "IMPROVED EFFICIENCY",
    description:
      "L&D programs provide opportunities for finance professionals to develop and enhance their skills",
    icon: Trophy,
  },
  {
    title: "SUCCESSION STRATEGY",
    description:
      "Effective L&D initiatives supports succession planning by identifying high-potential talent",
    icon: GraduationCap,
  },
] as const;

export const CtMiddleSectionOne = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-[#1B1345] px-[10px] py-6 sm:px-4 sm:py-8 md:px-8 xl:px-14 2xl:px-[80px] dark:bg-[#0A0A0A]">
      <div className="mx-auto w-full max-w-[1260px]">
        <div className="overflow-hidden rounded-[24px] border border-[#E6E9F2] bg-white shadow-[0_12px_36px_rgba(11,10,40,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-col items-center justify-center border-b border-[#E6E9F2] px-5 py-5 lg:border-b-0 lg:border-r dark:border-[#1F2937]">
              <h3 className="text-[28px] font-semibold leading-[1.2] text-[#111827] sm:text-[28px] dark:text-white">
                What does an effective training strategy help you achieve?
              </h3>
              <div className="mt-5 w-full max-w-[200px] overflow-hidden rounded-[10px] border border-[#E6E9F2] shadow-sm dark:border-[#344155]">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/xNQUmTyC6OU"
                    title="The L&D Dynamics Within the Finance Function"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
              {impactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="group relative overflow-hidden border-t border-[#E6E9F2] px-5 py-5 sm:border-l sm:first:border-l-0 sm:border-t xl:border-t-0 dark:border-[#1F2937]"
                  >
                    <div className="absolute inset-0 -translate-y-full bg-[#1B145F] transition-transform duration-500 ease-out group-hover:translate-y-0 dark:bg-[#172036]" />

                    <div className="relative z-10">
                      <Icon className="h-8 w-8 text-contetra-green transition-colors duration-300 group-hover:text-white dark:text-[#86efac]" />
                      <h4 className="mt-4 text-[22px] font-semibold leading-[1.3] text-contetra-green transition-colors duration-300 group-hover:text-white dark:text-[#86efac]">
                        {card.title}
                      </h4>
                      <p className="mt-3 text-[14px] leading-[1.4] text-[#7A7A7A] transition-colors duration-300 group-hover:text-[#E5E7EB] dark:text-[#D1D5DB]">
                        {card.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-3 text-center text-white">
          <p className="text-[16px] leading-[1.5] text-white/95 sm:text-[18px] dark:text-[#E5E7EB]">
            See what industry champions have to say about L&amp;D and it&apos;s
            role in the growth of the finance function!
          </p>
          <button
            type="button"
            onClick={() => router.push(FINANCE_LD_DYNAMICS_POST_HREF)}
            className="inline-flex h-10 cursor-pointer items-center justify-center rounded-[8px] bg-[#80D7AA] px-6 text-[15px] font-semibold text-[#1B145F] transition-all hover:bg-[#70c79a] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]"
          >
            The L&amp;D Dynamics Within the Finance Function
          </button>
        </div>
      </div>
    </section>
  );
};
