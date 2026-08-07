"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
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
import { usePostServiceTaigasOneMutation } from "@/redux/api/serviceApi";
import { toast } from "sonner";
import { fireConfetti } from "@/lib/confettiFireworks";
import { APIError } from "@/interface/api-response.types";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import constants from "@/utils/constants.json";

const checklistItems = [
  "Real-world accounting case studies.",
  "A handy period closure checklist.",
  "A Big 4-Approved technical accounting memo full of actionable insights that you can use to your advantage while dealing with auditors!",
] as const;

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ?? "";

const FormSchema = z.object({
  first_name: z.string().trim().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().trim().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.email({
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
});

export const TaigasTopForm = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const router = useRouter();

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids
      .technical_accounting_international_gaap_advisory_services,
  );

  const form_id = formsData?.response[0]?.id;

  const [trigger, { data: taigasData, isError, isSuccess, error, isLoading }] =
    usePostServiceTaigasOneMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      designation: "",
      phone_number: "",
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

    setCaptchaError(null);

    setCaptchaToken(null);
    turnstileRef.current?.reset();
  }

  useEffect(() => {
    if (taigasData && isSuccess && taigasData?.statusCode) {
      toast.success(taigasData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset();
      const link = taigasData?.response?.link;
      toast.info("Redirecting to download in 5 seconds...");
      if (link) {
        setTimeout(() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }, 5000);
      }
    }

    if (taigasData && isSuccess && !taigasData?.statusCode) {
      toast.error(taigasData?.response?.message || "Something went wrong");
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
  }, [isSuccess, taigasData, isError, error, trigger, form, router]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  return (
    <div className="w-full rounded-[24px] bg-white p-3 shadow-[0_18px_55px_rgba(18,12,84,0.08)] dark:bg-[#111827] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] sm:rounded-[28px] sm:p-5">
      <div className="w-full rounded-[20px] bg-[#FFFDF8] p-4 dark:bg-[#172036] sm:rounded-[24px] sm:p-6">
        <h2 className="text-center text-[20px] font-semibold leading-[1.35] text-[#111111] dark:text-white sm:text-[24px] xl:text-[26px]">
          Download our Exclusive{" "}
          <span className="text-[#E0A15B]">Financial Reporting Pack</span>
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-medium text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 rounded-[14px] border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                    <FormLabel className="text-[12px] font-medium text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 rounded-[14px] border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                    <FormLabel className="text-[12px] font-medium text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                      Work Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="h-11 rounded-[14px] border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                    <FormLabel className="text-[12px] font-medium text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                      Company
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 rounded-[14px] border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                    <FormLabel className="text-[12px] font-medium text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                      Designation
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 rounded-[14px] border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
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
                    <FormLabel className="text-[12px] font-medium text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]">
                      Your Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 rounded-[14px] border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full min-w-0 flex-col gap-2 sm:w-auto">
                {captchaError ? (
                  <p className="text-sm text-red-500">{captchaError}</p>
                ) : null}
                <div className="w-full overflow-x-auto sm:overflow-visible">
                  <div className="origin-left scale-[0.92] sm:scale-100">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={setToken}
                    />
                  </div>
                </div>
              </div>
              <Button
                className="h-11 w-full rounded-[10px] bg-[#56B9F7] px-8 text-[14px] font-semibold text-white hover:bg-[#42aef1] sm:w-auto sm:self-start cursor-pointer"
                type="submit"
              >
                {isLoading && <Loader className="animate-spin" />} {"Download!"}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="mt-4 w-full rounded-[18px] bg-[#F6F8FD] px-4 py-5 dark:bg-[#172036] sm:rounded-[20px] sm:px-6 sm:py-6">
        <h3 className="text-center text-[18px] font-semibold text-[#111111] dark:text-white sm:text-[20px]">
          This exhaustive reporting bundle includes:
        </h3>

        <div className="mt-5 flex flex-col gap-4">
          {checklistItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="relative mt-0.5 h-6 w-6 shrink-0">
                <Image
                  src={`${cdnUrl}/pages/services/taigas/check-1.png`}
                  alt="Check icon"
                  fill
                  className="object-contain"
                  sizes="24px"
                />
              </div>
              <p className="text-[14px] leading-[1.55] text-[#222222] dark:text-[#E5E7EB] sm:text-[15px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
