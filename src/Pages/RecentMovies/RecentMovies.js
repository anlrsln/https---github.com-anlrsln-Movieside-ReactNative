import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './RecentMovies.style';
import useFetch from '../../Hooks/useFetch';
import {useSelector} from 'react-redux';

const RecentMovies = ({params}) => {
  const {genres} = useSelector(s => s.genres);

  return (
    <View style={styles.container}>
      <Text>RecentMovies</Text>
    </View>
  );
};

export default RecentMovies;
