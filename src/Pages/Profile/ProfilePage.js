import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProfilePage.style';
import {useSelector, useDispatch} from 'react-redux';
import LoginButton from '../../Components/LoginButton';
import {removeUser} from '../../Redux/Features/Auth/AuthSlice';

const ProfilePage = () => {
  const {user} = useSelector(s => s.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(removeUser());
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <View style={styles.body_container}>
        <Text style={styles.text_infos}>
          First Name :
          {<Text style={styles.text_responses}>{`  ${user.firstName}`}</Text>}
        </Text>
        <Text style={styles.text_infos}>
          Last Name :
          {<Text style={styles.text_responses}>{`  ${user.lastName}`}</Text>}
        </Text>
        <Text style={styles.text_infos}>
          E-mail :
          {<Text style={styles.text_responses}>{`  ${user.email}`}</Text>}
        </Text>
        <Text style={styles.text_infos}>
          Gender :
          {<Text style={styles.text_responses}>{`  ${user.gender}`}</Text>}
        </Text>
        <LoginButton
          onClick={handleLogOut}
          loading={loading}
          buttonTitle={'Log Out'}
        />
      </View>
    </View>
  );
};

export default ProfilePage;
