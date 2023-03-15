import {useReducer} from 'react';
import axios from 'axios';
import reducer from '../Reducer/reducer';
import initialState from '../States/initialState';

const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {loading, error, data} = state;

  const getData = async url => {
    dispatch({type: 'FETCH_START'});
    try {
      const {data: responseData} = await axios.get(url);
      dispatch({type: 'FETCH_SUCCESS', payload: responseData});
    } catch (err) {
      dispatch({type: 'FETCH_ERROR', payload: 'ERROR FETCHING DATA'});
    }
  };
  return {loading, error, data, getData};
};

export default useFetch;
