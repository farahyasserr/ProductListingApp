import React from 'react';
import { Text, TextInputProps } from 'react-native';
import { TextInput } from '../../../../components';
import styles from './UpdateInput.styles';

type UpdateInputProps = {
  title: string;
} & TextInputProps;
const UpdateInput = ({ title, ...props }: UpdateInputProps) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[styles.input, props?.style]}
        multiline={true}
        {...props}
      />
    </>
  );
};

export default UpdateInput;
