"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APIError } from "@/interface/api-response.types";
import { usePostErpReadinessChecklistMutation } from "@/redux/api/commonApi";
import {
  CHECKLIST_CATEGORIES,
  getResultTier,
  TOTAL_CHECKLIST_ITEMS,
  TURNOVER_OPTIONS,
} from "../content";

const FormSchema = z.object({
  company_name: z
    .string()
    .trim()
    .min(1, { message: "Please enter your company name." })
    .max(255, { message: "Company name must not exceed 255 characters." }),
  turnover: z.enum(TURNOVER_OPTIONS, {
    message: "Please select your turnover range.",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export function ReadinessChecklistForm() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    {},
  );
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [checklistError, setChecklistError] = useState<string | null>(null);
  const [result, setResult] = useState<{ score: number } | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const [trigger, { data, isError, isSuccess, error, isLoading }] =
    usePostErpReadinessChecklistMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      company_name: "",
    },
  });

  const toggleItem = (item: string) => {
    setCheckedItems((current) => ({ ...current, [item]: !current[item] }));
    setChecklistError(null);
  };

  const onSubmit = (values: FormValues) => {
    const checked_items = Object.entries(checkedItems)
      .filter(([, isChecked]) => isChecked)
      .map(([item]) => item);

    if (checked_items.length === 0) {
      setChecklistError("Please select at least one item from the checklist.");
      return;
    }
    setChecklistError(null);

    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }

    trigger({
      body: { ...values, checked_items },
      captchaToken,
    });
  };

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  useEffect(() => {
    if (data && isSuccess && data?.statusCode) {
      const score: number = data?.response?.score ?? 0;
      setResult({ score });
      turnstileRef.current?.reset();
      setCaptchaToken(null);
    }

    if (data && isSuccess && !data?.statusCode) {
      toast.error(data?.response?.message || "Something went wrong");
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
  }, [data, isSuccess, isError, error]);

  const handleStartOver = () => {
    setResult(null);
    setCheckedItems({});
    setChecklistError(null);
    form.reset();
  };

  if (result) {
    const tier = getResultTier(result.score);

    return (
      <Card className="mx-auto max-w-3xl">
        <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">
            Score: {result.score} / {TOTAL_CHECKLIST_ITEMS}
          </p>
          <h2 className="text-2xl font-semibold">
            {tier.emoji} {tier.heading}
          </h2>
          {tier.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <ul className="list-disc space-y-1 pl-5">
            {tier.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className="text-muted-foreground">{tier.closing}</p>
          <Button
            type="button"
            variant="outline"
            className="mt-4 w-fit"
            onClick={handleStartOver}
          >
            Start Over
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex max-w-3xl flex-col gap-8"
      >
        {CHECKLIST_CATEGORIES.map((category) => (
          <div key={category.title} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">
              {category.emoji} {category.title}
            </h3>
            <div className="flex flex-col gap-2">
              {category.items.map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-start gap-3 rounded-md border p-3 text-sm hover:bg-muted/50"
                >
                  <Checkbox
                    checked={Boolean(checkedItems[item])}
                    onCheckedChange={() => toggleItem(item)}
                    className="mt-0.5"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {checklistError && (
          <p className="text-sm text-red-500">{checklistError}</p>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your company name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="turnover"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Turnover</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your turnover" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TURNOVER_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          {captchaError && (
            <p className="mt-2 text-sm text-red-500">{captchaError}</p>
          )}
          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={setToken}
          />
        </div>

        <Button type="submit" className="w-fit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Display results"}
        </Button>
      </form>
    </Form>
  );
}
