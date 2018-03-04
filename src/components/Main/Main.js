import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button, Container, NavHeader } from './../Common';
import styles from './MainStyles';

class Main extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.mainTitleStyle}>
          Chess Hourglass
        </Text>

        <View style={styles.mainButtonContainerStyle}>
          <Button
            onPress={() => {
              Actions.match({
                title: 'Fast Match',
                marginLeft: 40,
              });
            }}
          >
            Fast Match
          </Button>
        </View>

        <View style={styles.mainButtonContainerStyle}>
          <Button
            onPress={() => {
              Actions.match({
                title: 'Semi-Fast Match',
                marginLeft: 7,
              });
            }}
          >
            Semi-Fast Match
          </Button>
        </View>

        <View style={styles.mainButtonContainerStyle}>
            <Button onPress={() => Actions.setup()}>
              Custom Match
            </Button>
        </View>
      </Container>
    );
  }
}

export default Main;