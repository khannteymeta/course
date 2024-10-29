import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalItems: 0,
  quantity: 0,
};

export const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.totalItems += 1;
    },
  },
});

// export action
export const { addToCard } = cardSlice.actions;

// export selector
export const selectTotaItems = (state) => state?.cart?.totalItems;

// export reducer
export default cardSlice.reducer;
