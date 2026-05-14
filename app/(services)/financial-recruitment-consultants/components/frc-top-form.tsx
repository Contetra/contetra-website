"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { Loader } from "lucide-react";
import Image from "next/image";
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
import { toast } from "sonner";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import { usePostServiceFrcOneMutation } from "@/redux/api/serviceApi";
import { fireConfetti } from "@/lib/confettiFireworks";
import { APIError } from "@/interface/api-response.types";
import constants from "@/utils/constants.json";

const NAVY = "#1a1640";
const TEAL = "#50a085";
const FRC_IMG_FORM =
  "https://contetra.b-cdn.net/pages/services/frc/frc-img-2.png";

const howCanWeHelpOptions = [
  "Contract Roles (Temp Staffing)",
  "Permanent Hires",
  "Create a Training Programme for my finance Team",
  "My problem is not listed here. Please get in touch with me!",
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

const inputClass =
  "h-10 w-full rounded-none border-0 border-b border-white/90 bg-transparent text-sm text-white shadow-none outline-none ring-0 focus-visible:border-white focus-visible:ring-0";

export function FrcTopForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.financial_recruitment_consultants,
  );

  const form_id = formsData?.response[0]?.id;

  const [trigger, { data: frcData, isError, isSuccess, error, isLoading }] =
    usePostServiceFrcOneMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
    <div className="z-10 mx-auto mt-0 w-full max-w-full px-0 py-6 sm:max-w-2xl sm:px-2 xl:max-w-xl xl:-mt-[18rem]">
      <div
        className="rounded-[24px] px-5 pb-8 pt-7 sm:rounded-[28px] sm:px-7 sm:pb-9 sm:pt-9"
        style={{ backgroundColor: NAVY }}
      >
        <div className="mb-7 flex items-start justify-between gap-4 sm:mb-8">
          <div className="min-w-0 flex-1 pr-2">
            <p className="text-[20px] font-medium leading-snug text-white sm:text-lg">
              Find the right fit for
            </p>
            <p
              className="mt-1 text-lg font-bold uppercase leading-tight tracking-wide sm:text-xl"
              style={{ color: TEAL }}
            >
              Your finance team
            </p>
          </div>
          <div className="relative hidden h-[88px] w-[100px] shrink-0 sm:h-[108px] sm:w-[120px] xl:block">
            <Image
              src={FRC_IMG_FORM}
              alt="Illustration for finance recruitment"
              fill
              className="object-contain object-[right_top]"
              sizes="120px"
              priority
              unoptimized
            />
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-medium text-white">
                      Full name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={inputClass}
                        placeholder=""
                        autoComplete="name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="work_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-medium text-white">
                      Work Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className={inputClass}
                        placeholder=""
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-medium text-white">
                      Company name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={inputClass}
                        placeholder=""
                        autoComplete="organization"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-medium text-white">
                      Your Designation
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={inputClass}
                        placeholder=""
                        autoComplete="organization-title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="finance_team_size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-medium text-white">
                      Current size of the Finance Team
                    </FormLabel>
                    <FormControl>
                      <Input className={inputClass} placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-medium text-white">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        className={inputClass}
                        placeholder=""
                        autoComplete="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="how_can_we_help"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-medium text-white sm:text-sm">
                    How can we help you?
                  </FormLabel>
                  <div
                    className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2"
                    role="radiogroup"
                  >
                    {howCanWeHelpOptions.map((option, index) => {
                      const inputId = `frc-help-${index}`;
                      return (
                        <label
                          key={option}
                          htmlFor={inputId}
                          className="flex cursor-pointer items-start gap-2.5"
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
                            className="mt-0.5 h-4 w-4 shrink-0 border-2 border-white bg-transparent accent-[#50a085]"
                          />
                          <span className="text-[13px] leading-snug text-white sm:text-sm">
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <FormMessage className="text-xs text-red-300" />
                </FormItem>
              )}
            />

            <div className="flex flex-col items-start gap-4 pt-1">
              <div className="w-full min-w-0">
                {captchaError ? (
                  <p className="mb-2 text-sm text-red-300">{captchaError}</p>
                ) : null}
                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={setToken}
                />
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
  );
}
