const leftColumn = [
  {
    title: "Flexibility and Scalability",
    body: "Temp staffing allows for scaling up or down resources based on project demands and seasonal fluctuations such as year-end closures, ensuring optimal resource allocation.",
  },
  {
    title: "Cost Efficiency",
    body: "Temp staffing eliminates the long-term financial commitments associated with hiring permanent employees, such as salaries, benefits, and recruitment expenses. Organizations can allocate their budget more efficiently and reduce overhead costs.",
  },
  {
    title: "Targeted Expertise",
    body: "Temporary professionals bring focused finance knowledge and experience, providing immediate value and contributing to the successful execution of projects.",
  },
] as const;

const rightColumn = [
  {
    title: "Trial Period",
    body: "Temp staffing offers a trial period to evaluate a candidate's performance and cultural fit before making a long-term commitment. This minimizes the risk of hiring mismatches and allows for a better assessment of candidates' skills and compatibility with the finance team and organizational culture.",
  },
  {
    title: "Rapid Onboarding",
    body: "Temporary professionals are often experienced in quickly adapting to new environments and projects. They require minimal training and onboarding time, allowing finance teams to seamlessly integrate them into ongoing initiatives and maximize productivity from the start.",
  },
] as const;

function PointBlock({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3">
      <span
        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#50a085]"
        aria-hidden
      />
      <div className="min-w-0 space-y-2">
        <h3 className="text-base font-bold leading-snug text-[#50a085] sm:text-[1.05rem]">
          {title}
        </h3>
        <p className="text-pretty text-sm font-medium leading-relaxed text-[#1a1640] dark:text-[#E5E7EB] sm:text-[0.95rem]">
          {body}
        </p>
      </div>
    </div>
  );
}

export function FrcMiddleSectionFive() {
  return (
    <section
      className="w-full bg-white px-4 py-10 dark:bg-[#0A0A0A] sm:px-6 sm:py-12 md:px-8 md:py-14 xl:px-14 2xl:px-[80px]"
      aria-labelledby="frc-section-five-heading"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto w-full max-w-[min(1100px,92%)] lg:max-w-[min(1120px,88%)]">
          <header className="text-center">
            <h2
              id="frc-section-five-heading"
              className="mx-auto max-w-4xl text-balance font-bold leading-tight"
            >
              <span className="block text-[clamp(1.2rem,2vw,1.65rem)] text-[#1a1640] dark:text-white">
                The Power of Contractual Deployment:
              </span>
              <span className="mt-2 block text-[clamp(1.35rem,2.4vw,2rem)] text-[#50a085]">
              How Finance Staffing Services Build Flexible Finance Teams
              </span>
            </h2>
            <div
              className="mx-auto mt-4 h-[4px] w-[clamp(160px,20vw,260px)] bg-[#50a085]"
              aria-hidden
            />
            <p className="mx-auto mt-6 max-w-3xl text-balance text-[clamp(1rem,1.5vw,1.2rem)] font-bold leading-snug text-[#1a1640] dark:text-white">
              Why should you go for temp staffing over permanent, especially
              within the finance team?
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-0">
            <div className="flex flex-col gap-9 lg:gap-10">
              {leftColumn.map((item) => (
                <PointBlock key={item.title} title={item.title} body={item.body} />
              ))}
            </div>
            <div className="flex flex-col gap-9 lg:gap-10">
              {rightColumn.map((item) => (
                <PointBlock key={item.title} title={item.title} body={item.body} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
