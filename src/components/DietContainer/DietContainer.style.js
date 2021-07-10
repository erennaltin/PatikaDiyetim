import {StyleSheet} from 'react-native';
import {sizes, colors} from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    borderRadius: sizes.borderRadius.Small,
    borderWidth: sizes.borderWidth.Large,
    overflow: 'hidden',
    marginTop: sizes.margin.Small,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: sizes.padding.Small,
  },
  Even: {
    borderColor: colors.borderColor.Secondary,
    backgroundColor: colors.backgroundColor.Primary,
  },
  Odd: {
    borderColor: colors.borderColor.Disabled,
    backgroundColor: colors.borderColor.Disabled,
  },
  text: {
    fontWeight: 'bold',
    fontSize: sizes.fontSize.Standart,
    color: colors.textColor.Primary,
  },
  informationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picture: {
    height: 100,
    width: '100%',
  },
  calories: {
    marginLeft: sizes.margin.Small,
  },
});

export default styles;
