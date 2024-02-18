import { View , Text } from 'react-native'
import React from 'react'
import styles from './EmptyList.styles'

const EmptyList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your wishlist is empty!</Text>
            <Text style={styles.description}>Explore more and shortlist some items</Text>
        </View>
    )
}

export default EmptyList
