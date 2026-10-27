import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Logistics & Supply Chain ERP: A Selection Guide for Businesses",
  description:
    "From inventory to finance, learn how to choose a Logistics & Supply Chain ERP that fits the way your business operates. Read our buyer guide now.",
  alternates: {
    canonical: "https://contetra.com/buyers-guide/erp/logistics-supply-chain",
  },
  openGraph: {
    type: "article",
    siteName: "Contetra",
    title: "Logistics & Supply Chain ERP: Complete Selection Guide",
    description:
      "Compare logistics and supply chain ERP modules, costs, deployment models and leading platforms to find the right fit for your operations.",
    url: "https://contetra.com/buyers-guide/erp/logistics-supply-chain",
    locale: "en_IN",
  },
};

export default function LogisticsSupplyChainErpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://contetra.com/buyers-guide/erp/logistics-supply-chain#article",
        url: "https://contetra.com/buyers-guide/erp/logistics-supply-chain",
        headline:
          "Logistics & Supply Chain ERP: Features, Costs & Selection Guide",
        description:
          "Compare logistics and supply chain ERP features, modules, costs, deployment models and platforms to choose the right system for your business.",
        author: {
          "@id": "https://contetra.com#organization",
        },
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        mainEntityOfPage: {
          "@id": "https://contetra.com/buyers-guide/erp/logistics-supply-chain#webpage",
        },
        about: [
          { "@type": "Thing", name: "Logistics ERP" },
          { "@type": "Thing", name: "Supply Chain ERP" },
          { "@type": "Thing", name: "Warehouse Management" },
          { "@type": "Thing", name: "Transportation Management" },
          { "@type": "Thing", name: "Supply Chain Management" },
        ],
        keywords: [
          "logistics ERP",
          "supply chain ERP",
          "logistics ERP software",
          "supply chain ERP software",
          "ERP for logistics companies",
          "ERP for 3PL",
          "warehouse ERP",
          "freight forwarding ERP",
          "ERP selection",
          "logistics ERP cost",
        ],
        articleSection: "ERP Buyer's Guide",
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/buyers-guide/erp/logistics-supply-chain#webpage",
        url: "https://contetra.com/buyers-guide/erp/logistics-supply-chain",
        name: "Logistics & Supply Chain ERP: Buyer's Guide | Contetra",
        description:
          "Compare logistics and supply chain ERP features, modules, costs, deployment models and platforms to choose the right system for your business.",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        mainEntity: {
          "@id": "https://contetra.com/buyers-guide/erp/logistics-supply-chain#article",
        },
        breadcrumb: {
          "@id": "https://contetra.com/buyers-guide/erp/logistics-supply-chain#breadcrumb",
        },
        hasPart: {
          "@id": "https://contetra.com/buyers-guide/erp/logistics-supply-chain#faq",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/buyers-guide/erp/logistics-supply-chain#breadcrumb",
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
            name: "Logistics & Supply Chain ERP Buyer's Guide",
            item: "https://contetra.com/buyers-guide/erp/logistics-supply-chain",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://contetra.com/buyers-guide/erp/logistics-supply-chain#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the difference between a standard and logistics & supply chain ERP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A standard ERP provides broad business functions such as finance, HR, procurement and basic inventory management. A logistics and supply chain ERP goes deeper into warehouse management, transportation, inventory, demand planning, order fulfilment, fleet management and shipment visibility.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to implement a supply chain & logistics ERP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Implementation timelines vary based on the number of locations, users, integrations, data complexity, customization and modules. A relatively standard implementation may take 3 to 6 months, while larger multi-location or highly integrated deployments can take 3 to 12 months.",
            },
          },
          {
            "@type": "Question",
            name: "How can you choose the right logistics ERP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Map your supply chain processes and identify the capabilities you need. Evaluate platforms based on inventory visibility, warehouse and transportation management, demand planning, integrations, multi-location support, reporting, scalability and total cost of ownership.",
            },
          },
          {
            "@type": "Question",
            name: "What are the key modules of a supply chain & logistics ERP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Core modules typically include warehouse management, transportation management, inventory management, procurement and supplier management, order management, fleet and asset management, demand and supply planning, finance and accounting, and customer or 3PL management.",
            },
          },
          {
            "@type": "Question",
            name: "Can small logistics firms use ERPs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Small 3PLs, freight forwarders and distributors can use ERP software to manage shipments, inventory, warehouse operations, billing and financial records from a centralized system. Cloud ERP can be a practical starting point because it typically requires lower upfront infrastructure investment and can scale with the business.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between logistics & supply chain ERP vs WMS vs TMS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A logistics and supply chain ERP connects procurement, inventory, warehousing, transportation and finance. A Warehouse Management System focuses on warehouse activities such as receiving, picking, packing and dispatching, while a Transportation Management System focuses on route planning, carriers, freight costs and shipment tracking.",
            },
          },
        ],
      },
    ],
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={structuredData} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
