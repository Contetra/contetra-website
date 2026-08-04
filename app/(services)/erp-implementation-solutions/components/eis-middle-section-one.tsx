"use client";

import Image from "next/image";

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const sectionCards = [
  {
    title: "Better Customer & Employee Satisfaction.",
    description:
      "Having a hard time sending out timely invoices to clients? Inventory management, payroll and timesheets becoming a nightmare to handle?",
    emphasis:
      "A suitable ERP system will make sure all your business functions speak to each other (and accounting) giving a much needed respite from internal and external follow-ups.",
    footer:
      "More time can be spent on value-addition activities centered around your customers and business operations.",
    image: `${cdnUrl}/pages/services/eis/eis-middle-image-1.webp`,
    imageAlt: "ERP collaboration and customer satisfaction illustration",
    reverse: false,
  },
  {
    title: "Capitalise Business Opportunities.",
    description:
      "Wouldn't it be great if the finance team had a cockpit's view into business operations with all input data at hand?",
    emphasis:
      "A suitable ERP solution will allow you to capitalize on new business opportunities easily!",
    footer:
      "(Think of the convenience of a seamless workflow that automates the Lead-Opportunity-Sales Order-Invoice-Collection process!)",
    image: `${cdnUrl}/pages/services/eis/eis-middle-two.webp`,
    imageAlt: "ERP planning and growth illustration",
    reverse: true,
  },
  {
    title: "Useful Business Insights for Data-Driven Decision Making",
    description:
      "Racing against time to close your accounting books? Left with no time and headspace to draw up useful analytics for the management?",
    emphasis:
      "Why not let your ERP system do the work for you, and create your MIS reports?",
    footer:
      "Close your books faster, get system-generated MIS reports and use the extra time to draw useful business insights and forecasts.",
    image: `${cdnUrl}/pages/services/eis/eis-middle-three.webp`,
    imageAlt: "ERP reporting and analytics illustration",
    reverse: false,
  },
] as const;

export const EisMiddleSectionOne = () => {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="w-full rounded-b-[36px] bg-[#F8F9FE] px-4 py-10 dark:bg-[#111827] sm:rounded-b-[50px] sm:px-6 sm:py-12 md:px-8 lg:py-14 xl:rounded-b-[100px] xl:px-12">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <h2 className="text-[28px] font-semibold leading-[1.4em] text-[#252B42] dark:text-white sm:text-[34px] lg:text-[38px]">
            Who we are
          </h2>

          <div className="mt-3 h-[3px] w-[52px] rounded-full bg-[#4C8DEB]" />

          <p className="mt-5 max-w-[860px] text-[14px] leading-[1.4em] text-[#333333] dark:text-[#E5E7EB] sm:text-[15px] lg:text-[16px]">
            A bunch of <b>ex-Big 4 consultants</b> and former{" "}
            <b>industry veterans</b> who are obsessed with getting you the{" "}
            <b>desired ROI</b> out of the ERP software implementation you&apos;re
            driving, all while ensuring it runs smoothly!
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1360px] flex-col px-[10px] pb-4 pt-8 sm:px-4 sm:pt-10 md:px-8 lg:pt-12 xl:px-14 2xl:px-[80px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[15px] font-semibold leading-[1.4em] text-[#D5A028] sm:text-[16px]">
            When should you consider a better ERP solution for your company?
          </p>
          <p className="mt-1 text-[15px] leading-[1.4em] text-[#2C2C2C] dark:text-[#D1D5DB] sm:text-[16px]">
            (Hint: When the CFO&apos;s office says - hold up, we need more than
            just an accounting tool to run our business effectively)
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-12 sm:mt-12 lg:gap-16">
          {sectionCards.map((card) => (
            <div
              key={card.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                card.reverse ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="min-w-0">
                <div className="mx-auto max-w-[520px] lg:max-w-none">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-[46px] w-[3px] shrink-0 rounded-full bg-[#241C74]" />

                    <div className="min-w-0">
                      <h3 className="text-[28px] font-semibold leading-[1.2] text-[#241C74] dark:text-white sm:text-[32px] lg:text-[38px]">
                        {card.title}
                      </h3>

                      <p className="mt-5 text-[15px] leading-[1.4em] text-[#222222] dark:text-[#E5E7EB] sm:text-[16px]">
                        {card.description}
                      </p>

                      <p className="mt-5 text-[15px] font-semibold leading-[1.4em] text-[#111111] dark:text-white sm:text-[16px]">
                        {card.emphasis}
                      </p>

                      <p className="mt-5 text-[15px] leading-[1.4em] text-[#7890C7] dark:text-[#93C5FD] sm:text-[16px]">
                        {card.footer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <div className="relative mx-auto aspect-[1.08/1] w-full max-w-[420px] sm:max-w-[470px] lg:max-w-[400px]">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1023px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
