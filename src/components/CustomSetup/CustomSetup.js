import React, { Component } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Button, Container, NavHeader } from './../Common';
import CustomSetupCard from './CustomSetupCard';
import styles from './CustomSetupStyles';

import { createCustomInitialTime } from '../../utils';
import {
    setCustomHours,
    setCustomMins,
    setCustomSecs,
    setInitialTime,
} from '../../actions';

const MARGIN_LEFT = 14;

class CustomSetup extends Component {
    componentWillMount() {
        this.props.setCustomHours('');
        this.props.setCustomMins('');
        this.props.setCustomSecs('');
    }

    handleOnPress = () => {
        Actions.match({
            title: 'Custom Match',
            marginLeft: MARGIN_LEFT,
        });
        this.props.setInitialTime(
            createCustomInitialTime(this.props)
        );
    }

    render() {
        return (
            <Container>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View>
                        <NavHeader
                            title="Custom Setup"
                            marginLeft={MARGIN_LEFT}
                        />

                        <CustomSetupCard />

                        <View style={styles.buttonContainerStyle}>
                            <Button onPress={this.handleOnPress}>
                                Start
		          </Button>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { hr, min, sec } = state.customSetup;
};

export default connect(mapStateToProps,
    {
        setInitialTime,
        setCustomHours,
        setCustomMins,
        setCustomSecs,
    }
)(CustomSetup);
