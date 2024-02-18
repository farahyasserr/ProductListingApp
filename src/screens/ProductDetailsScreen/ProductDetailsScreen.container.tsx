import React, { useEffect, useState } from 'react';
import ProductDetailsView from './ProductDetailsScreen.view';
import { HomeStackPropsType } from '../../navigation/Home/HomeStack';
import { TouchableOpacity } from 'react-native'
import { updateProduct } from '../../store/reducers/ProductsSliceReducer';
import { colors } from '../../theme/Colors';
import {Pencil} from 'lucide-react-native'
import { useFocusEffect } from '@react-navigation/native';
import { selectProducts } from '../../store/selectors/ProductsSelector';
import { useSelector } from 'react-redux';
import Product from '../../types/Product';

interface Props extends HomeStackPropsType<'ProductDetails'>{}

function ProductDetailsScreen({navigation, route}: Props) {

  const productItem = route.params?.productItem;

  const updateItemHandler = () => {
    console.log("-----------", productItem)
    navigation.navigate('UpdateProduct', { productItem: productItem })
  }

  useEffect(() => {
    // Customize header options
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginEnd: 12}}
          onPress={updateItemHandler}>
          <Pencil
            size={20}
            color={colors.black}
          />
        </TouchableOpacity>
      ),
    });
  }, [productItem,
  ]);

  return <ProductDetailsView productItem={productItem} />;
}

export default ProductDetailsScreen;
