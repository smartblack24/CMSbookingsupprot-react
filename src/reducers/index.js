import { combineReducers } from 'redux';
import bundles, * as fromBundles from './bundles';
import searchFilter from './searchFilter';
import user from './user';
import errors from './errors';

const bookApp = combineReducers({
  bundles,
  searchFilter,
  user,
  errors,
});

export default bookApp;

export const getFilteredBundles = state =>
  fromBundles.getFilteredBundles(state.bundles, state.searchFilter);
