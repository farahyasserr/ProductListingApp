import { View, Text } from 'react-native';
import React from 'react';
import styles from './EmptyList.styles';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your list is empty!</Text>
    </View>
  );
};

export default EmptyList;
