import {useReducer} from 'react';
import axios from 'axios';
import reducer from '../Reducer/reducer';
import initialState from '../States/initialState';

const usePost = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {loading, error, data} = state;

  const sendPostRequest = async (url, values) => {
    dispatch({type: 'FETCH_START'});
    try {
      const {data: responseData} = await axios.post(url, values);
      dispatch({type: 'FETCH_SUCCESS', payload: responseData});
    } catch (err) {
      dispatch({type: 'FETCH_ERROR', payload: 'ERROR FETCHING DATA'});
    }
  };
  return {loading, error, data, sendPostRequest};
};

export default usePost;
