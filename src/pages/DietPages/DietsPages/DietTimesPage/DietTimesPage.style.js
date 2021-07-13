import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor.Secondary,
  },
  header: {
    color: colors.textColor.Disabled,
    fontWeight: 'bold',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borderColor.Disabled,
    fontSize: sizes.fontSize.Standart,
    paddingLeft: sizes.padding.Small,
  },
});

export default styles;
