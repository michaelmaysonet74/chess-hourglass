import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import styles from './MatchStyles';
import { startTimer, pauseTimer, restartTimer } from '../../actions';

class Dock extends Component {
  renderStartPauseBtn = () => {
    const { paused, startTimer, pauseTimer } = this.props;
    const iconName = paused ? 'play' : 'pause';
    const action = paused ? startTimer : pauseTimer;

    return (
      <TouchableOpacity onPress={ () => action() }>
          <Icon
            name={iconName}
            type="material-community"
            size={32}
            color="#464646"
          />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.dockStyle}>
        <TouchableOpacity
          style={{marginTop: 4}}
          onPress={() => this.props.restartTimer()}
        >
          <Icon
            name="restart"
            type="material-community"
            size={32}
            color="#464646"
          />
        </TouchableOpacity>
        { this.renderStartPauseBtn() }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { paused } = state.match;
};

export default connect(mapStateToProps,
  {
    startTimer,
    pauseTimer,
    restartTimer,
  }
)(Dock);