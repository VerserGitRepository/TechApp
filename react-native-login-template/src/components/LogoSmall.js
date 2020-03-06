import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logoSmall.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
     marginTop: 15,
     
  },
});

export default memo(Logo);
