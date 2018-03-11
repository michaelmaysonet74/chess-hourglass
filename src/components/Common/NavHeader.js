import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { isIphoneSE } from './../../util';

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
    fontSize: isIphoneSE() ? (32 * .8) : 32,
    fontWeight: 'bold',
  },
});

const renderBackButton = (showBackButton) => {
  if (showBackButton) {
      return <NavButton buttonText="Back" onPress={() => Actions.pop()} />;
  }
};

const NavHeader = ({
  marginBottom = 0,
  marginLeft = 0,
  title,
  showBackButton = true
}) => {

  return (
    <View style={[styles.headerContainerStyle, {marginBottom}]}>
      {renderBackButton(showBackButton)}
      <Text
        style={
          [
            styles.headerTitleStyle,
            {
              marginLeft
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