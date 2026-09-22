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
      name: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap#service",
      name: "Automation Opportunity Assessment and Roadmap",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
      description:
        "Automation opportunity assessment and roadmap services covering process inventory, pain-point assessment, opportunity scoring, automation feasibility, data readiness, solution options, pilot selection, business benefits, controls and implementation roadmap development.",
      serviceType: "Automation Opportunity Assessment and Roadmap Services",
      category: "Business Process Automation and AI Automation Consulting",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Business owners, CFOs, functional leaders, transformation teams and organisations evaluating AI and business process automation opportunities",
      },
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
          name: "Agentic AI and Process Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Automation Opportunity Assessment and Roadmap",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
      name: "Automation Opportunity Assessment and Roadmap",
      description:
        "Identify, score and prioritise automation opportunities across business functions based on value, feasibility, data readiness, risk and implementation effort before selecting tools or platforms.",
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
            text: "An automation opportunity assessment is a structured review of business processes to identify where automation can create meaningful value. It evaluates factors such as manual effort, process volume, delays, errors, hand-offs, systems, controls, data availability and dependency on individual knowledge before recommending which opportunities should be prioritised.",
          },
        },
        {
          "@type": "Question",
          name: "Why should we conduct an automation assessment before selecting tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selecting a technology platform before understanding the business process can lead to automating the wrong activities or creating additional complexity. An assessment helps determine the business problem, expected outcome, process readiness, control requirements and technical feasibility before choosing AI, workflow automation, RPA or other tools.",
          },
        },
        {
          "@type": "Question",
          name: "Which business functions can be included in the assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The assessment can cover processes across finance, accounting, sales, marketing, operations, procurement, project management and other business functions. The objective is to compare opportunities across functions and build a prioritised automation portfolio rather than evaluating ideas in isolation.",
          },
        },
        {
          "@type": "Question",
          name: "How do you identify processes that are suitable for automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Processes are reviewed for factors such as transaction volume, repetitive effort, process stability, delays, error rates, number of hand-offs, rule clarity, system availability, data quality and exception frequency. Processes with high business value and sufficient standardisation are generally stronger automation candidates.",
          },
        },
        {
          "@type": "Question",
          name: "How are automation opportunities prioritised?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automation opportunities can be scored based on expected business value, technical feasibility, data readiness, standardisation, risk, integration effort and change impact. This helps management compare different opportunities objectively and decide which processes should be addressed first.",
          },
        },
        {
          "@type": "Question",
          name: "What does data readiness mean in an automation assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Data readiness refers to whether the information required to run an automated workflow is available, structured, reliable and accessible from the relevant systems. Poor-quality or fragmented data may need to be addressed before automation can operate consistently.",
          },
        },
        {
          "@type": "Question",
          name: "What if a process is not ready to be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not every inefficient process should be automated immediately. If the workflow is unclear, highly inconsistent or dependent on unnecessary manual steps, process redesign and standardisation may be recommended before introducing automation.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide between workflow automation, RPA and AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The technology should follow the process requirement. Structured workflows may be suited to workflow tools or APIs, repetitive interface-based tasks may use RPA, document-heavy processes may require document processing, and workflows involving unstructured information or reasoning may benefit from AI or agentic automation.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Proof of Value in an automation roadmap?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Proof of Value is a controlled pilot designed to test whether a selected automation opportunity can deliver the expected outcome before broader deployment. It helps validate process assumptions, integrations, controls, data readiness and business benefits using representative information.",
          },
        },
        {
          "@type": "Question",
          name: "What does an automation roadmap include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An automation roadmap can include prioritised opportunities, implementation waves, recommended pilots, process owners, solution options, architecture principles, expected business benefits, control requirements and change-governance considerations.",
          },
        },
        {
          "@type": "Question",
          name: "How do you measure the potential ROI of an automation opportunity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Potential benefits can be assessed using measures such as manual hours saved, cycle-time reduction, lower error rates, faster response times, reduced process leakage, improved control effectiveness and avoided capacity requirements. The appropriate measures depend on the process being evaluated.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's automation opportunity assessment process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra begins by interviewing process owners and reviewing representative workflows. Current effort, risk and performance are then quantified, opportunities are scored against defined criteria, target outcomes are established, and suitable pilots are selected to create a prioritised implementation roadmap.",
          },
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
