import React, { useEffect } from 'react';
import ProductDetailsView from './ProductDetailsScreen.view';
import { HomeStackPropsType } from '../../navigation/Home/HomeStack';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../theme/Colors';
import { Pencil } from 'lucide-react-native';
import { selectedProduct } from '../../store/selectors/ProductsSelector';
import { useSelector } from 'react-redux';
import useGetProductDetails from './hooks/useGetProductDetails';
import styles from './ProductDetailsScreen.styles';

interface Props extends HomeStackPropsType<'ProductDetails'> {}

function ProductDetailsScreen({ navigation, route }: Props) {
  const productId = route.params?.productId;
  const { isLoading } = useGetProductDetails({ productId });

  const selectedProductDetails = useSelector(selectedProduct);

  const updateItemHandler = () => {
    navigation.navigate('UpdateProduct', {
      productItem: selectedProductDetails!,
    });
  };

  useEffect(() => {
    // Customize header options
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.editIcon} onPress={updateItemHandler}>
          <Pencil size={20} color={colors.black} />
        </TouchableOpacity>
      ),
    });
  }, [selectedProductDetails]);

  return (
    <ProductDetailsView
      productItem={selectedProductDetails}
      isLoading={isLoading}
    />
  );
}

export default ProductDetailsScreen;
