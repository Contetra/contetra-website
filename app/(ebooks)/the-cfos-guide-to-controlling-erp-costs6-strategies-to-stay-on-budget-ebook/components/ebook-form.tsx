"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
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
import { fireConfetti } from "@/lib/confettiFireworks";
import { cn } from "@/lib/utils";
import { usePostEbookTcgtcecstsobeMutation } from "@/redux/api/ebookApi";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { APIError } from "@/interface/api-response.types";
import { CheckIcon, ChevronsUpDown, Loader } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import constants from "@/utils/constants.json";
import { useGetFormsQuery } from "@/redux/api/commonApi";

const CURRENCY_OPTIONS = [
  "INR",
  "USD",
  "EUR",
  "AED",
  "MNT",
  "CAD",
  "ILS",
] as const;

const FormSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, {
      message: "Full name must be at least 2 characters.",
    })
    .max(20, {
      message: "Full name must not exceed 20 characters.",
    })
    .regex(/^[A-Za-z]+( [A-Za-z]+)*$/, {
      message: "Full name must contain only letters.",
    }),
  email: z.email({
    message: "Please enter a valid email address",
  }),
  mobile_number: z
    .string()
    .min(10, {
      message: "Mobile number must be at least 10 digits.",
    })
    .max(15, {
      message: "Mobile number must not exceed 15 digits.",
    })
    .regex(/^[0-9]+$/, {
      message: "Mobile number must contain only digits.",
    }),
  company: z
    .string()
    .min(2, {
      message: "Company must be at least 2 characters.",
    })
    .max(20, {
      message: "Company must not exceed 20 characters.",
    })
    .regex(/^[A-Za-z]+( [A-Za-z]+)*$/, {
      message: "Company name must contain only letters.",
    }),
  designation: z
    .string()
    .min(2, {
      message: "Designation must be at least 2 characters.",
    })
    .max(20, {
      message: "Designation must not exceed 20 characters.",
    })
    .regex(/^[A-Za-z]+( [A-Za-z]+)*$/, {
      message: "Designation name must contain only letters.",
    }),
  business_industry: z
    .string()
    .min(2, {
      message: "Business industry must be at least 2 characters.",
    })
    .max(50, {
      message: "Business industry must not exceed 50 characters.",
    })
    .regex(/^[A-Za-z]+( [A-Za-z]+)*$/, {
      message: "Business industry must contain only letters.",
    }),
  annual_turnover: z
    .string()
    .trim()
    .min(1, { message: "Please enter annual turnover." })
    .max(100, {
      message: "Annual turnover must not exceed 100 characters.",
    }),
  currency: z.enum(CURRENCY_OPTIONS, {
    message: "Please select a currency.",
  }),
});

export const EbookForm = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const [
    trigger,
    { data: tcgtcecstsobeData, isError, isSuccess, error, isLoading },
  ] = usePostEbookTcgtcecstsobeMutation();

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids
      .the_cfos_guide_to_controlling_erp_costs6_strategies_to_stay_on_budget,
  );

  const form_id = formsData?.response[0]?.id;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      full_name: "",
      email: "",
      mobile_number: "",
      company: "",
      designation: "",
      business_industry: "",
      annual_turnover: "",
      currency: "INR",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }
    trigger({
      body: { ...data, form_id: form_id ?? "" },
      captchaToken,
    });
  }

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  useEffect(() => {
    if (tcgtcecstsobeData && isSuccess && tcgtcecstsobeData?.statusCode) {
      toast.success(tcgtcecstsobeData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset();
      const link = tcgtcecstsobeData?.response?.link;
      toast.info("Opening download in a new tab in 5 seconds...");
      if (link) {
        setTimeout(() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }, 5000);
      }
    }

    if (tcgtcecstsobeData && isSuccess && !tcgtcecstsobeData?.statusCode) {
      toast.error(
        tcgtcecstsobeData?.response?.message || "Something went wrong",
      );
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
  }, [isSuccess, tcgtcecstsobeData, isError, error, trigger, form]);

  return (
    <div className="w-full md:w-[50%] flex justify-center items-start flex-col gap-10">
      <div className="">
        <Highlighter padding={10} action="underline" color="#FF9800">
          <h1 className="text-[25px] xl:text-[30px] font-medium leading-[1.2em]">
            The CFO&apos;s guide to Controlling ERP Costs:<br />6 Strategies to Stay on
            Budget
          </h1>
        </Highlighter>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-full xl:w-[72%] flex flex-col space-y-6"
        >
          <div className="gap-4 items-center w-full grid grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      required
                      className="bg-white"
                      placeholder="Enter full name."
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      required
                      className="bg-white"
                      placeholder="Enter email address."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      required
                      className="bg-white"
                      placeholder="Enter phone number."
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
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      required
                      className="bg-white"
                      placeholder="Enter company name."
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
                  <FormLabel>Designation</FormLabel>
                  <FormControl>
                    <Input
                      required
                      className="bg-white"
                      placeholder="Enter designation."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="business_industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Industry</FormLabel>
                  <FormControl>
                    <Input
                      required
                      className="bg-white"
                      placeholder="Enter business industry."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-4 md:col-span-2 md:grid md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] md:gap-4">
              <FormField
                control={form.control}
                name="annual_turnover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Turnover</FormLabel>
                    <FormControl>
                      <Input
                        required
                        className="bg-white"
                        placeholder="Enter annual turnover."
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
                    <FormLabel>Select Currency</FormLabel>
                    <Popover open={currencyOpen} onOpenChange={setCurrencyOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between bg-white font-normal",
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
                              {CURRENCY_OPTIONS.map((code) => (
                                <CommandItem
                                  key={code}
                                  value={code}
                                  className="cursor-pointer"
                                  onSelect={() => {
                                    form.setValue("currency", code, {
                                      shouldValidate: true,
                                      shouldDirty: true,
                                    });
                                    setCurrencyOpen(false);
                                  }}
                                >
                                  {code}
                                  <CheckIcon
                                    className={cn(
                                      "ml-auto h-4 w-4",
                                      code === field.value
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
          </div>

          <div className="flex flex-col gap-2">
            {captchaError && (
              <p className="text-red-500 text-sm mt-2">{captchaError}</p>
            )}

            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={setToken}
            />
          </div>

          <Button
            className="menularge-cursor w-[50%] flex gap-3 cursor-pointer"
            type="submit"
          >
            {isLoading && <Loader className="animate-spin" />}{" "}
            {"Download Ebook!"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
