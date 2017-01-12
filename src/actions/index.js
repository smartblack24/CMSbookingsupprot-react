import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api/bundles'

export const setSearch = search => ({
  type: 'SET_SEARCH',
  searchFilter: search,
});

export const addBundle = bundle =>  (dispatch, getState) => {
  api.postBundle(bundle);
  return api.addBundle(bundle).then(
    response => {
      dispatch({
        type: 'ADD_BUNDLE',
        response: normalize(response, schema.bundle),
      })
    }
  )
};

export const fetchBundles = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCH_BUNDLES_REQUEST',
  });

  return api.fetchBundles().then(
    response => {
      dispatch({
        type: 'FETCH_BUNDLES_SUCCESS',
        response: normalize(response, schema.arrayOfBundles),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_BUNDLES_FAILURE',
        message: error.message || 'something went wrong with server',
      })
    }
  );
};
