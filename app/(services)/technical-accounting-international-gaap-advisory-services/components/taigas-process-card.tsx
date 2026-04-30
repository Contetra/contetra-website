import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TaigasProcessCardProps = {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  accentClassName?: string;
};

export const TaigasProcessCard = ({
  icon,
  title,
  description,
  accentClassName,
}: TaigasProcessCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full w-full max-w-[340px] flex-col rounded-[22px] border border-[#eef1f8] border-t-[10px] border-t-[#120C54] bg-white px-5 pb-7 pt-5 shadow-[0_18px_60px_rgba(18,12,84,0.08)] dark:border-[#2A3054] dark:border-t-[#8DA2FF] dark:bg-[#111827] dark:shadow-[0_18px_60px_rgba(0,0,0,0.32)] sm:rounded-[20px] sm:px-6 sm:pb-8 sm:pt-6 sm:border-t-[6px] lg:max-w-[300px] lg:px-7",
        accentClassName
      )}
    >
      <div className="flex flex-1 flex-col items-center text-center">
        <div className="mb-5 flex h-[84px] w-[84px] items-center justify-center rounded-full border border-dashed border-[#2b2b2b] bg-white dark:border-[#8DA2FF] dark:bg-[#0F172A] sm:mb-6 sm:h-[96px] sm:w-[96px]">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#ebedf4] bg-[#fafbff] text-[#120C54] dark:border-[#2A3054] dark:bg-[#172036] dark:text-[#C7D2FE] sm:h-[76px] sm:w-[76px]">
            {icon}
          </div>
        </div>

        <h3 className="max-w-[220px] text-[17px] font-semibold leading-[1.35] text-[#242424] dark:text-white sm:max-w-[200px] sm:text-[18px]">
          {title}
        </h3>

        <p className="mt-4 text-[14px] leading-[1.65] text-[#3f3f46] dark:text-[#D1D5DB] sm:mt-5 sm:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
};
