import Product from "../../types/Product";
import { apiInstance } from "..";

export const productsApi = apiInstance.injectEndpoints({
    endpoints: (builder) => ({
       /* The `getProducts` property is defining an endpoint for retrieving the list of products. */
        getProducts: builder.query<Product[], void>({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
        })
    }),
    overrideExisting: false,
  })

  //Export hooks for usage in function components
  export const { useGetProductsQuery } = productsApi