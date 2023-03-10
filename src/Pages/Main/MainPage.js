import React, {useEffect} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import styles from './MainPage.style';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Components/Loading';
import RecentMovieCard from '../../Components/Cards/RecentMovieCard';
import apiUrls from '../../Constants/ApiUrls';
import PopularMovieCard from '../../Components/Cards/PopularMovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {setGenres} from '../../Redux/Features/Genres/GenreSlice';

let page = 1;

const MainPage = ({navigation}) => {
  const dispatch = useDispatch();
  const {genres} = useSelector(s => s.genres);

  const {
    loading: recentLoading,
    data: recentMoviesData,
    error: recentError,
    getData: getRecentMoviesData,
  } = useFetch();

  const {
    loading: popularLoading,
    data: popularMoviesData,
    error: popularError,
    getData: getPopularMoviesData,
  } = useFetch();

  const {
    loading: genreLoading,
    data: genreData,
    error: genreError,
    getData: getGenreData,
  } = useFetch();

  useEffect(() => {
    getRecentMoviesData(`${apiUrls.recentMoviesUrl}&page=${page}`);
    getPopularMoviesData(`${apiUrls.popularMoviesUrl}&page=${page}`);
    getGenreData(`${apiUrls.genresUrl}`);
  }, []);

  if (recentLoading || popularLoading || genreLoading) {
    return <Loading />;
  }

  if (recentError || popularError || genreError) {
    return <Error />;
  }

  if (genreData) {
    dispatch(setGenres(genreData.genres));
  }

  function renderRecentMovies({item}) {
    return (
      <RecentMovieCard
        image={item.poster_path}
        title={item.title}
        release_date={item.release_date}
        rating={item.vote_average}
        genre_ids={item.genre_ids}
      />
    );
  }

  function renderPopularMovies({item}) {
    return (
      <PopularMovieCard
        image={item.backdrop_path}
        title={item.original_title}
        rating={item.vote_average}
      />
    );
  }

  function renderGenres({item}) {
    return (
      <Text style={{marginRight: 10, fontSize: 15, color: 'white'}}>
        {item.name}
      </Text>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_title}>MOVIESIDE</Text>
        </View>
        <View style={styles.popular_movies_container}>
          <View style={styles.popular_movies_title_container}>
            <Text style={styles.popular_movies_title}>Popular Movies</Text>
            <Text style={styles.popular_movies_see_more}>See More..</Text>
          </View>
          <FlatList
            data={popularMoviesData.results}
            renderItem={renderPopularMovies}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
        <View style={styles.categories_container}>
          <FlatList
            data={genreData.genres}
            renderItem={renderGenres}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.recent_movies_container}>
          <View style={styles.popular_movies_title_container}>
            <Text style={styles.popular_movies_title}>Recent Movies</Text>
            <Text
              style={styles.popular_movies_see_more}
              onPress={() => navigation.navigate('RecentMovies')}>
              See More..
            </Text>
          </View>
          <FlatList
            data={recentMoviesData.results}
            renderItem={renderRecentMovies}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPage;
