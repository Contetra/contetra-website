import Image from "next/image";
import { Building2, Coins, Hourglass } from "lucide-react";

type MythCard = {
  title: string;
  frontText: string;
  backText: string;
  accentClass: string;
  icon: typeof Coins;
  className?: string;
};

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const mythCards: MythCard[] = [
  {
    title: "Myth",
    frontText: "ERP systems are very costly",
    backText:
      "Most companies have a fixed notion about ERP implementation being expensive. While they're not always wrong, the assumption is not based on ground facts. The cost of ERP implementation tends to vary and is completely negotiable depending on the modules opted for, and the number of the users you require.",
    accentClass: "bg-[#93D8DB]",
    icon: Coins,
    className: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Myth",
    frontText: "ERP system implementation is time-consuming",
    backText:
      "When attempted without a project plan or functional partner, it can be a daunting task. Ambitious Gantt charts might not help since finance is moving towards lean practices and agile processes. We're all about trimming wasteful activities, looking at workflows with a critical eye, adding more value to the business units with change management and automation.",
    accentClass: "bg-[#F1DA8A]",
    icon: Hourglass,
    className: "lg:col-start-2 lg:row-span-2 lg:self-center",
  },
  {
    title: "Myth",
    frontText: "ERP is only for large organisations",
    backText:
      "ERPs can and should be used by organisations of all sizes, and can be adapted to fit the specific needs of each organisation! There are many ERP solutions designed for small and medium sized businesses. ERP can offer many benefits to organisations of all sizes, including improved efficiency, better visibility into operations, and improved customer service!",
    accentClass: "bg-[#F28E6B]",
    icon: Building2,
    className: "lg:col-start-1 lg:row-start-2",
  },
] as const;

function FlipCard({
  title,
  frontText,
  backText,
  accentClass,
  icon: Icon,
  className,
}: MythCard) {
  return (
    <div
      tabIndex={0}
      className={`group relative h-[240px] w-full overflow-visible outline-none [perspective:1200px] sm:h-[280px] ${className ?? ""}`}
    >
      <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)] group-focus:[transform:rotateY(-180deg)]">
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-[24px] bg-white px-6 py-8 text-center shadow-[0_14px_35px_rgba(18,12,84,0.08)] [backface-visibility:hidden] dark:bg-[#111827]">
          <div
            className={`mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-full text-white sm:h-[64px] sm:w-[64px] ${accentClass}`}
          >
            <Icon className="h-7 w-7" />
          </div>

          <h3 className="text-[18px] font-semibold leading-[1.4em] text-[#5A5A5A] dark:text-white sm:text-[20px]">
            {title}
          </h3>

          <p className="mt-3 text-[15px] leading-[1.4em] text-[#1C1C1C] dark:text-[#E5E7EB] sm:text-[16px]">
            {frontText}
          </p>
        </div>

        <div
          className={`absolute inset-0 flex h-full w-full rounded-[24px] px-5 py-6 text-left shadow-[0_14px_35px_rgba(18,12,84,0.08)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-6 sm:py-7 ${accentClass}`}
        >
          <p className="text-[14px] font-medium leading-[1.4em] text-white sm:text-[15px]">
            {backText}
          </p>
        </div>
      </div>
    </div>
  );
}

export const EisMiddleSectionFive = () => {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="w-full rounded-b-[36px] bg-[#F8F9FE] px-4 py-10 dark:bg-[#111827] sm:rounded-b-[50px] sm:px-6 sm:py-12 md:px-8 lg:py-14 xl:rounded-b-[100px] xl:px-12">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <h2 className="text-[28px] font-semibold leading-[1.4em] text-[#252B42] dark:text-white sm:text-[34px] lg:text-[38px]">
            The biggest myths surrounding ERP systems:
          </h2>

          <div className="mt-3 h-[3px] w-[52px] rounded-full bg-[#4C8DEB]" />
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-[1320px] items-center gap-8 lg:mt-12 lg:grid-cols-[minmax(280px,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
          <div className="min-w-0">
            <div className="relative mx-auto aspect-[0.92/1] w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[470px]">
              <Image
                src={`${cdnUrl}/pages/services/eis/erp-cta-two.webp`}
                alt="ERP myths illustration"
                fill
                className="object-contain"
                sizes="(max-width: 1023px) 100vw, 470px"
              />
            </div>
          </div>

          <div className="min-w-0">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
              {mythCards.map((card) => (
                <FlipCard key={card.frontText} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
