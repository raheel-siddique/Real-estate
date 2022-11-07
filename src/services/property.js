// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllProperty: builder.query({
      query: (params) => ({
        url: "/api/property",
        method: "GET",
        params
      }),
    }),

    getPropertyDetailsById: builder.query({
      query: (id) => ({
        url: `/api/property/${id}/details`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPropertyQuery, useGetPropertyDetailsByIdQuery } =
  propertyApi;
