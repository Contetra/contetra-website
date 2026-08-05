import Image from "next/image";

const OAS_HERO_GIF =
  "https://contetra.b-cdn.net/pages/services/oas/offshore-accounting-services.gif";


export function OasTopSection() {
  return (
    <section
      className="flex min-h-[75vh] w-full flex-col bg-[#0e044d] dark:bg-[#0A0A0A]"
      aria-labelledby="oas-hero-heading"
    >
      <div className="mx-auto box-border flex w-full max-w-[1440px] flex-1 flex-col justify-center px-[10px] py-6 sm:px-4 sm:py-7 md:px-8 md:py-8 lg:grid lg:min-h-[75vh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-7 lg:py-8 xl:gap-9 xl:px-14 xl:py-10 2xl:px-[80px]">
        <div className="min-w-0 py-1 sm:py-2 lg:py-0">
          <h1
            id="oas-hero-heading"
            className="text-balance text-[1.85rem] font-bold leading-[1.18] tracking-tight text-white sm:text-[1.55rem] md:text-[1.85rem] md:leading-[1.14] lg:text-[2.15rem] xl:text-[2.4rem] 2xl:text-[2.55rem]"
          >
            <span className="text-white">Offshore Accounting Services in India</span>
          </h1>

          <p className="mt-4 text-pretty text-[14px] leading-[1.6] text-white sm:mt-5 sm:text-[15px] md:text-[16px] md:leading-[1.65] lg:mt-5">
            Okay, while we&apos;re clearly bad at cheesy rhymes, we&apos;re
            really good with{" "}
            <strong className="font-semibold">
              managing end-to-end finance and accounting
            </strong>{" "}
            for you, so you can run your business stress-free.
          </p>

          <p className="mt-3 text-pretty text-[14px] leading-[1.6] text-white sm:text-[15px] md:mt-4 md:text-[16px] md:leading-[1.65]">
            <strong className="font-semibold">Who are we?</strong> A bunch of
            ex-Big 4 consultants and industry accountants who are savvy with the
            latest GAAP updates, have hands-on audit experience and are obsessed
            with making sure you never worry about financial reporting,
            outsourced accounting, Bookkeeping Services, controller &amp;
            advisory services again!
          </p>
        </div>

        <div className="relative mx-auto mt-5 flex w-full min-w-0 max-w-[520px] justify-center sm:mt-6 lg:mx-0 lg:mt-0 lg:max-w-none">
          <div className="relative aspect-[5/3] w-full max-w-[400px] sm:aspect-[3/2] sm:max-w-[440px] lg:aspect-auto lg:h-[min(50vh,420px)] lg:max-w-none lg:w-full">
            <Image
              src={OAS_HERO_GIF}
              alt="Offshore accounting services — abstract finance animation"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
