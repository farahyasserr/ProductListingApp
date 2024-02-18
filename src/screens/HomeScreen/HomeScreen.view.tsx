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
  deleteLoader: Boolean;
}

function HomeScreenView({
  isLoading,
  products,
  addToCartHandler,
  deleteProductHandler,
  pressItemhandler,
  deleteLoader,
}: Props) {
  return (
    <View style={styles.mainContainer}>
      {isLoading || !products ? (
        <Loader />
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductItem
                item={item}
                deleteProductHandler={deleteProductHandler}
                addToCartHandler={addToCartHandler}
                pressItemhandler={pressItemhandler}
                deleteLoader={deleteLoader}
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
