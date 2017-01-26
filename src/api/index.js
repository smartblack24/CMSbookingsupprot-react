import * as fromSession from './session';
import * as fromBundles from './bundles';
import * as fromLicenses from './licenses';

export const login = (email, password) =>
  fromSession.login(email, password);

export const fetchBundles = () =>
  fromBundles.fetchBundles();

export const addBundle = bundle =>
  fromBundles.addBundle(bundle);

export const fetchLicenses = bundleId =>
  fromLicenses.fetchLicenses(bundleId);
