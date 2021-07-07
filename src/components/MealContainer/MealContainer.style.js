import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor.Primary,
    borderRadius: sizes.borderRadius.Medium,
    marginTop: sizes.margin.Small,
    overflow: 'hidden',
    alignItems: 'center',
    borderWidth: sizes.borderWidth.Large,
    borderColor: colors.borderColor.Secondary,
  },
  mainContainerLarge: {
    width: '100%',
    height: 300,
  },
  mainContainerSmall: {
    width: '45%',
    height: 150,
  },
  image: {
    width: '100%',
    height: '85%',
  },
  mealInformationContainer: {
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundColor.Primary,
  },
  mealName: {
    color: colors.textColor.Primary,
    marginLeft: sizes.margin.Small,
  },
  mealNameLarge: {
    fontSize: sizes.fontSize.Standart,
  },
  mealNameSmall: {
    fontSize: sizes.fontSize.Small,
  },
  mealCategory: {
    color: colors.textColor.Primary,
    marginRight: sizes.margin.Small,
    fontWeight: 'bold',
  },
  mealCategoryLarge: {
    fontSize: sizes.fontSize.Standart,
  },
  mealCategorySmall: {
    fontSize: sizes.fontSize.Small,
  },
});

export default styles;
