import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Accounting & Reporting Advisory | Technical Accounting | Contetra`,
  description: `Accounting and reporting advisory for complex standards, transactions and audit-ready financial statements, Ind AS, IFRS, US GAAP and technical accounting support.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting",
  },
  openGraph: {
    title: `Accounting & Reporting Advisory | Technical Accounting | Contetra`,
    description: `Accounting and reporting consulting for complex standards, transactions and audit-ready financial statements — technical accounting, GAAP conversion and due diligence.`,
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <section className="min-h-screen overflow-x-hidden">
   
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
