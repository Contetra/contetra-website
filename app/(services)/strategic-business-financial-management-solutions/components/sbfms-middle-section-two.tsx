import Image from "next/image";

import { cn } from "@/lib/utils";

const REASONS = [
  {
    id: "1",
    title: "Optimised Financial Performance",
    description:
      "Release blocked cash, improve profit margins and manage your working capital better in a span of just 6 months.",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/sbfms-icon-cta%20(1).webp",
  },
  {
    id: "2",
    title: "Over 150 years of Business expertise",
    description:
      "At a fractional cost, you get over 150 years of combined business expertise, timely inputs and the ability to make informed decisions.",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/sbfms-icon-cta%20(2).webp",
  },
  {
    id: "3",
    title: "Transform data into actionable insights",
    description:
      'Ditch the "figuring it out as you go" mentality. We equip you with a clear, data-driven roadmap to navigate your financial landscape. Complex data gets translated into practical, actionable steps you can implement immediately.',
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/sbfms-icon-cta%20(3).webp",
  },
  {
    id: "4",
    title: "Mitigate Risks with Strategic Analysis",
    description:
      "Your finance team may be over-burdened with other activities or may not have the required expertise to take up the mammoth task of drawing out analysis and mitigating risks. This is where we can help you.",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/sbfms-icon-cta%20(4).webp",
  },
  {
    id: "5",
    title: "Tailored Approach",
    description:
      "Forget one-size-fits-all solutions. Our strategic financial management services create a unique roadmap for your business, considering your specific goals, industry, and strengths. Your journey starts with you, not a pre-packaged route.",
    icon: "https://contetra.b-cdn.net/pages/services/sbfms/sbfms-icon-cta%20(5).webp",
  },
] as const;

export function SbfmsMiddleSectionTwo() {
  return (
    <section
      className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:py-12 dark:bg-[#0a0a0f]"
      aria-labelledby="sbfms-mentor-heading"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="relative">
          <div
            className={cn(
              "absolute -bottom-2 right-0 z-0 h-[97%] w-[97%] rounded-[30px] bg-[#4cc59d]",
              "sm:-bottom-2.5 sm:rounded-[40px] md:w-[98%]",
            )}
            aria-hidden
          />

          <div
            className={cn(
              "relative z-10 overflow-hidden rounded-[30px] bg-gradient-to-r from-[#2c2865] to-[#3d3785] px-4 py-7",
              "sm:rounded-[40px] sm:px-7 sm:py-10 md:px-10 md:py-12",
              "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)] before:bg-[length:180px_100%]",
            )}
          >
            <div className="mx-auto max-w-[760px] text-center">
              <h2
                id="sbfms-mentor-heading"
                className="text-balance text-[1.7rem] font-bold leading-tight text-white sm:text-[1.95rem] md:text-[2.2rem]"
              >
                Why CFOs and Founders Choose Contetra <br />
                <span className="text-[#6ae1b0]">
                  for Strategic Finance Mentoring
                </span>
              </h2>
              <h3 className=" mt-5 text-[1.2rem] font-semibold leading-tight sm:text-[1.35rem] text-white" >Strategic CFO Services and Financial Management Support for Better Cash Flow, Reporting, and Business Control</h3>
              <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-white/85" />
            </div>

            <div className="mt-7 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10">
              {REASONS.slice(0, 4).map((reason) => (
                <article key={reason.id} className="relative flex gap-4">
                  <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                    <Image
                      src={reason.icon}
                      alt={`${reason.title} illustration`}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>

                  <div>
                    <h3 className="text-[1.2rem] font-semibold leading-tight text-[#66d8a8] sm:text-[1.35rem]">
                      <span className="mr-1.5">{reason.id}.</span>
                      {reason.title}:
                    </h3>
                    <p className="mt-1.5 max-w-[30ch] text-[1rem] leading-[1.45] text-white/95 sm:text-[1.1rem]">
                      {reason.description}
                    </p>
                  </div>
                </article>
              ))}

              <article className="relative flex gap-4 md:col-span-2 md:mx-auto md:max-w-[68%]">
                <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                  <Image
                    src={REASONS[4].icon}
                    alt={`${REASONS[4].title} illustration`}
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </div>

                <div>
                  <h3 className="text-[1.2rem] font-semibold leading-tight text-[#66d8a8] sm:text-[1.35rem]">
                    <span className="mr-1.5">{REASONS[4].id}.</span>
                    {REASONS[4].title}:
                  </h3>
                  <p className="mt-1.5 text-[1rem] leading-[1.45] text-white/95 sm:text-[1.1rem]">
                    {REASONS[4].description}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
