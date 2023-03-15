import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../Assets/Theme';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.main,
  },
  header: {
    margin: 10,
    height: height / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: height / 6,
    width: width / 5,
    resizeMode: 'contain',
  },
  popular_movies_container: {},
  popular_movies_title_container: {
    margin: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  popular_movies_title: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
  },
  popular_movies_see_more: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'OpenSans-Medium',
  },
  categories_container: {
    margin: 10,
  },
  recent_movies_container: {
    flex: 1,
    margin: 10,
  },
  logo_container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
