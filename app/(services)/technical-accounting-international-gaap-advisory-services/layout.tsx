import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `IFRS to Ind AS Conversion Services & Reporting Advisory`,
  description: `Contetra offers IFRS to Ind AS conversion services, financial statements preparation, audit closures, GAAP reporting, tax compliance, account reconciliation.`,
  keywords: `Financial statements preparation, audit closures, IPO financial reporting, preparation of trial balance, IFRS and GAAP reporting, tax compliance and advisory, audit and compliance support, account reconciliation, financial reporting advisory`,
  alternates: {
    canonical:
      "https://contetra.com/technical-accounting-international-gaap-advisory-services",
  },
  openGraph: {
    title: `GAAP & IFRS, Ind AS Advisory Services | Contetra`,
    description: `Navigate complex accounting standards with expert GAAP advisory, ensuring compliance, clarity, and audit readiness.`,
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
        "@type": "Service",
        "@id":
          "https://contetra.com/technical-accounting-international-gaap-advisory-services/#service",
        name: "Technical Accounting and IFRS Advisory",
        url: "https://contetra.com/technical-accounting-international-gaap-advisory-services/",
        description:
          "Technical accounting and IFRS advisory supporting businesses with financial reporting, compliance, revenue recognition, and audit readiness.",
        provider: {
          "@type": "Organization",
          "@id": "https://contetra.com/#organization",
          name: "Contetra",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: "IFRS and Technical Accounting Advisory",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Finance Teams and CFOs",
        },
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
