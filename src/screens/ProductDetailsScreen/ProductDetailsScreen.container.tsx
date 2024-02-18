import React, { useEffect, useMemo } from 'react';
import ProductDetailsView from './ProductDetailsScreen.view';
import { HomeStackPropsType } from '../../navigation/Home/HomeStack';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../theme/Colors';
import { Pencil } from 'lucide-react-native';
import { selectProducts } from '../../store/selectors/ProductsSelector';
import { useSelector } from 'react-redux';

interface Props extends HomeStackPropsType<'ProductDetails'> {}

function ProductDetailsScreen({ navigation, route }: Props) {
  const productItem = route.params?.productItem;

  const updateItemHandler = () => {
    navigation.navigate('UpdateProduct', { productItem: productItem });
  };
  const products = useSelector(selectProducts);

  /* The `useMemo` hook is being used to memoize the result of finding a specific product from the `products`
array based on the `productItem.id` whenever the products change */
  const productDetails = useMemo(() => {
    return products.find(p => p.id === productItem.id);
  }, [products]);

  useEffect(() => {
    // Customize header options
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginEnd: 12 }} onPress={updateItemHandler}>
          <Pencil size={20} color={colors.black} />
        </TouchableOpacity>
      ),
    });
  }, [productItem]);

  return <ProductDetailsView productItem={productDetails} />;
}

export default ProductDetailsScreen;
