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
    deleteProduct: builder.mutation<Product, number>({
      query: productId => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
    }),
    updateProduct: builder.mutation<
      Product,
      { productId: number; productData: Product }
    >({
      query: ({ productId, productData }) => ({
        url: `/products/${productId}`,
        method: 'PUT',
        body: productData, // Include the product data as the request body
      }),
    }),
  }),
  overrideExisting: false,
});

//Export hooks for usage in function components
export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
