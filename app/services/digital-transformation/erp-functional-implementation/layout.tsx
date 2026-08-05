import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

const ERP_IMPLEMENTATION_FAQ_MAIN_ENTITY = [
  {
    "@type": "Question",
    name: "What does Contetra do in ERP implementation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Contetra supports ERP implementation through business process mapping, requirement documentation, ERP selection support, functional configuration, testing, user training, go-live support, and post-implementation optimization.",
    },
  },
  {
    "@type": "Question",
    name: "Which ERP systems does Contetra work with?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Contetra works with ERP systems including Odoo, ERPNext, SAP, Microsoft Dynamics, Zoho, Oracle, and other business systems depending on client requirements and business complexity.",
    },
  },
  {
    "@type": "Question",
    name: "How does ERP implementation improve financial visibility?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "ERP implementation improves financial visibility by integrating finance, sales, procurement, inventory, operations, and reporting data into one structured system for faster decision-making.",
    },
  },
  {
    "@type": "Question",
    name: "Does Contetra help with ERP selection?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Contetra helps businesses evaluate ERP options based on process requirements, business size, reporting needs, scalability, budget, and implementation readiness.",
    },
  },
  {
    "@type": "Question",
    name: "Can Contetra support ERP implementation for manufacturing companies?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Contetra supports ERP implementation for manufacturing companies by focusing on finance, procurement, inventory, production, costing, reporting, and operational control requirements.",
    },
  },
  {
    "@type": "Question",
    name: "Does Contetra provide post-implementation ERP support?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Contetra provides post-implementation support to help businesses stabilize ERP usage, improve reporting, resolve process gaps, and increase adoption after go-live.",
    },
  },
  {
    "@type": "Question",
    name: "How is Contetra different from ERP software vendors?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Contetra is ERP-agnostic and focuses on business process, finance visibility, controls, and implementation success rather than selling a specific ERP software.",
    },
  },
  {
    "@type": "Question",
    name: "Why do ERP implementations fail?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "ERP implementations often fail due to unclear requirements, weak process mapping, poor data migration, excessive customization, lack of user training, and insufficient ownership from business teams.",
    },
  },
  {
    "@type": "Question",
    name: "How long does ERP implementation take?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "ERP implementation timelines depend on business complexity, modules, integrations, customizations, data migration, and user adoption requirements.",
    },
  },
  {
    "@type": "Question",
    name: "Can Contetra help optimize an existing ERP system?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, Contetra helps businesses review and optimize existing ERP systems by identifying process gaps, reporting issues, workflow inefficiencies, and areas where the ERP is not being fully utilized.",
    },
  },
];

export const metadata: Metadata = {
  title: `ERP Consulting Services & Implementation Solutions for Businesses`,
  description: `End-to-end ERP consulting and implementation services to streamline operations, improve visibility, and drive data-driven decision-making.`,
  keywords: `ERP implementation services India, ERP consulting services India, ERP implementation for manufacturing companies, ERP system implementation partner India, ERP functional consulting services, Manufacturing ERP consultants India, ERP for service companies India, ERP implementation for SMEs India, ERP digital transformation consulting, ERP process optimization services, Odoo service providers, ERPNext consultant in India, SAP consultants in India, ERP consulting services & solutions, ERP implementation solution in India, ERP consulting services in India, ERP implementation partner in India`,
  alternates: {
    canonical: "https://contetra.com/erp-implementation-solutions",
  },
  openGraph: {
    title: `ERP Implementation Services That Actually Deliver Results`,
    description: `From selection to go-live, implement ERP systems that improve efficiency, reporting, and business performance.`,
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://contetra.com/#organization",
        name: "Contetra",
        url: "https://contetra.com",
        logo: {
          "@type": "ImageObject",
          url: "https://contetra.com/assets/images/logo/contetra-main-logo.png",
          width: 150,
          height: 60,
        },
        description:
          "Contetra provides CFO advisory, ERP implementation, IFRS advisory, FP&A, IPO readiness, and finance transformation services.",
        email: "growth@contetra.com",
        telephone: "+919833818857",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "2nd floor, Swastik Disa Corporate Park, 225, Lal Bahadur Shastri Marg, near Kotak Bank",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400086",
          addressCountry: "IN",
        },
        foundingDate: "2016-10-30",
        sameAs: [
          "https://www.linkedin.com/company/contetra",
          "https://www.facebook.com/ContetraPrivateLimited/",
          "https://twitter.com/contetra",
          "https://www.youtube.com/channel/UCcQNXLjiX-mN94n5ew4H3Xg",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/erp-implementation-solutions/#webpage",
        url: "https://contetra.com/erp-implementation-solutions/",
        name: "ERP Consulting Services & Solutions",
        description:
          "Contetra provides ERP implementation and functional consulting for growing businesses using systems like Odoo, ERPNext, SAP, Microsoft Dynamics, Zoho, and Oracle.",
        about: {
          "@id": "https://contetra.com/erp-implementation-solutions/#service",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/erp-implementation-solutions/#service",
        name: "ERP Implementation and Functional Consulting",
        url: "https://contetra.com/erp-implementation-solutions/",
        description:
          "ERP implementation and functional consulting helping businesses streamline operations, improve reporting, strengthen process controls, and enable real-time financial visibility.",
        provider: { "@id": "https://contetra.com/#organization" },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: "ERP Implementation and Functional Consulting",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/erp-implementation-solutions/#breadcrumb",
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
            name: "ERP Implementation",
            item: "https://contetra.com/erp-implementation-solutions/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://contetra.com/erp-implementation-solutions/#faq",
        mainEntity: ERP_IMPLEMENTATION_FAQ_MAIN_ENTITY,
      },
    ],
  };

  return (
    <section className="min-h-screen overflow-x-hidden">
      <JsonLd data={structuredData} />
    
      {children}
   
    </section>
  );
}
