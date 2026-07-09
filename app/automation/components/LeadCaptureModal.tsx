"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { MagneticButton } from "./Primitives";

type LeadCaptureModalProps = {
  open: boolean;
  onClose: () => void;
};

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Roshni Mehta" },
  { name: "email", label: "Work email", type: "email", placeholder: "roshni@company.com" },
  { name: "company", label: "Company", type: "text", placeholder: "Acme Finance" },
  { name: "department", label: "Department", type: "text", placeholder: "Finance, Sales, Ops..." },
  { name: "tools", label: "Tools involved", type: "text", placeholder: "CRM, ERP, Gmail, Excel, Slack, Tally, SAP..." },
];

export function LeadCaptureModal({ open, onClose }: LeadCaptureModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-title"
    >
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-auto rounded-[8px] border border-cyan-300/25 bg-slate-950 p-6 shadow-[0_0_80px_rgba(34,211,238,0.2)] sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
          aria-label="Close lead capture form"
        >
          <Icon name="close" />
        </button>
        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-200">
              <Icon name="sparkles" className="h-7 w-7" />
            </div>
            <h2 id="lead-title" className="text-3xl font-black text-white">
              Done. Send us the mess.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-slate-300">
              We&apos;ll tell you what can be automated and what should stay human.
            </p>
            <MagneticButton onClick={onClose} className="mt-8">
              Back to page
            </MagneticButton>
          </div>
        ) : (
          <>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Free 14-day POC
            </p>
            <h2 id="lead-title" className="text-3xl font-black tracking-tight text-white">
              Claim your first automation.
            </h2>
            <p className="mt-3 text-slate-300">
              One process, working output in 14 days. No sales theatre.
            </p>
            <form
              className="mt-8 grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = Object.fromEntries(new FormData(event.currentTarget));
                // TODO: Connect this lead payload to the CRM/backend once the endpoint is ready.
                console.log("Automation POC lead", formData);
                setSubmitted(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {fields.slice(0, 4).map((field) => (
                  <label key={field.name} className="grid gap-2 text-sm font-medium text-slate-200">
                    {field.label}
                    <input
                      required={field.name !== "tools"}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                    />
                  </label>
                ))}
              </div>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                What process do you want automated?
                <textarea
                  required
                  name="process"
                  rows={4}
                  placeholder="The report, reconciliation, CRM update, email queue, ticket flow..."
                  className="resize-none rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                {fields[4].label}
                <input
                  name={fields[4].name}
                  type={fields[4].type}
                  placeholder={fields[4].placeholder}
                  className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                />
              </label>
              <MagneticButton className="mt-2 w-full">Claim my free POC</MagneticButton>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
