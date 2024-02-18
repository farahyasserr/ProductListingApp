import React, { useState } from 'react'
import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native'
import styles from './TextInput.styles'
import { colors } from '../../../theme/Colors';

interface Props extends TextInputProps{
    style?: StyleProp<TextStyle>; // Accepts any additional style prop
  }

function MyTextInput(props: Props) {
    const { style } = props
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
        <TextInput
      style={[
        styles.input,
        style,
        { borderBottomColor: isFocused ? colors.primary : colors.black }, // Change border color when focused
      ]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
    )
}

export default MyTextInput
