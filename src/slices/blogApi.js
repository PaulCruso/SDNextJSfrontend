// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./api";

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${url}`,
    headers: { 
      // 'accept': 'appication/pdf',
      'content-type': 'multipart/form-data' },
  }),
  endpoints: (builder) => ({
    getAllblogdb: builder.query({
      query: () => `blogdb`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllblogdbQuery } = blogApi;
