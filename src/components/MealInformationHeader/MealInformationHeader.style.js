import {StyleSheet} from 'react-native';
import {sizes, colors} from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: sizes.padding.Medium,
    paddingRight: sizes.padding.Medium,
  },
  title: {
    fontWeight: 'bold',
    fontSize: sizes.fontSize.Title,
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
});

export default styles;
