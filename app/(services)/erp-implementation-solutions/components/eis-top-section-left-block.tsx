import Image from "next/image";


const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const erpSupportItems = [
  {
    text: "Helping you pick a suitable ERP software after assessing your business needs and requirements.",
    icon: `${cdnUrl}/pages/services/eis/erp-icon-1.webp`,
  },
  {
    text: "Negotiating license costs with the implementation vendor.",
    icon: `${cdnUrl}/pages/services/eis/erp-icon-2.webp`,
  },
  {
    text: "Preparing your team for change management (which is no joke).",
    icon: `${cdnUrl}/pages/services/eis/erp-icon-3.webp`,
  },
  {
    text: "Creating BRD and automating processes so you can rely on our expertise to implement the perfect ERP for your company.",
    icon: `${cdnUrl}/pages/services/eis/erp-icon-4.webp`,
  },
] as const;

export const EisTopSectionLeftBlock = () => {
  return (
    <div className="min-w-0 w-full px-1 py-2 sm:px-2 sm:py-4">
      <h1 className="w-full text-[28px] font-semibold leading-[1.2] text-[#111111] dark:text-white sm:text-[34px] lg:text-[38px]">
        <span className="text-[#57B6F7]">&quot;ERP&quot;</span>{" "}
        Implementation Consulting Services for Finance-Led Businesses
        
      </h1>

      <p className="mt-5 max-w-[690px] text-[15px] leading-[1.4em] text-[#222222] dark:text-[#E5E7EB] sm:mt-6 sm:text-[16px]">
        Don&apos;t know where to start while deciding to shift to a more
        advanced ERP system? Confused about the customization capabilities of
        different ERP software? Not sure how to estimate the costs involved or
        what to check in the product demo?
      </p>

      <h2 className="mt-7 max-w-[690px] text-[16px] font-semibold italic leading-[1.4em] text-[#7BB8E6] dark:text-[#8CCAF2] sm:mt-8 sm:text-[18px]">
      How Our ERP Functional Consultants Manage Your Implementation End-to-End
      </h2>

      <div className="mt-7 flex w-full max-w-[720px] flex-col gap-5 sm:mt-8">
        {erpSupportItems.map((item) => (
          <div key={item.text} className="flex items-start gap-4">
            <div className="relative mt-0.5 h-11 w-11 shrink-0 sm:h-12 sm:w-12">
              <Image
                src={item.icon}
                alt="ERP support icon"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>

            <p className="pt-0.5 text-[15px] leading-[1.4em] text-[#111111] dark:text-[#E5E7EB] sm:text-[16px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* <Button
        className="mt-8 h-11 w-full max-w-[230px] rounded-full bg-[#21196C] px-7 text-[13px] font-semibold uppercase tracking-[0.04em] text-white hover:bg-[#181253] sm:px-8"
        type="button"
      >
        Book An ERP Review Call
      </Button> */}
    </div>
  );
};
