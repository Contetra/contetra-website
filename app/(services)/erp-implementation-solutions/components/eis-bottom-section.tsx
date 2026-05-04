"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { APIError } from "@/interface/api-response.types";
import { fireConfetti } from "@/lib/confettiFireworks";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import {  usePostServiceEisTwoMutation } from "@/redux/api/serviceApi";
import constants from "@/utils/constants.json";
import { toast } from "sonner";

const helpOptions = [
  "I am facing issues with my current ERP system.",
  "My business is scaling faster than my current ERP system can handle!",
  "I need guidance regarding shifting to another ERP system.",
  "Hmm, my issue is not listed. Please reach out to me!",
] as const;

const currencyOptions = [
  "INR",
  "USD",
  "EUR",
  "AED",
  "MNT",
  "CAD",
  "ILS",
] as const;

const inputClass =
  "h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]";

const comboboxTriggerClass = cn(
  "h-11 w-full justify-between rounded-[14px] border-[#E6EAF0] bg-white px-3 text-left text-sm font-normal leading-[1.4em] text-[#111827] shadow-xs hover:bg-white dark:border-[#344155] dark:bg-[#0F172A] dark:text-[#E5E7EB] dark:hover:bg-[#0F172A]",
);

const bottomFormSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z.string().trim().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  turnover: z.string().trim().min(1, {
    message: "Please enter the company turnover.",
  }),
  currency: z.string().trim().min(1, {
    message: "Please select the currency.",
  }),
  accounting_system: z.string().trim().min(1, {
    message: "Please enter your current accounting system.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Your number must be at least 10 digits.",
  }),
  work_email: z.email({
    message: "Please enter a valid work email address.",
  }),
  help_topic: z.string().trim().min(1, {
    message: "Please select what you need help with.",
  }),
});

export const EisBottomSection = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.erp_implementation_solutions,
  );
  const form_id = formsData?.response[0]?.id;

  const [trigger, { data: eisData, isError, isSuccess, error, isLoading }] =
  usePostServiceEisTwoMutation();

  const form = useForm<z.infer<typeof bottomFormSchema>>({
    resolver: zodResolver(bottomFormSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      company: "",
      turnover: "",
      currency: currencyOptions[0],
      accounting_system: "",
      phone_number: "",
      work_email: "",
      help_topic: helpOptions[0],
    },
  });

  function onSubmit(data: z.infer<typeof bottomFormSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }

    trigger({
      body: {
        ...data,
        form_id: form_id ?? "",
      },
      captchaToken,
    });

    setCaptchaError(null);
    setCaptchaToken(null);
    turnstileRef.current?.reset();
  }

  useEffect(() => {
    if (eisData && isSuccess && eisData?.statusCode) {
      toast.success(eisData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset({
        name: "",
        company: "",
        turnover: "",
        currency: currencyOptions[0],
        accounting_system: "",
        phone_number: "",
        work_email: "",
        help_topic: helpOptions[0],
      });
      const link = eisData?.response?.link;
      if (link) {
        toast.info("Redirecting to download in 5 seconds...");
        setTimeout(() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }, 5000);
      }
    }

    if (eisData && isSuccess && !eisData?.statusCode) {
      toast.error(eisData?.response?.message || "Something went wrong");
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
  }, [eisData, isError, isSuccess, error, form]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  return (
    <section className="w-full py-6 sm:py-8 lg:py-10 bg-[#F8F9FE]">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center px-4 sm:px-6 md:px-8">
        <h2 className="text-balance text-center text-[22px] font-semibold leading-[1.35] text-[#252B42] dark:text-white sm:text-[26px] lg:text-[28px]">
          Want to know more about how we can help you by being your ERP
          functional consultants?
        </h2>

        <div
          className="mt-4 flex items-center justify-center gap-2.5 sm:mt-5"
          aria-hidden
        >
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4C8DEB]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4C8DEB]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4C8DEB]" />
          </div>
          <div className="h-[3px] w-[44px] rounded-full bg-[#4C8DEB] sm:w-[52px]" />
        </div>

        <div className="mt-8 w-full rounded-[24px] border border-[#EEF2F7] bg-white p-4 shadow-[0_18px_55px_rgba(18,12,84,0.08)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] sm:mt-10 sm:rounded-[28px] sm:p-5 lg:p-6">
          <div className="w-full rounded-[20px] bg-[#FFFDF9] p-4 dark:bg-[#172036] sm:rounded-[24px] sm:p-5 lg:p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5 sm:gap-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[12px] font-medium leading-[1.45] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                        So, you&apos;re looking for an ERP system suitable for
                        you. We&apos;ll call you &quot;The Techie Pioneer&quot;.
                        But, what&apos;s your name?
                      </FormLabel>
                      <FormControl>
                        <Input className={inputClass} {...field} />
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
                      <FormLabel className="text-[12px] font-medium leading-[1.45] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                        Now, what&apos;s the name of your company?
                      </FormLabel>
                      <FormControl>
                        <Input className={inputClass} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(100px,128px)] sm:gap-4">
                  <FormField
                    control={form.control}
                    name="turnover"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-medium leading-[1.45] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                          What is the current turnover of the company?
                        </FormLabel>
                        <FormControl>
                          <Input className={inputClass} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-medium leading-[1.45] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                          Select
                        </FormLabel>
                        <Popover
                          open={currencyOpen}
                          onOpenChange={setCurrencyOpen}
                        >
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  comboboxTriggerClass,
                                  !field.value && "text-muted-foreground",
                                )}
                                ref={field.ref}
                                onBlur={field.onBlur}
                              >
                                <span className="truncate">{field.value}</span>
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
                                placeholder="Search currency..."
                                className="h-9"
                              />
                              <CommandList>
                                <CommandEmpty>No currency found.</CommandEmpty>
                                <CommandGroup>
                                  {currencyOptions.map((option) => (
                                    <CommandItem
                                      key={option}
                                      value={option}
                                      className="cursor-pointer text-sm leading-[1.4em]"
                                      onSelect={() => {
                                        form.setValue("currency", option, {
                                          shouldValidate: true,
                                          shouldDirty: true,
                                        });
                                        setCurrencyOpen(false);
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
                </div>

                <FormField
                  control={form.control}
                  name="accounting_system"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[12px] font-medium leading-[1.45] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                        Current accounting system?
                      </FormLabel>
                      <FormControl>
                        <Input className={inputClass} {...field} />
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
                      <FormLabel className="text-[12px] font-medium leading-[1.45] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                        Your Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          className={inputClass}
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
                  name="work_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[12px] font-medium leading-[1.45] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                        Your email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className={inputClass}
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
                  name="help_topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[12px] font-medium leading-[1.45] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                        What can we help you with?
                      </FormLabel>
                      <Popover open={helpOpen} onOpenChange={setHelpOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                comboboxTriggerClass,
                                !field.value && "text-muted-foreground",
                              )}
                              ref={field.ref}
                              onBlur={field.onBlur}
                            >
                              <span className="line-clamp-2 text-left leading-snug">
                                {field.value}
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
                              placeholder="Search options..."
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>No option found.</CommandEmpty>
                              <CommandGroup>
                                {helpOptions.map((option) => (
                                  <CommandItem
                                    key={option}
                                    value={option}
                                    className="cursor-pointer text-sm leading-[1.4em]"
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

                <div className="flex flex-col items-center gap-5 pt-1 sm:gap-6">
                  <div className="flex w-full flex-col items-center gap-2">
                    {captchaError ? (
                      <p className="text-center text-sm text-red-500">
                        {captchaError}
                      </p>
                    ) : null}
                    <div className="w-full overflow-x-auto">
                      <div className="mx-auto flex w-fit max-w-full origin-center scale-[0.88] sm:scale-[0.95] lg:scale-100">
                        <Turnstile
                          ref={turnstileRef}
                          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                          onSuccess={setToken}
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="h-12 min-w-[200px] rounded-[12px] bg-[#4C8DEB] px-8 text-[14px] font-semibold text-white hover:bg-[#3d7bd4]"
                  >
                    {isLoading ? (
                      <Loader className="h-5 w-5 animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
