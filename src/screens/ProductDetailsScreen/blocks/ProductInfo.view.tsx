import { Text, View } from 'react-native';
import React from 'react';
import { Divider, Rating } from '../../../components';
import Product from '../../../types/Product';
import styles from './ProductInfo.styles';
import { currency } from '../../../data/Currency';
interface Props {
  item?: Product;
}

function ProductInfo(props: Props) {
  const { item } = props;
  console.log('rate', item);
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{item?.title}</Text>

      <View style={styles.horizontalSubContainer}>
        <Rating rating={item?.rating!.rate} count={item?.rating.count} />
        <Text style={styles.price}>
          {item?.price} {currency}
        </Text>
      </View>
      <Divider />
      <Text style={styles.descTitle}>Description</Text>
      <Text style={styles.description}>{item?.description}</Text>

      <Text style={styles.descTitle}>Category</Text>
      <Text style={styles.description}>{item?.category}</Text>
    </View>
  );
}

export default ProductInfo;
