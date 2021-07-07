import {StyleSheet} from 'react-native';
import {sizes} from '../../../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    width: '90%',
  },
  randomMeal: {
    fontWeight: 'bold',
    fontSize: sizes.fontSize.Title,
  },
  horizontalMenu: {
    marginTop: sizes.margin.Medium,
  },
  todaysKitchen: {
    fontWeight: 'bold',
    fontSize: sizes.fontSize.Standart,
  },
  todaysKitchenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagIcon: {
    marginLeft: sizes.margin.Small,
  },
});

export default styles;
