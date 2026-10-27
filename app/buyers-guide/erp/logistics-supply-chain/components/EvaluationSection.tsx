import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const questions = [
  {
    question: "Can it provide real-time inventory visibility across all locations?",
    answer:
      "A consolidated view prevents decisions based on incomplete or outdated inventory information.",
  },
  {
    question: "Can it forecast demand and support supply planning?",
    answer:
      "Accurate demand forecasting reduces the risk of both stockouts and excess inventory.",
  },
  {
    question: "Can it integrate with carriers, GPS, marketplaces, and existing systems?",
    answer:
      "Strong integration connects shipment, order, fleet, and customer data for optimum visibility.",
  },
  {
    question: "Can it handle multiple entities, currencies, tax regimes, and geographies?",
    answer: "Supports growing financial, regulatory, and operational complexity.",
  },
  {
    question: "Can operations teams track real-time supply chain performance?",
    answer:
      "Direct access to metrics helps operations teams act before issues escalate.",
  },
];

export default function EvaluationSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Selection Criteria"
          title="How Can You Choose the Right Logistics & Supply Chain ERP?"
          desc="The right ERP should fit both your current operations and the way your supply chain may evolve. These questions can help you make a sound assessment:"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {questions.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_2px_12px_rgba(26,22,64,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a1640] text-sm font-bold text-white dark:bg-[#172036]">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                    {item.question}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                  {item.answer}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
