"use client";

type PricingPlan = {
  title: string;
  price: string;
  secondaryPrice?: string;
  perCompany?: string;
  subtitle: string;
};

const PRICING_PLANS: PricingPlan[] = [
  {
    title: "START",
    price: "₹ 5,000",
    subtitle: "1 TO 1000 Companies",
  },
  {
    title: "BASIC",
    price: "₹ 9,000",
    subtitle: "1001 TO 2000 Companies",
  },
  {
    title: "PLUS",
    price: "₹ 13,000",
    subtitle: "2001 TO 3000 Companies",
  },
  {
    title: "ADVANCED",
    price: "₹ 13,000",
    secondaryPrice: "₹4",
    perCompany: "Per Company",
    subtitle: "More than 3000 Companies",
  },
];

export function StMiddleSectionFour() {
  return (
    <section
      id="st-pricing"
      className="w-full scroll-mt-[88px] bg-[#F2F3F5] px-4 py-10 sm:px-6 md:px-8 md:py-12"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="text-center text-[28px] font-semibold leading-tight text-[#3B7AB6] sm:text-[34px]">
          Pricing Plans
        </h2>

        <div className="mt-5 flex flex-wrap justify-center gap-3 sm:gap-3">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.title}
              className="w-full max-w-[220px] overflow-hidden rounded-[14px] border border-[#D5D8DD] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.05)] sm:w-[220px]"
            >
              <div className="bg-[#123B77] px-4 py-[8px] text-center text-[14px] font-bold leading-none text-white sm:text-[15px]">
                {plan.title}
              </div>

              <div className="flex min-h-[250px] flex-col items-center justify-center px-5 py-7 text-center">
                <p
                  className={`font-semibold leading-[1.05] text-[#123B77] ${
                    plan.price === "₹ 13,000"
                      ? "text-[30px] sm:text-[34px]"
                      : "text-[34px] sm:text-[38px]"
                  }`}
                >
                  {plan.price}
                </p>
                {plan.secondaryPrice ? (
                  <>
                    <p className="text-[30px] font-semibold leading-[1.05] text-[#123B77] sm:text-[34px]">
                      +
                    </p>
                    <p className="text-[34px] font-semibold leading-[1.05] text-[#123B77] sm:text-[38px]">
                      {plan.secondaryPrice}
                    </p>
                    <p className="text-[10px] font-semibold leading-none text-[#13284B]">
                      {plan.perCompany}
                    </p>
                  </>
                ) : null}

                <div className="my-3 h-[18px] w-[18px] rounded-full border border-[#7E8795] text-[11px] leading-[16px] text-[#7E8795]">
                  ✓
                </div>

                <p className="max-w-[150px] text-[11px] font-semibold leading-[1.2] text-[#4C8FAF] sm:text-[12px]">
                  {plan.subtitle}
                </p>

                <p className="mt-3 text-[10px] font-semibold leading-none text-[#13284B]">
                  *Exclusive of GST
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
