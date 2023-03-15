import React, {useEffect} from 'react';
import {Text, View, FlatList, ScrollView, Image} from 'react-native';
import styles from './MainPage.style';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Components/Loading';
import RecentMovieCard from '../../Components/Cards/MovieCard';
import apiUrls from '../../Constants/ApiUrls';
import PopularMovieCard from '../../Components/Cards/PopularMovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {setGenres} from '../../Redux/Features/Genres/GenreSlice';
import MainRecentCard from '../../Components/Cards/MainRecentCard';
import LogoCard from '../../Components/Cards/LogoCard';

let page = 1;

const MainPage = ({navigation}) => {
  const dispatch = useDispatch();
  const {genres} = useSelector(s => s.genres);
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
  // belirttiğimiz parametre. companyIndex, initial olarak null. companyIndex'i kullanmak istediğimiz yer, ana sayfadaki yapım şirket'
  // lerinin (disney,marvel) hangisinin üzerine tıklandığını anlamak için index numarası belirttik. Bu sayede yine
  // MovieListPage sayfasına gidecek ancak index değerine göre API'ye istek atacak.
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
            data={popularMoviesData.results}
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
            data={recentMoviesData.results}
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
