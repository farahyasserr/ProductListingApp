import React from 'react';
import { TouchableOpacity, Text , ViewStyle } from 'react-native';
import styles from './Button.styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress , style}) => {
  return (
    <TouchableOpacity style={[ styles.button , style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};



export default Button;