import React, { Component } from 'React';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { isIphoneSE } from './../../util';

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#353535',
    borderColor: '#B2B2B2',
    borderRadius: 20,
    borderWidth: 1,
    height: isIphoneSE() ? (120 * .8) : 120,
    justifyContent: 'center',
    width: isIphoneSE() ? (355 * .8) : 355,
  },
  buttonTextStyle: {
    color: '#D5D5D5',
    fontSize: isIphoneSE() ? (28 * .8) : 28,
    fontWeight: 'bold',
  },
});

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            {children}
          </Text>
      </View>
    </TouchableOpacity>
  );
};

export { Button };