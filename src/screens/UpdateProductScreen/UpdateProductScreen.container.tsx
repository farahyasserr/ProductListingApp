import React from 'react';
import { HomeStackPropsType } from '../../navigation/Home/HomeStack';
import UpdateProductView from './UpdateProductScreen.view';
import useUpdateProduct from './hooks/useUpdateProduct';

interface Props extends HomeStackPropsType<'UpdateProduct'> {}

function UpdateProductScreen({ route }: Props) {
  const productItem = route.params?.productItem;
  const { handleSubmitButton, isLoading } = useUpdateProduct();

  return (
    <UpdateProductView
      product={productItem}
      handleSubmitButton={handleSubmitButton}
    />
  );
}

export default UpdateProductScreen;
