import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import Input from '../Input';
import LoginButton from '../LoginButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validationSchema} from './Validation';
import ErrorMessage from './ErrorMessage';

const Form = ({styles, loading, handleLogin}) => {
  return (
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={handleLogin}
      validationSchema={validationSchema}>
      {({handleSubmit, handleChange, values, errors, touched}) => {
        const {username, password} = values;
        return (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style={styles}>
              <Input
                placeholder="Enter Username"
                onType={handleChange('username')}
                value={values.username}
              />
              <ErrorMessage errorValue={touched.username && errors.username} />
              <Input
                placeholder="Enter Password"
                onType={handleChange('password')}
                value={values.password}
                isSecure
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <LoginButton
                onClick={handleSubmit}
                loading={loading}
                buttonTitle={'Sign In'}
              />
            </View>
          </KeyboardAwareScrollView>
        );
      }}
    </Formik>
  );
};

export default Form;
