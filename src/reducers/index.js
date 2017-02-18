import { combineReducers } from 'redux';
import bundles, * as fromBundles from './bundles';
import licenses, * as fromLicenses from './licenses';
import searchFilter from './searchFilter';
import user, * as fromUser from './user';
import errors, * as fromErrors from './errors';
import aside, * as fromAside from './aside';
import resourceDetail,* as FromResourceDetail from './resourceDetail';

const bookApp = combineReducers({
  bundles,
  licenses,
  searchFilter,
  user,
  errors,
  aside,
  resourceDetail,
});

export default bookApp;

export const getFilteredBundles = state =>
  fromBundles.getFilteredBundles(state.bundles, state.searchFilter);

export const getBundleDetail = (state, id) =>
  fromBundles.getBundleDetail(state.bundles, id);

export const getFilteredLicenses = state =>
  fromLicenses.getFilteredLicenses(state.licenses, state.searchFilter);

export const getUser = state =>
  fromUser.getUser(state.user);

export const getErrors = state =>
  fromErrors.getErrors(state.errors);

export const getAside = state =>
  fromAside.getAside(state.aside);

export const getDetail = state =>
  FromResourceDetail.getDetail(state.resourceDetail);
