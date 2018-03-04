import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  ContainerStyle: {
    // backgroundColor: '#2B2B2B',
    backgroundColor: '#1B1B1B',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 90,
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