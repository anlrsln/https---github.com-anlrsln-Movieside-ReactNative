import React, {useEffect} from 'react';
import {Text, View, FlatList, ScrollView, Image} from 'react-native';
import styles from './MainPage.style';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Components/Loading';
import Config from 'react-native-config';
import PopularMovieCard from '../../Components/Cards/PopularMovieCard';
import {useDispatch} from 'react-redux';
import {setGenres} from '../../Redux/Features/Genres/GenreSlice';
import MainRecentCard from '../../Components/Cards/MainRecentCard';
import LogoCard from '../../Components/Cards/LogoCard';
import useFetchMovies from '../../Hooks/useFetchMovies';

let page = 1;
const urls = {
  popular_movies_url: `${
    Config.BASE_MOVIE_API_URL + Config.POPULARS_ENDPOINT + Config.MOVIE_API_KEY
  }&page=${page}`,
  recent_movies_url: `${
    Config.BASE_MOVIE_API_URL + Config.RECENT_ENDPOINT + Config.MOVIE_API_KEY
  }&page=${page}`,
  genres_url: `${
    Config.BASE_MOVIE_API_URL + Config.GENRES_ENDPOINT + Config.MOVIE_API_KEY
  }`,
};

const MainPage = ({navigation}) => {
  const dispatch = useDispatch();
  const logoArray = [
    require('../../Assets/logos/disney_logo.png'),
    require('../../Assets/logos/pixar_logo.png'),
    require('../../Assets/logos/marvel_logo.png'),
    require('../../Assets/logos/star_wars.png'),
  ];

  const {
    loading: recentLoading,
    data: recentMoviesData,
    error: recentError,
    getMovies: getRecentMoviesData,
  } = useFetchMovies();

  const {
    loading: popularLoading,
    data: popularMoviesData,
    error: popularError,
    getMovies: getPopularMoviesData,
  } = useFetchMovies();

  const {
    loading: genreLoading,
    data: genreData,
    error: genreError,
    getData: getGenreData,
  } = useFetch();

  useEffect(() => {
    getRecentMoviesData(urls.recent_movies_url, page);
    getPopularMoviesData(urls.popular_movies_url, page);
    getGenreData(urls.genres_url);
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
      <MainRecentCard
        image={item.poster_path}
        handleDetailPageNavigate={() => handleDetailPageNavigate(item)}
      />
    );
  }

  // Popular Movies'i renderlayan fonksiyon
  function renderPopularMovies({item}) {
    return (
      <PopularMovieCard
        image={item.backdrop_path}
        title={item.original_title}
        rating={item.vote_average}
        handleDetailPageNavigate={() => handleDetailPageNavigate(item)}
      />
    );
  }

  function renderGenres({item, index}) {
    return (
      <LogoCard source={item} navigation={navigation} companyIndex={index} />
    );
  }

  // Filmleri listelemek için MovieListPage sayfasına yönlendiren fonksiyon. type, hangi API'ye istek atmak istediğimizi
  // belirttiğimiz parametre. companyIndex, initial olarak null.
  function handleMoviesListNavigate(type) {
    navigation.navigate('MoviesListPage', {
      name: type,
    });
  }

  function handleDetailPageNavigate(item) {
    navigation.navigate('DetailPage', {item: item});
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../Assets/images/disney.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.popular_movies_container}>
          <View style={styles.popular_movies_title_container}>
            <Text style={styles.popular_movies_title}>Popular Movies</Text>
            <Text
              style={styles.popular_movies_see_more}
              onPress={() => handleMoviesListNavigate('POPULAR')}>
              See More..
            </Text>
          </View>
          <FlatList
            data={popularMoviesData}
            renderItem={renderPopularMovies}
            horizontal
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
        <View style={styles.logo_container}>
          <FlatList
            data={logoArray}
            renderItem={renderGenres}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.recent_movies_container}>
          <View style={styles.popular_movies_title_container}>
            <Text style={styles.popular_movies_title}>Recent Movies</Text>
            <Text
              style={styles.popular_movies_see_more}
              onPress={() => handleMoviesListNavigate('RECENT')}>
              See More..
            </Text>
          </View>
          <FlatList
            data={recentMoviesData}
            renderItem={renderRecentMovies}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPage;
