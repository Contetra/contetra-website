import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export type TeamMember = {
  id: string;
  name: string;
  department: string | null;
  designation: string | null;
  profile_picture_url: string | null;
  order: number;
};

type TeamResponse = {
  statusCode: number;
  response: TeamMember[];
};

export const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  endpoints: (builder) => ({
    getTeam: builder.query<TeamResponse, void>({
      query: () => "/users/team",
    }),

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

    postErpReadinessChecklist: builder.mutation({
      query: ({ body, captchaToken }) => ({
        url: "/common-rest/erp-readiness-checklist",
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
  useGetTeamQuery,
  useGetFormsQuery,
  usePostContactUsMutation,
  usePostContactCtacMutation,
  usePostErpReadinessChecklistMutation,
} = commonApi;
