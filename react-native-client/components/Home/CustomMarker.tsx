import React from 'react';
import {StyleSheet, Image} from 'react-native';

const CustomMarker = () => {
  return (
    <Image
      style={styles.image}
      source={require('../assets/Logo.png')}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});

export default CustomMarker;
