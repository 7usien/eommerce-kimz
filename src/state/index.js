import { configureStore } from '@reduxjs/toolkit';
import categories from './categorySlice';
import items from './ItemSlice';
import cart from './cartSLice';
const store = configureStore({
  reducer: {
    categories,
    items,
    cart,
  },
});
export default store;
