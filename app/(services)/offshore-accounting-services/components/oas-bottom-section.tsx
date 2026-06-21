"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { CheckIcon, ChevronsUpDown, Loader, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import { usePostServiceOasTwoMutation } from "@/redux/api/serviceApi";
import constants from "@/utils/constants.json";
import { fireConfetti } from "@/lib/confettiFireworks";
import { APIError } from "@/interface/api-response.types";

const helpOptions = [
  "Looking to outsource the finance function?",
  "Looking for audit support?",
  "Need help with financial closure?",
  "Hmm, my issue is not listed. Please reach out to me!",
] as const;

const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Please enter your name.",
  }),
  company: z.string().trim().min(2, {
    message: "Please enter your company name.",
  }),
  help_with: z.string().trim().min(1, {
    message: "Please tell us what we can help you with.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  designation: z.string().trim().min(2, {
    message: "Designation must be at least 2 characters.",
  }),
  city: z.string().trim().min(2, {
    message: "City must be at least 2 characters.",
  }),
});

const fieldClass =
  "h-11 w-full rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#172036] dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF] dark:focus-visible:ring-[#86efac]";
const labelClass =
  "text-left text-[12px] font-medium leading-snug text-slate-600 sm:text-[13px] md:text-[14px] dark:text-[#D1D5DB]";

const comboboxTriggerClass =
  "h-11 w-full justify-between rounded-[14px] border border-[#E6EAF0] bg-white px-3.5 text-left text-sm font-normal shadow-none hover:bg-white dark:border-[#344155] dark:bg-[#172036] dark:text-[#E5E7EB] dark:hover:bg-[#172036]";

export function OasBottomSection() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.offshore_accounting_services,
  );

  const form_id = formsData?.response[0]?.id;

  const [trigger, { data: oasData, isError, isSuccess, error, isLoading }] =
    usePostServiceOasTwoMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      company: "",
      help_with: "",
      phone_number: "",
      email: "",
      designation: "",
      city: "",
    },
  });

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
    if (oasData && isSuccess && oasData?.statusCode) {
      toast.success(oasData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset();
      const link = oasData?.response?.link;
      toast.info("Redirecting to download in 5 seconds...");
      if (link) {
        setTimeout(() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }, 5000);
      }
    }

    if (oasData && isSuccess && !oasData?.statusCode) {
      toast.error(oasData?.response?.message || "Something went wrong");
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
  }, [isSuccess, oasData, isError, error, trigger, form]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  return (
    <section
      className={cn(
        "w-full bg-[#f0f4f8]",
        "box-border px-[10px] py-10 sm:px-4 sm:py-12 md:px-8 md:py-14 lg:py-16",
        "xl:px-14 xl:py-16 2xl:px-[80px] 2xl:py-20",
        "dark:bg-[#0A0A0A]",
      )}
    >
      <div className="mx-auto w-full max-w-[640px] lg:max-w-[720px]">
        <div className="text-center">
          <h2 className="text-balance text-[1.25rem] font-bold leading-snug tracking-tight text-slate-900 sm:text-[1.4rem] md:text-[1.55rem] lg:text-[1.65rem] dark:text-white">
            Want to know more about how we can help you
            <br />
            ease the burden of your finance team?
          </h2>
          <div
            className="mt-4 flex items-center justify-center gap-1.5 sm:mt-5 sm:gap-2"
            aria-hidden
          >
            <span className="size-1.5 shrink-0 rounded-full bg-[#3b82f6] sm:size-2" />
            <span className="size-1.5 shrink-0 rounded-full bg-[#3b82f6] sm:size-2" />
            <span className="size-1.5 shrink-0 rounded-full bg-[#3b82f6] sm:size-2" />
            <span className="ml-0.5 h-0.5 w-9 rounded-full bg-[#3b82f6] sm:ml-1 sm:w-11" />
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-6 md:mt-12"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>
                    So, you&apos;re looking to outsource your finance function?
                    We&apos;ll call you &quot;The Financial Wizard&quot;. But,
                    what&apos;s your name?
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={fieldClass}
                      autoComplete="name"
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
                  <FormLabel className={labelClass}>
                    Thank you! Now, what&apos;s the name of your company?
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={fieldClass}
                      autoComplete="organization"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="help_with"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>
                    What can we help you with?
                  </FormLabel>
                  <Popover open={helpOpen} onOpenChange={setHelpOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          type="button"
                          variant="outline"
                          role="combobox"
                          className={cn(
                            comboboxTriggerClass,
                            !field.value && "text-muted-foreground",
                          )}
                          ref={field.ref}
                          onBlur={field.onBlur}
                        >
                          <span className="line-clamp-2 min-w-0 flex-1 text-left leading-snug">
                            {field.value || "Select an option"}
                          </span>
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="w-[min(var(--radix-popover-trigger-width),calc(100vw-2rem))] overflow-hidden p-0 dark:border-[#1F2937] dark:bg-[#111827] sm:w-[var(--radix-popover-trigger-width)]"
                    >
                      <div className="h-1 w-full bg-[#3b82f6]" aria-hidden />
                      <Command>
                        <CommandInput
                          placeholder="Search..."
                          className="h-9 border-0"
                        />
                        <CommandList>
                          <CommandEmpty>No option found.</CommandEmpty>
                          <CommandGroup>
                            {helpOptions.map((option) => (
                              <CommandItem
                                key={option}
                                value={option}
                                className="cursor-pointer text-sm leading-snug"
                                onSelect={() => {
                                  form.setValue("help_with", option, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                  });
                                  setHelpOpen(false);
                                }}
                              >
                                {option}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4 shrink-0",
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

            <p className="text-center text-[13px] font-semibold leading-snug text-slate-800 sm:text-left sm:text-[14px] dark:text-slate-200">
              Please leave us your contact details here so we can contact you!
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldClass}
                        type="tel"
                        autoComplete="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Email</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldClass}
                        type="email"
                        autoComplete="email"
                        {...field}
                      />
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
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>City</FormLabel>
                    <FormControl>
                      <Input className={fieldClass} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-4 pt-1 sm:pt-2">
              {captchaError ? (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {captchaError}
                </p>
              ) : null}
              <div className="flex w-full flex-col items-stretch gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="w-full min-w-0 overflow-x-auto sm:max-w-[320px]">
                  <div className="origin-left scale-[0.88] sm:scale-95 lg:scale-100">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={setToken}
                    />
                  </div>
                </div>
                <Button
                  className="h-12 w-full rounded-[12px] bg-[#221971] px-6 text-[14px] font-semibold leading-[1.4em] text-white hover:bg-[#181253] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a] xl:w-auto xl:min-w-[220px]"
                  type="submit"
                >
                  {isLoading ? <Loader className="animate-spin" /> : null}
                  <span className="inline-flex items-center justify-center gap-2">
                    Can&apos;t wait to hear from you
                    <Smile
                      className="size-4 shrink-0 text-white"
                      strokeWidth={2}
                    />
                  </span>
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
