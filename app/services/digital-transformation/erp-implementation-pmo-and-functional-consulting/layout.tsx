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
      "@id": "https://contetra.com#organization",
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://contetra.com#logo",
        url: "https://contetra.com/assets/images/logo/contetra-main-logo.png",
      },
      image: {
        "@id": "https://contetra.com#logo",
      },
      description:
        "Contetra Private Limited is a finance transformation consulting firm offering ERP implementation consulting, ERP PMO, functional consulting, Virtual CFO, FP&A, technical accounting advisory, IPO readiness, offshore accounting and AI-enabled automation services.",
      email: "growth@contetra.com",
      telephone: "+91 98338 18857",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "225, 2nd floor, Swastik Disa Corporate Park, LBS Road, Opposite Rajhans Cinemas, Ghatkopar West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400086",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
      sameAs: ["https://www.linkedin.com/company/contetra-private-limited"],
    },
    {
      "@type": "WebSite",
      "@id": "https://contetra.com#website",
      url: "https://contetra.com",
      name: "Contetra",
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://contetra.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#webpage",
      url: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
      name: "ERP Implementation PMO and Functional Consulting Services | Contetra",
      description:
        "Manage ERP implementation with structured PMO, functional consulting, process design, BRD support, UAT planning, risk tracking and business-side governance.",
      isPartOf: {
        "@id": "https://contetra.com#website",
      },
      about: {
        "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#service",
      },
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#breadcrumb",
      },
      mainEntity: {
        "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#service",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#service",
      name: "ERP Implementation PMO and Functional Consulting Services",
      alternateName: [
        "ERP Implementation PMO",
        "ERP Functional Consulting Services",
        "ERP Functional Consultants",
        "ERP Implementation Governance",
        "ERP Business Process Consulting",
        "ERP UAT Support",
        "ERP BRD Support",
        "ERP Implementation Advisory",
      ],
      serviceType: "ERP Implementation PMO and Functional Consulting",
      provider: {
        "@id": "https://contetra.com#organization",
      },
      url: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
      description:
        "Contetra helps businesses manage ERP implementation through PMO support, functional consulting, business requirement documentation, process design, data readiness, UAT planning, stakeholder coordination, risk tracking and go-live readiness.",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Business owners, founders, CFOs, finance leaders, operations leaders, IT leaders and ERP transformation teams",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#offercatalog",
        name: "ERP Implementation PMO and Functional Consulting Scope",
        itemListElement: [
          {
            "@type": "Offer",
            name: "ERP Implementation PMO",
            itemOffered: {
              "@type": "Service",
              name: "ERP Implementation PMO",
              description:
                "Structured governance support for ERP implementation including project planning, milestone tracking, risk management, issue escalation, dependency tracking and management reporting.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Functional Consulting",
            itemOffered: {
              "@type": "Service",
              name: "ERP Functional Consulting",
              description:
                "Business-side functional consulting to translate finance, procurement, inventory, sales, manufacturing and reporting requirements into ERP workflows and controls.",
            },
          },
          {
            "@type": "Offer",
            name: "Business Requirement Documentation",
            itemOffered: {
              "@type": "Service",
              name: "Business Requirement Documentation",
              description:
                "Preparation and review of BRDs, process notes, functional requirements, reporting needs, workflow requirements and business sign-off documentation.",
            },
          },
          {
            "@type": "Offer",
            name: "Process Mapping and Solution Review",
            itemOffered: {
              "@type": "Service",
              name: "Process Mapping and Solution Review",
              description:
                "AS-IS and TO-BE process mapping, solution walkthrough review, functional fit assessment, customization challenge and alignment of ERP design with business processes.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Data Readiness Review",
            itemOffered: {
              "@type": "Service",
              name: "ERP Data Readiness Review",
              description:
                "Review of master data, chart of accounts, item masters, customer and vendor records, opening balances, migration templates and data validation responsibilities.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP UAT Planning and Support",
            itemOffered: {
              "@type": "Service",
              name: "ERP UAT Planning and Support",
              description:
                "Support for UAT scenario design, test scripts, issue tracking, business validation, user sign-off, defect prioritisation and go-live readiness assessment.",
            },
          },
          {
            "@type": "Offer",
            name: "Stakeholder Coordination and Decision Tracking",
            itemOffered: {
              "@type": "Service",
              name: "Stakeholder Coordination and Decision Tracking",
              description:
                "Coordination between management, process owners, implementation partner, IT team and finance users to ensure timely decisions, clear ownership and issue resolution.",
            },
          },
          {
            "@type": "Offer",
            name: "Go-Live Readiness and Hypercare Support",
            itemOffered: {
              "@type": "Service",
              name: "Go-Live Readiness and Hypercare Support",
              description:
                "Assessment of readiness before go-live and support during hypercare to resolve issues, stabilise processes, improve adoption and track post-go-live fixes.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ERP implementation PMO support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP implementation PMO support helps businesses manage ERP projects through structured governance, milestone tracking, risk management, issue escalation, stakeholder coordination, scope control and implementation accountability.",
          },
        },
        {
          "@type": "Question",
          name: "What is ERP functional consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP functional consulting translates business processes into ERP workflows, roles, controls, reports and system requirements. It helps ensure that the ERP is configured around real business needs rather than only technical settings.",
          },
        },
        {
          "@type": "Question",
          name: "Why do businesses need ERP PMO during implementation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Businesses need ERP PMO support because ERP projects involve multiple departments, vendors, decisions, dependencies and timelines. Without strong governance, projects can face delays, unclear ownership, scope creep, poor testing and weak user adoption.",
          },
        },
        {
          "@type": "Question",
          name: "How does Contetra support ERP implementation projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra supports ERP implementation through business requirement documentation, process mapping, functional design review, implementation PMO, stakeholder coordination, UAT planning, data readiness review, risk tracking, change management and post-go-live support.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work alongside our existing ERP implementation partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can work alongside your ERP implementation partner by representing the business side, reviewing functional requirements, coordinating decisions, tracking risks, supporting UAT, reviewing reporting needs and helping management ensure the implementation remains aligned with business outcomes.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between ERP implementation partner and ERP PMO consultant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An ERP implementation partner usually configures and deploys the ERP system, while an ERP PMO consultant helps the business govern the project, define requirements, track responsibilities, manage timelines, review risks and ensure that business objectives are not lost during implementation.",
          },
        },
        {
          "@type": "Question",
          name: "What does ERP functional consulting include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP functional consulting may include AS-IS and TO-BE process mapping, BRD preparation, module requirement definition, approval workflow design, reporting requirement documentation, master-data review, UAT scenario preparation and functional issue resolution.",
          },
        },
        {
          "@type": "Question",
          name: "How does ERP PMO reduce implementation risk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP PMO reduces implementation risk by creating clarity on project scope, decision ownership, milestones, open issues, dependencies, change requests, testing responsibilities, escalation routes and go-live readiness.",
          },
        },
        {
          "@type": "Question",
          name: "When should a business involve ERP PMO and functional consultants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A business should involve ERP PMO and functional consultants before implementation begins or when the project has unclear requirements, multiple departments, delayed decisions, weak governance, UAT challenges, data migration concerns or poor coordination between business and implementation teams.",
          },
        },
        {
          "@type": "Question",
          name: "Which ERP systems can Contetra support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra can provide ERP-agnostic PMO and functional consulting support across platforms such as SAP, SAP Business One, SAP S/4HANA, Microsoft Dynamics 365, Business Central, Oracle, NetSuite, Odoo, ERPNext, Zoho and other mid-market or enterprise ERP systems.",
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
          item: "https://contetra.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://contetra.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Digital Transformation",
          item: "https://contetra.com/services/digital-transformation",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "ERP Implementation PMO and Functional Consulting",
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
