import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Product from '../../types/Product';

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      console.log("-------------==========-- set productss: ", action.payload)
      state.items = action.payload;
    },
    deleteProduct(state, action: PayloadAction<number>) {
      console.log("-============== delete", action)
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const index = state.items.findIndex(product => product.id === item.id);
      console.log("index", index)
      if (index !== -1) {
        state.items[index] = item;
      }
      console.log("state", state.items[index])
    },
  },
});

export const { setProducts, deleteProduct , updateProduct} = productsSlice.actions;

export default productsSlice.reducer;