import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  image: {
    height: 300,
  },
  title: {
    fontSize: 28,
    color: 'firebrick',
    fontWeight: 'bold',
    marginLeft: 4,
    textAlign: 'left',
  },
  area: {
    fontSize: 20,
    color: 'firebrick',
    fontWeight: 'bold',
    paddingLeft: 4,
    textAlign: 'left',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  instruction: {
    paddingLeft: 8,
    paddingBottom: 16,
  },
  youtube: {
    flex: 1,
    backgroundColor: 'red',
    padding: 12,
    color: 'white',
    borderRadius: 8,
    fontSize: 16,
    width: '80%',
    textAlign: 'center',
  },
  youtubeContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default styles;
