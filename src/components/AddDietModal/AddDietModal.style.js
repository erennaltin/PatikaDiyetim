import {StyleSheet} from 'react-native';
import {sizes, colors} from '../../styles';

const styles = StyleSheet.create({
  addNewButton: {
    fontWeight: 'bold',
    fontSize: sizes.fontSize.Standart,
    padding: sizes.padding.Small,
    color: colors.textColor.Secondary,
    borderRadius: sizes.borderRadius.Small,
    borderWidth: sizes.borderWidth.Standart,
    borderColor: colors.borderColor.Secondary,
    marginBottom: sizes.margin.Small,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  pressableView: {
    width: '100%',
    height: '100%',
  },
  innerPressableView: {
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: colors.backgroundColor.Secondary,
    borderRadius: sizes.borderRadius.Medium,
    paddingTop: sizes.padding.Medium,
    paddingBottom: sizes.padding.Medium,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: sizes.fontSize.Standart,
    fontWeight: 'bold',
  },
  textInput: {
    width: '90%',
    borderColor: colors.borderColor.Secondary,
    borderWidth: sizes.borderWidth.Standart,
    borderRadius: sizes.borderRadius.Medium,
    paddingTop: sizes.padding.XSmall,
    paddingBottom: sizes.padding.XSmall,
    marginTop: sizes.margin.Small,
  },
  customButton: {
    width: '90%',
    marginTop: sizes.margin.Small,
  },
  initialButton: {
    marginTop: sizes.margin.Small,
  },
});

export default styles;
