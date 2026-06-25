type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  desc?: string;
  level?: "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">
          {eyebrow}
        </div>
      ) : null}
      <Heading className="text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">
        {title}
      </Heading>
      {desc ? (
        <p className="mt-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
