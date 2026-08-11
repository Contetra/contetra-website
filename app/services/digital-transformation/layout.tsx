import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
 alternates: {
    canonical: "https://contetra.com/services/digital-transformation",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://contetra.com/services/digital-transformation#webpage",
      url: "https://contetra.com/services/digital-transformation",
      name: "Digital Transformation Services for Finance & Operations | Contetra",
      description:
        "Transform finance, ERP, reporting and business workflows with Contetra’s digital transformation services across automation, systems and process improvement.",
      isPartOf: {
        "@id": "https://contetra.com#website",
      },
      about: {
        "@id": "https://contetra.com/services/digital-transformation#service",
      },
      breadcrumb: {
        "@id":
          "https://contetra.com/services/digital-transformation#breadcrumb",
      },
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/digital-transformation#service",
      name: "Digital Transformation Services",
      serviceType: "Finance and Business Digital Transformation",
      url: "https://contetra.com/services/digital-transformation",
      description:
        "Digital transformation services covering finance transformation, ERP optimisation, process redesign, workflow automation, reporting improvement and business systems integration.",
      provider: {
        "@id": "https://contetra.com#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://contetra.com/services/digital-transformation#breadcrumb",
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
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
