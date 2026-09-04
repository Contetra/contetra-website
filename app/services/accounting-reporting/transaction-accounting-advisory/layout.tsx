import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Transaction Accounting Advisory | M&A Accounting | Contetra`,
  description: `Transaction accounting advisory from deal structure to post-deal`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/transaction-accounting-advisory",
  },
  openGraph: {
    title: `From Deal Structure to Post-Deal Reporting | Contetra`,
    description: `Transaction accounting advisory from deal structure to post-deal reporting — purchase price allocation, opening balance sheet and post-deal integration support.`,
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
