import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './Redux/App/store';
import AuthProvider from './Redux/Providers/AuthProvider';

const Wrapper = ({params}) => {
  return (
    <Provider store={store}>
      <AuthProvider />
    </Provider>
  );
};

export default Wrapper;
