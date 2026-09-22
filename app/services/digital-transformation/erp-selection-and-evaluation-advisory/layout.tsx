import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `ERP Selection & Evaluation Services | ERP Advisory | Contetra`,
  description: `Choose the right ERP with Contetra's ERP selection and evaluation services. Compare vendors, define requirements and reduce implementation risk.`,
  alternates: {
    canonical: "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory",
  },
  openGraph: {
    title: `ERP Selection & Evaluation Services | ERP Advisory | Contetra`,
    description: `Choose the right ERP with independent selection and evaluation advisory. Compare vendors, define requirements, and reduce implementation risk with a structured evaluation process.`,
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
        "Contetra Private Limited is a finance transformation consulting firm offering ERP implementation consulting, ERP selection advisory, Virtual CFO, FP&A, technical accounting advisory, IPO readiness, offshore accounting and AI-enabled automation services.",
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
      "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#webpage",
      url: "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory",
      name: "ERP Selection and Evaluation Advisory Services | Contetra",
      description:
        "Evaluate ERP platforms, vendors, implementation scope, business requirements and ROI risks with Contetra’s ERP selection and evaluation advisory services.",
      isPartOf: {
        "@id": "https://contetra.com#website",
      },
      about: {
        "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#service",
      },
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#breadcrumb",
      },
      mainEntity: {
        "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#service",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#service",
      name: "ERP Selection and Evaluation Advisory Services",
      alternateName: [
        "ERP Selection Advisory",
        "ERP Evaluation Advisory",
        "ERP Vendor Evaluation",
        "ERP Software Selection Consulting",
        "ERP RFP Support",
        "ERP Fit-Gap Assessment",
      ],
      serviceType: "ERP Selection and Evaluation Advisory",
      provider: {
        "@id": "https://contetra.com#organization",
      },
      url: "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory",
      description:
        "Contetra helps businesses evaluate ERP platforms, compare vendors, define business requirements, review implementation assumptions, assess ROI risks and select the right ERP system before signing an ERP implementation SOW.",
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
        "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#offercatalog",
        name: "ERP Selection and Evaluation Advisory Scope",
        itemListElement: [
          {
            "@type": "Offer",
            name: "ERP Requirement Assessment",
            itemOffered: {
              "@type": "Service",
              name: "ERP Requirement Assessment",
              description:
                "Assessment of finance, procurement, inventory, manufacturing, sales, reporting, integration and control requirements before ERP selection.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Platform Evaluation",
            itemOffered: {
              "@type": "Service",
              name: "ERP Platform Evaluation",
              description:
                "Evaluation of suitable ERP platforms such as SAP, Microsoft Dynamics, Oracle, NetSuite, Odoo, ERPNext, Zoho and other ERP systems based on business needs.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Vendor Comparison",
            itemOffered: {
              "@type": "Service",
              name: "ERP Vendor Comparison",
              description:
                "Comparison of ERP vendors based on functional fit, implementation approach, scope coverage, exclusions, assumptions, timelines, support model and delivery capability.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP RFP and Demo Support",
            itemOffered: {
              "@type": "Service",
              name: "ERP RFP and Demo Support",
              description:
                "Support for RFP preparation, demo evaluation, vendor questions, scoring criteria and management decision-making during ERP selection.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Scope and ROI Review",
            itemOffered: {
              "@type": "Service",
              name: "ERP Scope and ROI Review",
              description:
                "Review of ERP project scope, expected ROI, implementation risks, customization needs, data readiness and business outcome alignment before SOW finalisation.",
            },
          },
          {
            "@type": "Offer",
            name: "ERP Implementation Partner Evaluation",
            itemOffered: {
              "@type": "Service",
              name: "ERP Implementation Partner Evaluation",
              description:
                "Evaluation of ERP implementation partners based on business understanding, functional capability, project governance, delivery team, data migration approach and post-go-live support.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ERP selection and evaluation advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP selection and evaluation advisory helps businesses choose the right ERP system by assessing business requirements, processes, users, integrations, reporting needs, controls, scalability and implementation risks before selecting a platform or vendor.",
          },
        },
        {
          "@type": "Question",
          name: "Why should we conduct ERP evaluation before choosing a vendor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP evaluation helps avoid selecting software based only on demos, brand names or pricing. It ensures the selected ERP fits the company’s finance, operations, procurement, inventory, manufacturing, sales, reporting and compliance requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What does Contetra review during ERP selection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra reviews business processes, pain points, reporting needs, data readiness, integration requirements, control expectations, user roles, functional requirements, implementation complexity and expected ROI before helping management compare ERP options.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra help us compare ERP vendors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can help businesses prepare evaluation criteria, review vendor proposals, compare functional fit, assess implementation assumptions, identify hidden exclusions and support management in selecting the right ERP implementation partner.",
          },
        },
        {
          "@type": "Question",
          name: "Which ERP systems can Contetra help evaluate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra works in an ERP-agnostic manner and can support evaluation across SAP, Microsoft Dynamics, Oracle, NetSuite, Odoo, ERPNext, Zoho and other mid-market or enterprise ERP systems, depending on the business requirement.",
          },
        },
        {
          "@type": "Question",
          name: "Is ERP selection only an IT decision?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. ERP selection is a business decision, not only an IT decision. The right ERP must support finance, controls, reporting, inventory, operations, sales, procurement, compliance and management decision-making.",
          },
        },
        {
          "@type": "Question",
          name: "When should a business take ERP selection advisory support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A business should consider ERP selection advisory before signing an ERP SOW, issuing an RFP, finalising a vendor, replacing legacy systems, upgrading ERP, or investing in a new system where process, data, reporting or integration risks are unclear.",
          },
        },
        {
          "@type": "Question",
          name: "How does ERP selection advisory reduce implementation risk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It reduces risk by clarifying requirements upfront, identifying process gaps, comparing ERP fit objectively, reviewing vendor assumptions, defining scope clearly and helping management avoid unnecessary customization or poorly defined implementation responsibilities.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#breadcrumb",
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
          name: "ERP Selection and Evaluation Advisory",
          item: "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory",
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
