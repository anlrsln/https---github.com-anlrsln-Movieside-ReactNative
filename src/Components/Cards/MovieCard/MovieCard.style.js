import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../../Assets/Theme';

const bodyText = {
  color: 'white',
  fontFamily: 'OpenSans-Regular',
  fontSize: 12,
};

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: Theme.cardColor,
    borderRadius: 20,
  },
  image: {
    margin: 10,
    height: height / 4,
    width: width / 3,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  body_container: {
    padding: 10,
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 21,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
  },
  genres_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    ...bodyText,
  },
  genres: {
    ...bodyText,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 8,
    alignItems: 'center',
  },
  icon: {
    color: '#FDD835',
    marginRight: 4,
  },
  rating: {
    ...bodyText,
  },
});
