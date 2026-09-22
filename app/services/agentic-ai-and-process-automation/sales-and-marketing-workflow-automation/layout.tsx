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
      name: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation#service",
      name: "Sales and Marketing Workflow Automation",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
      description:
        "Sales and marketing workflow automation services covering lead capture, enrichment, qualification, scoring and routing, CRM updates, meeting follow-ups, campaign workflows, pipeline hygiene, conversion analysis and revenue reporting.",
      serviceType: "Sales and Marketing Workflow Automation Services",
      category: "Sales Automation, Marketing Automation and Business Process Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Business owners, sales leaders, marketing leaders, revenue operations teams and organisations seeking to automate sales and marketing workflows",
      },
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
          name: "Agentic AI and Process Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sales and Marketing Workflow Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
      name: "Sales and Marketing Automation That Improves Follow-Through and Data Quality",
      description:
        "Sales and marketing workflow automation designed to improve lead response, CRM data quality, follow-up discipline, campaign execution and revenue reporting while maintaining appropriate customer-facing controls.",
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
            text: "Sales and marketing workflow automation uses technology, integrations and AI to reduce repetitive manual work across lead management, CRM updates, campaign execution, follow-ups and reporting. The objective is to improve response times, data quality and follow-through while keeping appropriate human review for customer-facing activities.",
          },
        },
        {
          "@type": "Question",
          name: "Which sales processes can be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sales workflows that can be automated include lead capture, enrichment, qualification, deduplication, scoring, routing, meeting preparation, meeting-note processing, CRM updates, follow-up reminders, proposal workflows and pipeline monitoring.",
          },
        },
        {
          "@type": "Question",
          name: "Can lead capture and lead routing be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Leads from forms, campaigns, email or other approved sources can be captured automatically, enriched with available data, checked for duplicates, qualified and routed to the appropriate sales representative based on predefined business rules.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI help qualify and score sales leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI and workflow automation can use defined criteria and available business data to support lead classification, prioritisation and scoring. The scoring logic should be aligned with the company's sales process and periodically reviewed against actual conversion results.",
          },
        },
        {
          "@type": "Question",
          name: "Can sales automation update our CRM automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Workflow automation can update approved CRM fields, create activities, assign leads, record meeting information and trigger follow-up tasks. The level of automation depends on the CRM's integration capabilities, permissions and the controls defined by the business.",
          },
        },
        {
          "@type": "Question",
          name: "Can meeting notes and follow-up activities be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI can help summarise meeting notes, extract action items, identify commitments and prepare draft follow-up communication. Workflow automation can then update the CRM and create tasks, while customer-facing messages can remain subject to human review where appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "Can marketing campaign workflows be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Marketing workflows can include campaign briefs, content preparation, approval routing, asset tracking, lead hand-off, campaign-status monitoring and recurring reporting. Automation helps reduce manual coordination while maintaining ownership and approval controls.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI automatically send sales and marketing messages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI can help draft and personalise messages using approved information, but customer-facing communication should be governed by clear rules and appropriate review. The objective should be better and faster follow-through rather than uncontrolled or low-quality automated outreach.",
          },
        },
        {
          "@type": "Question",
          name: "Does sales and marketing automation replace our CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Automation normally works with the CRM rather than replacing it. It can connect forms, email, research tools, spreadsheets and other systems with the CRM so that information moves automatically and sales teams spend less time on manual updates.",
          },
        },
        {
          "@type": "Question",
          name: "How can workflow automation improve CRM data quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automation can standardise required fields, detect duplicate records, enrich incomplete information, trigger missing-data alerts and ensure that key activities are recorded consistently. This can improve the reliability of pipeline and revenue reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Can revenue and pipeline reporting be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automated workflows can support pipeline hygiene, conversion analysis, forecast inputs, campaign-performance reporting and exception alerts. The quality of the output depends on the underlying CRM data, workflow discipline and reporting definitions.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide which sales or marketing workflow to automate first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best starting point is usually a workflow with high manual effort, repeated hand-offs, slow response times, poor data quality or inconsistent follow-up. Contetra maps the existing process, identifies bottlenecks and determines where automation can create measurable improvement.",
          },
        },
        {
          "@type": "Question",
          name: "What metrics should be tracked after sales workflow automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Relevant metrics can include lead-response time, task completion, CRM-data completeness, lead-to-opportunity conversion, follow-up completion, pipeline accuracy and campaign performance. The appropriate measures should be agreed before implementation so that the impact of automation can be evaluated.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's sales and marketing automation implementation process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra first maps the lead-to-opportunity or campaign workflow. Data requirements, decisions, approvals and customer-facing controls are then defined. Appropriate internal steps are automated while human review is retained where needed, followed by ongoing tracking of response time, completion, conversion and data quality.",
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
