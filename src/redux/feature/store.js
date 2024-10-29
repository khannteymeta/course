import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cart/cardSlice";

export const store = configureStore({
  reducer: {
    product: cardSlice,
    cart: cardSlice,
  },
});
