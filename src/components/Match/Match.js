import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dock from './Dock';
import { Container, NavHeader } from './../Common';

class Match extends Component {
  render() {
    return (
      <Container>
        <NavHeader
          title={this.props.title}
          marginLeft={this.props.marginLeft}
        />
        <Dock />
      </Container>
    );
  }
}

// export default connect()(Match);
export default Match;