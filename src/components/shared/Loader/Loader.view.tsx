import React from 'react'
import { ActivityIndicator , View } from 'react-native'
import styles from './Loader.styles'
import { colors } from '../../../theme/Colors'

function Loader() {
    return (
        <View style={styles.loaderContainer} testID='loader'>
            <ActivityIndicator size={30} color={colors.gray} />
        </View> 
    )
}

export default Loader
