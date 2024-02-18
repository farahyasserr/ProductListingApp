import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ShoppingCart } from 'lucide-react-native';
import { colors } from '../../../../theme/Colors';
import styles from './ProductItem.styles';
import Product from '../../../../types/Product';
import { currency } from '../../../../data/Currency';
import { Trash2 } from 'lucide-react-native';

interface Props {
  item: Product;
  addToCartHandler: () => void;
  deleteProductHandler: (id: number) => void;
  pressItemhandler: (product: Product) => void;
}

function ProductItem(props: Props) {
  const { item, addToCartHandler, deleteProductHandler, pressItemhandler } =
    props;

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => pressItemhandler(item)}>
      <View style={styles.imageAndTextContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode={'contain'}
        />
        <View>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.price}>
            {item.price} {currency}
          </Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <ShoppingCart
          onPress={addToCartHandler}
          size={20}
          color={colors.black}
          style={styles.cartIcon}
        />
        <TouchableOpacity onPress={() => deleteProductHandler(item.id)}>
          <Trash2 size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default ProductItem;
