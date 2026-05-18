"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from "@/components/ui/textarea";
import { usePostServiceKycMutation } from "@/redux/api/serviceApi";
import { toast } from "sonner";
import { fireConfetti } from "@/lib/confettiFireworks";
import { APIError } from "@/interface/api-response.types";
import { useRouter } from "next/navigation";
import { CalendarIcon, Loader } from "lucide-react";
import { useGetFormsQuery } from "@/redux/api/commonApi";
import constants from "@/utils/constants.json";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// ── File constraints ──────────────────────────────────────────────────────────
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_FILES = 5;

const ACCEPT_PDF_IMAGE = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];
const ACCEPT_PDF_DOC = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPT_PDF_DOC_IMAGE = [
  ...ACCEPT_PDF_DOC,
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

function validateFiles(files: File[], acceptTypes: string[]): true | string {
  if (!files.length) return "Please upload at least one file.";
  if (files.length > MAX_FILES)
    return `You can upload up to ${MAX_FILES} files.`;
  for (const f of files) {
    if (f.size > MAX_FILE_SIZE) return `"${f.name}" exceeds the 10 MB limit.`;
    if (!acceptTypes.includes(f.type))
      return `"${f.name}" is not a supported file type.`;
  }
  return true;
}

const fileSchema = (acceptTypes: string[]) =>
  z
    .custom<FileList>((val) => val instanceof FileList, {
      message: "Please upload at least one file.",
    })
    .superRefine((files, ctx) => {
      const result = validateFiles(Array.from(files), acceptTypes);

      if (result !== true) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: result,
        });
      }
    });

// ── Zod schema ────────────────────────────────────────────────────────────────
const FormSchema = z.object({
  company_name: z
    .string()
    .trim()
    .min(2, { message: "Company name must be at least 2 characters." }),
  cin: z
    .string()
    .trim()
    .min(2, { message: "CIN must be at least 2 characters." }),
  date_of_incorporation: z.date({
    message: "Date of incorporation is required.",
  }),
  pan: z
    .string()
    .trim()
    .length(10, { message: "PAN must be exactly 10 characters." }),
  pan_upload: fileSchema(ACCEPT_PDF_IMAGE),
  gstin: z
    .string()
    .trim()
    .length(15, { message: "GSTIN must be exactly 15 characters." }),
  gst_upload: fileSchema(ACCEPT_PDF_IMAGE),
  nature_of_business: z
    .string()
    .trim()
    .min(2, { message: "Nature of business is required." }),
  registered_office_address: z
    .string()
    .trim()
    .min(5, { message: "Registered office address is required." }),
  business_addresses: z
    .string()
    .trim()
    .min(5, { message: "Business address is required." }),
  contact_person_name: z
    .string()
    .trim()
    .min(2, { message: "Contact person name must be at least 2 characters." }),
  contact_email: z.email({ message: "Please enter a valid email address." }),
  contact_number: z
    .string()
    .trim()
    .min(10, { message: "Contact number must be at least 10 digits." }),
  signed_nda: fileSchema(ACCEPT_PDF_DOC_IMAGE),
  signed_engagement_letter: fileSchema(ACCEPT_PDF_DOC),
});

// ── Shared class strings ──────────────────────────────────────────────────────
const inputClass =
  "h-11 rounded-[14px] border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]";

const labelClass =
  "text-[12px] font-medium text-[#2B2B2B] dark:text-[#E5E7EB] sm:text-[13px]";

// Shadcn Input styled as a file picker using `file:` pseudo-class utilities
const fileInputClass = cn(
  "h-11 rounded-[14px] border border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]",
  "cursor-pointer",
  // native "Choose file" button styling
  "file:mr-3 file:h-full file:cursor-pointer file:border-0 file:border-r file:border-[#E8CFAF]",
  "file:bg-[#FFFDF8] file:px-3 file:text-[12px] file:font-medium file:text-[#2B2B2B]",
  "dark:file:border-[#344155] dark:file:bg-[#172036] dark:file:text-[#E5E7EB]",
  "hover:file:bg-[#F5ECD9] dark:hover:file:bg-[#1E2D45]",
  // text colour for "No file chosen" label
  "text-[#9CA3AF] dark:text-[#6B7280]",
);

// ── Main Form ─────────────────────────────────────────────────────────────────
export const FormKyc = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const router = useRouter();

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids
      .KYC,
  );
  const form_id = formsData?.response[0]?.id;

  const [trigger, { data: taigasData, isError, isSuccess, error, isLoading }] =
  usePostServiceKycMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      company_name: "",
      cin: "",
      date_of_incorporation: undefined,
      pan: "",
      pan_upload: undefined,
      gstin: "",
      gst_upload: undefined,
      nature_of_business: "",
      registered_office_address: "",
      business_addresses: "",
      contact_person_name: "",
      contact_email: "",
      contact_number: "",
      signed_nda: undefined,
      signed_engagement_letter: undefined,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!captchaToken) {
      setCaptchaError("Please verify the captcha");
      return;
    }

    const fd = new FormData();
    fd.append("form_id", form_id ?? "");
    fd.append("company_name", data.company_name);
    fd.append("cin", data.cin);
    fd.append(
      "date_of_incorporation",
      format(data.date_of_incorporation, "yyyy-MM-dd"),
    );
    fd.append("pan", data.pan);
    fd.append("gstin", data.gstin);
    fd.append("nature_of_business", data.nature_of_business);
    fd.append("registered_office_address", data.registered_office_address);
    fd.append("business_addresses", data.business_addresses);
    fd.append("contact_person_name", data.contact_person_name);
    fd.append("contact_email", data.contact_email);
    fd.append("contact_number", data.contact_number);

    Array.from(data.pan_upload).forEach((f) => fd.append("pan_upload", f));

    Array.from(data.gst_upload).forEach((f) => fd.append("gst_upload", f));

    Array.from(data.signed_nda).forEach((f) => fd.append("signed_nda", f));

    Array.from(data.signed_engagement_letter).forEach((f) =>
      fd.append("signed_engagement_letter", f),
    );

    trigger({ body: fd, captchaToken });
    setCaptchaError(null);
    setCaptchaToken(null);
    turnstileRef.current?.reset();
  }

  useEffect(() => {
    if (taigasData && isSuccess && taigasData?.statusCode) {
      toast.success(taigasData?.response?.message);
      fireConfetti();
      setCaptchaError(null);
      turnstileRef.current?.reset();
      setCaptchaToken(null);
      form.reset();
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
        toast.error(
          apiError?.data?.response?.message || "Something went wrong",
        );
      }
    }
  }, [isSuccess, taigasData, isError, error, trigger, form, router]);

  const setToken = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  return (
    <div className="w-full rounded-[24px] bg-white p-3 shadow-[0_18px_55px_rgba(18,12,84,0.08)] dark:bg-[#111827] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] sm:rounded-[28px] sm:p-5">
      <div className="w-full rounded-[20px] bg-[#FFFDF8] p-4 dark:bg-[#172036] sm:rounded-[24px] sm:p-6">
        <h2 className="text-center text-[20px] font-semibold leading-[1.35] text-[#111111] dark:text-white sm:text-[24px] xl:text-[26px]">
          KYC
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-6"
          >
            {/* ── Section 1: Company Details ── */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Company Name</FormLabel>
                    <FormControl>
                      <Input className={inputClass} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      Company Registration Number / CIN
                    </FormLabel>
                    <FormControl>
                      <Input className={inputClass} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date_of_incorporation"
                render={({ field }) => (
                  <FormItem className="flex flex-col justify-end">
                    <FormLabel className={labelClass}>
                      Date of Incorporation
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "h-11 w-full rounded-[14px] border-[#E8CFAF] bg-white pl-3 text-left text-sm font-normal dark:border-[#344155] dark:bg-[#0F172A]",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value
                              ? format(field.value, "PPP")
                              : "Pick a date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ── Section 2: PAN ── */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="pan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      PAN (Permanent Account Number)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={inputClass}
                        maxLength={10}
                        {...field}
                        onChange={(e) =>
                          field.onChange(e.target.value.toUpperCase())
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pan_upload"
                /* eslint-disable @typescript-eslint/no-unused-vars */
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Upload PAN</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        accept=".pdf,image/*"
                        className={fileInputClass}
                        onChange={(e) => onChange(e.target.files)}
                        {...rest}
                      />
                    </FormControl>
                    <FormDescription className="text-[11px] text-[#9CA3AF]">
                      Upload up to 5 supported files: PDF or image. Max 10 MB
                      per file.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ── Section 3: GSTIN ── */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="gstin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      GSTIN (Goods and Services Tax Identification Number)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={inputClass}
                        maxLength={15}
                        {...field}
                        onChange={(e) =>
                          field.onChange(e.target.value.toUpperCase())
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gst_upload"
                /* eslint-disable @typescript-eslint/no-unused-vars */
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Upload GST</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        accept=".pdf,image/*"
                        className={fileInputClass}
                        onChange={(e) => onChange(e.target.files)}
                        {...rest}
                      />
                    </FormControl>
                    <FormDescription className="text-[11px] text-[#9CA3AF]">
                      Upload up to 5 supported files: PDF or image. Max 10 MB
                      per file.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ── Section 4: Business Details ── */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="nature_of_business"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      Nature of Business
                    </FormLabel>
                    <FormControl>
                      <Input className={inputClass} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="registered_office_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      Registered Office Address
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[88px] rounded-[14px] border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="business_addresses"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className={labelClass}>
                      Business Address(es)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[88px] rounded-[14px] border-[#E8CFAF] bg-white text-sm dark:border-[#344155] dark:bg-[#0F172A]"
                        placeholder="If multiple, separate each address on a new line"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ── Section 5: Contact Info ── */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FormField
                control={form.control}
                name="contact_person_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      Contact Person Name
                    </FormLabel>
                    <FormControl>
                      <Input className={inputClass} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      Contact Email ID
                    </FormLabel>
                    <FormControl>
                      <Input type="email" className={inputClass} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Contact Number</FormLabel>
                    <FormControl>
                      <Input className={inputClass} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ── Section 6: Document Uploads ── */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="signed_nda"
                /* eslint-disable @typescript-eslint/no-unused-vars */
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Signed NDA</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,image/*"
                        className={fileInputClass}
                        onChange={(e) => onChange(e.target.files)}
                        {...rest}
                      />
                    </FormControl>
                    <FormDescription className="text-[11px] text-[#9CA3AF]">
                      Upload up to 5 supported files: PDF, document, or image.
                      Max 10 MB per file.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="signed_engagement_letter"
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>
                      Signed Engagement Letter
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx"
                        className={fileInputClass}
                        onChange={(e) => onChange(e.target.files)}
                        {...rest}
                      />
                    </FormControl>
                    <FormDescription className="text-[11px] text-[#9CA3AF]">
                      Upload up to 5 supported files: PDF or document. Max 10 MB
                      per file.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ── Captcha + Submit ── */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full min-w-0 flex-col gap-2 sm:w-auto">
                {captchaError && (
                  <p className="text-sm text-red-500">{captchaError}</p>
                )}
                <div className="w-full overflow-x-auto sm:overflow-visible">
                  <div className="origin-left scale-[0.92] sm:scale-100">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={setToken}
                    />
                  </div>
                </div>
              </div>
              <Button
                className="h-11 w-full cursor-pointer rounded-[10px] bg-[#56B9F7] px-8 text-[14px] font-semibold text-white hover:bg-[#42aef1] sm:w-auto sm:self-start"
                type="submit"
              >
                {isLoading && <Loader className="animate-spin" />} {"Submit Form!"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
