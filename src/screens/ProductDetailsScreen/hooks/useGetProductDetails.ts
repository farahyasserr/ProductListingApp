import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetProductDetailsQuery } from '../../../services/product/productApi';
import { setSelectedProduct } from '../../../store/reducers/ProductsSliceReducer';

type useGetProductDetailsProps = {
  productId: number;
};
const useGetProductDetails = ({ productId }: useGetProductDetailsProps) => {
  const dispatch = useDispatch();

  const {
    data: productItem,
    isLoading,
    isSuccess,
  } = useGetProductDetailsQuery(productId);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setSelectedProduct(productItem));
    }
  }, [isSuccess, productItem]);

  return {
    isLoading,
  };
};
export default useGetProductDetails;
