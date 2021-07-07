import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../styles/theme1';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor.Primary,
  },
  form: {
    width: '90%',
    height: '50%',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  title: {
    color: colors.textColor.Primary,
    fontSize: sizes.fontSize.AuthTitle,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
