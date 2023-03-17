import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../Assets/Theme';
import theme from '../../Assets/Theme';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.main,
  },
  avatar: {
    top: 30,
    height: height / 4,
    width: width / 2,
    resizeMode: 'cover',
    borderRadius: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  body_container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 20,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    borderRadius: 15,
    backgroundColor: Theme.cardColor,
    justifyContent: 'space-evenly',
  },
  text_infos: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    marginRight: 15,
  },
  text_responses: {
    fontFamily: 'OpenSans-Regular',
  },
});
