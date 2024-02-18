import {StyleSheet} from 'react-native';
import { colors } from '../../../theme/Colors';

const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      marginHorizontal: 40
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default styles