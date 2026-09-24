import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `ERP Implementation PMO & Functional Consulting | Contetra`,
  description: `Independent ERP PMO and functional consulting to govern requirements, testing, cutover and go-live, keeping the business in control of design decisions.`,
   alternates: {
    canonical: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
  },
  openGraph: {
    title: `ERP Implementation PMO & Functional Consulting | Contetra`,
    description: `Independent ERP PMO and functional consulting to govern requirements, testing, cutover and go-live, keeping the business in control of design decisions.`,
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
      "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#service",
      name: "ERP Implementation PMO and Functional Consulting",
      url: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
      description: "Contetra provides independent ERP implementation PMO and functional consulting support to help businesses govern ERP programmes, define requirements, map processes, manage risks, coordinate stakeholders, support data migration and UAT, plan cutover and maintain business accountability throughout implementation.",
      serviceType: [
        "ERP Implementation PMO",
        "ERP Functional Consulting",
        "ERP Programme Governance",
        "Business Requirements Documentation",
        "AS IS and TO BE Process Mapping",
        "ERP Functional Design Review",
        "ERP Data Migration Governance",
        "ERP UAT Planning and Governance",
        "ERP Risk and Issue Management",
        "ERP Change Management",
        "ERP Cutover Planning",
        "Post-Go-Live Stabilisation",
      ],
      category: "ERP Consulting and Digital Transformation",
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
          audienceType: "CFOs",
        },
        {
          "@type": "Audience",
          audienceType: "Finance Heads",
        },
        {
          "@type": "Audience",
          audienceType: "ERP Programme Sponsors",
        },
        {
          "@type": "Audience",
          audienceType: "Process Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Project Management Teams",
        },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
      },
      isRelatedTo: {
        "@type": "Service",
        name: "ERP Implementation and Diagnostic Review",
        url: "https://contetra.com/services/digital-transformation",
      },
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#webpage",
      url: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
      name: "ERP Implementation PMO and Functional Consulting | Contetra",
      description: "ERP implementation PMO and functional consulting services covering business requirements, process design, programme governance, data migration, UAT, risk management, change management, cutover and post-go-live support.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ERP implementation PMO support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP implementation PMO support helps businesses manage ERP projects through structured governance, milestone tracking, risk management, issue escalation, stakeholder coordination, scope control and overall implementation accountability, so the project stays on track from the business side, not just the technical side.",
          },
        },
        {
          "@type": "Question",
          name: "What is ERP functional consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP functional consulting translates real business processes into ERP workflows, roles, controls and reports. It ensures the system gets configured around how the business actually operates, rather than being driven purely by technical or default settings.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between an ERP implementation partner and an ERP PMO consultant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An ERP implementation partner typically configures and deploys the system itself. An ERP PMO consultant sits on the business side, helping govern the project, define requirements, track ownership, manage timelines, review risks and make sure business objectives do not get lost in the technical rollout.",
          },
        },
        {
          "@type": "Question",
          name: "Why do businesses need ERP PMO support during implementation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP projects involve multiple departments, vendors, decisions and dependencies running in parallel. Without strong governance, this usually shows up as delays, unclear ownership, scope creep, weak testing and poor user adoption once the system goes live.",
          },
        },
        {
          "@type": "Question",
          name: "What does ERP functional consulting typically include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AS IS and TO BE process mapping, BRD preparation, module requirement definition, approval workflow design, reporting requirement documentation, master data review, UAT scenario preparation and resolution of functional issues as they come up.",
          },
        },
        {
          "@type": "Question",
          name: "How does Contetra support ERP implementation projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through business requirement documentation, process mapping, functional design review, implementation PMO, stakeholder coordination, UAT planning, data readiness review, risk tracking, change management and support after go live.",
          },
        },
        {
          "@type": "Question",
          name: "How does ERP PMO actually reduce implementation risk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By creating clarity where ambiguity usually causes problems, project scope, decision ownership, milestones, open issues, dependencies, change requests, testing responsibilities, escalation routes and go live readiness are all tracked and owned, rather than left informal.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work alongside our existing ERP implementation partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra represents the business side of the project, reviewing functional requirements, coordinating decisions, tracking risks, supporting UAT, reviewing reporting needs and helping management keep the implementation aligned with actual business outcomes rather than just technical milestones.",
          },
        },
        {
          "@type": "Question",
          name: "When should a business bring in ERP PMO and functional consultants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally before implementation starts, or as soon as the project shows signs of unclear requirements, multiple departments pulling in different directions, delayed decisions, weak governance, UAT struggles, data migration concerns, or poor coordination between the business and the implementation team.",
          },
        },
        {
          "@type": "Question",
          name: "Which ERP systems can Contetra support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra provides ERP agnostic PMO and functional consulting support across platforms such as SAP, SAP Business One, SAP S/4HANA, Microsoft Dynamics 365, Business Central, Oracle, NetSuite, Odoo, ERPNext, Zoho and other mid market or enterprise ERP systems.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra get involved in ERP vendor selection as well?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This is typically scoped separately from PMO and functional consulting, but is worth confirming directly, since some businesses prefer to bring in support even earlier, at the stage of evaluating and selecting the right ERP system and implementation partner.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#breadcrumb",
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
          name: "ERP Implementation PMO & Functional Consulting",
          item: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
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
