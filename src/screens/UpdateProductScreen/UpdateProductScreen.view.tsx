import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Product from '../../types/Product';
import { Button, TextInput } from '../../components';
import styles from './UpdateProductScreen.styles';
import { colors } from '../../theme/Colors';
import UpdateInput from './blocks/UpdateInput/UpdateInput.view';

interface Props {
  product: Product;
  handleSubmitButton: (updatedProduct: Product) => void;
}

function UpdateProductView({ product, handleSubmitButton }: Props) {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  return (
    <ScrollView style={styles.mainContainer}>
      <UpdateInput
        title="Title:"
        value={updatedProduct.title}
        onChangeText={text =>
          setUpdatedProduct({ ...updatedProduct, title: text })
        }
      />
      <UpdateInput
        title="Price:"
        value={String(updatedProduct.price)}
        onChangeText={text =>
          setUpdatedProduct({ ...updatedProduct, price: text })
        }
        keyboardType="numeric"
      />
      <UpdateInput
        title="Category:"
        value={String(updatedProduct.category)}
        onChangeText={text =>
          setUpdatedProduct({ ...updatedProduct, category: text })
        }
      />

      <UpdateInput
        title="Description:"
        value={String(updatedProduct.description)}
        onChangeText={text =>
          setUpdatedProduct({ ...updatedProduct, description: text })
        }
      />
      <UpdateInput
        title="Image url:"
        value={String(updatedProduct.image)}
        onChangeText={text =>
          setUpdatedProduct({ ...updatedProduct, image: text })
        }
      />

      <Button
        style={styles.button}
        title="Update Product"
        onPress={() => handleSubmitButton(updatedProduct)}
      />
    </ScrollView>
  );
}

export default UpdateProductView;
