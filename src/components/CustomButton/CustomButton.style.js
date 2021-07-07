import {StyleSheet} from 'react-native';
import {sizes, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    borderWidth: sizes.borderWidth.Large,
    borderRadius: sizes.borderRadius.Medium,
    alignItems: 'center',
    padding: sizes.padding.Small,
    width: '100%',
    marginBottom: sizes.margin.Medium,
  },
  containerPrimary: {
    backgroundColor: 'transparent',
    borderColor: colors.borderColor.Primary,
  },
  containerSecondary: {
    borderColor: colors.borderColor.Primary,
    backgroundColor: colors.backgroundColor.Secondary,
  },
  containerThird: {
    backgroundColor: colors.backgroundColor.Primary,
    borderColor: colors.borderColor.Secondary,
  },
  disabled: {
    borderColor: colors.borderColor.Disabled,
    color: colors.textColor.Disabled,
  },
  text: {
    fontSize: sizes.fontSize.Standart,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textPrimary: {
    color: colors.textColor.Primary,
  },
  textSecondary: {
    color: colors.textColor.Secondary,
  },
  textThird: {
    color: colors.textColor.Primary,
  },
});

export default styles;
