import {StyleSheet} from 'react-native';
import {sizes} from './../../../../styles';
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  picture: {
    height: 240,
    width: '100%',
  },
  informations: {
    backgroundColor: 'white',
    borderTopStartRadius: sizes.borderRadius.Large,
    borderTopEndRadius: sizes.borderRadius.Large,
    paddingTop: 20,
    transform: [{translateY: -20}],
  },
  mealContainer: {
    marginLeft: sizes.margin.Small,
  },
  mealText: {
    fontSize: sizes.fontSize.Title,
    fontWeight: 'bold',
  },
});

export default styles;
