import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/api/auth`,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    checkUser: builder.mutation({
      query: (newUser) => {
        return {
          url: "/login",
          method: "POST",
          body: newUser,
        };
      },
      invalidatesTags: ["User"],
    }),
    addUser: builder.mutation({
      query: (newUser) => {
        return {
          url: "/register",
          method: "POST",
          body: newUser,
        };
      },
    }),
    getCurrentUser: builder.query({
      query: (token) => ({
        method: "GET",
        headers: {
          "x-access-token": token,
        },
        url: "/me",
      }),
      providesTags: ["User"],
    }),
    forgetPassword: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/forget-password",
        body: { email: body.email },
        headers: {
          "x-access-token": body.token,
        },
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/reset-password",
        method: "PATCH",
        body: {
          password: data.password,
        },
        headers: {
          "x-access-token": data.token,
        },
      }),
    }),
    verifyOtp: builder.mutation({
      query: (body) => ({
        method: "PATCH",
        url: "/complete-email-verification-request",
        body: { verificationCode: body.otp },
        headers: {
          "x-access-token": body.token,
        },
      }),
    }),
  }),
});

export const {
  useCheckUserMutation,
  useLazyGetCurrentUserQuery,
  useAddUserMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useVerifyOtpMutation,
  useGetCurrentUserQuery
} = authApi;
