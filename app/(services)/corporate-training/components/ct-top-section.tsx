import { CtTopSectionLeft } from "./ct-top-section-left";
import { CtTopSectionRight } from "./ct-top-section-right";


export const CtTopSection = () => {
  return (
    <section className="w-full  px-[10px] pb-6 pt-2 sm:px-4 md:px-8 lg:pb-8 xl:px-14 2xl:px-[80px] ">
      <div className="mx-auto grid w-full max-w-[1440px] items-start gap-6 overflow-hidden sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-12">
        <CtTopSectionLeft />
        <CtTopSectionRight />
      </div>
    </section>
  );
};