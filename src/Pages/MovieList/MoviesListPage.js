import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './MoviesListPage.style';
import Loading from '../../Components/Loading';
import MovieCard from '../../Components/Cards/MovieCard';
import useFetchMovies from '../../Hooks/useFetchMovies';
import FooterIndicator from '../../Components/Indicators/FooterIndicator';
import Config from 'react-native-config';

const MoviesListPage = ({navigation, route}) => {
  const {loading, data, error, totalPages, getMovies} = useFetchMovies();
  const [page, setPage] = useState(1);
  const [footer, setFooter] = useState(true);
  const {name, companyIndex} = route.params;

  useEffect(() => {
    getMovies(handleType(name, handleCompanyIndex(companyIndex)), page);
  }, [page]);

  // Liste sonuna geldiğinde page 1 artar ve API'de bir sonraki sayfaya istek atılır,dönen veriler
  // data listesine eklenir
  function getMoreMovies() {
    if (page < totalPages) setPage(page + 1);
    else setFooter(false);
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function handleCompanyIndex(companyIndex) {
    switch (companyIndex) {
      case 0:
        return Config.DISNEY_ID;
      case 1:
        return Config.PIXAR_ID;
      case 2:
        return Config.MARVEL_ID;
      case 3:
        return Config.STAR_WARS_ID;
      default:
        return;
    }
  }

  // İstek atılacak url için tip belirtmesi
  function handleType(type, id = null) {
    switch (type) {
      case 'RECENT':
        return `${
          Config.BASE_MOVIE_API_URL +
          Config.RECENT_ENDPOINT +
          Config.MOVIE_API_KEY
        }&page=${page}`;
      case 'POPULAR':
        return `${
          Config.BASE_MOVIE_API_URL +
          Config.POPULARS_ENDPOINT +
          Config.MOVIE_API_KEY
        }&page=${page}`;
      case 'LIST': {
        return `${
          Config.BASE_MOVIE_API_URL + Config.LISTS_ENDPOINT + id
        }?page=${page}&api_key=${Config.MOVIE_API_KEY}`;
      }
      default:
        return;
    }
  }

  function renderRecentMovies({item}) {
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
      <FlatList
        data={data}
        renderItem={renderRecentMovies}
        keyExtractor={item => item.id.toString()}
        onEndReached={getMoreMovies}
        ListFooterComponent={footer ? FooterIndicator : false}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

export default MoviesListPage;
