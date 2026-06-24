import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Corporate Finance Training Enquiry | Contetra`,
  description: `Submit your corporate training enquiry with Contetra for finance, accounting, ERP, FP&A, IFRS, Ind AS, US GAAP and business upskilling programs.`,
  alternates: {
    canonical: "https://contetra.com/corporate-trainings-at-contetra",
  },
  openGraph: {
    title: `Corporate Training Enquiry at Contetra`,
    description: `Enquire with Contetra for corporate training programs designed for finance teams, business teams and professionals across ERP, FP&A, accounting standards and finance transformation.`,
  },
};


export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <section className="min-h-screen">
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
