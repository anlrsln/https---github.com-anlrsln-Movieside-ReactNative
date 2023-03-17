import {useReducer, useState} from 'react';
import axios from 'axios';
import initialState from '../States/initialState';
import reducer from '../Reducer/reducer';

const useFetchMovies = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {loading, error, data} = state;
  const [totalPages, setTotalPages] = useState(0);

  const getMovies = async (url, page) => {
    if (page === 1) dispatch({type: 'FETCH_START'});
    try {
      const {data: responseData} = await axios.get(url);
      const responseArray =
        page === 1 ? responseData.results : [...data, ...responseData.results];
      dispatch({type: 'FETCH_SUCCESS', payload: responseArray});
      setTotalPages(responseData.total_pages);
    } catch (error) {
      dispatch({type: 'FETCH_ERROR', payload: 'ERROR FETCHING DATA'});
    }
  };

  return {loading, error, data, totalPages, getMovies};
};

export default useFetchMovies;
