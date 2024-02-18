import React from 'react';
import { useDeleteProductMutation } from '../../../services/product/productApi';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../store/reducers/ProductsSliceReducer';

const useDeleteProduct = () => {
  const dispatch = useDispatch();
  const [deleteProductFromDB, { isLoading: isDeleting }] =
    useDeleteProductMutation(); //Delete Mutation

  const deleteProductHandler = async (id: number) => {
    const result = await deleteProductFromDB(id);
    if (result) {
      if ('error' in result) {
        Alert.alert('Internal server error');
      } else {
        dispatch(deleteProduct(id));
      }
    }
  };

  return {
    deleteProductHandler,
    isDeleting,
  };
};

export default useDeleteProduct;
