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

    postEbookUrgtcss: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/urgtcss",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postEbookBiiin: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/biiin",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postEbookMcanae: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/mcanae",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookYeccfbo: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/yeccfbo",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookBgc: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/bgc",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postEbookEiu: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/eiu",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookRdtwc: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/rdtwc",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookHtoycacgag: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/htoycacgag",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookEastipate: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/eastipate",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookTcgtcecstsobe: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/tcgtcecstsobe",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookBiirr: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/biirr",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookPcc: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/pcc",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookRruasioam: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/rruasioam",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    postEbookYfpfe: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/ebook/yfpfe",
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
  usePostEbookUrgtcssMutation,
  usePostEbookBiiinMutation,
  usePostEbookMcanaeMutation,
  usePostEbookYeccfboMutation,
  usePostEbookBgcMutation,
  usePostEbookEiuMutation,
  usePostEbookRdtwcMutation,
  usePostEbookHtoycacgagMutation,
  usePostEbookEastipateMutation,
  usePostEbookTcgtcecstsobeMutation,
  usePostEbookBiirrMutation,
  usePostEbookPccMutation,
  usePostEbookRruasioamMutation,
  usePostEbookYfpfeMutation,
} = ebookApi;
