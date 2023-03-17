import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../Assets/Theme';
const {width, height} = Dimensions.get('window');

const h1 = {
  color: 'white',
  fontFamily: 'OpenSans-Bold',
  fontSize: 23,
};

const textCommons = {
  color: 'white',
  fontFamily: 'OpenSans-Regular',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.main,
  },
  background_image: {
    height: height / 4,
    resizeMode: 'cover',
  },
  poster_image: {
    height: height / 5,
    width: width / 4,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 1,
    top: 120,
    left: 15,
    borderRadius: 20,
  },
  header_container: {
    flexDirection: 'row',
  },
  movie_info_container: {
    flex: 2,
  },
  title_container: {
    flex: 2,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    ...h1,
    flex: 4,
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
    ...textCommons,
    fontSize: 15,
  },
  genre_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  genres: {
    ...textCommons,
    fontSize: 13,
  },
  media_type: {
    top: 10,
  },
  body_container: {
    flex: 1,
    paddingTop: 30,
  },
  overview_container: {
    padding: 15,
    backgroundColor: Theme.cardColor,
    marginVertical: 30,
    marginHorizontal: 15,
    borderRadius: 15,
  },
  overview: {
    ...h1,
    marginTop: 10,
    marginBottom: 15,
  },
  description: {
    ...textCommons,
    fontSize: 18,
    lineHeight: 29,
  },

  elevation: {
    shadowColor: 'black',
    elevation: 10,
  },
});
