import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ebookApi = createApi({
  reducerPath: "ebookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  endpoints: (builder) => ({
    postEbookBiiis: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/biiis",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postEbookIpgfcifr: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/ipgfcifr",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postEbookIetfnbs: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/ietfnbs",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postEbookTtqyfbpa: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/ttqyfbpa",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    
    postEbookTyfftoa: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/tyfftoa",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postEbookDecg: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/decg",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postEbookSbbg: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/sbbg",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),


  }),
});

export const {
  usePostEbookBiiisMutation,
  usePostEbookIpgfcifrMutation,
  usePostEbookIetfnbsMutation,
  usePostEbookTtqyfbpaMutation,
  usePostEbookTyfftoaMutation,
  usePostEbookDecgMutation,
  usePostEbookSbbgMutation,
} = ebookApi;
