import React from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import styles from './PopularMovieCard.styles';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PopularMovieCard = ({image, title, rating}) => {
  const imageUrl = Config.MOVIE_IMAGE_URL + image;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={{uri: imageUrl}}
        imageStyle={{borderRadius: 20, resizeMode: 'cover'}}>
        <View style={styles.title_view}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.rating_container}>
            <Icon name={'star'} size={20} style={styles.icon} />
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PopularMovieCard;
