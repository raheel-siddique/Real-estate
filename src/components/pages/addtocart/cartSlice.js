import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  sumOfQuanityt: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    cartDataClear: (state) => {
      state.cartItems = [];
    },
    // getSumOfQuantity: (state) => {
    //   state.sumOfQuanityt = state.cartItems
    //     .map((items) => {
    //       return items;
    //     })
    //     .reduce((acc, curr) => {
    //       return acc + curr;
    //     }, 0);
    // },
  },
});

export const { getCartItems, cartDataClear } = cartSlice.actions;

export default cartSlice.reducer;
