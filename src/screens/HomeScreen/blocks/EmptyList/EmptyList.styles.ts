import { StyleSheet } from 'react-native';
import { colors } from '../../../../theme/Colors';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: colors.primary,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: '100%',
  },
});

export default styles;
