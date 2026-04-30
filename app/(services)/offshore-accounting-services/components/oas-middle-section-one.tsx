"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { ChevronDown, Loader, Smile } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { cn } from "@/lib/utils";
import { toast } from "sonner";

/** Replace or extend items as needed */
export const oasMiddleAccordionItems = [
  {
    id: "oas-acc-1",
    title: "Full suite book-keeping and accounting services",
    content:
      "We work with companies, NPOs, trusts & businesses of all sizes – our prices are tough to beat (and you get the quality of ex-Big 4 accountants).",
  },
  {
    id: "oas-acc-2",
    title: "Complete AR and AP management",
    content:
      "Placeholder: describe your AR/AP scope, tools, and SLAs. Edit this in `oasMiddleAccordionItems`.",
  },
  {
    id: "oas-acc-3",
    title: "Process Automations",
    content:
      "Placeholder: outline automation for close, reconciliations, or workflows.",
  },
  {
    id: "oas-acc-4",
    title: "US GAAP or IFRS technical accounting advisory",
    content:
      "Placeholder: technical memos, policy alignment, and GAAP/IFRS support.",
  },
] as const;

const OAS_ACCORDION_DEFAULT = oasMiddleAccordionItems[0].id;

const formSchema = z.object({
  first_name: z.string().trim().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().trim().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  work_email: z.email({
    message: "Please enter a valid work email address.",
  }),
  company: z.string().trim().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  designation: z.string().trim().min(2, {
    message: "Designation must be at least 2 characters.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Your number must be at least 10 digits.",
  }),
  city: z.string().trim().min(2, {
    message: "City must be at least 2 characters.",
  }),
});

function OasMiddleSectionRightForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      first_name: "",
      last_name: "",
      work_email: "",
      company: "",
      designation: "",
      phone_number: "",
      city: "",
    },
  });

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Offshore accounting lead form", values);
    toast.info(
      "Form UI is ready. Connect the API endpoint to enable live submissions."
    );

    setCaptchaError(null);
    setCaptchaToken(null);
    turnstileRef.current?.reset();
    setIsSubmitting(false);
  }

  const fieldClass =
    "h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]";
  const labelClass =
    "text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]";

  return (
    <div className="min-w-0 w-full py-2 sm:py-3 lg:py-0">
      <div className="w-full rounded-[20px] border border-[#EEF2F7] bg-white p-3 shadow-[0_18px_55px_rgba(18,12,84,0.08)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] sm:rounded-[24px] sm:p-4 md:p-5 lg:rounded-[28px] xl:p-6">
        <div className="relative w-full overflow-hidden rounded-[16px] bg-[#FFFDF9] p-3 dark:bg-[#172036] sm:rounded-[20px] sm:p-4 md:rounded-[24px] md:p-5 lg:p-6">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-25 bg-[radial-gradient(circle_at_1px_1px,rgb(212_207_196/0.55)_1px,transparent_0)] bg-[length:22px_22px]"
            aria-hidden
          />
          <div className="relative z-[1]">
            <h2 className="mx-auto flex max-w-[min(100%,520px)] flex-col items-center gap-0 px-0.5 text-center text-[16px] font-semibold leading-none tracking-tight text-[#1A1A1A] dark:text-white sm:gap-0.5 sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[23px] 2xl:text-[24px]">
              <span className="block leading-[1.2] text-[#1A1A1A] dark:text-white sm:leading-[1.22]">
                We&apos;d love to understand more
              </span>
              <span
                className={cn(
                  "block leading-[1.2] sm:leading-[1.22]",
                  "font-semibold text-[#B87333] dark:text-[#E8B86D]",
                  "underline decoration-wavy decoration-[#C4A574] decoration-[1.5px] underline-offset-[4px] sm:decoration-2 sm:underline-offset-[5px]"
                )}
              >
                about your requirements
              </span>
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-4 md:mt-6"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>First Name</FormLabel>
                        <FormControl>
                          <Input className={fieldClass} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Last Name</FormLabel>
                        <FormControl>
                          <Input className={fieldClass} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="work_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Work Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className={fieldClass}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Company</FormLabel>
                        <FormControl>
                          <Input className={fieldClass} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Designation</FormLabel>
                        <FormControl>
                          <Input className={fieldClass} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Your Number</FormLabel>
                        <FormControl>
                          <Input className={fieldClass} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel className={labelClass}>City</FormLabel>
                        <FormControl>
                          <Input className={fieldClass} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mt-0 flex flex-col gap-3 sm:mt-1 sm:gap-4">
                  {captchaError ? (
                    <p className="text-sm leading-[1.4em] text-red-500">
                      {captchaError}
                    </p>
                  ) : null}
                  <div className="w-full overflow-x-auto">
                    <div className="origin-left scale-[0.88] sm:scale-[0.95] lg:scale-100">
                      <Turnstile
                        ref={turnstileRef}
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        onSuccess={setToken}
                      />
                    </div>
                  </div>

                  <Button
                    className="h-12 w-full rounded-[12px] bg-[#0a0a3c] px-6 text-[14px] font-semibold leading-[1.4em] text-white hover:bg-[#08082f] dark:bg-[#0a0a3c] dark:hover:bg-[#12125a]"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <Loader className="mr-2 size-4 animate-spin" />
                    ) : null}
                    <span className="inline-flex items-center justify-center gap-2">
                      Can&apos;t wait to hear from you
                      <Smile className="size-4 shrink-0 text-white" strokeWidth={2} />
                    </span>
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OasMiddleSectionOne() {
  return (
    <section className="w-full bg-white px-[10px] py-8 sm:px-4 sm:py-10 md:px-8 md:py-12 lg:py-14 xl:px-14 xl:py-16 2xl:px-[80px]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 sm:gap-9 md:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-11 xl:gap-12 2xl:gap-14">
        <div className="min-w-0">
          <h2 className="text-balance text-[1.3rem] font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-[1.4rem] md:text-[1.55rem] md:leading-[1.18] lg:text-[1.65rem] xl:text-[1.72rem] 2xl:text-[1.75rem]">
            We&apos;ll keep your accounting on track, No need to worry, just sit
            back!
          </h2>
          <div className="mt-4 space-y-3 text-pretty text-[13.5px] leading-[1.62] text-slate-600 sm:mt-5 sm:space-y-[1.1rem] sm:text-[14.5px] sm:leading-[1.64] md:mt-6 md:space-y-5 md:text-[15.5px] md:leading-[1.65] lg:text-[16px]">
            <p>
              Okay, while we&apos;re clearly bad at cheesy rhymes, we&apos;re
              really good with{" "}
              <strong className="font-semibold text-slate-800">
                managing end-to-end finance and accounting
              </strong>{" "}
              for you, so you can run your business stress-free.
            </p>
            <p>
              <strong className="font-semibold text-slate-800">
                Who are we?
              </strong>{" "}
              A bunch of ex-Big 4 consultants and industry accountants who are
              savvy with the latest GAAP updates, have hands-on audit experience
              and are obsessed with making sure you never worry about financial
              reporting again!
            </p>
            <p className="italic text-slate-700">
              So don&apos;t hire an army of accountants. We&apos;ll take care of
              everything:
            </p>
          </div>

          <div className="mt-6 min-w-0 w-full sm:mt-8 md:mt-9">
            <Accordion
              type="single"
              collapsible
              defaultValue={OAS_ACCORDION_DEFAULT}
              className="w-full space-y-2 sm:space-y-2.5 md:space-y-3"
            >
              {oasMiddleAccordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="overflow-hidden rounded-lg border-0 !border-b-0 shadow-none"
                >
                  <AccordionTrigger
                    className={cn(
                      "group items-center gap-2.5 px-3 py-2.5 text-left text-[13.5px] font-semibold leading-snug transition-colors sm:gap-3 sm:px-4 sm:py-3 sm:text-[14.5px] md:text-[15px]",
                      "hover:no-underline [&>svg:last-child]:hidden",
                      "border-0",
                      "data-[state=closed]:rounded-lg data-[state=closed]:bg-[#F0F1F4] data-[state=closed]:text-neutral-900",
                      "data-[state=open]:rounded-b-none data-[state=open]:rounded-t-lg data-[state=open]:bg-[#0a0a3c] data-[state=open]:text-white"
                    )}
                  >
                    <span
                      className={cn(
                        "size-3 shrink-0 self-center rounded-full border-2 border-neutral-900 bg-transparent",
                        "group-data-[state=open]:border-0 group-data-[state=open]:bg-[#5eead4]"
                      )}
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 pr-1">{item.title}</span>
                    <ChevronDown
                      strokeWidth={2}
                      className="size-[18px] shrink-0 text-neutral-900 group-data-[state=open]:text-white sm:size-5"
                    />
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      "rounded-b-lg border-0 bg-white px-3 pt-2 pb-3 text-[13.5px] leading-relaxed text-neutral-900 shadow-none sm:px-5 sm:pb-4 sm:text-[14.5px] md:text-[15px]"
                    )}
                  >
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <OasMiddleSectionRightForm />
      </div>
    </section>
  );
}
