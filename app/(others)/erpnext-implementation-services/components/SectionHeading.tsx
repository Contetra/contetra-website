type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  desc?: string;
};

export default function SectionHeading({ eyebrow, title, desc }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">{eyebrow}</div>
      <div className="mx-auto mb-6 h-px w-16 bg-[#50a085] dark:bg-[#86efac]" />
      <h2 className="text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">{title}</h2>
      {desc ? <p className="mt-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">{desc}</p> : null}
    </div>
  );
}
