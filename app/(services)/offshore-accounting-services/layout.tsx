import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Offshore Accounting Services for Scalable Finance Operations | Contetra`,
  description: `Outsource accounting with structured processes, better accuracy, and cost efficiency. Build scalable finance operations with Contetra.`,
  keywords: `offshore accounting services, offshore accounting services India, outsourced accounting services, accounting outsourcing services, finance outsourcing services, finance and accounting outsourcing, remote accounting services, offshore bookkeeping services, accounting outsourcing India, outsource accounting to India`,
  alternates: {
    canonical: "https://contetra.com/offshore-accounting-services",
  },
  openGraph: {
    title: `Offshore Accounting Services for Scalable Finance Operations`,
    description: `Outsource accounting with structured processes, improved accuracy, and cost efficiency for growing businesses.`,
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
