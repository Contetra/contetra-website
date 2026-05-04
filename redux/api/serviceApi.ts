import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  endpoints: (builder) => ({
    postServiceTaigasOne: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/services/taigasOne",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),
    
    postServiceTaigasTwo: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/services/taigasTwo",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postServiceEisOne: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/services/eisOne",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postServiceEisTwo: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/services/eisTwo",
        method: "POST",
        body,
        headers: {
          "x-captcha-token": captchaToken,
        },
      }),
    }),

    postServiceSbfmsOne: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/services/sbfmsOne",
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
  usePostServiceTaigasOneMutation,
  usePostServiceTaigasTwoMutation,
  usePostServiceEisOneMutation,
  usePostServiceEisTwoMutation,
  usePostServiceSbfmsOneMutation,
} = serviceApi;
