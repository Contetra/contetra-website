import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Technical Accounting Advisory | Ind AS, IFRS, US GAAP | Contetra`,
  description: `Technical accounting advisory for complex transactions and reporting judgements revenue, leases, business combinations and financial instruments.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/technical-accounting-advisory",
  },
  openGraph: {
    title: `Technical Accounting Advisory | Ind AS, IFRS, US GAAP | Contetra`,
    description: `Technical accounting advisory for complex transactions and reporting judgements — revenue, leases, business combinations and financial instruments under Ind AS, IFRS and US GAAP.`,
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <section className="min-h-screen overflow-x-hidden">
   

      {children}

    </section>
  );
}
