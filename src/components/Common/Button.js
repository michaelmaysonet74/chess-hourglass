import React, { Component } from 'React';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    // backgroundColor: '#454545'
    backgroundColor: '#353535',
    // borderColor: '#C2C2C2',
    borderColor: '#B2B2B2',
    borderRadius: 20,
    borderWidth: 1,
    height: 120,
    justifyContent: 'center',
    width: 355,
  },
  buttonTextStyle: {
    // color: '#E5E5E5',
    color: '#D5D5D5',
    fontSize: 28,
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