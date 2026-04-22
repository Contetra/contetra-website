"use client"

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import z from "zod";
import {
  useGetAuthorsQuery,
  useGetCategoriesQuery,
} from "@/redux/api/postsApi";
import { SlidersHorizontal } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateFilter } from "@/redux/slice/blogSlice";
import { useEffect, useState } from "react";

interface CategoryItem {
  name: string;
  category_id: string;
}

interface AuthorItem {
  name: string;
  author_id: string;
}

const formSchema = z.object({
  categories: z.array(z.string()),
  authors: z.array(z.string()),
});

export function BlogFIlterSidebar() {
  const { data: authorData } = useGetAuthorsQuery({});
  const { data: categoriesData } = useGetCategoriesQuery({});
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      authors: [],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    dispatch(updateFilter({ key: "categories", value: data.categories }));
    dispatch(updateFilter({ key: "authors", value: data.authors }));
    dispatch(updateFilter({ key: "page", value: 1 }));
    setOpen(false);
  }

  const formResetStatus = useAppSelector(
    (state) => state.blogSlice.toggleBlogFormReset,
  );

  useEffect(() => {
    form.reset();
  }, [formResetStatus, form]);

  const overflowBehavior = "wrap";

  return (
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetTrigger asChild>
        <Button className=" md:w-[35%] xl:w-[25%] cursor-pointer" variant="outline">
          <SlidersHorizontal />
          Other Filters
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Other Filters</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col justify-between px-[20px] w-full h-full"
          >
            <div className="flex flex-col gap-10">
              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Categories</FormLabel>
                    <MultiSelect
                      onValuesChange={field.onChange}
                      values={field.value}
                    >
                      <FormControl>
                        <MultiSelectTrigger className="w-full">
                          <MultiSelectValue
                            overflowBehavior={overflowBehavior}
                            placeholder="Select categories..."
                          />
                        </MultiSelectTrigger>
                      </FormControl>
                      <MultiSelectContent>
                        <MultiSelectGroup>
                          {categoriesData?.response?.map(
                            (cat: CategoryItem) => (
                              <MultiSelectItem
                                key={cat.category_id}
                                value={cat.category_id}
                              >
                                {cat.name}
                              </MultiSelectItem>
                            ),
                          )}
                        </MultiSelectGroup>
                      </MultiSelectContent>
                    </MultiSelect>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="authors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Authors</FormLabel>
                    <MultiSelect
                      onValuesChange={field.onChange}
                      values={field.value}
                    >
                      <FormControl>
                        <MultiSelectTrigger className="w-full">
                          <MultiSelectValue
                            overflowBehavior={overflowBehavior}
                            placeholder="Select authors..."
                          />
                        </MultiSelectTrigger>
                      </FormControl>
                      <MultiSelectContent>
                        <MultiSelectGroup>
                          {authorData?.response?.map((auth: AuthorItem) => (
                            <MultiSelectItem
                              key={auth.author_id}
                              value={auth.author_id}
                            >
                              {auth.name}
                            </MultiSelectItem>
                          ))}
                        </MultiSelectGroup>
                      </MultiSelectContent>
                    </MultiSelect>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
