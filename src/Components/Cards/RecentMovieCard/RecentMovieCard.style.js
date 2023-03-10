import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    margin: 10,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 3,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  body_container: {
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  release_date_container: {},
  release_date: {},
  rating_container: {},
  rating: {},
});
