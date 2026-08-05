import { EisTopSectionLeftBlock } from "./eis-top-section-left-block";
import { EisTopSectionRightBlock } from "./eis-top-section-right-block";

export const EisTopSection = () => {
  return (
    <section className="w-full px-[10px] pb-6 pt-2 sm:px-4 md:px-8 lg:pb-8 xl:px-14 2xl:px-[80px]">
      <div className="grid w-full items-start gap-8 overflow-hidden lg:grid-cols-[55fr_45fr] lg:gap-10 xl:gap-12">
        <EisTopSectionLeftBlock />
        <EisTopSectionRightBlock />
      </div>
    </section>
  );
};
