import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import styles from './MatchStyles';

class Dock extends Component {
  render() {
    return (
      <View style={styles.dockStyle}>
        <TouchableOpacity style={{marginTop: 4}}>
          <Icon
            name="restart"
            type="material-community"
            size={32}
            color="#464646"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="play"
            type="material-community"
            size={32}
            color="#464646"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// export default connect()(Dock);
export default Dock;