"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { APIError } from "@/interface/api-response.types";
import { fireConfetti } from "@/lib/confettiFireworks";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import { usePostServiceAutomationMutation } from "@/redux/api/serviceApi";
import constants from "@/utils/constants.json";

import { Icon } from "./Icons";
import { MagneticButton } from "./Primitives";

type LeadCaptureModalProps = {
  open: boolean;
  onClose: () => void;
};

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters.").max(255),
  work_email: z.email("Please enter a valid work email address.").max(255),
  company: z.string().trim().min(2, "Company name must be at least 2 characters.").max(255),
  department: z.string().trim().min(2, "Department must be at least 2 characters.").max(255),
  process_to_automate: z.string().trim().min(2, "Please describe the process to automate."),
  tools_involved: z.string().trim().min(2, "Please enter the tools involved."),
});

const inputClassName =
  "h-11 rounded-[8px] border-white/10 bg-white/[0.04] text-white outline-none placeholder:text-slate-500 focus-visible:border-cyan-300/70 focus-visible:ring-2 focus-visible:ring-cyan-300/20";

export function LeadCaptureModal({ open, onClose }: LeadCaptureModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      work_email: "",
      company: "",
      department: "",
      process_to_automate: "",
      tools_involved: "",
    },
  });

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.automation,
  );
  console.log("constants.form_type_ids.Automation",constants.form_type_ids.automation)
  const formId = formsData?.response[0]?.id;


  console.log("formId",formId)

  const [postAutomation, { data, isError, isSuccess, error, isLoading }] =
    usePostServiceAutomationMutation();

  function resetCaptcha() {
    setCaptchaToken(null);
    turnstileRef.current?.reset();
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }

    postAutomation({
      body: { ...values, form_id: formId ?? "" },
      captchaToken,
    });
    setCaptchaError(null);
  }

  useEffect(() => {
    if (data && isSuccess && data.statusCode) {
      toast.success(data.response?.message);
      fireConfetti();
      form.reset();
      resetCaptcha();
      setCaptchaError(null);
      setSubmitted(true);
    } else if (data && isSuccess && !data.statusCode) {
      toast.error(data.response?.message || "Something went wrong");
    }

    if (isError) {
      setCaptchaError("Captcha verification failed. Please try again.");
      resetCaptcha();

      const errorMessage =
        (error as APIError)?.data?.response?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  }, [data, error, form, isError, isSuccess]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setCaptchaError(null);
      form.reset();
    }
  }, [form, open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-title"
    >
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[8px] border border-cyan-300/25 bg-slate-950 p-6 shadow-[0_0_80px_rgba(34,211,238,0.2)] sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
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
            <h2 id="lead-title" className="pr-10 text-3xl font-black tracking-tight text-white">
              Claim your first automation.
            </h2>
            <p className="mt-3 text-slate-300">
              One process, working output in 14 days. No sales theatre.
            </p>

            <Form {...form}>
              <form
                className="mt-8 flex flex-col gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {([
                    ["name", "Full Name", "text"],
                    ["work_email", "Work Mail", "email"],
                    ["company", "Company", "text"],
                  ] as const).map(([name, label, type]) => (
                    <FormField
                      key={name}
                      control={form.control}
                      name={name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-slate-200">
                            {label} <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input type={type} className={inputClassName} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {([
                    ["department", "Department", "Finance, Sales, Operations..."],
                    ["tools_involved", "Tools Involved", "CRM, ERP, Gmail, Excel, Slack..."],
                  ] as const).map(([name, label, placeholder]) => (
                    <FormField
                      key={name}
                      control={form.control}
                      name={name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-slate-200">
                            {label} <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input className={inputClassName} placeholder={placeholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                <FormField
                  control={form.control}
                  name="process_to_automate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-200">
                        What process do you want automated? <span className="text-red-400">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="The report, reconciliation, CRM update, email queue, ticket flow..."
                          className="resize-none rounded-[8px] border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus-visible:border-cyan-300/70 focus-visible:ring-2 focus-visible:ring-cyan-300/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {captchaError ? <p className="text-sm text-red-400">{captchaError}</p> : null}
                <div className="overflow-x-auto">
                  <div className="origin-left scale-[0.88] sm:scale-100">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={(token) => {
                        setCaptchaToken(token);
                        setCaptchaError(null);
                      }}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 h-12 w-full rounded-full bg-cyan-300 text-sm font-semibold text-slate-950 shadow-[0_0_36px_rgba(34,211,238,0.35)] hover:bg-white"
                >
                  {isLoading ? <Loader className="animate-spin" /> : null}
                  Claim my free POC
                </Button>
              </form>
            </Form>
          </>
        )}
      </div>
    </div>
  );
}
