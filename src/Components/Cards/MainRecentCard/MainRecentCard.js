import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MainRecentCard.style';
import Config from 'react-native-config';

const MainRecentCard = ({image, handleDetailPageNavigate}) => {
  const imageUrl = Config.MOVIE_IMAGE_URL + image;

  return (
    <TouchableWithoutFeedback onPress={handleDetailPageNavigate}>
      <View style={[styles.container, styles.elevation]}>
        <Image style={styles.image} source={{uri: imageUrl}} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainRecentCard;
