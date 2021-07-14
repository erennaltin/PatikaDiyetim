import {StyleSheet} from 'react-native';
import {colors, sizes} from './../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    padding: sizes.padding.Small,
    backgroundColor: colors.backgroundColor.Primary,
    margin: sizes.margin.Small,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: sizes.borderRadius.Medium,
  },
  title: {
    fontSize: sizes.fontSize.Standart,
    color: colors.textColor.Primary,
    fontWeight: 'bold',
  },
  informationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calText: {
    color: colors.textColor.Primary,
    marginRight: sizes.margin.Small,
  },
});

export default styles;
