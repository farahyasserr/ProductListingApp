import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Product from '../../types/Product';
import Loader from '../../components/shared/Loader/Loader.view';
import styles from './HomeScreen.styles';
import { EmptyList, ProductItem } from './blocks';
import { colors } from '../../theme/Colors';

interface Props {
  isLoading: Boolean;
  products?: Product[];
  deleteProductHandler: (id: number) => void;
  addToCartHandler: () => void;
  pressItemhandler: (id: number) => void;
}

function HomeScreenView({
  isLoading,
  products,
  addToCartHandler,
  deleteProductHandler,
  pressItemhandler,
}: Props) {
  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <View
          style={{
            paddingHorizontal: 14,
            backgroundColor: colors.white,
            height: '100%',
          }}>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductItem
                item={item}
                deleteProductHandler={deleteProductHandler}
                addToCartHandler={addToCartHandler}
                pressItemhandler={pressItemhandler}
              />
            )}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <Text style={styles.listHeaderText}>Products</Text>
            )}
            ListEmptyComponent={() => <EmptyList />}
          />
        </View>
      )}
    </View>
  );
}

export default HomeScreenView;
