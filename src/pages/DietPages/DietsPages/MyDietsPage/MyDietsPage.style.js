import {StyleSheet} from 'react-native';
import {sizes, colors} from '../../../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: sizes.fontSize.Title,
    borderBottomWidth: sizes.borderWidth.Standart,
    borderBottomColor: colors.borderColor.Secondary,
    width: '60%',
    marginTop: sizes.margin.Small,
  },
  innerListContainer: {
    width: '100%',
  },
});

export default styles;
