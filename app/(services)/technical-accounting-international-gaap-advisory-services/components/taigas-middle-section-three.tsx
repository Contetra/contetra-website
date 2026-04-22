import {
  ArrowDown,
  ArrowRight,
  Award,
  Building2,
  ChartColumnIncreasing,
} from "lucide-react";

import { TaigasProcessCard } from "./taigas-process-card";

const processCards = [
  {
    title: "You’re all set to leap for scale",
    description: (
      <>
        Our technical accounting resources provide a full spectrum of technical
        accounting services. If you&apos;re poised to scale, we make sure critical
        functions, data points and accounting processes aren&apos;t holding you back
        by taking up hundreds of productive hours.
      </>
    ),
    accentClassName:
      "shadow-[0_14px_50px_rgba(83,160,255,0.16)] dark:shadow-[0_18px_56px_rgba(83,160,255,0.12)]",
    icon: <Building2 className="h-10 w-10 stroke-[1.8]" />,
  },
  {
    title: "You’re free to keep a hawk-eye on business",
    description: (
      <>
        We set up a culture of <strong>process excellence</strong>, within the
        financial reporting function, with a focus on presence and structuring
        the financial statements to demonstrate maximum value to stakeholders,
        leaving you with the time to focus on what matters.
      </>
    ),
    accentClassName:
      "shadow-[0_14px_50px_rgba(255,155,180,0.2)] dark:shadow-[0_18px_56px_rgba(255,155,180,0.14)]",
    icon: <ChartColumnIncreasing className="h-10 w-10 stroke-[1.8]" />,
  },
  {
    title: "You can leave it to the experts",
    description: (
      <>
        With global accounting standards (IFRS &amp; US GAAP) becoming the
        most-spoken languages in the world, our resources are fluent in
        international GAAP and F&amp;A from a <strong>practical stand-point</strong>{" "}
        having worked across geographies, industries and sectors.
      </>
    ),
    accentClassName:
      "shadow-[0_14px_50px_rgba(100,203,156,0.2)] dark:shadow-[0_18px_56px_rgba(100,203,156,0.14)]",
    icon: <Award className="h-10 w-10 stroke-[1.8]" />,
  },
];

export const TaigasMiddleSectionThree = () => {
  return (
    <section className="w-full px-3 py-6 sm:px-4 md:px-8 lg:py-8 xl:px-14 2xl:px-20">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-6 sm:gap-8 xl:flex-row xl:items-stretch xl:justify-center xl:gap-5 2xl:gap-8">
        {processCards.map((card, index) => (
          <div
            key={card.title}
            className="flex w-full max-w-[340px] flex-col items-center justify-center gap-4 sm:gap-5 xl:max-w-none xl:flex-row "
          >
            <TaigasProcessCard {...card} />

            {index < processCards.length - 1 ? (
              <>
                <ArrowRight className="hidden h-9 w-9 shrink-0 self-center text-[#64CB9C] dark:text-[#8BE1B6] xl:block 2xl:h-10 2xl:w-10" />
                <ArrowDown className="h-7 w-7 shrink-0 self-center text-[#64CB9C] dark:text-[#8BE1B6] sm:h-8 sm:w-8 xl:hidden" />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};
