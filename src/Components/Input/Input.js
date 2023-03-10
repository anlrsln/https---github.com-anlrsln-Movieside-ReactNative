import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, onType, value, isSecure}) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onType}
      value={value}
      secureTextEntry={isSecure}
    />
  </View>
);

export default Input;
