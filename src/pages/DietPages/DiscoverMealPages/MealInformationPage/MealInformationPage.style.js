import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor.Secondary,
  },
  image: {
    height: 240,
  },
  link: {
    flex: 1,
    backgroundColor: colors.backgroundColor.Primary,
    padding: sizes.padding.Small,
    color: colors.textColor.Primary,
    borderRadius: sizes.borderRadius.Small,
    fontSize: sizes.fontSize.Standart,
    width: '60%',
    textAlign: 'center',
  },
  linkContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: sizes.margin.Medium,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor.Secondary,
    borderTopStartRadius: sizes.borderRadius.Large,
    borderTopEndRadius: sizes.borderRadius.Large,
    paddingTop: 20,
    transform: [{translateY: -20}],
  },
  mealContainer: {
    marginLeft: sizes.margin.Small,
    marginBottom: sizes.margin.Medium,
  },
  mealText: {
    fontSize: sizes.fontSize.Title,
    fontWeight: 'bold',
  },
});

export default styles;
