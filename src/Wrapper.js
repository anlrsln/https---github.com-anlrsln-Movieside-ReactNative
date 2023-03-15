import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Redux/App/store';
import AuthProvider from './Redux/Providers/AuthProvider';

const Wrapper = () => {
  return (
    <Provider store={store}>
      <AuthProvider />
    </Provider>
  );
};

export default Wrapper;
