import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  navButtonStyle: {
    alignItems: 'center',
    // backgroundColor: '#FCFAFA',
    backgroundColor: '#ECEAEA',
    // borderColor: '#C2C2C2',
    borderColor: '#B2B2B2',
    borderRadius: 20,
    borderWidth: 1,
    height: 26,
    justifyContent: 'center',
    width: 58,
  },
  navButtonTextStyle: {
    // color: '#454545',
    color: '#353535',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

const NavButton = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.navButtonStyle}>
        <Text style={styles.navButtonTextStyle}>
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { NavButton };