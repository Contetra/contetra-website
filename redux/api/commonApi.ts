import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  endpoints: (builder) => ({
    getForms: builder.query({
      query: (formid?: string) =>
        formid
          ? `/common-rest/get-forms?formid=${encodeURIComponent(formid)}`
          : `/common-rest/forms`,
    }),

    postContactUs: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/common-rest/contact-us",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postContactCtac: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/common-rest/contact-ctac",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

  }),
});

export const { useGetFormsQuery, usePostContactUsMutation, usePostContactCtacMutation } = commonApi;
