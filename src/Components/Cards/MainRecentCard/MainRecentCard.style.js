import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    margin: 10,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 3,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
});
