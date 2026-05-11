import Image from "next/image";

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const reasons = [
  {
    text: "We're the only providers of ERP functional consulting services and solutions in the market.",
    icon: `${cdnUrl}/pages/services/eis/erp-icon-1.webp`,
  },
  {
    text: "ERPs can and should be used by organisations of all sizes, and can be adapted to fit the specific needs of each organisation!",
    icon: `${cdnUrl}/pages/services/eis/erp%20(2).webp`,
  },
  {
    text: "Integrated ERP solutions can and should be used by organisations of all sizes and can be adapted to fit the specific needs of each organisation!",
    icon: `${cdnUrl}/pages/services/eis/erp%20(1).webp`,
  },
  {
    text: "We understand the pain of dealing with the technical implementation partners and want to make it easier for your team - we've done this for multiple companies, having dealt with practically every popular ERP software. As ERP-agnostic partners, you can be sure of un-biased expertise.",
    icon: `${cdnUrl}/pages/services/eis/erp%20(2).png`,
  },
  {
    text: "Your finance team may be over-burdened with other activities or may not have the required expertise to take up the mammoth task of ERP implementation. This is where our ERP consulting services comes into picture.",
    icon: `${cdnUrl}/pages/services/eis/erp%20(1).png`,
  },
  {
    text: "Right from fixing an ERP, getting you the best quotes to making sure your organization has adjusted to the ERP (change management) and post implementation support, we do it all.",
    icon: `${cdnUrl}/pages/services/eis/erp%20(4).png`,
  },
  {
    text: "We're a bunch of ex-Big 4 consultants and former industry veterans who are obsessed with getting you the desired ROI out of the ERP implementation you're driving, all while ensuring it runs smoothly!",
    icon: `${cdnUrl}/pages/services/eis/erp%20(3).png`,
  },
] as const;

export const EisMiddleSectionFour = () => {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="w-full rounded-b-[36px] bg-[#F8F9FE] px-4 py-10 dark:bg-[#111827] sm:rounded-b-[50px] sm:px-6 sm:py-12 md:px-8 lg:py-14 xl:rounded-b-[100px] xl:px-12">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center text-center">
          <h2 className="text-[28px] font-semibold leading-[1.4em] text-[#252B42] dark:text-white sm:text-[34px] lg:text-[38px]">
            Why do you need an ERP functional consultant and why should it be us?
          </h2>

          <div className="mt-3 h-[3px] w-[52px] rounded-full bg-[#4C8DEB]" />
        </div>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-[1320px] items-start gap-8 px-4 sm:mt-12 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-14 xl:px-12">
        <div className="min-w-0">
          <div className="mx-auto flex max-w-[760px] flex-col gap-5 lg:max-w-none">
            {reasons.map((reason) => (
              <div key={reason.text} className="flex items-start gap-4">
                <div className="relative mt-0.5 h-10 w-10 shrink-0 sm:h-11 sm:w-11">
                  <Image
                    src={reason.icon}
                    alt="ERP consulting icon"
                    fill
                    className="object-contain"
                    sizes="44px"
                  />
                </div>

                <p className="text-[15px] leading-[1.4em] text-[#1F1F1F] dark:text-[#E5E7EB] sm:text-[16px]">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="relative mx-auto aspect-[0.95/1] w-full max-w-[360px] sm:max-w-[420px] lg:sticky lg:top-24 lg:max-w-[460px]">
            <Image
              src={`${cdnUrl}/pages/services/eis/erp-cta.webp`}
              alt="ERP functional consulting illustration"
              fill
              className="object-contain"
              sizes="(max-width: 1023px) 100vw, 460px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
