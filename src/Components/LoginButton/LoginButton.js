import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './LoginButton.style';

const LoginButton = ({onClick, loading}) => (
  <TouchableOpacity style={styles.container} onPress={onClick}>
    {loading ? (
      <ActivityIndicator size={'small'} color="white" />
    ) : (
      <Text style={styles.button_text}>Sign In</Text>
    )}
  </TouchableOpacity>
);

export default LoginButton;
