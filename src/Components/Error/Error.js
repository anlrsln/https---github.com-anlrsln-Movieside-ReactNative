import React from 'react';
import {Text, View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const Error = () => (
  <AnimatedLottieView source={require('../../Assets/error.json')} autoPlay />
);

export default Error;
