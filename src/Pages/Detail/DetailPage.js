import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './DetailPage.style';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const DetailPage = ({route}) => {
  const {item} = route.params;
  const background_image_url = Config.MOVIE_IMAGE_URL + item.backdrop_path;
  const poster_image_url = Config.MOVIE_IMAGE_URL + item.poster_path;
  const {genres} = useSelector(s => s.genres);
  const movieGenres = genres.filter(g => item.genre_ids.includes(g.id));
  const _ = require('lodash');

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: background_image_url}}
        style={styles.background_image}
      />
      <Image source={{uri: poster_image_url}} style={styles.poster_image} />
      <View style={styles.header_container}>
        <View style={{flex: 1}}></View>
        <View style={styles.title_container}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.rating_container}>
            <Icon name="star" size={20} style={styles.icon} />
            <Text style={styles.rating}>{item.vote_average}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body_container}>
        <View style={styles.genre_container}>
          {movieGenres.map((item, index) => {
            //if (index >= 3) return;
            return (
              <React.Fragment key={_.uniqueId()}>
                <Text style={styles.genres}>{item.name}</Text>
              </React.Fragment>
            );
          })}
        </View>
        <View style={[styles.overview_container, styles.elevation]}>
          <Text style={styles.overview}>OVERVIEW</Text>
          <Text style={styles.description}>{item.overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailPage;
