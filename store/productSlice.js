import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [], 
    selectedProduct: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, selectProduct } = productSlice.actions;
export default productSlice.reducer;
