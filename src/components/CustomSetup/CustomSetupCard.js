import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Input } from './../Common';
import styles from './CustomSetupStyles';

class CustomSetupCard extends Component {
  render() {
    return (
      <View style={styles.customCardStyle}>
				<Input
					placeholder="hr"
				/>

        <Text style={styles.customCardTextStyle}>
          :
        </Text>

				<Input
					placeholder="min"
				/>

        <Text style={styles.customCardTextStyle}>
          :
        </Text>

				<Input
					placeholder="sec"
				/>
      </View>
    );
  }
};

export default CustomSetupCard;