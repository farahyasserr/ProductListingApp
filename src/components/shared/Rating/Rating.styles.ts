import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  reviewsText: {
    marginStart: 8,
    color: colors.gray,
    textDecorationLine: 'underline',
  },
});

export default styles;
