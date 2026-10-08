import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `ERP and Process Transformation Services | Contetra`,
  description: `Process transformation helps unlock a more productive way of working. Contetra's ERP and process transformation services help growing and established businesses move away from spreadsheet-led, people-dependent operations and towards a documented, controlled and system-supported way of working.`,
  alternates: {
    canonical:
      "https://contetra.com/services/digital-transformation/erp-and-process-transformation",
  },
  openGraph: {
    title: `ERP and Process Transformation Services | Contetra`,
    description: `Move from manual effort to SOP-driven, AI-ready operations with Contetra's ERP functional consulting, process and SOP design, and governed automation.`,
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
      "@id":
        "https://contetra.com/services/digital-transformation/erp-and-process-transformation#service",
      name: "ERP and Process Transformation Services",
      url: "https://contetra.com/services/digital-transformation/erp-and-process-transformation",
      description:
        "Contetra helps growing and established businesses move from spreadsheet-led, people-dependent operations to documented, controlled and system-supported operations, combining ERP functional consulting, process and SOP design, and governed automation.",
      serviceType: [
        "ERP Strategy and Selection",
        "ERP Implementation",
        "Process Design and SOP Documentation",
        "ERP Diagnostic Review and Health Check",
        "ERP Project Rescue and Post-Go-Live Optimisation",
        "Implementation PMO and Functional Consulting",
        "Process Automation and AI Enablement",
      ],
      category: "ERP Consulting and Process Transformation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Business owners, founders, CFOs, finance leaders, operations leaders and growing businesses moving from manual to system-supported operations",
      },
      isRelatedTo: {
        "@type": "Service",
        name: "ERP Implementation and Diagnostic Review",
        url: "https://contetra.com/services/digital-transformation",
      },
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id":
        "https://contetra.com/services/digital-transformation/erp-and-process-transformation#webpage",
      url: "https://contetra.com/services/digital-transformation/erp-and-process-transformation",
      name: "ERP and Process Transformation Services That Move Your Business from Manual Effort to SOP-Driven, AI-Ready Operations",
      description:
        "ERP and process transformation services combining ERP functional consulting, process and SOP design and governed automation, so operations become documented, controlled and ready to scale.",
      inLanguage: "en-IN",
      about: {
        "@id":
          "https://contetra.com/services/digital-transformation/erp-and-process-transformation#service",
      },
      breadcrumb: {
        "@id":
          "https://contetra.com/services/digital-transformation/erp-and-process-transformation#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ERP and process transformation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is the work of redesigning how a business operates and then supporting those processes with the right system and automation. It combines ERP functional consulting, process and SOP design, and governed automation, so operations become documented, controlled and efficient rather than manual and people-dependent.",
          },
        },
        {
          "@type": "Question",
          name: "How is process transformation different from just implementing an ERP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An ERP implementation configures software. Process transformation first defines how the business should operate, documents it as standard operating procedures, and then uses the ERP and automation to support it. Without the process work, an ERP often just digitises existing inefficiencies.",
          },
        },
        {
          "@type": "Question",
          name: "We already have an ERP. Do we still need this?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often, yes. Many businesses have a live ERP that the team still works around, with processes on spreadsheets, reports that do not reconcile and low user confidence. An ERP diagnostic review identifies whether the issue is process, configuration, data, controls, reporting, governance or adoption, and what to fix first.",
          },
        },
        {
          "@type": "Question",
          name: "What does an ERP diagnostic review include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It examines your process and system usage, configuration and data, controls and reporting, and governance and adoption together. You receive a prioritised roadmap that separates quick stabilisation from process and control corrections, configuration improvements, data work and longer-term platform decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Can you rescue an ERP project that has stalled or gone over budget?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our project rescue work reviews scope, governance, requirements, data, design, testing and partner performance, then sets out a realistic recovery plan with clear decisions, ownership and milestones before more time or cost is committed.",
          },
        },
        {
          "@type": "Question",
          name: "Which ERP platforms do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are platform-agnostic and can advise across SAP S/4HANA and Business One, Microsoft Dynamics 365, Oracle Fusion Cloud and E-Business Suite, Oracle NetSuite, Odoo and ERPNext or Frappe, and other mid-market and industry platforms. We also work with connected systems such as CRM, HRMS, WMS, banking, tax, reporting and workflow tools.",
          },
        },
        {
          "@type": "Question",
          name: "Why do standard operating procedures matter for automation and AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automation and AI can only be applied safely to processes that are documented, consistent and controlled. SOPs define the steps, rules, roles and exceptions, which becomes the foundation for both workflow automation and governed AI agents. Without SOPs, automation tends to speed up an unreliable process.",
          },
        },
        {
          "@type": "Question",
          name: "How does AI fit into process transformation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once processes are documented and controlled, we introduce automation for the repeatable, high-effort steps and add governed AI agents for tasks such as data gathering, matching, drafting, monitoring and routing. Human approval controls remain in place for material actions, so you gain speed without losing control.",
          },
        },
        {
          "@type": "Question",
          name: "Are you an implementation partner or an independent consultant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are an independent functional and process partner. An implementation partner configures and deploys the platform. We help you define requirements, govern the design, challenge trade-offs and protect the business outcome. We collaborate with your implementation partner rather than replace them.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best way to start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a broad or unclear situation, start with an ERP diagnostic review. It creates an independent fact base, identifies quick wins and defines a prioritised roadmap before you commit to a larger programme. Where the need is clearer, an ERP program consultation is the right first step.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an ERP and process transformation engagement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on scope, business complexity, data quality and the availability of internal owners. A diagnostic review is a short, focused engagement, while a full implementation or automation programme runs over a longer period with defined phases. We scope the timeline with you after the initial review.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support businesses outside Mumbai and India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We are based in Mumbai and work with promoter-led, growth-stage, multi-entity and global businesses. Our process and system work applies across locations, and we also address India-specific requirements such as GST, TDS and audit-trail rules where relevant.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://contetra.com/services/digital-transformation/erp-and-process-transformation#breadcrumb",
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
          name: "Digital Transformation",
          item: "https://contetra.com/services/digital-transformation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ERP and Process Transformation",
          item: "https://contetra.com/services/digital-transformation/erp-and-process-transformation",
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
