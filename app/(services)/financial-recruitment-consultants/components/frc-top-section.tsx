"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { Loader, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
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
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const FRC_BG =
  "https://contetra.b-cdn.net/pages/services/frc/frc-Background-1.png";
const FRC_IMG_TEAM =
  "https://contetra.b-cdn.net/pages/services/frc/frc-img-1.png";
const FRC_IMG_FORM =
  "https://contetra.b-cdn.net/pages/services/frc/frc-img-2.png";

const NAVY = "#1a1640";
const TEAL = "#50a085";

const howCanWeHelpOptions = [
  "Contract Roles (Temp Staffing)",
  "Permanent Hires",
  "Create a Training Programme for my finance Team",
  "My problem is not listed here. Please get in touch with me!",
] as const;

const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
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
  finance_team_size: z.string().trim().min(1, {
    message: "Please enter the current size of the finance team.",
  }),
  phone_number: z.string().trim().min(10, {
    message: "Your number must be at least 10 digits.",
  }),
  how_can_we_help: z.enum(howCanWeHelpOptions, {
    message: "Please select how we can help you.",
  }),
});

const underlineInputClass =
  "h-11 rounded-none border-0 border-b border-white/90 bg-transparent px-0 text-sm text-white shadow-none placeholder:text-white/45 focus-visible:border-white focus-visible:ring-0 dark:bg-transparent";

export function FrcTopSection() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      work_email: "",
      company: "",
      designation: "",
      finance_team_size: "",
      phone_number: "",
      how_can_we_help: howCanWeHelpOptions[0],
    },
  });

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("FRC form data", values);
    toast.info(
      "Financial recruitment form UI is ready. Connect the API endpoint to enable live submissions."
    );

    setCaptchaError(null);
    setCaptchaToken(null);
    turnstileRef.current?.reset();
    setIsSubmitting(false);
  }

  return (
    <section
      className="w-full px-[10px] pb-8 pt-2 sm:px-4 md:px-8 lg:pb-12 xl:px-14 2xl:px-[80px]"
      aria-labelledby="frc-hero-heading"
    >
      {/* lg: same row height so the navy form spans the white + green split on the left */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,460px)] lg:items-stretch lg:gap-8 xl:gap-10">
        <div className="flex min-h-0 min-w-0 flex-col">
          <div className="bg-white px-3 py-8 sm:px-5 sm:py-10 md:px-6 md:py-12">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6 md:min-h-[200px] md:items-center lg:min-h-[220px]">
              <h1
                id="frc-hero-heading"
                className="max-w-xl text-balance font-bold uppercase leading-[1.02] tracking-[0.02em]"
                style={{ color: NAVY }}
              >
                <span className="block text-[clamp(0.78rem,1.35vw,1rem)] font-semibold">
                  Creating your
                </span>
                <span
                  className="mt-1 block text-[clamp(2.25rem,6vw,4rem)] font-extrabold tracking-tight"
                  style={{ color: NAVY }}
                >
                  Finance
                </span>
                <span className="mt-1 block text-[clamp(1.25rem,3.2vw,2.35rem)] font-bold">
                  Dream team !
                </span>
              </h1>

              <div className="relative mx-auto aspect-[4/3] w-full max-w-[280px] shrink-0 justify-self-end sm:mx-0 sm:max-w-none md:aspect-[5/4] md:max-h-[280px] md:min-h-[200px] lg:max-h-[300px]">
                <Image
                  src={FRC_IMG_TEAM}
                  alt="Diverse finance professionals illustrated as a team"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 280px, 380px"
                  className="object-contain object-right-bottom sm:object-right-center"
                />
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden px-3 py-8 sm:px-5 sm:py-10 md:px-6 md:py-12"
            style={{
              backgroundColor: TEAL,
              backgroundImage: `url(${FRC_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-[1] max-w-2xl text-white">
              <p className="flex gap-2 text-pretty text-[15px] font-semibold leading-relaxed sm:text-[16px] md:text-[17px]">
                <Play
                  className="mt-1 h-4 w-4 shrink-0 fill-white text-white"
                  aria-hidden
                />
                <span>
                  From talent acquisition, to talent development (Yes! We help in
                  nurturing the talent too!) we&apos;re your one-stop-solution in
                  building the team that aligns with your goals!
                </span>
              </p>

              <ul className="mt-8 flex flex-col gap-8">
                <li className="flex gap-3">
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white"
                    aria-hidden
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: TEAL }}
                    />
                  </span>
                  <div className="min-w-0 space-y-2 text-[14px] leading-relaxed sm:text-[15px]">
                    <p className="font-bold">Expertise of CA&apos;s :</p>
                    <p>
                      We&apos;re a finance-only recruitment firm run by a bunch of
                      Chartered Accountants which gives us a real edge. We know
                      the ins and outs of finance and accounting roles like nobody
                      else, which means we&apos;ve got the skills to find you the
                      perfect candidate.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white"
                    aria-hidden
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: TEAL }}
                    />
                  </span>
                  <div className="min-w-0 space-y-2 text-[14px] leading-relaxed sm:text-[15px]">
                    <p className="font-bold">
                      The correct culture and functional fitment within budget?
                      :
                    </p>
                    <p>
                      Our way of doing things not only gets you top-notch hires
                      but also slashes your hiring costs by a whopping 37%.
                      We&apos;ve got the connections and know-how to find
                      candidates in a flash, so you can kiss goodbye to the
                      endless and expensive recruitment grind. We also go the
                      extra mile to ensure culture fitment for your organisation.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white"
                    aria-hidden
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: TEAL }}
                    />
                  </span>
                  <div className="min-w-0 space-y-2 text-[14px] leading-relaxed sm:text-[15px]">
                    <p className="font-bold">
                      Ready-to-deploy dynamic finance resources:
                    </p>
                    <p>
                      We offer comprehensive training programs designed to bridge
                      skill gaps and equip your team with required core
                      competencies
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex h-full min-h-0 w-full min-w-0 flex-col">
          <div
            className="relative flex h-full min-h-0 w-full flex-1 flex-col rounded-[24px] px-4 pb-8 pt-10 sm:rounded-[28px] sm:px-6 sm:pb-9 sm:pt-12"
            style={{ backgroundColor: NAVY }}
          >
            <div className="pointer-events-none absolute -right-1 -top-4 z-10 w-[min(42%,200px)] sm:-right-2 sm:-top-6 sm:w-[min(46%,220px)]">
              <div className="relative aspect-square w-full">
                <Image
                  src={FRC_IMG_FORM}
                  alt=""
                  fill
                  unoptimized
                  sizes="220px"
                  className="object-contain object-right-top"
                />
              </div>
            </div>

            <h2 className="relative z-[1] pr-[min(38%,7rem)] text-[18px] font-semibold leading-snug text-white sm:text-[20px] lg:text-[22px]">
              Find the right fit for{" "}
              <span className="font-bold" style={{ color: TEAL }}>
                YOUR FINANCE TEAM
              </span>
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="relative z-[1] mt-6 flex flex-1 flex-col gap-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-medium leading-[1.4em] text-white sm:text-[13px]">
                          Full name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={cn(underlineInputClass)}
                            placeholder=""
                            autoComplete="name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="work_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-medium leading-[1.4em] text-white sm:text-[13px]">
                          Work Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className={cn(underlineInputClass)}
                            placeholder=""
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-medium leading-[1.4em] text-white sm:text-[13px]">
                          Company name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={cn(underlineInputClass)}
                            placeholder=""
                            autoComplete="organization"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-medium leading-[1.4em] text-white sm:text-[13px]">
                          Your Designation
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={cn(underlineInputClass)}
                            placeholder=""
                            autoComplete="organization-title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="finance_team_size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-medium leading-[1.4em] text-white sm:text-[13px]">
                          Current size of the Finance Team
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={cn(underlineInputClass)}
                            placeholder=""
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-medium leading-[1.4em] text-white sm:text-[13px]">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            className={cn(underlineInputClass)}
                            placeholder=""
                            autoComplete="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-300" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="how_can_we_help"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[13px] font-medium text-white sm:text-[14px]">
                        How can we help you?
                      </FormLabel>
                      <div
                        className="flex flex-col gap-3"
                        role="radiogroup"
                        aria-label="How can we help you?"
                      >
                        {howCanWeHelpOptions.map((option, index) => {
                          const inputId = `frc-help-${index}`;
                          return (
                            <label
                              key={option}
                              htmlFor={inputId}
                              className="flex cursor-pointer items-start gap-3"
                            >
                              <input
                                id={inputId}
                                type="radio"
                                name={field.name}
                                value={option}
                                checked={field.value === option}
                                onChange={() => field.onChange(option)}
                                onBlur={field.onBlur}
                                ref={index === 0 ? field.ref : undefined}
                                className="mt-1 h-4 w-4 shrink-0 border-2 border-white bg-transparent text-white accent-[#50a085] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                              />
                              <span className="text-[13px] leading-snug text-white sm:text-[14px]">
                                {option}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                      <FormMessage className="text-rose-300" />
                    </FormItem>
                  )}
                />

                <div className="mt-auto flex flex-col gap-5 pt-2 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex w-full min-w-0 flex-col gap-2 sm:max-w-[320px]">
                    {captchaError ? (
                      <p className="text-sm leading-[1.4em] text-rose-300">
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
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full shrink-0 rounded-[10px] px-8 text-[14px] font-semibold text-white sm:w-auto sm:min-w-[140px]"
                    style={{ backgroundColor: TEAL }}
                  >
                    {isSubmitting ? (
                      <Loader className="h-5 w-5 animate-spin" />
                    ) : (
                      "Send"
                    )}
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
