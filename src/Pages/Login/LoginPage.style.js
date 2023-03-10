import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../Assets/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.main,
  },
  imagebackground: {
    flex: 1,
    resizeMode: 'contain',
  },
  header_container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  body_container: {
    flex: 1.5,
  },
});
