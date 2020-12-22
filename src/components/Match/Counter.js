import React, { Component } from 'react';
import { Text } from 'react-native';

class Counter extends Component {
    render() {
        return (
            <Text style={this.props.style}>
                {this.props.time}
            </Text>
        );
    }
}

export default Counter;
