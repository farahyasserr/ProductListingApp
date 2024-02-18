import { RootState } from '../reducers/index';

export const selectProducts = (state: RootState) => state.products.items;