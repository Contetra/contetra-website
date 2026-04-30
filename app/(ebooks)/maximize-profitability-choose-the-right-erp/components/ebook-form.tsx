"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
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
import { fireConfetti } from "@/lib/confettiFireworks";
import { usePostEbookDecgMutation } from "@/redux/api/ebookApi";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { APIError } from "@/interface/api-response.types";
import { Loader } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

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
  email: z.email({
    message: "Please enter a valid email address",
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
  annual_turnover: z
    .string()
    .trim()
    .min(1, {
      message: "Please enter annual turnover.",
    })
    .max(100, {
      message: "Annual turnover must not exceed 100 characters.",
    }),
});

export const EbookForm = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const [trigger, { data: decgData, isError, isSuccess, error, isLoading }] =
    usePostEbookDecgMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      full_name: "",
      mobile_number: "",
      email: "",
      company: "",
      designation: "",
      annual_turnover: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }
    trigger({
      body: data,
      captchaToken,
    });
  }

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  useEffect(() => {
    if (decgData && isSuccess && decgData?.statusCode) {
      toast.success(decgData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset();
      const link = decgData?.response?.link;
      toast.info("Opening download in a new tab in 5 seconds...");
      if (link) {
        setTimeout(() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }, 5000);
      }
    }

    if (decgData && isSuccess && !decgData?.statusCode) {
      toast.error(decgData?.response?.message || "Something went wrong");
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
  }, [isSuccess, decgData, isError, error, trigger, form]);

  return (
    <div className="w-full md:w-[50%] flex justify-center items-start flex-col gap-10">
      <div className="">
        <Highlighter padding={10} action="underline" color="#FF9800">
          <h1 className="hidden xl:block text-[25px] xl:text-[30px] font-medium leading-[1.2em]">
          Free Download below - Detailed<br/>
          ERP Comparison Guide
          </h1>
          <h1 className=" xl:hidden text-[25px] xl:text-[30px] font-medium leading-[1.2em]">
          Free Download below - Detailed ERP Comparison Guide
          </h1>
        </Highlighter>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-[90%] xl:w-[50%] flex flex-col  space-y-6"
        >
          <div className=" gap-4 items-center w-full grid grid-cols-1">
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
              name="mobile_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input
                      required
                      className="bg-white"
                      placeholder="Enter mobile number."
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
                  <FormLabel>Email</FormLabel>
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
