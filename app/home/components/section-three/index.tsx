
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  {
    value: 8,
    suffix: "",
    label: "Years",
    description:
      "Of working with leading companies lending our expertise to implement best practices in financial reporting and technical accounting.",
  },
  {
    value: 155,
    suffix: "+",
    label: "Clients",
    description:
      "To whom we provide a host of bespoke consulting services ranging from Business FPA advisory, International GAAP implementations and boutique management advisory. We work to build businesses that will thrive for decades.",
  },
  {
    value: 200,
    suffix: "+",
    label: "Transformations",
    description:
      "We've conducted outcome-based transformations for top corporates pan-India and across the Globe. Whether it's building world class finance teams, tailor made programs or process implementations, we're here for you.",
  },
  {
    value: 35000,
    suffix: "+",
    label: "Community",
    description:
      "Building a thriving finance community that leverages the power of networking, fostering relations between india inc., industry veterans and leaders of tomorrow - is part of our vision of helping the entire fraternity succeed.",
  },
] as const;

export function SectionThree() {
  return (
    <section className="w-full bg-contetra-blue text-white rounded-tl-[100px]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-16 md:gap-10 md:px-8 md:py-20">
        <header className="text-center">
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Our Story in{" "}
            <span className="text-contetra-green dark:text-contetra-green">
              Numbers
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {stats.map((stat, index) => (
            <article key={stat.label} className="space-y-3">
              <div className="flex items-end gap-0.5 text-4xl font-semibold tracking-tight sm:text-5xl">
                <NumberTicker
                  value={stat.value}
                  delay={index * 0.12}
                  className="text-white dark:text-white"
                />
                {stat.suffix ? <span>{stat.suffix}</span> : null}
              </div>

              <span className="inline-flex bg-contetra-green px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#fff]">
                {stat.label}
              </span>

              <p className="max-w-[28ch] text-sm leading-relaxed text-white/90">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
