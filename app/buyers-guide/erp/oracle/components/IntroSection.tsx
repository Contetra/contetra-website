import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const guideAnswers = [
  "Which type of ERP partner is best suited to your business?",
  "What should you look for beyond Oracle certifications?",
  "How do successful implementations actually unfold?",
  "What budget should you plan?",
  "How can you maximize long-term ROI?",
];

const questionsToAsk = [
  "How does information currently move across departments?",
  "Which financial processes create the biggest operational bottlenecks?",
  "Where are manual interventions slowing decision-making?",
  "What reporting does leadership need but struggle to obtain today?",
  "Which processes should remain unique, and which should follow Oracle best practices?",
];

export default function IntroSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal className="mx-auto max-w-4xl">
          <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>
              If you&apos;ve shortlisted Oracle, you&apos;ve already crossed
              an important milestone in your digital transformation journey.
              Oracle has become the top provider of ERP solutions globally,
              leaving other popular competitors way behind, as per recent
              findings.
            </p>
            <p>
              Whether you&apos;re evaluating Oracle Fusion Cloud ERP,
              NetSuite, or E-Business Suite, you&apos;ve likely spent months
              assessing business requirements, comparing platforms, and
              building an investment case.
            </p>
            <p className="font-semibold text-[#1a1640] dark:text-white">
              Now comes the decision that influences long-term business
              outcomes most: choosing the right Oracle ERP implementation
              partner.
            </p>
            <p>
              Implementation isn&apos;t simply a technology project.
              It&apos;s a business transformation initiative involving
              finance, operations, IT, and leadership working towards a
              common objective.
            </p>
            <p>
              This guide is designed for finance leaders, business owners,
              COOs, CIOs, and transformation teams that have already decided
              to move forward with Oracle ERP and are now evaluating
              consulting and implementation partners.
            </p>
            <p>
              Rather than ranking vendors or publishing another &quot;Top
              Oracle ERP Companies&quot; list, this guide helps you answer
              the questions that matter most:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-8 max-w-4xl">
          <div className="grid gap-3 sm:grid-cols-2">
            {guideAnswers.map((item) => (
              <div
                key={item}
                className="border-l-2 border-[#50a085] bg-white px-4 py-3 text-sm font-semibold leading-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]"
              >
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-8 max-w-4xl">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            Throughout this guide, we&apos;ll also explain where Contetra
            fits into this landscape, not as the only option, but as an
            example of a finance-led advisory model that growing businesses
            prefer over traditional implementation approaches.
          </p>
        </ScrollReveal>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Beyond Implementation"
            title="Oracle ERP Consulting Is About Maximising Business Value"
            desc="The real value of an experienced Oracle ERP consulting partner lies in helping the business align technology with its operational and financial objectives even before configuration begins."
          />
          <ScrollReveal className="mx-auto max-w-4xl">
            <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              <p>
                It comes down to how well business processes, reporting
                structures, approval workflows, and organisational
                requirements were understood during implementation.
              </p>
              <p>
                That is why experienced Oracle ERP consultants spend
                significant time asking questions before making
                recommendations.
              </p>
              <p>Questions such as:</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mx-auto mt-6 max-w-4xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {questionsToAsk.map((item) => (
                <div
                  key={item}
                  className="border-l-2 border-[#50a085] bg-white px-4 py-3 text-sm font-semibold leading-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]"
                >
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mx-auto mt-8 max-w-4xl">
            <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              <p>
                These conversations shape everything that follows, from
                module selection and system configuration to user adoption
                and long-term scalability.
              </p>
              <p>
                The strongest Oracle ERP consulting engagements therefore
                combine technical implementation with business advisory.
                They help organizations redesign processes where necessary,
                standardize financial controls, improve reporting
                structures, and establish governance to support future
                growth.
              </p>
              <p>
                At Contetra, this philosophy aligns closely with the way we
                approach ERP initiatives. Rather than software
                configuration, projects begin with understanding business
                processes, financial reporting requirements, and
                operational objectives. Technology then becomes the
                platform that enables those outcomes, rather than the
                starting point of the conversation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
