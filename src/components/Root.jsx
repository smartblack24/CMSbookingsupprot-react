import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import Bundles from './Bundles';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="bundles" component={Bundles} />
    </Router>
  </Provider>
);

export default Root;
