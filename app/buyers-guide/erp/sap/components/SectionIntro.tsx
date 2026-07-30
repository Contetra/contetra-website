type SectionIntroProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionIntro({
  index,
  eyebrow,
  title,
  description,
  light = false,
}: SectionIntroProps) {
  return (
    <div data-reveal className="mb-12 grid gap-6 lg:grid-cols-[160px_1fr]">
      <div>
        <span
          className={`text-xs font-bold uppercase tracking-[0.22em] ${
            light ? "text-[#86d7b8]" : "text-[#347d68] dark:text-[#86d7b8]"
          }`}
        >
          {index} · {eyebrow}
        </span>
      </div>
      <div className="max-w-4xl">
        <h2
          className={`text-3xl font-semibold leading-[1.12] md:text-[2.75rem] ${
            light ? "text-white" : "text-[#17143a] dark:text-white"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-5 max-w-3xl text-base leading-7 ${
              light
                ? "text-white/70"
                : "text-[#55596b] dark:text-[#b9c0cd]"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
