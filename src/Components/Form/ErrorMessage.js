import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ErrorMessage = ({errorValue}) => {
  return errorValue ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{errorValue}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  errorContainer: {
    marginVertical: 5,
    marginLeft: 20,
  },
  errorText: {
    color: '#f50057',
    fontWeight: 'bold',
  },
});

export default ErrorMessage;
