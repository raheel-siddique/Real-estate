import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = localStorage.getItem("access-token");

export const addTokensToCartApi = createApi({
  reducerPath: "addTokensToCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/api`,
  }),
  // refetchOnMountOrArgChange: 30,
  tagTypes: ["Contact", "Checkout"],

  endpoints: (builder) => ({
    addToCartToken: builder.mutation({
      query: (addTokensToCartData) => {
        return {
          url: "/cart/add",
          method: "POST",
          body: addTokensToCartData,
          headers: {
            "x-access-token": token,
          },
        };
      },
      invalidatesTags: ["Contact"],
    }),

    getCartItems: builder.query({
      query: (id) => ({
        url: `/users/${id}/get-cart`,
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      }),
      providesTags: ["Contact"],
    }),

    removeitemFromCart: builder.mutation({
      query: (id) => {
        return {
          url: "cart/remove",

          method: "DELETE",
          body: { propertyId: id },
          headers: {
            "x-access-token": token,
          },
        };
      },
      invalidatesTags: ["Contact"],
      // refetchOnMountOrArgChange: 30,
    }),
    updateTokenToCart: builder.mutation({
      query: (updateTokensToCartData) => {
        return {
          url: "/cart/edit",
          method: "PUT",
          body: updateTokensToCartData,
          headers: {
            "x-access-token": token,
          },
        };
      },
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useAddToCartTokenMutation,
  useGetCartItemsQuery,
  useRemoveitemFromCartMutation,
  useUpdateTokenToCartMutation,
} = addTokensToCartApi;
