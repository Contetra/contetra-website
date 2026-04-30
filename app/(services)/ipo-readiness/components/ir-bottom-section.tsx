"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, ChevronsUpDown, Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const helpOptions = [
  "IPO readiness assessment & gap analysis",
  "Technical accounting / IND-AS / IFRS / US GAAP",
  "ERP, automation & finance systems",
  "CFO office / FP&A / governance",
  "GCC or shared services setup",
  "Something else — please reach out",
] as const;

const formSchema = z.object({
  first_name: z.string().trim().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().trim().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  work_email: z.email({
    message: "Please enter a valid work email address.",
  }),
  organization_name: z.string().trim().min(2, {
    message: "Organization name must be at least 2 characters.",
  }),
  annual_revenue: z.string().trim().min(1, {
    message: "Please enter annual revenue.",
  }),
  help_topic: z.string().trim().min(1, {
    message: "Please select how we can best help you.",
  }),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const inputClassName =
  "h-11 rounded-[14px] border border-[#E2E2E2] bg-[#F0F0F0] px-3.5 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B] shadow-none focus-visible:border-[#CFCFCF] focus-visible:ring-1 focus-visible:ring-[#2D0A57]/20";

const textareaClassName =
  "min-h-[100px] w-full resize-y rounded-[14px] border border-[#E2E2E2] bg-[#F0F0F0] px-3.5 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B] outline-none focus-visible:border-[#CFCFCF] focus-visible:ring-1 focus-visible:ring-[#2D0A57]/20";

export function IrBottomSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      work_email: "",
      organization_name: "",
      annual_revenue: "",
      help_topic: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("IPO readiness enquiry form", values);
    toast.info(
      "IPO readiness form UI is ready. Connect API endpoint to enable live submissions.",
    );
    setIsSubmitting(false);
    form.reset();
  }

  return (
    <section className="w-full bg-[#0a051a] py-10 sm:py-12 md:py-14 lg:py-16 dark:bg-[#05030d]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,1fr)] lg:items-start lg:gap-12 xl:gap-16 xl:px-0">
        <div className="max-w-[560px] text-white lg:pt-2">
          <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]">
            Start Your
            <br />
            <span className="italic text-[#f2d05a]">IPO Readiness</span>
            <br />
            <span className="italic text-[#f2d05a]">Assessment</span>
          </h2>

          <p className="mt-6 max-w-[32rem] text-base leading-[1.65] text-white/95 sm:text-[17px]">
            You&apos;re here because IPO readiness isn&apos;t just about filing
            documents. Tell us a little about your business, and we&apos;ll
            assess where you stand and what needs fixing before the markets
            scrutinize you.
          </p>
          <p className="mt-4 max-w-[32rem] text-base leading-[1.65] text-white/95 sm:text-[17px]">
            This assessment helps us understand your current finance maturity,
            systems, and readiness gaps.
          </p>
        </div>

        <div className="w-full lg:max-w-[520px] lg:justify-self-end">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-6 md:p-7">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className={inputClassName}
                            placeholder="First Name *"
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
                            className={inputClassName}
                            placeholder="Last Name *"
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
                            className={inputClassName}
                            placeholder="Your Phone *"
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
                            className={inputClassName}
                            placeholder="Your Work Email Address *"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organization_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className={inputClassName}
                            placeholder="Organization Name *"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="annual_revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className={inputClassName}
                            placeholder="Annual Revenue *"
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
                  name="help_topic"
                  render={({ field }) => (
                    <FormItem>
                      <Popover open={helpOpen} onOpenChange={setHelpOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              type="button"
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "h-11 w-full justify-between rounded-[14px] border border-[#E2E2E2] bg-[#F0F0F0] px-3.5 text-left text-sm font-normal text-[#1A1A1A] shadow-none hover:bg-[#F0F0F0]",
                                !field.value && "text-[#6B6B6B]",
                              )}
                              ref={field.ref}
                              onBlur={field.onBlur}
                            >
                              <span className="truncate">
                                {field.value ||
                                  "How can we best help you?"}
                              </span>
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
                              placeholder="Search..."
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>No option found.</CommandEmpty>
                              <CommandGroup>
                                {helpOptions.map((option) => (
                                  <CommandItem
                                    key={option}
                                    value={option}
                                    className="cursor-pointer text-sm"
                                    onSelect={() => {
                                      form.setValue("help_topic", option, {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                      });
                                      setHelpOpen(false);
                                    }}
                                  >
                                    {option}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        option === field.value
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          className={textareaClassName}
                          placeholder="Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2 text-center">
                  <Button
                    type="submit"
                    className="h-11 min-w-[140px] rounded-[10px] bg-[#f2d05a] px-8 text-sm font-semibold text-black hover:bg-[#e8c64d]"
                  >
                    {isSubmitting ? (
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
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
}
