import {StyleSheet} from 'react-native';
import Theme from '../../Assets/Theme';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 15,
    padding: 7,
    backgroundColor: Theme.tabBarColor,
    alignItems: 'center',
  },
  button_text: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
  },
});
