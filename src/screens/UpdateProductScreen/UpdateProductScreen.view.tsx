import React , { useState } from 'react'
import { View , Text } from 'react-native'
import Product from '../../types/Product'
import { Button, TextInput } from '../../components'
import styles from './UpdateProductScreen.styles'
import { colors } from '../../theme/Colors'

interface Props {
    product: Product
    handleSubmitButton: ( updatedProduct : Product )=>void
}

function UpdateProductView({product, handleSubmitButton}: Props) {
    
    const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Title:</Text>
            <TextInput
                value={updatedProduct.title}
                multiline={true}
                style={{padding: 10, borderBottomWidth: 1, borderBottomColor: colors.black, borderRadius: 10}}
                onChangeText={(text) => setUpdatedProduct({ ...updatedProduct, title: text })}
            />
            <Text style={styles.title}>Price:</Text>
            <TextInput
                value={String(updatedProduct.price)}
                onChangeText={(text) => setUpdatedProduct({ ...updatedProduct, price: text })}
                style={{padding: 10, borderBottomWidth: 1, borderBottomColor: colors.black, borderRadius: 10}}
                keyboardType="numeric"
            />
             <Text style={styles.title}>Category:</Text>
            <TextInput
                value={String(updatedProduct.category)}
                onChangeText={(text) => setUpdatedProduct({ ...updatedProduct, category: text })}
                style={{padding: 10, borderBottomWidth: 1, borderBottomColor: colors.black, borderRadius: 10}}
                multiline={true}
            />
            <Text style={styles.title}>Description:</Text>
            <TextInput
                value={String(updatedProduct.description)}
                onChangeText={(text) => setUpdatedProduct({ ...updatedProduct, description: text })}
                style={{padding: 10, borderBottomWidth: 1, borderBottomColor: colors.black, borderRadius: 10}}
                multiline={true}
            />
            <Text style={styles.title}>Image url:</Text>
            <TextInput
                value={String(updatedProduct.image)}
                onChangeText={(text) => setUpdatedProduct({ ...updatedProduct, image: text })}
                style={{padding: 10, borderBottomWidth: 1, borderBottomColor: colors.black, borderRadius: 10}}
                multiline={true}
            />
           
            <Button style={styles.button} title="Update Product" onPress={()=>handleSubmitButton(updatedProduct)} />

        </View>
    )
}

export default UpdateProductView;
