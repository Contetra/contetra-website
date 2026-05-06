"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, ChevronsUpDown, Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { APIError } from "@/interface/api-response.types";
import { fireConfetti } from "@/lib/confettiFireworks";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import constants from "@/utils/constants.json";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { usePostServiceIrMutation } from "@/redux/api/serviceApi";

const helpOptions = [
  "IPO readiness assessment & gap analysis",
  "Technical accounting / IND-AS / IFRS / US GAAP",
  "ERP, automation & finance systems",
  "CFO office / FP&A / governance",
  "GCC or shared services setup",
  "Something else — please reach out",
] as const;

const formSchema = z.object({
  first_name: z.string().trim().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().trim().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  work_email: z.email({
    message: "Please enter a valid work email address.",
  }),
  organization_name: z.string().trim().min(2, {
    message: "Organization name must be at least 2 characters.",
  }),
  annual_revenue: z.string().trim().min(1, {
    message: "Please enter annual revenue.",
  }),
  help_topic: z.string().trim().min(1, {
    message: "Please select how we can best help you.",
  }),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const inputClassName =
  "h-11 rounded-[14px] border border-[#E2E2E2] bg-[#F0F0F0] px-3.5 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B] shadow-none focus-visible:border-[#CFCFCF] focus-visible:ring-1 focus-visible:ring-[#2D0A57]/20";

const textareaClassName =
  "min-h-[100px] w-full resize-y rounded-[14px] border border-[#E2E2E2] bg-[#F0F0F0] px-3.5 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B] outline-none focus-visible:border-[#CFCFCF] focus-visible:ring-1 focus-visible:ring-[#2D0A57]/20";

export function IrBottomSection() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      work_email: "",
      organization_name: "",
      annual_revenue: "",
      help_topic: "",
      message: "",
    },
  });

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.corporate_training,
  );

  const form_id = formsData?.response[0]?.id;

  const [trigger, { data: ctData, isError, isSuccess, error, isLoading }] =
    usePostServiceIrMutation();

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }

    trigger({
      body: { ...data, form_id: form_id ?? "" },
      captchaToken,
    });

    setCaptchaError(null);

    setCaptchaToken(null);
    turnstileRef.current?.reset();
  }

  useEffect(() => {
    if (ctData && isSuccess && ctData?.statusCode) {
      toast.success(ctData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset();
      const link = ctData?.response?.link;
      if (link) {
        setTimeout(() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }, 5000);
      }
    }

    if (ctData && isSuccess && !ctData?.statusCode) {
      toast.error(ctData?.response?.message || "Something went wrong");
    }

    if (isError) {
      setCaptchaError("Captcha verification failed. Please try again.");
      turnstileRef.current?.reset();
      setCaptchaToken(null);

      if ((error as APIError)?.data) {
        const apiError = error as APIError;
        const errorMessage =
          apiError?.data?.response?.message || "Something went wrong";
        toast.error(errorMessage);
      }
    }
  }, [isSuccess, ctData, isError, error, trigger, form]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  return (
    <section className="w-full bg-[#0a051a] py-10 sm:py-12 md:py-14 lg:py-16 dark:bg-[#05030d]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,1fr)] lg:items-start lg:gap-12 xl:gap-16 xl:px-0">
        <div className="max-w-[560px] text-white lg:pt-2">
          <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]">
            Start Your
            <br />
            <span className="italic text-[#f2d05a]">IPO Readiness</span>
            <br />
            <span className="italic text-[#f2d05a]">Assessment</span>
          </h2>

          <p className="mt-6 max-w-[32rem] text-base leading-[1.65] text-white/95 sm:text-[17px]">
            You&apos;re here because IPO readiness isn&apos;t just about filing
            documents. Tell us a little about your business, and we&apos;ll
            assess where you stand and what needs fixing before the markets
            scrutinize you.
          </p>
          <p className="mt-4 max-w-[32rem] text-base leading-[1.65] text-white/95 sm:text-[17px]">
            This assessment helps us understand your current finance maturity,
            systems, and readiness gaps.
          </p>
        </div>

        <div className="w-full lg:max-w-[520px] lg:justify-self-end">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-6 md:p-7">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className={inputClassName}
                            placeholder="First Name *"
                            {...field}
                          />
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
                        <FormControl>
                          <Input
                            className={inputClassName}
                            placeholder="Last Name *"
                            {...field}
                          />
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
                        <FormControl>
                          <Input
                            className={inputClassName}
                            placeholder="Your Phone *"
                            {...field}
                          />
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
                        <FormControl>
                          <Input
                            type="email"
                            className={inputClassName}
                            placeholder="Your Work Email Address *"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organization_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className={inputClassName}
                            placeholder="Organization Name *"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="annual_revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className={inputClassName}
                            placeholder="Annual Revenue *"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="help_topic"
                  render={({ field }) => (
                    <FormItem>
                      <Popover open={helpOpen} onOpenChange={setHelpOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              type="button"
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "h-11 w-full justify-between rounded-[14px] border border-[#E2E2E2] bg-[#F0F0F0] px-3.5 text-left text-sm font-normal text-[#1A1A1A] shadow-none hover:bg-[#F0F0F0]",
                                !field.value && "text-[#6B6B6B]",
                              )}
                              ref={field.ref}
                              onBlur={field.onBlur}
                            >
                              <span className="truncate">
                                {field.value || "How can we best help you?"}
                              </span>
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          align="start"
                          className="w-[min(var(--radix-popover-trigger-width),calc(100vw-2rem))] p-0 sm:w-[var(--radix-popover-trigger-width)]"
                        >
                          <Command>
                            <CommandInput
                              placeholder="Search..."
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>No option found.</CommandEmpty>
                              <CommandGroup>
                                {helpOptions.map((option) => (
                                  <CommandItem
                                    key={option}
                                    value={option}
                                    className="cursor-pointer text-sm"
                                    onSelect={() => {
                                      form.setValue("help_topic", option, {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                      });
                                      setHelpOpen(false);
                                    }}
                                  >
                                    {option}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        option === field.value
                                          ? "opacity-100"
                                          : "opacity-0",
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          className={textareaClassName}
                          placeholder="Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mt-1 flex flex-col gap-4 sm:flex-col sm:items-end sm:justify-between">
                  <div className="flex w-full min-w-0 flex-col gap-2 sm:max-w-[min(100%,360px)]">
                    {captchaError ? (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {captchaError}
                      </p>
                    ) : null}
                    <div className="w-full overflow-x-auto">
                      <div className="origin-left scale-[0.88] sm:scale-100">
                        <Turnstile
                          ref={turnstileRef}
                          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                          onSuccess={setToken}
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    className="h-12 w-full rounded-[12px] bg-contetra-green px-6 text-[14px] font-semibold leading-[1.4em] text-white hover:bg-[#181253] xl:w-auto xl:min-w-[220px]"
                    type="submit"
                  >
                    {isLoading ? <Loader className="animate-spin" /> : null}
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
