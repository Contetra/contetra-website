import type { SubPageContent } from "@/lib/content";
import { Compass, FileSearch, ListChecks, Target, TrendingUp, Users, Wallet, Workflow } from "lucide-react";
import { createElement } from "react";
import { FpaForm } from "../components/fpa-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export const fractionalCfoServicesPage: SubPageContent = {
  breadcrumbLabel: "Fractional CFO Services",
  meta: {
    title: "Fractional CFO Services in Mumbai | Contetra",
    description:
      "Get senior finance leadership for cash flow, forecasting, profitability, MIS and growth decisions through a flexible fractional CFO engagement in Mumbai.",
  },
  jsonLdName: "Fractional CFO Services",
  hero: {
    title: "Fractional CFO Services for Growing Businesses in Mumbai",
    paragraphs: [
      "Your business may not need another layer of reporting. It may need a senior finance leader who can help management decide where cash should go, which growth is profitable and what must change before the next stage of scale. Contetra's fractional CFO services give Mumbai-based businesses flexible access to strategic finance leadership supported by FP&A, accounting, ERP and automation specialists.",
      "We work with promoters, CEOs, existing finance heads and management teams through a defined operating cadence. The engagement is designed around decisions and outcomes - not a generic allocation of CFO hours.",
    ],
    positioningLine:
      "Senior financial leadership without forcing the organisation to hire every capability at once.",
  },
  whatWeHelp: [
    {
      icon: Wallet,
      title: "Cash and working-capital leadership",
      body: "13-week cash forecasts, collections and inventory governance, funding visibility, banking information and management review rhythms.",
    },
    {
      icon: Target,
      title: "Planning and performance",
      body: "Annual plans, rolling forecasts, scenario analysis, KPI trees and structured monthly performance reviews.",
    },
    {
      icon: TrendingUp,
      title: "Profitability and growth decisions",
      body: "Product, customer, channel, project and location economics; pricing; break-even; capital allocation and growth business cases.",
    },
    {
      icon: Workflow,
      title: "Finance-function development",
      body: "Close discipline, roles, controls, team capability, board reporting, system priorities and the roadmap to a stronger internal finance organisation.",
    },
  ],
  howWeWork: [
    { icon: FileSearch, body: "Diagnose the current finance and decision model." },
    { icon: Compass, body: "Agree the management priorities and operating cadence." },
    { icon: ListChecks, body: "Build the forecasts, reporting and analytical models." },
    { icon: Users, body: "Lead reviews, track decisions and transfer capability." },
  ],
  closingCta: {
    heading: "Add senior financial judgement where it will change decisions",
    body: "Discuss the decisions, reporting gaps and finance capacity constraining the next stage of growth.",
    primaryCta: "Book a Fractional CFO Consultation",
    secondaryCta: "View CFO Case Studies",
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
