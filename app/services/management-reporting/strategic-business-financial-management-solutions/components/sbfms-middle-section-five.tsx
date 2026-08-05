import { AuthorInfo } from "@/components/common/author-info";

const CLIENT_VIDEOS = [
  {
    title: "Unlock Your Business's True Potential",
    src: "https://www.youtube.com/embed/jxydfL_b2ag",
  },
  {
    title: "How a Leading Industry Player Boosted Sales",
    src: "https://www.youtube.com/embed/--dbwiBZY0U",
  },
] as const;

export function SbfmsMiddleSectionFive() {
  return (
    <section className="w-full bg-[#f5f6f8] py-10 sm:py-12 md:py-14 dark:bg-[#0f1218]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-[2rem] font-bold leading-tight text-[#1a2751] sm:text-[2.3rem]">
            Hear from <span className="text-[#55b48a]">our Clients</span>
          </h2>
          <div className="mt-3 h-[3px] w-[64px] rounded-full bg-[#55b48a]" />
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-[980px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {CLIENT_VIDEOS.map((video) => (
            <div
              key={video.src}
              className="overflow-hidden rounded-xl bg-black shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
            >
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src={video.src}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h2 className="text-center text-[2rem] font-bold leading-tight text-[#1a2751] sm:text-[2.3rem]">
            The <span className="text-[#55b48a]">Leaders</span>
          </h2>
          <div className="mt-3 h-[3px] w-[64px] rounded-full bg-[#55b48a]" />
        </div>
      </div>

      <AuthorInfo />
    </section>
  );
}
