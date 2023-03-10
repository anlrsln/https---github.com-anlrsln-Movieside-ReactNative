import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../Assets/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.main,
  },
  header: {
    margin: 10,
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
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
  },
  popular_movies_see_more: {
    fontSize: 12,
    color: 'white',
  },
  categories_container: {
    margin: 10,
  },
  recent_movies_container: {
    margin: 10,
  },
});
