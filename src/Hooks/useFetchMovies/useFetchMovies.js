import {useReducer} from 'react';
import axios from 'axios';
import initialState from '../States/initialState';
import reducer from '../Reducer/reducer';

const useFetchMovies = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {loading, error, data} = state;

  const getMovies = async (url, page) => {
    if (page === 1) dispatch({type: 'FETCH_START'});
    try {
      const {data: responseData} = await axios.get(url);
      if (page > responseData.total_pages) {
        return;
      }
      const responseArray =
        page === 1 ? responseData.results : [...data, ...responseData.results];
      dispatch({type: 'FETCH_SUCCESS', payload: responseArray});
    } catch (error) {
      dispatch({type: 'FETCH_ERROR', payload: 'ERROR FETCHING DATA'});
    }
  };

  return {loading, error, data, getMovies};
};

export default useFetchMovies;
