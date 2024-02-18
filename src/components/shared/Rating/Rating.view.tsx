import React from 'react'
import { View , Text, TouchableOpacity } from 'react-native'
import { Rating } from 'react-native-ratings'
import styles from './Rating.styles'
interface Props {
    rating?: number
}

function RatingView(props: Props) {
    const {rating} = props

    return (
        <View style={styles.container}>
            <Rating
            type='star'
            ratingCount={5}
            imageSize={18}
            readonly
            startingValue={rating}
            />
            <TouchableOpacity><Text style={styles.reviewsText}>Reviews</Text></TouchableOpacity>
        </View>
    )
}

export default RatingView
