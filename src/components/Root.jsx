import React from 'react';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import BundleTable from '../containers/BundleTable';
import LicensesTable from '../containers/LicensesTable';
import LoginContainer from '../containers/LoginContainer';
import Material from './Material';

injectTapEventPlugin();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Material}>
        <Route path="/bundles" component={BundleTable} />
        <Route path="/bundles/(:bundleId)" component={LicensesTable} />
      </Route>
      <Route path="/login"  component={LoginContainer} />
    </Router>
  </Provider>
);

export default Root;
