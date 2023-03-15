import React from 'react';
import {Text, View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import Theme from '../../Assets/Theme';

const Loading = () => (
  <View style={{flex: 1, backgroundColor: Theme.main}}>
    <AnimatedLottieView
      source={require('../../Assets/lottie/loading.json')}
      autoPlay
    />
  </View>
);

export default Loading;
