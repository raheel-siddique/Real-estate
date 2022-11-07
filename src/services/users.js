// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL + "/api/users",
  }),
  endpoints: (builder) => ({
    addIdentityVerificationDetails: builder.mutation({
      query: (data) => ({
        url: "/add-identity-verification-details",
        method: "POST",
        body: {
          countryOfOrigin: data.countryOfOrigin,
          kycDocumentType: data.kycDocumentType,
          kycFront: data.kycFront,
          kycBack: data.kycBack,
        },
        headers: {
          "x-access-token": data.token,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddIdentityVerificationDetailsMutation } = usersApi;
