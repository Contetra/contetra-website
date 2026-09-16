import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  endpoints: (builder) => ({
    getPostsList: builder.query({
      query: (post) => {
        const params = new URLSearchParams();

        if (post.page) params.append("page", String(post.page));
        if (post.limit) params.append("limit", String(post.limit));
        if (post.sortOrder) params.append("sortOrder", post.sortOrder);
        if (post.search) params.append("search", post.search);

        post.authors?.forEach((author: string) =>
          params.append("authors", author),
        );

        post.categories?.forEach((category: string) =>
          params.append("categories", category),
        );

        return {
          url: `/posts/all-posts?${params.toString()}`,
        };
      },
    }),

    getAuthors: builder.query({
      query: () => `/common-rest/authors`,
    }),

    getBlogContent: builder.query({
      query: (post) => `/posts/posts-content?id=${post?.id}`,
    }),

    getBlogData: builder.query({
      query: (post) => {
        const slug = (post?.slug as string | undefined) ?? "";
        return `/posts/posts-data?slug=${encodeURIComponent(slug)}`;
      },
    }),

    getCategories: builder.query({
      query: () => `/common-rest/categories`,
    }),

    getLatestBlog: builder.query({
      query: () => `/posts/latest-blog`,
    }),

    getHomepageBlogs: builder.query({
      query: (params: {
        limit?: number;
        categories?: string[];
        sortOrder?: "asc" | "desc";
      }) => {
        const searchParams = new URLSearchParams();

        if (params?.limit) searchParams.append("limit", String(params.limit));
        if (params?.sortOrder)
          searchParams.append("sortOrder", params.sortOrder);

        params?.categories?.forEach((categoryId) =>
          searchParams.append("categories", categoryId),
        );

        return `/common-rest/homepage-blogs?${searchParams.toString()}`;
      },
    }),
  }),
});

export const {
  useGetPostsListQuery,
  useGetAuthorsQuery,
  useGetCategoriesQuery,
  useLazyGetPostsListQuery,
  useLazyGetBlogContentQuery,
  useGetLatestBlogQuery,
  useLazyGetBlogDataQuery,
  useGetHomepageBlogsQuery,
} = postsApi;
