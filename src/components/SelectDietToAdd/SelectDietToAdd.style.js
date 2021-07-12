import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {sizes} from '../../styles';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  textContainer: {
    width: windowWidth,
    height: 60,
    alignItems: 'center',
  },
  innerContainer: {
    width: windowWidth,
    height: 60,
    justifyContent: 'center',
  },
  text: {
    fontSize: sizes.fontSize.Title,
    marginLeft: sizes.margin.Small,
  },
});

export default styles;
