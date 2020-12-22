import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
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
        const doNothing = () => { };

        if (
            this.props.paused
            || (
                this.props.paused
                && !this.props.blackPressed
                && !this.props.whitePressed
            )
        ) {
            return doNothing;
        }

        if (this.props.isWhite) {
            if (!this.props.whitePressed) {
                return this.props.setWhitePressed;
            }
            else {
                return doNothing;
            }
        }
        else {
            if (!this.props.blackPressed) {
                return this.props.setBlackPressed;
            }
            else {
                return doNothing;
            }
        }
    }

    getStyle = () => {
        if (this.props.isWhite) {
            return this.whiteStyle;
        }
        return this.blackStyle;
    };

    renderTouchableCard = (time) => {
        const { backgroundColor, color, transform } = this.getStyle();
        const action = this.getAction();

        return (
            <TouchableOpacity onPress={() => action()}>
                <View style={[styles.counterCardStyle, { backgroundColor }]}>
                    <Counter
                        time={time}
                        style={[styles.counterCardTextStyle, { color, transform }]}
                    />
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return this.renderTouchableCard(this.props.timer.currentTime);
    }
}

const mapStateToProps = (state) => {
    return {
        paused,
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
