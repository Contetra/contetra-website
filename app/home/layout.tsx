import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `CFO Advisory & Finance Transformation Services | ERP, FP&A,  IFRS`,
  description: `Contetra helps CFOs and growing businesses with ERP implementation, FP&A strategy, and IFRS & IPO readiness. Serving 100+ clients globally.`,
  keywords: `Business management consultant in mumbai, finance business consultant, finance consulting services, finance advisory services, business financial management solutions`,
  alternates: {
    canonical: "https://contetra.com/",
  },
  openGraph: {
    title: `Finance Transformation & Business Advisory for Growing Businesses`,
    description: `Build financial clarity, stronger cash flow, and scalable growth with Contetra’s CFO-led advisory, ERP implementation, FP&A, and finance transformation solutions.`,
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contetra Home",
    url: "https://contetra.com/",
    description:
      "Contetra helps CFOs and growing businesses with IFRS advisory, ERP implementation, FP&A strategy, and IPO readiness.",
  };

  return (
    <section className="flex flex-col justify-between ">
      <JsonLd data={homeSchema} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
