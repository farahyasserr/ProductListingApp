import { RootState } from '../reducers/index';

export const selectProducts = (state: RootState) => state.products.items;
export const selectedProduct = (state: RootState) =>
  state.products.selectedProduct;
