import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Button, Container, NavHeader } from './../Common';
import styles from './MainStyles';
import { setInitialTime } from '../../actions';

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
              this.props.setInitialTime('5 : 00');
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
              this.props.setInitialTime('10 : 00');
            }}
          >
            Semi-Fast Match
          </Button>
        </View>

        {/* <View style={styles.mainButtonContainerStyle}>
            <Button onPress={() => Actions.setup()}>
              Custom Match
            </Button>
        </View> */}
      </Container>
    );
  }
}

export default connect(null, { setInitialTime })(Main);