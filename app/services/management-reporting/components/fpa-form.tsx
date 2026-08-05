"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { CheckIcon, ChevronsUpDown, Loader } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import type { ControllerRenderProps } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Field, FieldLabel, FieldSet } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { APIError } from "@/interface/api-response.types";
import { fireConfetti } from "@/lib/confettiFireworks";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import { usePostServiceSbfmsMutation } from "@/redux/api/serviceApi";
import constants from "@/utils/constants.json";
import { toast } from "sonner";

const BG_IMAGE =
  "https://contetra.b-cdn.net/pages/services/sbfms/strategic%20bottom%20form%20bg.png";

const currencyOptions = [
  "INR",
  "USD",
  "EUR",
  "AED",
  "MNT",
  "CAD",
  "ILS",
] as const;

const Q1_OPTIONS = [
  "Improve profitability and financial performance.",
  "Gain better insights into my business finances.",
  "Streamline financial planning and forecasting.",
  "Other",
] as const;

const Q2_OPTIONS = [
  "Accelerated growth with optimized profits and sustainable expansion.",
  "Streamlined operations and improved efficiency to handle current workload.",
  "Structured framework and actionable insights to guide strategic decision-making.",
] as const;

const Q3_OPTIONS = [
  "Expert guidance and tailored advice from a seasoned business coach.",
  "Dedicated team to translate strategies into real-world action and results.",
] as const;

const Q4_OPTIONS = [
  "Very comfortable, I have a strong financial background.",
  "Moderately comfortable, I understand basic concepts.",
  "Not very comfortable, I rely on my team for financial insights.",
] as const;

const Q5_OPTIONS = [
  "Regular updates and close collaboration with my team.",
  "Self-guided tools and resources with minimal interaction.",
] as const;

const Q6_OPTIONS = [
  "Formal and well-defined with regular assessments.",
  "Ad-hoc and reactive, adapting to immediate needs.",
  "Non-existent, relying on intuition and gut feeling.",
] as const;

const Q7_OPTIONS = [
  "Yes, I will 100% show up",
  "No, I might not be able to make it",
] as const;

function choiceField(options: readonly string[], message: string) {
  return z
    .string()
    .min(1, { message })
    .refine((s) => options.includes(s), { message });
}

const sbfmsFormSchema = z.object({
  primary_reason: choiceField(
    Q1_OPTIONS,
    "Please select your primary reason for considering Finance Mentoring.",
  ),
  business_vision: choiceField(
    Q2_OPTIONS,
    "Please select where you envision your business.",
  ),
  support_type: choiceField(
    Q3_OPTIONS,
    "Please select the type of support that would be most valuable.",
  ),
  financial_comfort: choiceField(
    Q4_OPTIONS,
    "Please select how comfortable you are with financial data.",
  ),
  mentor_preference: choiceField(
    Q5_OPTIONS,
    "Please select your preferred approach to working with a mentor.",
  ),
  planning_process: choiceField(
    Q6_OPTIONS,
    "Please describe your current financial planning process.",
  ),
  commitment: choiceField(
    Q7_OPTIONS,
    "Please confirm whether you can make the time you choose.",
  ),
  full_name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." }),
  work_email: z.email({ message: "Please enter a valid work email." }),
  phone_number: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  company_name: z
    .string()
    .trim()
    .min(2, { message: "Company name must be at least 2 characters." }),
  designation: z
    .string()
    .trim()
    .min(2, { message: "Please enter your designation." }),
  city: z.string().trim().min(2, { message: "Please enter your city." }),
  business_industry: z
    .string()
    .trim()
    .min(2, { message: "Please enter your industry." }),
  annual_turnover: z
    .string()
    .trim()
    .min(1, { message: "Please enter annual turnover." }),
  currency: z.string().trim().min(1, { message: "Please select currency." }),
});

type SbfmsFormValues = z.infer<typeof sbfmsFormSchema>;

const STEP_FIELD_GROUPS: (keyof SbfmsFormValues)[][] = [
  ["primary_reason"],
  ["business_vision"],
  ["support_type"],
  ["financial_comfort"],
  ["mentor_preference"],
  ["planning_process"],
  ["commitment"],
  ["full_name", "work_email", "phone_number", "company_name"],
  [
    "company_name",
    "designation",
    "city",
    "business_industry",
    "annual_turnover",
    "currency",
  ],
];

const TOTAL_STEPS = STEP_FIELD_GROUPS.length + 1;

const defaultValues: SbfmsFormValues = {
  primary_reason: "",
  business_vision: "",
  support_type: "",
  financial_comfort: "",
  mentor_preference: "",
  planning_process: "",
  commitment: "",
  full_name: "",
  work_email: "",
  phone_number: "",
  company_name: "",
  designation: "",
  city: "",
  business_industry: "",
  annual_turnover: "",
  currency: currencyOptions[0],
};

const inputClass =
  "h-11 rounded-[14px] border-[#E6EAF0] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]";

const comboboxTriggerClass = cn(
  "h-11 w-full justify-between rounded-[14px] border-[#E6EAF0] bg-white px-3 text-left text-sm font-normal leading-[1.4em] text-[#111827] shadow-xs hover:bg-white dark:border-[#344155] dark:bg-[#0F172A] dark:text-[#E5E7EB] dark:hover:bg-[#0F172A]",
);

function QuestionRadioGroup<TName extends keyof SbfmsFormValues>({
  idPrefix,
  field,
  options,
}: {
  idPrefix: string;
  field: ControllerRenderProps<SbfmsFormValues, TName>;
  options: readonly string[];
}) {
  return (
    <FieldSet className="w-full max-w-full gap-2.5 border-0 p-0 shadow-none">
      <RadioGroup
        ref={field.ref}
        value={(field.value as string) || undefined}
        onValueChange={field.onChange}
        onBlur={field.onBlur}
        name={field.name}
        className="flex flex-col gap-2.5"
      >
        {options.map((opt, i) => {
          const inputId = `${idPrefix}-${i}`;
          const selected = field.value === opt;
          return (
            <Field
              key={opt}
              orientation="horizontal"
              className={cn(
                "cursor-pointer items-start gap-3 rounded-[14px] border bg-white p-3.5 dark:bg-[#0F172A]",
                selected
                  ? "border-[#2D8A77] ring-1 ring-[#2D8A77]/30"
                  : "border-[#E6EAF0] hover:border-[#cbd5e1] dark:border-[#344155]",
              )}
            >
              <RadioGroupItem
                value={opt}
                id={inputId}
                className="mt-0.5 border-[#2D8A77] text-[#2D8A77]"
              />
              <FieldLabel
                htmlFor={inputId}
                className="cursor-pointer text-[13px] leading-snug font-normal text-[#1e293b] dark:text-[#e2e8f0]"
              >
                {opt}
              </FieldLabel>
            </Field>
          );
        })}
      </RadioGroup>
    </FieldSet>
  );
}

interface FpaFormProps {
  trigger?: ReactElement;
}

export function FpaForm({ trigger }: FpaFormProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const formTypeIdRaw =
    constants.form_type_ids.strategic_business_financial_management_solutions;
  const formTypeId =
    (typeof formTypeIdRaw === "string" && formTypeIdRaw.trim()) ||
    process.env.NEXT_PUBLIC_SBFMS_FORM_TYPE_ID ||
    "";

  const { data: formsData } = useGetFormsQuery(formTypeId, {
    skip: !formTypeId,
  });
  const form_id = formsData?.response?.[0]?.id ?? "";

  const [submitForm, { data: submitData, isError, isSuccess, error, isLoading }] =
    usePostServiceSbfmsMutation();

  const form = useForm<SbfmsFormValues>({
    resolver: zodResolver(sbfmsFormSchema),
    mode: "onTouched",
    defaultValues,
  });

  const resetWizard = useCallback(() => {
    setStep(0);
    form.reset(defaultValues);
    setCaptchaToken(null);
    setCaptchaError(null);
    turnstileRef.current?.reset();
  }, [form]);

  const handleOpenChange = (open: boolean) => {
    setSheetOpen(open);
    if (!open) {
      resetWizard();
    }
  };

  const goNext = async () => {
    if (step >= STEP_FIELD_GROUPS.length) return;
    const fields = STEP_FIELD_GROUPS[step];
    const ok = await form.trigger(fields, { shouldFocus: true });
    if (ok) setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const onFinalSubmit = (data: SbfmsFormValues) => {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }
    setCaptchaError(null);
    submitForm({
      body: {
        ...data,
        form_id,
      },
      captchaToken,
    });
    setCaptchaToken(null);
    turnstileRef.current?.reset();
  };

  useEffect(() => {
    if (submitData && isSuccess && submitData?.statusCode) {
      toast.success(
        submitData?.response?.message ?? "Thank you — we will be in touch.",
      );
      toast.info("Redirecting to calendly in 5 seconds...");
      fireConfetti();
      resetWizard();
      setSheetOpen(false);
      const link =
        "https://calendly.com/contetraprivatelimited/book-call-for-business-finance-review-meeting";
      if (link) {
        setTimeout(() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }, 5000);
      }
    }
    if (submitData && isSuccess && !submitData?.statusCode) {
      toast.error(submitData?.response?.message ?? "Something went wrong");
    }
    if (isError) {
      setCaptchaError("Captcha verification failed. Please try again.");
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      if ((error as APIError)?.data) {
        const apiError = error as APIError;
        toast.error(
          apiError?.data?.response?.message ?? "Something went wrong",
        );
      }
    }
  }, [submitData, isSuccess, isError, error, resetWizard, setSheetOpen]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  const isLastStep = step === STEP_FIELD_GROUPS.length;

  return (
    <section className="" aria-label="Schedule a free review call">
      <Sheet open={sheetOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          {trigger}
        </SheetTrigger>

        <SheetContent
          side="center"
          showCloseButton
          className="flex flex-col gap-0 overflow-hidden p-0 sm:max-w-2xl"
        >
          <SheetHeader className="shrink-0 border-b px-5 py-4 text-left sm:px-6">
            <SheetTitle className="text-lg sm:text-xl">
              Finance mentoring — quick assessment
            </SheetTitle>
            <SheetDescription>
              Step {Math.min(step + 1, TOTAL_STEPS)} of {TOTAL_STEPS}
            </SheetDescription>
          </SheetHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onFinalSubmit)}
              className="flex min-h-0 flex-1 flex-col"
            >
              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
                {step === 0 && (
                  <FormField
                    control={form.control}
                    name="primary_reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[15px] font-semibold leading-snug">
                          Q1. What is your primary reason for considering
                          Finance Mentoring?
                        </FormLabel>
                        <FormControl>
                          <QuestionRadioGroup
                            idPrefix="primary_reason"
                            field={field}
                            options={Q1_OPTIONS}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {step === 1 && (
                  <FormField
                    control={form.control}
                    name="business_vision"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[15px] font-semibold leading-snug">
                          Q2. Where do you envision your business in the next
                          few years?
                        </FormLabel>
                        <FormControl>
                          <QuestionRadioGroup
                            idPrefix="business_vision"
                            field={field}
                            options={Q2_OPTIONS}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {step === 2 && (
                  <FormField
                    control={form.control}
                    name="support_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[15px] font-semibold leading-snug">
                          Q3. What type of support would be most valuable in
                          achieving your goals?
                        </FormLabel>
                        <FormControl>
                          <QuestionRadioGroup
                            idPrefix="support_type"
                            field={field}
                            options={Q3_OPTIONS}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {step === 3 && (
                  <FormField
                    control={form.control}
                    name="financial_comfort"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[15px] font-semibold leading-snug">
                          Q4. How comfortable are you with financial data and
                          analysis?
                        </FormLabel>
                        <FormControl>
                          <QuestionRadioGroup
                            idPrefix="financial_comfort"
                            field={field}
                            options={Q4_OPTIONS}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {step === 4 && (
                  <FormField
                    control={form.control}
                    name="mentor_preference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[15px] font-semibold leading-snug">
                          Q5. What is your preferred approach to working with a
                          finance mentor?
                        </FormLabel>
                        <FormControl>
                          <QuestionRadioGroup
                            idPrefix="mentor_preference"
                            field={field}
                            options={Q5_OPTIONS}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {step === 5 && (
                  <FormField
                    control={form.control}
                    name="planning_process"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[15px] font-semibold leading-snug">
                          Q6. How would you describe your current financial
                          planning process?
                        </FormLabel>
                        <FormControl>
                          <QuestionRadioGroup
                            idPrefix="planning_process"
                            field={field}
                            options={Q6_OPTIONS}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {step === 6 && (
                  <FormField
                    control={form.control}
                    name="commitment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[15px] font-semibold leading-snug">
                          Q7. Will you 100% be able to make the time you choose?
                        </FormLabel>
                        <FormControl>
                          <QuestionRadioGroup
                            idPrefix="commitment"
                            field={field}
                            options={Q7_OPTIONS}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {step === 7 && (
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] font-semibold text-foreground">
                      Your contact details
                    </p>
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input className={inputClass} {...field} />
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
                          <FormLabel>Work Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              autoComplete="email"
                              className={inputClass}
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
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              autoComplete="tel"
                              className={inputClass}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input className={inputClass} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 8 && (
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] font-semibold text-foreground">
                      Company profile
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4">
                      <FormField
                        control={form.control}
                        name="company_name"
                        render={({ field }) => (
                          <FormItem className="min-w-0">
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input className={inputClass} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                          <FormItem className="min-w-0">
                            <FormLabel>Designation</FormLabel>
                            <FormControl>
                              <Input className={inputClass} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="min-w-0">
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input className={inputClass} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="business_industry"
                        render={({ field }) => (
                          <FormItem className="min-w-0">
                            <FormLabel>Business Industry</FormLabel>
                            <FormControl>
                              <Input className={inputClass} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="annual_turnover"
                        render={({ field }) => (
                          <FormItem className="min-w-0">
                            <FormLabel>Annual Turnover</FormLabel>
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
                          <FormItem className="min-w-0">
                            <FormLabel>Currency</FormLabel>
                            <Popover
                              open={currencyOpen}
                              onOpenChange={setCurrencyOpen}
                            >
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
                                    <span className="truncate">
                                      {field.value}
                                    </span>
                                    <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
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
                                              "ml-auto size-4",
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
                  </div>
                )}

                {isLastStep && (
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] font-semibold text-foreground">
                      Verify and submit
                    </p>
                    {captchaError ? (
                      <p className="text-sm text-red-500">{captchaError}</p>
                    ) : null}
                    <div className="flex w-full justify-center overflow-x-auto py-1">
                      <div className="origin-center scale-[0.88] sm:scale-95 lg:scale-100">
                        <Turnstile
                          ref={turnstileRef}
                          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                          onSuccess={setToken}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t bg-muted/30 px-5 py-4 sm:px-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={goBack}
                  disabled={step === 0}
                  className="min-w-[88px]"
                >
                  Back
                </Button>

                {!isLastStep ? (
                  <Button
                    type="button"
                    onClick={goNext}
                    className="min-w-[100px] bg-[#2D8A77] hover:bg-[#257a6a]"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="min-w-[120px] bg-[#2D8A77] hover:bg-[#257a6a]"
                  >
                    {isLoading ? (
                      <Loader className="size-5 animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </section>
  );
}
