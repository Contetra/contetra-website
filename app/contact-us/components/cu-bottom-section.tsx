"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  useGetFormsQuery,
  usePostContactUsMutation,
} from "@/redux/api/commonApi";
import { fireConfetti } from "@/lib/confettiFireworks";
import { APIError } from "@/interface/api-response.types";
import constants from "@/utils/constants.json";

const fieldClass =
  "h-12 rounded-full border border-[#d9d9d9] bg-white px-4 text-[16px] text-[#2E3A59] placeholder:text-[#9aa0ae] focus-visible:ring-1 focus-visible:ring-[#2d4f93] dark:border-[#344155] dark:bg-[#172036] dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF] dark:focus-visible:ring-[#86efac]";

const messageClass =
  "min-h-[130px] rounded-[14px] border border-[#d9d9d9] bg-white px-4 py-3 text-[16px] text-[#2E3A59] placeholder:text-[#9aa0ae] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2d4f93] dark:border-[#344155] dark:bg-[#172036] dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF] dark:focus-visible:ring-[#86efac]";

const formSchema = z.object({
  first_name: z.string().trim().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().trim().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  work_email: z.email({
    message: "Please enter a valid email address.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  company: z.string().trim().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  designation: z.string().trim().min(2, {
    message: "Designation must be at least 2 characters.",
  }),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function CuBottomSection() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const [
    trigger,
    { data: contactUsData, isError, isSuccess, error, isLoading },
  ] = usePostContactUsMutation();

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.contact_us,
  );

  const form_id = formsData?.response[0]?.id;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      first_name: "",
      last_name: "",
      work_email: "",
      phone_number: "",
      company: "",
      designation: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }

    console.log("form_id",form_id)

    trigger({
      body: { ...data, form_id: form_id ?? "" },
      captchaToken,
    });

    setCaptchaError(null);

    setCaptchaToken(null);
    turnstileRef.current?.reset();
  }

  useEffect(() => {
    if (contactUsData && isSuccess && contactUsData?.statusCode) {
      toast.success(contactUsData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset();
    }

    if (contactUsData && isSuccess && !contactUsData?.statusCode) {
      toast.error(contactUsData?.response?.message || "Something went wrong");
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
  }, [isSuccess, contactUsData, isError, error, trigger, form]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  return (
    <section className="w-full bg-[#f6f7fb] px-[12px] pb-12 pt-10 dark:bg-[#0A0A0A] sm:px-5 sm:pb-14 sm:pt-12 md:px-8 md:pb-16 md:pt-14 xl:px-14 2xl:px-[80px]">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[2.2rem] font-bold leading-[1.1] text-[#2d4f93] dark:text-white sm:text-[2.5rem] md:text-[2.8rem]">
            Reach out to us!
          </h2>
          <p className="mt-3 text-[20px] leading-[1.5] text-[#263857] dark:text-[#E5E7EB] sm:text-[18px]">
            Are you interested in partnering with us?
            <br />
            Have some suggestions or just want to say hi?
            <br />
            Contact us:
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[920px] rounded-[14px] border border-[#ececf2] bg-white p-6 shadow-[0_20px_60px_rgba(24,42,85,0.08)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)] sm:p-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className={fieldClass}
                          placeholder="First Name"
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
                      <FormControl>
                        <Input
                          className={fieldClass}
                          placeholder="Last Name"
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
                          className={fieldClass}
                          placeholder="Email Address"
                          autoComplete="email"
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
                          type="tel"
                          className={fieldClass}
                          placeholder="Phone Number"
                          autoComplete="tel"
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
                      <FormControl>
                        <Input
                          className={fieldClass}
                          placeholder="Company"
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
                          className={fieldClass}
                          placeholder="Designation"
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
                        className={messageClass}
                        placeholder="Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col items-center gap-4 pt-1">
                <div className="flex w-full max-w-[320px] flex-col items-center gap-2">
                  {captchaError ? (
                    <p className="text-center text-sm text-red-600">
                      {captchaError}
                    </p>
                  ) : null}
                  <div className="w-full overflow-x-auto">
                    <div className="mx-auto w-fit origin-center scale-[0.88] sm:scale-[0.95]">
                      <Turnstile
                        ref={turnstileRef}
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        onSuccess={setToken}
                      />
                    </div>
                  </div>
                </div>

                <Button
                  className="h-12 w-full rounded-[12px] bg-[#221971] px-6 text-[14px] font-semibold leading-[1.4em] text-white hover:bg-[#181253] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a] xl:w-auto xl:min-w-[220px]"
                  type="submit"
                >
                  {isLoading ? <Loader className="animate-spin" /> : null}
                  <span className="inline-flex items-center justify-center gap-2">
                   Submit
                  </span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
