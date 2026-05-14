import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Finance Recruitment Consultants for High-Impact Hiring | Contetra`,
  description: `Hire the right finance talent with structured recruitment services. Build strong finance teams with Contetra.`,
  keywords: `finance recruitment consultants, finance recruitment consultants India, finance recruitment services, finance hiring consultants, finance staffing services, accounting recruitment consultants, CFO recruitment services, finance executive search firms, finance talent acquisition services, accounting recruitment firms India`,
  alternates: {
    canonical: "https://contetra.com/financial-recruitment-consultants",
  },
  openGraph: {
    title: `Finance Recruitment Services for High-Impact Hiring`,
    description: `Hire the right finance talent to strengthen reporting, control, and business decision-making.`,
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
        "@id":
          "https://contetra.com/financial-recruitment-consultants/#webpage",
        url: "https://contetra.com/financial-recruitment-consultants/",
        name: "Financial Recruitment Consultants",
        description:
          "Contetra supports businesses with financial recruitment consulting for finance, accounting, FP&A, reporting, controllership, audit, and CFO office roles.",
        about: {
          "@id":
            "https://contetra.com/financial-recruitment-consultants/#service",
        },
      },
      {
        "@type": "Service",
        "@id":
          "https://contetra.com/financial-recruitment-consultants/#service",
        name: "Financial Recruitment Consulting",
        url: "https://contetra.com/financial-recruitment-consultants/",
        description:
          "Financial recruitment consulting helping businesses hire finance, accounting, FP&A, reporting, controllership, audit, compliance, and CFO office professionals.",
        provider: { "@id": "https://contetra.com/#organization" },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: "Financial Recruitment Consulting",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://contetra.com/financial-recruitment-consultants/#breadcrumb",
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
            name: "Financial Recruitment Consultants",
            item: "https://contetra.com/financial-recruitment-consultants/",
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
