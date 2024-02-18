import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
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
  pressItemhandler: (id: number) => void;
  deleteLoader: Boolean;
}

function ProductItem(props: Props) {
  const {
    item,
    addToCartHandler,
    deleteProductHandler,
    pressItemhandler,
    deleteLoader,
  } = props;

  const [idToDelete, setIdToDelete] = useState<number>();

  const deleteItem = (id: number) => {
    setIdToDelete(id);
    deleteProductHandler(id);
  };

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => pressItemhandler(item.id)}>
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
        {deleteLoader && idToDelete === item.id ? (
          <ActivityIndicator size={18} color={colors.gray} />
        ) : (
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Trash2 size={20} color={colors.primary} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default ProductItem;
