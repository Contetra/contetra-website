"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import constants from "@/utils/constants.json";
import { usePostServiceStMutation } from "@/redux/api/serviceApi";
import { APIError } from "@/interface/api-response.types";
import { toast } from "sonner";
import { fireConfetti } from "@/lib/confettiFireworks";
import { Loader } from "lucide-react";


const STRIKE_THAT_LOGO =
  "https://contetra.b-cdn.net/pages/services/st/Strike-that.png";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name." }),
  work_email: z.email({ message: "Please enter a valid work email." }),
  phone_number: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid phone number." }),
  company_name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your company name." }),
  designation: z
    .string()
    .trim()
    .min(2, { message: "Please enter your designation." }),
  state: z.string().trim().min(2, { message: "Please enter your state." }),
  city: z.string().trim().min(2, { message: "Please enter your city." }),
  hear_about: z
    .string()
    .trim()
    .min(2, { message: "Please tell us how you heard about us." }),
  list_items: z
    .string()
    .trim()
    .min(1, { message: "Please enter approx. number of list items." }),
  message: z.string().trim().min(2, { message: "Please enter your message." }),
});

export function StMiddleSectionThree() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const [trigger, { data: stData, isError, isSuccess, error, isLoading }] =
  usePostServiceStMutation();

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.strike_that,
  );

  const form_id = formsData?.response[0]?.id;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      work_email: "",
      phone_number: "",
      company_name: "",
      designation: "",
      state: "",
      city: "",
      hear_about: "",
      list_items: "",
      message: "",
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
    if (stData && isSuccess && stData?.statusCode) {
      toast.success(stData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset();
      const link = stData?.response?.link;
      toast.info("Redirecting to download in 5 seconds...");
      if (link) {
        setTimeout(() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }, 5000);
      }
    }

    if (stData && isSuccess && !stData?.statusCode) {
      toast.error(stData?.response?.message || "Something went wrong");
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
  }, [isSuccess, stData, isError, error, trigger, form]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  return (
    <section
      id="strike-that-contact"
      className="w-full px-4 py-12 sm:px-6 md:px-8 md:py-16"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-2 text-[24px] font-semibold leading-[1.1] text-[#112B62] sm:text-[40px]">
            <span>So get</span>
            <Image
              src={STRIKE_THAT_LOGO}
              alt="Strike That"
              width={330}
              height={74}
              className="h-auto w-[160px] sm:w-[260px] md:w-[300px]"
              unoptimized
            />
            <span>now!</span>
          </h2>

          <p className="mt-4 text-[18px] font-semibold leading-[1.2] text-[#112B62] sm:text-[34px]">
            Sounds too easy to be true?
          </p>
          <p className="mt-1 text-[18px] font-semibold italic leading-[1.2] text-[#DF3A30] sm:text-[36px]">
            CONNECT WITH US NOW{" "}
            <span className="not-italic text-[#112B62]">to know more.</span>
          </p>
        </div>

        <div className="mx-auto mt-10 w-full rounded-[16px] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:p-8 md:mt-12 md:p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          className="h-11 rounded-full border-[#D9DDE4] bg-white"
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
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Work Email"
                          className="h-11 rounded-full border-[#D9DDE4] bg-white"
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
                      <FormControl>
                        <Input
                          placeholder="Phone Number"
                          className="h-11 rounded-full border-[#D9DDE4] bg-white"
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
                      <FormControl>
                        <Input
                          placeholder="Company Name"
                          className="h-11 rounded-full border-[#D9DDE4] bg-white"
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
                      <FormControl>
                        <Input
                          placeholder="Designation"
                          className="h-11 rounded-full border-[#D9DDE4] bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="State"
                          className="h-11 rounded-full border-[#D9DDE4] bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="City"
                          className="h-11 rounded-full border-[#D9DDE4] bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hear_about"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="How did you hear of us?"
                          className="h-11 rounded-full border-[#D9DDE4] bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="list_items"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Approx. No. of list items?"
                          className="h-11 rounded-full border-[#D9DDE4] bg-white"
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        placeholder="Message"
                        className="min-h-[150px] w-full rounded-[16px] border border-[#D9DDE4] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#112B62]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-5 pt-2 md:flex-row md:items-center md:justify-between">
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
    </section>
  );
}
