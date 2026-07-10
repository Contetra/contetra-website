import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Contetra | CFO Advisory, ERP & Finance Consulting`,
  description: `Connect with Contetra for CFO advisory, ERP implementation, IFRS, FP&A, and finance transformation services. Speak to our experts today!`,
  keywords: `Contact Us`,
  alternates: {
    canonical: "https://contetra.com/contact-us",
  },
  openGraph: {
    title: `Let’s Build Better Financial Clarity Together | Contetra`,
    description: `Talk to Contetra’s finance experts for CFO advisory, ERP implementation, IFRS, FP&A, and finance transformation support for your business.`,
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://contetra.com#organization",
        name: "Contetra Private Limited",
        url: "https://contetra.com",
        logo: {
          "@type": "ImageObject",
          url: "https://contetra.com/_next/static/media/contetra-main-logo.b2c93224.png",
        },
      },
      {
        "@type": ["WebPage", "ContactPage"],
        "@id": "https://contetra.com/contact-us#webpage",
        url: "https://contetra.com/contact-us",
        name: "Contact Contetra | ERP, Virtual CFO & Finance Consulting",
        description:
          "Get in touch with Contetra for ERP implementation, Virtual CFO services, Technical Accounting Advisory, FP&A, finance transformation and business consulting.",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        about: {
          "@id": "https://contetra.com#organization",
        },
        breadcrumb: {
          "@id": "https://contetra.com/contact-us#breadcrumb",
        },
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/contact-us#breadcrumb",
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
            name: "Contact Us",
            item: "https://contetra.com/contact-us",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://contetra.com/contact-us#localbusiness",
        name: "Contetra Private Limited",
        image:
          "https://contetra.com/_next/static/media/contetra-main-logo.b2c93224.png",
        url: "https://contetra.com",
        telephone: "+91-9833818857",
        email: "growth@contetra.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "225, 2nd Floor, Swastik Disa Corporate Park, LBS Road, Opposite Rajhans Cinemas, Ghatkopar West",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400086",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:30",
            closes: "18:30",
          },
        ],
        priceRange: "$$",
        parentOrganization: {
          "@id": "https://contetra.com#organization",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://contetra.com#website",
        url: "https://contetra.com",
        name: "Contetra",
        publisher: {
          "@id": "https://contetra.com#organization",
        },
      },
    ],
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={contactSchema} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
