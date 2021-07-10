import {StyleSheet} from 'react-native';
import {sizes, colors} from '../../styles';

const styles = StyleSheet.create({
  informationText: {
    fontSize: sizes.fontSize.Standart,
  },
  informationPiece: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: sizes.padding.Small,
  },
});

export default styles;
