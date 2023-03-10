import React from 'react';
import {Text, View} from 'react-native';
import styles from './ProfilePage.style';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
  useSelector(s => console.log('Profile : ', s.auth.user));
  return (
    <View style={styles.container}>
      <Text>ProfilePage</Text>
    </View>
  );
};

export default ProfilePage;
