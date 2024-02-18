import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import HomeScreenView from './HomeScreen.view';
import { useGetProductsQuery } from '../../services/product/productApi';
import {
  deleteProduct,
  setProducts,
} from '../../store/reducers/ProductsSliceReducer';
import { HomeStackNavType } from '../../navigation/Home/HomeStack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/selectors/ProductsSelector';
import Product from '../../types/Product';

function HomeScreen() {
  const dispatch = useDispatch();
  /* `const { data , isLoading } = useGetProductsQuery();` is using the `useGetProductsQuery` hook
    from the `productApi` service to fetch data from the server. */
  const { data, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data)); // Dispatch setProducts action with the fetched data
    }
  }, [data, dispatch]);

  const navigation = useNavigation<HomeStackNavType<'Home'>>();

  const deleteProductHandler = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const addToCartHandler = () => {
    Alert.alert('Coming soon!');
  };

  const pressItemhandler = (id: number) => {
    navigation.navigate('ProductDetails', { productId: id });
  };

  const products = useSelector(selectProducts); // Fetch products from the Redux store

  return (
    <HomeScreenView
      products={products}
      isLoading={isLoading}
      addToCartHandler={addToCartHandler}
      deleteProductHandler={deleteProductHandler}
      pressItemhandler={pressItemhandler}
    />
  );
}

export default HomeScreen;
