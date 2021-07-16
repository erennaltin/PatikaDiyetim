import {StyleSheet} from 'react-native';
import {sizes, colors} from '../../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor.Secondary,
    flex: 1,
  },
  userNameContainer: {
    padding: sizes.padding.Small,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: sizes.fontSize.AuthTitle,
  },
  sliderTitle: {
    fontWeight: 'bold',
    fontSize: sizes.fontSize.Title,
  },
  sliderContainer: {
    paddingHorizontal: sizes.padding.XSmall,
    marginBottom: sizes.margin.Medium,
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageContainer: {
    width: 128,
    height: 128,
    borderRadius: sizes.borderRadius.Full,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderColor.Secondary,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});

export default styles;
