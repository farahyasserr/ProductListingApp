import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Product from '../../types/Product';

interface ProductsState {
  items?: Product[];
  selectedProduct?: Product;
}

const initialState: ProductsState = {
  items: undefined,
  selectedProduct: undefined,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.items = state.items!.filter(
        product => product.id !== action.payload,
      );
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const index = state.items!.findIndex(product => product.id === item.id);
      if (index !== -1 && state.items) {
        state.items[index] = item;
        state.selectedProduct = item;
      }
    },
    setSelectedProduct(state, action: PayloadAction<Product>) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, deleteProduct, updateProduct, setSelectedProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
