import React from 'react';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import Bundles from './bundle/Bundles';
import Licenses from './license/Licenses';
import LoginContainer from '../containers/LoginContainer';
import Material from './Material';

injectTapEventPlugin();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Material}>
        <Route path="/bundles" component={Bundles} />
        <Route path="/bundles/(:bundleId)" component={Licenses} />
      </Route>
      <Route path="/login"  component={LoginContainer} />
    </Router>
  </Provider>
);

export default Root;
