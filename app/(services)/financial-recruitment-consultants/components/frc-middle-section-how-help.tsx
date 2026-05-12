const cards = [
  {
    variant: "teal" as const,
    title: "Control that Attrition Rate",
    body: "Finance teams are facing an all-time high Attrition rate. The Reason? A typical recruitment agency fails to understand the nature of the requirement. Our Talent acquisition team comprising of Chartered Accountants and MBAs focuses on functional and cultural fitment.",
  },
  {
    variant: "blue" as const,
    title: "Less is More",
    body: "We value your time, which is why rather than flooding your inbox with multiple CVs, we will help set up interviews only with a select few candidates who have cleared our detailed (and rather aggressive) levels of screening.",
  },
  {
    variant: "teal" as const,
    title: "We Respect Audit Deadlines",
    body: "We understand the sensitiveness of adhering to audit deadlines. Right from preparation of Financial Statements to Audit support, we have a ready-to-deploy pool of dynamic Chartered Accountants and Finance Professionals.",
  },
  {
    variant: "blue" as const,
    title: "Alignment with Company Goals",
    body: "Being the dedicated Resourcing & L&D partner for multiple organizations, we have skin in the game and can help you actually define an org structure while making sure that individual Employee KPA and KRAs are aligned with organization objectives.",
  },
];

const cardStyles = {
  teal: {
    header: "bg-[#56a88e]",
    body: "bg-[#77bcab]",
  },
  blue: {
    header: "bg-[#70b5e3]",
    body: "bg-[#8ec9ef]",
  },
} as const;

export function FrcMiddleSectionHowHelp() {
  return (
    <section
      className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 xl:px-14 2xl:px-[80px]"
      aria-labelledby="frc-how-help-heading"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto w-full max-w-[min(1120px,88%)] sm:max-w-[min(1120px,82%)] xl:max-w-[min(1160px,78%)]">
          <header className="text-center">
            <h2
              id="frc-how-help-heading"
              className="text-balance text-[clamp(1.45rem,2.2vw,2rem)] font-bold leading-tight text-[#3d8f76]"
            >
              How can our Financial Recuitment <br />Consultants help you?
            </h2>
            <div
              className="mx-auto mt-3 h-[3px] w-[clamp(140px,18vw,220px)] bg-[#50a085]"
              aria-hidden
            />
          </header>

          <ul className="mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 xl:gap-4">
            {cards.map((card) => {
              const s = cardStyles[card.variant];
              return (
                <li key={card.title}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(26,22,64,0.08)]">
                    <div
                      className={`flex min-h-[5.5rem] items-center px-5 py-4 sm:min-h-[6rem] sm:px-6 ${s.header}`}
                    >
                      <h3 className="text-balance text-base font-bold leading-snug text-[#1a1640] sm:text-[1.05rem]">
                        {card.title}
                      </h3>
                    </div>
                    <div className={`flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6 ${s.body}`}>
                      <p className="text-pretty text-sm font-medium leading-relaxed text-white sm:text-[0.95rem]">
                        {card.body}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
