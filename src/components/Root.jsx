import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Bundles from './Bundles';
import Login from './Login';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute  component={Login} />
        <Route path="bundles" component={Bundles} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
