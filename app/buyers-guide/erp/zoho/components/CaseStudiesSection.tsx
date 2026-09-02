import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const outcomes = [
  {
    company: "Gupshup",
    body: [
      "Gupshup, a global conversational messaging platform, partnered with Contetra during its ERP transformation journey to strengthen financial processes and implementation governance.",
      "Beyond optimizing implementation costs through structured vendor engagement, Contetra introduced process improvements that continued delivering operational value after the implementation.",
    ],
  },
  {
    company: "IRIS Business Services",
    body: [
      "For IRIS Business Services, one of the biggest challenges wasn't technology. It was communication between business stakeholders and the implementation team.",
      "Contetra acted as the bridge between functional and technical teams. We helped translate business requirements into implementation decisions to reduce ambiguity and aligned the project with organizational objectives.",
    ],
  },
  {
    company: "Stellar Value Chain Solutions",
    body: [
      "Stellar Value Chain Solutions needed an implementation approach grounded in a clear understanding of how the business operated.",
      "Therefore, Contetra analyzed existing finance and operational workflows before implementation. We enabled the company to streamline accounting processes and establish a stronger operational foundation for long-term ERP adoption.",
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Measurable Business Outcomes"
          title="Real Zoho Implementations, Real Outcomes"
          desc="Across industries, businesses engage Contetra to improve financial visibility, streamline operations, and create stronger alignment between business teams and technology."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <ScrollReveal key={item.company} delay={index * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white shadow-[0_8px_28px_rgba(26,22,64,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(26,22,64,0.16)] dark:border-[#1F2937] dark:bg-[#111827]">
                <div className="bg-gradient-to-br from-[#1a1640] to-[#50a085] p-6 text-white dark:from-[#172036] dark:to-[#111827]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    Client Story
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-tight">
                    {item.company}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  {item.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
