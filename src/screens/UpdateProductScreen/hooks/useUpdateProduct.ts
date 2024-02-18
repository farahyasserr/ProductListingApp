import { useState } from 'react';
import Product from '../../../types/Product';
import { useUpdateProductMutation } from '../../../services/product/productApi';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../store/reducers/ProductsSliceReducer';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavType } from '../../../navigation/Home/HomeStack';
import { isInputValid } from '../utils/validators';
import { Alert } from 'react-native';

const useUpdateProduct = () => {
  const navigation = useNavigation<HomeStackNavType<'UpdateProduct'>>();
  const dispatch = useDispatch();
  const [updateToBackend, { isLoading }] = useUpdateProductMutation();
  /**
   * The `handleSubmitButton` function in TypeScript React checks if the input is valid for a product
   * update, displays an alert if inputs are missing, and updates the product if valid before navigating
   * back.
   * @param {Product} updatedProduct - The `updatedProduct` parameter in the `handleSubmitButton`
   * function is of type `Product`. It is the product object that has been updated with new information
   * and needs to be validated before updating and navigating back.
   */
  const handleSubmitButton = async (updatedProduct: Product) => {
    if (!isInputValid(updatedProduct))
      Alert.alert('Some inputs are missing! Please fill out the empty fields');
    else {
      const result = await updateToBackend({
        productId: updatedProduct.id,
        productData: updatedProduct,
      });
      if ('error' in result) {
        Alert.alert('Internal server error! Please try again later.');
      } else {
        dispatch(updateProduct(updatedProduct)); //update in redux
        navigation.goBack();
      }
    }
  };

  return {
    isLoading,
    handleSubmitButton,
  };
};

export default useUpdateProduct;
