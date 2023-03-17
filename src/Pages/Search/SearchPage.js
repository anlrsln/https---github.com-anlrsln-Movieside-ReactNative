import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import SearchInput from '../../Components/Input/SearchInput';
import styles from './SearchPage.style';
import Config from 'react-native-config';
import useFetchMovies from '../../Hooks/useFetchMovies';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import MovieCard from '../../Components/Cards/MovieCard';

const url =
  Config.BASE_MOVIE_API_URL +
  Config.SEARCH_ENDPOINT +
  Config.MOVIE_API_KEY +
  '&query=';

const SearchPage = ({navigation}) => {
  const [text, setText] = useState('');
  const [page, setPage] = useState(1);
  const {loading, error, data, getMovies} = useFetchMovies();

  function onClickToGetMovies() {
    getMovies(url + text, page);
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function renderMovies({item}) {
    return (
      <MovieCard
        image={item.poster_path}
        title={item.title}
        title_backup={item.name}
        release_date={item.release_date}
        rating={item.vote_average}
        genre_ids={item.genre_ids}
        handleDetailPageNavigate={() => handleDetailPageNavigate(item)}
      />
    );
  }

  function handleDetailPageNavigate(item) {
    navigation.navigate('DetailPage', {item: item});
  }

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder={'Search Movie...'}
        setText={setText}
        onClick={onClickToGetMovies}
        value={text}
      />
      <View style={styles.body_container}>
        <FlatList
          data={data}
          renderItem={renderMovies}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchPage;
