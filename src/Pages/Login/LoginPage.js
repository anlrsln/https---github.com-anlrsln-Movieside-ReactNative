import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from './LoginPage.style';
import Form from '../../Components/Form/Form';
import usePost from '../../Hooks/usePost';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';
import {setUser} from '../../Redux/Features/Auth/AuthSlice';
import Error from '../../Components/Error';

//"username": "atuny0",
//"password": "9uQFF1Lh",

const LoginPage = ({navigation}) => {
  const loginEndpoint = 'auth/login';
  const dispatch = useDispatch();
  const {loading, data, error, sendPostRequest} = usePost();

  function handleLogin(formValues) {
    sendPostRequest(`${Config.BASE_USER_URL}${loginEndpoint}`, formValues);
  }

  if (error) {
    return <Error />;
  }

  if (data) {
    const {token} = data;
    if (token) {
      dispatch(setUser(data));
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagebackground}
        source={require('../../Assets/login.png')}>
        <View style={styles.header_container}></View>
        <Form
          styles={styles.body_container}
          loading={loading}
          handleLogin={handleLogin}
        />
      </ImageBackground>
    </View>
  );
};

export default LoginPage;
