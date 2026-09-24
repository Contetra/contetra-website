import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Automation Opportunity Assessment & Roadmap | Contetra`,
  description: `A practical automation roadmap based on process evidence, assess, score and prioritise automation opportunities before committing to tools.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
  },
  openGraph: {
    title: `Prioritise Value Before You Choose Any Tool | Contetra`,
    description: `Prioritise value before choosing tools — a practical, evidence-based roadmap that scores and sequences automation opportunities across the business.`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://contetra.com/#organization",
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap#service",
      name: "Automation Opportunity Assessment and Roadmap",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
      description: "Contetra assesses business processes across finance, sales, marketing, operations, procurement and project management to identify, score and prioritise automation opportunities based on business value, feasibility, data readiness, standardisation, risk, integration effort and change impact.",
      serviceType: [
        "Automation Opportunity Assessment",
        "Automation Roadmap Development",
        "Business Process Assessment",
        "Automation Use-Case Prioritisation",
        "Process Readiness Assessment",
        "Data Readiness Assessment",
        "Automation Feasibility Assessment",
        "Automation ROI Assessment",
        "Workflow Automation Assessment",
        "RPA Opportunity Assessment",
        "AI Automation Assessment",
        "Proof of Value Planning",
        "Automation Governance Roadmap",
      ],
      category: "Agentic AI and Business Process Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Business Owners",
        },
        {
          "@type": "Audience",
          audienceType: "CFOs and Finance Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Operations Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Sales and Marketing Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Digital Transformation Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Process Owners",
        },
      ],
      isRelatedTo: {
        "@type": "Service",
        name: "Agentic AI and Process Automation",
        url: "https://contetra.com/services/agentic-ai-and-process-automation",
      },
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
      name: "Automation Opportunity Assessment and Roadmap | Contetra",
      description: "Automation opportunity assessment and roadmap services covering process readiness, business value, technical feasibility, data readiness, ROI, technology selection, proof-of-value pilots and implementation prioritisation.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an automation opportunity assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An automation opportunity assessment is a structured review of business processes to identify where automation can create meaningful value. It evaluates manual effort, process volume, delays, errors, hand offs, systems, controls, data availability and dependency on individual knowledge before recommending which opportunities to prioritise.",
          },
        },
        {
          "@type": "Question",
          name: "Why should we conduct an assessment before selecting tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because choosing a technology platform before understanding the process usually means automating the wrong things or adding unnecessary complexity. An assessment first determines the actual business problem, the expected outcome, process readiness, control requirements and technical feasibility, before AI, workflow automation, RPA or any other tool gets picked.",
          },
        },
        {
          "@type": "Question",
          name: "Which business functions can be included in the assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finance, accounting, sales, marketing, operations, procurement, project management and other business functions can all be covered, with the goal of comparing opportunities across functions to build one prioritised automation portfolio, rather than evaluating each idea in isolation.",
          },
        },
        {
          "@type": "Question",
          name: "How do you identify processes that are suitable for automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By reviewing transaction volume, repetitive effort, process stability, delays, error rates, number of hand offs, rule clarity, system availability, data quality and exception frequency. Processes with high business value and sufficient standardisation generally make the strongest candidates.",
          },
        },
        {
          "@type": "Question",
          name: "What does data readiness mean in an automation assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whether the information needed to run an automated workflow is available, structured, reliable and accessible from the relevant systems. Poor quality or fragmented data usually needs fixing before automation can be expected to run consistently.",
          },
        },
        {
          "@type": "Question",
          name: "How are automation opportunities prioritised?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By scoring them on expected business value, technical feasibility, data readiness, standardisation, risk, integration effort and change impact, giving management an objective basis to compare opportunities and decide what to tackle first.",
          },
        },
        {
          "@type": "Question",
          name: "What if a process is not actually ready to be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Then it should not be automated immediately. Not every inefficient process is a good automation candidate. If a workflow is unclear, highly inconsistent, or dependent on unnecessary manual steps, process redesign and standardisation usually needs to happen first, before automation gets layered on top of a broken process.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide between workflow automation, RPA and AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The technology should follow the process, not the other way round. Structured workflows may suit workflow tools or APIs, repetitive interface based tasks may suit RPA, document heavy processes may need document processing, and workflows involving unstructured information or reasoning may be better served by AI or agentic automation.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Proof of Value in an automation roadmap?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A controlled pilot designed to test whether a selected automation opportunity can deliver its expected outcome before wider deployment. It validates process assumptions, integrations, controls, data readiness and business benefits using representative information, rather than assuming success upfront.",
          },
        },
        {
          "@type": "Question",
          name: "What does an automation roadmap actually include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prioritised opportunities, implementation waves, recommended pilots, process owners, solution options, architecture principles, expected business benefits, control requirements and change governance considerations, all laid out so leadership can see the full sequence rather than one automation at a time.",
          },
        },
        {
          "@type": "Question",
          name: "How do you measure the potential ROI of an automation opportunity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through measures such as manual hours saved, cycle time reduction, lower error rates, faster response times, reduced process leakage, improved control effectiveness and avoided capacity requirements, with the specific measures depending on the process being evaluated.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's automation opportunity assessment process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It starts by interviewing process owners and reviewing representative workflows. Current effort, risk and performance are then quantified, opportunities scored against defined criteria, target outcomes established, and suitable pilots selected to build a prioritised implementation roadmap.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical assessment take before we get a roadmap?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on how many functions and processes are in scope, a single function assessment can move relatively quickly, while a cross functional review covering finance, sales and operations together naturally takes longer to interview stakeholders and quantify baselines properly across the board.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://contetra.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Agentic AI & Process Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Automation Opportunity Assessment & Roadmap",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
        },
      ],
    },
  ],
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="min-h-screen overflow-x-hidden">
      <JsonLd data={structuredData} />

      {children}

    </section>
  );
}
