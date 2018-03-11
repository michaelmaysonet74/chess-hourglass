import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './MatchStyles';

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

  getStyle() {
    if (this.props.isWhite) {
      return this.whiteStyle;
    }

    return this.blackStyle;
  }

  render() {
    const {backgroundColor, color, transform} = this.getStyle();

    return (
      <TouchableOpacity style={[styles.counterCardStyle, {backgroundColor}]}>
        <Text style={[styles.counterCardTextStyle, {color, transform}]}>
          5 : 00
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CounterCard;