import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor.Primary,
  },
  titleContainer: {
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    justifyContent: 'center',
  },
  title: {
    color: colors.textColor.Primary,
    fontSize: sizes.fontSize.AuthTitle,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default styles;
