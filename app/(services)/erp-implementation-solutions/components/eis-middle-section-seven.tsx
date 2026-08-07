import { AuthorInfo } from "@/components/common/author-info";

export const EisMiddleSectionSeven = () => {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="w-full rounded-b-[36px] bg-[#F8F9FE] px-4 py-10 dark:bg-[#111827] sm:rounded-b-[50px] sm:px-6 sm:py-12 md:px-8 lg:py-14 xl:rounded-b-[100px] xl:px-12">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <h2 className="text-[28px] font-medium leading-[1.4em] text-[#252B42] dark:text-white sm:text-[34px] lg:text-[38px]">
            The Leadership
          </h2>

          <div
            className="mt-4 flex items-center justify-center gap-2.5 sm:mt-5"
            aria-hidden
          >
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF]" />
            </div>
            <div className="h-[3px] w-[40px] rounded-full bg-[#4C8DEB] sm:w-[48px]" />
          </div>
        </div>
      </div>

      <AuthorInfo />
    </section>
  );
};
