import React, { useEffect } from 'react'
import { Image, ScrollView } from 'react-native'
import styles from './ProductDetailsScreen.styles'
import Product from '../../types/Product'
import { Loader } from '../../components'
import ProductInfo from './blocks/ProductInfo.view'

interface Props{
    productItem?: Product
}

function ProductDetailsView({ productItem }:Props) {
    return (
        <ScrollView style={styles.scrollview}>
            <Image source={{ uri: productItem?.image }} style={styles.image}  />
            <ProductInfo item={productItem} />
        </ScrollView>
)}

export default ProductDetailsView
