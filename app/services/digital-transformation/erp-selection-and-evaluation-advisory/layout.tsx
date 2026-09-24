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
      "@id": "https://contetra.com/#organization",
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#service",
      name: "ERP Selection and Evaluation Advisory",
      url: "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory",
      description: "Contetra provides independent ERP selection and evaluation advisory to help businesses define requirements, assess readiness, compare ERP platforms and implementation partners, evaluate total cost of ownership and select the right ERP based on business fit rather than product demonstrations alone.",
      serviceType: [
        "ERP Selection Advisory",
        "ERP Evaluation Consulting",
        "ERP Business Case Assessment",
        "ERP Readiness Assessment",
        "ERP Requirements Gathering",
        "ERP RFP Support",
        "ERP Vendor Evaluation",
        "ERP Demonstration Assessment",
        "ERP Fit-Gap Assessment",
        "ERP Total Cost of Ownership Analysis",
        "ERP Implementation Partner Evaluation",
        "ERP Implementation Roadmap",
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
          audienceType: "Operations Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "ERP Programme Sponsors",
        },
        {
          "@type": "Audience",
          audienceType: "Digital Transformation Teams",
        },
      ],
      isRelatedTo: [
        {
          "@type": "Service",
          name: "ERP Implementation and Diagnostic Review",
          url: "https://contetra.com/services/digital-transformation",
        },
        {
          "@type": "Service",
          name: "ERP Implementation PMO and Functional Consulting",
          url: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
        },
      ],
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#webpage",
      url: "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory",
      name: "ERP Selection & Evaluation Advisory Services | Contetra",
      description: "ERP selection and evaluation advisory covering business requirements, ERP readiness, RFP support, vendor evaluation, fit-gap analysis, TCO and implementation planning.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ERP selection and evaluation advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ERP selection and evaluation advisory helps businesses choose the right ERP system by assessing business requirements, processes, users, integrations, reporting needs, controls, scalability and implementation risks before committing to a platform or vendor.",
          },
        },
        {
          "@type": "Question",
          name: "Is ERP selection only an IT decision?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. ERP selection is a business decision, not just a technical one. The right system needs to support finance, controls, reporting, inventory, operations, sales, procurement, compliance and management decision making, not just fit an IT specification sheet.",
          },
        },
        {
          "@type": "Question",
          name: "Why should we evaluate options before choosing a vendor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because it stops the decision from being made purely on demos, brand names or pricing. A proper evaluation checks that the ERP actually fits the company's finance, operations, procurement, inventory, manufacturing, sales, reporting and compliance requirements, rather than assuming it will work itself out during implementation.",
          },
        },
        {
          "@type": "Question",
          name: "What does Contetra review during ERP selection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Business processes, pain points, reporting needs, data readiness, integration requirements, control expectations, user roles, functional requirements, implementation complexity and expected ROI, all before helping management compare options on a like for like basis.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra help us compare ERP vendors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes preparing evaluation criteria, reviewing vendor proposals, comparing functional fit, assessing implementation assumptions, identifying hidden exclusions in scope, and supporting management through to selecting the right implementation partner.",
          },
        },
        {
          "@type": "Question",
          name: "When should a business take ERP selection advisory support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Before signing an ERP SOW, issuing an RFP, finalising a vendor, replacing a legacy system, upgrading an existing ERP, or investing in a new system where process, data, reporting or integration risks are not yet clear.",
          },
        },
        {
          "@type": "Question",
          name: "How does ERP selection advisory actually reduce implementation risk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By clarifying requirements upfront, identifying process gaps early, comparing ERP fit objectively rather than on vendor pitch alone, reviewing the assumptions built into vendor proposals, defining scope clearly, and helping management avoid unnecessary customisation or vague implementation responsibilities.",
          },
        },
        {
          "@type": "Question",
          name: "Which ERP systems can Contetra help evaluate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra works in an ERP agnostic manner and can support evaluation across SAP, Microsoft Dynamics, Oracle, NetSuite, Odoo, ERPNext, Zoho and other mid market or enterprise ERP systems, depending on the specific business requirement.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an ERP selection process typically take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This varies with the complexity of the business and how well defined the requirements already are. A straightforward evaluation can move faster, while multi entity or multi department businesses usually need more time to gather requirements properly before comparing vendors.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra also support after the ERP vendor is selected?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, this typically continues into implementation PMO and functional consulting support, so the requirements and evaluation work carried out during selection are not lost once the vendor is finalised and the project moves into execution.",
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
          name: "ERP Selection & Evaluation Advisory",
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
