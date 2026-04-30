"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Lottie from "lottie-react";
import { CheckIcon, ChevronsUpDown, Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import animationFive from "@/components/lottie/animation-5.json";
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
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { usePostServiceTaigasTwoMutation } from "@/redux/api/serviceApi";
import { toast } from "sonner";
import { fireConfetti } from "@/lib/confettiFireworks";
import { APIError } from "@/interface/api-response.types";
import { useRouter } from "next/navigation";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import constants from "@/utils/constants.json";

const FormSchema = z.object({
  full_name: z.string().trim().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  company: z.string().trim().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
});

const serviceOptions = [
  "Technical accounting services.",
  "Need help with temp staff for financial reporting.",
  "Looking for audit support.",
  "Need help with financial statements closure.",
  "Hmm, my issue is not listed. Please reach out to me!",
] as const;

export const TaigasBottomSection = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const router = useRouter();

  const [trigger, { data: taigasData, isError, isSuccess, error, isLoading }] =
  usePostServiceTaigasTwoMutation();

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids
      .technical_accounting_international_gaap_advisory_services,
  );

  const form_id = formsData?.response[0]?.id;

  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      full_name: "",
      company: "",
      phone_number: "",
      email: "",
      service: "",
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

  return (
    <section className="w-full py-6 sm:py-8 lg:py-10">
      <div className="flex w-full flex-col items-center rounded-b-[36px] bg-[#F8F9FE] px-4 py-8 dark:bg-[#111827] sm:rounded-b-[50px] sm:px-6 sm:py-10 md:px-8 xl:rounded-b-[100px] xl:px-12 xl:py-12">
        <div className="max-w-[760px] text-center">
          <h2 className="text-[22px] font-semibold leading-[1.2] text-[#171717] dark:text-white sm:text-[28px] md:text-[36px]">
            Want to know more about how we can help you ease the burden of your
            finance team?
          </h2>
        </div>

        <div className="mt-8 grid w-full items-center gap-8 lg:mt-10 lg:grid-cols-[minmax(300px,500px)_minmax(320px,520px)] lg:justify-center lg:gap-10 xl:gap-20">
          <div className="w-full flex justify-center">
            <Lottie
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[620px]"
              animationData={animationFive}
              loop
            />
          </div>

          <div className="order-2 mx-auto w-full max-w-[560px] lg:max-w-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-4 sm:gap-5"
              >
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] font-normal leading-[1.55] text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[15px]">
                        So, you&apos;re looking to outsource financial
                        reporting. We&apos;ll call you &quot;The Trail
                        Blazer&quot;. But, what&apos;s your name?
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-11 bg-white text-sm dark:bg-[#0F172A]"
                          placeholder=""
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
                      <FormLabel className="text-[14px] font-normal text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[15px]">
                        Now, what&apos;s the name of your company?
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-11 bg-white text-sm dark:bg-[#0F172A]"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] font-normal text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[15px]">
                        What can we help you with?
                      </FormLabel>
                      <Popover open={serviceOpen} onOpenChange={setServiceOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "dark:bg-input/30 h-11 w-full justify-between border bg-white px-3 text-sm font-normal shadow-xs hover:bg-white dark:hover:bg-input/30",
                                !field.value && "text-muted-foreground",
                              )}
                              ref={field.ref}
                              onBlur={field.onBlur}
                            >
                              {field.value || "Select a service"}
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
                              placeholder="Search services..."
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>No service found.</CommandEmpty>
                              <CommandGroup>
                                {serviceOptions.map((service) => (
                                  <CommandItem
                                    key={service}
                                    value={service}
                                    className="cursor-pointer text-sm"
                                    onSelect={() => {
                                      form.setValue("service", service, {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                      });
                                      setServiceOpen(false);
                                    }}
                                  >
                                    {service}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        service === field.value
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

                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] font-normal text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[15px]">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-11 bg-white text-sm dark:bg-[#0F172A]"
                          placeholder=""
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
                      <FormLabel className="text-[14px] font-normal text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[15px]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="h-11 bg-white text-sm dark:bg-[#0F172A]"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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

                <div className="flex justify-center pt-2 sm:pt-1">
                  <Button
                    className="menularge-cursor w-[50%] flex gap-3 cursor-pointer"
                    type="submit"
                  >
                    {isLoading && <Loader className="animate-spin" />}{" "}
                    {"Submit!"}
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
