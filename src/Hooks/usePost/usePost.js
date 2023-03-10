import React, {useState} from 'react';
import axios from 'axios';

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const sendPostRequest = async (url, values) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, values);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return {loading, error, data, sendPostRequest};
};

export default usePost;
