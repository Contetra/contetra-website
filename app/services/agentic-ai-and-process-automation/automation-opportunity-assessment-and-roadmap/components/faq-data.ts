import type { FaqItem } from "@/lib/content";

export const faqItems: FaqItem[] = [
  {
    question: "What is an automation opportunity assessment?",
    answer: "An automation opportunity assessment is a structured review of business processes to identify where automation can create meaningful value. It evaluates manual effort, process volume, delays, errors, hand offs, systems, controls, data availability and dependency on individual knowledge before recommending which opportunities to prioritise.",
  },
  {
    question: "Why should we conduct an assessment before selecting tools?",
    answer: "Because choosing a technology platform before understanding the process usually means automating the wrong things or adding unnecessary complexity. An assessment first determines the actual business problem, the expected outcome, process readiness, control requirements and technical feasibility, before AI, workflow automation, RPA or any other tool gets picked.",
  },
  {
    question: "Which business functions can be included in the assessment?",
    answer: "Finance, accounting, sales, marketing, operations, procurement, project management and other business functions can all be covered, with the goal of comparing opportunities across functions to build one prioritised automation portfolio, rather than evaluating each idea in isolation.",
  },
  {
    question: "How do you identify processes that are suitable for automation?",
    answer: "By reviewing transaction volume, repetitive effort, process stability, delays, error rates, number of hand offs, rule clarity, system availability, data quality and exception frequency. Processes with high business value and sufficient standardisation generally make the strongest candidates.",
  },
  {
    question: "What does data readiness mean in an automation assessment?",
    answer: "Whether the information needed to run an automated workflow is available, structured, reliable and accessible from the relevant systems. Poor quality or fragmented data usually needs fixing before automation can be expected to run consistently.",
  },
  {
    question: "How are automation opportunities prioritised?",
    answer: "By scoring them on expected business value, technical feasibility, data readiness, standardisation, risk, integration effort and change impact, giving management an objective basis to compare opportunities and decide what to tackle first.",
  },
  {
    question: "What if a process is not actually ready to be automated?",
    answer: "Then it should not be automated immediately. Not every inefficient process is a good automation candidate. If a workflow is unclear, highly inconsistent, or dependent on unnecessary manual steps, process redesign and standardisation usually needs to happen first, before automation gets layered on top of a broken process.",
  },
  {
    question: "How do you decide between workflow automation, RPA and AI?",
    answer: "The technology should follow the process, not the other way round. Structured workflows may suit workflow tools or APIs, repetitive interface based tasks may suit RPA, document heavy processes may need document processing, and workflows involving unstructured information or reasoning may be better served by AI or agentic automation.",
  },
  {
    question: "What is a Proof of Value in an automation roadmap?",
    answer: "A controlled pilot designed to test whether a selected automation opportunity can deliver its expected outcome before wider deployment. It validates process assumptions, integrations, controls, data readiness and business benefits using representative information, rather than assuming success upfront.",
  },
  {
    question: "What does an automation roadmap actually include?",
    answer: "Prioritised opportunities, implementation waves, recommended pilots, process owners, solution options, architecture principles, expected business benefits, control requirements and change governance considerations, all laid out so leadership can see the full sequence rather than one automation at a time.",
  },
  {
    question: "How do you measure the potential ROI of an automation opportunity?",
    answer: "Through measures such as manual hours saved, cycle time reduction, lower error rates, faster response times, reduced process leakage, improved control effectiveness and avoided capacity requirements, with the specific measures depending on the process being evaluated.",
  },
  {
    question: "What is Contetra's automation opportunity assessment process?",
    answer: "It starts by interviewing process owners and reviewing representative workflows. Current effort, risk and performance are then quantified, opportunities scored against defined criteria, target outcomes established, and suitable pilots selected to build a prioritised implementation roadmap.",
  },
  {
    question: "How long does a typical assessment take before we get a roadmap?",
    answer: "This depends on how many functions and processes are in scope, a single function assessment can move relatively quickly, while a cross functional review covering finance, sales and operations together naturally takes longer to interview stakeholders and quantify baselines properly across the board.",
  },
];
