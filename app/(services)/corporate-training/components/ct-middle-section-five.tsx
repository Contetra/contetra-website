const YOUTUBE_EMBED =
  "https://www.youtube-nocookie.com/embed/xNQUmTyC6OU?rel=0&modestbranding=1";

export const CtMiddleSectionFive = () => {
  return (
    <section className="w-full  px-[10px] py-8 sm:px-4 sm:py-10 md:px-8 md:py-12 xl:px-14 2xl:px-[80px] ">
      <div className="mx-auto w-full max-w-[900px]">
        <h2 className="text-center text-[24px] font-semibold leading-tight sm:text-[28px] md:text-[32px]">
          <span className="text-[#1B1345] dark:text-[#93C5FD]">Hear from </span>
          <span className="text-contetra-green dark:text-[#86efac]">our Clients</span>
        </h2>

        <div className="mt-8 w-full sm:mt-10">
          <div className="relative w-full overflow-hidden rounded-[12px] border border-[#E5E7EB] bg-black shadow-[0_12px_40px_-12px_rgba(27,19,69,0.15)] sm:rounded-[16px] dark:border-[#1F2937]">
            <div className="relative aspect-video w-full">
              <iframe
                src={YOUTUBE_EMBED}
                title="Contetra — Excel in Finance (client video)"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
