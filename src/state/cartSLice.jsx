import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export const totalCartQuantity = createSelector(
  (state) => state.cart.items,
  (items) => {
    let totalQuantity = 0;

    for (let key in items) {
      totalQuantity += items[key]; // value of key added to totalQuantity
    }
    return totalQuantity;
  }
);

export default cartSlice.reducer;
