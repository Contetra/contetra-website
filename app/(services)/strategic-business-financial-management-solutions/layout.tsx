import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Strategic & Virtual CFO Services in Mumbai, India | Contetra`,
  description: `Contetra's virtual, fractional, and strategic CFO services in Mumbai, India helps to enhance budgeting, forecasting & achieve growth with cash flow optimization.`,
  keywords: `Fractional CFO services India, Virtual CFO services India, Outsourced CFO services India, CFO consulting services India, Cash flow management consultant, Financial forecasting services India, FP&A consulting services India, Working capital optimization services, Finance transformation consulting, Strategic finance advisory services, CFO Services for SMEs, FP&A and Business Finance Consulting for CFOs, Cash Flow Budgeting and Financial Forecasting for SMEs, Business Performance Monitoring, Finance Systems Optimisation for Monthly Reporting, Sales Analytics and Revenue Forecasting Advisory, Cash Conversion Cycle Optimisation, Operational Bottleneck Removal and Cycle Time Improvement`,
  alternates: {
    canonical: "https://contetra.com/strategic-business-financial-management-solutions",
  },
  openGraph: {
    title: `Fractional CFO Services in India for SMEs`,
    description: `Improve financial visibility, control cash flow, and drive smarter decisions with structured financial management solutions.`,
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
