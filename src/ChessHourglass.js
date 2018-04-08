import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers);

const ChessHourglass = () => {
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
};

export { ChessHourglass, store };
