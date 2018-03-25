import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import Counter from './Counter';
import styles from './MatchStyles';
import { setBlackPressed, setWhitePressed } from '../../actions';

class CounterCard extends Component {
  blackStyle = {
    backgroundColor: '#353535',
    color: '#E5E5E5',
    transform: [
      {
        rotate: '180deg'
      },
    ],
  };

  whiteStyle = {
    backgroundColor: '#FFFFFF',
    color: '#353535'
  };

  getAction = () => {
    if (
      this.props.paused
      || (
        this.props.paused
        && !this.props.blackPressed
        && !this.props.whitePressed
      )
    ) {
      return () => {};
    }

    if (this.props.isWhite) {
      if (!this.props.whitePressed) {
          return this.props.setWhitePressed;
      } else {
        return () => {};
      }
    } else {
      if (!this.props.blackPressed) {
        return this.props.setBlackPressed;
      } else {
        return () => {};
      }
    }
  }

  getStyle = () => {
    if (this.props.isWhite) {
      return this.whiteStyle;
    }
    return this.blackStyle;
  };

  renderTouchableCard = () => {
    const {backgroundColor, color, transform} = this.getStyle();
    const action = this.getAction();

    return (
      <TouchableOpacity onPress={() => action()}>
        <View style={[styles.counterCardStyle, {backgroundColor}]}>
          <Counter
            time={this.props.initialTime}
            style={[styles.counterCardTextStyle, {color, transform}]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return this.renderTouchableCard();
  }
}

const mapStateToProps = (state) => {
  return {
    paused,
    initialTime,
    blackPressed,
    whitePressed
  } = state.match;
};

export default connect(
  mapStateToProps,
  {
    setBlackPressed,
    setWhitePressed
  }
)(CounterCard);