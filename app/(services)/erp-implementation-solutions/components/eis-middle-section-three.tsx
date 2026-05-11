import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const workItems = [
  {
    title: "An ERP meant for scale based on your company needs.",
    titleColor: "text-[#5AB5E8]",
    description:
      "Based on your business use-cases and accounting scenarios, we narrow-down the best ERP. Fair warning - we might even suggest sticking to your existing tool if we feel there's no business case for an advanced software.",
    bullet:
      "We take the entire responsibility of creating the BRD with buy-in of all relevant stakeholders.",
    emphasis:
      "Rather than relying on endless product demos and trying to figure it out on your own, you can rely on our team of ERP functional consultants to successfully implement the most suitable ERP for your company.",
    image: `${cdnUrl}/pages/services/eis/erp-two-4.webp`,
    imageAlt: "ERP blueprint and configuration illustration",
    reverse: false,
  },
  {
    title: "Partnering with you at every step of the implementation.",
    titleColor: "text-[#D7AE55]",
    description:
      "As part of Contetra's ERP consulting services, we take complete ownership of communication on behalf of the finance team for all setup activities, installation, configuration, and database management.",
    bullet:
      "Preparation of entity structure, chart of accounts, grouping and mapping, configuring segregation of duty and delegation of authority workflows.",
    emphasis:
      "In case of customisations required in the ERP system, our ERP implementation consultants work with the implementation partner to ensure the functional requirements are met. We ensure post-implementation support with monthly project tracker and a dedicated team.",
    image: `${cdnUrl}/pages/services/eis/erp-two-2.webp`,
    imageAlt: "ERP implementation workshop illustration",
    reverse: true,
  },
  {
    title: "Integrating ERP with Process Excellence.",
    titleColor: "text-[#E36C69]",
    description:
      "Setting up a culture of process excellence within the ERP environment is of vital importance. We ensure streamlining the accounting, HRMS, CRM, and project planning modules to function cohesively as one living, breathing unit.",
    bullet:
      "Start-to-end ownership of the project and interfacing on behalf of the finance team.",
    emphasis:
      "The output? Successful implementation of ERP with all process documents in place, user manuals with implementation partner to be ensured, along with all possible automations, to make sure you're focusing on the business metrics that matter.",
    image: `${cdnUrl}/pages/services/eis/erp-two-3.webp`,
    imageAlt: "ERP process integration illustration",
    reverse: false,
  },
] as const;

export const EisMiddleSectionThree = () => {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="w-full rounded-b-[36px] bg-[#F8F9FE] px-4 py-10 dark:bg-[#111827] sm:rounded-b-[50px] sm:px-6 sm:py-12 md:px-8 lg:py-14 xl:rounded-b-[100px] xl:px-12">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <p className="text-[28px] font-semibold leading-[1.4em] text-[#252B42] dark:text-white sm:text-[34px] lg:text-[38px]">
            How We Work
          </p>

          <div className="mt-3 h-[3px] w-[52px] rounded-full bg-[#4C8DEB]" />

          <p className="mt-5 max-w-[880px] text-[14px] leading-[1.4em] text-[#333333] dark:text-[#E5E7EB] sm:text-[15px] lg:text-[16px]">
            (Do you have to hire us and the technical implementation vendor?
            Yes, but that will still be more cost effective than only hiring a
            technical implementation vendor. How? Simply put, we know how to
            negotiate and bring implementation costs down by a whopping 30% at
            least!)
          </p>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-[1320px] flex-col sm:mt-12">
          {workItems.map((item, index) => (
            <div key={item.title}>
              {index > 0 ? (
                <Separator className="my-10 bg-[#D9DDE7] sm:my-12" />
              ) : null}

              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  item.reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="min-w-0">
                  <div className="relative mx-auto aspect-[1.08/1] w-full max-w-[420px] sm:max-w-[470px] lg:max-w-[400px]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1023px) 100vw, 500px"
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="mx-auto max-w-[620px] lg:max-w-none">
                    <h3
                      className={`text-[28px] font-semibold leading-[1.2em] dark:text-white sm:text-[32px] lg:text-[38px] ${item.titleColor}`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-[1.4em] text-[#222222] dark:text-[#E5E7EB] sm:text-[16px]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-start gap-3">
                      <ArrowRightCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#6A4DF4]" />
                      <p className="text-[15px] leading-[1.4em] text-[#222222] dark:text-[#E5E7EB] sm:text-[16px]">
                        {item.bullet}
                      </p>
                    </div>

                    <p className="mt-5 text-[15px] font-semibold leading-[1.4em] text-[#111111] dark:text-white sm:text-[16px]">
                      {item.emphasis}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
