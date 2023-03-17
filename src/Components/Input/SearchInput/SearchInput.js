import React from 'react';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import styles from './SearchInput.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchInput = ({placeholder, setText, onClick, value}) => (
  <View style={styles.container}>
    <View style={styles.search_container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={setText}
        value={value}
      />
      <TouchableWithoutFeedback onPress={onClick}>
        <Icon name="magnify" size={30} style={styles.icon} />
      </TouchableWithoutFeedback>
    </View>
  </View>
);

export default SearchInput;
