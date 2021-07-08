import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
  },
  title: {
    fontSize: sizes.fontSize.Title,
    color: colors.textColor.Secondary,
    fontWeight: 'bold',
    marginLeft: sizes.margin.Small,
    textAlign: 'left',
  },
  cal: {
    fontSize: sizes.fontSize.Standart,
    color: colors.textColor.Secondary,
    fontWeight: 'bold',
    paddingLeft: sizes.padding.Medium,
    textAlign: 'left',
  },
  instruction: {
    paddingLeft: sizes.padding.Small,
    paddingBottom: sizes.padding.Medium,
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
  addToDiet: {
    borderRadius: sizes.borderRadius.Full,
    backgroundColor: colors.backgroundColor.Primary,
    padding: sizes.padding.Small,
    marginRight: sizes.margin.Small,
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.borderColor.Disabled,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default styles;
