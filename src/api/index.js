import * as fromSession from './session';
import * as fromBundles from './bundles';

export const login = (email, password) =>
  fromSession.login(email, password);

export const fetchBundles = () =>
  fromBundles.fetchBundles();

export const addBundle = bundle =>
  fromBundles.addBundle(bundle);
