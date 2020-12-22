import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Input } from './../Common';
import styles from './CustomSetupStyles';

import { correctHours, correctMinsAndSecs } from '../../utils';
import { setCustomHours, setCustomMins, setCustomSecs } from '../../actions';

class CustomSetupCard extends Component {
    render() {
        return (
            <View style={styles.customCardStyle}>
                <Input
                    placeholder="hr"
                    value={this.props.hr}
                    onChangeText={
                        (text) => this.props.setCustomHours(correctHours(text))
                    }
                />

                <Text style={styles.customCardTextStyle}>
                    :
        </Text>

                <Input
                    placeholder="min"
                    value={this.props.min}
                    onChangeText={
                        (text) => this.props.setCustomMins(correctMinsAndSecs(text))
                    }
                />

                <Text style={styles.customCardTextStyle}>
                    :
        </Text>

                <Input
                    placeholder="sec"
                    value={this.props.sec}
                    onChangeText={
                        (text) => this.props.setCustomSecs(correctMinsAndSecs(text))
                    }
                />
            </View>
        );
    }
};

const mapStateToProps = (state) => {
    return { hr, min, sec } = state.customSetup;
};

export default connect(mapStateToProps,
    {
        setCustomHours,
        setCustomMins,
        setCustomSecs
    }
)(CustomSetupCard);
