import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Router from './Router';
// import reducers from './reducers';
// <Provider store={createStore(reducers)}>
// </Provider>

const ChessHourglass = () => {
    return (
      <Router />
    );
}

export default ChessHourglass;
