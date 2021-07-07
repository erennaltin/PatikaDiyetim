import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: sizes.margin.Medium,
  },
  textInput: {
    height: 40,
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomWidth: sizes.borderWidth.Standart,
    fontSize: sizes.fontSize.Standart,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: sizes.fontSize.small,
    color: colors.textColor.ErrorColor,
  },
  errorInput: {
    borderColor: colors.textColor.ErrorColor,
  },
  textInputPrimary: {
    borderColor: colors.borderColor.Primary,
    color: colors.textColor.Primary,
  },
  textInputSecondary: {
    borderColor: colors.borderColor.Secondary,
    color: colors.textColor.Secondary,
  },
});

export default styles;
