import type { SubPageContent } from "@/lib/content";
import { Banknote, Bot, ClipboardList, Database, LayoutDashboard, PenTool, RefreshCcw, Search } from "lucide-react";
import { createElement } from "react";
import { FpaForm } from "../components/fpa-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export const misReportingDashboardsPage: SubPageContent = {
  breadcrumbLabel: "MIS Reporting & Financial Dashboards",
  meta: {
    title: "MIS Reporting & Financial Dashboard Services | Contetra",
    description:
      "Build monthly MIS, board packs, KPI dashboards and automated performance reporting that connect financial results to business actions.",
  },
  jsonLdName: "MIS Reporting and Financial Dashboard Services",
  hero: {
    title: "MIS Reporting and Financial Dashboards Built for Management Decisions",
    paragraphs: [
      "Most management reports contain more data than decisions. Contetra designs monthly MIS, board packs and financial dashboards around the questions leadership must answer: what changed, why it changed, whether it will persist and who must act next.",
      "We define KPI logic, reporting dimensions, data ownership and commentary standards before choosing the final dashboard or reporting tool. This prevents attractive visualisations from masking inconsistent definitions or unreliable source data.",
    ],
    positioningLine:
      "A dashboard is valuable only when every KPI has a definition, owner, source and management response.",
  },
  whatWeHelp: [
    {
      icon: ClipboardList,
      title: "Management and board packs",
      body: "Executive summary, P&L and cash view, KPI trends, variances, risks, actions and forward-looking indicators.",
    },
    {
      icon: LayoutDashboard,
      title: "Profitability dashboards",
      body: "Product, customer, project, branch, channel, geography and segment reporting aligned to management accountability.",
    },
    {
      icon: Banknote,
      title: "Working-capital dashboards",
      body: "Receivables, ageing, collections, inventory, payables, cash conversion and action tracking.",
    },
    {
      icon: Bot,
      title: "Reporting automation",
      body: "Data preparation, reconciliations, recurring report production, distribution and commentary workflows using appropriate BI and automation tools.",
    },
  ],
  howWeWork: [
    { icon: Search, body: "Identify the management decisions and review forums." },
    { icon: Database, body: "Define metrics, dimensions, owners and source data." },
    { icon: PenTool, body: "Prototype the pack or dashboard with users." },
    { icon: RefreshCcw, body: "Automate, govern and improve the reporting cycle." },
  ],
  closingCta: {
    heading: "Replace reporting volume with decision clarity",
    body: "Review your current MIS, reporting cycle and dashboard requirements with our finance and analytics team.",
    primaryCta: "Book an MIS & Dashboard Review",
    secondaryCta: "Share Your Current MIS",
     form: createElement(FpaForm, {
      trigger: createElement(
        Button,
        {
          variant: "outline",
          className: cn(
            buttonVariants({ size: "xl" }),
            "bg-brand-green text-white hover:bg-brand-green/90 cursor-pointer",
          ),
        },
        "Book a CFO & FP&A Diagnostic",
      ),
    }),
  },
};
