import type { SubPageContent } from "@/lib/content";
import { Boxes, FileSearch, Gauge, LineChart, ListChecks, Receipt, TriangleAlert, Users } from "lucide-react";
import { createElement } from "react";
import { FpaForm } from "../components/fpa-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export const workingCapitalCashflowPage: SubPageContent = {
  breadcrumbLabel: "Working Capital & Cash-Flow Advisory",
  meta: {
    title: "Working Capital & Cash-Flow Advisory Services | Contetra",
    description:
      "Improve cash forecasting, collections, inventory, payables and funding visibility with practical working-capital diagnostics and execution support.",
  },
  jsonLdName: "Working Capital and Cash-Flow Advisory Services",
  hero: {
    title: "Working Capital and Cash-Flow Advisory That Converts Profit into Liquidity",
    paragraphs: [
      "Cash pressure is rarely solved by one collection drive or another borrowing line. It usually reflects a connected set of commercial terms, inventory decisions, project milestones, purchasing practices, billing delays, dispute resolution and management review gaps.",
      "Contetra helps management identify where cash is trapped, quantify the opportunity and install an operating rhythm that makes working capital visible and actionable across finance, sales, procurement, operations and project teams.",
    ],
    positioningLine:
      "Improve cash by changing the operating decisions that create receivables, inventory and payment obligations.",
  },
  whatWeHelp: [
    {
      icon: LineChart,
      title: "Cash-flow visibility",
      body: "13-week cash forecasts, scenario views, funding headroom, covenant and liquidity reporting.",
    },
    {
      icon: Receipt,
      title: "Receivables and collections",
      body: "Ageing quality, billing and dispute bottlenecks, customer terms, collection governance and ownership.",
    },
    {
      icon: Boxes,
      title: "Inventory and procurement",
      body: "Slow-moving and excess inventory, planning parameters, supplier terms, purchasing discipline and cash impact.",
    },
    {
      icon: Gauge,
      title: "Working-capital operating rhythm",
      body: "KPIs, daily or weekly reviews, escalation, actions, owner accountability and linkage to incentives where appropriate.",
    },
  ],
  howWeWork: [
    { icon: FileSearch, body: "Build a reliable cash and working-capital fact base." },
    { icon: TriangleAlert, body: "Identify root causes and quantify opportunity." },
    { icon: ListChecks, body: "Prioritise actions by value, feasibility and business risk." },
    { icon: Users, body: "Run governance until the new discipline is embedded." },
  ],
  closingCta: {
    heading: "Find where cash is trapped - and what will release it",
    body: "Begin with a focused working-capital diagnostic using your existing financial and operating data.",
    primaryCta: "Book a Working-Capital Diagnostic",
    secondaryCta: "Discuss Cash-Flow Forecasting",
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

// ---------------------------------------------------------------------------
// ERP Transformation sub-pages
// ---------------------------------------------------------------------------
