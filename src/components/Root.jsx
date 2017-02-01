import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Bundles from './bundle/Bundles';
import Licenses from './license/Licenses';
import LoginContainer from '../containers/LoginContainer';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute  component={LoginContainer} />
        <Route path="/bundles" component={Bundles} />
        <Route path="/bundles/(:bundleId)" component={Licenses} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
