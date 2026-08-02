"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { CheckIcon, ChevronsUpDown, Loader } from "lucide-react";
import { useEffect, useRef, useState, type ReactElement } from "react";
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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import constants from "@/utils/constants.json";
import { usePostServiceEisOneMutation } from "@/redux/api/serviceApi";
import { fireConfetti } from "@/lib/confettiFireworks";
import { APIError } from "@/interface/api-response.types";

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

const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
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
  industry: z.string().trim().min(2, {
    message: "Industry must be at least 2 characters.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Your number must be at least 10 digits.",
  }),
  accounting_system: z.string().trim().min(1, {
    message: "Please enter your current accounting system.",
  }),
  help_topic: z.string().trim().min(1, {
    message: "Please select what you need help with.",
  }),
  turnover: z.string().trim().min(1, {
    message: "Please enter the company turnover.",
  }),
  currency: z.string().trim().min(1, {
    message: "Please select the currency.",
  }),
});

interface ErpFormProps {
  trigger?: ReactElement;
}

export const ErpForm = ({ trigger }: ErpFormProps) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.erp_implementation_solutions,
  );

  const form_id = formsData?.response[0]?.id;

  const [submitForm, { data: eisData, isError, isSuccess, error, isLoading }] =
    usePostServiceEisOneMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      work_email: "",
      company: "",
      designation: "",
      industry: "",
      phone_number: "",
      accounting_system: "",
      help_topic: helpOptions[0],
      turnover: "",
      currency: currencyOptions[0],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }

    submitForm({
      body: { ...data, form_id: form_id ?? "" },
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
      form.reset();
      setSheetOpen(false);
      const link = eisData?.response?.link;
      toast.info("Redirecting to download in 5 seconds...");
      if (link) {
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
  }, [isSuccess, eisData, isError, error, submitForm, form]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        {trigger ?? <Button type="button">Book an ERP Review Call</Button>}
      </SheetTrigger>

      <SheetContent
        side="center"
        showCloseButton
        className="flex max-h-[90vh] flex-col gap-0 overflow-hidden p-0 sm:max-w-5xl"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Book an ERP Review Call</SheetTitle>
          <SheetDescription>
            Complete the ERP assessment form to schedule a review.
          </SheetDescription>
        </SheetHeader>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="min-w-0 w-full px-1 py-2 sm:px-2 sm:py-4">
            <div className="w-full rounded-[24px] border border-[#EEF2F7] bg-white p-3 shadow-[0_18px_55px_rgba(18,12,84,0.08)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] sm:rounded-[28px] sm:p-4 lg:p-5">
              <div className="w-full rounded-[20px] bg-[#FFFDF9] p-4 dark:bg-[#172036] sm:rounded-[24px] sm:p-5 lg:p-6">

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-6 flex flex-col gap-4"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              Work Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                className="h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              Company
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              Designation
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              Industry
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              Your Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="accounting_system"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2 xl:col-span-1">
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              Current accounting system?
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                          <FormItem className="sm:col-span-2 xl:col-span-2">
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              What can we help you with?
                            </FormLabel>
                            <Popover open={helpOpen} onOpenChange={setHelpOpen}>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                      "h-11 w-full justify-between rounded-[14px] border-[#E6EAF0] bg-white px-3 text-left text-sm font-normal leading-[1.4em] text-[#111827] shadow-xs hover:bg-white dark:border-[#344155] dark:bg-[#0F172A] dark:text-[#E5E7EB] dark:hover:bg-[#0F172A]",
                                      !field.value && "text-muted-foreground",
                                    )}
                                    ref={field.ref}
                                    onBlur={field.onBlur}
                                  >
                                    <span className="truncate">
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
                                    <CommandEmpty>
                                      No option found.
                                    </CommandEmpty>
                                    <CommandGroup>
                                      {helpOptions.map((option) => (
                                        <CommandItem
                                          key={option}
                                          value={option}
                                          className="cursor-pointer text-sm leading-[1.4em]"
                                          onSelect={() => {
                                            form.setValue(
                                              "help_topic",
                                              option,
                                              {
                                                shouldValidate: true,
                                                shouldDirty: true,
                                              },
                                            );
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
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_120px]">
                      <FormField
                        control={form.control}
                        name="turnover"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              What is the current turnover of the company?
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
                                {...field}
                              />
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
                            <FormLabel className="text-[12px] font-medium leading-[1.4em] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                              Currency
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
                                      "h-11 w-full justify-between rounded-[14px] border-[#E6EAF0] bg-white px-3 text-left text-sm font-normal leading-[1.4em] text-[#111827] shadow-xs hover:bg-white dark:border-[#344155] dark:bg-[#0F172A] dark:text-[#E5E7EB] dark:hover:bg-[#0F172A]",
                                      !field.value && "text-muted-foreground",
                                    )}
                                    ref={field.ref}
                                    onBlur={field.onBlur}
                                  >
                                    <span className="truncate">
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
                                    placeholder="Search currency..."
                                    className="h-9"
                                  />
                                  <CommandList>
                                    <CommandEmpty>
                                      No currency found.
                                    </CommandEmpty>
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

                    <div className="mt-1 flex flex-col gap-4 xl:flex-col xl:items-end xl:justify-between">
                      <div className="flex w-full min-w-0 flex-col gap-2 xl:w-auto">
                        {captchaError ? (
                          <p className="text-sm leading-[1.4em] text-red-500">
                            {captchaError}
                          </p>
                        ) : null}
                        <div className="w-full overflow-x-auto xl:overflow-visible">
                          <div className="origin-left scale-[0.88] sm:scale-[0.95] lg:scale-100">
                            <Turnstile
                              ref={turnstileRef}
                              siteKey={
                                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!
                              }
                              onSuccess={setToken}
                            />
                          </div>
                        </div>
                      </div>

                      <Button
                        className="h-12 w-full rounded-[12px] bg-[#221971] px-6 text-[14px] font-semibold leading-[1.4em] text-white hover:bg-[#181253] xl:w-auto xl:min-w-[220px]"
                        type="submit"
                      >
                        {isLoading ? <Loader className="animate-spin" /> : null}
                        Book A ERP Review Call
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
