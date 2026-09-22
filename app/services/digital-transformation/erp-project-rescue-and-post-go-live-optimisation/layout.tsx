import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `ERP Project Rescue & Post-Go-Live Optimisation | Contetra`,
  description: `Recover delayed or underperforming ERP projects with Contetra’s ERP rescue and post-go-live optimisation services for stronger adoption and business outcomes.`,
   alternates: {
    canonical: "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation",
  },
  openGraph: {
    title: `ERP Project Rescue & Post-Go-Live Optimisation | Contetra`,
    description: `Recover delayed or underperforming ERP projects with Contetra's ERP rescue and post-go-live optimisation services for stronger adoption and business outcomes`,
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
        "Contetra Private Limited is a finance transformation consulting firm offering ERP implementation consulting, ERP project rescue, post-go-live optimisation, Virtual CFO, FP&A, technical accounting advisory, IPO readiness, offshore accounting and AI-enabled automation services.",
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
      "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#webpage",
      url: "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation",
      name: "ERP Project Rescue and Post-Go-Live Optimisation Services | Contetra",
      description:
        "Rescue delayed ERP projects, stabilise post-go-live issues, improve adoption, fix reporting gaps and recover ERP ROI with Contetra’s ERP project rescue and optimisation support.",
      isPartOf: {
        "@id": "https://contetra.com#website",
      },
      about: {
        "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#service",
      },
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#breadcrumb",
      },
      mainEntity: {
        "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#service",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#service",
      name: "ERP Project Rescue and Post-Go-Live Optimisation Services",
      alternateName: [
        "ERP Project Rescue",
        "ERP Rescue Services",
        "ERP Post-Go-Live Optimisation",
        "ERP Stabilisation Support",
        "ERP Diagnostic Review",
        "ERP Health Check",
        "ERP Implementation Recovery",
        "ERP ROI Improvement",
      ],
      serviceType: "ERP Project Rescue and Post-Go-Live Optimisation",
      provider: {
        "@id": "https://contetra.com#organization",
      },
      url: "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation",
      description:
        "Contetra helps businesses rescue delayed or underperforming ERP projects, stabilise post-go-live issues, identify root causes, improve reporting, strengthen controls, reduce workarounds and recover ERP ROI.",
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
        "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#offercatalog",
        name: "ERP Project Rescue and Post-Go-Live Optimisation Scope",
        itemListElement: [
          {
            "@type": "Offer",
            name: "ERP Project Health Check",
            itemOffered: {
              "@type": "Service",
              name: "ERP Project Health Check",
              description:
                "Independent review of ERP project status, scope, delays, unresolved risks, governance issues, business readiness and implementation partner alignment.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Root-Cause Analysis",
            itemOffered: {
              "@type": "Service",
              name: "ERP Root-Cause Analysis",
              description:
                "Assessment of why the ERP project is underperforming, including process gaps, configuration fit, unclear ownership, data issues, UAT defects, adoption challenges and reporting gaps.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Recovery Roadmap",
            itemOffered: {
              "@type": "Service",
              name: "ERP Recovery Roadmap",
              description:
                "Prioritised recovery plan covering stabilisation actions, process corrections, configuration improvements, data clean-up, reporting fixes, ownership decisions and implementation milestones.",
            },
          },
          {
            "@type": "Offer",
            name: "Post-Go-Live Stabilisation",
            itemOffered: {
              "@type": "Service",
              name: "Post-Go-Live Stabilisation",
              description:
                "Support for resolving post-go-live issues, reducing user confusion, fixing process gaps, improving reporting reliability, managing open defects and strengthening adoption.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Reporting and MIS Optimisation",
            itemOffered: {
              "@type": "Service",
              name: "ERP Reporting and MIS Optimisation",
              description:
                "Improvement of ERP-generated reports, MIS dashboards, financial reporting, sub-ledger reconciliation, inventory visibility and management information quality.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Controls and Process Remediation",
            itemOffered: {
              "@type": "Service",
              name: "ERP Controls and Process Remediation",
              description:
                "Review and correction of ERP workflows, approval controls, segregation of duties, audit trails, compliance requirements, master-data governance and operating discipline.",
            },
          },
          {
            "@type": "Offer",
            name: "User Adoption and Change Support",
            itemOffered: {
              "@type": "Service",
              name: "User Adoption and Change Support",
              description:
                "Support for role clarity, user training, SOPs, adoption tracking, issue escalation and reduction of offline spreadsheets, manual workarounds and parallel processes.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP ROI Improvement",
            itemOffered: {
              "@type": "Service",
              name: "ERP ROI Improvement",
              description:
                "Identification of unused functionality, automation opportunities, process improvements, reporting enhancements and measurable outcomes to improve ERP return on investment.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ERP project rescue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP project rescue is a structured review and recovery approach for ERP implementations that are delayed, over-budget, poorly adopted or not aligned with business requirements. It helps identify root causes, prioritise fixes, reset governance and create a practical recovery roadmap.",
          },
        },
        {
          "@type": "Question",
          name: "When should a business consider ERP project rescue support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A business should consider ERP project rescue support when the implementation is delayed, users are losing confidence, scope is unclear, data migration is failing, UAT issues are unresolved, reports are unreliable, or the implementation partner and business teams are not aligned.",
          },
        },
        {
          "@type": "Question",
          name: "What is post-go-live ERP optimisation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Post-go-live ERP optimisation focuses on improving ERP usage after launch by resolving process gaps, reporting issues, data problems, control weaknesses, user adoption challenges, workflow inefficiencies and unresolved configuration issues.",
          },
        },
        {
          "@type": "Question",
          name: "Why do ERP projects struggle after go-live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP projects often struggle after go-live because open issues, workarounds, reporting gaps and adoption problems remain unresolved. This usually happens when stabilisation and optimisation are not planned as part of the ERP programme.",
          },
        },
        {
          "@type": "Question",
          name: "What does Contetra review during ERP project rescue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra reviews the original business objectives, implementation scope, process design, configuration fit, data quality, testing issues, user adoption, reporting gaps, partner performance, governance structure, unresolved decisions and post-go-live support model.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work with our existing ERP implementation partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can work alongside the existing ERP implementation partner, internal team, auditor or management team to provide business-side review, functional clarity, issue prioritisation, governance support and post-go-live optimisation.",
          },
        },
        {
          "@type": "Question",
          name: "Does ERP project rescue mean replacing the ERP system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Many ERP issues can be resolved through process correction, configuration review, data clean-up, reporting improvements, user training, workflow redesign and stronger governance. Replacement should be considered only after an evidence-based diagnostic review.",
          },
        },
        {
          "@type": "Question",
          name: "What are common signs that ERP post-go-live optimisation is needed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common signs include continued Excel dependency, delayed MIS, unreliable inventory reports, slow month-end close, unresolved UAT defects, manual reconciliations, poor user adoption, approval bypasses, integration failures and unclear ownership of ERP issues.",
          },
        },
        {
          "@type": "Question",
          name: "How does Contetra help improve ERP ROI after go-live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra helps improve ERP ROI by identifying unused functionality, reducing manual workarounds, improving reporting quality, strengthening controls, improving process adoption and prioritising fixes that directly support business outcomes.",
          },
        },
        {
          "@type": "Question",
          name: "Which ERP systems can Contetra support for project rescue and optimisation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra can provide ERP-agnostic advisory and functional support across systems such as SAP S/4HANA, SAP ECC, SAP Business One, Microsoft Dynamics 365, Business Central, Oracle, NetSuite, Odoo, ERPNext, Zoho and other mid-market or enterprise ERP platforms, depending on project scope and technical requirements.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation#breadcrumb",
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
          name: "ERP Project Rescue and Post-Go-Live Optimisation",
          item: "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation",
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
