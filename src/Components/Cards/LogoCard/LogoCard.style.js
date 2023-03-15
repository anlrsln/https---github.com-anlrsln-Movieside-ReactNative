import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../../Assets/Theme';

export default StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    backgroundColor: '#1F2937',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').width / 6,
    resizeMode: 'contain',
  },
  elevation: {
    shadowColor: 'black',
    elevation: 5,
  },
});
