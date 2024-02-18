import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/Colors';

const styles = StyleSheet.create({
  infoContainer: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    height: '100%',
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    maxWidth: 230,
  },
  price: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  descTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  brand: {
    fontWeight: 'bold',
    color: colors.gray,
  },
  description: {
    marginVertical: 10,
  },
  horizontalSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
