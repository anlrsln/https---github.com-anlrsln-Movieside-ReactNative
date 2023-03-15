import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MovieCard.style';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieCard = ({
  image,
  title,
  title_backup,
  release_date,
  rating,
  genre_ids,
  handleDetailPageNavigate,
}) => {
  const _ = require('lodash');
  const {genres} = useSelector(s => s.genres);
  const imageUrl = Config.MOVIE_IMAGE_URL + image;
  const movieGenres = genres.filter(g => genre_ids.includes(g.id));

  return (
    <TouchableWithoutFeedback onPress={handleDetailPageNavigate}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{title ? title : title_backup}</Text>
          <View style={styles.genres_container}>
            {movieGenres.map((item, index) => {
              if (index >= 3) return;
              return (
                <React.Fragment key={_.uniqueId()}>
                  <Text style={styles.genres}>{item.name}</Text>
                </React.Fragment>
              );
            })}
          </View>
          <View style={styles.footer}>
            <Text style={styles.date}>Date : {release_date}</Text>
            <View style={styles.rating_container}>
              <Icon name="star" size={20} style={styles.icon} />
              <Text style={styles.rating}>{rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
