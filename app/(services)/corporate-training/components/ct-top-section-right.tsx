"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Corporate training form data", values);
    toast.info(
      "Corporate training form UI is ready. Connect the API endpoint to enable live submissions."
    );
    setIsSubmitting(false);
  }

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

            <Button
              className="mt-1 h-11 w-fit rounded-[10px] bg-[#92E3B5] px-8 text-[14px] font-semibold text-[#1B145F] hover:bg-[#7fd9a6]"
              type="submit"
            >
              {isSubmitting ? <Loader className="animate-spin" /> : null}
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
