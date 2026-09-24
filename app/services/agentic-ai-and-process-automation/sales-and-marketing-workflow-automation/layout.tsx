import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Sales & Marketing Workflow Automation | CRM Automation | Contetra`,
  description: `Sales and marketing workflow automation that improves follow-through and CRM data quality — lead operations, sales execution and revenue reporting.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
  },
  openGraph: {
    title: `Stop Losing Leads in a Messy CRM | Contetra`,
    description: `Sales and marketing automation that improves follow-through and CRM data quality lead operations, sales execution and revenue reporting.`,
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
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation#service",
      name: "Sales and Marketing Workflow Automation",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
      description: "Contetra helps revenue teams automate lead management, CRM updates, meeting follow-ups, campaign workflows, pipeline reporting and recurring sales and marketing operations using workflow automation, integrations and AI while retaining appropriate human review for customer-facing activities.",
      serviceType: [
        "Sales Workflow Automation",
        "Marketing Workflow Automation",
        "CRM Automation",
        "Lead Capture Automation",
        "Lead Enrichment and Qualification",
        "Lead Scoring and Routing",
        "Sales Follow-Up Automation",
        "Meeting Notes and Action Automation",
        "CRM Data Quality Automation",
        "Campaign Workflow Automation",
        "Pipeline Reporting Automation",
        "Revenue Operations Automation",
      ],
      category: "Agentic AI and Revenue Workflow Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Sales Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Marketing Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Revenue Operations Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Business Owners",
        },
        {
          "@type": "Audience",
          audienceType: "CRM and Digital Transformation Teams",
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
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
      name: "Sales and Marketing Workflow Automation | CRM Automation | Contetra",
      description: "Sales and marketing workflow automation covering lead capture, qualification, CRM updates, meeting follow-ups, campaign operations, pipeline reporting and human-controlled customer communication.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is sales and marketing workflow automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sales and marketing workflow automation uses technology, integrations and AI to reduce repetitive manual work across lead management, CRM updates, campaign execution, follow ups and reporting, with the goal of improving response times, data quality and follow through while keeping appropriate human review for customer facing activities.",
          },
        },
        {
          "@type": "Question",
          name: "Which sales processes can be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lead capture, enrichment, qualification, deduplication, scoring, routing, meeting preparation, meeting note processing, CRM updates, follow up reminders, proposal workflows and pipeline monitoring.",
          },
        },
        {
          "@type": "Question",
          name: "Can lead capture and lead routing be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Leads from forms, campaigns, email or other approved sources can be captured automatically, enriched with available data, checked for duplicates, qualified and routed to the right sales representative based on predefined business rules.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI help qualify and score sales leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI and workflow automation can use defined criteria and available business data to support lead classification, prioritisation and scoring, with the scoring logic aligned to the company's sales process and periodically reviewed against actual conversion results.",
          },
        },
        {
          "@type": "Question",
          name: "Can sales automation update our CRM automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This can include updating approved CRM fields, creating activities, assigning leads, recording meeting information and triggering follow up tasks, with the level of automation depending on the CRM's integration capabilities, permissions and the controls the business defines.",
          },
        },
        {
          "@type": "Question",
          name: "Can meeting notes and follow up activities be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI can help summarise meeting notes, extract action items, identify commitments and prepare draft follow up communication, while workflow automation updates the CRM and creates tasks. Customer facing messages can still stay subject to human review where appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "Can marketing campaign workflows be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This can include campaign briefs, content preparation, approval routing, asset tracking, lead hand off, campaign status monitoring and recurring reporting, reducing manual coordination while keeping ownership and approval controls intact.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI automatically send sales and marketing messages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI can help draft and personalise messages using approved information, but customer facing communication should still be governed by clear rules and appropriate review. The goal is better, faster follow through, not uncontrolled or low quality automated outreach.",
          },
        },
        {
          "@type": "Question",
          name: "Does sales and marketing automation replace our CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Automation normally works alongside the CRM rather than replacing it, connecting forms, email, research tools, spreadsheets and other systems so information moves automatically and sales teams spend less time on manual updates.",
          },
        },
        {
          "@type": "Question",
          name: "How can workflow automation improve CRM data quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By standardising required fields, detecting duplicate records, enriching incomplete information, triggering missing data alerts and ensuring key activities are recorded consistently, which in turn improves the reliability of pipeline and revenue reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Can revenue and pipeline reporting be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This can include pipeline hygiene, conversion analysis, forecast inputs, campaign performance reporting and exception alerts, with the quality of the output depending on the underlying CRM data, workflow discipline and reporting definitions.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide which sales or marketing workflow to automate first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best starting point is usually a workflow with high manual effort, repeated hand offs, slow response times, poor data quality or inconsistent follow up. Contetra maps the existing process, identifies bottlenecks and determines where automation can create measurable improvement.",
          },
        },
        {
          "@type": "Question",
          name: "What metrics should be tracked after sales workflow automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lead response time, task completion, CRM data completeness, lead to opportunity conversion, follow up completion, pipeline accuracy and campaign performance, agreed before implementation so the impact of automation can actually be measured.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's sales and marketing automation implementation process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra first maps the lead to opportunity or campaign workflow. Data requirements, decisions, approvals and customer facing controls are then defined. Appropriate internal steps are automated while human review is retained where needed, followed by ongoing tracking of response time, completion, conversion and data quality.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation#breadcrumb",
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
          name: "Sales & Marketing Workflow Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
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
