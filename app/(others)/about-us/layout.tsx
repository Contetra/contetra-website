import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Contetra | Finance Transformation Consulting Firm in India`,
  description: `Learn about Contetra, a finance-led business transformation consulting firm helping growing businesses with CFO advisory, ERP, accounting and AI-enabled automation.`,
  alternates: {
    canonical: "https://contetra.com/about-us",
  },
  openGraph: {
    title: `About Contetra | Finance-Led Business Transformation`,
    description: `Discover how Contetra helps growing businesses transform finance through CFO advisory, ERP, accounting and reporting, and AI-enabled automation.`,
  },
};

export default function AboutServices({
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
