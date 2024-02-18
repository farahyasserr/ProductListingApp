import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/Colors';

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  editIcon: {
    marginEnd: 12,
  },
});

export default styles;
