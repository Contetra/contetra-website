import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Financial Statement Preparation & Accounting Support | Contetra`,
  description: `Financial statement preparation and accounting support for reliable, audit-ready reporting, close support, schedules, notes and group reporting packs.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support",
  },
  openGraph: {
    title: `Financial Statement Preparation & Accounting Support | Contetra`,
    description: `Financial statement preparation and accounting support for reliable, audit-ready reporting — close support, reconciliations, schedules and group reporting packs.`,
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
