import Product from '../../types/Product';
import { apiInstance } from '..';

export const productsApi = apiInstance.injectEndpoints({
  endpoints: builder => ({
    /* The `getProducts` property is defining an endpoint for retrieving the list of products. */
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
    getProductDetails: builder.query<Product, number>({
      query: productId => ({
        url: `/products/${productId}`,
        method: 'GET',
      }),
    }),
    deleteProduct: builder.query<Product, number>({
      query: productId => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
    }),
    updateProduct: builder.query<Product, number>({
      query: productId => ({
        url: `/products/${productId}`,
        method: 'PUT',
      }),
    }),
  }),
  overrideExisting: false,
});

//Export hooks for usage in function components
export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useDeleteProductQuery,
  useUpdateProductQuery,
} = productsApi;
