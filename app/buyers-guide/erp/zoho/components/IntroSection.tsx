import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const guideAnswers = [
  "What should you expect from a Zoho consultation firm?",
  "How does a good implementation differ from an excellent one?",
  "What should you budget for implementation?",
  "How can you maximize the return on your investment?",
];

const questionsToAsk = [
  "How should customer information sync between sales and finance?",
  "Which repetitive or manual work is wasting an employee's time?",
  "What reports does leadership rely on every week?",
  "Which business processes should be standardized across departments?",
  "Where can automation improve speed without reducing operational control?",
];

export default function IntroSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal className="mx-auto max-w-4xl">
          <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>
              If you&apos;re evaluating Zoho ERP implementation partners,
              you&apos;ve made the right decision for your growing business.
            </p>
            <p>
              Whether you prefer Zoho One or want to build an ecosystem
              using Zoho Books, Inventory, CRM, and other apps, you&apos;re
              entering the stage where implementation decisions shape
              long-term business outcomes.
            </p>
            <p>
              This is where many organizations realize that implementing
              Zoho is more than enabling applications or migrating data.
              It&apos;s about designing how finance, sales, operations,
              inventory, procurement, and people work together through a
              connected platform.
            </p>
            <p className="font-semibold text-[#1a1640] dark:text-white">
              The right Zoho ERP consulting partner translates those
              business requirements into practical workflows, reporting
              structures, approval hierarchies, and automations that
              support your operations as they grow.
            </p>
            <p>
              This guide is written for founders, finance leaders, COOs,
              operations managers, and business owners who have shortlisted
              Zoho and are evaluating implementation and consulting
              expertise.
            </p>
            <p>
              Rather than presenting another directory of Zoho ERP
              partners, we&apos;ll help you answer the questions that
              matter during your buying process.
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
            Additionally, we&apos;ll explain how Contetra&apos;s
            advisory-led model, combining business process expertise with
            governance, helps clients realize the full value of the Zoho
            ecosystem.
          </p>
        </ScrollReveal>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Business Decisions First"
            title="Successful Zoho Implementation Starts with Business Decisions, Not Technical Nuances"
            desc="One of the reasons businesses choose Zoho is flexibility; it doesn't offer a fixed set of modules like traditional platforms."
          />
          <ScrollReveal className="mx-auto max-w-4xl">
            <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              <p>
                Zoho enables organizations to build an integrated business
                ecosystem using applications that match their specific
                requirements. Finance teams may work in Zoho Books;
                operations may depend on Inventory; sales teams live inside
                CRM, while HR, projects, and analytics are managed through
                entirely different applications.
              </p>
              <p>
                Since the technology is flexible, the implementation needs
                to be more thoughtful. The reason is that two businesses
                using the same Zoho applications can end up with completely
                different operational outcomes.
              </p>
              <p>
                One business may reduce manual work, gain real-time
                visibility across departments, and automate routine
                approvals.
              </p>
              <p>
                However, another company may struggle with disconnected
                workflows, inconsistent reporting, and repetitive manual
                processes, even though both organizations use the same
                solution.
              </p>
              <p className="font-semibold text-[#1a1640] dark:text-white">
                The difference isn&apos;t the platform. It&apos;s the
                implementation decisions made before configuration begins.
              </p>
              <p>
                Experienced Zoho consultants spend less time discussing
                features and more time understanding how the business truly
                operates. Questions such as:
              </p>
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
            <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              With the answers ready, consultants can create an
              implementation roadmap that reflects business priorities
              rather than just software capabilities.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16">
          <SectionHeading
            level="h3"
            title="Zoho ERP Implementation Is More than Configuration"
          />
          <ScrollReveal className="mx-auto max-w-4xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            <p>
              Perhaps the biggest misconception about Zoho implementation is
              that configuration is the project. In reality, configuration
              is one of the final steps.
            </p>
            <p>
              The earlier stages determine how effectively the platform
              supports your organization over the long term. They include
              understanding existing processes, identifying inefficiencies,
              designing future workflows, and agreeing on reporting
              requirements.
            </p>
            <p>
              For growing businesses, these decisions also influence
              scalability. Planning for that future during implementation
              reduces the need for comprehensive redesign later. This is
              where experienced implementation consultants create lasting
              value.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
