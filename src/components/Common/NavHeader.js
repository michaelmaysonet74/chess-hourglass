import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { NavButton } from './NavButton';

const styles = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerTitleStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

const renderBackButton = (showBackButton) => {
  if (showBackButton) {
      return <NavButton buttonText="Back" onPress={() => Actions.pop()} />;
  }
};

const NavHeader = ({ marginLeft, title, showBackButton = true }) => {
  return (
    <View style={styles.headerContainerStyle}>
      {renderBackButton(showBackButton)}
      <Text
        style={
          [
            styles.headerTitleStyle,
            {
              marginLeft: marginLeft
            }
          ]
        }
      >
        {title}
      </Text>
    </View>
  );
};

export { NavHeader };