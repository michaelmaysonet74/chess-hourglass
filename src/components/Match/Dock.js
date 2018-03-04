import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './MatchStyles';

class Dock extends Component {
  render() {
    return (
      <View style={styles.dockStyle}>

      </View>
    );
  }
}

// export default connect()(Dock);
export default Dock;