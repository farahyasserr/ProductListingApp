import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import HomeScreenView from './HomeScreen.view';
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from '../../services/product/productApi';
import {
  deleteProduct,
  setProducts,
} from '../../store/reducers/ProductsSliceReducer';
import { HomeStackNavType } from '../../navigation/Home/HomeStack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/selectors/ProductsSelector';

function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeStackNavType<'Home'>>();

  const [idToDelete, setIdToDelete] = useState<number>();

  const { data, isLoading } = useGetProductsQuery(); //Get Products Query

  const [deleteItemFromBackend, { isLoading: isDeleting, isSuccess, isError }] =
    useDeleteProductMutation(); //Delete Mutation

  const products = useSelector(selectProducts); // Fetch products from the Redux store

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data)); // Dispatch setProducts action with the fetched data
    }
  }, [data, dispatch]);

  const deleteProductHandler = (id: number) => {
    setIdToDelete(id);
    deleteItemFromBackend(id);
  };

  useEffect(() => {
    if (isSuccess && idToDelete) {
      //delete from redux
      dispatch(deleteProduct(idToDelete));
      return;
    }
    if (isError) {
      Alert.alert('Internal server error');
    }
  }, [isSuccess, isError]);

  const addToCartHandler = () => {
    Alert.alert('Coming soon!');
  };

  const pressItemhandler = (id: number) => {
    navigation.navigate('ProductDetails', { productId: id });
  };

  return (
    <HomeScreenView
      products={products}
      isLoading={isLoading}
      addToCartHandler={addToCartHandler}
      deleteProductHandler={deleteProductHandler}
      pressItemhandler={pressItemhandler}
      deleteLoader={isDeleting}
    />
  );
}

export default HomeScreen;
