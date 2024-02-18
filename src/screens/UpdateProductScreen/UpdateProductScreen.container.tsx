import React from 'react';
import { HomeStackPropsType } from '../../navigation/Home/HomeStack';
import UpdateProductView from './UpdateProductScreen.view';
import { updateProduct } from '../../store/reducers/ProductsSliceReducer';
import Product from '../../types/Product';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

interface Props {}

interface Props extends HomeStackPropsType<'UpdateProduct'> {}

function UpdateProductScreen({ route, navigation }: Props) {
  const dispatch = useDispatch();

  const productItem = route.params?.productItem;

  const isInputValid = (product: Product) => {
    if (
      !product.title ||
      !product.price ||
      !product.category ||
      !product.description ||
      !product.image
    ) {
      return false;
    }
    return true;
  };

  /**
   * The `handleSubmitButton` function in TypeScript React checks if the input is valid for a product
   * update, displays an alert if inputs are missing, and updates the product if valid before navigating
   * back.
   * @param {Product} updatedProduct - The `updatedProduct` parameter in the `handleSubmitButton`
   * function is of type `Product`. It is the product object that has been updated with new information
   * and needs to be validated before updating and navigating back.
   */
  const handleSubmitButton = (updatedProduct: Product) => {
    if (!isInputValid(updatedProduct))
      Alert.alert('Some inputs are missing! Please fill out the empty fields');
    else {
      dispatch(updateProduct(updatedProduct));
      navigation.goBack();
    }
  };

  return (
    <UpdateProductView
      product={productItem}
      handleSubmitButton={handleSubmitButton}
    />
  );
}

export default UpdateProductScreen;
