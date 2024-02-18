import { configureStore } from '@reduxjs/toolkit';
import { apiInstance } from '../services';
import { rootReducer } from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiInstance.middleware),
});

export default store;
