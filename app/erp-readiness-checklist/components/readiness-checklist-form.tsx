"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RotateCcw } from "lucide-react";

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
import {
  CHECKLIST_CATEGORIES,
  getResultTier,
  TOTAL_CHECKLIST_ITEMS,
  TURNOVER_OPTIONS,
} from "../content";
import { GetGuideDialog } from "./get-guide-dialog";

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

type ChecklistResult = {
  score: number;
  company_name: string;
  turnover: string;
  checked_items: string[];
};

export function ReadinessChecklistForm() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    {},
  );
  const [checklistError, setChecklistError] = useState<string | null>(null);
  const [result, setResult] = useState<ChecklistResult | null>(null);

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

    setResult({
      score: checked_items.length,
      company_name: values.company_name,
      turnover: values.turnover,
      checked_items,
    });
  };

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
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <GetGuideDialog
              companyName={result.company_name}
              turnover={result.turnover}
              checkedItems={result.checked_items}
              totalItems={TOTAL_CHECKLIST_ITEMS}
            />
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={handleStartOver}
            >
              <RotateCcw className="size-4" />
              Start Over
            </Button>
          </div>
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

        <Button type="submit" className="w-fit">
          Display results
        </Button>
      </form>
    </Form>
  );
}
