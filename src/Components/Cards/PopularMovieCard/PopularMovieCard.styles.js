import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../../Assets/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width,
    overflow: 'hidden',
    borderWidth: 10,
    borderColor: Theme.main,
    borderRadius: 25,
  },
  imageBackground: {
    flex: 1,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
  },
  title_view: {
    flexDirection: 'row',
    backgroundColor: '#000000c0',
    padding: 7,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    backgroundColor: '#000000c0',
    alignSelf: 'flex-start',
  },
  rating_container: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
  icon: {
    color: '#FDD835',
  },
  rating: {
    color: 'white',
  },
});
