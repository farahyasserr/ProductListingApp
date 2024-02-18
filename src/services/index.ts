import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://fakestoreapi.com';

// creating an instance of the API using the `createApi` function 
export const apiInstance = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: () => ({}),
  })

/* destructuring the `reducer` property from the `apiInstance` object and assigning it to a new variable `apiReducer`. This allows you to export
the `apiReducer` variable separately, which can be used in the Redux store to handle the state management for the API. */
 export const { reducer: apiReducer } = apiInstance;