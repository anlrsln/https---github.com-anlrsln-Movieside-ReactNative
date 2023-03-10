import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './RecentMovieCard.style';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';

const RecentMovieCard = ({image, title, release_date, rating, genre_ids}) => {
  const {genres} = useSelector(s => s.genres);
  const imageUrl = Config.MOVIE_IMAGE_URL + image;
  const movieGenres = genres.filter(g => {
    genre_ids.forEach(i => {
      if (g.id === i) return g;
    });
  });
  //console.log('Movie genres: ', movieGenres);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.release_date_container}>
          <Text style={styles.release_date}>Release Date : {release_date}</Text>
        </View>
        <View style={styles.rating_container}>
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default RecentMovieCard;
