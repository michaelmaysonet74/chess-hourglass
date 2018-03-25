import React, { Component } from 'react';

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
        <CounterCard />
        <CounterCard isWhite />
        <Dock />
      </Container>
    );
  }
}

export default Match;