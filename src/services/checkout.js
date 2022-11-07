import { addTokensToCartApi } from "./addtocart";

const token = localStorage.getItem("access-token");

export const checkoutApi = addTokensToCartApi.injectEndpoints({
  endpoints: (builder) => ({
    addCheckoutData: builder.mutation({
      query: ({ token, ...checkoutData }) => {
        return {
          url: `/order`,
          method: "POST",
          body: checkoutData,
          headers: {
            "x-access-token": token,
          },
        };
      },
      invalidatesTags: ["Checkout", "Contact"],
    }),
    getCheckoutItems: builder.query({
      query: () => ({
        url: `/order`,
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      }),
      providesTags: ["Checkout"],
    }),
    getSingleCheckoutItems: builder.query({
      query: (id) => ({
        url: `order/${id}`,
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      }),
      providesTags: ["Checkout"],
    }),
  }),
});

export const {
  useGetCheckoutItemsQuery,
  useAddCheckoutDataMutation,
  useGetSingleCheckoutItemsQuery,
} = checkoutApi;
