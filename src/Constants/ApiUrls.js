import Config from 'react-native-config';

const baseApiUrl = Config.BASE_MOVIE_API_URL;
const apiKey = Config.MOVIE_API_KEY;

const endpoints = {
  recentEndpoint: Config.RECENT_ENDPOINT,
  genresEndpoint: Config.GENRES_ENDPOINT,
  popularMoviesEndpoint: Config.POPULARS_ENDPOINT,
};

export const apiUrls = {
  popularMoviesUrl: baseApiUrl + endpoints.popularMoviesEndpoint + apiKey,
  recentMoviesUrl: baseApiUrl + endpoints.recentEndpoint + apiKey,
  genresUrl: baseApiUrl + endpoints.genresEndpoint + apiKey,
};

export default apiUrls;
