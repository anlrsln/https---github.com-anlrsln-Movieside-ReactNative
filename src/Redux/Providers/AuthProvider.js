import React, {useEffect} from 'react';
import Router from '../../Router';
import {useDispatch, useSelector} from 'react-redux';
import {setUser, setLoading} from '../Features/Auth/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../Components/Loading';

const AuthProvider = () => {
  const dispatch = useDispatch();
  const {user, loading} = useSelector(s => s.auth);

  function getUser() {
    AsyncStorage.getItem('@USER').then(response => {
      if (response) {
        dispatch(setUser(JSON.parse(response)));
      }
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  return loading ? <Loading /> : <Router />;
};

export default AuthProvider;
