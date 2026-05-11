
"use client";

import { Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import Image from "next/image";
import { toast } from "sonner";

import { APIError } from "@/interface/api-response.types";
import { fireConfetti } from "@/lib/confettiFireworks";
import { useGetFormsQuery, usePostContactCtacMutation } from "@/redux/api/commonApi";
import constants from "@/utils/constants.json";

const CORPORATE_TRAINING_BG_IMAGE =
  "https://contetra.b-cdn.net/pages/other/Typeform-Background.jpg";

const TRAINING_OPTIONS = [
  "IFRS and Ind AS",
  "Business Finance",
  "Shared Services",
  "Process Excellence (ERPs, Finance Transformation)",
  "Tell me about your entire bouquet of finance trainings 🙂",
  "Hmm, my preference is not on the list. Please reach out to me!",
] as const;

type FormState = {
  full_name: string;
  company: string;
  city: string;
  training_for_multiple_members: string;
  training_interests: string[];
  phone_number: string;
  work_email: string;
};

const initialFormState: FormState = {
  full_name: "",
  company: "",
  city: "",
  training_for_multiple_members: "",
  training_interests: [],
  phone_number: "",
  work_email: "",
};

const totalSteps = 7;
const progressWidthClassByStep = [
  "w-[14.285%]",
  "w-[28.57%]",
  "w-[42.855%]",
  "w-[57.14%]",
  "w-[71.425%]",
  "w-[85.71%]",
  "w-full",
] as const;

export default function CorporateTrainingsAtContetra() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [stepError, setStepError] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string>("");
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const { data: formsData } = useGetFormsQuery(
    constants.form_type_ids.corporate_trainings_at_contetra,
  );

  const formId = formsData?.response?.[0]?.id ?? "";

  const [triggerSubmit, { data, isSuccess, isError, error, isLoading }] =
  usePostContactCtacMutation();

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setStepError("");
  }

  function toggleTrainingOption(option: (typeof TRAINING_OPTIONS)[number]) {
    setFormState((prev) => {
      const isSelected = prev.training_interests.includes(option);
      return {
        ...prev,
        training_interests: isSelected
          ? prev.training_interests.filter((item) => item !== option)
          : [...prev.training_interests, option],
      };
    });
    setStepError("");
  }

  function isStepValid(currentStep: number): boolean {
    if (currentStep === 1 && formState.full_name.trim().length < 2) {
      setStepError("Please enter your name.");
      return false;
    }
    if (currentStep === 2 && formState.company.trim().length < 2) {
      setStepError("Please enter your company name.");
      return false;
    }
    if (currentStep === 3 && formState.city.trim().length < 2) {
      setStepError("Please enter your city.");
      return false;
    }
    if (currentStep === 4 && formState.training_for_multiple_members.trim().length < 2) {
      setStepError("Please enter details for your training requirement.");
      return false;
    }
    if (currentStep === 5 && formState.training_interests.length === 0) {
      setStepError("Please select at least one training preference.");
      return false;
    }
    if (currentStep === 6 && !/^\d{10}$/.test(formState.phone_number.trim())) {
      setStepError("Please enter a valid 10-digit contact number.");
      return false;
    }
    if (
      currentStep === 7 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.work_email.trim())
    ) {
      setStepError("Please enter a valid email address.");
      return false;
    }
    setStepError("");
    return true;
  }

  function goNext() {
    if (!isStepValid(step)) return;
    setStep((prev) => Math.min(prev + 1, totalSteps));
  }

  function goPrevious() {
    setStep((prev) => Math.max(prev - 1, 1));
    setStepError("");
  }

  function handleSubmit() {
    if (!isStepValid(7)) return;

    if (!captchaToken) {
      setCaptchaError("Please verify the captcha.");
      return;
    }

    triggerSubmit({
      body: {
        form_id: formId,
        full_name: formState.full_name.trim(),
        company: formState.company.trim(),
        city: formState.city.trim(),
        training_for_multiple_members: formState.training_for_multiple_members,
        training_interests: formState.training_interests.join(", "),
        phone_number: formState.phone_number.trim(),
        work_email: formState.work_email.trim(),
      },
      captchaToken,
    });
  }

  useEffect(() => {
    if (data && isSuccess && data?.statusCode) {
      toast.success(data?.response?.message || "Thanks! We will reach out soon.");
      fireConfetti();
      setFormState(initialFormState);
      setStep(1);
      setStepError("");
      setCaptchaError("");
      setCaptchaToken(null);
      turnstileRef.current?.reset();
      return;
    }

    if (data && isSuccess && !data?.statusCode) {
      toast.error(data?.response?.message || "Something went wrong.");
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (isError) {
      setCaptchaToken(null);
      setCaptchaError("Captcha verification failed. Please try again.");
      turnstileRef.current?.reset();

      if ((error as APIError)?.data) {
        const apiError = error as APIError;
        toast.error(apiError?.data?.response?.message || "Something went wrong.");
      }
    }
  }, [isError, error]);

  function renderStepContent() {
    if (step === 1) {
      return (
        <>
          <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
            Ah, so you&apos;re looking to upskill your team! We&apos;ll call you
            &quot;The Trailblazer Finance Leader&quot;. But what&apos;s your name?
            <span className="text-[#ffbdbd]"> *</span>
          </p>
          <input
            type="text"
            value={formState.full_name}
            onChange={(event) => updateField("full_name", event.target.value)}
            className="h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D7AA]"
            placeholder="Enter your name"
          />
        </>
      );
    }

    if (step === 2) {
      return (
        <>
          <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
            Thank you! Now what&apos;s the name of your company?
            <span className="text-[#ffbdbd]"> *</span>
          </p>
          <input
            type="text"
            value={formState.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D7AA]"
            placeholder="Company name"
          />
        </>
      );
    }

    if (step === 3) {
      return (
        <>
          <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
            Which city are you based out of?
            <span className="text-[#ffbdbd]"> *</span>
          </p>
          <input
            type="text"
            value={formState.city}
            onChange={(event) => updateField("city", event.target.value)}
            className="h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D7AA]"
            placeholder="City"
          />
        </>
      );
    }

    if (step === 4) {
      return (
        <>
          <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
            Are you looking for training multiple team members? (as we don&apos;t
            offer individual level trainings)
            <span className="text-[#ffbdbd]"> *</span>
          </p>
          <input
            type="text"
            value={formState.training_for_multiple_members}
            onChange={(event) =>
              updateField("training_for_multiple_members", event.target.value)
            }
            className="h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D7AA]"
            placeholder="Tell us your team training requirement"
          />
        </>
      );
    }

    if (step === 5) {
      return (
        <>
          <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
            Is there a specific finance training you&apos;re looking for?
            <span className="text-[#ffbdbd]"> *</span>
          </p>
          <p className="text-sm text-white/80">(Choose one or more)</p>
          <div className="grid gap-2.5">
            {TRAINING_OPTIONS.map((option) => {
              const isActive = formState.training_interests.includes(option);
              return (
                <label
                  key={option}
                  className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white"
                >
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => toggleTrainingOption(option)}
                    className="mt-0.5 h-4 w-4 accent-[#80D7AA]"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </>
      );
    }

    if (step === 6) {
      return (
        <>
          <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
            Please leave us your contact number so that we can get in touch with
            you!
            <span className="text-[#ffbdbd]"> *</span>
          </p>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={10}
            value={formState.phone_number}
            onChange={(event) => {
              const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 10);
              updateField("phone_number", digitsOnly);
            }}
            className="h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D7AA]"
            placeholder="10-digit contact number"
          />
        </>
      );
    }

    return (
      <>
        <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
          Last but not least, could you tell us your email address?
          <span className="text-[#ffbdbd]"> *</span>
        </p>
        <input
          type="email"
          value={formState.work_email}
          onChange={(event) => updateField("work_email", event.target.value)}
          className="h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D7AA]"
          placeholder="Email address"
        />
      </>
    );
  }

  return (
    <section className="relative mt-[60px] flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-10 md:mt-[0px] xl:mt-[58px] 2xl:mt-[65px]">
      <Image
        src={CORPORATE_TRAINING_BG_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#040b35]/55" aria-hidden />

      <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/20 bg-[#06113d]/70 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-white/85">
            Step {step} of {totalSteps}
          </p>
          <div className="h-2 w-40 overflow-hidden rounded-full bg-white/20">
            <div
              className={`h-full rounded-full bg-[#80D7AA] transition-all ${progressWidthClassByStep[step - 1]}`}
            />
          </div>
        </div>

        <div className="flex min-h-[320px] flex-col gap-5">{renderStepContent()}</div>

        {stepError ? (
          <p className="mt-3 text-sm font-medium text-[#ffd4d4]">{stepError}</p>
        ) : null}

        {step === totalSteps ? (
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              {captchaError ? (
                <p className="text-sm text-[#ffd4d4]">{captchaError}</p>
              ) : null}
              <div className="w-full overflow-x-auto">
                <div className="origin-left scale-[0.88] sm:scale-100">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={(token) => {
                      setCaptchaToken(token);
                      setCaptchaError("");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full gap-3 sm:w-auto">
              <button
                type="button"
                onClick={goPrevious}
                className="h-12 flex-1 rounded-xl border border-white/35 bg-transparent px-5 text-sm font-semibold text-white transition hover:bg-white/15 sm:min-w-[130px]"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#80D7AA] px-6 text-sm font-semibold text-[#0b1d53] transition hover:bg-[#6ec89a] disabled:cursor-not-allowed disabled:opacity-80 sm:min-w-[130px]"
              >
                {isLoading ? <Loader className="size-4 animate-spin" /> : null}
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex justify-between gap-3">
            <button
              type="button"
              onClick={goPrevious}
              disabled={step === 1}
              className="h-11 rounded-xl border border-white/35 bg-transparent px-5 text-sm font-semibold text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={goNext}
              className="h-11 rounded-xl bg-[#80D7AA] px-7 text-sm font-semibold text-[#0b1d53] transition hover:bg-[#6ec89a]"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
