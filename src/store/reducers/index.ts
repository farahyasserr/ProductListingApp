import { combineReducers } from "@reduxjs/toolkit";
import { apiReducer } from "../../services";
import productsReducer from './ProductsSliceReducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    api: apiReducer, // Add apiReducer to the root reducer for RTK query
  });

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;
