import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Button, Container, NavHeader } from './../Common';
import styles from './CustomSetupStyles';

const MARGIN_LEFT = 14;

class CustomSetup extends Component {
  handleOnPress = () => {
    Actions.match({
      title: 'Custom Match',
      marginLeft: MARGIN_LEFT,
    });
  }

  render() {
    return (
      <Container>
        <NavHeader
          title="Custom Setup"
          marginLeft={MARGIN_LEFT}
        />

        <View style={styles.buttonContainerStyle}>
          <Button onPress={this.handleOnPress}>
            Start
          </Button>
        </View>
      </Container>
    );
  }
}

// export default connect()(CustomSetup);
export default CustomSetup;