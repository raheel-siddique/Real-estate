import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// import { registerApi } from "../services/signup";
import { propertyApi } from "../services/property";
import { authApi } from "../services/auth";

import { addTokensToCartApi } from "../services/addtocart";
import Userslice from "../components/pages/auth/user/userSlice";
import { checkoutApi } from "../services/checkout";
import cartSlice from "../components/pages/addtocart/cartSlice";
import { usersApi } from "../services/users";

export const store = configureStore({
  reducer: {
    user: Userslice,
    cart: cartSlice,
    [propertyApi.reducerPath]: propertyApi.reducer,
    // [registerApi.reducerPath]: registerApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    [addTokensToCartApi.reducerPath]: addTokensToCartApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(addTokensToCartApi.middleware),
    getDefaultMiddleware().concat([
      addTokensToCartApi.middleware,
      checkoutApi.middleware,

      authApi.middleware,
      // registerApi.middleware,
      propertyApi.middleware,
      usersApi.middleware,
    ]),
});
setupListeners(store.dispatch);
