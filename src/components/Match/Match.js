import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterCard from './CounterCard';
import Dock from './Dock';
import { Container, NavHeader } from './../Common';

class Match extends Component {
    render() {
        return (
            <Container>
                <NavHeader
                    title={this.props.title}
                    marginBottom={10}
                    marginLeft={this.props.marginLeft}
                />
                <CounterCard
                    timer={this.props.blackTimer}
                />
                <CounterCard
                    timer={this.props.whiteTimer}
                    isWhite
                />
                <Dock />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { blackTimer, whiteTimer } = state.match;
};

export default connect(mapStateToProps)(Match);
