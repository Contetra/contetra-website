"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
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
import { usePostServiceCtOneMutation } from "@/redux/api/serviceApi";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import constants from "@/utils/constants.json";
import { fireConfetti } from "@/lib/confettiFireworks";
import { APIError } from "@/interface/api-response.types";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

const trainingOptions = ["Virtual", "In-person Trainings"] as const;

const helpOptions = [
  "Financial Reporting (IFRS, Ind AS, US GAAP)",
  "Business Finance (FPA, FPA tools)",
  "Finance for Non-Finance",
  "Tell me about your entire bouquet of finance trainings",
  "Hmm, my preference is not on the list. Please reach out to me!",
] as const;

const formSchema = z.object({
  full_name: z.string().trim().min(2, {
    message: "Full name must be at least 2 characters.",
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
  training_mode: z.string().trim().min(1, {
    message: "Please select a training mode.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  help_topic: z.string().trim().min(1, {
    message: "Please select how we can help.",
  }),
});

export const CtTopSectionRight = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      full_name: "",
      work_email: "",
      company: "",
      designation: "",
      training_mode: trainingOptions[0],
      phone_number: "",
      help_topic: helpOptions[0],
    },
  });

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.corporate_training,
  );

  const form_id = formsData?.response[0]?.id;

  const [trigger, { data: ctData, isError, isSuccess, error, isLoading }] =
    usePostServiceCtOneMutation();

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
      toast.info("Redirecting to download in 5 seconds...");
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
    <div className="min-w-0 w-full px-1 py-2 sm:px-2 sm:py-4">
      <div className="w-full rounded-[24px] border border-transparent bg-[#1D1348] p-4 shadow-[0_18px_55px_rgba(18,12,84,0.25)] sm:rounded-[28px] sm:p-6 dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-medium text-white sm:text-[13px]">
                      Full Name <span className="text-red-400">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 rounded-[14px] border-[#5145A5] bg-transparent text-sm text-white placeholder:text-[#C8C4EA] dark:border-[#344155] dark:bg-[#0F172A] dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF]"
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
                    <FormLabel className="text-[12px] font-medium text-white sm:text-[13px]">
                      Work Mail <span className="text-red-400">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="h-11 rounded-[14px] border-[#5145A5] bg-transparent text-sm text-white placeholder:text-[#C8C4EA] dark:border-[#344155] dark:bg-[#0F172A] dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF]"
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
                    <FormLabel className="text-[12px] font-medium text-white sm:text-[13px]">
                      Company <span className="text-red-400">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 rounded-[14px] border-[#5145A5] bg-transparent text-sm text-white placeholder:text-[#C8C4EA] dark:border-[#344155] dark:bg-[#0F172A] dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF]"
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
                    <FormLabel className="text-[12px] font-medium text-white sm:text-[13px]">
                      Your Designation <span className="text-red-400">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-11 rounded-[14px] border-[#5145A5] bg-transparent text-sm text-white placeholder:text-[#C8C4EA] dark:border-[#344155] dark:bg-[#0F172A] dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF]"
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
              name="training_mode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] font-semibold text-white">
                    Which Trainings can we help you with?{" "}
                    <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                      {trainingOptions.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center gap-2 text-[13px] text-white"
                        >
                          <input
                            type="radio"
                            className="h-4 w-4 accent-[#92E3B5]"
                            checked={field.value === option}
                            onChange={() => field.onChange(option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1.2fr] sm:items-end">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-medium text-white sm:text-[13px]">
                      Phone Number <span className="text-red-400">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="flex h-11 rounded-[14px] border border-[#5145A5] bg-transparent dark:border-[#344155] dark:bg-[#0F172A]">
                        <span className="flex items-center px-3 text-sm text-white">
                          🇮🇳
                        </span>
                        <Input
                          className="h-full border-0 bg-transparent text-sm text-white placeholder:text-[#C8C4EA] focus-visible:ring-0 dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF]"
                          {...field}
                        />
                      </div>
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
                  <FormLabel className="text-[13px] font-semibold text-white">
                    How can we help you?
                  </FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {helpOptions.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-start gap-2 text-[12.5px] leading-[1.4] text-white sm:text-[13px]"
                        >
                          <input
                            type="radio"
                            className="mt-0.5 h-4 w-4 shrink-0 accent-[#92E3B5]"
                            checked={field.value === option}
                            onChange={() => field.onChange(option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-0 flex flex-row gap-10 sm:mt-1 sm:gap-4">
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
  );
};
