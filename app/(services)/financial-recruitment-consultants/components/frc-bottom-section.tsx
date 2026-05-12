"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import Lottie from "lottie-react";
import { Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import animationFive from "@/components/lottie/animation-5.json";
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
import { useGetFormsQuery } from "@/redux/api/commonApi";
import { usePostServiceFrcOneMutation } from "@/redux/api/serviceApi";
import constants from "@/utils/constants.json";
import { fireConfetti } from "@/lib/confettiFireworks";
import { APIError } from "@/interface/api-response.types";

const howCanWeHelpOptions = [
  "Contract Roles (Temp Staffing)",
  "Permanent Hires",
  "Create a Training Programme for my finance Team",
  "My problem is not listed here. Please get in touch with me!",
] as const;

const bottomFormSchema = z.object({
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
  finance_team_size: z.string().trim().min(1, {
    message: "Please enter the current size of the finance team.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Your number must be at least 10 digits.",
  }),
  how_can_we_help: z.enum(howCanWeHelpOptions, {
    message: "Please select how we can help you.",
  }),
});

const underlineLightClass =
  "h-11 rounded-none border-0 border-b border-[#1a1640]/35 bg-transparent px-0 text-sm text-[#1a1640] shadow-none placeholder:text-[#1a1640]/40 focus-visible:border-[#50a085] focus-visible:ring-0";

export function FrcBottomSection() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.financial_recruitment_consultants,
  );

  const form_id = formsData?.response[0]?.id;

  const [trigger, { data: frcData, isError, isSuccess, error, isLoading }] =
    usePostServiceFrcOneMutation();

  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const form = useForm<z.infer<typeof bottomFormSchema>>({
    resolver: zodResolver(bottomFormSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      work_email: "",
      company: "",
      designation: "",
      finance_team_size: "",
      phone_number: "",
      how_can_we_help: howCanWeHelpOptions[0],
    },
  });

  function onSubmit(data: z.infer<typeof bottomFormSchema>) {
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
    if (frcData && isSuccess && frcData?.statusCode) {
      toast.success(frcData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset();
      toast.success(
        "Thank you for providing the requirements. Our team will connect within few hours to schedule the first call to understand your requirements clearly. We look forward to getting to know you better and exploring the possibility of working together.", {
          duration: 10000,
        }
      );
    }

    if (frcData && isSuccess && !frcData?.statusCode) {
      toast.error(frcData?.response?.message || "Something went wrong");
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
  }, [isSuccess, frcData, isError, error, trigger, form]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  return (
    <section
      className="w-full py-6 sm:py-8 lg:py-10"
      aria-labelledby="frc-bottom-heading"
    >
      <div className="flex w-full flex-col items-center rounded-b-[36px] bg-[#F8F9FE] px-4 py-8 sm:rounded-b-[50px] sm:px-6 sm:py-10 md:px-8 xl:rounded-b-[100px] xl:px-12 xl:py-12">
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            id="frc-bottom-heading"
            className="text-balance text-[clamp(1.1rem,2.5vw,1.85rem)] font-semibold leading-[1.25] text-[#1a1640]"
          >
            Want to know more about how finance recruitment consultants can help you deal with attrition and talent development in your finance team?
          </h2>
          <div
            className="mt-6 flex flex-col items-center gap-2"
            aria-hidden
          >
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#50a085]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#50a085]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#50a085]" />
            </div>
            <div className="h-0.5 w-14 rounded-full bg-[#5b8def]" />
          </div>
        </div>

        <div className="mt-8 grid w-full max-w-[1320px] items-center gap-8 lg:mt-10 lg:grid-cols-[minmax(300px,480px)_minmax(320px,580px)] lg:justify-center lg:gap-x-12 lg:gap-y-8 xl:gap-x-16 2xl:gap-x-20">
          <div className="flex w-full justify-center lg:justify-end">
            <div className="flex aspect-square w-full max-w-[320px] items-center justify-center rounded-full bg-[#eef1f8] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[520px]">
              <Lottie
                className="w-[92%] max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px] xl:max-w-[520px]"
                animationData={animationFive}
                loop
                aria-hidden
              />
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-[640px] lg:order-none lg:mx-0 lg:max-w-none lg:w-full lg:justify-self-start">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-5 sm:gap-6"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] font-medium leading-[1.4] text-[#1a1640] sm:text-[14px]">
                          Full name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={cn(underlineLightClass)}
                            placeholder=""
                            autoComplete="name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="work_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] font-medium leading-[1.4] text-[#1a1640] sm:text-[14px]">
                          Work Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className={cn(underlineLightClass)}
                            placeholder=""
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] font-medium leading-[1.4] text-[#1a1640] sm:text-[14px]">
                          Company name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={cn(underlineLightClass)}
                            placeholder=""
                            autoComplete="organization"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] font-medium leading-[1.4] text-[#1a1640] sm:text-[14px]">
                          Your Designation
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={cn(underlineLightClass)}
                            placeholder=""
                            autoComplete="organization-title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="finance_team_size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] font-medium leading-[1.4] text-[#1a1640] sm:text-[14px]">
                          Current size of the Finance Team:
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={cn(underlineLightClass)}
                            placeholder=""
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] font-medium leading-[1.4] text-[#1a1640] sm:text-[14px]">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            className={cn(underlineLightClass)}
                            placeholder=""
                            autoComplete="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-600" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="how_can_we_help"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[13px] font-medium text-[#1a1640] sm:text-[14px]">
                        How can we help you?
                      </FormLabel>
                      <div
                        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3"
                        role="radiogroup"
                        aria-label="How can we help you?"
                      >
                        {howCanWeHelpOptions.map((option, index) => {
                          const inputId = `frc-bottom-help-${index}`;
                          return (
                            <label
                              key={option}
                              htmlFor={inputId}
                              className="flex cursor-pointer items-start gap-3"
                            >
                              <input
                                id={inputId}
                                type="radio"
                                name={field.name}
                                value={option}
                                checked={field.value === option}
                                onChange={() => field.onChange(option)}
                                onBlur={field.onBlur}
                                ref={index === 0 ? field.ref : undefined}
                                className="mt-1 h-4 w-4 shrink-0 border-2 border-[#50a085] bg-transparent accent-[#50a085] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#50a085]"
                              />
                              <span className="text-[13px] leading-snug text-[#25243a] sm:text-[14px]">
                                {option}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                      <FormMessage className="text-rose-600" />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                  <div className="flex w-full min-w-0 flex-col gap-2 sm:max-w-[380px] lg:max-w-[420px]">
                    {captchaError ? (
                      <p className="text-sm text-rose-600">{captchaError}</p>
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
                  </div>

                  <Button
                className="h-12 w-full rounded-[12px] bg-[#221971] px-6 text-[14px] font-semibold leading-[1.4em] text-white hover:bg-[#181253] xl:w-auto xl:min-w-[220px]"
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
