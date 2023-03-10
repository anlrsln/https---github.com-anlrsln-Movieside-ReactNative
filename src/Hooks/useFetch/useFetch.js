import {useState} from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async url => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };
  return {loading, error, data, getData};
};

export default useFetch;
