import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Main from './components/Main/Main';
import Match from './components/Match/Match';
import CustomSetup from './components/CustomSetup/CustomSetup';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="root" hideNavBar>
        <Scene
          key="main"
          component={Main}
          initial
          hideNavBar
        />
        <Scene
          key="match"
          component={Match}
          hideNavBar
        />
        <Scene
          key="setup"
          component={CustomSetup}
          hideNavBar
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;