import React from 'react';
import {Image, View, TouchableWithoutFeedback} from 'react-native';
import styles from './LogoCard.style';

const LogoCard = ({source, navigation, companyIndex}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('MoviesListPage', {
          name: 'LIST',
          companyIndex: companyIndex,
        })
      }>
      <View style={[styles.container, styles.elevation]}>
        <Image style={styles.image} source={source} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LogoCard;
