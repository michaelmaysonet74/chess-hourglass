import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { isIphoneX, isIphonePlus, isIphoneSE } from './../../util';

const padding = isIphoneSE() ? 18 : 10;

const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: '#000000',
    flex: 1,
    paddingLeft: isIphonePlus() ? 30 : padding,
    paddingRight: isIphonePlus() ? 30 : padding,
    paddingTop: isIphoneX() ? 90 : 50,
  },
})

const Container = ({ children }) => {
  return (
    <View style={styles.ContainerStyle}>
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export { Container };