type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  desc?: string;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, desc, light = false }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className={`mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${light ? "text-[#77bcab] dark:text-[#86efac]" : "text-[#50a085] dark:text-[#86efac]"}`}>{eyebrow}</div>
      <div className={`mx-auto mb-6 h-px w-16 ${light ? "bg-[#77bcab] dark:bg-[#86efac]" : "bg-[#50a085] dark:bg-[#86efac]"}`} />
      <h2 className={`text-3xl font-semibold leading-tight md:text-[2.6rem] ${light ? "text-white" : "text-[#1a1640] dark:text-white"}`}>{title}</h2>
      {desc ? <p className={`mt-5 text-base leading-7 ${light ? "text-white/70 dark:text-[#D1D5DB]" : "text-[#25243a] dark:text-[#E5E7EB]"}`}>{desc}</p> : null}
    </div>
  );
}
