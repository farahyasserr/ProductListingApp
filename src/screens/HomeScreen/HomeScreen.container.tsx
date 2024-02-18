import React from 'react';
import { Alert } from 'react-native';
import HomeScreenView from './HomeScreen.view';
import { HomeStackPropsType } from '../../navigation/Home/HomeStack';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/selectors/ProductsSelector';
import useGetProducts from './hooks/useGetProducts';
import useDeleteProduct from './hooks/useDeleteProduct';

interface Props extends HomeStackPropsType<'Home'> {}

function HomeScreen({ navigation }: Props) {
  const { isLoading: isLoadingProductsList } = useGetProducts();

  const products = useSelector(selectProducts); // Fetch products from the Redux store

  const { deleteProductHandler, isDeleting } = useDeleteProduct();

  const addToCartHandler = () => {
    Alert.alert('Coming soon!');
  };

  const pressItemhandler = (id: number) => {
    navigation.navigate('ProductDetails', { productId: id });
  };

  return (
    <HomeScreenView
      products={products}
      isLoading={isLoadingProductsList}
      addToCartHandler={addToCartHandler}
      deleteProductHandler={deleteProductHandler}
      pressItemhandler={pressItemhandler}
      deleteLoader={isDeleting}
    />
  );
}

export default HomeScreen;
