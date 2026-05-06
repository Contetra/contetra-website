"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Lottie from "lottie-react";
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
  "Tell me about your entire bouquet of finance trainings",
  "Hmm, my preference is not on the list. Please reach out to me!",
  "Business Finance (FPA, FPA tools)",
  "Finance for Non-Finance",
] as const;

const underlineInput =
  "h-10 border-0 border-b border-[#1B1345]/80 bg-transparent px-0 text-sm text-[#1B1345] placeholder:text-[#1B1345]/45 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none dark:border-[#344155] dark:bg-transparent dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF]";

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

export const CtBottomSection = () => {
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
    <section className="w-full bg-[#E0EFE7] px-[10px] py-10 sm:px-4 sm:py-12 md:px-8 md:py-14 xl:px-14 2xl:px-[80px] dark:bg-[#111827]">
      <div className="mx-auto w-full max-w-[1260px]">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[920px] text-[20px] font-bold leading-snug text-[#1B1345] sm:text-[22px] md:text-[24px] lg:text-[26px] dark:text-white">
            Want to know more about how you can deal with attrition and talent
            development in your finance team?
          </h2>
          <div
            className="mt-4 flex items-center justify-center gap-2"
            aria-hidden
          >
            <span className="h-2 w-2 rounded-full bg-[#7EB8E6] dark:bg-[#60A5FA]" />
            <span className="h-2 w-2 rounded-full bg-[#7EB8E6] dark:bg-[#60A5FA]" />
            <span className="h-2 w-2 rounded-full bg-[#7EB8E6] dark:bg-[#60A5FA]" />
            <span className="ml-1 h-1 w-12 rounded-full bg-[#3B7DD9] sm:w-16 dark:bg-[#93C5FD]" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-14">
          <div className="order-1 flex w-full justify-center lg:order-none lg:justify-end lg:pr-4">
            <div
              className="relative flex w-full max-w-[380px] items-center justify-center rounded-full bg-[#D4E8DC]/90 p-8 shadow-[inset_0_0_40px_rgba(255,255,255,0.5)] sm:max-w-[420px] sm:p-10 md:max-w-[440px] dark:bg-[#172036] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]"
              role="img"
              aria-label="Contact illustration"
            >
              <div className="aspect-square w-[min(100%,280px)] sm:w-[min(100%,300px)] md:w-[min(100%,320px)]">
                <Lottie
                  className="h-full w-full"
                  animationData={animationFive}
                  loop
                />
              </div>
            </div>
          </div>

          <div className="order-2 min-w-0 lg:order-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5 sm:gap-6"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-8">
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-semibold text-[#1B1345] sm:text-[13px] dark:text-[#E5E7EB]">
                          Full Name <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input className={underlineInput} {...field} />
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
                        <FormLabel className="text-[12px] font-semibold text-[#1B1345] sm:text-[13px] dark:text-[#E5E7EB]">
                          Work Mail <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className={underlineInput}
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
                        <FormLabel className="text-[12px] font-semibold text-[#1B1345] sm:text-[13px] dark:text-[#E5E7EB]">
                          Company: <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input className={underlineInput} {...field} />
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
                        <FormLabel className="text-[12px] font-semibold text-[#1B1345] sm:text-[13px] dark:text-[#E5E7EB]">
                          Your Designation:{" "}
                          <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input className={underlineInput} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 gap-y-6 md:grid-cols-2 md:items-end md:gap-x-8">
                  <FormField
                    control={form.control}
                    name="training_mode"
                    render={({ field }) => (
                      <FormItem className="md:min-w-0">
                        <FormLabel className="text-[13px] font-semibold text-[#1B1345] dark:text-[#E5E7EB]">
                          Which Trainings can we help you with?{" "}
                          <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                            {trainingOptions.map((option) => (
                              <label
                                key={option}
                                className="flex cursor-pointer items-center gap-2 text-[13px] text-[#1B1345] dark:text-[#E5E7EB]"
                              >
                                <input
                                  type="radio"
                                  className="h-4 w-4 accent-[#1B1345] dark:accent-[#93C5FD]"
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

                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-semibold text-[#1B1345] sm:text-[13px] dark:text-[#E5E7EB]">
                          Phone Number <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="flex h-10 items-stretch border-b border-[#1B1345]/80 dark:border-[#344155]">
                            <span
                              className="flex shrink-0 items-center pr-2 text-lg leading-none text-[#1B1345] dark:text-[#E5E7EB]"
                              aria-hidden
                            >
                              🇮🇳
                            </span>
                            <Input
                              className="h-full min-w-0 flex-1 border-0 bg-transparent px-0 text-sm text-[#1B1345] placeholder:text-[#1B1345]/45 focus-visible:ring-0 dark:bg-[#0F172A] dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF]"
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
                      <FormLabel className="text-[13px] font-semibold text-[#1B1345] dark:text-[#E5E7EB]">
                        How can we help you?{" "}
                        <span className="text-red-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 pt-1 sm:grid-cols-2">
                          {helpOptions.map((option) => (
                            <label
                              key={option}
                              className="flex cursor-pointer items-start gap-2 text-[12px] leading-[1.45] text-[#1B1345] sm:text-[13px] dark:text-[#E5E7EB]"
                            >
                              <input
                                type="radio"
                                className="mt-0.5 h-4 w-4 shrink-0 accent-[#1B1345] dark:accent-[#93C5FD]"
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

                <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
};
