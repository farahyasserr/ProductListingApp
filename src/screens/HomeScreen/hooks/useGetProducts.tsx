import React, { useEffect } from 'react';
import { useGetProductsQuery } from '../../../services/product/productApi';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../../store/reducers/ProductsSliceReducer';

const useGetProducts = () => {
  const { data, isSuccess, isLoading } = useGetProductsQuery(); //Get Products Query
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setProducts(data)); // Dispatch setProducts action with the fetched data
    }
  }, [isSuccess, dispatch]);

  return {
    isLoading,
  };
};

export default useGetProducts;
