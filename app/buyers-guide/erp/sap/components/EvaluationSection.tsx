import { AlertTriangle, CheckCircle2 } from "lucide-react";
import SectionIntro from "./SectionIntro";

const criteria = [
  {
    title: "Industry-specific experience",
    why: "Sector context prevents teams from underestimating process and configuration complexity.",
    contetra:
      "Ex-Big 4 consultants with cross-industry finance-transformation backgrounds.",
  },
  {
    title: "Implementation methodology",
    why: "The rollout model and quality of the requirements phase define the risk profile.",
    contetra:
      "Requirements and BRD are completed before a technical vendor is selected.",
  },
  {
    title: "Team seniority post-sale",
    why: "The pitch team is not always the implementation team.",
    contetra:
      "The team that scopes the engagement stays through hypercare.",
  },
  {
    title: "Post-go-live support",
    why: "Go-live begins value realisation; it does not finish the project.",
    contetra:
      "A monthly project tracker and dedicated team continue after launch.",
  },
  {
    title: "Pricing structure",
    why: "Fixed-fee can encourage scope cutting; time-and-materials needs tight governance.",
    contetra:
      "Vendor negotiation is owned directly, with quoted costs reduced by roughly 30% or more.",
  },
  {
    title: "Client references at your size",
    why: "A $2B enterprise case study says little about a $40M mid-market rollout.",
    contetra:
      "References come predominantly from mid-market and growth-stage clients.",
  },
];

const questions = [
  "Who owns data migration accuracy—and what is the rollback plan?",
  "How is scope creep handled contractually?",
  "What does end-user training look like, week by week?",
  "What happens if a named senior consultant leaves?",
  "Can we speak to a client whose rollout did not go smoothly?",
  "What is included in hypercare, and how long does it run?",
];

const redFlags = [
  "The delivery team is more junior than the sales team.",
  "There is no formal organisational change plan.",
  "A fixed-price quote looks implausibly low for the scope.",
  "The partner will not name the senior consultants assigned.",
];

export default function EvaluationSection() {
  return (
    <section className="bg-[#f4f6f8] py-24 text-[#17143a] dark:bg-[#0d1117] md:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionIntro
          index="02"
          eyebrow="Evaluation"
          title="How to Evaluate an SAP Implementation Partner"
          description="Whatever category you're shopping in, run every SAP ERP company on your shortlist through the same checklist."
        />
        <div data-stagger className="grid gap-4 lg:grid-cols-2">
          {criteria.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-5 rounded-2xl border border-[#e0e4e9] bg-white p-6 shadow-[0_8px_30px_rgba(23,20,58,.05)] dark:border-white/10 dark:bg-[#151a22] sm:grid-cols-[52px_1fr]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5f4ef] text-sm font-bold text-[#347d68] dark:bg-[#17352c] dark:text-[#8ad5b8]">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#666a78] dark:text-[#b9c0cd]">
                  {item.why}
                </p>
                <div className="mt-4 flex gap-3 border-t border-[#eceef1] pt-4 dark:border-white/10">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#347d68] dark:text-[#86d7b8]" />
                  <p className="text-sm leading-6 text-[#333647] dark:text-[#d8dde6]">
                    <strong>Contetra:</strong> {item.contetra}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div data-reveal className="rounded-2xl bg-[#17143a] p-8 text-white dark:bg-[#171c26]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8ed7bc]">
              Questions to ask before you sign
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Questions to ask before you onboard a SAP ERP implementation company</h3>
            <ol className="mt-7 grid gap-4 sm:grid-cols-2">
              {questions.map((question, index) => (
                <li key={question} className="flex gap-3 text-sm leading-6 text-white/75">
                  <span className="font-bold text-[#8ed7bc]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {question}
                </li>
              ))}
            </ol>
          </div>
          <div
            data-reveal
            className="rounded-2xl border border-[#ead7c3] bg-[#fff8f0] p-8 dark:border-[#684c32] dark:bg-[#241c17]"
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-[#a66b35]" />
              <h3 className="text-xl font-bold dark:text-white">Red flags</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {redFlags.map((flag) => (
                <li key={flag} className="flex gap-3 text-sm leading-6 text-[#614f42] dark:text-[#e3c9b3]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bd7440]" />
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
