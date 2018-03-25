import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Router from './Router';
import reducers from './reducers';

const ChessHourglass = () => {
    return (
      <Provider store={ createStore(reducers) }>
          <Router />
      </Provider>
    );
};

export default ChessHourglass;
