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
          ? `/common-rest/forms?formid=${encodeURIComponent(formid)}`
          : `/common-rest/forms`,
    }),
  }),
});

export const { useGetFormsQuery } = commonApi;
