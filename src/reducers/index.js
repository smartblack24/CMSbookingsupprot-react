import { combineReducers } from 'redux';
import bundles, * as fromBundles from './bundles';
import searchFilter from './searchFilter';

const bookApp = combineReducers({
  bundles,
  searchFilter,
});

export default bookApp;

export const getFilteredBundles = state =>
  fromBundles.getFilteredBundles(state.bundles, state.searchFilter);
